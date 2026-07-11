import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Cpu,
  FlaskConical,
  History,
  Radar,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import type { FutureFraudForecast } from "@/types/forecast";
import { forecastDomainLabel, forecastHorizonLabel } from "@/lib/forecasts";
import { RiskBadge } from "@/components/RiskBadge";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  forecast: FutureFraudForecast;
  compact?: boolean;
};

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
        {items.map((item, i) => (
          <li key={`${item}-${i}`}>
            <Badge variant="outline">{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BulletList({
  items,
  dotClass = "bg-[var(--ink-faint)]",
}: {
  items: string[];
  dotClass?: string;
}) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
        >
          <span
            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${dotClass}`}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ForecastCard({ forecast, compact = false }: Props) {
  if (compact) {
    return (
      <Link href={`/forecasts/${forecast.id}`} className="group block">
        <Card className="flex h-full flex-col p-4 transition-colors hover:border-[var(--ink-faint)]">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="annotation inline-flex items-center gap-1 text-[var(--ink-faint)]">
              <Clock className="h-3 w-3" aria-hidden />
              {forecastHorizonLabel[forecast.horizon]}
            </span>
            <RiskBadge level={forecast.riskLevel} className="ml-auto" showEn={false} />
          </div>
          <h3 className="text-sm font-semibold leading-snug tracking-tight">
            {forecast.title}
            {forecast.japaneseTitle ? (
              <span className="ml-1.5 font-normal text-[var(--ink-faint)]">
                {forecast.japaneseTitle}
              </span>
            ) : null}
          </h3>
          <p className="prose-ja mt-1.5 line-clamp-2 text-xs text-[var(--ink-muted)]">
            {forecast.summary}
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
            <span className="annotation text-[var(--ink-faint)]">
              {forecast.classicalOrigin[0]}
            </span>
            <ArrowRight
              className="h-3.5 w-3.5 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Card className="p-6">
      <header className="border-b border-[var(--border-subtle)] pb-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="annotation inline-flex items-center gap-1 rounded-sm border border-[var(--accent-amber)] px-2 py-0.5 text-[var(--accent-amber)]">
            <FlaskConical className="h-3 w-3" aria-hidden />
            Forecast / 観測仮説
          </span>
          <span className="annotation inline-flex items-center gap-1 rounded-sm border border-[var(--border)] px-2 py-0.5 text-[var(--ink-muted)]">
            <Radar className="h-3 w-3" aria-hidden />
            {forecastDomainLabel[forecast.domain]}
          </span>
          <span className="annotation inline-flex items-center gap-1 text-[var(--ink-muted)]">
            <Clock className="h-3 w-3" aria-hidden />
            {forecastHorizonLabel[forecast.horizon]}
          </span>
          <RiskBadge
            level={forecast.riskLevel}
            className="ml-auto"
            showEn={false}
          />
        </div>
        <h2 className="text-lg font-semibold leading-snug tracking-tight">
          <Link
            href={`/forecasts/${forecast.id}`}
            className="hover:underline underline-offset-4"
          >
            {forecast.title}
          </Link>
          {forecast.japaneseTitle ? (
            <span className="ml-2 text-sm font-normal text-[var(--ink-faint)]">
              {forecast.japaneseTitle}
            </span>
          ) : null}
        </h2>
        <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
          {forecast.summary}
        </p>
      </header>

      <div className="grid gap-5 py-5 sm:grid-cols-2">
        <ChipRow
          icon={<History className="h-3.5 w-3.5" aria-hidden />}
          label="Classical Origin / 古典的起源"
          items={forecast.classicalOrigin}
        />
        <ChipRow
          icon={<Cpu className="h-3.5 w-3.5" aria-hidden />}
          label="New Interface / 新しいインターフェース"
          items={forecast.newInterface}
        />
        <ChipRow
          icon={<ShieldCheck className="h-3.5 w-3.5" aria-hidden />}
          label="Trust Hook / 信頼フック"
          items={forecast.trustHook}
        />
        <ChipRow
          icon={<AlertTriangle className="h-3.5 w-3.5" aria-hidden />}
          label="Warning Signs / 警告サイン"
          items={forecast.warningSigns}
        />
      </div>

      <div className="grid gap-4 border-t border-[var(--border-subtle)] py-5 sm:grid-cols-2">
        <section className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-4">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-tight">
            <Cpu className="h-4 w-4 text-[var(--ink-faint)]" aria-hidden />
            Design Countermeasures / 設計上の対策
          </h3>
          <BulletList items={forecast.designCountermeasures} />
        </section>
        <section className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-4">
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-tight">
            <UserCheck className="h-4 w-4 text-[var(--accent-amber)]" aria-hidden />
            User Countermeasures / 利用者の対策
          </h3>
          <BulletList
            items={forecast.userCountermeasures}
            dotClass="bg-[var(--accent-amber)]"
          />
        </section>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
        <span className="flex items-center gap-1.5 text-xs text-[var(--ink-faint)]">
          <FlaskConical className="h-3 w-3" aria-hidden />
          これは予測であり、実際の発生事例ではありません。
        </span>
        <Link
          href={`/forecasts/${forecast.id}`}
          className="inline-flex shrink-0 items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
        >
          詳細を見る
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </Card>
  );
}
