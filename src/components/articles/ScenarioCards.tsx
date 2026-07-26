import type { ScenarioItem } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";
import { ThesisQuote } from "@/components/articles/ThesisQuote";

export function ScenarioCards({ scenarios }: { scenarios: ScenarioItem[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">Scenarios</h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        近未来の観測仮説。特定の事案の報告ではなく、構造の可能性を示す。
      </p>
      <div className="grid gap-4">
        {scenarios.map((s, i) => (
          <FadeIn key={s.id} delay={i * 80}>
            <Card className="p-5 md:p-6">
              <p className="annotation mb-1">Scenario {s.number}</p>
              <h3 className="text-base font-semibold tracking-tight">
                {s.title}
                <span className="ml-2 text-sm font-normal text-[var(--ink-muted)]">
                  — {s.titleJa}
                </span>
              </h3>
              <div className="prose-ja mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
                {s.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <ThesisQuote lines={[s.question]} label="Question / 問い" />
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
