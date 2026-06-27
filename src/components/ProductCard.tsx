import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useApp } from "../store";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  const { lang, addToCart } = useApp();

  const categoryLabel =
    product.category === "soin"
      ? lang === "fr" ? "Soin" : "عناية"
      : product.category === "outil"
      ? lang === "fr" ? "Outil" : "أداة"
      : lang === "fr" ? "Accessoire" : "إكسسوار";

  const formatPrice = (price: number) => price.toFixed(3);

  return (
    <div className="product-card">
      <Link to={`/product/${product.slug}`} className="product-media">
        <img src={product.image} alt={product.name[lang]} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag[lang]}</span>}
      </Link>
      <div className="product-body">
        <span className="product-cat">{categoryLabel}</span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name">{product.name[lang]}</h3>
        </Link>
        <div className="product-foot">
          <div className="product-price">
            {formatPrice(product.price)} <small>DT</small>
            {product.oldPrice && (
              <span style={{ textDecoration: "line-through", marginLeft: 6, opacity: 0.6 }}>
                {formatPrice(product.oldPrice)} DT
              </span>
            )}
          </div>
          <button className="add-btn" onClick={() => addToCart(product.id)} aria-label="Add to cart">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
