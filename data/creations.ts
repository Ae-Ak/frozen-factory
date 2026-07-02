// =============================================================
// SIGNATURE KREATIONEN – zentrale Datenquelle für das Menü
// Neue Kreation hinzufügen: einfach einen Eintrag ergänzen.
// Die Farben werden für die Illustrationen/Platzhalter genutzt,
// bis echte Fotos vorliegen (dann: image-Pfad eintragen).
// =============================================================

export type Creation = {
  slug: string;          // URL-freundlicher Name (klein, ohne Umlaute)
  name: string;          // Anzeigename
  tagline: string;       // Kurzer Claim (eine Zeile)
  description: string;   // Ausführlichere Beschreibung
  toppings: string[];    // Beispiel-Toppings
  emoji: string;         // Platzhalter-Illustration
  colorFrom: string;     // Verlaufsfarbe oben (Platzhalterbild)
  colorTo: string;       // Verlaufsfarbe unten (Platzhalterbild)
  image?: string;        // Optional: Pfad zu echtem Foto in /public/images
};

export const creations: Creation[] = [
  {
    slug: "beerentraum",
    name: "Beerentraum",
    tagline: "Rote Verführung, Becher für Becher.",
    description:
      "Cremiges Softeis trifft auf eine Soße aus 90 % echten roten Beeren. Fruchtig, intensiv und jedes Mal ein kleines Fest – unser Klassiker, der auf keinem Festival fehlen darf.",
    toppings: ["Frische Beeren", "Beerensoße", "Knusper-Crumble"],
    emoji: "🍓",
    colorFrom: "#f7c6cc",
    colorTo: "#EB515D",
  },
  {
    slug: "tropicana",
    name: "Tropicana",
    tagline: "Exotik trifft Dancefloor-Energie.",
    description:
      "Mango, Maracuja und ein Hauch Kokos – dieser Becher schmeckt nach Sommer, Sonne und der besten Zeit deines Lebens. Für alle, die beim Tanzen eine Abkühlung brauchen.",
    toppings: ["Mangosoße", "Kokosraspeln", "Maracuja-Topping"],
    emoji: "🥭",
    colorFrom: "#ffe29a",
    colorTo: "#f5a623",
  },
  {
    slug: "blaubeerbecher",
    name: "Blaubeerbecher",
    tagline: "Tief, intensiv, unvergesslich.",
    description:
      "Dunkle Blaubeersoße aus 90 % echten Früchten umhüllt unser handgemachtes Softeis. Ein Becher wie ein Sonnenuntergang nach einem perfekten Festivaltag.",
    toppings: ["Blaubeersoße", "Frische Blaubeeren", "Weiße Schoko-Splitter"],
    emoji: "🫐",
    colorFrom: "#c3c9f5",
    colorTo: "#5b6abf",
  },
  {
    slug: "nussgenuss",
    name: "Nussgenuss",
    tagline: "Schokoladig, knackig, groovy.",
    description:
      "Geröstete Nüsse, warme Schokosoße und cremiges Softeis aus österreichischer Alpenvollmilch. Der Becher für alle, die es gehaltvoll und ehrlich mögen.",
    toppings: ["Schokosoße", "Geröstete Haselnüsse", "Karamell-Krokant"],
    emoji: "🌰",
    colorFrom: "#e8cdb0",
    colorTo: "#8b5e3c",
  },
  {
    slug: "suess-und-salzig",
    name: "Süß & Salzig",
    tagline: "Für alle, die das Besondere feiern.",
    description:
      "Salziges Karamell, knusprige Brezelstückchen und süßes Softeis – die Kombination, über die alle reden. Einmal probiert, für immer verliebt.",
    toppings: ["Salzkaramell", "Brezel-Crunch", "Karamellsoße"],
    emoji: "🥨",
    colorFrom: "#fbe3b8",
    colorTo: "#c98d3f",
  },
  {
    slug: "affogato-xl",
    name: "Affogato XL",
    tagline: "Der Warm-up vor dem nächsten Set.",
    description:
      "Ein doppelter Espresso trifft auf eiskaltes Softeis – heiß, kalt, wach, glücklich. Der perfekte Energie-Kick zwischen zwei Acts.",
    toppings: ["Doppelter Espresso", "Kakao-Nibs", "Schokoraspeln"],
    emoji: "☕",
    colorFrom: "#d9c3ae",
    colorTo: "#4a2f23",
  },
  {
    slug: "kinderbecher",
    name: "Kinderbecher",
    tagline: "Bunt, cremig, voller Magie.",
    description:
      "Kleiner Becher, großes Strahlen: buntes Topping-Konfetti, fruchtige Soße und eine Extraportion Magie. Weil die kleinsten Gäste die größten Fans sind.",
    toppings: ["Bunte Streusel", "Fruchtsoße nach Wahl", "Mini-Marshmallows"],
    emoji: "🌈",
    colorFrom: "#fbd3e0",
    colorTo: "#9fd8f5",
  },
];
