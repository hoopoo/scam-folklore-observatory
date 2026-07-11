import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Cpu,
  FlaskConical,
  Globe,
  Heart,
  Route,
  Shield,
  Sparkles,
} from "lucide-react";
import type { TrendReport } from "@/types/report";
import { getSeedPatternById } from "@/lib/data";
import { formatDate } from "@/lib/display";
import { getForecastsByReportId } from "@/lib/forecasts";
import { reportCategoryLabel, reportRegionLabel } from "@/lib/reports";
import { RiskBadge } from "@/components/RiskBadge";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ChipRow({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: string[];
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="annotation mb-1.5 flex items-center gap-1.5">
        <span className="text-[var(--ink-faint)]">{icon}</span>
        {label}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item}>
            <Badge variant="outline">{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReportCard({ report }: { report: TrendReport }) {
  const relatedPatterns = report.relatedPatternIds
    .map((id) => getSeedPatternById(id))
    .filter((p) => Boolean(p));
  const relatedForecasts = getForecastsByReportId(report.id);

  return (
    <Card className="p-6">
      <header className="border-b border-[var(--border-subtle)] pb-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="annotation rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]">
            {report.quarter}
          </span>
          <span className="annotation flex items-center gap-1 text-[var(--ink-muted)]">
            <Globe className="h-3 w-3" aria-hidden />
            {reportRegionLabel[report.region]}
          </span>
          <span className="annotation rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-2 py-0.5 text-[var(--ink-muted)]">
            {reportCategoryLabel[report.category]}
          </span>
          <span className="annotation flex items-center gap-1 text-[var(--ink-faint)]">
            <CalendarDays className="h-3 w-3" aria-hidden />
            {formatDate(report.observedAt)}
          </span>
          <RiskBadge level={report.severity} className="ml-auto" showEn={false} />
        </div>
        {report.featured ? (
          <span className="annotation mb-2 inline-flex items-center gap-1 rounded-sm border border-[var(--accent-amber)] px-2 py-0.5 text-[var(--accent-amber)]">
            <Sparkles className="h-3 w-3" aria-hidden />
            注目レポート
          </span>
        ) : null}
        <h2 className="text-lg font-semibold leading-snug tracking-tight">
          {report.title}
        </h2>
        {report.subtitle ? (
          <p className="mt-1 text-sm text-[var(--ink-faint)]">{report.subtitle}</p>
        ) : null}
        <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
          {report.summary}
        </p>
      </header>

      <div className="grid gap-5 py-5 sm:grid-cols-2">
        <ChipRow
          icon={<Sparkles className="h-3.5 w-3.5" aria-hidden />}
          label="Observed Patterns / 観測パターン"
          items={report.observedPatterns}
        />
        <ChipRow
          icon={<Shield className="h-3.5 w-3.5" aria-hidden />}
          label="Trust Hooks / 信頼フック"
          items={report.trustHooks}
        />
        <ChipRow
          icon={<Heart className="h-3.5 w-3.5" aria-hidden />}
          label="Emotional Triggers / 感情の引き金"
          items={report.emotionalTriggers}
        />
        <ChipRow
          icon={<Cpu className="h-3.5 w-3.5" aria-hidden />}
          label="AI Methods / 悪用されたAI技術"
          items={report.aiMethods}
        />
        <ChipRow
          icon={<ArrowRight className="h-3.5 w-3.5" aria-hidden />}
          label="Related Classical Fraud / 古典類型"
          items={report.relatedClassicalFraud}
        />
        <ChipRow
          icon={<Route className="h-3.5 w-3.5" aria-hidden />}
          label="Migration Signals / 誘導の危険サイン"
          items={report.migrationSignals}
        />
      </div>

      {report.preventionNotes.length > 0 ? (
        <section className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-4">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-tight">
            <Shield className="h-4 w-4 text-[var(--accent-amber)]" aria-hidden />
            Prevention Notes / 予防メモ
          </h3>
          <ul className="flex flex-col gap-1.5">
            {report.preventionNotes.map((n, i) => (
              <li
                key={`${n}-${i}`}
                className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]"
                  aria-hidden
                />
                {n}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {relatedPatterns.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {relatedPatterns.map((p) => (
            <Link
              key={p!.id}
              href={`/patterns/${p!.id}`}
              className="inline-flex items-center gap-1 rounded-sm border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--ink-muted)] hover:border-[var(--ink-faint)] hover:text-[var(--ink)]"
            >
              {p!.name}
              <ArrowRight className="h-3 w-3" aria-hidden />
            </Link>
          ))}
        </div>
      ) : null}

      {relatedForecasts.length > 0 ? (
        <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
          <p className="annotation mb-2 flex items-center gap-1.5">
            <FlaskConical
              className="h-3.5 w-3.5 text-[var(--accent-amber)]"
              aria-hidden
            />
            Related Forecasts / 関連する未来予測（観測仮説）
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedForecasts.map((f) => (
              <Link
                key={f.id}
                href={`/forecasts/${f.id}`}
                className="inline-flex items-center gap-1 rounded-sm border border-dashed border-[var(--accent-amber)]/60 px-2.5 py-1 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                {f.japaneseTitle ?? f.title}
                <ArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {report.sourceNotes && report.sourceNotes.length > 0 ? (
        <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--ink-faint)]">
          <span className="annotation mr-1">出典メモ</span>
          {report.sourceNotes.join(" / ")}
        </p>
      ) : null}
    </Card>
  );
}
