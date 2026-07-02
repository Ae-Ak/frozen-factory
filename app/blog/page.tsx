// =============================================================
// BLOG-ÜBERSICHT (News)
// Server-Komponente: Beiträge kommen aus data/blog.ts und
// werden statisch gerendert – gut für SEO und Ladezeit.
// =============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { PlaceholderImage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Neuigkeiten aus der Frozen Factory: neue Eiskreationen, Event-Rückblicke und Blicke hinter die Kulissen der rollenden Softeisdiele.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Page() {
  // Neueste Beiträge zuerst
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-rose">
          Blog & News
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-black text-ink sm:text-5xl">
          Frisch aus der Factory.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Neue Kreationen, Event-Rückblicke und alles, was hinter der Theke
          passiert.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-card bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <PlaceholderImage
                emoji={post.emoji}
                colorFrom={post.colorFrom}
                colorTo={post.colorTo}
                label={post.title}
                className="aspect-[16/9] w-full"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="rounded-full bg-rose-soft px-2.5 py-1 text-rose-dark">
                    {post.category}
                  </span>
                  <time dateTime={post.date} className="text-ink-soft">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h2 className="mt-3 text-lg font-extrabold leading-snug text-ink group-hover:text-rose">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
                <p className="mt-3 text-sm font-extrabold text-rose">
                  Weiterlesen →
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
