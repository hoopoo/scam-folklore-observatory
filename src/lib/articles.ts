import type {
  ArticleCategory,
  ScamFolkloreArticle,
} from "@/types/article";
import { aiForgedAuthority } from "@/data/articles/ai-forged-authority";
import { corporateDevouringMa } from "@/data/articles/corporate-devouring-ma";
import { counterfeitCuriosityExits } from "@/data/articles/counterfeit-curiosity-exits";
import { counterfeitIntimacy } from "@/data/articles/counterfeit-intimacy";
import { forgedRelationship } from "@/data/articles/forged-relationship";
import { fraudAsRelationship } from "@/data/articles/fraud-as-relationship";
import { trustedAiPersonaScam } from "@/data/articles/trusted-ai-persona-scam";
import {
  isCorporateDevouringMaArticle,
  isCounterfeitCuriosityArticle,
  isCounterfeitIntimacyArticle,
  isForgedAuthorityArticle,
  isForgedRelationshipArticle,
  isRelationshipFraudArticle,
  isTrustedAiPersonaArticle,
} from "@/types/article";

const ARTICLES: ScamFolkloreArticle[] = [
  forgedRelationship,
  corporateDevouringMa,
  aiForgedAuthority,
  counterfeitCuriosityExits,
  counterfeitIntimacy,
  trustedAiPersonaScam,
  fraudAsRelationship,
];

export const articleCategoryLabel: Record<ArticleCategory, string> = {
  "Relationship Fraud": "関係型詐欺",
  "Synthetic Identity": "合成アイデンティティ",
  "AI Fraud": "AI詐欺",
  "Romance Scam": "ロマンス詐欺",
  "Emotional Manipulation": "感情操作",
  "Platform Scam": "プラットフォーム詐欺",
  "Intimacy Fraud": "親密性の詐欺",
  "AI Persona": "AI人格",
  "Trust Exploitation": "信頼の悪用",
  "Generated Trust": "生成された信頼",
  "Counterfeit Intimacy": "偽の親密性",
  "Creator Scam": "創作詐欺",
  "Identity Theft": "身元盗用",
  "Dark Patterns": "ダークパターン",
  "AI Scam": "AI詐欺",
  "Authority Fraud": "権限偽造",
  "Corporate Scam": "企業詐欺",
  "Institutional Scam": "制度型詐欺",
  "Corporate Identity": "企業アイデンティティ",
};

export const observationStatusLabel: Record<
  ScamFolkloreArticle["status"],
  string
> = {
  Observed: "観測済み",
  Emerging: "出現中",
  Hypothesis: "仮説",
};

export function getArticles(): ScamFolkloreArticle[] {
  return ARTICLES.slice().sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): ScamFolkloreArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(
  category: ArticleCategory,
): ScamFolkloreArticle[] {
  return getArticles().filter(
    (a) =>
      a.category === category ||
      a.categories?.includes(category),
  );
}

export function searchArticles(query: string): ScamFolkloreArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return getArticles();
  return getArticles().filter((a) => {
    const haystack = [
      a.title,
      a.subtitle,
      a.summary,
      a.category,
      ...(a.categories ?? []),
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
  const cats = new Set<ArticleCategory>();
  for (const a of ARTICLES) {
    cats.add(a.category);
    a.categories?.forEach((c) => cats.add(c));
  }
  return [...cats].sort();
}

export {
  isCorporateDevouringMaArticle,
  isCounterfeitCuriosityArticle,
  isCounterfeitIntimacyArticle,
  isForgedAuthorityArticle,
  isForgedRelationshipArticle,
  isRelationshipFraudArticle,
  isTrustedAiPersonaArticle,
};
