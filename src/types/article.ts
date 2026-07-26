/**
 * 長文観測記事（Observation Article）の型。
 */

export type ObservationStatus = "Observed" | "Emerging" | "Hypothesis";

export type ArticleTemplate =
  | "relationship-fraud"
  | "trusted-ai-persona"
  | "counterfeit-intimacy";

export type ArticleCategory =
  | "Relationship Fraud"
  | "Synthetic Identity"
  | "AI Fraud"
  | "Romance Scam"
  | "Emotional Manipulation"
  | "Platform Scam"
  | "Intimacy Fraud"
  | "AI Persona"
  | "Trust Exploitation"
  | "Generated Trust"
  | "Counterfeit Intimacy";

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

export type ComparisonColumn = {
  title: string;
  items: string[];
};

export type FlowStep = {
  label: string;
  sublabel?: string;
};

export type ScamFolkloreLensItem = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
};

export type ScenarioItem = {
  id: string;
  number: string;
  title: string;
  titleJa: string;
  body: string[];
  question: string;
};

export type ProtectiveDesignItem = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
};

export type TrustTraditionCard = {
  id: string;
  title: string;
  body: string;
  guarantees: string[];
};

export type PersonaLayer = {
  id: string;
  title: string;
  items: string[];
};

export type RomanceStage = {
  number: string;
  id: string;
  title: string;
  body: string;
};

export type LossCard = {
  id: string;
  title: string;
  description: string;
};

export type AiOperationCard = {
  id: string;
  title: string;
  description: string;
};

export type VictimBarrierCard = {
  id: string;
  title: string;
  description: string;
};

export type VerificationLayerItem = {
  id: string;
  title: string;
  titleJa: string;
  description: string;
};

export type RelatedFolkloreLink = {
  type: "internal-article" | "external";
  href: string;
  title: string;
  description?: string;
};

export type PrivacyTensionColumn = {
  title: string;
  items: string[];
  benefit: string;
  risk: string;
};

export type ConnectedObservatory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
};

export type ArticleMetadata = {
  description: string;
  ogTitle: string;
  ogDescription: string;
  pageTitle?: string;
};

export type ArticleBase = {
  slug: string;
  template: ArticleTemplate;
  title: string;
  subtitle: string;
  titleEn?: string;
  subtitleEn?: string;
  /** 一覧フィルタ用の主カテゴリ */
  category: ArticleCategory;
  /** 表示用の複数カテゴリ */
  categories?: ArticleCategory[];
  status: ObservationStatus;
  summary: string;
  tags: string[];
  tagsJa: string[];
  publishedAt: string;
  updatedAt: string;
  language: "ja";
  metadata: ArticleMetadata;
  relatedPatternIds: string[];
  relatedReportIds: string[];
  relatedForecastIds: string[];
  relatedTrustHookIds: string[];
  sourceNote: string;
};

/** 記事1: 関係型詐欺（relationship-fraud テンプレート） */
export type ObservationArticle = ArticleBase & {
  template: "relationship-fraud";
  heroCopy: string[];
  heroSupplement: string;
  folkloreConnection: string;
  closingStatement: string[];
  closingConclusion: string[];
  openQuestions: string[];
  emphasizedOpenQuestion: string;
  observation: {
    intro: string;
    designedElements: string[];
    flow: string;
    beliefItems: string[];
  };
  fraudEvolution: {
    intro: string;
    traditional: { title: string; items: string[] };
    emerging: { title: string; items: string[] };
    bridge: string;
    emphasis: string[];
  };
  scamStack: ScamStackLayer[];
  trustRepetition: {
    intro: string;
    repetitionItems: string[];
    bridge: string;
    emphasis: string[];
    aiNote: string;
  };
  scamEntry: {
    intro: string;
    entryPoints: string[];
    bridge: string;
    emphasis: string[];
    securityNote: string;
  };
  hybridOperation: {
    intro: string;
    hybridItems: string[];
    bridge: string;
    realityItems: string[];
    emphasis: string[];
  };
  entertainmentBoundary: {
    intro: string;
    entertainment: { title: string; items: string[] };
    fraud: { title: string; items: string[] };
    emphasis: string[];
  };
  emotionalData: {
    intro: string;
    dataItems: string[];
    emphasis: string[];
    privacyNote: string;
  };
  warningSigns: WarningSignCategory[];
  warningDisclaimer: string;
  verificationLayers: VerificationItem[];
  beforeAfter: {
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  };
};

