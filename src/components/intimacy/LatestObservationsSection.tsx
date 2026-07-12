import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestObservations } from "@/lib/observations";
import { ObservationListItem } from "@/components/intimacy/ObservationCard";

export function LatestObservationsSection() {
  const latest = getLatestObservations(6);

  return (
    <section
      id="latest-observations"
      className="border-b border-[var(--border)]"
      aria-labelledby="latest-observations-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="annotation mb-1">Latest Observations</p>
            <h2
              id="latest-observations-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              最新の観測
            </h2>
          </div>
          <Link
            href="/observations"
            className="hidden shrink-0 items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] sm:inline-flex"
          >
            すべて見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
        <div>
          {latest.map((o) => (
            <ObservationListItem key={o.id} observation={o} />
          ))}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/observations"
            className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)]"
          >
            すべての観測を見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
