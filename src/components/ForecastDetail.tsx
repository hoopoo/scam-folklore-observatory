import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Cpu,
  Crosshair,
  FileText,
  FlaskConical,
  History,
  Link2,
  Radar,
  ShieldCheck,
  Timer,
  UserCheck,
} from "lucide-react";
import type { FutureFraudForecast } from "@/types/forecast";
import type { ScamPattern } from "@/types/scam";
import { getSeedPatternById } from "@/lib/data";
import {
  forecastDomainLabel,
  forecastHorizonLabel,
  getReportsForForecast,
} from "@/lib/forecasts";
import { reportRegionLabel } from "@/lib/reports";
import { RiskBadge } from "@/components/RiskBadge";
import { Badge } from "@/components/ui/badge";

function SectionHeading({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight">
      <span className="text-[var(--ink-faint)]">{icon}</span>
      {children}
    </h2>
  );
}

function Chips({ items }: { items: string[] }) {
  if (items.length === 0)
    return <p className="text-sm text-[var(--ink-faint)]">未記録</p>;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item, i) => (
        <li key={`${item}-${i}`}>
          <Badge variant="outline">{item}</Badge>
        </li>
      ))}
    </ul>
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

export function ForecastDetail({ forecast }: { forecast: FutureFraudForecast }) {
  const relatedPatterns = forecast.relatedPatternIds
    .map((id) => getSeedPatternById(id))
    .filter((p): p is ScamPattern => Boolean(p));
  const relatedReports = getReportsForForecast(forecast);

  return (
    <article className="mx-auto max-w-4xl px-5 py-10">
      <Link
        href="/forecasts"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        未来詐欺予測へ戻る
      </Link>

      <header className="border-b border-[var(--border)] pb-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
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
          <RiskBadge level={forecast.riskLevel} className="ml-auto" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {forecast.title}
        </h1>
        {forecast.japaneseTitle ? (
          <p className="mt-1 text-[var(--ink-faint)]">{forecast.japaneseTitle}</p>
        ) : null}
        <p className="prose-ja mt-3 text-[var(--ink-muted)]">{forecast.summary}</p>
      </header>

      {/* Forecast disclaimer */}
      <div className="mt-6 flex items-start gap-2 rounded-sm border border-[var(--accent-amber)]/40 bg-[var(--accent-soft)] p-4">
        <FlaskConical
          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-amber)]"
          aria-hidden
        />
        <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
          これは{" "}
          <strong className="font-semibold text-[var(--ink)]">
            予測（観測仮説 / Possible Future Pattern）
          </strong>{" "}
          であり、実際に発生した事例ではありません。{forecast.forecastNote}
        </p>
      </div>

      {/* Possible Future Pattern */}
      <section className="mt-6 rounded-sm border-l-2 border-[var(--border)] bg-[var(--paper-raised)] p-5">
        <p className="annotation mb-1.5">Possible Future Pattern / 想定シナリオ</p>
        <p className="prose-ja text-[var(--ink)]">{forecast.scenario}</p>
      </section>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        {/* Left: structure */}
        <div className="flex flex-col gap-6">
          <section>
            <SectionHeading icon={<History className="h-4 w-4" aria-hidden />}>
              Classical Origin / 古典的起源
            </SectionHeading>
            <Chips items={forecast.classicalOrigin} />
          </section>

          <section>
            <SectionHeading icon={<Cpu className="h-4 w-4" aria-hidden />}>
              New Interface / 新しいインターフェース
            </SectionHeading>
            <Chips items={forecast.newInterface} />
          </section>

          <section>
            <SectionHeading icon={<ShieldCheck className="h-4 w-4" aria-hidden />}>
              Trust Hook / 信頼フック
            </SectionHeading>
            <Chips items={forecast.trustHook} />
          </section>

          <section>
            <SectionHeading icon={<Crosshair className="h-4 w-4" aria-hidden />}>
              Attack Surface / 攻撃面
            </SectionHeading>
            <Chips items={forecast.attackSurface} />
          </section>

          <section>
            <SectionHeading icon={<Timer className="h-4 w-4" aria-hidden />}>
              Vulnerable Moment / 隙が生まれる瞬間
            </SectionHeading>
            <Chips items={forecast.vulnerableMoment} />
          </section>

          <section className="rounded-sm border border-[var(--border-subtle)] p-5">
            <SectionHeading icon={<AlertTriangle className="h-4 w-4" aria-hidden />}>
              Warning Signs / 警告サイン
            </SectionHeading>
            <BulletList
              items={forecast.warningSigns}
              dotClass="bg-[var(--accent-amber)]"
            />
          </section>
        </div>

        {/* Right: countermeasures + related */}
        <aside className="flex flex-col gap-6">
          <section className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5">
            <SectionHeading icon={<Cpu className="h-4 w-4" aria-hidden />}>
              Design Countermeasures / 設計上の対策
            </SectionHeading>
            <BulletList items={forecast.designCountermeasures} />
          </section>

          <section className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5">
            <SectionHeading icon={<UserCheck className="h-4 w-4" aria-hidden />}>
              User Countermeasures / 利用者の対策
            </SectionHeading>
            <BulletList
              items={forecast.userCountermeasures}
              dotClass="bg-[var(--accent-amber)]"
            />
          </section>

          {relatedPatterns.length > 0 ? (
            <section className="rounded-sm border border-[var(--border-subtle)] p-5">
              <SectionHeading icon={<Link2 className="h-4 w-4" aria-hidden />}>
                Related Patterns / 関連パターン
              </SectionHeading>
              <ul className="flex flex-col gap-2">
                {relatedPatterns.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/patterns/${p.id}`}
                      className="flex items-center justify-between gap-2 rounded-sm border border-[var(--border)] px-3 py-2 text-sm text-[var(--ink-muted)] hover:border-[var(--ink-faint)] hover:text-[var(--ink)]"
                    >
                      {p.name}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {relatedReports.length > 0 ? (
            <section className="rounded-sm border border-[var(--border-subtle)] p-5">
              <SectionHeading icon={<FileText className="h-4 w-4" aria-hidden />}>
                Related Reports / 関連トレンドレポート
              </SectionHeading>
              <ul className="flex flex-col gap-2">
                {relatedReports.map((r) => (
                  <li key={r.id}>
                    <Link
                      href="/reports"
                      className="block rounded-sm border border-[var(--border)] px-3 py-2 hover:border-[var(--ink-faint)]"
                    >
                      <span className="mb-1 flex flex-wrap items-center gap-1.5">
                        <span className="annotation rounded-sm border border-[var(--border-subtle)] px-1.5 py-0.5 text-[var(--ink-faint)]">
                          {r.quarter}
                        </span>
                        <span className="annotation text-[var(--ink-faint)]">
                          {reportRegionLabel[r.region]}
                        </span>
                      </span>
                      <span className="block text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]">
                        {r.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
