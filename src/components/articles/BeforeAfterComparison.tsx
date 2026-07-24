import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

function Column({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "before" | "after";
}) {
  return (
    <Card
      className={
        variant === "after"
          ? "border-[var(--accent-amber)]/30 bg-[var(--accent-soft)]/50 p-5"
          : "p-5"
      }
    >
      <p className="annotation mb-3">{title}</p>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
          >
            <span
              className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                variant === "after"
                  ? "bg-[var(--accent-amber)]"
                  : "bg-[var(--ink-faint)]"
              }`}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function BeforeAfterComparison({
  before,
  after,
}: {
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">
        Before / After
      </h2>
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <Column title={before.title} items={before.items} variant="before" />
        <div className="flex items-center justify-center text-[var(--ink-faint)]">
          <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" aria-hidden />
        </div>
        <Column title={after.title} items={after.items} variant="after" />
      </div>
    </section>
  );
}
