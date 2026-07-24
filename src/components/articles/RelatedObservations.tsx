import Link from "next/link";
import { ArrowRight, FlaskConical, Link2, Radar } from "lucide-react";
import type { ObservationArticle } from "@/types/article";
import { getSeedPatternById } from "@/lib/data";
import { getForecastById } from "@/lib/forecasts";
import { getReportById } from "@/lib/reports";
import { trustHookCategories } from "@/data/trustHooks";
import { Card } from "@/components/ui/card";

export function RelatedObservations({
  article,
}: {
  article: Pick<
    ObservationArticle,
    | "relatedPatternIds"
    | "relatedReportIds"
    | "relatedForecastIds"
    | "relatedTrustHookIds"
    | "folkloreConnection"
  >;
}) {
  const patterns = article.relatedPatternIds
    .map((id) => getSeedPatternById(id))
    .filter(Boolean);
  const reports = article.relatedReportIds
    .map((id) => getReportById(id))
    .filter(Boolean);
  const forecasts = article.relatedForecastIds
    .map((id) => getForecastById(id))
    .filter(Boolean);
  const trustHooks = trustHookCategories.filter((h) =>
    article.relatedTrustHookIds.includes(h.id),
  );

  const hasLinks =
    patterns.length > 0 ||
    reports.length > 0 ||
    forecasts.length > 0 ||
    trustHooks.length > 0;

  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold tracking-tight">
        <Link2 className="h-4 w-4 text-[var(--ink-faint)]" aria-hidden />
        Connection to Scam Folklore
      </h2>

      <blockquote className="prose-ja mb-6 border-l-2 border-[var(--border)] pl-4 text-[var(--ink-muted)]">
        {article.folkloreConnection}
      </blockquote>

      {hasLinks ? (
        <div className="grid gap-6 md:grid-cols-2">
          {patterns.length > 0 ? (
            <div>
              <p className="annotation mb-3">Related Patterns / 関連パターン</p>
              <ul className="flex flex-col gap-2">
                {patterns.map((p) =>
                  p ? (
                    <li key={p.id}>
                      <Link
                        href={`/patterns/${p.id}`}
                        className="group flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3 text-sm transition-colors hover:border-[var(--ink-faint)]"
                      >
                        <span>{p.name}</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          ) : null}

          {forecasts.length > 0 ? (
            <div>
              <p className="annotation mb-3">Related Forecasts / 関連予測</p>
              <ul className="flex flex-col gap-2">
                {forecasts.map((f) =>
                  f ? (
                    <li key={f.id}>
                      <Link
                        href={`/forecasts/${f.id}`}
                        className="group flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3 text-sm transition-colors hover:border-[var(--ink-faint)]"
                      >
                        <span className="flex items-center gap-2">
                          <FlaskConical
                            className="h-3.5 w-3.5 text-[var(--accent-amber)]"
                            aria-hidden
                          />
                          {f.japaneseTitle ?? f.title}
                        </span>
                        <ArrowRight
                          className="h-3.5 w-3.5 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          ) : null}

          {trustHooks.length > 0 ? (
            <div>
              <p className="annotation mb-3">Trust Hooks / 信頼フック</p>
              <ul className="flex flex-col gap-2">
                {trustHooks.map((h) => (
                  <li key={h.id}>
                    <Link
                      href="/trust-hooks"
                      className="group flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3 text-sm transition-colors hover:border-[var(--ink-faint)]"
                    >
                      <span className="flex items-center gap-2">
                        <Radar
                          className="h-3.5 w-3.5 text-[var(--ink-faint)]"
                          aria-hidden
                        />
                        {h.title}
                      </span>
                      <ArrowRight
                        className="h-3.5 w-3.5 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {reports.length > 0 ? (
            <div>
              <p className="annotation mb-3">Related Reports / 関連レポート</p>
              <ul className="flex flex-col gap-2">
                {reports.map((r) =>
                  r ? (
                    <li key={r.id}>
                      <Link
                        href="/reports"
                        className="group flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3 text-sm transition-colors hover:border-[var(--ink-faint)]"
                      >
                        <span>{r.title}</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <Card className="p-5 text-sm text-[var(--ink-muted)]">
          関連する観測記録は順次追加されます。
        </Card>
      )}
    </section>
  );
}
