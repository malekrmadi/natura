import { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useApp } from "../store";

export default function Contact() {
  const { lang } = useApp();
  const isAr = lang === "ar";
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = isAr ? "اتصلي بنا — هيربيا" : "Contact — Herbia";
  }, [isAr]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{isAr ? "اتصلي بنا" : "Contactez-nous"}</h1>
          <p>{isAr ? "نحن هنا لمساعدتك في كل خطوة." : "Nous sommes là pour vous accompagner."}</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="cart-layout">
            <div>
              <h2 style={{ marginBottom: "2rem" }}>{isAr ? "أرسلي رسالة" : "Envoyez-nous un message"}</h2>
              {sent ? (
                <div className="cod-banner">{isAr ? "تم إرسال رسالتك بنجاح. سنرد عليك قريبا." : "Message envoyé ! Nous vous répondrons sous peu."}</div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="form-grid">
                    <div className="form-field"><label>{isAr ? "الاسم" : "Nom"}</label><input required /></div>
                    <div className="form-field"><label>Email</label><input type="email" required /></div>
                    <div className="form-field full"><label>{isAr ? "الرسالة" : "Message"}</label><textarea rows={6} required /></div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: "1.5rem" }}>{isAr ? "إرسال" : "Envoyer"}</button>
                </form>
              )}
            </div>
            <aside className="summary">
              <h3>{isAr ? "تواصلي معنا" : "Nos coordonnées"}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <Phone size={20} color="var(--green-dark)" />
                  <div><strong>+216 70 000 000</strong><div style={{ color: "var(--ink-soft)", fontSize: "0.9rem" }}>9h - 18h</div></div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <Mail size={20} color="var(--green-dark)" />
                  <div><strong>hello@herbia.tn</strong></div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <MapPin size={20} color="var(--green-dark)" />
                  <div><strong>Tunis, Tunisie</strong></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
