import { Quote } from "lucide-react";

export function ThesisQuote({
  lines,
  label = "Thesis / 観測命題",
}: {
  lines: string[];
  label?: string;
}) {
  return (
    <aside className="my-6 flex gap-3 rounded-sm border border-[var(--accent-amber)]/40 bg-[var(--accent-soft)] p-5">
      <Quote
        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-amber)]"
        aria-hidden
      />
      <div>
        <p className="annotation mb-2 text-[var(--accent-amber)]">{label}</p>
        <div className="space-y-1">
          {lines.map((line, i) => (
            <p
              key={i}
              className="prose-ja text-[0.95rem] font-medium leading-relaxed text-[var(--ink)]"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}
