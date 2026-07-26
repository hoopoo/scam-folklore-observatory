import { FadeIn } from "@/components/articles/FadeIn";

export function ObservationFragments({ fragments }: { fragments: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Observation Fragments
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {fragments.map((fragment, i) => (
          <FadeIn key={fragment} delay={i * 40}>
            <li className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3 text-sm text-[var(--ink-muted)]">
              {fragment}
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
