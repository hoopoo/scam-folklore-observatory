import type { Metadata } from "next";
import { PatternsExplorer } from "@/components/PatternsExplorer";

export const metadata: Metadata = {
  title: "観測一覧 / Patterns",
};

export default function PatternsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="mb-8">
        <p className="annotation mb-2 text-[var(--accent-red)]">Patterns</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          観測一覧
        </h1>
        <p className="prose-ja mt-3 max-w-2xl text-[var(--ink-muted)]">
          登録された詐欺パターンの観測記録です。カテゴリ・リスクレベルでの絞り込みと、
          名称・起源・危険サイン・タグを対象とした検索ができます。あなたがこの端末で追加した観測記録も一緒に表示されます。
        </p>
      </header>

      <PatternsExplorer />
    </div>
  );
}
