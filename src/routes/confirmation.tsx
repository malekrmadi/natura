import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { z } from "zod";
import { useApp } from "../store";
import { t } from "../data/i18n";

export const Route = createFileRoute("/confirmation")({
  validateSearch: z.object({ order: z.string().optional() }),
  head: () => ({ meta: [{ title: "Commande Confirmée — Natura" }] }),
  component: Confirmation,
});

function Confirmation() {
  const { lang } = useApp();
  const tt = t[lang];
  const { order } = Route.useSearch();

  return (
    <div className="container">
      <div className="confirm">
        <div className="confirm-check"><Check size={48} strokeWidth={3} /></div>
        <h1>{tt.confirm.title}</h1>
        <p style={{ color: "var(--ink-soft)", marginTop: "1rem", fontSize: "1.1rem" }}>{tt.confirm.desc}</p>
        {order && (
          <div style={{ background: "var(--white)", padding: "1.5rem", borderRadius: "var(--radius)", margin: "2rem 0", border: "1px solid var(--line)" }}>
            <div style={{ fontSize: "0.85rem", color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tt.confirm.num}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--green-darker)", marginTop: 4 }}>{order}</div>
          </div>
        )}
        <Link to="/" className="btn btn-primary btn-lg">{tt.confirm.home}</Link>
      </div>
    </div>
  );
}
