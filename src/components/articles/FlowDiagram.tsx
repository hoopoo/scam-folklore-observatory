import type { FlowStep } from "@/types/article";
import { FadeIn } from "@/components/articles/FadeIn";

export function FlowDiagram({
  title,
  titleJa,
  steps,
  actions,
}: {
  title?: string;
  titleJa?: string;
  steps: FlowStep[];
  actions?: string[];
}) {
  return (
    <FadeIn>
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5 md:p-6">
        {title ? (
          <div className="mb-4 border-b border-[var(--border-subtle)] pb-3">
            <p className="annotation">{title}</p>
            {titleJa ? (
              <p className="text-sm font-medium text-[var(--ink-muted)]">
                {titleJa}
              </p>
            ) : null}
          </div>
        ) : null}

        <ol className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <li
              key={`${step.label}-${i}`}
              className="animate-article-in flex flex-col items-center"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-4 py-2.5 text-center text-sm font-medium text-[var(--ink-muted)]">
                {step.label}
                {step.sublabel ? (
                  <span className="mt-0.5 block text-xs font-normal text-[var(--ink-faint)]">
                    {step.sublabel}
                  </span>
                ) : null}
              </div>
              {i < steps.length - 1 ? (
                <span
                  className="my-1 text-[var(--ink-faint)]"
                  aria-hidden
                >
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        {actions && actions.length > 0 ? (
          <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
            <p className="annotation mb-2">Action</p>
            <div className="flex flex-wrap gap-1.5">
              {actions.map((action) => (
                <span
                  key={action}
                  className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </FadeIn>
  );
}
