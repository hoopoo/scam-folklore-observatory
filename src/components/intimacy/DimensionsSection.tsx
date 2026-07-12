import { INTIMACY_DIMENSIONS } from "@/data/intimacy-meta";

export function DimensionsSection() {
  return (
    <section
      id="dimensions"
      className="border-b border-[var(--border)]"
      aria-labelledby="dimensions-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Dimensions of Intimacy</p>
        <h2
          id="dimensions-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          親密性を構成する要素
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INTIMACY_DIMENSIONS.map((dim) => (
            <li
              key={dim.id}
              className="border-t border-[var(--border-subtle)] pt-4"
            >
              <p className="annotation">{dim.label}</p>
              <h3 className="mt-1 text-base font-semibold">{dim.labelJa}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {dim.descriptionJa}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
