import { ArrowRight } from "lucide-react";
import type { ObservationArticle } from "@/types/article";
import { Card } from "@/components/ui/card";
import { ThesisQuote } from "@/components/articles/ThesisQuote";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item, i) => (
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

export function FraudEvolution({
  data,
}: {
  data: ObservationArticle["fraudEvolution"];
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        From Fake Information to Fake Relationship
      </h2>
      <p className="prose-ja text-[var(--ink-muted)]">{data.intro}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <p className="annotation mb-3">{data.traditional.title}</p>
          <BulletList items={data.traditional.items} />
        </Card>
        <Card className="border-[var(--accent-amber)]/30 p-5">
          <p className="annotation mb-3 text-[var(--accent-amber)]">
            {data.emerging.title}
          </p>
          <BulletList items={data.emerging.items} />
        </Card>
      </div>

      <p className="prose-ja mt-6 text-[var(--ink-muted)]">{data.bridge}</p>

      <div className="my-6 flex items-center justify-center text-[var(--ink-faint)]">
        <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" aria-hidden />
      </div>

      <ThesisQuote lines={data.emphasis} />
    </section>
  );
}
