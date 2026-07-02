// =============================================================
// GALERIE – Bilderliste
// Echte Fotos einbinden: Bild nach /public/images/galerie/
// kopieren und hier den "image"-Pfad eintragen, z.B.
//   image: "/images/galerie/truck-sonnenuntergang.jpg"
// Solange kein Bild hinterlegt ist, wird ein farbiger
// Platzhalter mit Emoji angezeigt.
// =============================================================

export type GalleryItem = {
  id: string;
  title: string;                       // Bildunterschrift
  category: "Truck" | "Eiskreationen" | "Gäste" | "Atmosphäre";
  emoji: string;                       // Platzhalter
  colorFrom: string;
  colorTo: string;
  image?: string;                      // Optional: echtes Foto
};

export const galleryItems: GalleryItem[] = [
  { id: "truck-1", title: "Unser Truck im Abendlicht", category: "Truck", emoji: "🚚", colorFrom: "#EB515D", colorTo: "#8f2d35" },
  { id: "eis-1", title: "Beerentraum, frisch gezapft", category: "Eiskreationen", emoji: "🍓", colorFrom: "#f7c6cc", colorTo: "#EB515D" },
  { id: "atmo-1", title: "Goldene Stunde am Festivalgelände", category: "Atmosphäre", emoji: "🌅", colorFrom: "#ffe29a", colorTo: "#EB515D" },
  { id: "gaeste-1", title: "Die erste Kugel des Tages", category: "Gäste", emoji: "😋", colorFrom: "#FBF1D9", colorTo: "#f5a623" },
  { id: "eis-2", title: "Tropicana mit Kokosraspeln", category: "Eiskreationen", emoji: "🥭", colorFrom: "#ffe29a", colorTo: "#f5a623" },
  { id: "truck-2", title: "Aufbau am Morgen", category: "Truck", emoji: "🔧", colorFrom: "#dcedf7", colorTo: "#7db8d9" },
  { id: "atmo-2", title: "Lichterketten & Softeis", category: "Atmosphäre", emoji: "✨", colorFrom: "#c3c9f5", colorTo: "#5b6abf" },
  { id: "gaeste-2", title: "Kinderaugen am Kinderbecher", category: "Gäste", emoji: "🌈", colorFrom: "#fbd3e0", colorTo: "#9fd8f5" },
  { id: "eis-3", title: "Affogato XL – der Wachmacher", category: "Eiskreationen", emoji: "☕", colorFrom: "#d9c3ae", colorTo: "#4a2f23" },
  { id: "atmo-3", title: "Abendstimmung an der Theke", category: "Atmosphäre", emoji: "🎶", colorFrom: "#EB515D", colorTo: "#5b6abf" },
  { id: "eis-4", title: "Süß & Salzig im Detail", category: "Eiskreationen", emoji: "🥨", colorFrom: "#fbe3b8", colorTo: "#c98d3f" },
  { id: "truck-3", title: "Bereit für den Ansturm", category: "Truck", emoji: "🍦", colorFrom: "#FBF1D9", colorTo: "#EB515D" },
];
