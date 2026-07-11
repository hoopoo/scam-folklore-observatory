import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import type { ScamPattern } from "@/types/scam";
import { patternCategoryLabel } from "@/lib/patterns";
import { RiskBadge } from "@/components/RiskBadge";
import { TagList } from "@/components/TagList";
import { Card } from "@/components/ui/card";

type Props = {
  pattern: ScamPattern;
  compact?: boolean;
};

function CategoryBadge({ pattern }: { pattern: ScamPattern }) {
  if (!pattern.category) return null;
  return (
    <span className="annotation rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-2 py-0.5 text-[var(--ink-muted)]">
      {patternCategoryLabel[pattern.category]}
    </span>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="annotation mb-0.5">{label}</dt>
      <dd className="text-sm text-[var(--ink)]">{value}</dd>
    </div>
  );
}

export function PatternCard({ pattern, compact = false }: Props) {
  if (compact) {
    return (
      <Link href={`/patterns/${pattern.id}`} className="group block">
        <Card className="flex h-full flex-col p-4 transition-colors hover:border-[var(--ink-faint)]">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold leading-snug tracking-tight">
              {pattern.name}
            </h3>
            <RiskBadge level={pattern.riskLevel} showEn={false} />
          </div>
          <p className="mt-1.5 text-xs text-[var(--ink-muted)]">
            {pattern.classicalOrigin}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <CategoryBadge pattern={pattern} />
            {pattern.source === "user" ? (
              <span className="annotation inline-flex items-center gap-1 text-[var(--accent-amber)]">
                <Eye className="h-3 w-3" aria-hidden />
                利用者観測
              </span>
            ) : null}
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Card className="group flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold leading-snug tracking-tight">
            {pattern.name}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <CategoryBadge pattern={pattern} />
            {pattern.source === "user" ? (
              <span className="annotation inline-flex items-center gap-1 text-[var(--accent-amber)]">
                <Eye className="h-3 w-3" aria-hidden />
                利用者観測
              </span>
            ) : null}
          </div>
        </div>
        <RiskBadge level={pattern.riskLevel} showEn={false} />
      </div>

      <dl className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-3">
        <Field label="古典的起源" value={pattern.classicalOrigin} />
        <Field label="AIアップデート" value={pattern.aiUpgrade} />
        {pattern.emotionalTrigger.length > 0 ? (
          <Field
            label="感情の引き金"
            value={pattern.emotionalTrigger.join(" / ")}
          />
        ) : null}
        {pattern.trustHook.length > 0 ? (
          <Field label="信頼のフック" value={pattern.trustHook.join(" / ")} />
        ) : null}
      </dl>

      <div className="mt-3">
        <TagList tags={pattern.tags} />
      </div>

      <div className="mt-auto pt-4">
        <Link
          href={`/patterns/${pattern.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
        >
          観測記録を見る
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </Card>
  );
}
