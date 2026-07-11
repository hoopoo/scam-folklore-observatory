"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { LayoutGrid, Rows3, Search } from "lucide-react";
import type { PatternCategory, RiskLevel } from "@/types/scam";
import { mergePatterns, searchableText, sortByRisk } from "@/lib/data";
import { RISK_LEVELS, riskLevelLabel } from "@/lib/display";
import {
  PATTERN_CATEGORIES,
  patternCategoryLabel,
  summarizePatterns,
} from "@/lib/patterns";
import {
  getServerSnapshot,
  getUserPatternsSnapshot,
  subscribeUserPatterns,
} from "@/lib/storage";
import { PatternCard } from "@/components/PatternCard";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 12;

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-0.5 px-4 py-3">
      <span className="text-xl font-semibold tracking-tight text-[var(--ink)]">
        {value}
      </span>
      <span className="annotation text-[var(--ink-faint)]">{label}</span>
    </div>
  );
}

export function PatternsExplorer() {
  const userPatterns = useSyncExternalStore(
    subscribeUserPatterns,
    getUserPatternsSnapshot,
    getServerSnapshot,
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PatternCategory | "all">("all");
  const [risk, setRisk] = useState<RiskLevel | "all">("all");
  const [trustHook, setTrustHook] = useState("all");
  const [origin, setOrigin] = useState("all");
  const [view, setView] = useState<"detailed" | "compact">("detailed");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const all = useMemo(() => mergePatterns(userPatterns), [userPatterns]);
  const summary = useMemo(() => summarizePatterns(all), [all]);

  const trustHooks = useMemo(
    () => [...new Set(all.flatMap((p) => p.trustHook))].sort((a, b) => a.localeCompare(b, "ja")),
    [all],
  );
  const origins = useMemo(
    () => [...new Set(all.map((p) => p.classicalOrigin))].sort((a, b) => a.localeCompare(b, "ja")),
    [all],
  );
  const categories = useMemo(
    () => PATTERN_CATEGORIES.filter((c) => all.some((p) => p.category === c)),
    [all],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = all.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (risk !== "all" && p.riskLevel !== risk) return false;
      if (trustHook !== "all" && !p.trustHook.includes(trustHook)) return false;
      if (origin !== "all" && p.classicalOrigin !== origin) return false;
      if (q && !searchableText(p).includes(q)) return false;
      return true;
    });
    return sortByRisk(result);
  }, [all, query, category, risk, trustHook, origin]);

  // フィルタが変わったらページングをリセットする（描画中に前回値と比較する安全なパターン）。
  const filterKey = `${query}|${category}|${risk}|${trustHook}|${origin}`;
  const [prevKey, setPrevKey] = useState(filterKey);
  if (filterKey !== prevKey) {
    setPrevKey(filterKey);
    setLimit(PAGE_SIZE);
  }

  const visible = filtered.slice(0, limit);
  const hasMore = filtered.length > visible.length;

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Bar */}
      <div className="grid grid-cols-2 divide-x divide-y divide-[var(--border-subtle)] overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
        <Stat label="Total / 総数" value={summary.total} />
        <Stat label="Critical / 危機" value={summary.critical} />
        <Stat label="High / 高" value={summary.high} />
        <Stat label="AI-enabled / AI利用" value={summary.aiEnabled} />
        <Stat label="Public Authority / 公権力" value={summary.publicAuthority} />
        <Stat label="Intimacy / 親密さ" value={summary.intimacy} />
      </div>

      {/* Filters */}
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative lg:col-span-3">
            <Search
              className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-faint)]"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="名称・起源・信頼フック・危険サイン・タグを検索"
              className="pl-8"
              aria-label="検索"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-category">
              カテゴリ
            </label>
            <Select
              id="filter-category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as PatternCategory | "all")
              }
            >
              <option value="all">すべて</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {patternCategoryLabel[c]}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-risk">
              リスク
            </label>
            <Select
              id="filter-risk"
              value={risk}
              onChange={(e) => setRisk(e.target.value as RiskLevel | "all")}
            >
              <option value="all">すべて</option>
              {RISK_LEVELS.map((r) => (
                <option key={r} value={r}>
                  {riskLevelLabel[r]}（{r}）
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-trusthook">
              信頼フック
            </label>
            <Select
              id="filter-trusthook"
              value={trustHook}
              onChange={(e) => setTrustHook(e.target.value)}
            >
              <option value="all">すべて</option>
              {trustHooks.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1 lg:col-span-2">
            <label className="annotation" htmlFor="filter-origin">
              古典的起源
            </label>
            <Select
              id="filter-origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="all">すべて</option>
              {origins.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[var(--ink-faint)]">
            {filtered.length} 件の観測パターン（全 {summary.total} 件）
          </p>
          <div className="flex items-center gap-1 rounded-sm border border-[var(--border)] p-0.5">
            <button
              type="button"
              onClick={() => setView("detailed")}
              aria-pressed={view === "detailed"}
              className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs ${
                view === "detailed"
                  ? "bg-[var(--paper)] text-[var(--ink)]"
                  : "text-[var(--ink-faint)] hover:text-[var(--ink-muted)]"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
              詳細
            </button>
            <button
              type="button"
              onClick={() => setView("compact")}
              aria-pressed={view === "compact"}
              className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs ${
                view === "compact"
                  ? "bg-[var(--paper)] text-[var(--ink)]"
                  : "text-[var(--ink-faint)] hover:text-[var(--ink-muted)]"
              }`}
            >
              <Rows3 className="h-3.5 w-3.5" aria-hidden />
              コンパクト
            </button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-sm border border-dashed border-[var(--border)] p-10 text-center text-sm text-[var(--ink-faint)]">
          条件に一致する観測記録がありません。
        </p>
      ) : (
        <>
          <div
            className={
              view === "compact"
                ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {visible.map((p) => (
              <PatternCard key={p.id} pattern={p} compact={view === "compact"} />
            ))}
          </div>

          {hasMore ? (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setLimit((n) => n + PAGE_SIZE)}
              >
                さらに表示（残り {filtered.length - visible.length} 件）
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
