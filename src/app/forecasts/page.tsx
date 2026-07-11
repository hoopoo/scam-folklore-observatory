import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { getForecasts } from "@/lib/forecasts";
import { ForecastsExplorer } from "@/components/ForecastsExplorer";
import { InterfaceShiftSection } from "@/components/InterfaceShiftSection";

export const metadata: Metadata = {
  title: "Future Fraud Forecasts / 未来詐欺予測",
};

export default function ForecastsPage() {
  const forecasts = getForecasts();

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <header className="mb-8">
        <p className="annotation mb-2 text-[var(--accent-red)]">
          Future Fraud Forecasts
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          未来詐欺予測
        </h1>
        <p className="prose-ja mt-3 max-w-2xl text-[var(--ink-muted)]">
          詐欺は、画面から環境へ移る。
        </p>
        <p className="prose-ja mt-2 max-w-2xl text-[var(--ink-muted)]">
          スマートグラス、イヤホン、リング、ウェアラブルAI、AIエージェントが普及すると、詐欺はWebサイトやアプリの中だけでは完結しなくなる。視界、声、振動、身体状態、位置情報、AI同士の判断経路へ分散していく。ここでは、2026年以降に現れる可能性のある詐欺構造を、観測仮説として記録する。
        </p>

        <blockquote className="prose-ja mt-6 max-w-2xl border-l-2 border-[var(--accent-red)] pl-5 text-lg font-medium leading-relaxed tracking-tight text-[var(--ink)]">
          詐欺師は、金庫を壊さない。
          <br />
          持ち主に鍵を開けさせる。
          <br />
          その鍵が、パスワードから、視線、声、指、身体状態、AIエージェントへ変わる。
        </blockquote>

        <div className="mt-5 rounded-sm border-l-2 border-[var(--border)] bg-[var(--paper-raised)] px-5 py-4">
          <p className="annotation mb-1">Core Thesis / 中心の仮説</p>
          <p className="prose-ja text-[var(--ink)]">
            本物のデバイス、本物のAI、本物の認証を利用して、偽の意味を通す。
          </p>
        </div>
      </header>

      <div className="mb-8 flex flex-col gap-6">
        <div className="flex items-start gap-2 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
          <FlaskConical
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-amber)]"
            aria-hidden
          />
          <div>
            <h2 className="text-sm font-semibold tracking-tight">
              これは観測仮説です。
            </h2>
            <p className="prose-ja mt-2 text-sm text-[var(--ink-muted)]">
              ここに記録されているForecastsは、発生済み事例の一覧ではありません。2025–2026年のAI詐欺・SNS型詐欺・なりすまし・ロマンス詐欺・ウェアラブル技術の変化から導いた、2026年以降の可能性に関する観測仮説です。
            </p>
          </div>
        </div>

        <InterfaceShiftSection />
      </div>

      <ForecastsExplorer forecasts={forecasts} />
    </div>
  );
}
