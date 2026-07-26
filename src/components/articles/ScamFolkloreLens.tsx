import type { ScamFolkloreLensItem } from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function ScamFolkloreLens({
  items,
  title = "Scam Folklore Lens",
  description = "詐欺民俗観測所独自の分析視点。",
  bare = false,
}: {
  items: ScamFolkloreLensItem[];
  title?: string;
  description?: string;
  /** 外側で見出しを出す場合にカード群のみ描画 */
  bare?: boolean;
}) {
  const cards = (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <FadeIn key={item.id} delay={i * 60}>
          <Card className="h-full p-5">
            <p className="annotation mb-0.5">{item.title}</p>
            <h3 className="text-sm font-semibold">{item.titleJa}</h3>
            <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
              {item.description}
            </p>
          </Card>
        </FadeIn>
      ))}
    </div>
  );

  if (bare) return cards;

  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">{description}</p>
      {cards}
    </section>
  );
}
