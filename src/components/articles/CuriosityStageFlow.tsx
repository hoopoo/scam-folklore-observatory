import type { CuriosityStage, ServiceComparisonRow } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function CuriosityStageFlow({
  stages,
  flowLabel,
}: {
  stages: CuriosityStage[];
  flowLabel: string;
}) {
  return (
    <FadeIn>
      <ol className="flex flex-col gap-3">
        {stages.map((stage, i) => (
          <li
            key={stage.id}
            className="animate-article-in"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <Card className="p-5">
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="annotation">Stage {stage.stage}</span>
                <span className="text-sm font-semibold">{stage.title}</span>
                <span className="text-xs text-[var(--ink-faint)]">
                  — {stage.titleJa}
                </span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>
      <p className="annotation mt-6 text-center text-[var(--accent-amber)]">
        {flowLabel}
      </p>
    </FadeIn>
  );
}

export function ServiceComparisonTable({
  title,
  rows,
}: {
  title: string;
  rows: ServiceComparisonRow[];
}) {
  return (
    <FadeIn>
      <h3 className="mb-4 text-base font-semibold tracking-tight">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="annotation py-2 pr-4 text-left">観点</th>
              <th className="annotation py-2 px-3 text-left">正常なサービス</th>
              <th className="annotation py-2 pl-3 text-left text-[var(--accent-amber)]">
                詐欺的なサービス
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.aspect}
                className="border-b border-[var(--border-subtle)]"
              >
                <td className="py-3 pr-4 align-top">
                  <span className="annotation block">{row.aspect}</span>
                  <span className="text-[var(--ink-muted)]">{row.aspectJa}</span>
                </td>
                <td className="py-3 px-3 align-top text-[var(--ink-muted)]">
                  {row.legitimate}
                </td>
                <td className="py-3 pl-3 align-top text-[var(--ink-muted)]">
                  {row.fraudulent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
