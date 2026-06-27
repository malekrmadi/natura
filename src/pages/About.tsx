import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Leaf, Heart, MapPin } from "lucide-react";
import { useApp } from "../store";

export default function About() {
  const { lang } = useApp();
  const isAr = lang === "ar";

  useEffect(() => {
    document.title = isAr ? "قصتنا — هيربيا" : "Notre Histoire — Herbia";
  }, [isAr]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{isAr ? "قصتنا" : "Notre Histoire"}</h1>
          <p>{isAr ? "ولدت هيربيا من شغف بكنوز الطبيعة التونسية." : "Herbia est née d'une passion pour les trésors de la nature tunisienne."}</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: "2rem" }}>
            {isAr
              ? "في قلب الأرض التونسية، نمزج المعرفة العتيقة بالطلب الحديث للجمال الطبيعي. كل منتج من هيربيا ثمرة شغف، ومكونات منتقاة بعناية، وإنتاج محلي."
              : "Au cœur de la terre tunisienne, nous mêlons savoir-faire ancestral et exigence moderne de beauté naturelle. Chaque produit Herbia est le fruit d'une passion, d'ingrédients sélectionnés avec soin et d'une production locale."}
          </p>
          <div className="benefits-grid" style={{ margin: "3rem 0" }}>
            <div className="benefit"><div className="benefit-icon"><Leaf size={28} /></div><h3>{isAr ? "طبيعي" : "Naturel"}</h3></div>
            <div className="benefit"><div className="benefit-icon"><MapPin size={28} /></div><h3>{isAr ? "تونسي" : "Tunisien"}</h3></div>
            <div className="benefit"><div className="benefit-icon"><Heart size={28} /></div><h3>{isAr ? "بشغف" : "Avec amour"}</h3></div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/catalog" className="btn btn-primary btn-lg">{isAr ? "اكتشفي منتجاتنا" : "Découvrir nos produits"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
