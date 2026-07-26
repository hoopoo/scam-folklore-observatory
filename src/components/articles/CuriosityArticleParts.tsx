import type {
  ChecklistCategory,
  FolklorePatternCard as FolklorePatternCardType,
} from "@/types/article";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function VerificationChecklist({
  categories,
}: {
  categories: ChecklistCategory[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {categories.map((cat, i) => (
        <FadeIn key={cat.id} delay={i * 50}>
          <Card className="h-full p-5">
            <p className="annotation mb-3">{cat.title}</p>
            <ul className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}

export function FolklorePatternCard({
  pattern,
}: {
  pattern: FolklorePatternCardType;
}) {
  return (
    <FadeIn>
      <Card className="border-[var(--accent-amber)]/25 bg-[var(--accent-soft)]/20 p-6 md:p-8">
        <p className="annotation mb-1">Folklore Pattern</p>
        <h3 className="text-lg font-semibold tracking-tight">
          {pattern.patternName}
          <span className="ml-2 text-sm font-normal text-[var(--ink-muted)]">
            — {pattern.japaneseName}
          </span>
        </h3>
        <p className="prose-ja mt-3 text-sm text-[var(--ink-muted)]">
          {pattern.description}
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <p className="annotation mb-2">Common Baits</p>
            <ul className="flex flex-wrap gap-1.5">
              {pattern.commonBaits.map((b) => (
                <li
                  key={b}
                  className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="annotation mb-2">Extracted Assets</p>
            <ul className="flex flex-wrap gap-1.5">
              {pattern.extractedAssets.map((a) => (
                <li
                  key={a}
                  className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 border-t border-[var(--border-subtle)] pt-4">
          <p className="annotation mb-1">Early Warning Signal</p>
          <p className="text-sm text-[var(--ink-muted)]">
            {pattern.earlyWarningSignal.en}
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--ink)]">
            {pattern.earlyWarningSignal.ja}
          </p>
        </div>
      </Card>
    </FadeIn>
  );
}

export function VerifyExitCta({
  title,
  body,
  buttons,
}: {
  title: string;
  body: string;
  buttons: { label: string; href: string }[];
}) {
  return (
    <FadeIn>
      <section className="mt-12 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <p className="prose-ja mt-3 text-sm text-[var(--ink-muted)]">{body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <a
              key={btn.href}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm border border-[var(--border)] bg-[var(--paper)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--ink-faint)]"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
