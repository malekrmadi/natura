import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useApp } from "../store";
import { t } from "../data/i18n";
import { Logo } from "./Logo";

export function Header() {
  const { lang, setLang, cartCount } = useApp();
  const tt = t[lang];
  const [open, setOpen] = useState(false);
  
  const location = useLocation();
  const pathname = location.pathname;
  const is = (p: string) => pathname === p;

  return (
    <header className="site-header">
      <div className="announce">
        {lang === "fr" ? <>Livraison gratuite dès <strong>100 DT</strong> • <strong>Paiement à la livraison</strong> partout en Tunisie</>
          : <>توصيل مجاني ابتداء من <strong>100 د.ت</strong> • <strong>الدفع عند الاستلام</strong> في كامل تونس</>}
      </div>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <Logo />
          <span>herbia</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={is("/") ? "active" : ""}>{tt.nav.home}</Link>
          <Link to="/catalog" className={is("/catalog") ? "active" : ""}>{tt.nav.shop}</Link>
          <Link to="/about" className={is("/about") ? "active" : ""}>{tt.nav.about}</Link>
          <Link to="/contact" className={is("/contact") ? "active" : ""}>{tt.nav.contact}</Link>
        </nav>
        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
            <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>ع</button>
          </div>
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="icon-btn menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setOpen(false)}>{tt.nav.home}</Link>
          <Link to="/catalog" onClick={() => setOpen(false)}>{tt.nav.shop}</Link>
          <Link to="/about" onClick={() => setOpen(false)}>{tt.nav.about}</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>{tt.nav.contact}</Link>
        </div>
      )}
    </header>
  );
}
