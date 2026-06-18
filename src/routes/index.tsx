import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, MapPin, HeartHandshake, Truck, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useApp } from "../store";
import { t } from "../data/i18n";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natura — Cosmétiques Naturels de Tunisie" },
      { name: "description", content: "Huile d'argan, shampoing bio, soins spa. Marque tunisienne 100% naturelle. Paiement à la livraison." },
      { property: "og:title", content: "Natura — Beauté Naturelle de Tunisie" },
      { property: "og:description", content: "Cosmétiques bio inspirés des trésors de Tunisie." },
    ],
  }),
  component: Home,
});

const benefitIcons = [Leaf, MapPin, HeartHandshake, Truck];

function Home() {
  const { lang } = useApp();
  const tt = t[lang];
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const best = products.filter((p) => p.bestseller).slice(0, 4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <span className="hero-eyebrow"><Sparkles size={14} /> {tt.hero.eyebrow}</span>
              <h1>{tt.hero.title1} <em>{tt.hero.title2}</em> {tt.hero.title3}</h1>
              <p className="lead">{tt.hero.lead}</p>
              <div className="hero-ctas">
                <Link to="/catalog" className="btn btn-primary btn-lg">{tt.hero.cta} <ArrowRight size={18} /></Link>
                <Link to="/catalog" className="btn btn-ghost btn-lg">{tt.hero.cta2}</Link>
              </div>
            </div>
            <div className="hero-image fade-up delay-2">
              <img src={heroImg} alt="Natura" width={1600} height={1100} />
              <div className="hero-badge">
                <Truck size={28} color="var(--green-dark)" />
                <div><strong>{tt.hero.badge}</strong><span>{tt.hero.badgeSub}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">{tt.featured.eye}</div>
            <h2>{tt.featured.title}</h2>
            <p>{tt.featured.sub}</p>
          </div>
          <div className="product-grid">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/catalog" className="btn btn-ghost btn-lg">{lang === "fr" ? "Voir toute la collection" : "اطلع على المجموعة"} <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">{tt.benefits.eye}</div>
            <h2>{tt.benefits.title}</h2>
          </div>
          <div className="benefits-grid">
            {tt.benefits.items.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div className="benefit" key={i}>
                  <div className="benefit-icon"><Icon size={32} strokeWidth={1.5} /></div>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">{tt.bestsellers.eye}</div>
            <h2>{tt.bestsellers.title}</h2>
            <p>{tt.bestsellers.sub}</p>
          </div>
          <div className="product-grid">
            {best.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">{tt.testimonials.eye}</div>
            <h2>{tt.testimonials.title}</h2>
          </div>
          <div className="test-grid">
            {tt.testimonials.items.map((tt2, i) => (
              <div className="test-card" key={i}>
                <div className="stars">★★★★★</div>
                <blockquote>"{tt2.q}"</blockquote>
                <div className="test-author">
                  <div className="test-avatar">{tt2.n[0]}</div>
                  <div><strong>{tt2.n}</strong><span>{tt2.c}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">{tt.faq.eye}</div>
            <h2>{tt.faq.title}</h2>
          </div>
          <div className="faq-list">
            {tt.faq.items.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="plus">+</span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section">
        <div className="container">
          <div className="newsletter">
            <h2>{tt.news.title}</h2>
            <p>{tt.news.sub}</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={tt.news.placeholder} required />
              <button className="btn btn-gold">{tt.news.cta}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
