import { FadeIn } from "@/components/articles/FadeIn";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import type { ExitBranch } from "@/types/article";
import { Card } from "@/components/ui/card";

export function CuriosityExitBranch({ branch }: { branch: ExitBranch }) {
  return (
    <FadeIn>
      <div className="my-10 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5 md:p-8">
        <div className="mb-6 text-center">
          <p className="annotation mb-1">{branch.center}</p>
          <p className="text-lg font-semibold">{branch.centerJa}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <Card className="p-5">
            <p className="annotation mb-3">{branch.genuine.title}</p>
            <ul className="flex flex-col gap-2">
              {branch.genuine.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--ink-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <div
            className="flex items-center justify-center py-1 text-[var(--ink-faint)] md:py-0"
            aria-hidden
          >
            <span className="md:hidden">↓</span>
            <span className="hidden md:inline">↔</span>
          </div>

          <Card className="border-[var(--accent-amber)]/30 bg-[var(--accent-soft)]/30 p-5">
            <p className="annotation mb-3 text-[var(--accent-amber)]">
              {branch.counterfeit.title}
            </p>
            <ul className="flex flex-col gap-2">
              {branch.counterfeit.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--ink-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <ThesisQuote
          lines={[...branch.emphasis, ...branch.emphasisJa]}
          label="Branch / 分岐"
        />
      </div>
    </FadeIn>
  );
}
