import type { RiskLevel } from "@/types/scam";
import { riskLevelLabel, riskLevelStyle } from "@/lib/display";
import { cn } from "@/lib/utils";

type Props = {
  level: RiskLevel;
  className?: string;
  showEn?: boolean;
};

export function RiskBadge({ level, className, showEn = true }: Props) {
  const s = riskLevelStyle[level];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-semibold",
        s.text,
        s.bg,
        s.border,
        className,
      )}
      title={`リスクレベル: ${level}`}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden />
      リスク{riskLevelLabel[level]}
      {showEn ? (
        <span className="font-normal opacity-70">({level})</span>
      ) : null}
    </span>
  );
}
