"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Filter, Search, X } from "lucide-react";
import {
  filterObservations,
  filtersToSearchParams,
  getObservations,
  getUniqueCountries,
  GENDER_DESIGN_ISSUES,
  INTIMACY_DIMENSIONS,
  INTIMACY_VALUES,
  LIFE_STAGES,
  parseFiltersFromSearchParams,
  RELATIONSHIP_ENTITIES,
  VALUE_CONFLICTS,
  type ObservationFilters,
} from "@/lib/observations";
import { INTIMACY_RISKS } from "@/data/intimacy-meta";
import { OBSERVATION_STATUSES } from "@/lib/intimacy-display";
import { ObservationCard } from "@/components/intimacy/ObservationCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: { id: string; label: string }[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="annotation">{title}</legend>
      <ul className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = selected.includes(opt.id);
          return (
            <li key={opt.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => onToggle(opt.id)}
                className={cn(
                  "rounded-sm border px-2 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20",
                  active
                    ? "border-[var(--accent-violet)] bg-[var(--accent-violet-bg)] text-[var(--ink)]"
                    : "border-[var(--border)] text-[var(--ink-muted)] hover:border-[var(--ink-faint)]",
                )}
              >
                {opt.label}
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

function useFiltersFromUrl() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo(
    () => parseFiltersFromSearchParams(searchParams),
    [searchParams],
  );

  const setFilters = useCallback(
    (next: ObservationFilters) => {
      const params = filtersToSearchParams(next);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router],
  );

  return { filters, setFilters };
}

export function ObservationsExplorer() {
  const { filters, setFilters } = useFiltersFromUrl();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const all = getObservations();

  const filtered = useMemo(
    () => filterObservations(all, filters),
    [all, filters],
  );

  function toggleArray(key: keyof ObservationFilters, id: string) {
    const current = filters[key];
    if (!Array.isArray(current)) return;
    const next = current.includes(id)
      ? current.filter((v) => v !== id)
      : [...current, id];
    setFilters({ ...filters, [key]: next });
  }

  function clearFilters() {
    setFilters({
      keyword: "",
      relationship: [],
      lifeStage: [],
      intimacy: [],
      status: [],
      humanScope: "all",
      genderDesign: [],
      risk: [],
      country: [],
      institutional: [],
      value: [],
      valueConflict: [],
    });
  }

  const filterPanel = (
    <div className="flex flex-col gap-5">
      <FilterGroup
        title="Relationship Type"
        options={RELATIONSHIP_ENTITIES.map((r) => ({
          id: r.id,
          label: r.labelJa,
        }))}
        selected={filters.relationship}
        onToggle={(id) => toggleArray("relationship", id)}
      />
      <FilterGroup
        title="Life Stage"
        options={LIFE_STAGES.map((s) => ({ id: s.id, label: s.labelJa }))}
        selected={filters.lifeStage}
        onToggle={(id) => toggleArray("lifeStage", id)}
      />
      <FilterGroup
        title="Intimacy Dimension"
        options={INTIMACY_DIMENSIONS.map((d) => ({
          id: d.id,
          label: d.labelJa,
        }))}
        selected={filters.intimacy}
        onToggle={(id) => toggleArray("intimacy", id)}
      />
      <FilterGroup
        title="Status"
        options={OBSERVATION_STATUSES.map((s) => ({
          id: s,
          label: s,
        }))}
        selected={filters.status}
        onToggle={(id) => toggleArray("status", id)}
      />
      <fieldset className="flex flex-col gap-2">
        <legend className="annotation">Human / More-than-Human</legend>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["all", "すべて"],
              ["human", "Human"],
              ["more-than-human", "More-than-Human"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={filters.humanScope === value}
              onClick={() => setFilters({ ...filters, humanScope: value })}
              className={cn(
                "rounded-sm border px-2 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20",
                filters.humanScope === value
                  ? "border-[var(--accent-violet)] bg-[var(--accent-violet-bg)]"
                  : "border-[var(--border)] text-[var(--ink-muted)]",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>
      <FilterGroup
        title="Gender Design"
        options={GENDER_DESIGN_ISSUES.map((g) => ({
          id: g.id,
          label: g.labelJa,
        }))}
        selected={filters.genderDesign}
        onToggle={(id) => toggleArray("genderDesign", id)}
      />
      <FilterGroup
        title="Value"
        options={INTIMACY_VALUES.map((v) => ({
          id: v.id,
          label: v.labelJa,
        }))}
        selected={filters.value}
        onToggle={(id) => toggleArray("value", id)}
      />
      <FilterGroup
        title="Value Conflict"
        options={VALUE_CONFLICTS.map((c) => ({
          id: c.id,
          label: c.labelJa,
        }))}
        selected={filters.valueConflict}
        onToggle={(id) => toggleArray("valueConflict", id)}
      />
      <FilterGroup
        title="Risk"
        options={INTIMACY_RISKS.map((r) => ({ id: r.id, label: r.labelJa }))}
        selected={filters.risk}
        onToggle={(id) => toggleArray("risk", id)}
      />
      <FilterGroup
        title="Country"
        options={getUniqueCountries().map((c) => ({ id: c, label: c }))}
        selected={filters.country}
        onToggle={(id) => toggleArray("country", id)}
      />
      <Button type="button" variant="outline" size="sm" onClick={clearFilters}>
        フィルターをクリア
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-faint)]"
            aria-hidden
          />
          <Input
            value={filters.keyword}
            onChange={(e) =>
              setFilters({ ...filters, keyword: e.target.value })
            }
            placeholder="キーワードで検索"
            className="pl-8"
            aria-label="キーワード検索"
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-[var(--ink-faint)]">
            {filtered.length} 件（全 {all.length} 件）
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
          >
            <Filter className="h-3.5 w-3.5" aria-hidden />
            フィルター
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">{filterPanel}</aside>

        {drawerOpen ? (
          <div
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="フィルター"
          >
            <button
              type="button"
              className="absolute inset-0 bg-[var(--ink)]/20"
              aria-label="フィルターを閉じる"
              onClick={() => setDrawerOpen(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-sm border border-[var(--border)] bg-[var(--paper)] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold">フィルター</p>
                <button
                  type="button"
                  aria-label="閉じる"
                  onClick={() => setDrawerOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {filterPanel}
            </div>
          </div>
        ) : null}

        <div>
          {filtered.length === 0 ? (
            <p className="rounded-sm border border-dashed border-[var(--border)] p-10 text-center text-sm text-[var(--ink-faint)]">
              条件に一致する観測記録がありません。
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((o) => (
                <ObservationCard key={o.id} observation={o} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}