"use client";

// =============================================================
// GALERIE MIT LIGHTBOX
// Kategorie-Filter + Klick auf ein Bild öffnet die Lightbox
// (Modal) mit Vor-/Zurück-Navigation und Tastatursteuerung
// (Pfeiltasten, Escape).
// =============================================================

import { useCallback, useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { useDesign } from "./DesignContext";
import { PlaceholderImage } from "./ui";

const categories = ["Alle", "Truck", "Eiskreationen", "Gäste", "Atmosphäre"] as const;

export default function GalleryGrid() {
  const { playful } = useDesign();
  const [filter, setFilter] = useState<(typeof categories)[number]>("Alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible: GalleryItem[] =
    filter === "Alle"
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );

  // Tastatursteuerung für die Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  const current = lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <div>
      {/* Kategorie-Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setFilter(c);
              setLightboxIndex(null);
            }}
            aria-pressed={filter === c}
            className={`rounded-btn px-4 py-2 text-sm font-bold transition-colors ${
              filter === c
                ? "bg-rose text-white"
                : playful
                  ? "bg-white text-ink shadow-sm hover:bg-rose-soft"
                  : "bg-creme text-ink hover:bg-rose-soft"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Bilderraster */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className={`group overflow-hidden rounded-card text-left shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose ${
              playful ? "hover:-rotate-1" : ""
            }`}
            aria-label={`${item.title} vergrößern`}
          >
            <PlaceholderImage
              emoji={item.emoji}
              colorFrom={item.colorFrom}
              colorTo={item.colorTo}
              label={item.title}
              className="aspect-square w-full"
            />
            <span className="block bg-white px-3 py-2 text-xs font-bold text-ink sm:text-sm">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4"
          onClick={close}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-card bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderImage
              emoji={current.emoji}
              colorFrom={current.colorFrom}
              colorTo={current.colorTo}
              label={current.title}
              className="aspect-video w-full"
            />
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div>
                <p className="font-extrabold text-ink">{current.title}</p>
                <p className="text-xs font-semibold text-ink-soft">
                  {current.category} · Bild {lightboxIndex! + 1} von {visible.length}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Vorheriges Bild"
                  className="h-10 w-10 rounded-btn bg-creme font-extrabold text-ink hover:bg-rose-soft"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Nächstes Bild"
                  className="h-10 w-10 rounded-btn bg-creme font-extrabold text-ink hover:bg-rose-soft"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Lightbox schließen"
                  className="h-10 w-10 rounded-btn bg-rose font-extrabold text-white hover:bg-rose-dark"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
