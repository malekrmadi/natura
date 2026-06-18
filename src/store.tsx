import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./data/i18n";
import { products, type Product } from "./data/products";

interface CartItem { id: string; qty: number; }
interface AppState {
  lang: Lang;
  setLang: (l: Lang) => void;
  cart: CartItem[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  cartProducts: { product: Product; qty: number }[];
  toast: string | null;
  showToast: (msg: string) => void;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const l = (localStorage.getItem("natura.lang") as Lang) || "fr";
    setLangState(l);
    try {
      const c = JSON.parse(localStorage.getItem("natura.cart") || "[]");
      if (Array.isArray(c)) setCart(c);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("natura.cart", JSON.stringify(cart));
  }, [cart]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("natura.lang", l);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const addToCart = (id: string, qty = 1) => {
    setCart((c) => {
      const existing = c.find((i) => i.id === id);
      if (existing) return c.map((i) => i.id === id ? { ...i, qty: i.qty + qty } : i);
      return [...c, { id, qty }];
    });
    const p = products.find(p => p.id === id);
    if (p) showToast(lang === "fr" ? `✓ ${p.name.fr} ajouté au panier` : `✓ تمت إضافة ${p.name.ar} للسلة`);
  };

  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.id !== id));
  const updateQty = (id: string, qty: number) => {
    if (qty < 1) return removeFromCart(id);
    setCart((c) => c.map((i) => i.id === id ? { ...i, qty } : i));
  };
  const clearCart = () => setCart([]);

  const cartProducts = cart
    .map((i) => ({ product: products.find((p) => p.id === i.id)!, qty: i.qty }))
    .filter((x) => x.product);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cartProducts.reduce((s, { product, qty }) => s + product.price * qty, 0);

  return (
    <Ctx.Provider value={{ lang, setLang, cart, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal, cartProducts, toast, showToast }}>
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
