import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  buildQuestionFilterHref,
  getAllQuestions,
} from "@/lib/observations";
import { QUESTION_CATEGORIES } from "@/data/intimacy-meta";

export const metadata: Metadata = {
  title: "Questions / 問い",
  description:
    "親密性、AI、制度、ペット、老い、詐欺についての問い。回答ではなく、観測の入口として掲げています。",
};

export default function QuestionsPage() {
  const allQuestions = getAllQuestions();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-12">
        <p className="annotation mb-2">Questions</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          問い
        </h1>
        <p className="prose-ja mt-4 text-[var(--ink-muted)]">
          これらの問いは、正解を示すものではありません。
          観測を始めるための入口です。
        </p>
      </header>

      <div className="flex flex-col gap-16">
        {QUESTION_CATEGORIES.map((cat) => {
          const questions = allQuestions.filter((q) => q.category === cat.id);
          if (questions.length === 0) return null;
          return (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <h2
                id={`cat-${cat.id}`}
                className="annotation mb-2 text-[var(--accent-violet)]"
              >
                {cat.label}
              </h2>
              <p className="mb-6 text-lg font-semibold tracking-tight">
                {cat.labelJa}
              </p>
              <ul className="flex flex-col gap-8">
                {questions.map((q) => (
                  <li key={q.id}>
                    <Link
                      href={buildQuestionFilterHref(q.filterParams)}
                      className="group block rounded-sm border border-transparent p-2 -mx-2 transition-colors hover:border-[var(--border-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20"
                    >
                      <p className="prose-ja text-[var(--ink)] group-hover:text-[var(--accent-violet)]">
                        {q.textJa}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--ink-faint)] opacity-0 transition-opacity group-hover:opacity-100">
                        関連観測を見る
                        <ArrowRight className="h-3 w-3" aria-hidden />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
