"use client";

// =============================================================
// EVENTS & FESTIVALS
// Kommende Termine als Kalender-Liste, vergangene Events als
// Rückblick. Datenpflege in data/events.ts.
// =============================================================

import { events, type EventEntry } from "@/data/events";
import { useDesign } from "@/components/DesignContext";
import { CTALink, SectionHeading } from "@/components/ui";

// Datum hübsch formatieren, z.B. "10.–12. Juli 2026"
function formatRange(e: EventEntry): string {
  const start = new Date(e.date);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  if (!e.endDate) return start.toLocaleDateString("de-DE", opts);
  const end = new Date(e.endDate);
  return `${start.toLocaleDateString("de-DE", { day: "numeric" })}.–${end.toLocaleDateString("de-DE", opts)}`;
}

const typeEmoji: Record<EventEntry["type"], string> = {
  Festival: "🎪",
  Firmenanlass: "🏢",
  "Private Veranstaltung": "🎉",
  Stadtfest: "🎠",
};

export default function EventsPage() {
  const { playful } = useDesign();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events
    .filter((e) => new Date(e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => new Date(e.endDate ?? e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* Kopfbereich */}
      <section className={playful ? "bg-gradient-to-b from-creme to-creme-soft" : "bg-white"}>
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
            Events & Festivals
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black text-ink sm:text-5xl">
            Hier rollt der Truck als Nächstes hin.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Alle bestätigten Termine auf einen Blick. Folge uns auf Instagram
            für spontane Stopps und Live-Updates vom Gelände.
          </p>
        </div>
      </section>

      {/* Kommende Termine */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <SectionHeading kicker="Tourplan" title="Kommende Termine" align="left" />
        <div className="mt-8 space-y-3">
          {upcoming.length === 0 && (
            <p className="rounded-card bg-creme-soft p-6 text-ink-soft">
              Gerade sind keine öffentlichen Termine bestätigt – schau bald
              wieder vorbei oder folge uns auf Social Media.
            </p>
          )}
          {upcoming.map((e) => (
            <article
              key={`${e.date}-${e.name}`}
              className={`flex flex-col gap-3 rounded-card p-5 shadow-sm sm:flex-row sm:items-center sm:gap-5 ${
                playful ? "bg-white" : "bg-creme-soft"
              }`}
            >
              {/* Datums-Kachel */}
              <div className="flex shrink-0 items-center gap-4 sm:block sm:text-center">
                <div className="w-20 rounded-card bg-rose px-2 py-2.5 text-white">
                  <p className="text-2xl font-black leading-none">
                    {new Date(e.date).getDate()}
                  </p>
                  <p className="text-xs font-bold uppercase">
                    {new Date(e.date).toLocaleDateString("de-DE", { month: "short" })}
                  </p>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-rose">
                  {typeEmoji[e.type]} {e.type}
                </p>
                <h3 className="text-lg font-extrabold text-ink">{e.name}</h3>
                <p className="text-sm font-semibold text-ink-soft">
                  📍 {e.location} · {formatRange(e)}
                </p>
                {e.note && <p className="mt-1 text-sm text-ink-soft">{e.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Vergangene Events */}
      {past.length > 0 && (
        <section className={playful ? "bg-rose-soft" : "bg-creme-soft"}>
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <SectionHeading kicker="Rückblick" title="Da waren wir schon" align="left" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {past.map((e) => (
                <article
                  key={`${e.date}-${e.name}`}
                  className="rounded-card bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">
                    {formatRange(e)}
                  </p>
                  <h3 className="mt-1 font-extrabold text-ink">{e.name}</h3>
                  <p className="text-sm font-semibold text-ink-soft">📍 {e.location}</p>
                  {e.note && <p className="mt-2 text-sm text-ink-soft">{e.note}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA für Veranstalter */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold text-ink">
          Dein Event fehlt in dieser Liste?
        </h2>
        <p className="mt-3 text-ink-soft">
          Wir sind flexibel unterwegs – auf Festivals, Firmenevents und
          privaten Veranstaltungen in ganz Süddeutschland und darüber hinaus.
        </p>
        <div className="mt-6">
          <CTALink href="/kontakt">Frozen Factory buchen</CTALink>
        </div>
      </section>
    </>
  );
}
