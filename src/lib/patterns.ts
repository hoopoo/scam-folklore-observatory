import { seedTrendReports } from "@/data/reports";
import type { TrendReport } from "@/types/report";
import type { PatternCategory, ScamPattern } from "@/types/scam";

export const PATTERN_CATEGORIES: PatternCategory[] = [
  "Investment / Ponzi",
  "Impersonation / Authority",
  "Romance / Intimacy",
  "Job / Side Hustle",
  "Anxiety / Fortune / Health",
  "Recovery / Support",
  "Phishing / Fake App",
  "Ads / Social Proof",
];

export const patternCategoryLabel: Record<PatternCategory, string> = {
  "Investment / Ponzi": "投資・ポンジ",
  "Impersonation / Authority": "なりすまし・権威",
  "Romance / Intimacy": "ロマンス・親密さ",
  "Job / Side Hustle": "求人・副業",
  "Anxiety / Fortune / Health": "不安・占い・健康",
  "Recovery / Support": "被害回復・サポート",
  "Phishing / Fake App": "フィッシング・偽アプリ",
  "Ads / Social Proof": "広告・社会的証明",
};

/** トップページに表示する Featured Patterns（表示順で保持）。 */
export const FEATURED_PATTERN_IDS: string[] = [
  "ai-investment-ponzi",
  "celebrity-deepfake-ad",
  "ai-romance-scam",
  "fake-police-authority",
  "bec-ceo-fraud",
  "fake-wallet-crypto",
];

const AUTHORITY_KEYWORDS = [
  "警察",
  "検察",
  "政府",
  "役所",
  "公的",
  "当局",
  "銀行",
  "税",
  "給付",
  "公権力",
  "捜査",
];

const INTIMACY_KEYWORDS = ["親密", "恋愛", "家族", "仲間", "親しみ", "寄り添"];

const AI_KEYWORDS = [
  "AI",
  "ディープフェイク",
  "生成",
  "合成",
  "音声",
  "LLM",
  "Bot",
];

function haystack(p: ScamPattern): string {
  return [
    p.aiUpgrade,
    ...p.trustHook,
    ...(p.authorityUsed ?? []),
    ...(p.artificialIntimacy ?? []),
    ...p.tags,
    p.classicalOrigin,
  ].join(" ");
}

/** 公権力・公的機関の権威を借りるパターンか。 */
export function usesPublicAuthority(p: ScamPattern): boolean {
  const text = [p.classicalOrigin, ...p.trustHook, ...(p.authorityUsed ?? [])].join(" ");
  return AUTHORITY_KEYWORDS.some((k) => text.includes(k));
}

/** 親密さの偽装を用いるパターンか。 */
export function usesIntimacy(p: ScamPattern): boolean {
  if (p.artificialIntimacy && p.artificialIntimacy.length > 0) return true;
  const text = [...p.trustHook, ...p.emotionalTrigger].join(" ");
  return INTIMACY_KEYWORDS.some((k) => text.includes(k));
}

/** 生成・合成AIを用いるパターンか。 */
export function usesGenerativeAI(p: ScamPattern): boolean {
  return AI_KEYWORDS.some((k) => haystack(p).includes(k));
}

export type PatternSummary = {
  total: number;
  critical: number;
  high: number;
  aiEnabled: number;
  publicAuthority: number;
  intimacy: number;
};

export function summarizePatterns(patterns: ScamPattern[]): PatternSummary {
  return {
    total: patterns.length,
    critical: patterns.filter((p) => p.riskLevel === "Critical").length,
    high: patterns.filter((p) => p.riskLevel === "High").length,
    aiEnabled: patterns.filter(usesGenerativeAI).length,
    publicAuthority: patterns.filter(usesPublicAuthority).length,
    intimacy: patterns.filter(usesIntimacy).length,
  };
}

/** 指定パターンに関連づいたトレンドレポートを、新しい順で返す。 */
export function getReportsByPatternId(patternId: string): TrendReport[] {
  return seedTrendReports
    .filter((r) => r.relatedPatternIds.includes(patternId))
    .sort((a, b) => b.observedAt.localeCompare(a.observedAt));
}
