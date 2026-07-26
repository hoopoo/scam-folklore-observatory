import type { ForgedAuthorityArticle } from "@/types/article";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { FadeIn } from "@/components/articles/FadeIn";

export function ForgedAuthorityHero({
  article,
}: {
  article: Pick<
    ForgedAuthorityArticle,
    | "heroEyebrow"
    | "heroHeadline"
    | "lead"
    | "title"
    | "subtitle"
    | "titleEn"
    | "subtitleEn"
    | "category"
    | "categories"
    | "status"
    | "publishedAt"
    | "readingTime"
  >;
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="annotation text-[var(--accent-red)]">
          {article.heroEyebrow}
        </span>
        <span className="annotation text-[var(--ink-faint)]">
          {article.readingTime} read
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
        <div
          className="relative mt-8 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--paper-raised)]"
          aria-hidden
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-1/3 w-px bg-[var(--border-subtle)]" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-[var(--border-subtle)]" />
          </div>
          <div className="relative grid gap-0 md:grid-cols-2">
            <div className="border-b border-[var(--border-subtle)] p-6 md:border-b-0 md:border-r">
              <p className="annotation mb-3">Face / Voice</p>
              <div className="space-y-2">
                <div className="h-2 w-2/3 rounded-sm bg-[var(--border)]" />
                <div className="h-2 w-1/2 rounded-sm bg-[var(--border-subtle)]" />
                <div className="mt-6 h-20 rounded-sm border border-dashed border-[var(--border)] bg-[var(--paper)]/70" />
                <p className="text-xs text-[var(--ink-faint)]">
                  外見の複製は入口にすぎない
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="annotation mb-3 text-[var(--accent-amber)]">
                Authority / Exception
              </p>
              <div className="space-y-2">
                {[
                  "緊急だから先に振り込んで",
                  "極秘なので誰にも言わないで",
                  "いつもの手順は今回は不要だ",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-sm border border-[var(--accent-amber)]/20 bg-[var(--accent-soft)]/40 px-3 py-2 text-xs text-[var(--ink-muted)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <blockquote className="mt-6 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
          {article.heroHeadline.map((line, i) => (
            <p
              key={i}
              className="text-lg font-medium leading-relaxed tracking-tight md:text-xl"
            >
              {line}
            </p>
          ))}
        </blockquote>

        <div className="prose-ja mt-6 space-y-4 text-[var(--ink-muted)]">
          {article.lead.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}

export function ForgedAuthorityCardVisual() {
  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
        <div className="h-14 w-14 rounded-sm border border-dashed border-[var(--border)] bg-[var(--paper-raised)]" />
        <div className="flex flex-col gap-1.5">
          <div className="h-0.5 w-20 bg-[var(--border)]" />
          <div className="h-8 w-28 rounded-sm border border-[var(--accent-amber)]/30 bg-[var(--accent-soft)]/50" />
          <div className="h-0.5 w-16 bg-[var(--border-subtle)]" />
        </div>
      </div>
      <span className="absolute bottom-2 right-3 annotation text-[var(--ink-faint)]">
        FORGED AUTHORITY
      </span>
    </div>
  );
}
