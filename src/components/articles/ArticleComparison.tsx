import { ArrowRight } from "lucide-react";
import type { ComparisonColumn } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function ArticleComparison({
  left,
  center,
  right,
  variant = "default",
}: {
  left: ComparisonColumn;
  center: string;
  right: ComparisonColumn;
  variant?: "default" | "highlight-right";
}) {
  return (
    <FadeIn>
      <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]">
        <Card className="p-5">
          <p className="annotation mb-3">{left.title}</p>
          <ul className="flex flex-col gap-1.5">
            {left.items.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <div className="flex flex-col items-center justify-center gap-2 px-2 py-3 text-center">
          <ArrowRight
            className="hidden h-4 w-4 text-[var(--ink-faint)] md:block"
            aria-hidden
          />
          <p className="max-w-[10rem] text-xs font-medium leading-relaxed text-[var(--accent-amber)]">
            {center}
          </p>
          <ArrowRight
            className="h-4 w-4 rotate-90 text-[var(--ink-faint)] md:hidden"
            aria-hidden
          />
        </div>

        <Card
          className={
            variant === "highlight-right"
              ? "border-[var(--accent-amber)]/30 bg-[var(--accent-soft)]/40 p-5"
              : "p-5"
          }
        >
          <p className="annotation mb-3 text-[var(--accent-amber)]">
            {right.title}
          </p>
          <ul className="flex flex-col gap-1.5">
            {right.items.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </FadeIn>
  );
}
