import { INSTITUTIONAL_GAPS } from "@/data/intimacy-meta";

export function InstitutionalGapsSection() {
  return (
    <section
      id="institutional-gaps"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="institutional-gaps-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Institutional Gaps</p>
        <h2
          id="institutional-gaps-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          感情と制度のズレ
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INSTITUTIONAL_GAPS.map((gap) => (
            <li
              key={gap.id}
              className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5"
            >
              <p className="annotation">{gap.label}</p>
              <h3 className="mt-1 text-sm font-semibold">{gap.labelJa}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {gap.descriptionJa}
              </p>
              {gap.topics && gap.topics.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-3">
                  {gap.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-[0.65rem] text-[var(--ink-faint)]"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
