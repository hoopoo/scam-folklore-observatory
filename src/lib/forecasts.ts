import { seedForecasts } from "@/data/forecasts";
import { seedTrendReports } from "@/data/reports";
import type { TrendReport } from "@/types/report";
import type {
  ForecastDomain,
  ForecastHorizon,
  ForecastRiskLevel,
  FutureFraudForecast,
} from "@/types/forecast";

export const FORECAST_DOMAINS: ForecastDomain[] = [
  "AR / Vision",
  "Voice / Hearing",
  "Ring / Gesture",
  "Wearable / Body State",
  "Agent / AI-to-AI",
  "Environment / Context",
];

export const forecastDomainLabel: Record<ForecastDomain, string> = {
  "AR / Vision": "視界・AR",
  "Voice / Hearing": "音声・聴覚",
  "Ring / Gesture": "リング・ジェスチャー",
  "Wearable / Body State": "ウェアラブル・身体状態",
  "Agent / AI-to-AI": "AIエージェント・AI間",
  "Environment / Context": "環境・文脈",
};

/** 一覧のドメイン見出しに表示する短い説明。 */
export const forecastDomainDescription: Record<ForecastDomain, string> = {
  "AR / Vision":
    "視界に重なる案内・商品・決済。現実の場所そのものが、信頼の演出装置になる。",
  "Voice / Hearing":
    "耳元・空間の声。周囲に共有されない、私的な権威が判断を急かす。",
  "Ring / Gesture":
    "指・所作による承認。内容を読む前に、身体が先に動いてしまう。",
  "Wearable / Body State":
    "疲労・不安・孤独の瞬間。狙われるのは内容ではなく、タイミング。",
  "Agent / AI-to-AI":
    "人が見ない判断経路。AI同士のやり取りに、確認と責任が分散する。",
  "Environment / Context":
    "店舗・家・街。画面の外側に、偽の意味が重ねられる。",
};

export type InterfaceShiftStep = {
  label: string;
  description: string;
};

/** 詐欺の入口が画面から環境へ移る流れ（Interface Shift）。 */
export const INTERFACE_SHIFT_STEPS: InterfaceShiftStep[] = [
  { label: "Screen", description: "偽サイト、偽メール、偽アプリ" },
  { label: "Voice", description: "AI音声、イヤホン、通話" },
  { label: "Vision", description: "スマートグラス、ARオーバーレイ" },
  { label: "Gesture", description: "リング、タップ、身体操作" },
  { label: "Body State", description: "心拍、睡眠、疲労、不安" },
  { label: "AI Agent", description: "買い物AI、経理AI、個人AI" },
  { label: "Environment", description: "店舗、ATM、家、街、移動空間" },
];

export const FORECAST_HORIZONS: ForecastHorizon[] = ["Near", "Mid", "Long"];

export const forecastHorizonLabel: Record<ForecastHorizon, string> = {
  Near: "近未来（〜2027）",
  Mid: "中期（2027–2029）",
  Long: "長期（2029以降）",
};

/** ホライゾンの並び順（一覧の時系列ソート用）。 */
export const forecastHorizonOrder: Record<ForecastHorizon, number> = {
  Near: 0,
  Mid: 1,
  Long: 2,
};

export function getForecasts(): FutureFraudForecast[] {
  return seedForecasts;
}

export function getForecastById(id: string): FutureFraudForecast | undefined {
  return seedForecasts.find((f) => f.id === id);
}

/** 指定パターンに関連づいた未来予測を返す。 */
export function getForecastsByPatternId(
  patternId: string,
): FutureFraudForecast[] {
  return seedForecasts.filter((f) => f.relatedPatternIds.includes(patternId));
}

/** 指定レポートに関連づいた未来予測を返す。 */
export function getForecastsByReportId(
  reportId: string,
): FutureFraudForecast[] {
  return seedForecasts.filter((f) => f.relatedReportIds.includes(reportId));
}

/** 予測が参照する関連トレンドレポートを返す。 */
export function getReportsForForecast(
  forecast: FutureFraudForecast,
): TrendReport[] {
  return forecast.relatedReportIds
    .map((id) => seedTrendReports.find((r) => r.id === id))
    .filter((r): r is TrendReport => Boolean(r));
}

export type ForecastSummary = {
  total: number;
  critical: number;
  high: number;
  byDomain: Record<ForecastDomain, number>;
};

export function summarizeForecasts(
  forecasts: FutureFraudForecast[],
): ForecastSummary {
  const byDomain = Object.fromEntries(
    FORECAST_DOMAINS.map((d) => [d, 0]),
  ) as Record<ForecastDomain, number>;

  let critical = 0;
  let high = 0;
  for (const f of forecasts) {
    byDomain[f.domain] += 1;
    if (f.riskLevel === "Critical") critical += 1;
    if (f.riskLevel === "High") high += 1;
  }

  return { total: forecasts.length, critical, high, byDomain };
}

/** フィルタ用に、重複を除いた信頼フックの一覧を返す。 */
export function collectTrustHooks(forecasts: FutureFraudForecast[]): string[] {
  return Array.from(new Set(forecasts.flatMap((f) => f.trustHook))).sort();
}

/** フィルタ用に、重複を除いた新インターフェースの一覧を返す。 */
export function collectNewInterfaces(
  forecasts: FutureFraudForecast[],
): string[] {
  return Array.from(new Set(forecasts.flatMap((f) => f.newInterface))).sort();
}

/** 検索対象テキストをまとめて生成する。 */
export function forecastSearchableText(f: FutureFraudForecast): string {
  return [
    f.title,
    f.japaneseTitle ?? "",
    f.summary,
    f.scenario,
    ...f.classicalOrigin,
    ...f.newInterface,
    ...f.trustHook,
    ...f.attackSurface,
    ...f.warningSigns,
  ]
    .join(" ")
    .toLowerCase();
}

/** 深刻度の並び順（Critical が先）。 */
export const forecastRiskOrder: Record<ForecastRiskLevel, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
};
