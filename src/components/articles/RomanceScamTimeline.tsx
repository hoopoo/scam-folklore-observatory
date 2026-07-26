import type { RomanceStage } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function RomanceScamTimeline({ stages }: { stages: RomanceStage[] }) {
  return (
    <ol className="relative flex flex-col gap-0 border-l border-[var(--border)] pl-6">
      {stages.map((stage, i) => (
        <FadeIn key={stage.id} delay={i * 70}>
          <li className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[1.625rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper-raised)] text-[10px] font-semibold text-[var(--accent-amber)]"
              aria-hidden
            >
              {stage.number}
            </span>
            <Card className="p-5">
              <p className="annotation mb-1">
                {stage.number} /{" "}
                {stage.id.charAt(0).toUpperCase() + stage.id.slice(1)}
              </p>
              <h3 className="text-sm font-semibold tracking-tight">
                {stage.title}
              </h3>
              <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                {stage.body}
              </p>
            </Card>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
