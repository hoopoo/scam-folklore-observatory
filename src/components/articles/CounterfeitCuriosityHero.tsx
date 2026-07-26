import type { CounterfeitCuriosityArticle } from "@/types/article";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { FadeIn } from "@/components/articles/FadeIn";

export function CounterfeitCuriosityHero({
  article,
}: {
  article: Pick<
    CounterfeitCuriosityArticle,
    | "heroEyebrow"
    | "title"
    | "subtitle"
    | "titleEn"
    | "subtitleEn"
    | "category"
    | "categories"
    | "status"
    | "publishedAt"
    | "coreThesis"
    | "introduction"
  >;
}) {
  return (
    <div>
      <div className="mb-4">
        <span className="annotation text-[var(--accent-red)]">
          {article.heroEyebrow}
        </span>
      </div>
      <ArticleHeader
        title={article.title}
        subtitle={article.subtitle}
        titleEn={article.titleEn}
        subtitleEn={article.subtitleEn}
        category={article.category}
        categories={article.categories}
        status={article.status}
        publishedAt={article.publishedAt}
      />
      <FadeIn>
        <div className="prose-ja mt-6 space-y-4 text-[var(--ink-muted)]">
          {article.introduction.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <blockquote className="mt-6 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6">
          {article.coreThesis.map((line, i) => (
            <p
              key={i}
              className="text-base font-medium leading-relaxed md:text-lg"
            >
              {line}
            </p>
          ))}
        </blockquote>
      </FadeIn>
    </div>
  );
}

export function CounterfeitCuriosityCardVisual() {
  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)]" />
          <div className="flex flex-col gap-1">
            <div className="h-0.5 w-16 bg-[var(--border)]" />
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-sm border border-dashed border-[var(--accent-amber)]/40" />
              <div className="h-8 w-8 rounded-sm border border-[var(--border-subtle)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
