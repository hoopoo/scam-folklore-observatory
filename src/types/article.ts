/**
 * 長文観測記事（Observation Article）の型。
 * Patterns / Reports / Forecasts とは別系統の、構造分析エッセイ向け。
 */

export type ObservationStatus = "Observed" | "Emerging" | "Hypothesis";

export type ArticleCategory =
  | "Relationship Fraud"
  | "Synthetic Identity"
  | "AI Fraud"
  | "Romance Scam"
  | "Emotional Manipulation"
  | "Platform Scam";

export type ScamStackLayer = {
  layer: number;
  title: string;
  titleJa: string;
  items: string[];
};

export type WarningSignCategory = {
  id: string;
  title: string;
  titleJa: string;
  signs: string[];
};

export type VerificationItem = {
  id: string;
  title: string;
  titleJa: string;
  question: string;
};

export type CrossObservatoryLink = {
  id: string;
  title: string;
  description: string;
  href?: string;
  status: "available" | "coming-soon";
};

export type RelatedObservationLink = {
  type: "pattern" | "report" | "forecast" | "trust-hook";
  id: string;
  label: string;
};

export type ObservationArticle = {
  slug: string;
  title: string;
  subtitle: string;
  category: ArticleCategory;
  status: ObservationStatus;
  summary: string;
  heroCopy: string[];
  heroSupplement: string;
  tags: string[];
  tagsJa: string[];
  publishedAt: string;
  updatedAt: string;
  language: "ja";
  metadata: {
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  relatedPatternIds: string[];
  relatedReportIds: string[];
  relatedForecastIds: string[];
  relatedTrustHookIds: string[];
  sourceNote: string;
  folkloreConnection: string;
  closingStatement: string[];
  closingConclusion: string[];
  openQuestions: string[];
  emphasizedOpenQuestion: string;
  /** Section 1 */
  observation: {
    intro: string;
    designedElements: string[];
    flow: string;
    beliefItems: string[];
  };
  /** Section 2 */
  fraudEvolution: {
    intro: string;
    traditional: { title: string; items: string[] };
    emerging: { title: string; items: string[] };
    bridge: string;
    emphasis: string[];
  };
  /** Section 3 */
  scamStack: ScamStackLayer[];
  /** Section 4 */
  trustRepetition: {
    intro: string;
    repetitionItems: string[];
    bridge: string;
    emphasis: string[];
    aiNote: string;
  };
  /** Section 5 */
  scamEntry: {
    intro: string;
    entryPoints: string[];
    bridge: string;
    emphasis: string[];
    securityNote: string;
  };
  /** Section 6 */
  hybridOperation: {
    intro: string;
    hybridItems: string[];
    bridge: string;
    realityItems: string[];
    emphasis: string[];
  };
  /** Section 7 */
  entertainmentBoundary: {
    intro: string;
    entertainment: { title: string; items: string[] };
    fraud: { title: string; items: string[] };
    emphasis: string[];
  };
  /** Section 8 */
  emotionalData: {
    intro: string;
    dataItems: string[];
    emphasis: string[];
    privacyNote: string;
  };
  /** Section 9 */
  warningSigns: WarningSignCategory[];
  warningDisclaimer: string;
  /** Section 10 */
  verificationLayers: VerificationItem[];
  /** Section 11 */
  beforeAfter: {
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  };
};
