import {
  GENDER_DESIGN_ISSUES,
  MACHINE_MODEL_GAPS,
} from "@/data/intimacy-meta";

export function MachineModelSection() {
  return (
    <section
      id="machine-model"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="machine-model-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Machine&apos;s Model of Human</p>
        <h2
          id="machine-model-heading"
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          AIが想定する人間像
        </h2>
        <div className="prose-ja mt-6 max-w-2xl text-[var(--ink-muted)]">
          <p>
            AIは人間を理解する前に、人間を入力可能な項目へ変換する。
          </p>
          <p className="mt-4">
            現実の人間は曖昧で、変化し、言葉にできない部分を持っている。
            しかしシステムは、性別、年齢、恋愛対象、家族構成、役割を固定値として求める。
          </p>
        </div>

        <div className="mt-10">
          <h3 className="annotation mb-4">Observed Design Patterns</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {GENDER_DESIGN_ISSUES.map((issue) => (
              <li
                key={issue.id}
                className="rounded-sm border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm"
              >
                <span className="text-[var(--ink-faint)]">{issue.label}</span>
                <span className="mx-2 text-[var(--border)]">/</span>
                <span>{issue.labelJa}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h3 className="annotation mb-6">Four Gaps</h3>
          <ul className="grid gap-6 md:grid-cols-2">
            {MACHINE_MODEL_GAPS.map((gap) => (
              <li
                key={gap.id}
                className="border-l-2 border-[var(--accent-violet)] pl-5"
              >
                <p className="annotation">{gap.label}</p>
                <p className="mt-1 font-medium">{gap.labelJa}</p>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {gap.descriptionJa}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
