import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { RelatedFolkloreLink } from "@/types/article";
import { getArticleBySlug } from "@/lib/articles";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function RelatedFolkloreSection({
  links,
  relatedArticleSlugs,
}: {
  links: RelatedFolkloreLink[];
  relatedArticleSlugs: string[];
}) {
  const internalArticles = relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);

  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">
        Related folklore
      </h2>

      {internalArticles.length > 0 ? (
        <div className="mb-8">
          <p className="annotation mb-3">Scam Folklore / 観測記事</p>
          <ul className="flex flex-col gap-2">
            {internalArticles.map((a) =>
              a ? (
                <li key={a.slug}>
                  <Link
                    href={`/scam-folklore/${a.slug}`}
                    className="group flex items-center justify-between rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3 text-sm transition-colors hover:border-[var(--ink-faint)]"
                  >
                    <div>
                      <span className="font-medium">{a.title}</span>
                      <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
                        {a.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link, i) => (
          <FadeIn key={link.href} delay={i * 50}>
            {link.type === "external" ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="annotation">External</p>
                    <ExternalLink
                      className="h-3.5 w-3.5 text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-sm font-semibold">{link.title}</h3>
                  {link.description ? (
                    <p className="prose-ja mt-2 flex-1 text-sm text-[var(--ink-muted)]">
                      {link.description}
                    </p>
                  ) : null}
                </Card>
              </a>
            ) : (
              <Link href={link.href} className="group block h-full">
                <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
                  <h3 className="text-sm font-semibold">{link.title}</h3>
                  {link.description ? (
                    <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
                      {link.description}
                    </p>
                  ) : null}
                </Card>
              </Link>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
