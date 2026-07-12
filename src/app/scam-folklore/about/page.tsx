import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Scam Folklore — この観測所について",
};

export default function ScamFolkloreAboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2 text-[var(--accent-red)]">
          Scam Folklore Observatory
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          詐欺民俗観測所について
        </h1>
      </header>

      <div className="prose-ja flex flex-col gap-8 text-[var(--ink)]">
        <p className="text-xl font-medium leading-relaxed tracking-tight md:text-2xl">
          AIは詐欺を発明しない。人間の弱さを高速化する。
        </p>

        <p className="text-[var(--ink-muted)]">
          詐欺は、単にお金を奪う技術ではない。人が何を信じたいのか、どこで不安になるのか、どんな未来像に賭けてしまうのかを映し出す鏡でもある。
        </p>

        <p className="text-[var(--ink-muted)]">
          Scam Folklore
          Observatoryは、AI時代の詐欺を、犯罪技術としてではなく、社会の欲望と不安の観測対象として記録する。
        </p>

        <hr className="border-[var(--border-subtle)]" />

        <section>
          <h2 className="mb-3 text-lg font-semibold tracking-tight md:text-xl">
            詐欺は、画面から環境へ移る。
          </h2>
          <p className="text-[var(--ink-muted)]">
            これまでの詐欺は、偽サイト、偽メール、偽アカウントのように、比較的境界が見える場所で起きていた。けれど、スマートグラス、イヤホン、リング、AIエージェントが普及すると、偽の意味は現実空間、音声、身体操作、AIの判断経路へ入り込む。
          </p>
          <Link
            href="/forecasts"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
          >
            未来詐欺予測を見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </section>

        <div className="flex items-start gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)] p-4">
          <ShieldAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-amber)]"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
            このサイトは研究・教育・注意喚起を目的としています。詐欺行為、なりすまし、フィッシング、無断収集、違法行為を支援するものではありません。
          </p>
        </div>
      </div>
    </div>
  );
}
