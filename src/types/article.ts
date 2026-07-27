/**
 * 長文観測記事（Observation Article）の型。
 */

export type ObservationStatus = "Observed" | "Emerging" | "Hypothesis";

export type ArticleTemplate =
  | "relationship-fraud"
  | "trusted-ai-persona"
  | "counterfeit-intimacy"
  | "counterfeit-curiosity-exits"
  | "forged-authority"
  | "corporate-devouring-ma"
  | "forged-relationship"
  | "relational-scams-loneliness";

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
  | "Counterfeit Intimacy"
  | "Creator Scam"
  | "Identity Theft"
  | "Dark Patterns"
  | "AI Scam"
  | "Authority Fraud"
  | "Corporate Scam"
  | "Institutional Scam"
  | "Corporate Identity";

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
  /** 実ページが存在する場合のみ設定。未設定または coming-soon のときはリンクしない */
  href?: string;
  status?: "available" | "coming-soon";
};

export type EvolutionPhase = {
  phase: string;
  title: string;
  titleJa: string;
  items: string[];
};

export type DefensivePrinciple = {
  id: string;
  number: string;
  title: string;
};

export type ObservationSection = {
  number: string;
  titleEn: string;
  titleJa: string;
  paragraphs: string[];
  bullets?: string[];
  quotes?: string[];
  emphasis?: string[];
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

export type DisguiseSection = {
  number: number;
  title: string;
  intro?: string;
  examples: string[];
  reasons?: string[];
  emphasis?: string[];
  quote?: string[];
  linkNote?: string;
};

export type CuriosityStage = {
  stage: number;
  id: string;
  title: string;
  titleJa: string;
  items: string[];
};

export type ServiceComparisonRow = {
  aspect: string;
  aspectJa: string;
  legitimate: string;
  fraudulent: string;
};

export type ChecklistCategory = {
  id: string;
  title: string;
  items: string[];
};

export type FolklorePatternCard = {
  patternName: string;
  japaneseName: string;
  description: string;
  commonBaits: string[];
  extractedAssets: string[];
  earlyWarningSignal: { en: string; ja: string };
};

export type ExitBranch = {
  center: string;
  centerJa: string;
  genuine: { title: string; items: string[] };
  counterfeit: { title: string; items: string[] };
  emphasis: string[];
  emphasisJa: string[];
};

/** 記事4: 好奇心の出口（counterfeit-curiosity-exits テンプレート） */
export type CounterfeitCuriosityArticle = ArticleBase & {
  template: "counterfeit-curiosity-exits";
  heroEyebrow: string;
  coreThesis: string[];
  introduction: string[];
  exitBranch: ExitBranch;
  sectionExitDisguise: {
    title: string;
    paragraphs: string[];
    emotions: string[];
    emphasis: string[];
  };
  disguiseSections: DisguiseSection[];
  curiosityStages: {
    stages: CuriosityStage[];
    flowLabel: string;
  };
  serviceComparison: {
    title: string;
    rows: ServiceComparisonRow[];
  };
  verificationChecklist: {
    title: string;
    categories: ChecklistCategory[];
    emphasis: string[];
  };
  conclusion: {
    paragraphs: string[];
    practices: string[];
    emphasis: string[];
  };
  folklorePattern: FolklorePatternCard;
  connectedObservatories: ConnectedObservatory[];
  verifyExitCta: {
    title: string;
    body: string;
    buttons: { label: string; href: string }[];
  };
  relatedArticleSlugs: string[];
};

/** 記事5: 偽造される権限（forged-authority テンプレート） */
export type ForgedAuthorityArticle = ArticleBase & {
  template: "forged-authority";
  readingTime: string;
  featured: boolean;
  heroEyebrow: string;
  heroHeadline: string[];
  lead: string[];
  sections: ObservationSection[];
  pullQuote: string[];
  keyFindings: ScamFolkloreLensItem[];
  scamPattern: {
    title: string;
    titleJa: string;
    steps: FlowStep[];
  };
  scamEvolution: {
    title: string;
    titleJa: string;
    phases: EvolutionPhase[];
  };
  signalsToWatch: string[];
  defensivePrinciples: DefensivePrinciple[];
  editorialNote: string[];
  connectedObservatories: ConnectedObservatory[];
  relatedArticleSlugs: string[];
  folkloreConnection: string;
};

export type ArticleSource = {
  title: string;
  publisher: string;
  url: string | null;
  status?: "available" | "url-required";
};

export type ObservationSummaryCard = {
  id: string;
  title: string;
  body: string;
};

export type MetaphorRow = {
  element: string;
  metaphor: string;
};

export type ObservationMatrixRow = {
  dimension: string;
  observation: string;
};

export type CorporateBodyPattern = {
  patternName: string;
  japaneseName: string;
  description: string[];
  sequence: string[];
  quote: string[];
};

export type WarningSignalTier = {
  id: string;
  level: "High" | "Medium" | "Context";
  title: string;
  titleJa: string;
  signs: string[];
};

export type ProtectionLayer = {
  id: string;
  title: string;
  description: string;
};

export type CollapseStage = {
  number: string;
  id: string;
  title: string;
  body: string;
};

/** 記事6: 会社は倒産する前に食べられる（corporate-devouring-ma テンプレート） */
export type CorporateDevouringMaArticle = ArticleBase & {
  template: "corporate-devouring-ma";
  readingTime: string;
  featured: boolean;
  heroEyebrow: string;
  heroLead: string[];
  keyQuote: string[];
  observationSummary: ObservationSummaryCard[];
  section01: {
    title: string;
    paragraphs: string[];
    pullQuote: string[];
  };
  section02: {
    title: string;
    paragraphs: string[];
    highlight: { title: string; paragraphs: string[] };
  };
  section03: {
    title: string;
    intro: string[];
    classicalItems: string[];
    modernItems: string[];
    bridge: string[];
    keyDefinition: { title: string; body: string[] };
  };
  section04: {
    title: string;
    intro: string[];
    bodyMetaphor: MetaphorRow[];
    paragraphs: string[];
    pullQuote: string[];
  };
  section05: {
    title: string;
    intro: string[];
    affirmativeTerms: string[];
    bridge: string[];
    contrast: {
      left: ComparisonColumn;
      center: string;
      right: ComparisonColumn;
    };
  };
  section06: {
    title: string;
    paragraphs: string[];
    tensions: string[];
    questions: string[];
    riskStatement: string[];
  };
  section07: {
    title: string;
    intro: string[];
    checklists: ChecklistCategory[];
  };
  section08: {
    title: string;
    intro: string[];
    trustAssets: string[];
    bridge: string[];
    largeQuote: string[];
  };
  section09: {
    title: string;
    intro: string;
    tiers: WarningSignalTier[];
    disclaimer: string;
  };
  section10: {
    title: string;
    rows: ServiceComparisonRow[];
    closingQuote: string[];
  };
  section11: {
    title: string;
    stages: CollapseStage[];
    emphasis: string[];
  };
  section12: {
    title: string;
    layers: ProtectionLayer[];
  };
  observationMatrix: ObservationMatrixRow[];
  folklorePattern: CorporateBodyPattern;
  protocolQuestions: string[];
  relatedArticleSlugs: string[];
  connectedObservatories: ConnectedObservatory[];
  sources: ArticleSource[];
  disclaimer: string;
  folkloreConnection: string;
};

export type RelationalLoopStage = {
  id: string;
  number: number;
  title: string;
  description: string;
};

export type SafetyQuestionsBlock = {
  title: string;
  questions: string[];
  disclaimer: string;
};

/** 記事8: 孤独を入口にする関係性の詐欺（relational-scams-loneliness テンプレート） */
export type RelationalScamsLonelinessArticle = ArticleBase & {
  template: "relational-scams-loneliness";
  readingTime: string;
  featured?: boolean;
  heroEyebrow: string;
  heroAlt: string;
  coreQuestion: string[];
  lead: string[];
  sections: ObservationSection[];
  keyObservation: string[];
  scamFolkloreLens: ScamFolkloreLensItem[];
  signal: string;
  implications: string[];
  relationalLoop: {
    centerLabel: string;
    stages: RelationalLoopStage[];
    caption: string;
  };
  safetyQuestions: SafetyQuestionsBlock;
  observationSummary: ObservationSummaryCard[];
  connectedObservatories: ConnectedObservatory[];
  relatedArticleSlugs: string[];
  folkloreConnection: string;
};

/** 記事7: 偽装されるのは書類ではなく関係（forged-relationship テンプレート） */
export type ForgedRelationshipArticle = ArticleBase & {
  template: "forged-relationship";
  readingTime: string;
  featured: boolean;
  heroEyebrow: string;
  heroHeadline: string[];
  heroAlt: string;
  lead: string[];
  sections: ObservationSection[];
  keyObservation: string[];
  scamPatterns: ScamFolkloreLensItem[];
  folkloreLens: string[];
  openQuestion: string;
  closingStatement: string[];
  connectedObservatories: ConnectedObservatory[];
  relatedArticleSlugs: string[];
  folkloreConnection: string;
};

export type ScamFolkloreArticle =
  | ObservationArticle
  | TrustedAiPersonaArticle
  | CounterfeitIntimacyArticle
  | CounterfeitCuriosityArticle
  | ForgedAuthorityArticle
  | CorporateDevouringMaArticle
  | ForgedRelationshipArticle
  | RelationalScamsLonelinessArticle;

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

export function isCounterfeitCuriosityArticle(
  article: ScamFolkloreArticle,
): article is CounterfeitCuriosityArticle {
  return article.template === "counterfeit-curiosity-exits";
}

export function isForgedAuthorityArticle(
  article: ScamFolkloreArticle,
): article is ForgedAuthorityArticle {
  return article.template === "forged-authority";
}

export function isCorporateDevouringMaArticle(
  article: ScamFolkloreArticle,
): article is CorporateDevouringMaArticle {
  return article.template === "corporate-devouring-ma";
}

export function isForgedRelationshipArticle(
  article: ScamFolkloreArticle,
): article is ForgedRelationshipArticle {
  return article.template === "forged-relationship";
}

export function isRelationalScamsLonelinessArticle(
  article: ScamFolkloreArticle,
): article is RelationalScamsLonelinessArticle {
  return article.template === "relational-scams-loneliness";
}
