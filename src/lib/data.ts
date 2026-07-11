import { seedPatterns } from "@/data/patterns";
import type { ScamPattern } from "@/types/scam";
import { riskOrder } from "@/lib/display";

/** 初期データ（seed）のみを返す。サーバー側レンダリングで使用。 */
export function getSeedPatterns(): ScamPattern[] {
  return seedPatterns;
}

export function getSeedPatternById(id: string): ScamPattern | undefined {
  return seedPatterns.find((p) => p.id === id);
}

/**
 * seed データと利用者データをマージする。純粋関数。
 * 同一 id が衝突した場合は利用者データを優先する。
 */
export function mergePatterns(user: ScamPattern[]): ScamPattern[] {
  const map = new Map<string, ScamPattern>();
  for (const p of seedPatterns) map.set(p.id, p);
  for (const p of user) map.set(p.id, p);
  return [...map.values()];
}

export function sortByRisk(patterns: ScamPattern[]): ScamPattern[] {
  return [...patterns].sort((a, b) => {
    const r = riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
    if (r !== 0) return r;
    return a.name.localeCompare(b.name, "ja");
  });
}

/** 一覧のカテゴリフィルタ用。seed の name を軸に用いる。 */
export function getCategoryNames(patterns: ScamPattern[]): string[] {
  return [...new Set(patterns.map((p) => p.name))];
}

/** 検索用の対象テキストをまとめて生成する。 */
export function searchableText(p: ScamPattern): string {
  return [
    p.name,
    p.description,
    p.classicalOrigin,
    p.aiUpgrade,
    ...p.entryPoint,
    ...p.trustHook,
    ...p.emotionalTrigger,
    ...p.migrationPath,
    ...p.redFlags,
    ...p.tags,
  ]
    .join(" ")
    .toLowerCase();
}
