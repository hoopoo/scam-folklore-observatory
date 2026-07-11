export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

/**
 * パターンの中核カテゴリ。一覧のグルーピング・絞り込み用。
 * Reports の細かなトレンド分類とは別に、詐欺の基本構造を束ねる粗い軸として用いる。
 */
export type PatternCategory =
  | "Investment / Ponzi"
  | "Impersonation / Authority"
  | "Romance / Intimacy"
  | "Job / Side Hustle"
  | "Anxiety / Fortune / Health"
  | "Recovery / Support"
  | "Phishing / Fake App"
  | "Ads / Social Proof";

export type EvidenceType =
  | "url"
  | "screenshot_note"
  | "news"
  | "public_warning"
  | "user_report";

export type Evidence = {
  id: string;
  type: EvidenceType;
  title: string;
  url?: string;
  sourceName?: string;
  observedAt: string;
  note: string;
};

/**
 * 誘導経路の1ステップ。
 * label のみ必須。description / riskPoint は観測・注意喚起のための任意メモ。
 * 手口の再現ではなく、危険な誘導経路を可視化するために用いる。
 */
export type MigrationStep = {
  label: string;
  description?: string;
  riskPoint?: string;
};

export type ScamPattern = {
  id: string;
  name: string;
  description: string;
  /** 中核カテゴリ。一覧のグルーピング・絞り込みに用いる（seed データは必須、利用者データは任意）。 */
  category?: PatternCategory;
  /** このパターンが「何を偽装しているか」を一文で要約する（任意）。 */
  thesis?: string;
  classicalOrigin: string;
  aiUpgrade: string;
  entryPoint: string[];
  trustHook: string[];
  emotionalTrigger: string[];
  migrationPath: string[];
  redFlags: string[];
  observedEvidence: Evidence[];
  riskLevel: RiskLevel;
  tags: string[];
  relatedPatterns: string[];
  preventionNotes: string[];
  /** 詳細ページに表示する観測メモ。構造分析の視点を短く記録する。 */
  observationNote?: string;

  // --- 信頼の偽装構造（Trust Structure）。いずれも任意。未記録なら詳細ページで「未記録」と表示する。 ---
  /** 権威の偽装。誰の権威を借りて信頼を作るか。 */
  authorityUsed?: string[];
  /** 親密さの偽装。関係性の演出で信頼を作る要素。 */
  artificialIntimacy?: string[];
  /** 限定性・緊急性の偽装。検討の時間を奪う要素。 */
  scarcityUrgency?: string[];
  /** 成功・証拠の偽装。再現できそうという期待を作る要素。 */
  proofSimulation?: string[];

  /**
   * 誘導経路をステップ説明つきで表す（任意）。
   * 未指定の場合は migrationPath (string[]) をそのまま表示する。
   */
  migrationFlow?: MigrationStep[];

  /** 古典詐欺との対応関係の短い解説（任意）。 */
  classicalMapping?: string;
  /** どこで立ち止まれるか。被害予防のための停止ポイント（任意）。 */
  stopPoints?: string[];

  /** 記録元の区別。初期データか、利用者の観測記録か。 */
  source: "seed" | "user";
  createdAt: string;
  updatedAt: string;
};

/**
 * 新規観測フォームの入力値。保存前の生データを表す。
 * DB 保存に移行する際は、この型を API の入力型として再利用できる。
 */
export type ScamPatternInput = {
  name: string;
  classicalOrigin: string;
  aiUpgrade: string;
  entryPoint: string;
  trustHook: string;
  emotionalTrigger: string;
  migrationPath: string;
  redFlags: string;
  evidenceUrl: string;
  evidenceNote: string;
  riskLevel: RiskLevel;
  tags: string;
  preventionNotes: string;
};
