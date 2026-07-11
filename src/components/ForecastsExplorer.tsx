"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type {
  ForecastDomain,
  ForecastHorizon,
  ForecastRiskLevel,
  FutureFraudForecast,
} from "@/types/forecast";
import { RISK_LEVELS, riskLevelLabel } from "@/lib/display";
import {
  FORECAST_DOMAINS,
  FORECAST_HORIZONS,
  collectNewInterfaces,
  collectTrustHooks,
  forecastDomainDescription,
  forecastDomainLabel,
  forecastHorizonLabel,
  forecastHorizonOrder,
  forecastRiskOrder,
  forecastSearchableText,
  summarizeForecasts,
} from "@/lib/forecasts";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ForecastCard } from "@/components/ForecastCard";

function SummaryStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-sm border border-[var(--border)] bg-[var(--paper)] px-3 py-2.5">
      <p className="text-lg font-semibold tracking-tight tabular-nums">{value}</p>
      <p className="annotation mt-0.5 leading-tight">{label}</p>
    </div>
  );
}

function sortForecasts(items: FutureFraudForecast[]): FutureFraudForecast[] {
  return [...items].sort((a, b) => {
    const byHorizon =
      forecastHorizonOrder[a.horizon] - forecastHorizonOrder[b.horizon];
    if (byHorizon !== 0) return byHorizon;
    return forecastRiskOrder[a.riskLevel] - forecastRiskOrder[b.riskLevel];
  });
}

function DomainSection({
  domain,
  items,
}: {
  domain: ForecastDomain;
  items: FutureFraudForecast[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <header className="border-b border-[var(--border-subtle)] pb-3">
        <h2 className="text-base font-semibold tracking-tight">
          {domain}
          <span className="ml-2 text-sm font-normal text-[var(--ink-faint)]">
            {forecastDomainLabel[domain]}
          </span>
        </h2>
        <p className="prose-ja mt-1 text-sm text-[var(--ink-muted)]">
          {forecastDomainDescription[domain]}
        </p>
        <p className="annotation mt-1.5">{items.length} 件の観測仮説</p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {sortForecasts(items).map((forecast) => (
          <ForecastCard key={forecast.id} forecast={forecast} compact />
        ))}
      </div>
    </section>
  );
}

export function ForecastsExplorer({
  forecasts,
}: {
  forecasts: FutureFraudForecast[];
}) {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<ForecastDomain | "all">("all");
  const [horizon, setHorizon] = useState<ForecastHorizon | "all">("all");
  const [risk, setRisk] = useState<ForecastRiskLevel | "all">("all");
  const [trustHook, setTrustHook] = useState<string>("all");
  const [newInterface, setNewInterface] = useState<string>("all");

  const summary = useMemo(() => summarizeForecasts(forecasts), [forecasts]);
  const trustHookOptions = useMemo(
    () => collectTrustHooks(forecasts),
    [forecasts],
  );
  const interfaceOptions = useMemo(
    () => collectNewInterfaces(forecasts),
    [forecasts],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return forecasts.filter((f) => {
      if (domain !== "all" && f.domain !== domain) return false;
      if (horizon !== "all" && f.horizon !== horizon) return false;
      if (risk !== "all" && f.riskLevel !== risk) return false;
      if (trustHook !== "all" && !f.trustHook.includes(trustHook)) return false;
      if (newInterface !== "all" && !f.newInterface.includes(newInterface))
        return false;
      if (q && !forecastSearchableText(f).includes(q)) return false;
      return true;
    });
  }, [forecasts, query, domain, horizon, risk, trustHook, newInterface]);

  const groupedByDomain = useMemo(() => {
    const groups = Object.fromEntries(
      FORECAST_DOMAINS.map((d) => [d, [] as FutureFraudForecast[]]),
    ) as Record<ForecastDomain, FutureFraudForecast[]>;

    for (const f of filtered) {
      groups[f.domain].push(f);
    }

    return FORECAST_DOMAINS.map((d) => ({ domain: d, items: groups[d] })).filter(
      (g) => g.items.length > 0,
    );
  }, [filtered]);

  const showGrouped = domain === "all";

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        <SummaryStat label="Total Forecasts" value={summary.total} />
        <SummaryStat label="Critical" value={summary.critical} />
        <SummaryStat label="High" value={summary.high} />
        <SummaryStat
          label="AR / Vision"
          value={summary.byDomain["AR / Vision"]}
        />
        <SummaryStat
          label="Voice / Hearing"
          value={summary.byDomain["Voice / Hearing"]}
        />
        <SummaryStat
          label="Agent / AI-to-AI"
          value={summary.byDomain["Agent / AI-to-AI"]}
        />
      </div>

      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
              aria-label="予測検索"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-domain">
              領域 / Domain
            </label>
            <Select
              id="filter-domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value as ForecastDomain | "all")}
            >
              <option value="all">すべて</option>
              {FORECAST_DOMAINS.map((d) => (
                <option key={d} value={d}>
                  {forecastDomainLabel[d]}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-horizon">
              時期 / Horizon
            </label>
            <Select
              id="filter-horizon"
              value={horizon}
              onChange={(e) =>
                setHorizon(e.target.value as ForecastHorizon | "all")
              }
            >
              <option value="all">すべて</option>
              {FORECAST_HORIZONS.map((h) => (
                <option key={h} value={h}>
                  {forecastHorizonLabel[h]}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-risk">
              深刻度 / Risk
            </label>
            <Select
              id="filter-risk"
              value={risk}
              onChange={(e) =>
                setRisk(e.target.value as ForecastRiskLevel | "all")
              }
            >
              <option value="all">すべて</option>
              {RISK_LEVELS.map((s) => (
                <option key={s} value={s}>
                  {riskLevelLabel[s]}（{s}）
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-trusthook">
              信頼フック / Trust Hook
            </label>
            <Select
              id="filter-trusthook"
              value={trustHook}
              onChange={(e) => setTrustHook(e.target.value)}
            >
              <option value="all">すべて</option>
              {trustHookOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="annotation" htmlFor="filter-interface">
              インターフェース / Interface
            </label>
            <Select
              id="filter-interface"
              value={newInterface}
              onChange={(e) => setNewInterface(e.target.value)}
            >
              <option value="all">すべて</option>
              {interfaceOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <p className="mt-3 text-xs text-[var(--ink-faint)]">
          {filtered.length} 件の観測仮説（全 {forecasts.length} 件）
          {showGrouped ? " · 領域ごとに表示" : null}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 text-center text-sm text-[var(--ink-muted)]">
          条件に一致する予測がありません。フィルタを調整してください。
        </p>
      ) : showGrouped ? (
        <div className="flex flex-col gap-10">
          {groupedByDomain.map(({ domain: d, items }) => (
            <DomainSection key={d} domain={d} items={items} />
          ))}
        </div>
      ) : (
        <DomainSection domain={domain} items={filtered} />
      )}
    </div>
  );
}
