import type { ForgedRelationshipArticle } from "@/types/article";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { FadeIn } from "@/components/articles/FadeIn";

export function ForgedRelationshipHero({
  article,
}: {
  article: Pick<
    ForgedRelationshipArticle,
    | "heroEyebrow"
    | "heroHeadline"
    | "heroAlt"
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
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--border)]" />
            <div className="absolute inset-y-0 left-[18%] w-px bg-[var(--border-subtle)]" />
            <div className="absolute inset-y-0 right-[28%] w-px bg-[var(--border-subtle)]" />
            <div className="absolute inset-x-0 bottom-[22%] h-px bg-[var(--border-subtle)]" />
          </div>

          <svg
            viewBox="0 0 720 280"
            className="relative h-auto w-full"
            aria-hidden
          >
            <rect
              x="24"
              y="28"
              width="672"
              height="224"
              fill="var(--paper)"
              stroke="var(--border-subtle)"
              strokeWidth="1"
            />
            <text
              x="48"
              y="56"
              fill="var(--ink-faint)"
              fontSize="10"
              letterSpacing="0.18em"
            >
              DEPARTURE HALL / GATE QUIET
            </text>

            {/* Speaker figure — holds documents */}
            <g transform="translate(220 96)">
              <circle
                cx="28"
                cy="18"
                r="14"
                fill="none"
                stroke="var(--ink-muted)"
                strokeWidth="1.2"
              />
              <path
                d="M8 78 C10 48 46 48 48 78"
                fill="none"
                stroke="var(--ink-muted)"
                strokeWidth="1.2"
              />
              <rect
                x="40"
                y="52"
                width="34"
                height="22"
                rx="1"
                fill="var(--paper-raised)"
                stroke="var(--accent-amber)"
                strokeWidth="1"
              />
              <rect
                x="46"
                y="58"
                width="22"
                height="2"
                fill="var(--border)"
              />
              <rect
                x="46"
                y="64"
                width="16"
                height="2"
                fill="var(--border-subtle)"
              />
              <text
                x="42"
                y="96"
                fill="var(--ink-faint)"
                fontSize="9"
                letterSpacing="0.08em"
              >
                SPEAKS
              </text>
            </g>

            {/* Silent figure — slightly apart */}
            <g transform="translate(390 108)">
              <circle
                cx="28"
                cy="18"
                r="14"
                fill="none"
                stroke="var(--ink-faint)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <path
                d="M10 74 C14 50 42 50 46 74"
                fill="none"
                stroke="var(--ink-faint)"
                strokeWidth="1"
              />
              <text
                x="16"
                y="96"
                fill="var(--ink-faint)"
                fontSize="9"
                letterSpacing="0.08em"
              >
                SILENT
              </text>
            </g>

            {/* Distance tension line */}
            <line
              x1="292"
              y1="150"
              x2="390"
              y2="150"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
            <text
              x="318"
              y="142"
              fill="var(--ink-faint)"
              fontSize="8"
              letterSpacing="0.12em"
            >
              GAP
            </text>

            <text
              x="48"
              y="230"
              fill="var(--ink-faint)"
              fontSize="9"
              letterSpacing="0.14em"
            >
              TWO PASSPORTS · ONE VOICE · RELATIONSHIP UNKNOWN
            </text>
          </svg>

          <p className="sr-only">{article.heroAlt}</p>
          <p className="border-t border-[var(--border-subtle)] px-4 py-3 text-center text-xs text-[var(--ink-faint)]">
            {article.heroAlt}
          </p>
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

export function ForgedRelationshipCardVisual() {
  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-end justify-between px-6 pb-5 pt-6">
        <div className="flex items-end gap-5">
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-8 rounded-full border border-[var(--ink-muted)]" />
            <div className="h-10 w-12 rounded-sm border border-[var(--ink-muted)]" />
            <div className="mt-1 h-3 w-8 rounded-sm border border-[var(--accent-amber)]/40 bg-[var(--accent-soft)]/60" />
          </div>
          <div className="mb-4 h-px w-10 border-t border-dashed border-[var(--border)]" />
          <div className="flex flex-col items-center gap-1 opacity-70">
            <div className="h-8 w-8 rounded-full border border-dashed border-[var(--ink-faint)]" />
            <div className="h-10 w-12 rounded-sm border border-dashed border-[var(--ink-faint)]" />
          </div>
        </div>
        <p className="annotation text-[var(--ink-faint)]">PROXY VOICE</p>
      </div>
    </div>
  );
}
