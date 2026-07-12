import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "この観測所について / About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2 text-[var(--accent-red)]">About</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          この観測所について
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
            これまでの詐欺は、偽サイト、偽メール、偽アカウントのように、比較的境界が見える場所で起きていた。けれど、スマートグラス、イヤホン、リング、AIエージェントが普及すると、偽の意味は現実空間、音声、身体操作、AIの判断経路へ入り込む。Scam
            Folklore Observatoryは、この変化を「未来詐欺予測」として記録する。
          </p>
          <Link
            href="/forecasts"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
          >
            未来詐欺予測を見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </section>

        <hr className="border-[var(--border-subtle)]" />

        <section>
          <h2 className="mb-3 text-base font-semibold tracking-tight">
            この観測所がすること
          </h2>
          <ul className="flex flex-col gap-2 text-[var(--ink-muted)]">
            {[
              "詐欺パターンの分類",
              "危険サインの整理",
              "被害予防の説明",
              "公開情報に基づく観測記録",
              "古典的詐欺との対応関係の分析",
              "防御的な注意喚起",
              "研究・教育目的のダッシュボード化",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold tracking-tight">
            この観測所がしないこと
          </h2>
          <p className="text-[var(--ink-muted)]">
            このサイトは詐欺手法を再現・自動化・改善するためのものではありません。詐欺メールや誘導文、会話スクリプト、フィッシングやディープフェイクの作成手順、送金誘導のテンプレートなどは一切扱いません。
          </p>
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
