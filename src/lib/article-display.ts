import type { ArticleType } from "@/types/article";

export const ARTICLE_TYPES: ArticleType[] = [
  "observation-essay",
  "pattern-essay",
  "forecast-essay",
  "field-note",
  "institutional-reading",
];

export const articleTypeLabel: Record<
  ArticleType,
  { en: string; ja: string }
> = {
  "observation-essay": {
    en: "Observation Essay",
    ja: "観測エッセイ",
  },
  "pattern-essay": {
    en: "Pattern Essay",
    ja: "パターンエッセイ",
  },
  "forecast-essay": {
    en: "Forecast Essay",
    ja: "予測エッセイ",
  },
  "field-note": {
    en: "Field Note",
    ja: "フィールドノート",
  },
  "institutional-reading": {
    en: "Institutional Reading",
    ja: "制度読解",
  },
};

export function formatArticleDate(date: string): string {
  try {
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}
