// =============================================================
// EVENTS & FESTIVALS – Terminkalender
// Neuen Termin hinzufügen: Eintrag oben ergänzen (Datum im
// Format JJJJ-MM-TT). Vergangene Termine wandern automatisch
// in den Bereich "Vergangene Events".
// =============================================================

export type EventEntry = {
  date: string;        // ISO-Datum, z.B. "2026-07-18"
  endDate?: string;    // Optional: letzter Tag bei mehrtägigen Events
  name: string;        // Name des Events
  location: string;    // Ort
  type: "Festival" | "Firmenanlass" | "Private Veranstaltung" | "Stadtfest";
  note?: string;       // Optionale Zusatzinfo
};

export const events: EventEntry[] = [
  {
    date: "2026-07-10",
    endDate: "2026-07-12",
    name: "Summer Beats Festival",
    location: "München",
    type: "Festival",
    note: "Ihr findet uns direkt am Haupteingang – Affogato XL nicht verpassen!",
  },
  {
    date: "2026-07-25",
    name: "Stadtfest Rosenheim",
    location: "Rosenheim",
    type: "Stadtfest",
  },
  {
    date: "2026-08-07",
    endDate: "2026-08-09",
    name: "Electric Meadows",
    location: "Nürnberg",
    type: "Festival",
    note: "Premiere für eine neue Sommer-Kreation 🍑",
  },
  {
    date: "2026-08-22",
    name: "Sommerfest TechCampus",
    location: "Augsburg",
    type: "Firmenanlass",
  },
  {
    date: "2026-09-05",
    endDate: "2026-09-06",
    name: "Herbstzauber Open Air",
    location: "Regensburg",
    type: "Festival",
  },
  // ---- Vergangene Events (für den Rückblick) ----
  {
    date: "2026-05-30",
    name: "Frühlingsfest am See",
    location: "Starnberg",
    type: "Stadtfest",
    note: "Über 800 Becher an einem Tag – danke für den Wahnsinn!",
  },
  {
    date: "2026-06-13",
    endDate: "2026-06-14",
    name: "Sunrise Valley Festival",
    location: "Ingolstadt",
    type: "Festival",
    note: "Unser Festival-Debüt als Frozen Factory 💛",
  },
];
