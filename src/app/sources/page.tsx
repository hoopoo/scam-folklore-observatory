import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources / 出典について",
};

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2">Sources</p>
        <h1 className="text-2xl font-semibold tracking-tight">出典について</h1>
      </header>
      <div className="prose-ja text-sm text-[var(--ink-muted)]">
        <p>
          各観測記録には、確認可能な出典がある場合のみ URL
          を掲載しています。出典が未確認の記録は、フィールド観測または二次資料の要約として扱います。
        </p>
        <p className="mt-4">
          架空の URL や確認不能なリンクは掲載しません。
        </p>
      </div>
    </div>
  );
}
