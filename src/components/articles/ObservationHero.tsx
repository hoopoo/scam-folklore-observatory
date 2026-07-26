import type { ObservationArticle } from "@/types/article";
import {
  ArticleHeader,
  ArticleTags,
} from "@/components/articles/ArticleHeader";

export function ObservationHero({
  article,
}: {
  article: Pick<
    ObservationArticle,
    | "title"
    | "subtitle"
    | "category"
    | "status"
    | "publishedAt"
    | "heroCopy"
    | "heroSupplement"
  >;
}) {
  return (
    <header className="border-b border-[var(--border)] pb-8">
      <ArticleHeader
        title={article.title}
        subtitle={article.subtitle}
        category={article.category}
        status={article.status}
        publishedAt={article.publishedAt}
      />

      <div className="mt-8 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
        <blockquote className="space-y-2">
          {article.heroCopy.map((line, i) => (
            <p
              key={i}
              className="text-lg font-medium leading-relaxed tracking-tight md:text-xl"
            >
              {line}
            </p>
          ))}
        </blockquote>
        <p className="prose-ja mt-4 text-sm text-[var(--ink-muted)]">
          {article.heroSupplement}
        </p>
      </div>
    </header>
  );
}

export { ArticleTags };
