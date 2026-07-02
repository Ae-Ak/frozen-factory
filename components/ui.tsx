"use client";

// =============================================================
// KLEINE UI-BAUSTEINE
// Wiederverwendbare Elemente: Überschriften, Buttons,
// Platzhalter-Bilder. Reagieren auf die Design-Variante.
// =============================================================

import Link from "next/link";
import type { ReactNode } from "react";
import { useDesign } from "./DesignContext";

/** Abschnitts-Überschrift mit optionalem Vorspann ("Kicker") */
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "center",
}: {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const { playful } = useDesign();
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {kicker && (
        <p
          className={`text-sm font-extrabold uppercase tracking-widest ${
            playful ? "text-rose" : "text-ink-soft"
          }`}
        >
          {playful ? `✦ ${kicker} ✦` : kicker}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-ink-soft">{intro}</p>}
    </div>
  );
}

/** Primärer Call-to-Action-Button (als Link) */
export function CTALink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const { playful } = useDesign();
  return (
    <Link
      href={href}
      className={`inline-block rounded-btn px-6 py-3 text-center font-extrabold shadow-sm transition-all ${
        secondary
          ? "border-2 border-rose text-rose hover:bg-rose-soft"
          : "bg-rose text-white hover:bg-rose-dark"
      } ${playful ? "hover:-translate-y-0.5 hover:shadow-lg" : ""}`}
    >
      {children}
    </Link>
  );
}

/**
 * Platzhalter-Bild: farbiger Verlauf mit Emoji.
 * Wird überall dort genutzt, wo später echte Fotos hinkommen –
 * einfach in den Daten-Dateien einen image-Pfad ergänzen.
 */
export function PlaceholderImage({
  emoji,
  colorFrom,
  colorTo,
  label,
  className = "",
}: {
  emoji: string;
  colorFrom: string;
  colorTo: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(160deg, ${colorFrom}, ${colorTo})`,
      }}
    >
      <span className="text-5xl drop-shadow-md sm:text-6xl" aria-hidden="true">
        {emoji}
      </span>
    </div>
  );
}

/** Highlight-Badge, z.B. "100 % laktosefrei" */
export function Badge({ icon, children }: { icon: string; children: ReactNode }) {
  const { playful } = useDesign();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${
        playful ? "bg-white text-rose-dark shadow-sm" : "bg-creme text-ink"
      }`}
    >
      <span aria-hidden="true">{icon}</span>
      {children}
    </span>
  );
}
