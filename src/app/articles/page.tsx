import type { Metadata } from "next";
import { getArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/intimacy/ArticleCard";

export const metadata: Metadata = {
  title: "Articles / 考察記事",
  description:
    "観測記録をもとに、その変化が社会、人間、制度、市場にとって何を意味するかを考察する記事。",
};

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="mb-12 max-w-2xl">
        <p className="annotation mb-2">Articles</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          考察記事
        </h1>
        <p className="prose-ja mt-4 text-sm text-[var(--ink-muted)]">
          Observations record what happened. Articles ask what those records
          mean.
        </p>
        <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
          観測記録は、起きた事象・分類・出典・リスクを残す。
          Articlesは、単一または複数の観測をもとに、変化の意味を静かに考察する。
        </p>
      </header>

      {articles.length === 0 ? (
        <p className="text-sm text-[var(--ink-faint)]">
          公開中の記事はまだありません。
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
