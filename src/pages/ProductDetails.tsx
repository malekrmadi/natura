import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Leaf, Truck, Wallet, Minus, Plus } from "lucide-react";
import { useApp } from "../store";
import { t } from "../data/i18n";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, addToCart } = useApp();
  const tt = t[lang];

  const product = products.find((x) => x.slug === slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name[lang]} — Natura`;
    } else {
      document.title = lang === "fr" ? "Produit introuvable — Natura" : "منتج غير موجود — ناتورا";
    }
  }, [product, lang]);

  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "bene" | "ing" | "use">("desc");

  // Reset indices when slug changes
  useEffect(() => {
    setImgIdx(0);
    setQty(1);
    setTab("desc");
  }, [slug]);

  if (!product) {
    return (
      <div className="container" style={{ padding: "5rem 0", textAlign: "center" }}>
        <h1>{lang === "fr" ? "Produit introuvable" : "المنتج غير موجود"}</h1>
        <Link to="/catalog" className="btn btn-primary" style={{ marginTop: "2rem" }}>
          {lang === "fr" ? "Voir la boutique" : "اطلع على المتجر"}
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const buyNow = () => {
    addToCart(product.id, qty);
    navigate("/checkout");
  };

  return (
    <div className="container">
      <div className="pd">
        <div className="pd-gallery">
          <div className="pd-main-img">
            <img src={product.gallery[imgIdx]} alt={product.name[lang]} width={900} height={900} />
          </div>
          <div className="pd-thumbs">
            {product.gallery.map((g: string, i: number) => (
              <button key={i} className={imgIdx === i ? "active" : ""} onClick={() => setImgIdx(i)}>
                <img src={g} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
        <div className="pd-info">
          <span className="product-cat">{product.category === "hair" ? (lang === "fr" ? "Cheveux" : "الشعر") : product.category === "oils" ? (lang === "fr" ? "Huiles" : "زيوت") : (lang === "fr" ? "Spa" : "سبا")}</span>
          <h1>{product.name[lang]}</h1>
          <div className="stars">★★★★★ <span style={{ color: "var(--ink-soft)", fontSize: "0.9rem", marginLeft: 8 }}>(127 {lang === "fr" ? "avis" : "تقييم"})</span></div>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem", marginTop: "1rem" }}>{product.short[lang]}</p>
          <div className="pd-price">
            <span className="now">{product.price} DT</span>
            {product.oldPrice && <span style={{ textDecoration: "line-through", color: "var(--ink-soft)" }}>{product.oldPrice} DT</span>}
            <span className="unit">/ {product.unit[lang]}</span>
          </div>
          <div className="qty-row">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-lg" style={{ flex: "1 1 200px" }} onClick={() => addToCart(product.id, qty)}>{tt.pd.add}</button>
            <button className="btn btn-gold btn-lg" style={{ flex: "1 1 200px" }} onClick={buyNow}>{tt.pd.buy}</button>
          </div>
          <div className="pd-trust">
            <div><Leaf size={20} /> {tt.pd.trust[0]}</div>
            <div><Truck size={20} /> {tt.pd.trust[1]}</div>
            <div><Wallet size={20} /> {tt.pd.trust[2]}</div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ padding: "3rem 0" }}>
        <div className="tabs">
          <button className={`tab-btn ${tab === "desc" ? "active" : ""}`} onClick={() => setTab("desc")}>{tt.pd.tabs.desc}</button>
          <button className={`tab-btn ${tab === "bene" ? "active" : ""}`} onClick={() => setTab("bene")}>{tt.pd.tabs.bene}</button>
          <button className={`tab-btn ${tab === "ing" ? "active" : ""}`} onClick={() => setTab("ing")}>{tt.pd.tabs.ing}</button>
          <button className={`tab-btn ${tab === "use" ? "active" : ""}`} onClick={() => setTab("use")}>{tt.pd.tabs.use}</button>
        </div>
        <div className="tab-content" style={{ maxWidth: 760 }}>
          {tab === "desc" && <p>{product.short[lang]}</p>}
          {tab === "bene" && <ul>{product.benefits[lang].map((b: string, i: number) => <li key={i}>{b}</li>)}</ul>}
          {tab === "ing" && <p>{product.ingredients[lang]}</p>}
          {tab === "use" && <p>{product.usage[lang]}</p>}
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <h2>{tt.pd.related}</h2>
          </div>
          <div className="product-grid">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
