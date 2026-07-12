import { seedArticles } from "@/data/articles";
import { getObservationBySlug } from "@/lib/observations";
import type { Article } from "@/types/article";
import type { Observation } from "@/types/intimacy";

export function getArticles(): Article[] {
  return [...seedArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return seedArticles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return seedArticles.map((a) => a.slug);
}

export function getLatestArticles(limit = 4): Article[] {
  return getArticles().slice(0, limit);
}

export function getRelatedObservationsForArticle(
  article: Article,
): Observation[] {
  return article.relatedObservationSlugs
    .map((slug) => getObservationBySlug(slug))
    .filter((o): o is Observation => Boolean(o));
}

export function getRelatedArticlesForArticle(article: Article): Article[] {
  const slugs = article.relatedArticleSlugs ?? [];
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}

export function searchableArticleText(article: Article): string {
  return [
    article.title,
    article.subtitle,
    article.summary,
    ...article.themes,
    ...article.body.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      s.quote,
    ]),
    article.closingNote,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
