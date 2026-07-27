import type { RelationalLoopStage } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

const STAGE_ANGLES = [270, 321, 12, 63, 114, 165, 216];

function stagePosition(index: number, radius: number, cx: number, cy: number) {
  const angle = (STAGE_ANGLES[index] * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

export function RelationalScamLoop({
  centerLabel,
  stages,
  caption,
}: {
  centerLabel: string;
  stages: RelationalLoopStage[];
  caption: string;
}) {
  const cx = 180;
  const cy = 180;
  const radius = 118;

  return (
    <FadeIn>
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5 md:p-8">
        <p className="annotation mb-4">Relational Scam Loop</p>

        {/* Desktop: circular loop */}
        <div className="relative mx-auto hidden max-w-[360px] md:block">
          <svg
            viewBox="0 0 360 360"
            className="h-auto w-full"
            aria-hidden
          >
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            {stages.map((_, i) => {
              const from = stagePosition(i, radius, cx, cy);
              const to = stagePosition((i + 1) % stages.length, radius, cx, cy);
              return (
                <line
                  key={`arc-${i}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--border)"
                  strokeWidth="0.75"
                  opacity="0.5"
                />
              );
            })}
            <circle
              cx={cx}
              cy={cy}
              r="44"
              fill="var(--paper)"
              stroke="var(--accent-amber)"
              strokeWidth="1"
            />
            <text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              fill="var(--ink-muted)"
              fontSize="7.5"
              letterSpacing="0.06em"
            >
              <tspan x={cx} dy="0">
                Relational
              </tspan>
              <tspan x={cx} dy="10">
                Exploitation
              </tspan>
            </text>
          </svg>

          {stages.map((stage, i) => {
            const pos = stagePosition(i, radius + 36, cx, cy);
            return (
              <div
                key={stage.id}
                className="absolute w-[88px] -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${(pos.x / 360) * 100}%`, top: `${(pos.y / 360) * 100}%` }}
              >
                <p className="annotation text-[9px]">{stage.number}</p>
                <p className="text-[10px] font-semibold leading-tight">
                  {stage.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical steps */}
        <ol className="flex flex-col gap-3 md:hidden">
          {stages.map((stage, i) => (
            <li
              key={stage.id}
              className="animate-article-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <Card className="p-4">
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="annotation">{stage.number}</span>
                  <span className="text-sm font-semibold">{stage.title}</span>
                </div>
                <p className="text-sm text-[var(--ink-muted)]">
                  {stage.description}
                </p>
              </Card>
              {i < stages.length - 1 ? (
                <p
                  className="my-1 text-center text-[var(--ink-faint)] md:hidden"
                  aria-hidden
                >
                  ↓
                </p>
              ) : (
                <p
                  className="my-1 text-center text-xs text-[var(--accent-amber)] md:hidden"
                  aria-hidden
                >
                  ↻ {centerLabel}
                </p>
              )}
            </li>
          ))}
        </ol>

        {/* Desktop: stage descriptions */}
        <div className="mt-6 hidden gap-3 sm:grid-cols-2 md:grid">
          {stages.map((stage, i) => (
            <FadeIn key={`desc-${stage.id}`} delay={i * 40}>
              <Card className="p-4">
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="annotation">{stage.number}</span>
                  <span className="text-sm font-semibold">{stage.title}</span>
                </div>
                <p className="text-sm text-[var(--ink-muted)]">
                  {stage.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <p className="annotation mt-6 text-center text-[var(--ink-muted)]">
          {caption}
        </p>
      </div>
    </FadeIn>
  );
}

export function SafetyQuestionsCard({
  title,
  questions,
  disclaimer,
}: {
  title: string;
  questions: string[];
  disclaimer: string;
}) {
  return (
    <FadeIn>
      <Card className="border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
        <p className="annotation mb-1">Safety Questions</p>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
        <ul className="flex flex-col gap-3">
          {questions.map((q) => (
            <li
              key={q}
              className="flex items-start gap-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-4 py-3 text-sm text-[var(--ink-muted)]"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-amber)]"
                aria-hidden
              />
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-[var(--border-subtle)] pt-4 text-xs leading-relaxed text-[var(--ink-faint)]">
          {disclaimer}
        </p>
      </Card>
    </FadeIn>
  );
}

export function ObservationSummaryGrid({
  cards,
}: {
  cards: { id: string; title: string; body: string }[];
}) {
  return (
    <section className="mt-12" aria-labelledby="observation-summary">
      <h2
        id="observation-summary"
        className="mb-4 text-lg font-semibold tracking-tight"
      >
        Observation Summary
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <FadeIn key={card.id} delay={i * 50}>
            <Card className="h-full p-5">
              <p className="annotation mb-2 text-[var(--accent-amber)]">
                {card.title}
              </p>
              <p className="prose-ja text-sm text-[var(--ink-muted)]">
                {card.body}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
