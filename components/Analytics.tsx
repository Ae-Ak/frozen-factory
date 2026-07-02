// =============================================================
// GOOGLE ANALYTICS – PLATZHALTER
// -------------------------------------------------------------
// Aktivieren:
// 1. In Google Analytics eine Property anlegen (GA4).
// 2. Die Mess-ID (Format "G-XXXXXXXXXX") unten eintragen
//    oder als Umgebungsvariable NEXT_PUBLIC_GA_ID setzen.
// 3. Fertig – die Skripte werden dann automatisch geladen.
//
// Hinweis Datenschutz: Vor dem Livegang prüfen, ob ein
// Cookie-Consent-Banner nötig ist (bei GA in der Regel ja).
// =============================================================

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""; // z.B. "G-XXXXXXXXXX"

export default function Analytics() {
  // Ohne Mess-ID wird nichts geladen (Entwicklung / vor Einrichtung)
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
