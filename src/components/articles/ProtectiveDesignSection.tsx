import type { ProtectiveDesignItem } from "@/types/article";
import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";
import { ThesisQuote } from "@/components/articles/ThesisQuote";

export function ProtectiveDesignSection({
  items,
  emphasis,
}: {
  items: ProtectiveDesignItem[];
  emphasis: string[];
}) {
  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        Protective Design
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        詐欺防止のための設計原則。金融、医療、法律、高額契約に関する提案では、第三者確認が必要になり得る。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 50}>
            <Card className="h-full p-5">
              <div className="mb-2 flex items-center gap-2">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-[var(--ink-faint)]"
                  aria-hidden
                />
                <p className="annotation">{item.title}</p>
              </div>
              <h3 className="text-sm font-semibold">{item.titleJa}</h3>
              <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                {item.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
      <ThesisQuote lines={emphasis} label="Design Principle / 設計原則" />
    </section>
  );
}
