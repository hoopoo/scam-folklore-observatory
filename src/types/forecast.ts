/**
 * 未来詐欺予測（Future Fraud Forecasts）の型。
 *
 * これは「実際に発生した事例」ではなく、2026年以降に現れる可能性のある
 * 詐欺構造を整理した観測仮説（Forecast）である。断定ではない。
 * 目的は分類・観測・予防・教育・設計上の注意点の整理に限定し、
 * 攻撃の実装手順・詐欺文面・誘導文などは一切含まない。
 */

export type ForecastDomain =
  | "AR / Vision"
  | "Voice / Hearing"
  | "Ring / Gesture"
  | "Wearable / Body State"
  | "Agent / AI-to-AI"
  | "Environment / Context";

export type ForecastHorizon = "Near" | "Mid" | "Long";

export type ForecastRiskLevel = "Low" | "Medium" | "High" | "Critical";

export type FutureFraudForecast = {
  id: string;
  title: string;
  japaneseTitle?: string;
  domain: ForecastDomain;
  horizon: ForecastHorizon;
  riskLevel: ForecastRiskLevel;
  /** 一文の要約。 */
  summary: string;
  /** 想定される未来のパターン（Possible Future Pattern）。実在事例ではない。 */
  scenario: string;
  /** 対応する古典詐欺の起源。 */
  classicalOrigin: string[];
  /** 新しく関わるインターフェース・デバイス。 */
  newInterface: string[];
  /** 信頼の偽装フック。 */
  trustHook: string[];
  /** 攻撃面（どこに隙が生まれうるか。防御的な観点）。 */
  attackSurface: string[];
  /** 判断が鈍りやすい瞬間。 */
  vulnerableMoment: string[];
  /** 観測されうる警告サイン。 */
  warningSigns: string[];
  /** 設計上の対策（プラットフォーム・開発者向け）。 */
  designCountermeasures: string[];
  /** 利用者側の対策。 */
  userCountermeasures: string[];
  /** 関連する観測パターンの id。 */
  relatedPatternIds: string[];
  /** 関連するトレンドレポートの id。 */
  relatedReportIds: string[];
  /** 予測であることを明示する注記。 */
  forecastNote: string;
  createdAt: string;
  updatedAt: string;
};
