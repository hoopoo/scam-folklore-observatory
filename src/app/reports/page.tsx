import type { Metadata } from "next";
import { seedTrendReports } from "@/data/reports";
import { ReportsExplorer } from "@/components/ReportsExplorer";

export const metadata: Metadata = {
  title: "Trend Reports 2025–2026 / トレンドレポート",
};

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header className="mb-8">
        <p className="annotation mb-2 text-[var(--accent-red)]">
          Trend Reports / 2025–2026
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          トレンドレポート
        </h1>
        <p className="prose-ja mt-3 max-w-2xl text-[var(--ink-muted)]">
          AI時代の詐欺は、単発の事件ではなく、反復される信頼の偽装形式として現れる。
        </p>
        <p className="prose-ja mt-2 max-w-2xl text-[var(--ink-muted)]">
          2025年から2026年7月までに観測された、AI詐欺・SNS型投資詐欺・ロマンス詐欺・タスク求人詐欺・なりすまし詐欺などの変化を、古典詐欺との対応関係から整理する。四半期・地域・カテゴリ・深刻度で絞り込めます。
        </p>
        <p className="prose-ja mt-2 max-w-2xl text-sm text-[var(--ink-faint)]">
          いずれも公開情報・各国機関の一般的な注意喚起の類型に基づく傾向の記録です。特定の事業者・個人を名指しするものではなく、詐欺の再現や改善を目的としたものでもありません。
        </p>
      </header>

      <ReportsExplorer reports={seedTrendReports} />
    </div>
  );
}
