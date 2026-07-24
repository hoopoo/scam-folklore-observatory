import Link from "next/link";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

type ObservatoryLink = {
  id: string;
  title: string;
  description: string;
  href?: string;
  status: "available" | "coming-soon";
};

const OBSERVATORY_LINKS: ObservatoryLink[] = [
  {
    id: "intimacy",
    title: "Intimacy",
    description:
      "人は実在する相手ではなく、応答してくれる人格と親密になる。",
    href: "/intimacy/ai-generated-intimacy",
    status: "coming-soon",
  },
  {
    id: "body-meaning",
    title: "Body Meaning",
    description:
      "身体は本人の存在証明ではなく、生成、交換、複製可能なインターフェースになる。",
    status: "coming-soon",
  },
  {
    id: "clean-society",
    title: "Clean Society",
    description:
      "清潔で安全に見えるSNSの内部で、欲望と孤独がアルゴリズムによって収益化される。",
    status: "coming-soon",
  },
  {
    id: "market-signals",
    title: "Market Signals",
    description:
      "AI人格の認証、返信主体の開示、類似性検知、感情課金監査、人格ライセンスなどの市場が生まれる。",
    status: "coming-soon",
  },
];

export function CrossObservatoryLinks() {
  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        Cross Observatory Links
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        他の Observatory への接続。未実装の Observatory は予告として表示する。
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {OBSERVATORY_LINKS.map((link) => {
          const isAvailable = link.status === "available" && link.href;

          if (isAvailable) {
            return (
              <Link key={link.id} href={link.href!} className="group">
                <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
                  <p className="annotation mb-1">{link.title}</p>
                  <p className="text-sm text-[var(--ink-muted)]">
                    {link.description}
                  </p>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-xs text-[var(--ink-faint)] group-hover:text-[var(--ink)]">
                    記事を読む
                    <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                </Card>
              </Link>
            );
          }

          return (
            <Card
              key={link.id}
              className="flex h-full flex-col border-dashed p-5 opacity-80"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <p className="annotation">{link.title}</p>
                <span className="annotation inline-flex items-center gap-1 text-[var(--ink-faint)]">
                  <Clock className="h-3 w-3" aria-hidden />
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-[var(--ink-muted)]">
                {link.description}
              </p>
              <Link
                href="/"
                className="mt-auto flex items-center gap-1 pt-4 text-xs text-[var(--ink-faint)] hover:text-[var(--ink)]"
              >
                Observatory トップへ
                <ExternalLink className="h-3 w-3" aria-hidden />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
