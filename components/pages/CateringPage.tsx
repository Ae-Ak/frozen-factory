"use client";

// =============================================================
// EIS-CATERING (B2B)
// Leistungsübersicht, Ablauf und CTA zum Catering-Formular.
// =============================================================

import Link from "next/link";
import { useDesign } from "@/components/DesignContext";
import { CTALink, SectionHeading } from "@/components/ui";

const services = [
  {
    icon: "🚚",
    title: "Truck oder mobile Eistheke",
    text: "Draußen kommt unser Truck, drinnen die kompakte Eistheke – wir passen uns eurer Location an, nicht umgekehrt.",
  },
  {
    icon: "🧑‍🍳",
    title: "Personal inklusive",
    text: "Unser eingespieltes Team zapft, dekoriert und sorgt für gute Laune an der Theke. Ihr müsst euch um nichts kümmern.",
  },
  {
    icon: "🍨",
    title: "Individuelles Menü",
    text: "Wählt aus unseren 7 Signature Kreationen oder lasst uns etwas Eigenes entwickeln – auf Wunsch mit Branding am Becher.",
  },
  {
    icon: "🥛",
    title: "Für alle Gäste",
    text: "100 % laktosefrei, vegetarisch, mit klar deklarierten Allergenen. Niemand muss verzichten.",
  },
  {
    icon: "⚡",
    title: "Autark & flexibel",
    text: "Eigene Stromversorgung möglich, Auf- und Abbau übernehmen wir. Auch kurzfristige Einsätze sind oft machbar.",
  },
  {
    icon: "📋",
    title: "Alles geregelt",
    text: "Gewerbliche Zulassung, Hygieneschulung, Versicherung – die Formalitäten sind bei uns Routine seit 2016.",
  },
];

const steps = [
  {
    step: "1",
    title: "Anfrage senden",
    text: "Erzähl uns kurz von deinem Event: Datum, Ort, Gästezahl. Zwei Minuten im Formular genügen.",
  },
  {
    step: "2",
    title: "Angebot erhalten",
    text: "Innerhalb von 48 Stunden melden wir uns mit einem individuellen Vorschlag – inklusive Menü-Empfehlung.",
  },
  {
    step: "3",
    title: "Genießen",
    text: "Wir kommen, bauen auf und verwöhnen eure Gäste. Ihr bekommt die Komplimente, wir spülen die Maschine.",
  },
];

export default function CateringPage() {
  const { playful } = useDesign();

  return (
    <>
      {/* Kopfbereich */}
      <section className={playful ? "bg-gradient-to-b from-creme to-creme-soft" : "bg-white"}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
              Eis-Catering für Firmen & Veranstalter
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              Das Highlight, über das eure Gäste noch Wochen später reden.
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Sommerfest, Messe, Jubiläum oder Kundenevent: Mit unserem
              Eis-Catering holt ihr euch handgemachtes Softeis und zehn Jahre
              Event-Erfahrung an euren Standort – komplett sorgenfrei.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTALink href="/kontakt#catering">Eis-Catering anfragen</CTALink>
              <CTALink href="/menue" secondary>
                Kreationen ansehen
              </CTALink>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          kicker="Unsere Leistungen"
          title="Rundum-sorglos, Becher für Becher"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-card p-6 shadow-sm ${
                playful ? "bg-white hover-wiggle" : "bg-creme-soft"
              }`}
            >
              <p className="text-3xl" aria-hidden="true">{s.icon}</p>
              <h3 className="mt-3 font-extrabold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ablauf */}
      <section className={playful ? "bg-rose-soft" : "bg-creme-soft"}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading kicker="So einfach geht's" title="In drei Schritten zum Eis-Catering" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="rounded-card bg-white p-6 text-center shadow-sm">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose text-xl font-black text-white">
                  {s.step}
                </span>
                <h3 className="mt-4 font-extrabold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold text-ink">
          Bereit für glückliche Gäste?
        </h2>
        <p className="mt-3 text-ink-soft">
          Schick uns deine Eckdaten – wir melden uns innerhalb von 48 Stunden
          mit einem unverbindlichen Angebot. Preise gestalten wir individuell
          nach Anlass, Dauer und Gästezahl.
        </p>
        <div className="mt-6">
          <CTALink href="/kontakt#catering">Jetzt unverbindlich anfragen</CTALink>
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Lieber direkt sprechen?{" "}
          <Link href="/kontakt" className="font-bold text-rose underline-offset-4 hover:underline">
            Alle Kontaktmöglichkeiten
          </Link>
        </p>
      </section>
    </>
  );
}
