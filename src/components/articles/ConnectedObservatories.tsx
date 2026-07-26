import type { ConnectedObservatory } from "@/types/article";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function ConnectedObservatories({
  observatories,
}: {
  observatories: ConnectedObservatory[];
}) {
  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        Connected Observatories
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        他の SHIRO &amp; Co. 観測サイトへの接続。
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {observatories.map((obs, i) => (
          <FadeIn key={obs.id} delay={i * 60}>
            <a
              href={obs.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p className="annotation">{obs.title}</p>
                  <ExternalLink
                    className="h-3.5 w-3.5 text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
                    aria-hidden
                  />
                </div>
                <p className="text-xs italic text-[var(--ink-faint)]">
                  {obs.tagline}
                </p>
                <p className="prose-ja mt-2 flex-1 text-sm text-[var(--ink-muted)]">
                  {obs.description}
                </p>
              </Card>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
