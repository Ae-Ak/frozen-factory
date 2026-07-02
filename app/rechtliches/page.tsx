// =============================================================
// IMPRESSUM & DATENSCHUTZ
// ⚠️ WICHTIG: Die Angaben in [ECKIGEN KLAMMERN] vor dem
// Livegang durch die echten Firmendaten ersetzen und die
// Datenschutzerklärung juristisch prüfen lassen (z.B. über
// einen Generator wie eRecht24 oder eine Kanzlei).
// =============================================================

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz",
  description: "Impressum und Datenschutzerklärung der Frozen Factory.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      {/* ================= IMPRESSUM ================= */}
      <section id="impressum">
        <h1 className="text-3xl font-black text-ink sm:text-4xl">Impressum</h1>

        <div className="mt-6 space-y-4 text-ink">
          <p className="font-bold">Angaben gemäß § 5 DDG</p>
          <p>
            Frozen Factory – Die rollende Softeisdiele
            <br />
            [Vor- und Nachname der Inhaberin/des Inhabers]
            <br />
            [Straße Hausnummer]
            <br />
            [PLZ Ort]
          </p>
          <p>
            <span className="font-bold">Kontakt:</span>
            <br />
            Telefon: +49 170 123 45 67
            <br />
            E-Mail: hallo@frozen-factory.de
          </p>
          <p>
            <span className="font-bold">Umsatzsteuer-ID:</span>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [DE XXX XXX XXX]
          </p>
          <p>
            <span className="font-bold">Aufsichtsbehörde / Zuständiges Gewerbeamt:</span>
            <br />
            [Stadt/Landkreis eintragen]
          </p>
          <p>
            <span className="font-bold">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </span>
            <br />
            [Vor- und Nachname, Anschrift wie oben]
          </p>
          <p className="text-sm text-ink-soft">
            Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>

      {/* ================= DATENSCHUTZ ================= */}
      <section id="datenschutz" className="mt-14 border-t border-ink/10 pt-10">
        <h2 className="text-3xl font-black text-ink sm:text-4xl">
          Datenschutzerklärung
        </h2>

        <div className="mt-6 space-y-6 text-ink">
          <div>
            <h3 className="font-extrabold">1. Verantwortliche Stelle</h3>
            <p className="mt-1 text-ink-soft">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist
              die im Impressum genannte Person. Bei Fragen zum Datenschutz
              erreichst du uns unter hallo@frozen-factory.de.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">2. Erhebung und Speicherung personenbezogener Daten</h3>
            <p className="mt-1 text-ink-soft">
              Beim Besuch dieser Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles
              gespeichert (z.B. IP-Adresse, Datum und Uhrzeit des Zugriffs,
              verwendeter Browser). Diese Daten dienen der Sicherstellung
              eines störungsfreien Betriebs und werden nach [Speicherdauer
              eintragen] gelöscht.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">3. Kontakt- und Buchungsformulare</h3>
            <p className="mt-1 text-ink-soft">
              Wenn du uns über eines unserer Formulare kontaktierst, verarbeiten
              wir die von dir angegebenen Daten (Name, E-Mail-Adresse,
              Telefonnummer, Event-Details) ausschließlich zur Bearbeitung
              deiner Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden
              gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich
              sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">4. Newsletter</h3>
            <p className="mt-1 text-ink-soft">
              Für den Newsletter-Versand nutzen wir das Double-Opt-in-Verfahren:
              Du erhältst nach der Anmeldung eine Bestätigungs-E-Mail. Deine
              E-Mail-Adresse wird ausschließlich für den Versand des Newsletters
              verwendet (Art. 6 Abs. 1 lit. a DSGVO). Du kannst dich jederzeit
              über den Link in jeder E-Mail abmelden. [Eingesetzten
              Newsletter-Dienst eintragen.]
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">5. Webanalyse (Google Analytics)</h3>
            <p className="mt-1 text-ink-soft">
              Diese Website nutzt Google Analytics, einen Webanalysedienst der
              Google Ireland Limited. Die Nutzung erfolgt nur mit deiner
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und mit aktivierter
              IP-Anonymisierung. [Vor dem Livegang: Consent-Banner einrichten
              und diesen Abschnitt vervollständigen.]
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">6. Deine Rechte</h3>
            <p className="mt-1 text-ink-soft">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
              Widerspruch gegen die Verarbeitung deiner Daten. Außerdem kannst
              du dich bei einer Datenschutz-Aufsichtsbehörde beschweren.
            </p>
          </div>

          <p className="text-sm text-ink-soft">
            ⚠️ Hinweis für die Betreiber: Diese Datenschutzerklärung ist ein
            Grundgerüst und muss vor dem Livegang vervollständigt und
            juristisch geprüft werden.
          </p>
        </div>
      </section>
    </div>
  );
}
