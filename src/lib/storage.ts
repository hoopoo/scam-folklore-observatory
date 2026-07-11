import type { Evidence, ScamPattern, ScamPatternInput } from "@/types/scam";

/**
 * 観測記録の永続化レイヤー。
 * 現状は localStorage 実装だが、この関数群のシグネチャを保ったまま
 * 将来的に SQLite / Supabase 実装へ差し替えられるように分離している。
 */

const STORAGE_KEY = "sfo:user-patterns:v1";
const UPDATE_EVENT = "sfo:user-patterns-updated";

// useSyncExternalStore 用に、同一内容なら同一参照を返すためのキャッシュ。
const EMPTY: ScamPattern[] = [];
let cachedRaw: string | null = null;
let cachedValue: ScamPattern[] = EMPTY;

function notify() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(UPDATE_EVENT));
  }
}

/** localStorage の変更を購読する（useSyncExternalStore 用）。 */
export function subscribeUserPatterns(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(UPDATE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(UPDATE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** 現在の観測記録のスナップショット。内容が変わらなければ同一参照を返す。 */
export function getUserPatternsSnapshot(): ScamPattern[] {
  if (typeof window === "undefined") return cachedValue;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  cachedValue = parsePatterns(raw);
  return cachedValue;
}

export function getServerSnapshot(): ScamPattern[] {
  return EMPTY;
}

function parsePatterns(raw: string | null): ScamPattern[] {
  if (!raw) return EMPTY;
  try {
    const parsed = JSON.parse(raw) as ScamPattern[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((p) => ({ ...p, source: "user" as const }));
  } catch {
    return [];
  }
}

function splitLines(value: string): string[] {
  return value
    .split(/\r?\n|,|、/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function generateId(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  const suffix = Math.random().toString(36).slice(2, 8);
  return `user-${slug || "pattern"}-${suffix}`;
}

/** フォーム入力を保存用の ScamPattern に正規化する。純粋関数。 */
export function normalizeInput(input: ScamPatternInput): ScamPattern {
  const now = new Date().toISOString();
  const evidence: Evidence[] = [];
  if (input.evidenceUrl.trim() || input.evidenceNote.trim()) {
    evidence.push({
      id: `ev-${Math.random().toString(36).slice(2, 8)}`,
      type: input.evidenceUrl.trim() ? "url" : "user_report",
      title: input.evidenceNote.trim()
        ? input.evidenceNote.trim().slice(0, 40)
        : "観測記録",
      url: input.evidenceUrl.trim() || undefined,
      sourceName: "利用者観測",
      observedAt: now.slice(0, 10),
      note: input.evidenceNote.trim() || "（メモなし）",
    });
  }

  return {
    id: generateId(input.name),
    name: input.name.trim(),
    description: input.aiUpgrade.trim() || input.classicalOrigin.trim(),
    classicalOrigin: input.classicalOrigin.trim(),
    aiUpgrade: input.aiUpgrade.trim(),
    entryPoint: splitLines(input.entryPoint),
    trustHook: splitLines(input.trustHook),
    emotionalTrigger: splitLines(input.emotionalTrigger),
    migrationPath: splitLines(input.migrationPath),
    redFlags: splitLines(input.redFlags),
    observedEvidence: evidence,
    riskLevel: input.riskLevel,
    tags: splitLines(input.tags),
    relatedPatterns: [],
    preventionNotes: splitLines(input.preventionNotes),
    source: "user",
    createdAt: now,
    updatedAt: now,
  };
}

export function loadUserPatterns(): ScamPattern[] {
  if (typeof window === "undefined") return [];
  return parsePatterns(window.localStorage.getItem(STORAGE_KEY));
}

export function saveUserPattern(input: ScamPatternInput): ScamPattern {
  const pattern = normalizeInput(input);
  const next = [pattern, ...loadUserPatterns()];
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    notify();
  }
  return pattern;
}

export function deleteUserPattern(id: string): void {
  if (typeof window === "undefined") return;
  const next = loadUserPatterns().filter((p) => p.id !== id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  notify();
}
