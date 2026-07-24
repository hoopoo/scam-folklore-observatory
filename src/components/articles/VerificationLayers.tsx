import type { VerificationItem } from "@/types/article";
import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export function VerificationLayers({ items }: { items: VerificationItem[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        What Must Be Verified
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        「本人確認」だけでは足りない。将来の認証制度やプラットフォームルールへ接続できる確認対象。
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="p-5">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck
                className="h-3.5 w-3.5 text-[var(--ink-faint)]"
                aria-hidden
              />
              <p className="annotation">{item.title}</p>
            </div>
            <h3 className="text-sm font-semibold">{item.titleJa}</h3>
            <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
              {item.question}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
