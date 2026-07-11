import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isSubmitEnabled } from "@/lib/features";
import { SubmitPatternForm } from "@/components/SubmitPatternForm";

export const metadata: Metadata = {
  title: "新規観測を追加 / Submit",
};

export default function SubmitPage() {
  if (!isSubmitEnabled()) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-8">
        <p className="annotation mb-2 text-[var(--accent-red)]">Submit</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          新規観測を追加
        </h1>
        <p className="prose-ja mt-3 text-[var(--ink-muted)]">
          観測した怪しい投稿・広告・LP・DM・ニュース記事などの「構造」を記録します。
          記録は分類・注意喚起のためのものです。詐欺の文面や手順ではなく、パターンの型を残してください。
        </p>
      </header>

      <SubmitPatternForm />
    </div>
  );
}
