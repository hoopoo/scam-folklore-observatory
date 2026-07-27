import type { CorporateDevouringMaArticle } from "@/types/article";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { FadeIn } from "@/components/articles/FadeIn";
import { ThesisQuote } from "@/components/articles/ThesisQuote";

const WATERMARKS = [
  "OWNERSHIP",
  "CONTROL",
  "SUCCESSION",
  "ASSET",
  "TRUST",
  "LIQUIDATION",
];

export function CorporateDevouringHero({
  article,
}: {
  article: Pick<
    CorporateDevouringMaArticle,
    | "heroEyebrow"
    | "heroLead"
    | "keyQuote"
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
        <CorporateBodyVisual />

        <div className="prose-ja mt-6 space-y-4 text-[var(--ink-muted)]">
          {article.heroLead.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>

        <ThesisQuote lines={article.keyQuote} label="Key Quote / 観測命題" />
      </FadeIn>
    </div>
  );
}

function CorporateBodyVisual() {
  return (
    <div
      className="relative mt-8 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--paper-raised)]"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 grid-surface opacity-60" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {WATERMARKS.map((word, i) => (
          <span
            key={word}
            className="absolute annotation text-[var(--ink-faint)] opacity-[0.07]"
            style={{
              top: `${12 + i * 14}%`,
              left: i % 2 === 0 ? "6%" : "58%",
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="relative px-5 py-8 md:px-8 md:py-10">
        <p className="annotation mb-4">Corporate Body / Ownership Transfer</p>

        <svg
          viewBox="0 0 560 220"
          className="mx-auto h-auto w-full max-w-xl"
          role="img"
        >
          <title>Ownership layer slides away while the corporate shell remains</title>
          {/* Outer corporate shell */}
          <rect
            x="48"
            y="28"
            width="320"
            height="164"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[var(--ink-muted)]"
          />

          {/* Ownership layer — slides */}
          <g className="corporate-ownership-slide">
            <rect
              x="56"
              y="36"
              width="304"
              height="28"
              fill="var(--accent-soft)"
              stroke="var(--accent-amber)"
              strokeWidth="1"
              opacity="0.85"
            />
            <text
              x="208"
              y="54"
              textAnchor="middle"
              fill="var(--accent-amber)"
              fontSize="10"
              letterSpacing="0.12em"
              fontWeight="600"
            >
              OWNERSHIP
            </text>
          </g>

          {/* Internal cells */}
          {[
            [64, 78, 68, 36],
            [144, 78, 68, 36],
            [224, 78, 68, 36],
            [304, 78, 48, 36],
            [64, 126, 88, 48],
            [164, 126, 88, 48],
            [264, 126, 88, 48],
          ].map(([x, y, w, h], i) => (
            <rect
              key={i}
              x={x}
              y={y}
              width={w}
              height={h}
              fill="var(--paper)"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray={i >= 4 ? "3 2" : undefined}
              opacity={i >= 5 ? 0.55 : 0.9}
            />
          ))}

          {/* Fracture lines */}
          <path
            d="M120 126 L132 174 M200 126 L188 174 M280 126 L300 160"
            fill="none"
            stroke="var(--accent-red)"
            strokeWidth="1"
            opacity="0.45"
          />

          {/* Remaining shell label */}
          <text
            x="208"
            y="210"
            textAnchor="middle"
            fill="var(--ink-faint)"
            fontSize="9"
            letterSpacing="0.1em"
          >
            LEGAL SHELL REMAINS
          </text>

          {/* Destination ownership */}
          <rect
            x="400"
            y="48"
            width="120"
            height="36"
            fill="none"
            stroke="var(--accent-amber)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.7"
          />
          <text
            x="460"
            y="70"
            textAnchor="middle"
            fill="var(--accent-amber)"
            fontSize="9"
            letterSpacing="0.08em"
          >
            NEW CONTROL
          </text>
          <path
            d="M360 50 C380 50 380 66 400 66"
            fill="none"
            stroke="var(--accent-amber)"
            strokeWidth="1"
            opacity="0.5"
            className="corporate-ownership-arrow"
          />
        </svg>

        <p className="mt-4 text-center text-xs text-[var(--ink-faint)]">
          所有権だけが移り、組織の身体に亀裂が残る
        </p>
      </div>
    </div>
  );
}

export function CorporateDevouringCardVisual() {
  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 grid-surface opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
        <div className="relative h-16 w-24 border border-[var(--ink-muted)]/40">
          <div className="absolute inset-x-1 top-1 h-3 border border-[var(--accent-amber)]/50 bg-[var(--accent-soft)]/60" />
          <div className="absolute inset-x-2 bottom-2 grid grid-cols-3 gap-1">
            <div className="h-4 border border-dashed border-[var(--border)]" />
            <div className="h-4 border border-dashed border-[var(--border)]" />
            <div className="h-4 border border-dashed border-[var(--border)] opacity-50" />
          </div>
        </div>
        <div className="h-px w-8 bg-[var(--accent-amber)]/50" />
        <div className="h-8 w-14 border border-dashed border-[var(--accent-amber)]/40" />
      </div>
      <span className="absolute bottom-2 right-3 annotation text-[var(--ink-faint)]">
        CORPORATE BODY
      </span>
    </div>
  );
}
