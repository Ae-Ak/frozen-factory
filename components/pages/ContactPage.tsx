"use client";

// =============================================================
// KONTAKT
// Zwei Formulare als Tabs: (a) Festivals/Events buchen,
// (b) Eis-Catering anfragen. Über die Anker #buchung und
// #catering kann direkt zum passenden Formular verlinkt werden.
// =============================================================

import { useEffect, useState } from "react";
import { useDesign } from "@/components/DesignContext";
import BookingForm from "@/components/forms/BookingForm";
import CateringForm from "@/components/forms/CateringForm";

type Tab = "buchung" | "catering";

export default function ContactPage() {
  const { playful } = useDesign();
  const [tab, setTab] = useState<Tab>("buchung");

  // Wird die Seite mit #catering aufgerufen (z.B. vom
  // Catering-CTA), direkt den passenden Tab öffnen.
  useEffect(() => {
    if (window.location.hash === "#catering") setTab("catering");
  }, []);

  return (
    <>
      {/* Kopfbereich */}
      <section className={playful ? "bg-gradient-to-b from-creme to-creme-soft" : "bg-white"}>
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
            Kontakt
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black text-ink sm:text-5xl">
            Lass uns dein Event unvergesslich machen.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Schick uns deine Anfrage – wir antworten innerhalb von 48 Stunden
            mit einem unverbindlichen Angebot.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6" id="buchung">
        {/* Tab-Umschalter */}
        <div
          className="grid grid-cols-1 gap-2 sm:grid-cols-2"
          role="tablist"
          aria-label="Anfrage-Art wählen"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "buchung"}
            onClick={() => setTab("buchung")}
            className={`rounded-card px-4 py-3.5 text-left font-extrabold transition-colors ${
              tab === "buchung"
                ? "bg-rose text-white shadow-md"
                : "bg-creme-soft text-ink hover:bg-rose-soft"
            }`}
          >
            🎪 Festival / Event buchen
            <span className="block text-xs font-semibold opacity-80">
              Für Veranstalter von Festivals, Stadtfesten & Co.
            </span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "catering"}
            onClick={() => setTab("catering")}
            id="catering"
            className={`rounded-card px-4 py-3.5 text-left font-extrabold transition-colors ${
              tab === "catering"
                ? "bg-rose text-white shadow-md"
                : "bg-creme-soft text-ink hover:bg-rose-soft"
            }`}
          >
            🍨 Eis-Catering anfragen
            <span className="block text-xs font-semibold opacity-80">
              Für Firmenevents, Hochzeiten & private Feiern
            </span>
          </button>
        </div>

        {/* Aktives Formular */}
        <div
          className={`mt-6 rounded-card p-5 shadow-sm sm:p-8 ${
            playful ? "bg-white" : "bg-creme-soft"
          }`}
        >
          {tab === "buchung" ? <BookingForm /> : <CateringForm />}
        </div>

        {/* Direktkontakt */}
        <div className="mt-10 grid gap-4 text-center sm:grid-cols-3">
          <div className="rounded-card bg-creme-soft p-5">
            <p className="text-2xl" aria-hidden="true">📧</p>
            <p className="mt-1 text-sm font-bold text-ink">E-Mail</p>
            <a
              href="mailto:hallo@frozen-factory.de"
              className="text-sm font-semibold text-rose hover:underline"
            >
              hallo@frozen-factory.de
            </a>
          </div>
          <div className="rounded-card bg-creme-soft p-5">
            <p className="text-2xl" aria-hidden="true">📞</p>
            <p className="mt-1 text-sm font-bold text-ink">Telefon</p>
            <a
              href="tel:+491701234567"
              className="text-sm font-semibold text-rose hover:underline"
            >
              +49 170 123 45 67
            </a>
          </div>
          <div className="rounded-card bg-creme-soft p-5">
            <p className="text-2xl" aria-hidden="true">📸</p>
            <p className="mt-1 text-sm font-bold text-ink">Social Media</p>
            <p className="text-sm font-semibold">
              <a
                href="https://www.instagram.com/frozenfactory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:underline"
              >
                Instagram
              </a>
              {" · "}
              <a
                href="https://www.facebook.com/frozenfactory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:underline"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
