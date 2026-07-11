import { AlertTriangle, Route } from "lucide-react";
import type { MigrationStep } from "@/types/scam";

type Props = {
  /** MigrationStep[] または旧来の string[]（migrationPath）を受け取る。 */
  steps: (MigrationStep | string)[];
  className?: string;
};

/** string[] と MigrationStep[] のどちらでも受け取れるよう正規化する。 */
function toStep(step: MigrationStep | string): MigrationStep {
  return typeof step === "string" ? { label: step } : step;
}

/**
 * 誘導経路を縦方向のタイムラインで可視化する。
 * 目的は詐欺の流れの再現ではなく、危険な誘導経路を観測・注意喚起すること。
 */
export function MigrationFlow({ steps, className }: Props) {
  if (steps.length === 0) return null;
  const normalized = steps.map(toStep);

  return (
    <section className={className}>
      <h2 className="mb-1 flex items-center gap-2 text-sm font-semibold tracking-tight">
        <Route className="h-4 w-4 text-[var(--ink-faint)]" aria-hidden />
        Migration Flow / 誘導経路
      </h2>
      <p className="mb-4 text-xs text-[var(--ink-faint)]">
        接触から搾取までの典型的な流れを、危険サインとして観測するための可視化です。
      </p>

      <ol className="relative flex flex-col">
        {/* タイムラインの縦罫線 */}
        <span
          className="absolute bottom-4 left-[0.6875rem] top-3 w-px bg-[var(--border)]"
          aria-hidden
        />
        {normalized.map((step, i) => {
          const isLast = i === normalized.length - 1;
          return (
            <li key={`${step.label}-${i}`} className="relative pb-5 pl-9 last:pb-0">
              <span
                className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper-raised)] text-xs font-semibold text-[var(--ink-muted)]"
                aria-hidden
              >
                {i + 1}
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-[var(--ink)]">
                  {step.label}
                </span>
                {isLast ? (
                  <span className="rounded-sm bg-[var(--risk-critical-bg)] px-2 py-0.5 text-[0.7rem] font-medium text-[var(--risk-critical)]">
                    最終地点
                  </span>
                ) : null}
              </div>

              {step.description ? (
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  {step.description}
                </p>
              ) : null}

              {step.riskPoint ? (
                <p className="mt-1.5 flex items-start gap-1.5 text-xs text-[var(--ink-muted)]">
                  <AlertTriangle
                    className="mt-0.5 h-3 w-3 shrink-0 text-[var(--accent-amber)]"
                    aria-hidden
                  />
                  <span>
                    <span className="annotation mr-1 text-[var(--ink-faint)]">
                      注意点
                    </span>
                    {step.riskPoint}
                  </span>
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
