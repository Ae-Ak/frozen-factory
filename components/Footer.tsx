"use client";

// =============================================================
// FOOTER
// Enthält: Kurzinfo, Navigation, Social-Media-Links,
// Newsletter-Platzhalter und rechtliche Links.
// =============================================================

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useDesign } from "./DesignContext";

// Social-Media-Profile – hier die echten URLs eintragen:
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/frozenfactory", icon: "📸" },
  { label: "Facebook", href: "https://www.facebook.com/frozenfactory", icon: "👍" },
];

export default function Footer() {
  const { playful } = useDesign();

  // --- Newsletter-Platzhalter -------------------------------
  // Später an einen echten Dienst anbinden (z.B. Mailchimp,
  // Brevo). Aktuell wird nur eine Bestätigung angezeigt.
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletter(e: FormEvent) {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  }

  return (
    <footer
      className={`mt-16 ${
        playful ? "bg-rose text-white" : "bg-ink text-white"
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Marke */}
        <div>
          <p className="text-lg font-extrabold">🍦 FROZEN FACTORY</p>
          <p className="mt-1 text-sm font-semibold opacity-80">
            Die rollende Softeisdiele
          </p>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            Handgemachtes Softeis aus österreichischer Alpenvollmilch –
            100&nbsp;% laktosefrei, mit Soßen aus 90&nbsp;% echten Früchten.
            Auf Festivals, Firmenevents und privaten Feiern.
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-btn bg-white/15 px-3 py-1.5 text-sm font-bold transition-colors hover:bg-white/25"
              >
                <span aria-hidden="true">{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer-Navigation">
          <p className="text-sm font-extrabold uppercase tracking-wider opacity-70">
            Entdecken
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold">
            <li><Link className="hover:underline" href="/ueber-uns">Über uns</Link></li>
            <li><Link className="hover:underline" href="/menue">Menü</Link></li>
            <li><Link className="hover:underline" href="/eis-catering">Eis-Catering</Link></li>
            <li><Link className="hover:underline" href="/events">Events</Link></li>
            <li><Link className="hover:underline" href="/galerie">Galerie</Link></li>
            <li><Link className="hover:underline" href="/blog">Blog</Link></li>
            <li><Link className="hover:underline" href="/kontakt">Kontakt</Link></li>
            <li><Link className="hover:underline" href="/rechtliches">Impressum</Link></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider opacity-70">
            Newsletter
          </p>
          <p className="mt-3 text-sm opacity-80">
            Neue Kreationen & Tourdaten direkt ins Postfach.
          </p>
          {subscribed ? (
            <p className="mt-3 rounded-card bg-white/15 px-4 py-3 text-sm font-bold">
              🎉 Fast geschafft! Bitte bestätige die E-Mail in deinem Postfach.
            </p>
          ) : (
            <form onSubmit={handleNewsletter} className="mt-3 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                E-Mail-Adresse
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="w-full min-w-0 rounded-btn bg-white/90 px-3 py-2 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className={`shrink-0 rounded-btn px-4 py-2 text-sm font-extrabold transition-colors ${
                  playful
                    ? "bg-ink text-white hover:bg-black"
                    : "bg-rose text-white hover:bg-rose-dark"
                }`}
              >
                Anmelden
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Rechtliches */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs opacity-75 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Frozen Factory – Die rollende Softeisdiele</p>
          <div className="flex gap-4 font-semibold">
            <Link className="hover:underline" href="/rechtliches">Impressum</Link>
            <Link className="hover:underline" href="/rechtliches#datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
