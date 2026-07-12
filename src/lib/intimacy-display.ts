import type { ObservationStatus } from "@/types/intimacy";

export const OBSERVATION_STATUSES: ObservationStatus[] = [
  "observed",
  "emerging",
  "established",
  "unresolved",
  "speculative",
];

export const statusLabel: Record<
  ObservationStatus,
  { en: string; ja: string }
> = {
  observed: { en: "Observed", ja: "観測済み" },
  emerging: { en: "Emerging", ja: "浮上中" },
  established: { en: "Established", ja: "定着" },
  unresolved: { en: "Unresolved", ja: "未解決" },
  speculative: { en: "Speculative", ja: "仮説" },
};

export function statusStyle(status: ObservationStatus): {
  color: string;
  bg: string;
} {
  switch (status) {
    case "observed":
      return { color: "var(--accent-slate)", bg: "var(--accent-slate-bg)" };
    case "emerging":
      return { color: "var(--accent-violet)", bg: "var(--accent-violet-bg)" };
    case "established":
      return { color: "var(--accent-green)", bg: "var(--accent-green-bg)" };
    case "unresolved":
      return { color: "var(--accent-amber)", bg: "var(--risk-medium-bg)" };
    case "speculative":
      return { color: "var(--ink-faint)", bg: "var(--accent-soft)" };
  }
}

export function formatDate(date: string): string {
  try {
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}
