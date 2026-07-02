// =============================================================
// BLOG / NEWS – statische Beiträge
// Neuen Beitrag hinzufügen: Eintrag OBEN in der Liste ergänzen.
// Der "slug" wird Teil der URL (/blog/mein-slug) – klein
// schreiben, keine Umlaute, Bindestriche statt Leerzeichen.
//
// Später kann diese Datei 1:1 durch eine Datenbank- oder
// CMS-Anbindung ersetzt werden – die Typen bleiben gleich.
// =============================================================

export type BlogPost = {
  slug: string;
  title: string;
  date: string;          // ISO-Datum "JJJJ-MM-TT"
  category: "Neue Kreation" | "Event-Rückblick" | "Hinter den Kulissen" | "Wissen";
  excerpt: string;       // Kurzer Anreißer für die Übersicht
  content: string[];     // Absätze des Beitrags
  emoji: string;         // Platzhalter-Bild
  colorFrom: string;
  colorTo: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sunrise-valley-rueckblick",
    title: "Sunrise Valley: Unser Festival-Debüt als Frozen Factory",
    date: "2026-06-16",
    category: "Event-Rückblick",
    emoji: "🎪",
    colorFrom: "#fbd3e0",
    colorTo: "#EB515D",
    excerpt:
      "Zwei Tage, tausende Becher und ein Truck, der zum ersten Mal in neuem Glanz strahlte – so war unser erstes Festival unter neuem Namen.",
    content: [
      "Zehn Jahre lang waren wir als Smoothie-Werkstatt auf Festivals unterwegs. Beim Sunrise Valley Festival in Ingolstadt sind wir zum ersten Mal als Frozen Factory an den Start gegangen – mit klopfenden Herzen und einer frisch polierten Softeismaschine.",
      "Was sollen wir sagen: Ihr habt uns den Start unvergesslich gemacht. Schon am Samstagmittag bildete sich die erste Schlange vor dem Truck, und der Beerentraum war am Abend restlos ausverkauft.",
      "Unser persönliches Highlight: die vielen bekannten Gesichter aus Smoothie-Zeiten, die extra vorbeigekommen sind, um das neue Kapitel mit uns zu feiern. Danke, dass ihr uns seit zehn Jahren begleitet.",
      "Nächster Halt: Summer Beats Festival in München. Wir sehen uns am Eiswagen!",
    ],
  },
  {
    slug: "neue-kreation-suess-und-salzig",
    title: "Neu im Menü: Süß & Salzig",
    date: "2026-06-02",
    category: "Neue Kreation",
    emoji: "🥨",
    colorFrom: "#fbe3b8",
    colorTo: "#c98d3f",
    excerpt:
      "Salzkaramell trifft Brezel-Crunch: Warum unsere neueste Kreation schon jetzt ein Publikumsliebling ist.",
    content: [
      "Manche Kombinationen klingen erst ungewöhnlich – und sind dann nicht mehr wegzudenken. Genau so ging es uns mit Süß & Salzig.",
      "Die Idee entstand, wie so oft, spät abends nach einem Festivaltag: Ein Rest Salzkaramell, eine Handvoll Brezeln und unser Softeis aus österreichischer Alpenvollmilch. Der erste Löffel – und uns war klar: Das kommt ins Menü.",
      "Wie bei allen unseren Soßen gilt auch hier: handgemacht, ehrliche Zutaten, kein Industriezeug. Das Salzkaramell kochen wir selbst ein, der Brezel-Crunch kommt von einer kleinen Bäckerei aus der Region.",
      "Probiert Süß & Salzig beim nächsten Event – und sagt uns, ob ihr Team süß oder Team salzig seid.",
    ],
  },
  {
    slug: "warum-laktosefrei",
    title: "100 % laktosefrei – warum eigentlich?",
    date: "2026-05-20",
    category: "Wissen",
    emoji: "🥛",
    colorFrom: "#dcedf7",
    colorTo: "#7db8d9",
    excerpt:
      "Alle unsere Kreationen sind komplett laktosefrei – ohne Kompromisse beim Geschmack. Hier erzählen wir, wie es dazu kam.",
    content: [
      "Auf Festivals treffen wir jeden Tag Menschen, die uns fragen: 'Ist das auch laktosefrei?' Vor ein paar Jahren mussten wir noch zu oft 'leider nein' sagen – und haben in enttäuschte Gesichter geblickt.",
      "Also haben wir getüftelt. Unser Softeis basiert auf österreichischer Alpenvollmilch, bei der die Laktose bereits aufgespalten ist. Das Ergebnis: dieselbe Cremigkeit, derselbe volle Geschmack – aber für alle verträglich.",
      "Heute ist unser komplettes Sortiment zu 100 % laktosefrei. Niemand muss mehr fragen, niemand muss verzichten. Eis ist schließlich für alle da.",
      "Einen ausführlichen Allergen-Guide mit allen Details zu unseren Zutaten veröffentlichen wir bald hier im Blog.",
    ],
  },
  {
    slug: "aus-smoothie-werkstatt-wird-frozen-factory",
    title: "Aus der Smoothie-Werkstatt wird die Frozen Factory",
    date: "2026-04-15",
    category: "Hinter den Kulissen",
    emoji: "🚚",
    colorFrom: "#FBF1D9",
    colorTo: "#EB515D",
    excerpt:
      "Nach zehn Jahren Smoothie-Werkstatt starten wir ein neues Kapitel. Die ganze Geschichte hinter unserem Relaunch.",
    content: [
      "Zehn Jahre. So lange sind wir mit der Smoothie-Werkstatt über Festivals, Stadtfeste und Firmenevents getourt. Zehntausende Becher, unzählige Sonnenaufgänge beim Aufbau und Freundschaften, die bis heute halten.",
      "Doch mit der Zeit haben wir gemerkt: Unser Herz schlägt fürs Eis. Die Softeismaschine, die anfangs nur ein Experiment war, wurde zum Star an unserem Truck. Immer öfter kamen die Leute nicht mehr für Smoothies – sondern für unsere Eisbecher.",
      "2026 haben wir die Konsequenz gezogen: Aus der Smoothie-Werkstatt wird die Frozen Factory. Neuer Name, neuer Look, gleiche Leidenschaft – und dieselben Menschen hinter der Theke.",
      "Was bleibt: unser Anspruch. Handgemacht statt Industrieware, echte Früchte statt Aromen, österreichische Alpenvollmilch statt Pulver. Und die Überzeugung, dass ein guter Eisbecher jeden Tag ein bisschen besser macht.",
    ],
  },
];
