"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, Search } from "lucide-react";
import type { ArticleCategory, ScamFolkloreArticle } from "@/types/article";
import {
  articleCategoryLabel,
  getAllArticleCategories,
  observationStatusLabel,
} from "@/lib/articles";
import { formatDate } from "@/lib/display";
import { ArticleCardVisual } from "@/components/articles/TrustedAiPersonaHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ArticleCard({ article }: { article: ScamFolkloreArticle }) {
  const displayCategories = article.categories ?? [article.category];

  return (
    <Link href={`/scam-folklore/${article.slug}`} className="group">
      <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
        <ArticleCardVisual slug={article.slug} />
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="annotation inline-flex items-center gap-1 text-[var(--accent-red)]">
            <Eye className="h-3 w-3" aria-hidden />
            {observationStatusLabel[article.status]}
          </span>
          {displayCategories.slice(0, 2).map((c) => (
            <Badge key={c} variant="outline">
              {articleCategoryLabel[c]}
            </Badge>
          ))}
        </div>
        <h2 className="text-base font-semibold leading-snug tracking-tight group-hover:text-[var(--ink)]">
          {article.title}
        </h2>
        <p className="mt-1 text-sm text-[var(--ink-faint)]">
          {article.subtitle}
        </p>
        <p className="prose-ja mt-3 flex-1 text-sm text-[var(--ink-muted)]">
          {article.summary}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
          <time
            dateTime={article.publishedAt}
            className="text-xs text-[var(--ink-faint)]"
          >
            {formatDate(article.publishedAt)}
          </time>
          <ArrowRight
            className="h-4 w-4 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      </Card>
    </Link>
  );
}

export function ArticlesExplorer({
  articles,
}: {
  articles: ScamFolkloreArticle[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "all">("all");

  const categories = getAllArticleCategories();

  const filtered = useMemo(() => {
    let result = articles;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter((a) => {
        const haystack = [
          a.title,
          a.subtitle,
          a.summary,
          a.category,
          ...a.tags,
          ...a.tagsJa,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    if (category !== "all") {
      result = result.filter((a) => a.category === category);
    }
    return result;
  }, [articles, query, category]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-faint)]"
            aria-hidden
          />
          <input
            type="search"
            placeholder="タイトル、要約、タグで検索…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] py-2 pl-9 pr-3 text-sm outline-none focus:border-[var(--ink-faint)]"
          />
        </div>
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as ArticleCategory | "all")
          }
          className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] px-3 py-2 text-sm outline-none focus:border-[var(--ink-faint)]"
          aria-label="カテゴリで絞り込み"
        >
          <option value="all">すべてのカテゴリ</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {articleCategoryLabel[c]}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-[var(--ink-muted)]">
          該当する観測記事がありません。
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
