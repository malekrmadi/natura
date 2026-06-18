import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useApp } from "../store";
import { t } from "../data/i18n";
import { products, categories, type Category } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Boutique — Natura Tunisia" },
      { name: "description", content: "Découvrez notre collection complète de cosmétiques naturels tunisiens." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { lang } = useApp();
  const tt = t[lang];
  const [cat, setCat] = useState<Category | "all">("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (q && !p.name[lang].toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, q, lang]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{tt.catalog.title}</h1>
          <p>{tt.catalog.sub}</p>
        </div>
      </div>
      <div className="container">
        <div className="catalog-layout">
          <aside className="filters">
            <div className="search-box">
              <Search size={18} />
              <input placeholder={tt.catalog.search} value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <h4>{tt.catalog.category}</h4>
            <div className="filter-group">
              {categories.map((c) => (
                <label key={c.id}>
                  <input type="radio" name="cat" checked={cat === c.id} onChange={() => setCat(c.id)} />
                  {c[lang]}
                </label>
              ))}
            </div>
          </aside>
          <div>
            <div className="chips" style={{ justifyContent: "flex-start" }}>
              {categories.map((c) => (
                <button key={c.id} className={`chip ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>
                  {c[lang]}
                </button>
              ))}
            </div>
            {filtered.length === 0 ? (
              <p style={{ textAlign: "center", padding: "3rem", color: "var(--ink-soft)" }}>
                {lang === "fr" ? "Aucun produit trouvé." : "لم يتم العثور على منتجات."}
              </p>
            ) : (
              <div className="product-grid">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
