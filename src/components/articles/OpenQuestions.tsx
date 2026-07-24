import { HelpCircle } from "lucide-react";
import { ThesisQuote } from "@/components/articles/ThesisQuote";

export function OpenQuestions({
  questions,
  emphasized,
}: {
  questions: string[];
  emphasized: string;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-tight">
        <HelpCircle className="h-4 w-4 text-[var(--ink-faint)]" aria-hidden />
        Open Questions
      </h2>
      <ul className="flex flex-col gap-3">
        {questions.map((q, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4 text-sm text-[var(--ink-muted)]"
          >
            <span className="annotation shrink-0 text-[var(--ink-faint)]">
              Q{i + 1}
            </span>
            {q}
          </li>
        ))}
      </ul>
      <ThesisQuote
        lines={[emphasized]}
        label="Final Question / 最後の問い"
      />
    </section>
  );
}
