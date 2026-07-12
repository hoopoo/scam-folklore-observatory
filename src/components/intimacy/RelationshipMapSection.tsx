import { RELATIONSHIP_ENTITIES } from "@/data/intimacy-meta";

export function RelationshipMapSection() {
  const center = RELATIONSHIP_ENTITIES.find((r) => r.id === "human");
  const orbit = RELATIONSHIP_ENTITIES.filter((r) => r.id !== "human");

  return (
    <section
      id="relationship-map"
      className="border-b border-[var(--border)] bg-[var(--paper-raised)]"
      aria-labelledby="relationship-map-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Relationship Map</p>
        <h2
          id="relationship-map-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          親密性の相手
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--ink-muted)]">
          中央の Self を起点に、人間が関係を結びうる対象を配置しています。
        </p>

        {/* Desktop radial layout */}
        <div
          className="relative mx-auto mt-12 hidden aspect-square max-w-lg md:block"
          role="img"
          aria-label="Self を中心に配置した親密性の相手マップ"
        >
          <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--paper)]">
            <span className="text-sm font-semibold">Self</span>
          </div>
          {orbit.map((entity, i) => {
            const angle = (i / orbit.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={entity.id}
                className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="rounded-sm border border-[var(--border)] bg-[var(--paper)] px-2 py-1.5">
                  <p className="text-[0.65rem] font-medium leading-tight">
                    {entity.label}
                  </p>
                  <p className="text-[0.6rem] text-[var(--ink-faint)]">
                    {entity.labelJa}
                  </p>
                </div>
              </div>
            );
          })}
          <div
            className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--border-subtle)]"
            aria-hidden
          />
        </div>

        {/* Mobile list */}
        <ul className="mt-8 flex flex-col gap-3 md:hidden">
          <li className="rounded-sm border-2 border-[var(--ink)] bg-[var(--paper)] p-4 text-center font-semibold">
            Self
          </li>
          {orbit.map((entity) => (
            <li
              key={entity.id}
              className="rounded-sm border border-[var(--border)] bg-[var(--paper)] p-4"
            >
              <p className="text-sm font-medium">
                {entity.label} / {entity.labelJa}
              </p>
              <p className="mt-1 text-xs text-[var(--ink-muted)]">
                {entity.descriptionJa}
              </p>
            </li>
          ))}
        </ul>

        {center ? (
          <p className="sr-only">
            {orbit.map((e) => e.labelJa).join("、")}
          </p>
        ) : null}
      </div>
    </section>
  );
}
