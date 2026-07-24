import type { ArticleCategory, ObservationArticle } from "@/types/article";
import { fraudAsRelationship } from "@/data/articles/fraud-as-relationship";

const ARTICLES: ObservationArticle[] = [fraudAsRelationship];

export const articleCategoryLabel: Record<ArticleCategory, string> = {
  "Relationship Fraud": "関係型詐欺",
  "Synthetic Identity": "合成アイデンティティ",
  "AI Fraud": "AI詐欺",
  "Romance Scam": "ロマンス詐欺",
  "Emotional Manipulation": "感情操作",
  "Platform Scam": "プラットフォーム詐欺",
};

export const observationStatusLabel: Record<
  ObservationArticle["status"],
  string
> = {
  Observed: "観測済み",
  Emerging: "出現中",
  Hypothesis: "仮説",
};

export function getArticles(): ObservationArticle[] {
  return ARTICLES.slice().sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): ObservationArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(
  category: ArticleCategory,
): ObservationArticle[] {
  return getArticles().filter((a) => a.category === category);
}

export function getArticlesByTag(tag: string): ObservationArticle[] {
  const normalized = tag.toLowerCase();
  return getArticles().filter(
    (a) =>
      a.tags.some((t) => t.toLowerCase() === normalized) ||
      a.tagsJa.some((t) => t === tag),
  );
}

export function searchArticles(query: string): ObservationArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return getArticles();
  return getArticles().filter((a) => {
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

export function getAllArticleTags(): { en: string[]; ja: string[] } {
  const en = new Set<string>();
  const ja = new Set<string>();
  for (const a of ARTICLES) {
    a.tags.forEach((t) => en.add(t));
    a.tagsJa.forEach((t) => ja.add(t));
  }
  return {
    en: [...en].sort(),
    ja: [...ja].sort(),
  };
}

export function getAllArticleCategories(): ArticleCategory[] {
  return [...new Set(ARTICLES.map((a) => a.category))].sort();
}
