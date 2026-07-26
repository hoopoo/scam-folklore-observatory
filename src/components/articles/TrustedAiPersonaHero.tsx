import type { TrustedAiPersonaArticle } from "@/types/article";
import { ArticleHeader } from "@/components/articles/ArticleHeader";

const CONVERSATION_LINES = [
  "最近、仕事のことがずっと頭から離れない…",
  "そうですね。前にも話してくれた、上司との関係が影響しているかもしれません。",
];

const RECOMMENDATION_LINES = [
  "最近、仕事のことがずっと頭から離れない…",
  "今のあなたには、休息と整理のためのこのサービスが合うかもしれません。",
];

export function TrustedAiPersonaHero({
  article,
}: {
  article: Pick<TrustedAiPersonaArticle, "heroQuote"> & {
    title: string;
    subtitle: string;
    titleEn?: string;
    subtitleEn?: string;
    category: TrustedAiPersonaArticle["category"];
    categories?: TrustedAiPersonaArticle["categories"];
    status: TrustedAiPersonaArticle["status"];
    publishedAt: string;
  };
}) {
  return (
    <div>
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

      <div
        className="relative mt-8 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--paper-raised)]"
        aria-hidden
      >
        {/* Memory layers */}
        <div className="pointer-events-none absolute inset-0">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="animate-memory-drift absolute inset-x-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/30 px-3 py-2 text-[10px] leading-relaxed text-[var(--ink-faint)]"
              style={{
                top: `${12 + i * 18}%`,
                opacity: 0.06 - i * 0.01,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              3週間前 — 孤独を感じる夜、恋愛の相談、身体の不安…
            </div>
          ))}
        </div>

        <div className="relative grid gap-0 md:grid-cols-[1fr_1.2fr]">
          {/* Quiet room visual — abstract */}
          <div className="border-b border-[var(--border-subtle)] bg-[var(--accent-soft)]/20 p-6 md:border-b-0 md:border-r">
            <p className="annotation mb-3">Observation Surface</p>
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded-sm bg-[var(--border)]" />
              <div className="h-2 w-1/2 rounded-sm bg-[var(--border-subtle)]" />
              <div className="mt-6 h-24 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)]/80" />
              <p className="text-xs text-[var(--ink-faint)]">
                静かな室内 — 長く使われてきた会話
              </p>
            </div>
          </div>

          {/* Conversation morph */}
          <div className="p-6">
            <p className="annotation mb-4">Conversation → Recommendation</p>
            <div className="relative min-h-[140px] space-y-3">
              <div className="animate-hero-morph-a absolute inset-x-0 top-0 space-y-3">
                {CONVERSATION_LINES.map((line, i) => (
                  <div
                    key={`a-${i}`}
                    className={`max-w-[90%] rounded-sm px-3 py-2 text-sm ${
                      i === 0
                        ? "ml-0 bg-[var(--paper)] text-[var(--ink-muted)]"
                        : "ml-auto border border-[var(--border-subtle)] bg-[var(--accent-soft)]/50 text-[var(--ink-muted)]"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="animate-hero-morph-b absolute inset-x-0 top-0 space-y-3">
                {RECOMMENDATION_LINES.map((line, i) => (
                  <div
                    key={`b-${i}`}
                    className={`max-w-[90%] rounded-sm px-3 py-2 text-sm ${
                      i === 0
                        ? "ml-0 bg-[var(--paper)] text-[var(--ink-muted)]"
                        : "ml-auto border border-[var(--accent-amber)]/25 bg-[var(--accent-soft)] text-[var(--ink)]"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <blockquote className="mt-6 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
        {article.heroQuote.map((line, i) => (
          <p
            key={i}
            className="text-lg font-medium leading-relaxed tracking-tight md:text-xl"
          >
            {line}
          </p>
        ))}
      </blockquote>
    </div>
  );
}

export function ArticleCardVisual({ slug }: { slug: string }) {
  if (slug !== "trusted-ai-persona-scam") {
    return (
      <div
        className="mb-4 h-28 rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/30"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="absolute inset-3 space-y-2">
        <div className="h-2 w-2/3 rounded-sm bg-[var(--border)]" />
        <div className="ml-auto h-6 w-4/5 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)]" />
        <div className="ml-auto h-6 w-3/5 rounded-sm border border-[var(--accent-amber)]/20 bg-[var(--accent-soft)]/60" />
      </div>
    </div>
  );
}
