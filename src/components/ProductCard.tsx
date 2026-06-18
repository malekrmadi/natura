import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useApp } from "../store";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  const { lang, addToCart } = useApp();
  return (
    <div className="product-card">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="product-media">
        <img src={product.image} alt={product.name[lang]} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag[lang]}</span>}
      </Link>
      <div className="product-body">
        <span className="product-cat">{product.category === "hair" ? (lang === "fr" ? "Cheveux" : "الشعر") : product.category === "oils" ? (lang === "fr" ? "Huiles" : "زيوت") : (lang === "fr" ? "Spa" : "سبا")}</span>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="product-name">{product.name[lang]}</h3>
        </Link>
        <div className="product-foot">
          <div className="product-price">
            {product.price} <small>DT</small>
            {product.oldPrice && <small style={{ textDecoration: "line-through", marginLeft: 6, opacity: 0.6 }}>{product.oldPrice}</small>}
          </div>
          <button className="add-btn" onClick={() => addToCart(product.id)} aria-label="Add to cart">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
