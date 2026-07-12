import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Article } from "@/types/article";
import {
  getRelatedArticlesForArticle,
  getRelatedObservationsForArticle,
} from "@/lib/articles";
import { buildQuestionFilterHref, getAllQuestions } from "@/lib/observations";
import { RELATED_PROJECTS } from "@/config/projects";
import {
  articleTypeLabel,
  formatArticleDate,
} from "@/lib/article-display";

export function ArticleDetail({ article }: { article: Article }) {
  const type = articleTypeLabel[article.articleType];
  const relatedObservations = getRelatedObservationsForArticle(article);
  const relatedArticles = getRelatedArticlesForArticle(article);
  const allQuestions = getAllQuestions();
  const openQuestions = (article.openQuestions ?? [])
    .map((id) => allQuestions.find((q) => q.id === id))
    .filter(Boolean);

  return (
    <article>
      <header className="mb-12 border-b border-[var(--border-subtle)] pb-10">
        <p className="annotation mb-3 text-[var(--accent-violet)]">
          {type.en} / {type.ja}
        </p>
        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {article.title}
        </h1>
        {article.subtitle ? (
          <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">
            {article.subtitle}
          </p>
        ) : null}
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--ink-faint)]">
          <div>
            <dt className="annotation mb-0.5">Published</dt>
            <dd>
              <time dateTime={article.date}>
                {formatArticleDate(article.date)}
              </time>
            </dd>
          </div>
          {article.readingTime ? (
            <div>
              <dt className="annotation mb-0.5">Reading time</dt>
              <dd>{article.readingTime} 分</dd>
            </div>
          ) : null}
        </dl>
      </header>

      <div className="article-body flex flex-col gap-10">
        {article.body.map((section) => (
          <section
            key={section.id}
            aria-labelledby={
              section.heading ? `section-${section.id}` : undefined
            }
          >
            {section.heading ? (
              <h2
                id={`section-${section.id}`}
                className="mb-5 text-base font-semibold tracking-tight text-[var(--ink)]"
              >
                {section.heading}
              </h2>
            ) : null}
            <div className="flex flex-col gap-5">
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={`${section.id}-p-${i}`}
                  className="prose-ja text-[1.0625rem] leading-[2.1] text-[var(--ink-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {section.quote ? (
              <blockquote className="mt-6 border-l border-[var(--border)] pl-5 text-sm italic leading-relaxed text-[var(--ink-faint)]">
                {section.quote}
              </blockquote>
            ) : null}
          </section>
        ))}
      </div>

      {article.closingNote ? (
        <aside className="mt-14 border-t border-[var(--border-subtle)] pt-8">
          <p className="annotation mb-3">Note</p>
          <p className="prose-ja text-sm leading-relaxed text-[var(--ink-faint)]">
            {article.closingNote}
          </p>
        </aside>
      ) : null}

      {relatedObservations.length > 0 ? (
        <section className="mt-14 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">Related Observations / 関連観測</h2>
          <ul className="flex flex-col gap-3">
            {relatedObservations.map((o) => (
              <li key={o.id}>
                <Link
                  href={`/observations/${o.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <div>
                    <p className="text-xs text-[var(--ink-faint)]">{o.title}</p>
                    <p className="mt-0.5 text-sm font-medium">{o.titleJa}</p>
                  </div>
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedArticles.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">Related Articles / 関連記事</h2>
          <ul className="flex flex-col gap-3">
            {relatedArticles.map((a) => (
              <li key={a.id}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <span className="text-sm font-medium">{a.title}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {openQuestions.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">Open Questions / 開かれた問い</h2>
          <ul className="flex flex-col gap-6">
            {openQuestions.map((q) =>
              q ? (
                <li key={q.id}>
                  <Link
                    href={buildQuestionFilterHref(q.filterParams)}
                    className="prose-ja text-[var(--ink-muted)] hover:text-[var(--accent-violet)]"
                  >
                    {q.textJa}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      ) : null}

      {article.relatedProjects && article.relatedProjects.length > 0 ? (
        <section className="mt-10 border-t border-[var(--border-subtle)] pt-10">
          <h2 className="annotation mb-5">Related Projects / 関連プロジェクト</h2>
          <ul className="flex flex-col gap-2">
            {article.relatedProjects.map((id) => {
              const project = RELATED_PROJECTS.find((p) => p.id === id);
              if (!project) return null;
              return (
                <li key={id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
                  >
                    {project.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
