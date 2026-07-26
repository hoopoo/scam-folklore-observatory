import type { PersonaLayer } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function PersonaLayerStack({ layers }: { layers: PersonaLayer[] }) {
  return (
    <div className="flex flex-col gap-3">
      {layers.map((layer, i) => (
        <FadeIn key={layer.id} delay={i * 60}>
          <Card className="p-5">
            <p className="annotation mb-2">{layer.title}</p>
            <ul className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
