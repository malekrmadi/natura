import { Check } from "lucide-react";
import { useApp } from "../store";

export function Toast() {
  const { toast } = useApp();
  if (!toast) return null;
  return (
    <div className="toast" role="status">
      <Check size={18} />
      <span>{toast}</span>
    </div>
  );
}
