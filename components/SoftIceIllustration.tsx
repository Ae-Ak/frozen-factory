"use client";

// =============================================================
// SOFTEIS-ILLUSTRATION (SVG)
// Animierter Eisbecher für die Startseite: In der verspielten
// Variante bauen sich die Eis-Schichten nacheinander auf und
// der Becher schwebt sanft. In der eleganten Variante steht er
// ruhig. Kann später durch ein echtes Foto/Video ersetzt werden.
// =============================================================

import { useDesign } from "./DesignContext";

export default function SoftIceIllustration({
  className = "",
}: {
  className?: string;
}) {
  const { playful } = useDesign();

  return (
    <div className={`${playful ? "animate-float" : ""} ${className}`}>
      <svg
        viewBox="0 0 200 260"
        role="img"
        aria-label="Illustration eines Softeisbechers"
        className="h-full w-full drop-shadow-xl"
      >
        {/* Becher */}
        <path
          d="M55 160 L145 160 L132 245 Q100 255 68 245 Z"
          fill="var(--rose)"
        />
        <path d="M55 160 L145 160 L142 180 L58 180 Z" fill="var(--rose-dark)" />

        {/* Softeis-Schichten – bauen sich in der verspielten Variante auf */}
        <g>
          <ellipse
            cx="100"
            cy="150"
            rx="52"
            ry="24"
            fill="var(--creme)"
            className={playful ? "animate-swirl" : ""}
            style={{ animationDelay: "0.1s" }}
          />
          <ellipse
            cx="100"
            cy="122"
            rx="42"
            ry="21"
            fill="#fdf8ec"
            className={playful ? "animate-swirl" : ""}
            style={{ animationDelay: "0.35s" }}
          />
          <ellipse
            cx="100"
            cy="97"
            rx="31"
            ry="17"
            fill="var(--creme)"
            className={playful ? "animate-swirl" : ""}
            style={{ animationDelay: "0.6s" }}
          />
          {/* Spitze */}
          <path
            d="M84 90 Q100 45 106 82 Q118 78 100 96 Z"
            fill="#fdf8ec"
            className={playful ? "animate-swirl" : ""}
            style={{ animationDelay: "0.85s" }}
          />
        </g>

        {/* Fruchtsoße */}
        <path
          d="M62 148 Q75 165 88 150 Q100 168 115 151 Q128 163 138 148 Q125 138 100 138 Q75 138 62 148 Z"
          fill="var(--rose)"
          opacity="0.85"
          className={playful ? "animate-swirl" : ""}
          style={{ animationDelay: "1.1s" }}
        />

        {/* Streusel – nur in der verspielten Variante */}
        {playful && (
          <g className="animate-swirl" style={{ animationDelay: "1.3s" }}>
            <circle cx="80" cy="120" r="3" fill="var(--rose)" />
            <circle cx="112" cy="108" r="3" fill="#f5a623" />
            <circle cx="95" cy="132" r="3" fill="#5b6abf" />
            <circle cx="120" cy="130" r="3" fill="#7db8d9" />
            <circle cx="88" cy="102" r="3" fill="var(--rose-dark)" />
          </g>
        )}
      </svg>
    </div>
  );
}
