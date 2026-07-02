"use client";

// =============================================================
// MENÜ / PRODUKTE
// Alle 7 Signature Kreationen mit Bild(-Platzhalter),
// Beschreibung und Topping-Beispielen. Bewusst ohne Preise –
// die werden individuell je Event verhandelt.
// =============================================================

import { creations } from "@/data/creations";
import { useDesign } from "@/components/DesignContext";
import { Badge, CTALink, PlaceholderImage, SectionHeading } from "@/components/ui";

export default function MenuPage() {
  const { playful } = useDesign();

  return (
    <>
      {/* Kopfbereich */}
      <section className={playful ? "bg-gradient-to-b from-creme to-creme-soft" : "bg-white"}>
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
            Unser Menü
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black text-ink sm:text-5xl">
            Sieben Signature Kreationen. Unendlich viele Lieblingsmomente.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Jeder Becher wird frisch am Truck gezapft und von Hand verfeinert.
            Und wenn du es individuell magst: Toppings und Soßen lassen sich
            frei kombinieren.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge icon="🥛">100 % laktosefrei</Badge>
            <Badge icon="🏔️">Österreichische Alpenvollmilch</Badge>
            <Badge icon="🍓">Soßen aus 90 % echten Früchten</Badge>
            <Badge icon="🤲">Handgemacht</Badge>
          </div>
        </div>
      </section>

      {/* Kreationen – abwechselnd links/rechts */}
      <section className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6">
        {creations.map((c, i) => (
          <article
            key={c.slug}
            id={c.slug}
            className={`grid items-center gap-6 overflow-hidden rounded-card shadow-sm md:grid-cols-2 ${
              playful ? "bg-white" : "bg-creme-soft"
            }`}
          >
            <PlaceholderImage
              emoji={c.emoji}
              colorFrom={c.colorFrom}
              colorTo={c.colorTo}
              label={`${c.name} – Eiskreation`}
              className={`aspect-[4/3] w-full ${i % 2 === 1 ? "md:order-2" : ""}`}
            />
            <div className="p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-widest text-rose">
                Nr. {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
                {c.name}
              </h2>
              <p className="mt-1 font-bold text-rose-dark">{c.tagline}</p>
              <p className="mt-3 text-ink-soft">{c.description}</p>
              <div className="mt-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">
                  Topping-Beispiele
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.toppings.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Hinweis Individualisierung + CTA */}
      <section className="mx-auto max-w-3xl px-4 pb-14 text-center sm:px-6">
        <SectionHeading
          kicker="Dein Event, dein Menü"
          title="Wunsch-Kreation? Machen wir."
          intro="Für Events stellen wir das Menü individuell zusammen – von der Auswahl der Kreationen bis zu Toppings in euren Firmenfarben. Preise besprechen wir persönlich, passend zu Anlass und Größe."
        />
        <div className="mt-6">
          <CTALink href="/kontakt">Unverbindlich anfragen</CTALink>
        </div>
      </section>
    </>
  );
}
