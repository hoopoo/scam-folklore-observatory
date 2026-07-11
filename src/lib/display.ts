import type { EvidenceType, RiskLevel } from "@/types/scam";

export const RISK_LEVELS: RiskLevel[] = ["Low", "Medium", "High", "Critical"];

export const riskLevelLabel: Record<RiskLevel, string> = {
  Low: "低",
  Medium: "中",
  High: "高",
  Critical: "危機",
};

/**
 * リスクレベルごとの配色。
 * Low: gray / Medium: amber / High: orange / Critical: red
 * いずれも彩度を抑え、危険を煽らない観測的なトーンにする。
 */
export const riskLevelStyle: Record<
  RiskLevel,
  { text: string; bg: string; border: string; dot: string }
> = {
  Low: {
    text: "text-[var(--risk-low)]",
    bg: "bg-[var(--risk-low-bg)]",
    border: "border-[var(--risk-low)]/30",
    dot: "bg-[var(--risk-low)]",
  },
  Medium: {
    text: "text-[var(--risk-medium)]",
    bg: "bg-[var(--risk-medium-bg)]",
    border: "border-[var(--risk-medium)]/30",
    dot: "bg-[var(--risk-medium)]",
  },
  High: {
    text: "text-[var(--risk-high)]",
    bg: "bg-[var(--risk-high-bg)]",
    border: "border-[var(--risk-high)]/30",
    dot: "bg-[var(--risk-high)]",
  },
  Critical: {
    text: "text-[var(--risk-critical)]",
    bg: "bg-[var(--risk-critical-bg)]",
    border: "border-[var(--risk-critical)]/40",
    dot: "bg-[var(--risk-critical)]",
  },
};

/** リスクレベルの並び順（一覧の重要度ソート用）。 */
export const riskOrder: Record<RiskLevel, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
};

export const evidenceTypeLabel: Record<EvidenceType, string> = {
  url: "URL",
  screenshot_note: "スクショメモ",
  news: "報道",
  public_warning: "公的注意喚起",
  user_report: "利用者報告",
};

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}
