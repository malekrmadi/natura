import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Minus, Plus, X, ShoppingBag, Wallet } from "lucide-react";
import { useApp } from "../store";
import { t } from "../data/i18n";

export default function Cart() {
  const { lang, cartProducts, updateQty, removeFromCart, cartTotal } = useApp();
  const tt = t[lang];

  useEffect(() => {
    document.title = lang === "fr" ? "Mon Panier — Herbia" : "سلة المشتريات — هيربيا";
  }, [lang]);

  const shipping = cartTotal >= 100 || cartTotal === 0 ? 0 : 8;
  const total = cartTotal + shipping;

  if (cartProducts.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <ShoppingBag size={64} strokeWidth={1.2} />
          <h2>{tt.cartPage.empty}</h2>
          <p>{tt.cartPage.emptyDesc}</p>
          <Link to="/catalog" className="btn btn-primary btn-lg">{tt.cartPage.continue}</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero"><div className="container"><h1>{tt.cartPage.title}</h1></div></div>
      <div className="container">
        <div className="cart-layout">
          <div>
            {cartProducts.map(({ product, qty }) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name[lang]} />
                <div>
                  <h3>{product.name[lang]}</h3>
                  <div className="price">{product.price} DT / {product.unit[lang]}</div>
                </div>
                <div className="qty">
                  <button onClick={() => updateQty(product.id, qty - 1)}><Minus size={14} /></button>
                  <span>{qty}</span>
                  <button onClick={() => updateQty(product.id, qty + 1)}><Plus size={14} /></button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <strong style={{ color: "var(--green-darker)" }}>{product.price * qty} DT</strong>
                  <button className="remove-btn" onClick={() => removeFromCart(product.id)} aria-label="Remove"><X size={18} /></button>
                </div>
              </div>
            ))}
          </div>
          <aside className="summary">
            <h3>{lang === "fr" ? "Récapitulatif" : "ملخص الطلب"}</h3>
            <div className="summary-row"><span>{tt.cartPage.subtotal}</span><span>{cartTotal} DT</span></div>
            <div className="summary-row"><span>{tt.cartPage.shipping}</span><span>{shipping === 0 ? tt.cartPage.free : `${shipping} DT`}</span></div>
            <div className="summary-row total"><span>{tt.cartPage.total}</span><span>{total} DT</span></div>
            <div className="cod-banner">
              <Wallet size={20} />
              <span>{tt.cartPage.cod}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-lg btn-block">{tt.cartPage.checkout}</Link>
            <Link to="/catalog" style={{ display: "block", textAlign: "center", marginTop: "1rem", color: "var(--green-dark)", fontWeight: 600 }}>{tt.cartPage.continue}</Link>
          </aside>
        </div>
      </div>
    </>
  );
}
