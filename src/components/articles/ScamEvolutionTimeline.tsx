import type { EvolutionPhase } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function ScamEvolutionTimeline({
  title,
  titleJa,
  phases,
}: {
  title: string;
  titleJa: string;
  phases: EvolutionPhase[];
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-1 text-lg font-semibold tracking-tight">{title}</h2>
      <p className="annotation mb-6">{titleJa}</p>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {phases.map((phase, i) => (
          <li key={phase.phase} className="flex flex-col">
            <FadeIn delay={i * 50} className="h-full">
              <Card className="flex h-full flex-col p-4">
                <p className="annotation mb-1">{phase.phase}</p>
                <h3 className="text-sm font-semibold tracking-tight">
                  {phase.titleJa}
                </h3>
                <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
                  {phase.title}
                </p>
                <ul className="mt-3 flex flex-col gap-1">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-[var(--ink-muted)]"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
}
