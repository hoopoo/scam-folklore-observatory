import type { RelationalScamsLonelinessArticle } from "@/types/article";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { FadeIn } from "@/components/articles/FadeIn";

export function RelationalScamsHero({
  article,
}: {
  article: Pick<
    RelationalScamsLonelinessArticle,
    | "heroEyebrow"
    | "heroAlt"
    | "coreQuestion"
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
          role="img"
          aria-label={article.heroAlt}
        >
          <svg
            viewBox="0 0 720 300"
            className="relative h-auto w-full"
            aria-hidden
          >
            <rect
              x="0"
              y="0"
              width="720"
              height="300"
              fill="var(--accent-soft)"
              opacity="0.15"
            />
            <rect
              x="0"
              y="220"
              width="720"
              height="80"
              fill="var(--paper)"
              opacity="0.6"
            />

            {/* Night street lines */}
            {[80, 200, 340, 480, 600].map((x) => (
              <line
                key={x}
                x1={x}
                y1="220"
                x2={x}
                y2="300"
                stroke="var(--border-subtle)"
                strokeWidth="0.5"
                opacity="0.6"
              />
            ))}

            {/* Anonymous figure — no face */}
            <g transform="translate(320 130)">
              <ellipse
                cx="40"
                cy="72"
                rx="28"
                ry="8"
                fill="var(--ink-faint)"
                opacity="0.12"
              />
              <path
                d="M20 70 C22 40 58 40 60 70"
                fill="none"
                stroke="var(--ink-muted)"
                strokeWidth="1.2"
              />
              <circle
                cx="40"
                cy="28"
                r="16"
                fill="var(--paper-raised)"
                stroke="var(--ink-muted)"
                strokeWidth="1"
              />
            </g>

            {/* Threads — warm and dark */}
            {[
              { x1: 120, y1: 60, warm: true },
              { x1: 560, y1: 80, warm: false },
              { x1: 180, y1: 180, warm: false },
              { x1: 520, y1: 160, warm: true },
              { x1: 80, y1: 140, warm: true },
              { x1: 640, y1: 200, warm: false },
            ].map((t, i) => (
              <line
                key={i}
                x1={t.x1}
                y1={t.y1}
                x2="360"
                y2="158"
                stroke={t.warm ? "var(--accent-amber)" : "var(--ink-faint)"}
                strokeWidth={t.warm ? "1" : "0.75"}
                opacity={t.warm ? 0.55 : 0.35}
                strokeDasharray={t.warm ? undefined : "3 4"}
              />
            ))}

            {/* Phone */}
            <rect
              x="500"
              y="210"
              width="36"
              height="58"
              rx="3"
              fill="var(--paper)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <rect
              x="506"
              y="218"
              width="24"
              height="36"
              fill="var(--accent-soft)"
              opacity="0.4"
            />

            {/* Door */}
            <rect
              x="140"
              y="175"
              width="48"
              height="72"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <circle cx="178" cy="215" r="3" fill="var(--accent-amber)" opacity="0.5" />

            {/* Key shadow */}
            <g transform="translate(420 230)" opacity="0.4">
              <circle cx="8" cy="8" r="6" fill="none" stroke="var(--ink-faint)" />
              <rect x="12" y="6" width="16" height="4" fill="var(--ink-faint)" />
            </g>

            <text
              x="48"
              y="48"
              fill="var(--ink-faint)"
              fontSize="9"
              letterSpacing="0.16em"
            >
              NIGHT / THREADS / NO FACE
            </text>
          </svg>
          <p className="sr-only">{article.heroAlt}</p>
          <p className="border-t border-[var(--border-subtle)] px-4 py-3 text-center text-xs text-[var(--ink-faint)]">
            {article.heroAlt}
          </p>
        </div>

        <blockquote className="mt-6 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6">
          {article.coreQuestion.map((line, i) => (
            <p
              key={i}
              className="text-base font-medium leading-relaxed md:text-lg"
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

export function RelationalScamsCardVisual() {
  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 120 80" className="h-full w-full px-4">
          <circle cx="60" cy="40" r="10" fill="none" stroke="var(--ink-muted)" strokeWidth="1" />
          <line x1="20" y1="20" x2="60" y2="40" stroke="var(--accent-amber)" strokeWidth="0.75" opacity="0.6" />
          <line x1="100" y1="25" x2="60" y2="40" stroke="var(--ink-faint)" strokeWidth="0.75" opacity="0.5" />
          <line x1="30" y1="60" x2="60" y2="40" stroke="var(--ink-faint)" strokeWidth="0.75" opacity="0.4" strokeDasharray="2 2" />
          <line x1="95" y1="58" x2="60" y2="40" stroke="var(--accent-amber)" strokeWidth="0.75" opacity="0.45" />
        </svg>
      </div>
    </div>
  );
}
