import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { INTIMACY_RISKS } from "@/data/intimacy-meta";
import { SCAM_FOLKLORE_OBSERVATORY_URL } from "@/config/projects";

export function RiskObservatorySection() {
  return (
    <section
      id="risk-observatory"
      className="border-b border-[var(--border)]"
      aria-labelledby="risk-observatory-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="annotation mb-2">Risk Observatory</p>
        <h2
          id="risk-observatory-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          親密性を利用したリスク
        </h2>
        <blockquote className="prose-ja mt-8 max-w-2xl border-l-2 border-[var(--accent-violet)] pl-5 text-[var(--ink)]">
          最も自分を理解してくれる存在が、最も自分を操作しやすい存在になる。
        </blockquote>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {INTIMACY_RISKS.map((risk) => (
            <li
              key={risk.id}
              className="border-t border-[var(--border-subtle)] pt-4"
            >
              <p className="annotation">{risk.label}</p>
              <h3 className="mt-1 text-sm font-semibold">{risk.labelJa}</h3>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {risk.descriptionJa}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-sm border border-[var(--border)] p-5">
          <p className="text-sm text-[var(--ink-muted)]">
            親密性を武器にした詐欺構造の詳細は、関連プロジェクトで観測しています。
          </p>
          <a
            href={SCAM_FOLKLORE_OBSERVATORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
          >
            Scam Folklore Observatory へ
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <span className="mx-3 text-[var(--ink-faint)]">·</span>
          <Link
            href="/observations?risk=romance-scam&risk=elder-fraud"
            className="inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
          >
            関連観測を見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
