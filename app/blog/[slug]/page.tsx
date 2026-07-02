// =============================================================
// BLOG-EINZELANSICHT (/blog/mein-beitrag)
// Statisch generiert für alle Beiträge aus data/blog.ts.
// =============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { PlaceholderImage } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

// Alle Beitrags-URLs beim Build vorab erzeugen
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Weitere Beiträge für den "Mehr lesen"-Bereich
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href="/blog"
        className="text-sm font-extrabold text-rose underline-offset-4 hover:underline"
      >
        ← Alle Beiträge
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-rose-soft px-2.5 py-1 text-rose-dark">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-ink-soft">
            {date}
          </time>
        </div>
        <h1 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <PlaceholderImage
        emoji={post.emoji}
        colorFrom={post.colorFrom}
        colorTo={post.colorTo}
        label={post.title}
        className="mt-8 aspect-[16/9] w-full rounded-card"
      />

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Weitere Beiträge */}
      {more.length > 0 && (
        <aside className="mt-14 border-t border-ink/10 pt-8">
          <h2 className="text-xl font-extrabold text-ink">Mehr aus dem Blog</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-card bg-creme-soft p-5 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-bold text-rose-dark">{p.category}</p>
                <p className="mt-1 font-extrabold text-ink">{p.title}</p>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