/** 記事2: 親密性の詐欺（trusted-ai-persona テンプレート） */
export type TrustedAiPersonaArticle = ArticleBase & {
  template: "trusted-ai-persona";
  heroQuote: string[];
  lead: {
    paragraphs: string[];
    transition: string[];
    personaTraits: string[];
    recommendationExamples: string[];
    emphasis: string[];
  };
  section01: {
    title: string;
    intro: string;
    traditionalItems: string[];
    aiTraits: string[];
    emphasis: string[];
    comparison: {
      left: ComparisonColumn;
      center: string;
      right: ComparisonColumn;
    };
  };
  section02: {
    title: string;
    intro: string;
    trustItems: string[];
    bridge: string;
    emphasis: string[];
    flow: {
      title: string;
      titleJa: string;
      steps: FlowStep[];
    };
  };
  section03: {
    title: string;
    intro: string;
    dataItems: string[];
    emphasis: string[];
    flow: {
      steps: FlowStep[];
      actions: string[];
    };
  };
  section04: {
    title: string;
    intro: string;
    traditionalAd: string[];
    conversationalExamples: string[];
    emphasis: string[];
    comparison: {
      left: ComparisonColumn;
      center: string;
      right: ComparisonColumn;
    };
  };
  section05: {
    title: string;
    intro: string;
    carePhrases: string[];
    bridge: string;
    emphasis: string[];
    care: ComparisonColumn;
    control: ComparisonColumn;
  };
  section06: {
    title: string;
    intro: string;
    risks: string[];
    emphasis: string[];
    flow: { steps: FlowStep[] };
  };
  section07: {
    title: string;
    intro: string;
    process: string[];
    emphasis: string[];
    evolution: {
      title: string;
      titleJa: string;
      steps: FlowStep[];
    };
  };
  scamFolkloreLens: ScamFolkloreLensItem[];
  fraudTransformation: {
    old: { label: string; steps: string[] };
    emerging: { label: string; steps: string[] };
    emphasis: string[];
    emphasisJa: string[];
  };
  tensionMap: {
    helpful: ComparisonColumn;
    exploitable: ComparisonColumn;
    conclusion: string;
  };
  observationFragments: string[];
  scenarios: ScenarioItem[];
  warningSigns: {
    title: string;
    titleJa: string;
    signs: string[];
  };
  protectiveDesign: {
    items: ProtectiveDesignItem[];
    emphasis: string[];
  };
  connectedObservatories: ConnectedObservatory[];
  finalQuestion: {
    ja: string[];
    en: string;
  };
};

/** 記事3: 偽の親密性（counterfeit-intimacy テンプレート） */
export type CounterfeitIntimacyArticle = ArticleBase & {
  template: "counterfeit-intimacy";
  heroEyebrow: string;
  trustState: string;
  heroLead: string;
  opening: {
    title: string;
    paragraphs: string[];
    emphasis: string[];
  };
  communityTrust: {
    title: string;
    paragraphs: string[];
    cards: TrustTraditionCard[];
    emphasis: string[];
  };
  personaComposition: {
    title: string;
    paragraphs: string[];
    layers: PersonaLayer[];
    emphasis: string[];
  };
  romanceProgression: {
    title: string;
    intro: string;
    stages: RomanceStage[];
    emphasis: string[];
  };
  losses: {
    title: string;
    intro: string;
    cards: LossCard[];
    emphasis: string[];
  };
  aiPersonaOps: {
    title: string;
    paragraphs: string[];
    cards: AiOperationCard[];
    emphasis: string[];
  };
  deepfakeEvidence: {
    title: string;
    paragraphs: string[];
    before: { items: string[]; conclusion: string };
    after: { items: string[]; conclusion: string };
    emphasis: string[];
  };
  supportingNetwork: {
    title: string;
    paragraphs: string[];
    centerLabel: string;
    nodes: string[];
    emphasis: string[];
  };
  victimBarriers: {
    title: string;
    paragraphs: string[];
    cards: VictimBarrierCard[];
    emphasis: string[];
  };
  verificationLayers: {
    title: string;
    paragraphs: string[];
    layers: VerificationLayerItem[];
    note: string;
  };
  privacyTension: {
    title: string;
    verification: PrivacyTensionColumn;
    privacy: PrivacyTensionColumn;
    conclusion: string[];
  };
  questions: string[];
  finalObservation: {
    ja: string[];
    en: string;
  };
  relatedFolklore: RelatedFolkloreLink[];
  relatedArticleSlugs: string[];
};

export type ScamFolkloreArticle =
  | ObservationArticle
  | TrustedAiPersonaArticle
  | CounterfeitIntimacyArticle;

export function isTrustedAiPersonaArticle(
  article: ScamFolkloreArticle,
): article is TrustedAiPersonaArticle {
  return article.template === "trusted-ai-persona";
}

export function isRelationshipFraudArticle(
  article: ScamFolkloreArticle,
): article is ObservationArticle {
  return article.template === "relationship-fraud";
}

export function isCounterfeitIntimacyArticle(
  article: ScamFolkloreArticle,
): article is CounterfeitIntimacyArticle {
  return article.template === "counterfeit-intimacy";
}
