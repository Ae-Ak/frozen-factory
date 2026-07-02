"use client";

// Umschalter zwischen den beiden Design-Varianten.
// Sitzt im Header und ist auf jeder Seite verfügbar.

import { useDesign } from "./DesignContext";

export default function VariantToggle() {
  const { variant, setVariant } = useDesign();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-ink/10 bg-white/70 p-0.5 text-xs font-bold"
      role="group"
      aria-label="Design-Variante wählen"
    >
      <button
        type="button"
        onClick={() => setVariant("minimal")}
        aria-pressed={variant === "minimal"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          variant === "minimal"
            ? "bg-ink text-white"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        Elegant
      </button>
      <button
        type="button"
        onClick={() => setVariant("verspielt")}
        aria-pressed={variant === "verspielt"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          variant === "verspielt"
            ? "bg-rose text-white"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        Festival
      </button>
    </div>
  );
}
