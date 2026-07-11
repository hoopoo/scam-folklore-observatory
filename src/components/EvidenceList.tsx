import { ExternalLink, FileText } from "lucide-react";
import type { Evidence } from "@/types/scam";
import { evidenceTypeLabel, formatDate } from "@/lib/display";
import { Badge } from "@/components/ui/badge";

type Props = {
  evidence: Evidence[];
};

export function EvidenceList({ evidence }: Props) {
  if (evidence.length === 0) {
    return (
      <p className="text-sm text-[var(--ink-faint)]">
        観測記録はまだ登録されていません。
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {evidence.map((e) => (
        <li
          key={e.id}
          className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4"
        >
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Badge variant="outline">{evidenceTypeLabel[e.type]}</Badge>
            <span className="annotation">{formatDate(e.observedAt)}</span>
            {e.sourceName ? (
              <span className="text-xs text-[var(--ink-faint)]">
                出典: {e.sourceName}
              </span>
            ) : null}
          </div>
          <p className="flex items-start gap-1.5 text-sm font-medium">
            <FileText
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--ink-faint)]"
              aria-hidden
            />
            {e.title}
          </p>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">{e.note}</p>
          {e.url ? (
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--accent-red)] underline underline-offset-2 hover:text-[var(--ink)]"
            >
              <ExternalLink className="h-3 w-3" aria-hidden />
              参照リンク
            </a>
          ) : (
            <p className="mt-2 text-xs text-[var(--ink-faint)]">
              公開注意喚起・ニュース・利用者報告などをもとに記録
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
