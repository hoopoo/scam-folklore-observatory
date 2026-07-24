import type { WarningSignCategory } from "@/types/article";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WarningSigns({
  categories,
  disclaimer,
}: {
  categories: WarningSignCategory[];
  disclaimer: string;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        New Warning Signs
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        従来の「不審なURL」「日本語がおかしい」「知らない送金先」とは異なる、新しい警戒サイン。
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <Card key={cat.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <AlertTriangle
                  className="h-3.5 w-3.5 text-[var(--accent-amber)]"
                  aria-hidden
                />
                {cat.titleJa}
              </CardTitle>
              <p className="annotation">{cat.title}</p>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-1.5">
                {cat.signs.map((sign, i) => (
                  <li
                    key={`${sign}-${i}`}
                    className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]"
                      aria-hidden
                    />
                    {sign}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4 text-sm text-[var(--ink-muted)]">
        {disclaimer}
      </p>
    </section>
  );
}
