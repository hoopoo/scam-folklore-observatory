import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  buildThemeFilterHref,
  countObservationsForTheme,
  OBSERVATION_THEMES,
} from "@/lib/observations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CurrentObservationSection() {
  return (
    <section
      id="current-observation"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="current-observation-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Current Observation</p>
        <h2
          id="current-observation-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          現在の観測テーマ
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OBSERVATION_THEMES.map((theme) => {
            const count = countObservationsForTheme(theme);
            return (
              <Link
                key={theme.id}
                href={buildThemeFilterHref(theme)}
                className="group"
              >
                <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
                  <p className="annotation mb-1">{theme.title}</p>
                  <h3 className="text-base font-semibold leading-snug">
                    {theme.titleJa}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--ink-muted)]">
                    {theme.descriptionJa}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1">
                    {theme.tags.slice(0, 3).map((tag) => (
                      <li key={tag}>
                        <Badge variant="outline" className="text-[0.6rem]">
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs text-[var(--ink-faint)]">
                    <span>観測 {count} 件</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
