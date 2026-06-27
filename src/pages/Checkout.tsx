import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wallet, ArrowLeft } from "lucide-react";
import { useApp } from "../store";
import { t } from "../data/i18n";
import { governorates } from "../data/products";

export default function Checkout() {
  const { lang, cartProducts, cartTotal, clearCart } = useApp();
  const tt = t[lang];
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = lang === "fr" ? "Commande — Herbia" : "إتمام الطلب — هيربيا";
  }, [lang]);

  const shipping = cartTotal >= 100 || cartTotal === 0 ? 0 : 8;
  const total = cartTotal + shipping;

  if (cartProducts.length === 0) {
    return (
      <div className="container" style={{ padding: "5rem 0", textAlign: "center" }}>
        <h2>{tt.cartPage.empty}</h2>
        <Link to="/catalog" className="btn btn-primary" style={{ marginTop: "2rem" }}>{tt.cartPage.continue}</Link>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const orderNum = "HRB-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setTimeout(() => {
      clearCart();
      navigate(`/confirmation?order=${orderNum}`);
    }, 600);
  };

  return (
    <>
      <div className="page-hero"><div className="container"><h1>{tt.checkout.title}</h1></div></div>
      <div className="container">
        <div className="cart-layout">
          <form onSubmit={submit}>
            <Link to="/cart" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: "2rem", color: "var(--green-dark)", fontWeight: 600 }}>
              <ArrowLeft size={16} /> {tt.checkout.back}
            </Link>

            <h3 style={{ marginBottom: "1.25rem" }}>{tt.checkout.contact}</h3>
            <div className="form-grid" style={{ marginBottom: "2rem" }}>
              <div className="form-field"><label>{tt.checkout.first}</label><input required /></div>
              <div className="form-field"><label>{tt.checkout.last}</label><input required /></div>
              <div className="form-field full"><label>{tt.checkout.phone}</label><input type="tel" required placeholder="+216 ..." /></div>
            </div>

            <h3 style={{ marginBottom: "1.25rem" }}>{tt.checkout.delivery}</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>{tt.checkout.gov}</label>
                <select required defaultValue="">
                  <option value="" disabled>—</option>
                  {governorates.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className="form-field"><label>{tt.checkout.city}</label><input required /></div>
              <div className="form-field full"><label>{tt.checkout.addr}</label><input required /></div>
              <div className="form-field full"><label>{tt.checkout.notes}</label><textarea rows={3} /></div>
            </div>

            <div className="cod-banner" style={{ marginTop: "2rem" }}>
              <Wallet size={22} />
              <div><strong>{lang === "fr" ? "Paiement à la livraison" : "الدفع عند الاستلام"}</strong><div style={{ fontSize: "0.85rem", marginTop: 4 }}>{tt.cartPage.cod}</div></div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginTop: "1.5rem" }} disabled={submitting}>
              {submitting ? "..." : tt.checkout.placeOrder}
            </button>
          </form>

          <aside className="summary">
            <h3>{lang === "fr" ? "Votre commande" : "طلبك"}</h3>
            {cartProducts.map(({ product, qty }) => (
              <div key={product.id} style={{ display: "flex", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid var(--line)" }}>
                <img src={product.image} alt="" style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover" }} />
                <div style={{ flex: 1, fontSize: "0.9rem" }}>
                  <div style={{ fontWeight: 600 }}>{product.name[lang]}</div>
                  <div style={{ color: "var(--ink-soft)" }}>×{qty}</div>
                </div>
                <strong>{product.price * qty} DT</strong>
              </div>
            ))}
            <div className="summary-row" style={{ marginTop: "1rem" }}><span>{tt.cartPage.subtotal}</span><span>{cartTotal} DT</span></div>
            <div className="summary-row"><span>{tt.cartPage.shipping}</span><span>{shipping === 0 ? tt.cartPage.free : `${shipping} DT`}</span></div>
            <div className="summary-row total"><span>{tt.cartPage.total}</span><span>{total} DT</span></div>
          </aside>
        </div>
      </div>
    </>
  );
}
