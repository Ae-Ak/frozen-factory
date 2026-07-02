"use client";

// =============================================================
// ÜBER UNS
// Geschichte: 10 Jahre Smoothie-Werkstatt → Frozen Factory 2026,
// Werte und das Team hinter dem Truck.
// =============================================================

import { useDesign } from "@/components/DesignContext";
import { CTALink, PlaceholderImage, SectionHeading } from "@/components/ui";

// Meilensteine für die Zeitleiste
const milestones = [
  {
    year: "2016",
    title: "Die Smoothie-Werkstatt rollt los",
    text: "Mit einem umgebauten Foodtruck und viel Idealismus starten wir auf unserem ersten Stadtfest. Frische Smoothies, ehrliche Zutaten – das Konzept geht auf.",
  },
  {
    year: "2018",
    title: "Festival-Feuertaufe",
    text: "Unser erstes großes Musikfestival: drei Tage, kaum Schlaf, tausende Becher. Wir wissen jetzt: Genau hier gehören wir hin.",
  },
  {
    year: "2021",
    title: "Die Softeismaschine zieht ein",
    text: "Eigentlich nur als Experiment gedacht, wird das Softeis zum heimlichen Star am Truck. Die Schlangen sprechen eine deutliche Sprache.",
  },
  {
    year: "2024",
    title: "Eis überholt Smoothie",
    text: "Erstmals verkaufen wir mehr Eisbecher als Smoothies. Wir tüfteln an eigenen Soßen aus 90 % echten Früchten und stellen komplett auf laktosefrei um.",
  },
  {
    year: "2026",
    title: "Frozen Factory – ein neues Kapitel",
    text: "Aus der Smoothie-Werkstatt wird die Frozen Factory: neuer Name, neuer Look, volle Konzentration auf handgemachtes Softeis. Die Leidenschaft bleibt dieselbe.",
  },
];

const values = [
  {
    icon: "💛",
    title: "Ehrlichkeit",
    text: "Was auf dem Becher steht, ist auch drin: echte Früchte, echte Milch, echtes Handwerk. Kein Industrieeis, keine Abkürzungen.",
  },
  {
    icon: "🎪",
    title: "Festival im Herzen",
    text: "Wir lieben die Momente, in denen Musik, Sommer und ein perfekter Eisbecher zusammenkommen. Diese Energie bringen wir zu jedem Event mit.",
  },
  {
    icon: "🌍",
    title: "Verantwortung",
    text: "Regionale Partner, laktosefreie Rezepturen für alle und so wenig Verpackungsmüll wie möglich – wir wollen, dass sich Genuss gut anfühlt.",
  },
];

export default function AboutPage() {
  const { playful } = useDesign();

  return (
    <>
      {/* Kopfbereich */}
      <section className={playful ? "bg-gradient-to-b from-creme to-creme-soft" : "bg-white"}>
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
            Über uns
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black text-ink sm:text-5xl">
            Zehn Jahre unterwegs – und es fühlt sich immer noch wie der erste Sommer an.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Hinter der Frozen Factory stehen Menschen, die seit 2016 auf
            Festivals, Stadtfesten und Firmenevents zuhause sind. Das hier ist
            unsere Geschichte.
          </p>
        </div>
      </section>

      {/* Zeitleiste */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <SectionHeading kicker="Unsere Geschichte" title="Vom Smoothie zum Softeis" />
        <ol className="relative mt-12 space-y-10 border-l-2 border-rose/30 pl-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              {/* Punkt auf der Zeitleiste */}
              <span
                aria-hidden="true"
                className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-rose ring-4 ring-white"
              />
              <p className="text-sm font-black uppercase tracking-widest text-rose">
                {m.year}
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-ink">{m.title}</h3>
              <p className="mt-2 text-ink-soft">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Werte */}
      <section className={playful ? "bg-rose-soft" : "bg-creme-soft"}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            kicker="Wofür wir stehen"
            title="Drei Dinge, die sich nie ändern"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-card bg-white p-6 shadow-sm">
                <p className="text-3xl" aria-hidden="true">{v.icon}</p>
                <h3 className="mt-3 font-extrabold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team-Platzhalter + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <PlaceholderImage
            emoji="👋"
            colorFrom="#FBF1D9"
            colorTo="#EB515D"
            label="Das Team der Frozen Factory am Truck"
            className="aspect-[4/3] w-full rounded-card shadow-sm"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-ink">
              Wir sehen uns am Eiswagen!
            </h2>
            <p className="mt-3 text-ink-soft">
              Ob als Gast auf dem nächsten Festival oder als Veranstalter mit
              einer Idee im Kopf: Komm vorbei, schreib uns – wir freuen uns auf
              dich. Versprochen: Der erste Smalltalk am Truck gehört bei uns
              zum Service.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTALink href="/events">Wo wir gerade sind</CTALink>
              <CTALink href="/kontakt" secondary>
                Kontakt aufnehmen
              </CTALink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
