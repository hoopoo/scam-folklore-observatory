import type { CounterfeitIntimacyArticle } from "@/types/article";
import { formatDate } from "@/lib/display";
import { FadeIn } from "@/components/articles/FadeIn";

export function CounterfeitIntimacyHero({
  article,
}: {
  article: Pick<
    CounterfeitIntimacyArticle,
    | "heroEyebrow"
    | "trustState"
    | "title"
    | "subtitle"
    | "heroLead"
    | "publishedAt"
  >;
}) {
  return (
    <FadeIn>
      <header className="border-b border-[var(--border)] pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="annotation text-[var(--accent-red)]">
            {article.heroEyebrow}
          </span>
          <span className="annotation ml-auto rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]">
            {article.trustState}
          </span>
          <time
            dateTime={article.publishedAt}
            className="annotation w-full text-[var(--ink-faint)] sm:ml-auto sm:w-auto"
          >
            Recorded {formatDate(article.publishedAt)}
          </time>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {article.title}
        </h1>
        <p className="mt-2 text-[var(--ink-muted)]">{article.subtitle}</p>

        <div
          className="relative mt-8 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8"
          aria-hidden
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-4 top-4 h-16 w-24 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)]" />
            <div className="absolute right-6 top-8 h-8 w-32 rounded-sm bg-[var(--border-subtle)]" />
            <div className="absolute bottom-6 left-8 h-10 w-40 rounded-sm border border-dashed border-[var(--border)]" />
            <div className="absolute bottom-10 right-10 h-6 w-20 rounded-sm bg-[var(--accent-soft)]" />
          </div>
          <p className="prose-ja relative text-sm text-[var(--ink-muted)] md:text-base">
            {article.heroLead}
          </p>
        </div>
      </header>
    </FadeIn>
  );
}

export function CounterfeitCardVisual() {
  return (
    <div
      className="relative mb-4 h-28 overflow-hidden rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)]/20"
      aria-hidden
    >
      <div className="absolute inset-3 grid grid-cols-3 gap-2">
        <div className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)]" />
        <div className="col-span-2 space-y-1.5">
          <div className="h-2 w-full rounded-sm bg-[var(--border)]" />
          <div className="h-2 w-2/3 rounded-sm bg-[var(--border-subtle)]" />
          <div className="mt-2 h-8 rounded-sm border border-dashed border-[var(--border)]" />
        </div>
      </div>
    </div>
  );
}
