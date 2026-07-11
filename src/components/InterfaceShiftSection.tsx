import { ArrowRight } from "lucide-react";
import { INTERFACE_SHIFT_STEPS } from "@/lib/forecasts";

export function InterfaceShiftSection() {
  return (
    <section className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5 md:p-6">
      <h2 className="text-base font-semibold tracking-tight md:text-lg">
        詐欺の入口は、画面から環境へ移る。
      </h2>
      <p className="annotation mt-1">Interface Shift / 入口の変化</p>

      <ol className="mt-5 flex flex-col gap-0">
        {INTERFACE_SHIFT_STEPS.map((step, i) => (
          <li key={step.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--paper)] text-xs font-semibold tabular-nums text-[var(--ink-muted)]">
                {i + 1}
              </span>
              {i < INTERFACE_SHIFT_STEPS.length - 1 ? (
                <span
                  className="my-1 w-px flex-1 bg-[var(--border-subtle)]"
                  aria-hidden
                />
              ) : null}
            </div>
            <div className="min-w-0 flex-1 pb-5 last:pb-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-sm font-semibold tracking-tight">
                  {step.label}
                </span>
                {i < INTERFACE_SHIFT_STEPS.length - 1 ? (
                  <ArrowRight
                    className="hidden h-3 w-3 text-[var(--ink-faint)] sm:inline"
                    aria-hidden
                  />
                ) : null}
              </div>
              <p className="mt-0.5 text-sm text-[var(--ink-muted)]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
