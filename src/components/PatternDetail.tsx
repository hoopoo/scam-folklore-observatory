import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  DoorOpen,
  FileText,
  Flag,
  FlaskConical,
  Hand,
  History,
  KeyRound,
  Link2,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ScamPattern } from "@/types/scam";
import { getSeedPatternById } from "@/lib/data";
import {
  getReportsByPatternId,
  patternCategoryLabel,
} from "@/lib/patterns";
import { getForecastsByPatternId } from "@/lib/forecasts";
import { reportRegionLabel } from "@/lib/reports";
import { formatDate } from "@/lib/display";
import { RiskBadge } from "@/components/RiskBadge";
import { TagList } from "@/components/TagList";
import { EvidenceList } from "@/components/EvidenceList";
import { MigrationFlow } from "@/components/MigrationFlow";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="annotation border-b border-[var(--border)] pb-2">{children}</p>
  );
}

function SectionHeading({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight">
      {icon ? <span className="text-[var(--ink-faint)]">{icon}</span> : null}
      {children}
    </h2>
  );
}

/** チップ表示。項目がない場合は「未記録」を表示する。 */
function Chips({ items }: { items?: string[] }) {
  if (!items || items.length === 0) {
    return <span className="text-sm text-[var(--ink-faint)]">未記録</span>;
  }
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

export function PatternDetail({ pattern }: { pattern: ScamPattern }) {
  const related = pattern.relatedPatterns
    .map((id) => getSeedPatternById(id))
    .filter((p): p is ScamPattern => Boolean(p));

  const allRelatedReports = getReportsByPatternId(pattern.id);
  const relatedReports = allRelatedReports.slice(0, 6);
  const relatedReportsTotal = allRelatedReports.length;

  const relatedForecasts = getForecastsByPatternId(pattern.id);

  const trustFields: { label: string; items?: string[] }[] = [
    { label: "Trust Hook / 信頼のフック", items: pattern.trustHook },
    { label: "Emotional Trigger / 感情の引き金", items: pattern.emotionalTrigger },
    { label: "Authority Used / 権威の利用", items: pattern.authorityUsed },
    { label: "Artificial Intimacy / 親密さの演出", items: pattern.artificialIntimacy },
    { label: "Scarcity / Urgency / 限定・緊急性", items: pattern.scarcityUrgency },
    { label: "Proof Simulation / 成功・証拠の偽装", items: pattern.proofSimulation },
  ];

  const migrationSteps = pattern.migrationFlow ?? pattern.migrationPath;

  return (
    <article className="mx-auto max-w-5xl px-5 py-10">
      <Link
        href="/patterns"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        ← 観測一覧へ戻る
      </Link>

      <header className="border-b border-[var(--border)] pb-6">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <RiskBadge level={pattern.riskLevel} />
          {pattern.category ? (
            <span className="annotation rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-2 py-0.5 text-[var(--ink-muted)]">
              {patternCategoryLabel[pattern.category]}
            </span>
          ) : null}
          <span className="annotation">更新: {formatDate(pattern.updatedAt)}</span>
          {pattern.source === "user" ? (
            <span className="annotation text-[var(--accent-amber)]">
              利用者観測
            </span>
          ) : null}
        </div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {pattern.name}
        </h1>
        <p className="prose-ja mt-3 max-w-3xl text-[var(--ink-muted)]">
          {pattern.description}
        </p>
        <div className="mt-4">
          <TagList tags={pattern.tags} />
        </div>
      </header>

      {pattern.thesis ? (
        <section className="mt-6 flex gap-3 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
          <Quote
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ink-faint)]"
            aria-hidden
          />
          <div>
            <p className="annotation mb-1.5">Pattern Thesis / 一文要約</p>
            <p className="prose-ja text-[0.95rem] font-medium leading-relaxed text-[var(--ink)]">
              {pattern.thesis}
            </p>
          </div>
        </section>
      ) : null}

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
        {/* ------- 左カラム：構造分析 ------- */}
        <div className="flex flex-col gap-9">
          <ColumnLabel>構造分析 / Structure</ColumnLabel>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-5">
              <h2 className="annotation mb-1">Classical Origin / 古典的起源</h2>
              <p className="text-sm">{pattern.classicalOrigin}</p>
            </Card>
            <Card className="p-5">
              <h2 className="annotation mb-1">AI Upgrade / AIによる再包装</h2>
              <p className="text-sm">{pattern.aiUpgrade}</p>
            </Card>
          </div>

          {/* Trust Structure */}
          <section>
            <SectionHeading icon={<KeyRound className="h-4 w-4" aria-hidden />}>
              信頼はどこで作られるか{" "}
              <span className="font-normal text-[var(--ink-faint)]">
                / Trust Structure
              </span>
            </SectionHeading>
            <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] divide-y divide-[var(--border-subtle)]">
              {trustFields.map((field) => (
                <div
                  key={field.label}
                  className="grid gap-2 p-4 sm:grid-cols-[10rem_1fr] sm:items-start"
                >
                  <p className="annotation pt-0.5">{field.label}</p>
                  <Chips items={field.items} />
                </div>
              ))}
            </div>
          </section>

          {/* Migration Flow */}
          <MigrationFlow steps={migrationSteps} />

          {/* Classical Pattern */}
          <section>
            <SectionHeading icon={<History className="h-4 w-4" aria-hidden />}>
              古典詐欺との対応関係{" "}
              <span className="font-normal text-[var(--ink-faint)]">
                / Classical Pattern
              </span>
            </SectionHeading>
            <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
              <p className="annotation mb-1">対応する古典類型</p>
              <p className="mb-3 text-sm font-medium">{pattern.classicalOrigin}</p>
              {pattern.classicalMapping ? (
                <p className="prose-ja border-t border-[var(--border-subtle)] pt-3 text-sm text-[var(--ink-muted)]">
                  {pattern.classicalMapping}
                </p>
              ) : (
                <p className="border-t border-[var(--border-subtle)] pt-3 text-sm text-[var(--ink-faint)]">
                  対応関係の解説は未記録。
                </p>
              )}
            </div>
          </section>

          {/* Red Flags */}
          {pattern.redFlags.length > 0 ? (
            <section className="rounded-sm border border-[var(--risk-high)]/25 bg-[var(--risk-high-bg)]/40 p-5">
              <SectionHeading icon={<Flag className="h-4 w-4" aria-hidden />}>
                Red Flags / 危険サイン
              </SectionHeading>
              <ul className="grid gap-2 sm:grid-cols-2">
                {pattern.redFlags.map((f, i) => (
                  <li
                    key={`${f}-${i}`}
                    className="flex items-start gap-2 text-sm text-[var(--ink)]"
                  >
                    <AlertTriangle
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-red)]"
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Entry Point */}
          {pattern.entryPoint.length > 0 ? (
            <section>
              <SectionHeading icon={<DoorOpen className="h-4 w-4" aria-hidden />}>
                Entry Point / 入口
              </SectionHeading>
              <Chips items={pattern.entryPoint} />
            </section>
          ) : null}

          {/* Observed Evidence */}
          <section>
            <SectionHeading>Observed Evidence / 観測記録</SectionHeading>
            <EvidenceList evidence={pattern.observedEvidence} />
          </section>
        </div>

        {/* ------- 右カラム：予防・観測メモ ------- */}
        <aside className="flex flex-col gap-6">
          <ColumnLabel>予防・観測メモ / Prevention &amp; Notes</ColumnLabel>

          {/* Observation Note（目立つカード） */}
          {pattern.observationNote ? (
            <section className="rounded-sm border border-[var(--accent-red)]/30 bg-[var(--paper-raised)] p-5 shadow-[0_1px_0_rgba(35,34,32,0.04)]">
              <h2 className="annotation mb-2 flex items-center gap-1.5 text-[var(--accent-red)]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Observation Note / 観測メモ
              </h2>
              <p className="prose-ja text-sm text-[var(--ink)]">
                {pattern.observationNote}
              </p>
            </section>
          ) : null}

          {/* Stop Points */}
          {pattern.stopPoints && pattern.stopPoints.length > 0 ? (
            <section className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
              <SectionHeading icon={<Hand className="h-4 w-4" aria-hidden />}>
                どこで止まれるか{" "}
                <span className="font-normal text-[var(--ink-faint)]">
                  / Stop Points
                </span>
              </SectionHeading>
              <p className="mb-3 text-xs text-[var(--ink-faint)]">
                被害を防ぐために、どの段階で立ち止まるべきかを整理しています。
              </p>
              <BulletList
                items={pattern.stopPoints}
                dotClass="bg-[var(--accent-amber)]"
              />
            </section>
          ) : null}

          {/* Prevention Notes */}
          {pattern.preventionNotes.length > 0 ? (
            <section className="rounded-sm border border-[var(--border-subtle)] p-5">
              <SectionHeading
                icon={<ShieldCheck className="h-4 w-4 text-[var(--accent-amber)]" aria-hidden />}
              >
                Prevention Notes / 予防メモ
              </SectionHeading>
              <BulletList items={pattern.preventionNotes} />
            </section>
          ) : null}

          {/* Related Patterns */}
          {related.length > 0 ? (
            <section className="rounded-sm border border-[var(--border-subtle)] p-5">
              <SectionHeading icon={<Link2 className="h-4 w-4" aria-hidden />}>
                Related Patterns / 関連パターン
              </SectionHeading>
              <ul className="flex flex-col gap-2">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={`/patterns/${r.id}`}
                      className="flex items-center justify-between gap-2 rounded-sm border border-[var(--border)] px-3 py-2 text-sm text-[var(--ink-muted)] hover:border-[var(--ink-faint)] hover:text-[var(--ink)]"
                    >
                      {r.name}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Related Reports */}
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
              <Link
                href="/reports"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                トレンドレポートを見る（関連 {relatedReportsTotal} 件）
                <ArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </section>
          ) : null}

          {/* Related Forecasts */}
          {relatedForecasts.length > 0 ? (
            <section className="rounded-sm border border-[var(--border-subtle)] p-5">
              <SectionHeading
                icon={<FlaskConical className="h-4 w-4" aria-hidden />}
              >
                Related Forecasts / 関連する未来予測
              </SectionHeading>
              <p className="mb-2 text-xs text-[var(--ink-faint)]">
                これらは観測仮説（Forecast）であり、断定ではありません。
              </p>
              <ul className="flex flex-col gap-2">
                {relatedForecasts.map((f) => (
                  <li key={f.id}>
                    <Link
                      href={`/forecasts/${f.id}`}
                      className="block rounded-sm border border-[var(--border)] px-3 py-2 hover:border-[var(--ink-faint)]"
                    >
                      <span className="mb-1 flex flex-wrap items-center gap-1.5">
                        <span className="annotation rounded-sm border border-[var(--accent-amber)] px-1.5 py-0.5 text-[var(--accent-amber)]">
                          Forecast
                        </span>
                      </span>
                      <span className="block text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]">
                        {f.japaneseTitle ?? f.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/forecasts"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                未来詐欺予測を見る
                <ArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </section>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
