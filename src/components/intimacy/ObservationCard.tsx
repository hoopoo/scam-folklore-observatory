import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Observation } from "@/types/intimacy";
import {
  labelForDimension,
  labelForLifeStage,
  labelForRelationship,
} from "@/lib/observations";
import { formatDate } from "@/lib/intimacy-display";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ObservationCard({
  observation,
  compact = false,
}: {
  observation: Observation;
  compact?: boolean;
}) {
  return (
    <Link href={`/observations/${observation.slug}`} className="group">
      <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div>
            <p className="annotation mb-1">{observation.title}</p>
            <h3 className="text-base font-semibold leading-snug tracking-tight">
              {observation.titleJa}
            </h3>
          </div>
          <StatusBadge status={observation.status} />
        </div>

        <p
          className={`text-sm text-[var(--ink-muted)] ${compact ? "line-clamp-2" : "line-clamp-3"}`}
        >
          {observation.summaryJa}
        </p>

        <dl className="mt-3 flex flex-col gap-1 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--ink-faint)]">
          <div className="flex justify-between gap-2">
            <dt>観測日</dt>
            <dd>{formatDate(observation.date)}</dd>
          </div>
          {observation.country ? (
            <div className="flex justify-between gap-2">
              <dt>地域</dt>
              <dd>
                {observation.country}
                {observation.region ? ` · ${observation.region}` : ""}
              </dd>
            </div>
          ) : null}
        </dl>

        {!compact ? (
          <ul className="mt-3 flex flex-wrap gap-1">
            {observation.relationshipTypes.slice(0, 2).map((r) => (
              <li key={r}>
                <Badge variant="outline" className="text-[0.65rem]">
                  {labelForRelationship(r).split(" / ")[1] ?? r}
                </Badge>
              </li>
            ))}
            {observation.lifeStages.slice(0, 1).map((s) => (
              <li key={s}>
                <Badge variant="outline" className="text-[0.65rem]">
                  {labelForLifeStage(s).split(" / ")[1] ?? s}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex items-center justify-end pt-4">
          <ArrowRight
            className="h-4 w-4 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
      </Card>
    </Link>
  );
}

export function ObservationListItem({
  observation,
}: {
  observation: Observation;
}) {
  return (
    <article className="border-b border-[var(--border-subtle)] py-6 last:border-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="annotation mb-1">{observation.title}</p>
          <h3 className="text-lg font-semibold tracking-tight">
            <Link
              href={`/observations/${observation.slug}`}
              className="hover:underline underline-offset-4"
            >
              {observation.titleJa}
            </Link>
          </h3>
        </div>
        <StatusBadge status={observation.status} />
      </div>
      <p className="prose-ja mt-3 max-w-2xl text-sm text-[var(--ink-muted)]">
        {observation.summaryJa}
      </p>
      <dl className="mt-4 grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="annotation mb-0.5">Date</dt>
          <dd>{formatDate(observation.date)}</dd>
        </div>
        <div>
          <dt className="annotation mb-0.5">Region</dt>
          <dd>{observation.country ?? "—"}</dd>
        </div>
        <div>
          <dt className="annotation mb-0.5">Life Stage</dt>
          <dd>
            {observation.lifeStages
              .map((s) => labelForLifeStage(s).split(" / ")[1])
              .join("、") || "—"}
          </dd>
        </div>
        <div>
          <dt className="annotation mb-0.5">Dimension</dt>
          <dd>
            {observation.intimacyDimensions
              .slice(0, 2)
              .map((d) => labelForDimension(d).split(" / ")[1])
              .join("、") || "—"}
          </dd>
        </div>
      </dl>
    </article>
  );
}
