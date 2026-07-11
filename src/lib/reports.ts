import type {
  ReportCategory,
  ReportQuarter,
  ReportRegion,
} from "@/types/report";

export const REPORT_QUARTERS: ReportQuarter[] = [
  "2025 Q1",
  "2025 Q2",
  "2025 Q3",
  "2025 Q4",
  "2026 Q1",
  "2026 Q2",
  "2026 Q3",
];

export const REPORT_REGIONS: ReportRegion[] = [
  "Japan",
  "US",
  "EU",
  "UK",
  "Asia",
  "Global",
];

export const reportRegionLabel: Record<ReportRegion, string> = {
  Japan: "日本",
  US: "米国",
  EU: "欧州",
  UK: "英国",
  Asia: "アジア",
  Global: "グローバル",
};

export const REPORT_CATEGORIES: ReportCategory[] = [
  "AI Investment / Ponzi",
  "Celebrity / Expert Impersonation",
  "Romance / Intimacy",
  "Task Job / Side Hustle",
  "AI Fortune / Spiritual",
  "Fake Police / Public Authority",
  "BEC / CEO Fraud",
  "Crypto / Wallet / Withdrawal",
  "Fake Reviews / Social Proof",
  "Fake News / LP / Ads",
  "Deepfake / Voice / Identity",
  "Hybrid / Emerging",
];

export const reportCategoryLabel: Record<ReportCategory, string> = {
  "AI Investment / Ponzi": "AI投資・ポンジ",
  "Celebrity / Expert Impersonation": "有名人・専門家なりすまし",
  "Romance / Intimacy": "ロマンス・親密さ",
  "Task Job / Side Hustle": "タスク求人・副業",
  "AI Fortune / Spiritual": "AI占い・霊感",
  "Fake Police / Public Authority": "偽警察・公的機関",
  "BEC / CEO Fraud": "BEC・経営層なりすまし",
  "Crypto / Wallet / Withdrawal": "暗号資産・出金",
  "Fake Reviews / Social Proof": "偽レビュー・社会的証明",
  "Fake News / LP / Ads": "偽ニュース・LP・広告",
  "Deepfake / Voice / Identity": "ディープフェイク・音声・本人性",
  "Hybrid / Emerging": "複合・新興",
};
