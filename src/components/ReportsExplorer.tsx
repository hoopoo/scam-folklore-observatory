"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type {
  ReportCategory,
  ReportQuarter,
  ReportRegion,
  TrendReport,
} from "@/types/report";
import type { RiskLevel } from "@/types/scam";
import { RISK_LEVELS, riskLevelLabel, riskOrder } from "@/lib/display";
import {
  REPORT_CATEGORIES,
  REPORT_QUARTERS,
  REPORT_REGIONS,
  reportCategoryLabel,
  reportRegionLabel,
} from "@/lib/reports";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ReportCard } from "@/components/ReportCard";

function searchableText(r: TrendReport): string {
  return [
    r.title,
    r.subtitle ?? "",
    r.summary,
    ...r.observedPatterns,
    ...r.trustHooks,
    ...r.emotionalTriggers,
    ...r.aiMethods,
    ...r.relatedClassicalFraud,
    ...r.migrationSignals,
  ]
    .join(" ")
    .toLowerCase();
}

export function ReportsExplorer({ reports }: { reports: TrendReport[] }) {
  const [query, setQuery] = useState("");
  const [quarter, setQuarter] = useState<ReportQuarter | "all">("all");
  const [region, setRegion] = useState<ReportRegion | "all">("all");
  const [category, setCategory] = useState<ReportCategory | "all">("all");
  const [severity, setSeverity] = useState<RiskLevel | "all">("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports
      .filter((r) => {
        if (quarter !== "all" && r.quarter !== quarter) return false;
        if (region !== "all" && r.region !== region) return false;
        if (category !== "all" && r.category !== category) return false;
        if (severity !== "all" && r.severity !== severity) return false;
        if (featuredOnly && !r.featured) return false;
        if (q && !searchableText(r).includes(q)) return false;
        return true;
      })
      .sort((a, b) => {
        // 新しい観測日を上に、同日なら深刻度が高い順。
        const byDate = b.observedAt.localeCompare(a.observedAt);
        if (byDate !== 0) return byDate;
        return riskOrder[a.severity] - riskOrder[b.severity];
      });
  }, [reports, query, quarter, region, category, severity, featuredOnly]);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          <div className="relative lg:col-span-1">
            <Search
              className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-faint)]"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="キーワードで検索"
              className="pl-8"
              aria-label="レポート検索"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-quarter">
              四半期
            </label>
            <Select
              id="filter-quarter"
              value={quarter}
              onChange={(e) =>
                setQuarter(e.target.value as ReportQuarter | "all")
              }
            >
              <option value="all">すべて</option>
              {REPORT_QUARTERS.map((qv) => (
                <option key={qv} value={qv}>
                  {qv}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-region">
              地域
            </label>
            <Select
              id="filter-region"
              value={region}
              onChange={(e) => setRegion(e.target.value as ReportRegion | "all")}
            >
              <option value="all">すべて</option>
              {REPORT_REGIONS.map((rv) => (
                <option key={rv} value={rv}>
                  {reportRegionLabel[rv]}（{rv}）
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-category">
              カテゴリ
            </label>
            <Select
              id="filter-category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as ReportCategory | "all")
              }
            >
              <option value="all">すべて</option>
              {REPORT_CATEGORIES.map((cv) => (
                <option key={cv} value={cv}>
                  {reportCategoryLabel[cv]}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-severity">
              深刻度
            </label>
            <Select
              id="filter-severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value as RiskLevel | "all")}
            >
              <option value="all">すべて</option>
              {RISK_LEVELS.map((s) => (
                <option key={s} value={s}>
                  {riskLevelLabel[s]}（{s}）
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-[var(--ink-muted)]">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(e) => setFeaturedOnly(e.target.checked)}
              className="h-3.5 w-3.5 accent-[var(--accent-amber)]"
            />
            注目レポートのみ表示
          </label>
          <p className="text-xs text-[var(--ink-faint)]">
            {filtered.length} 件のトレンドレポート（全 {reports.length} 件）
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 text-center text-sm text-[var(--ink-muted)]">
          条件に一致するレポートがありません。フィルタを調整してください。
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {filtered.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}
