import type { TaxonomyAxis } from "@/lib/taxonomy";
import { Card } from "@/components/ui/card";

type Props = {
  axis: TaxonomyAxis;
  index: number;
};

export function TaxonomySection({ axis, index }: Props) {
  return (
    <Card className="p-6">
      <div className="mb-3 flex items-baseline gap-3">
        <span className="annotation text-[var(--ink-faint)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="text-lg font-semibold tracking-tight">{axis.title}</h2>
      </div>
      <p className="mb-4 text-sm text-[var(--ink-muted)]">{axis.description}</p>
      <ul className="flex flex-wrap gap-2">
        {axis.items.map((item) => (
          <li
            key={item}
            className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-2.5 py-1 text-sm text-[var(--ink-muted)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
