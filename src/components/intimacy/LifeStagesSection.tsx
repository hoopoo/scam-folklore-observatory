import { LIFE_STAGES } from "@/data/intimacy-meta";

export function LifeStagesSection() {
  return (
    <section
      id="life-stages"
      className="border-b border-[var(--border)]"
      aria-labelledby="life-stages-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Life Stages</p>
        <h2
          id="life-stages-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          人生の段階と親密性
        </h2>
        <ul className="mt-10 flex flex-col gap-8">
          {LIFE_STAGES.map((stage) => (
            <li
              key={stage.id}
              className="grid gap-4 border-t border-[var(--border-subtle)] pt-6 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="annotation">{stage.label}</p>
                <h3 className="mt-1 font-semibold">{stage.labelJa}</h3>
              </div>
              <div>
                <p className="text-sm text-[var(--ink-muted)]">
                  {stage.descriptionJa}
                </p>
                {stage.topics.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {stage.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-faint)]"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
