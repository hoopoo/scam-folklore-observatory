import type { Metadata } from "next";
import { Eye } from "lucide-react";
import { getArticles } from "@/lib/articles";
import { ArticlesExplorer } from "@/components/articles/ArticlesExplorer";

export const metadata: Metadata = {
  title: "観測記事 / Scam Folklore",
  description:
    "生成AI時代の詐欺構造の変化を、長文観測記事として記録する。偽の情報から、偽の身体・人格・関係へ。",
};

export default function ScamFolklorePage() {
  const articles = getArticles();

  return (
    <div>
      <section className="grid-surface border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
          <p className="annotation mb-4 flex items-center gap-1.5 text-[var(--accent-red)]">
            <Eye className="h-3.5 w-3.5" aria-hidden />
            Scam Folklore / 観測記事
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            詐欺民俗の観測記事
          </h1>
          <p className="prose-ja mt-4 max-w-2xl text-[var(--ink-muted)]">
            詐欺は、その時代に人々が信じているものの形を取る。Patterns
            や Reports が個別の類型を記録するのに対し、観測記事は構造の変化そのものを長文で追う。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10">
        <ArticlesExplorer articles={articles} />
      </section>
    </div>
  );
}
