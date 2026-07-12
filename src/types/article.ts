export type ArticleType =
  | "observation-essay"
  | "pattern-essay"
  | "forecast-essay"
  | "field-note"
  | "institutional-reading";

export type ArticleSection = {
  id: string;
  heading?: string;
  paragraphs: string[];
  quote?: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  date: string;
  articleType: ArticleType;
  readingTime?: number;
  themes: string[];
  relatedObservationSlugs: string[];
  relatedArticleSlugs?: string[];
  body: ArticleSection[];
  closingNote?: string;
  openQuestions?: string[];
  relatedProjects?: string[];
};
