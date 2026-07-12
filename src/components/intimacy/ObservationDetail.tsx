import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Observation } from "@/types/intimacy";
import {
  getRelatedObservations,
  labelForDimension,
  labelForGenderDesign,
  labelForInstitutionalGap,
  labelForLifeStage,
  labelForRelationship,
  labelForRisk,
  labelForValue,
  labelForValueConflict,
} from "@/lib/observations";
import { RELATED_PROJECTS } from "@/config/projects";
import { formatDate } from "@/lib/intimacy-display";
import { StatusBadge } from "@/components/intimacy/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--border-subtle)] pt-8">
      <h2 className="annotation mb-4">{title}</h2>
      {children}
    </section>
  );
}

function ChipList({ items, labelFn }: { items: string[]; labelFn: (id: string) => string }) {
  if (items.length === 0) {
    return <p className="text-sm text-[var(--ink-faint)]">未記録</p>;
  }
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Badge variant="outline">{labelFn(item)}</Badge>
        </li>
      ))}
    </ul>
  );
}

export function ObservationDetail({ observation }: { observation: Observation }) {
  const related = getRelatedObservations(observation);

  return (
    <article className="flex flex-col gap-8">
      <header>
        <p className="annotation mb-2 text-[var(--accent-violet)]">
          Observation / 観測記録
        </p>
        <p className="text-sm text-[var(--ink-faint)]">{observation.title}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">
          {observation.titleJa}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <StatusBadge status={observation.status} />
          <time className="text-sm text-[var(--ink-muted)]" dateTime={observation.date}>
            {formatDate(observation.date)}
          </time>
          {observation.country ? (
            <span className="text-sm text-[var(--ink-muted)]">
              {observation.country}
              {observation.region ? ` · ${observation.region}` : ""}
            </span>
          ) : null}
        </div>
      </header>

      <div className="prose-ja max-w-2xl text-[var(--ink-muted)]">
        <p>{observation.summaryJa}</p>
      </div>

      <Section title="What Happened / 何が起きているか">
        <p className="prose-ja text-sm text-[var(--ink-muted)]">
          {observation.whatHappenedJa}
        </p>
      </Section>

      <Section title="Why It Matters / なぜ重要か">
        <p className="prose-ja text-sm text-[var(--ink-muted)]">
          {observation.whyItMattersJa}
        </p>
      </Section>

      {observation.relationshipStructureJa ? (
        <Section title="Relationship Structure / 関係構造">
          <p className="prose-ja text-sm text-[var(--ink-muted)]">
            {observation.relationshipStructureJa}
          </p>
        </Section>
      ) : null}

      <Section title="Intimacy Dimensions / 親密性の要素">
        <ChipList
          items={observation.intimacyDimensions}
          labelFn={labelForDimension}
        />
      </Section>

      <Section title="Values / 親密性の価値">
        <ChipList items={observation.values} labelFn={labelForValue} />
      </Section>

      <Section title="Value Conflicts / 価値の衝突">
        <ChipList
          items={observation.valueConflicts}
          labelFn={labelForValueConflict}
        />
      </Section>

      <Section title="Institutional Gaps / 制度のズレ">
        <ChipList
          items={observation.institutionalGaps}
          labelFn={labelForInstitutionalGap}
        />
      </Section>

      <Section title="Gender Design Issues / ジェンダー設計の問題">
        <ChipList
          items={observation.genderDesignIssues}
          labelFn={labelForGenderDesign}
        />
      </Section>

      <Section title="Risks / リスク">
        <ChipList items={observation.risks} labelFn={labelForRisk} />
      </Section>

      <Section title="Open Questions / 開かれた問い">
        <ChipList
          items={observation.questions}
          labelFn={(id) => id}
        />
      </Section>

      <Section title="Source / 出典">
        {observation.sourceUrl ? (
          <a
            href={observation.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[var(--ink)] underline-offset-4 hover:underline"
          >
            {observation.sourceName ?? observation.sourceUrl}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : (
          <p className="text-sm text-[var(--ink-faint)]">
            {observation.sourceName ?? "出典未確認 — フィールド観測"}
          </p>
        )}
      </Section>

      {related.length > 0 ? (
        <Section title="Related Observations / 関連観測">
          <ul className="flex flex-col gap-3">
            {related.map((o) => (
              <li key={o.id}>
                <Link
                  href={`/observations/${o.slug}`}
                  className="group flex items-center justify-between rounded-sm border border-[var(--border)] p-4 hover:border-[var(--ink-faint)]"
                >
                  <span className="text-sm font-medium">{o.titleJa}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {observation.relatedProjects && observation.relatedProjects.length > 0 ? (
        <Section title="Related Projects / 関連プロジェクト">
          <ul className="flex flex-col gap-2">
            {observation.relatedProjects.map((id) => {
              const project = RELATED_PROJECTS.find((p) => p.id === id);
              if (!project) return null;
              return (
                <li key={id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
                  >
                    {project.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}

      <Card className="p-5 text-xs text-[var(--ink-faint)]">
        <p className="annotation mb-2">Metadata</p>
        <dl className="grid gap-1 sm:grid-cols-2">
          <div>
            <dt>Relationship</dt>
            <dd>
              {observation.relationshipTypes
                .map((r) => labelForRelationship(r))
                .join(" · ")}
            </dd>
          </div>
          <div>
            <dt>Life Stage</dt>
            <dd>
              {observation.lifeStages
                .map((s) => labelForLifeStage(s))
                .join(" · ")}
            </dd>
          </div>
        </dl>
      </Card>
    </article>
  );
}
