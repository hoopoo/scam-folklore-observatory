import type { Metadata } from "next";
import { taxonomy } from "@/lib/taxonomy";
import { TaxonomySection } from "@/components/TaxonomySection";

export const metadata: Metadata = {
  title: "分類辞書 / Taxonomy",
};

export default function TaxonomyPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <header className="mb-8">
        <p className="annotation mb-2 text-[var(--accent-red)]">Taxonomy</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          詐欺分類辞書
        </h1>
        <p className="prose-ja mt-3 max-w-2xl text-[var(--ink-muted)]">
          詐欺を「手法」ではなく「何を悪用するか」という観測軸で分類した辞書です。
          欲望・不安・権威・媒体・AI利用・古典類型・最終搾取の7つの軸から、再包装の構造を読み解きます。
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {taxonomy.map((axis, i) => (
          <TaxonomySection key={axis.id} axis={axis} index={i} />
        ))}
      </div>
    </div>
  );
}
