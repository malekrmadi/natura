import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./store";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toast />
      </AppProvider>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="container" style={{ padding: "6rem 0", textAlign: "center" }}>
      <h1>404</h1>
      <p style={{ color: "var(--ink-soft)", marginTop: "1rem" }}>Page introuvable.</p>
      <a href="/" className="btn btn-primary" style={{ marginTop: "2rem" }}>Retour à l'accueil</a>
    </div>
  );
}
