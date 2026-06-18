import { Link } from "react-router-dom";
import { useApp } from "../store";
import { t } from "../data/i18n";
import { Logo } from "./Logo";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const { lang } = useApp();
  const tt = t[lang];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link to="/" className="logo"><Logo /><span>natura</span></Link>
            <p>{tt.footer.tag}</p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a href="#" aria-label="Instagram" className="icon-btn" style={{ background: "rgba(255,255,255,0.08)" }}><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="icon-btn" style={{ background: "rgba(255,255,255,0.08)" }}><Facebook size={18} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{tt.footer.shop}</h4>
            <ul>
              <li><Link to="/catalog">{tt.footer.links.all}</Link></li>
              <li><Link to="/catalog">{tt.footer.links.hair}</Link></li>
              <li><Link to="/catalog">{tt.footer.links.oils}</Link></li>
              <li><Link to="/catalog">{tt.footer.links.spa}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{tt.footer.help}</h4>
            <ul>
              <li><Link to="/">{tt.footer.links.faq}</Link></li>
              <li><Link to="/">{tt.footer.links.ship}</Link></li>
              <li><Link to="/contact">{tt.footer.links.contact}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{tt.footer.company}</h4>
            <ul>
              <li><Link to="/about">{tt.footer.links.about}</Link></li>
              <li><Link to="/about">{tt.footer.links.story}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Natura Tunisia. {tt.footer.rights}
        </div>
      </div>
    </footer>
  );
}
