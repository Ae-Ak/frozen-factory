"use client";

// =============================================================
// STARTSEITE
// Hero mit CTA, kurze Intro, Highlights (USPs), Kreationen-
// Teaser, Catering-Teaser und nächste Termine.
// =============================================================

import Link from "next/link";
import { creations } from "@/data/creations";
import { events } from "@/data/events";
import { useDesign } from "@/components/DesignContext";
import SoftIceIllustration from "@/components/SoftIceIllustration";
import { Badge, CTALink, PlaceholderImage, SectionHeading } from "@/components/ui";

// Die vier Kernbotschaften der Marke
const highlights = [
  {
    icon: "🥛",
    title: "100 % laktosefrei",
    text: "Unser komplettes Sortiment ist laktosefrei – ohne Kompromisse beim Geschmack.",
  },
  {
    icon: "🏔️",
    title: "Österreichische Alpenvollmilch",
    text: "Beste Milch aus den Alpen macht unser Softeis unverwechselbar cremig.",
  },
  {
    icon: "🍓",
    title: "90 % echte Früchte",
    text: "Unsere Soßen bestehen aus 90 % echten Früchten – kein künstliches Aroma.",
  },
  {
    icon: "🤲",
    title: "Handgemacht",
    text: "Kein Industrieeis: Jede Kreation entsteht bei uns von Hand am Truck.",
  },
];

export default function HomePage() {
  const { playful } = useDesign();
  const nextEvents = events
    .filter((e) => new Date(e.endDate ?? e.date) >= new Date())
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className={
          playful
            ? "bg-gradient-to-b from-creme via-creme-soft to-rose-soft"
            : "bg-white"
        }
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="animate-fade-up text-center lg:text-left">
            <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
              {playful ? "🎪 Festival-Season is on!" : "Die rollende Softeisdiele"}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              Softeis, das deinen{" "}
              <span className="text-rose">Moment</span> unvergesslich macht.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft lg:mx-0">
              Handgemachte Eiskreationen aus österreichischer Alpenvollmilch –
              frisch gezapft aus unserem Truck. Auf Festivals, Firmenevents und
              überall, wo gefeiert wird.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <CTALink href="/kontakt">Jetzt für dein Event buchen</CTALink>
              <CTALink href="/menue" secondary>
                Unsere Kreationen entdecken
              </CTALink>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge icon="🥛">100 % laktosefrei</Badge>
              <Badge icon="🍓">90 % echte Früchte</Badge>
              <Badge icon="🚚">10 Jahre Food-Truck-Erfahrung</Badge>
            </div>
          </div>

          {/* Animierter Eisbecher (später: Foto oder Video) */}
          <div className="mx-auto h-64 w-52 sm:h-80 sm:w-64">
            <SoftIceIllustration className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          kicker="Seit 2016 unterwegs"
          title="Aus der Smoothie-Werkstatt wird die Frozen Factory"
          intro="Zehn Jahre lang haben wir als Smoothie-Werkstatt Festivals und Events mit frischen Drinks versorgt. 2026 starten wir unser neues Kapitel – mit dem, was wir am meisten lieben: richtig gutem Softeis."
        />
        <div className="mt-6 text-center">
          <Link
            href="/ueber-uns"
            className="font-extrabold text-rose underline-offset-4 hover:underline"
          >
            Unsere Geschichte lesen →
          </Link>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className={playful ? "bg-rose-soft" : "bg-creme-soft"}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            kicker="Was uns ausmacht"
            title="Ehrliches Eis, ehrliche Zutaten"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`animate-fade-up rounded-card bg-white p-6 shadow-sm ${
                  playful ? "hover-wiggle" : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-3xl" aria-hidden="true">{h.icon}</p>
                <h3 className="mt-3 font-extrabold text-ink">{h.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KREATIONEN-TEASER ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          kicker="Signature Kreationen"
          title="Sieben Becher, sieben Geschichten"
          intro="Von fruchtig bis salzig-süß: Jede Kreation ist handgemacht und hat ihre eigenen Fans."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {creations.slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              href="/menue"
              className={`group overflow-hidden rounded-card bg-white shadow-sm transition-all hover:shadow-lg ${
                playful ? "hover:-translate-y-1 hover:-rotate-1" : ""
              }`}
            >
              <PlaceholderImage
                emoji={c.emoji}
                colorFrom={c.colorFrom}
                colorTo={c.colorTo}
                label={`${c.name} – Eiskreation`}
                className="aspect-[4/3] w-full"
              />
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-ink group-hover:text-rose">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-ink-soft">
                  {c.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTALink href="/menue" secondary>
            Alle 7 Kreationen ansehen
          </CTALink>
        </div>
      </section>

      {/* ================= CATERING-TEASER ================= */}
      <section className={playful ? "bg-rose text-white" : "bg-ink text-white"}>
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest opacity-80">
              Für Unternehmen & Veranstalter
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Eis-Catering, das im Gedächtnis bleibt
            </h2>
            <p className="mt-3 max-w-lg opacity-90">
              Ob Sommerfest, Messe oder Firmenjubiläum: Wir kommen mit dem
              Truck oder der mobilen Eistheke zu euch – inklusive Personal,
              Equipment und einem Menü nach euren Wünschen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/eis-catering"
              className="rounded-btn bg-white px-6 py-3 text-center font-extrabold text-rose-dark transition-colors hover:bg-creme"
            >
              Eis-Catering entdecken
            </Link>
            <Link
              href="/kontakt#catering"
              className="rounded-btn border-2 border-white px-6 py-3 text-center font-extrabold text-white transition-colors hover:bg-white/10"
            >
              Direkt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NÄCHSTE EVENTS ================= */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          kicker="Wo ihr uns findet"
          title="Unsere nächsten Stopps"
        />
        <div className="mt-8 grid gap-3">
          {nextEvents.map((e) => (
            <div
              key={e.name}
              className="flex flex-col justify-between gap-2 rounded-card bg-creme-soft p-5 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-extrabold text-ink">{e.name}</p>
                <p className="text-sm font-semibold text-ink-soft">
                  📍 {e.location} · {e.type}
                </p>
              </div>
              <p className="shrink-0 rounded-btn bg-rose px-3 py-1.5 text-sm font-extrabold text-white">
                {new Date(e.date).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                })}
                {e.endDate &&
                  ` – ${new Date(e.endDate).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "short",
                  })}`}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTALink href="/events" secondary>
            Alle Termine ansehen
          </CTALink>
        </div>
      </section>
    </>
  );
}
