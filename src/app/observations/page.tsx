import type { Metadata } from "next";
import { Suspense } from "react";
import { ObservationsExplorer } from "@/components/intimacy/ObservationsExplorer";
import { getObservations } from "@/lib/observations";

export const metadata: Metadata = {
  title: "Observations / 観測一覧",
  description:
    "親密性の観測記録を、関係タイプ、人生段階、リスク、制度のズレなどで検索・フィルタリングできます。",
};

export default function ObservationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2">Observations</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          観測一覧
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--ink-muted)]">
          親密性の形態、制度とのズレ、AI設計、リスクに関する観測記録（2024年〜2026年7月、全{" "}
          {getObservations().length} 件）。
          フィルター条件はURLに反映され、再読み込み後も保持されます。
        </p>
      </header>
      <Suspense
        fallback={
          <p className="text-sm text-[var(--ink-faint)]">読み込み中…</p>
        }
      >
        <ObservationsExplorer />
      </Suspense>
    </div>
  );
}
