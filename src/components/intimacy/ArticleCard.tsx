import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/types/article";
import {
  articleTypeLabel,
  formatArticleDate,
} from "@/lib/article-display";

export function ArticleCard({ article }: { article: Article }) {
  const type = articleTypeLabel[article.articleType];

  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <article className="flex h-full flex-col rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--ink-faint)]">
        <p className="annotation mb-2">
          {type.en} / {type.ja}
        </p>
        <h2 className="text-lg font-semibold leading-snug tracking-tight">
          {article.title}
        </h2>
        {article.subtitle ? (
          <p className="mt-1 text-sm text-[var(--ink-muted)]">
            {article.subtitle}
          </p>
        ) : null}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--ink-muted)]">
          {article.summary}
        </p>
        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--ink-faint)]">
          <div>
            <dt className="sr-only">公開日</dt>
            <dd>{formatArticleDate(article.date)}</dd>
          </div>
          {article.readingTime ? (
            <div>
              <dt className="sr-only">読了時間</dt>
              <dd>{article.readingTime} 分</dd>
            </div>
          ) : null}
          <div>
            <dt className="sr-only">関連観測</dt>
            <dd>観測 {article.relatedObservationSlugs.length} 件</dd>
          </div>
        </dl>
        {article.themes.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {article.themes.slice(0, 4).map((theme) => (
              <li
                key={theme}
                className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
              >
                {theme}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto flex justify-end pt-4">
          <ArrowRight
            className="h-4 w-4 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      </article>
    </Link>
  );
}

export function ArticleListItem({ article }: { article: Article }) {
  const type = articleTypeLabel[article.articleType];

  return (
    <article className="border-b border-[var(--border-subtle)] py-8 last:border-0">
      <p className="annotation mb-2">
        {type.en} / {type.ja}
      </p>
      <h3 className="text-xl font-semibold tracking-tight">
        <Link
          href={`/articles/${article.slug}`}
          className="hover:underline underline-offset-4"
        >
          {article.title}
        </Link>
      </h3>
      {article.subtitle ? (
        <p className="mt-2 text-sm text-[var(--ink-muted)]">{article.subtitle}</p>
      ) : null}
      <p className="prose-ja mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
        {article.summary}
      </p>
      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[var(--ink-faint)]">
        <div>
          <dt className="annotation mb-0.5 inline">Date</dt>
          <dd className="inline">{formatArticleDate(article.date)}</dd>
        </div>
        {article.readingTime ? (
          <div>
            <dt className="annotation mb-0.5 inline">Reading</dt>
            <dd className="inline">{article.readingTime} min</dd>
          </div>
        ) : null}
        <div>
          <dt className="annotation mb-0.5 inline">Observations</dt>
          <dd className="inline">{article.relatedObservationSlugs.length}</dd>
        </div>
      </dl>
    </article>
  );
}
