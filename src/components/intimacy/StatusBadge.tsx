import type { ObservationStatus } from "@/types/intimacy";
import { statusLabel, statusStyle } from "@/lib/intimacy-display";

export function StatusBadge({ status }: { status: ObservationStatus }) {
  const style = statusStyle(status);
  const label = statusLabel[status];
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-sm px-2 py-0.5 text-[0.65rem] font-medium tracking-wide"
      style={{ color: style.color, backgroundColor: style.bg }}
    >
      <span aria-hidden>{label.en}</span>
      <span className="sr-only"> — </span>
      <span className="not-sr-only ml-1 hidden sm:inline">{label.ja}</span>
    </span>
  );
}
