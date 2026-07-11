import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { trustHookCategories } from "@/data/trustHooks";
import { getSeedPatternById } from "@/lib/data";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "信頼フック辞書 / Trust Hooks",
};

export default function TrustHooksPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <header className="mb-8">
        <p className="annotation mb-2 text-[var(--accent-red)]">Trust Hooks</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          信頼フック辞書
        </h1>
        <p className="prose-ja mt-3 max-w-2xl text-[var(--ink-muted)]">
          詐欺は、まず信じる理由を作る。ここでは、AI時代に使われる信頼の偽装形式を分類する。
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {trustHookCategories.map((category, i) => (
          <Card key={category.id} className="flex flex-col p-6">
            <div className="mb-2 flex items-baseline gap-3">
              <span className="annotation text-[var(--ink-faint)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg font-semibold tracking-tight">
                {category.title}
              </h2>
            </div>
            <p className="mb-4 text-sm text-[var(--ink-muted)]">
              {category.description}
            </p>
            <ul className="mb-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper)] px-2.5 py-1 text-sm text-[var(--ink-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            {category.relatedPatternIds.length > 0 ? (
              <div className="mb-4">
                <p className="annotation mb-2 text-[var(--ink-faint)]">
                  関連パターン
                </p>
                <ul className="flex flex-wrap gap-2">
                  {category.relatedPatternIds.map((id) => {
                    const pattern = getSeedPatternById(id);
                    if (!pattern) return null;
                    return (
                      <li key={id}>
                        <Link
                          href={`/patterns/${id}`}
                          className="inline-flex items-center gap-1 rounded-sm border border-[var(--border)] px-2.5 py-1 text-sm text-[var(--ink-muted)] hover:border-[var(--ink-faint)] hover:text-[var(--ink)]"
                        >
                          {pattern.name}
                          <ArrowUpRight className="h-3 w-3 shrink-0" aria-hidden />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            <div className="mt-auto flex items-start gap-2 border-t border-[var(--border-subtle)] pt-3">
              <Eye
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-amber)]"
                aria-hidden
              />
              <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
                <span className="annotation mr-1 text-[var(--ink-faint)]">
                  観測ポイント
                </span>
                {category.watchFor}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
