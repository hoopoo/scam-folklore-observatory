import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestArticles } from "@/lib/articles";
import { ArticleListItem } from "@/components/intimacy/ArticleCard";

export function LatestArticlesSection() {
  const latest = getLatestArticles(4);

  if (latest.length === 0) return null;

  return (
    <section
      id="latest-articles"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="latest-articles-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="annotation mb-1">Latest Articles</p>
            <h2
              id="latest-articles-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              最新のArticles
            </h2>
            <p className="prose-ja mt-3 max-w-xl text-sm text-[var(--ink-muted)]">
              観測記録は、起きたことを残す。
              <br />
              Articlesは、それが何を意味するのかを考える。
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--ink-faint)]">
              Observations record what happened. Articles ask what those
              records mean.
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden shrink-0 items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] sm:inline-flex"
          >
            すべて見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
        <div>
          {latest.map((a) => (
            <ArticleListItem key={a.id} article={a} />
          ))}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)]"
          >
            すべてのArticlesを見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
