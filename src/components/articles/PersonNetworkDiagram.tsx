import { FadeIn } from "@/components/articles/FadeIn";

export function PersonNetworkDiagram({
  centerLabel,
  nodes,
}: {
  centerLabel: string;
  nodes: string[];
}) {
  return (
    <FadeIn>
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
        <div className="mx-auto mb-8 flex max-w-xs justify-center">
          <div className="rounded-sm border-2 border-[var(--accent-amber)]/40 bg-[var(--accent-soft)]/50 px-6 py-4 text-center">
            <p className="annotation mb-1">Center</p>
            <p className="text-sm font-semibold">{centerLabel}</p>
          </div>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {nodes.map((node, i) => (
            <li
              key={node}
              className="animate-article-in rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-3 py-2 text-center text-xs text-[var(--ink-muted)] transition-transform hover:translate-y-[-1px]"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {node}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
