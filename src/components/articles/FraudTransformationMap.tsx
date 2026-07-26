import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/articles/FadeIn";
import { ThesisQuote } from "@/components/articles/ThesisQuote";

export function FraudTransformationMap({
  oldScam,
  emergingScam,
  emphasis,
  emphasisJa,
}: {
  oldScam: { label: string; steps: string[] };
  emergingScam: { label: string; steps: string[] };
  emphasis: string[];
  emphasisJa: string[];
}) {
  return (
    <FadeIn>
      <section className="my-10 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5 md:p-8">
        <h2 className="mb-6 text-lg font-semibold tracking-tight">
          Fraud Transformation Map
        </h2>
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="annotation mb-3">{oldScam.label}</p>
            <ol className="flex flex-col gap-1">
              {oldScam.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2 text-sm text-[var(--ink-muted)]">
                  <span className="text-[var(--ink-faint)]">{step}</span>
                  {i < oldScam.steps.length - 1 ? (
                    <span aria-hidden>→</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="h-5 w-5 text-[var(--accent-amber)]" aria-hidden />
          </div>
          <div>
            <p className="annotation mb-3 text-[var(--accent-amber)]">
              {emergingScam.label}
            </p>
            <ol className="flex flex-col gap-1">
              {emergingScam.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2 text-sm text-[var(--ink-muted)]">
                  <span>{step}</span>
                  {i < emergingScam.steps.length - 1 ? (
                    <span className="text-[var(--accent-amber)]" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <ThesisQuote
          lines={[...emphasis, ...emphasisJa]}
          label="Transformation / 変化"
        />
      </section>
    </FadeIn>
  );
}
