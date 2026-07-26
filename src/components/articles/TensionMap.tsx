import type { ComparisonColumn } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

function ColumnList({ column }: { column: ComparisonColumn }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {column.items.map((item, i) => (
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
  );
}

export function TensionMap({
  helpful,
  exploitable,
  conclusion,
}: {
  helpful: ComparisonColumn;
  exploitable: ComparisonColumn;
  conclusion: string;
}) {
  return (
    <FadeIn>
      <section className="mt-12">
        <h2 className="mb-6 text-lg font-semibold tracking-tight">
          Tension Map
        </h2>
        <div className="relative grid gap-4 md:grid-cols-2">
          <div
            className="animate-boundary-shift pointer-events-none absolute inset-y-4 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--accent-amber)]/40 to-transparent md:block"
            aria-hidden
          />
          <Card className="p-5">
            <p className="annotation mb-3">{helpful.title}</p>
            <ColumnList column={helpful} />
          </Card>
          <Card className="border-[var(--accent-amber)]/25 bg-[var(--accent-soft)]/30 p-5">
            <p className="annotation mb-3 text-[var(--accent-amber)]">
              {exploitable.title}
            </p>
            <ColumnList column={exploitable} />
          </Card>
        </div>
        <p className="prose-ja mt-6 text-center text-sm font-medium text-[var(--ink-muted)]">
          {conclusion}
        </p>
      </section>
    </FadeIn>
  );
}

export function CareControlMap({
  care,
  control,
}: {
  care: ComparisonColumn;
  control: ComparisonColumn;
}) {
  return (
    <FadeIn>
      <div className="relative mt-6 grid gap-4 md:grid-cols-2">
        <div
          className="animate-boundary-shift pointer-events-none absolute inset-0 rounded-sm bg-gradient-to-r from-[var(--paper-raised)] via-[var(--accent-soft)]/60 to-[var(--paper-raised)] opacity-60"
          aria-hidden
        />
        <Card className="relative p-5">
          <p className="annotation mb-3">{care.title}</p>
          <ColumnList column={care} />
        </Card>
        <Card className="relative border-[var(--accent-amber)]/20 p-5">
          <p className="annotation mb-3 text-[var(--accent-amber)]">
            {control.title}
          </p>
          <ColumnList column={control} />
        </Card>
      </div>
    </FadeIn>
  );
}
