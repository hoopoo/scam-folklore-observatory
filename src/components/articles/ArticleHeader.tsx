import { Eye } from "lucide-react";
import type { ArticleCategory, ObservationStatus } from "@/types/article";
import {
  articleCategoryLabel,
  observationStatusLabel,
} from "@/lib/articles";
import { formatDate } from "@/lib/display";
import { Badge } from "@/components/ui/badge";

export type ArticleHeaderProps = {
  title: string;
  subtitle: string;
  titleEn?: string;
  subtitleEn?: string;
  category: ArticleCategory;
  categories?: ArticleCategory[];
  status: ObservationStatus;
  publishedAt: string;
};

export function ArticleHeader({
  title,
  subtitle,
  titleEn,
  subtitleEn,
  category,
  categories,
  status,
  publishedAt,
}: ArticleHeaderProps) {
  const displayCategories = categories ?? [category];

  return (
    <header className="border-b border-[var(--border)] pb-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="annotation inline-flex items-center gap-1 rounded-sm border border-[var(--accent-red)] px-2 py-0.5 text-[var(--accent-red)]">
          <Eye className="h-3 w-3" aria-hidden />
          Observation / 観測記事
        </span>
        {displayCategories.map((c) => (
          <span
            key={c}
            className="annotation rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]"
          >
            {articleCategoryLabel[c]}
          </span>
        ))}
        <span className="annotation rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]">
          {observationStatusLabel[status]}
        </span>
        <time
          dateTime={publishedAt}
          className="annotation ml-auto text-[var(--ink-faint)]"
        >
          {formatDate(publishedAt)}
        </time>
      </div>

      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-[var(--ink-muted)]">{subtitle}</p>
      {titleEn ? (
        <p className="mt-2 text-sm text-[var(--ink-faint)]">{titleEn}</p>
      ) : null}
      {subtitleEn ? (
        <p className="mt-0.5 text-sm text-[var(--ink-faint)]">{subtitleEn}</p>
      ) : null}
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
