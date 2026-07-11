/**
 * 週次観測レポート（旧型）。
 * 後方互換のために残しているが、現在の Reports ページは TrendReport を使用する。
 */
export type WeeklyReport = {
  id: string;
  title: string;
  summary: string;
  observedPatterns: string[];
  trustHooks: string[];
  emotionalTriggers: string[];
  relatedClassicalFraud: string[];
  preventionNotes: string[];
  observedAt: string;
  /** 関連する観測パターンの id（詳細ページへのリンク用、任意）。 */
  relatedPatternIds?: string[];
};

export type ReportRegion = "Japan" | "US" | "EU" | "UK" | "Asia" | "Global";

export type ReportQuarter =
  | "2025 Q1"
  | "2025 Q2"
  | "2025 Q3"
  | "2025 Q4"
  | "2026 Q1"
  | "2026 Q2"
  | "2026 Q3";

export type ReportCategory =
  | "AI Investment / Ponzi"
  | "Celebrity / Expert Impersonation"
  | "Romance / Intimacy"
  | "Task Job / Side Hustle"
  | "AI Fortune / Spiritual"
  | "Fake Police / Public Authority"
  | "BEC / CEO Fraud"
  | "Crypto / Wallet / Withdrawal"
  | "Fake Reviews / Social Proof"
  | "Fake News / LP / Ads"
  | "Deepfake / Voice / Identity"
  | "Hybrid / Emerging";

/**
 * トレンドレポート。
 * 2025〜2026年の AI 詐欺・SNS 型詐欺・古典詐欺の再包装トレンドを、
 * 公開情報・一般的な注意喚起に基づいて防御的に整理した観測記録。
 * 具体的な詐欺文面・誘導文・会話スクリプト・作成手順は一切含まない。
 */
export type TrendReport = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  year: 2025 | 2026;
  quarter: ReportQuarter;
  region: ReportRegion;
  category: ReportCategory;
  observedAt: string;
  observedPatterns: string[];
  trustHooks: string[];
  emotionalTriggers: string[];
  /** 悪用が観測された AI 技術の類型（防御的観測。手順は含まない）。 */
  aiMethods: string[];
  relatedClassicalFraud: string[];
  /** 誘導経路上で観測される危険サイン（再現ではなく注意喚起のため）。 */
  migrationSignals: string[];
  preventionNotes: string[];
  /** 出典に関する注記（公開情報・一般的注意喚起の類型など、任意）。 */
  sourceNotes?: string[];
  relatedPatternIds: string[];
  severity: "Low" | "Medium" | "High" | "Critical";
  /** 注目レポート。一覧で強調表示する。 */
  featured?: boolean;
};
