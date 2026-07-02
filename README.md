# 🍦 Frozen Factory – Website

Moderne, responsive Website für **Frozen Factory – Die rollende Softeisdiele**.
Gebaut mit React / Next.js (App Router) und Tailwind CSS.

> ✅ **Auto-Deploy aktiv:** Änderungen pushen → GitHub → Hostinger (automatisch!)

## Schnellstart

```bash
npm install       # einmalig: Abhängigkeiten installieren
npm run dev       # Entwicklungsserver → http://localhost:3000
npm run build     # Produktions-Build erstellen
```

## Die zwei Design-Varianten

Oben rechts im Header (bzw. im mobilen Menü) sitzt der Umschalter:

| Variante | Charakter |
|---|---|
| **Elegant** | Minimalistisch, viel Weißraum, dezente Ecken – professionell |
| **Festival** | Cremefarbener Hintergrund, runde Formen, Animationen (schwebender Eisbecher, Streusel, Wackel-Hover) |

Die Wahl wird im Browser gespeichert (`localStorage`). Technisch steuert ein
`data-variant`-Attribut am `<html>`-Element die CSS-Variablen
([globals.css](app/globals.css)) und der React-Context
([DesignContext.tsx](components/DesignContext.tsx)) die Komponenten.
**Für den Livegang** eine Variante fest einstellen: in `DesignContext.tsx`
den Startwert von `useState<DesignVariant>("minimal")` ändern und den
`VariantToggle` aus dem Header entfernen.

## Inhalte selbst pflegen (ohne Programmierkenntnisse)

Alle Inhalte liegen in einfachen Listen im Ordner **`data/`** –
Eintrag kopieren, Texte ändern, speichern, fertig:

| Datei | Inhalt |
|---|---|
| `data/creations.ts` | Die 7 Signature Kreationen (Menü-Seite) |
| `data/events.ts` | Termine – vergangene Events wandern automatisch in den Rückblick |
| `data/blog.ts` | Blog-Beiträge (neueste oben eintragen) |
| `data/gallery.ts` | Galerie-Bilder mit Kategorien |

**Echte Fotos einbinden:** Bilder nach `public/images/…` kopieren und in der
jeweiligen Daten-Datei den `image`-Pfad ergänzen. Solange kein Bild hinterlegt
ist, zeigt die Seite farbige Platzhalter mit Emojis.

**Später mit Datenbank/CMS:** Die Daten-Dateien sind bewusst so getypt, dass
sie 1:1 durch eine API- oder CMS-Anbindung (z.B. Sanity, Strapi, Supabase)
ersetzt werden können – die Seiten müssen dafür nicht umgebaut werden.

## Formulare scharf schalten

Beide Formulare (Event-Buchung + Eis-Catering) laufen aktuell im
**Demo-Modus**: Validierung und Bestätigung funktionieren, der Versand wird
nur simuliert (Ausgabe in der Browser-Konsole).

Für den echten Versand: Anleitung in
[components/forms/submit.ts](components/forms/submit.ts) – dort ist der
EmailJS-Code vorbereitet (Konto anlegen, drei IDs eintragen, fertig).
Alternativ eine eigene API-Route mit z.B. Resend anbinden.

## Google Analytics aktivieren

Mess-ID (GA4, Format `G-XXXXXXXXXX`) als Umgebungsvariable setzen:

```
# Datei .env.local anlegen:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Details und Datenschutz-Hinweis in [components/Analytics.tsx](components/Analytics.tsx).
**Wichtig:** Vor dem Livegang Cookie-Consent-Banner ergänzen.

## Vor dem Livegang – Checkliste

- [ ] Impressum & Datenschutz in [app/rechtliches/page.tsx](app/rechtliches/page.tsx) vervollständigen (Platzhalter in `[eckigen Klammern]`) und juristisch prüfen lassen
- [ ] Echte Social-Media-URLs in `components/Footer.tsx` und `components/pages/ContactPage.tsx` eintragen
- [ ] E-Mail-Adresse & Telefonnummer prüfen (aktuell Platzhalter)
- [ ] Formular-Versand aktivieren (siehe oben)
- [ ] Echte Fotos für Galerie, Menü und Blog hinterlegen
- [ ] Google Analytics + Consent-Banner einrichten
- [ ] Design-Variante final wählen

## Projektstruktur

```
app/                  Seiten (Next.js App Router)
  page.tsx            Startseite
  ueber-uns/          Über uns
  menue/              Menü / 7 Kreationen
  eis-catering/       B2B-Catering
  events/             Events & Festivals
  galerie/            Galerie mit Lightbox
  blog/               Blog-Übersicht + Einzelbeiträge
  kontakt/            Kontakt mit beiden Formularen
  rechtliches/        Impressum & Datenschutz
components/           Wiederverwendbare Bausteine
  forms/              Formulare + Validierung + Versand
  pages/              Seiteninhalte (Client-Komponenten)
data/                 ← Hier Inhalte pflegen
public/images/        ← Hier echte Fotos ablegen
```
