import {
  INTIMACY_VALUES,
  VALUE_CONFLICTS,
} from "@/data/intimacy-values";

export function ValueOfIntimacySection() {
  return (
    <section
      id="value-of-intimacy"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="value-of-intimacy-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Value of Intimacy</p>
        <h2
          id="value-of-intimacy-heading"
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          親密性の価値
        </h2>
        <p className="prose-ja mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
          恋愛、結婚、独身、友情、AI、ペットなどの関係が、本人にとってどのような価値を持つのかを観測します。
          関係形式そのものに価値があると決めつけず、同じ関係でも人によって価値が異なることを前提にしています。
        </p>

        <div className="mt-12">
          <h3 className="annotation mb-6">Value Categories / 価値カテゴリー</h3>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INTIMACY_VALUES.map((value) => (
              <li
                key={value.id}
                className="border-t border-[var(--border-subtle)] pt-4"
              >
                <p className="annotation">{value.label}</p>
                <h4 className="mt-1 text-sm font-semibold">{value.labelJa}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-muted)]">
                  {value.descriptionJa}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-[var(--border-subtle)] pt-12">
          <h3 className="annotation mb-2">Value Conflicts / 価値の衝突</h3>
          <p className="mb-8 max-w-2xl text-xs text-[var(--ink-faint)]">
            複数の価値は並存し、同時に引っ張り合う。優劣ではなく、緊張として記録する。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_CONFLICTS.map((conflict) => (
              <li
                key={conflict.id}
                className="rounded-sm border border-[var(--border)] bg-[var(--paper)] px-4 py-4"
              >
                <p className="annotation text-[0.6rem]">{conflict.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">
                  <span>{conflict.poleA}</span>
                  <span className="mx-2 text-[var(--ink-faint)]" aria-hidden>
                    /
                  </span>
                  <span>{conflict.poleB}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
