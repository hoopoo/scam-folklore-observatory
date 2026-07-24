import type { ScamStackLayer } from "@/types/article";
import { Card } from "@/components/ui/card";

export function RelationshipScamStack({ layers }: { layers: ScamStackLayer[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        The Relationship Scam Stack
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        関係型詐欺がどのようなレイヤーで成立するか。詐欺は一度きりの騙し取りではなく、継続的な関係運用になる。
      </p>

      <div className="flex flex-col gap-3">
        {layers.map((layer) => (
          <Card
            key={layer.layer}
            className="relative overflow-hidden p-5 pl-14"
          >
            <span
              className="absolute left-0 top-0 flex h-full w-10 items-center justify-center border-r border-[var(--border)] bg-[var(--accent-soft)] text-xs font-semibold text-[var(--accent-amber)]"
              aria-hidden
            >
              L{layer.layer}
            </span>
            <div>
              <p className="annotation mb-0.5">Layer {layer.layer}</p>
              <h3 className="text-base font-semibold tracking-tight">
                {layer.title}
                <span className="ml-2 text-sm font-normal text-[var(--ink-muted)]">
                  — {layer.titleJa}
                </span>
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {layer.items.map((item, i) => (
                  <li
                    key={`${item}-${i}`}
                    className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
