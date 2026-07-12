import Link from "next/link";
import { buildQuestionFilterHref, CORE_QUESTIONS } from "@/lib/observations";

export function CoreQuestionsSection() {
  return (
    <section
      id="core-questions"
      className="border-b border-[var(--border)]"
      aria-labelledby="core-questions-heading"
    >
      <div className="mx-auto max-w-3xl px-5 py-24 md:py-32">
        <p className="annotation mb-4 text-center">Core Questions</p>
        <h2
          id="core-questions-heading"
          className="sr-only"
        >
          中心の問い
        </h2>
        <ul className="flex flex-col gap-12 md:gap-16">
          {CORE_QUESTIONS.map((q) => (
            <li key={q.id}>
              <Link
                href={buildQuestionFilterHref(q.filterParams)}
                className="group block text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20"
              >
                <p className="prose-ja text-lg font-medium leading-relaxed text-[var(--ink)] transition-colors group-hover:text-[var(--accent-violet)] md:text-xl">
                  {q.textJa}
                </p>
                <span className="mt-3 inline-block text-xs text-[var(--ink-faint)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  関連する観測を見る →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
