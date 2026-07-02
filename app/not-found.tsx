// 404-Seite – wird angezeigt, wenn eine URL nicht existiert.

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl" aria-hidden="true">🍦</p>
      <h1 className="mt-4 text-3xl font-black text-ink">
        Ups – diese Seite ist geschmolzen.
      </h1>
      <p className="mt-3 text-ink-soft">
        Die gesuchte Seite gibt es nicht (mehr). Aber keine Sorge: Frisches
        Eis gibt&apos;s trotzdem.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-btn bg-rose px-6 py-3 font-extrabold text-white hover:bg-rose-dark"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
