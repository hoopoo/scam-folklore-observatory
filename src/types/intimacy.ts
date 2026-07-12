export type ObservationStatus =
  | "observed"
  | "emerging"
  | "established"
  | "unresolved"
  | "speculative";

export type Observation = {
  id: string;
  slug: string;
  title: string;
  titleJa: string;
  summary: string;
  summaryJa: string;
  date: string;
  country?: string;
  region?: string;
  sourceUrl?: string;
  sourceName?: string;
  status: ObservationStatus;
  relationshipTypes: string[];
  intimacyDimensions: string[];
  lifeStages: string[];
  institutionalGaps: string[];
  risks: string[];
  genderDesignIssues: string[];
  relatedProjects?: string[];
  questions: string[];
  notes?: string;
  whatHappened: string;
  whatHappenedJa: string;
  whyItMatters: string;
  whyItMattersJa: string;
  relationshipStructure?: string;
  relationshipStructureJa?: string;
  values: string[];
  valueConflicts: string[];
};

/** データ定義用。values / valueConflicts は省略時空配列として正規化される。 */
export type ObservationInput = Omit<
  Observation,
  "values" | "valueConflicts"
> &
  Partial<Pick<Observation, "values" | "valueConflicts">>;

export type ObservationTheme = {
  id: string;
  slug: string;
  title: string;
  titleJa: string;
  description: string;
  descriptionJa: string;
  tags: string[];
  filterKeys: {
    relationshipTypes?: string[];
    risks?: string[];
    lifeStages?: string[];
    genderDesignIssues?: string[];
    institutionalGaps?: string[];
  };
};

export type CoreQuestion = {
  id: string;
  textJa: string;
  textEn?: string;
  category: QuestionCategory;
  filterParams: Record<string, string[]>;
};

export type QuestionCategory =
  | "romance-marriage"
  | "ai-intimacy"
  | "pets-family"
  | "aging-bereavement"
  | "gender-identity"
  | "law-institutions"
  | "fraud-manipulation"
  | "digital-afterlife"
  | "value-and-meaning";

export type RelationshipEntity = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
  isHuman: boolean;
};

export type IntimacyDimension = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
};

export type LifeStage = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
  topics: string[];
};

export type InstitutionalGap = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
  topics?: string[];
};

export type IntimacyRisk = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
};

export type GenderDesignIssue = {
  id: string;
  label: string;
  labelJa: string;
};

export type MachineModelGap = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
};

export type IntimacyValue = {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
};

export type ValueConflict = {
  id: string;
  label: string;
  labelJa: string;
  poleA: string;
  poleB: string;
};
