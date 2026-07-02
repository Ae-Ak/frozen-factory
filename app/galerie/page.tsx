import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Eindrücke von der Frozen Factory: unser Truck, die Eiskreationen, glückliche Gäste und Festival-Atmosphäre – mit Lightbox zum Durchblättern.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
          Galerie
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black text-ink sm:text-5xl">
          Momente, die nach Sommer schmecken.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Truck, Kreationen, Gäste und Gänsehaut-Atmosphäre – klick dich durch
          unsere schönsten Augenblicke.
        </p>
      </div>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </section>
  );
}
