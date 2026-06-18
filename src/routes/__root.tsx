import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppProvider } from "../store";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toast } from "../components/Toast";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: "6rem 0", textAlign: "center" }}>
        <h1>404</h1>
        <p style={{ color: "var(--ink-soft)", marginTop: "1rem" }}>Page introuvable.</p>
        <a href="/" className="btn btn-primary" style={{ marginTop: "2rem" }}>Retour à l'accueil</a>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="container" style={{ padding: "6rem 0", textAlign: "center" }}>
      <h1>Une erreur est survenue</h1>
      <button onClick={reset} className="btn btn-primary" style={{ marginTop: "2rem" }}>Réessayer</button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Natura — Cosmétiques Naturels de Tunisie" },
      { name: "description", content: "Marque tunisienne de cosmétiques bio : huile d'argan, shampoing naturel, soins spa. Paiement à la livraison partout en Tunisie." },
      { property: "og:title", content: "Natura — Cosmétiques Naturels de Tunisie" },
      { property: "og:description", content: "Marque tunisienne de cosmétiques bio : huile d'argan, shampoing naturel, soins spa. Paiement à la livraison partout en Tunisie." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Natura — Cosmétiques Naturels de Tunisie" },
      { name: "twitter:description", content: "Marque tunisienne de cosmétiques bio : huile d'argan, shampoing naturel, soins spa. Paiement à la livraison partout en Tunisie." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cairo:wght@400;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />
        <main><Outlet /></main>
        <Footer />
        <Toast />
      </AppProvider>
    </QueryClientProvider>
  );
}
