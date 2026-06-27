import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Leaf, Truck, Wallet, Minus, Plus, Package, Star } from "lucide-react";
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
      document.title = `${product.name[lang]} — Herbia`;
    } else {
      document.title = lang === "fr" ? "Produit introuvable — Herbia" : "منتج غير موجود — هيربيا";
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

  // Find the sibling variant if any
  const siblingProduct = product.sibling ? products.find((p) => p.slug === product.sibling) : null;

  // Determine which is standard and which is pack
  const standardVariant = product.isPack ? siblingProduct : product;
  const packVariant = product.isPack ? product : siblingProduct;

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id && !p.isPack
  ).slice(0, 4);

  const buyNow = () => {
    addToCart(product.id, qty);
    navigate("/checkout");
  };

  const formatPrice = (price: number) => price.toFixed(3);

  return (
    <div className="container">
      <div className="pd">
        <div className="pd-gallery">
          <div className="pd-main-img">
            <img src={product.gallery[imgIdx]} alt={product.name[lang]} width={900} height={900} />
          </div>
          {product.gallery.length > 1 && (
            <div className="pd-thumbs">
              {product.gallery.map((g: string, i: number) => (
                <button key={i} className={imgIdx === i ? "active" : ""} onClick={() => setImgIdx(i)}>
                  <img src={g} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="pd-info">
          <span className="product-cat">
            {product.category === "soin"
              ? lang === "fr" ? "Soin" : "عناية"
              : product.category === "outil"
              ? lang === "fr" ? "Outil" : "أداة"
              : lang === "fr" ? "Accessoire" : "إكسسوار"}
          </span>
          <h1>{product.name[lang]}</h1>
          <div className="stars">
            <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <span style={{ color: "var(--ink-soft)", fontSize: "0.9rem", marginLeft: 8 }}>
              (127 {lang === "fr" ? "avis" : "تقييم"})
            </span>
          </div>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem", marginTop: "1rem" }}>
            {product.short[lang]}
          </p>
          <div className="pd-price">
            <span className="now">{formatPrice(product.price)} DT</span>
            {product.oldPrice && (
              <span style={{ textDecoration: "line-through", color: "var(--ink-soft)" }}>
                {formatPrice(product.oldPrice)} DT
              </span>
            )}
            <span className="unit">/ {product.unit[lang]}</span>
          </div>

          {/* VARIANT SELECTOR */}
          {(standardVariant || packVariant) && (
            <div style={{ margin: "1.5rem 0" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem", color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {lang === "fr" ? "Choisir une option" : "اختر خيارًا"}
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {standardVariant && (
                  <button
                    onClick={() => navigate(`/product/${standardVariant.slug}`)}
                    style={{
                      flex: "1 1 180px",
                      padding: "0.9rem 1.1rem",
                      border: `2px solid ${!product.isPack ? "var(--green-dark)" : "var(--line)"}`,
                      borderRadius: "12px",
                      background: !product.isPack ? "rgba(var(--green-dark-rgb, 44,95,66),0.07)" : "var(--white)",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                      <Leaf size={15} color="var(--green-dark)" />
                      <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--ink)" }}>
                        {lang === "fr" ? "Standard" : "قياسي"}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--green-dark)" }}>
                      {formatPrice(standardVariant.price)} DT
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)", marginTop: "0.2rem" }}>
                      {standardVariant.unit[lang]}
                    </div>
                  </button>
                )}
                {packVariant && (
                  <button
                    onClick={() => navigate(`/product/${packVariant.slug}`)}
                    style={{
                      flex: "1 1 180px",
                      padding: "0.9rem 1.1rem",
                      border: `2px solid ${product.isPack ? "var(--gold)" : "var(--line)"}`,
                      borderRadius: "12px",
                      background: product.isPack ? "rgba(212,175,55,0.08)" : "var(--white)",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                      <Package size={15} color="var(--gold)" />
                      <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--ink)" }}>
                        {lang === "fr" ? "Pack / Duo" : "باقة / ثنائي"}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--gold, #b8860b)" }}>
                      {formatPrice(packVariant.price)} DT
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--ink-soft)", marginTop: "0.2rem" }}>
                      {packVariant.unit[lang]}
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}

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
