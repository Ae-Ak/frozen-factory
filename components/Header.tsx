"use client";

// =============================================================
// HEADER / NAVIGATION
// Mobile-first: Hamburger-Menü auf kleinen Screens,
// horizontale Navigation ab lg. Enthält den Design-Umschalter
// und den Haupt-CTA "Jetzt buchen".
// =============================================================

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDesign } from "./DesignContext";
import VariantToggle from "./VariantToggle";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/menue", label: "Menü" },
  { href: "/eis-catering", label: "Eis-Catering" },
  { href: "/events", label: "Events" },
  { href: "/galerie", label: "Galerie" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const { playful } = useDesign();
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü schließen, sobald zu einer anderen Seite navigiert wird
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md ${
        playful
          ? "border-rose/15 bg-creme/85"
          : "border-ink/5 bg-white/85"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo / Wortmarke */}
        <Link href="/" className="flex items-center gap-2" aria-label="Frozen Factory – Startseite">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-rose text-lg text-white ${
              playful ? "hover-wiggle" : ""
            }`}
            aria-hidden="true"
          >
            🍦
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-ink sm:text-base">
              FROZEN FACTORY
            </span>
            <span className="block text-[10px] font-semibold text-ink-soft sm:text-xs">
              Die rollende Softeisdiele
            </span>
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-btn px-3 py-1.5 text-sm font-bold transition-colors ${
                isActive(item.href)
                  ? "bg-rose text-white"
                  : "text-ink hover:bg-rose-soft hover:text-rose-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <VariantToggle />
          </div>
          <Link
            href="/kontakt"
            className="hidden rounded-btn bg-rose px-4 py-2 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-rose-dark md:inline-block"
          >
            Jetzt buchen
          </Link>

          {/* Hamburger (mobil) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            className="flex h-10 w-10 items-center justify-center rounded-btn border border-ink/10 text-ink lg:hidden"
          >
            <span className="text-xl" aria-hidden="true">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobiles Menü */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className={`border-t px-4 pb-4 pt-2 lg:hidden ${
            playful ? "border-rose/15 bg-creme" : "border-ink/5 bg-white"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-btn px-3 py-2.5 font-bold ${
                    isActive(item.href)
                      ? "bg-rose text-white"
                      : "text-ink hover:bg-rose-soft"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between gap-3">
            <VariantToggle />
            <Link
              href="/kontakt"
              className="rounded-btn bg-rose px-4 py-2 text-sm font-extrabold text-white"
            >
              Jetzt buchen
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
