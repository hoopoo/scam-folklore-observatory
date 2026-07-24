import { Eye } from "lucide-react";
import type { ObservationArticle } from "@/types/article";
import {
  articleCategoryLabel,
  observationStatusLabel,
} from "@/lib/articles";
import { formatDate } from "@/lib/display";
import { Badge } from "@/components/ui/badge";

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
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="annotation inline-flex items-center gap-1 rounded-sm border border-[var(--accent-red)] px-2 py-0.5 text-[var(--accent-red)]">
          <Eye className="h-3 w-3" aria-hidden />
          Observation / 観測記事
        </span>
        <span className="annotation rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]">
          {articleCategoryLabel[article.category]}
        </span>
        <span className="annotation rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]">
          {observationStatusLabel[article.status]}
        </span>
        <time
          dateTime={article.publishedAt}
          className="annotation ml-auto text-[var(--ink-faint)]"
        >
          {formatDate(article.publishedAt)}
        </time>
      </div>

      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {article.title}
      </h1>
      <p className="mt-2 text-[var(--ink-muted)]">{article.subtitle}</p>

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

export function ArticleTags({
  tags,
  tagsJa,
}: {
  tags: string[];
  tagsJa: string[];
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tagsJa.map((tag) => (
        <Badge key={tag} variant="outline">
          {tag}
        </Badge>
      ))}
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="text-[var(--ink-faint)]">
          {tag}
        </Badge>
      ))}
    </div>
  );
}
