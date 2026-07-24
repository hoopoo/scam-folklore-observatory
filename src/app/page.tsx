import Link from "next/link";
import { ArrowRight, Eye, FlaskConical } from "lucide-react";
import { getSeedPatternById, getSeedPatterns } from "@/lib/data";
import { FEATURED_PATTERN_IDS } from "@/lib/patterns";
import { getArticles } from "@/lib/articles";
import { articleCategoryLabel, observationStatusLabel } from "@/lib/articles";
import { formatDate } from "@/lib/display";
import { RiskBadge } from "@/components/RiskBadge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ScamPattern } from "@/types/scam";

export default function HomePage() {
  const totalCount = getSeedPatterns().length;
  const patterns = FEATURED_PATTERN_IDS.map((id) => getSeedPatternById(id)).filter(
    (p): p is ScamPattern => Boolean(p),
  );
  const latestArticle = getArticles()[0];

  return (
    <div>
      <section className="grid-surface border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="annotation mb-5 text-[var(--accent-red)]">
            Scam Folklore Observatory / 詐欺民俗観測所
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            古い詐欺は、AIで若返る。
          </h1>
          <p className="prose-ja mt-6 max-w-2xl text-[var(--ink-muted)]">
            ポンジスキーム、ロマンス詐欺、なりすまし、霊感商法、情報商材、求人詐欺。
            古典的な詐欺の構造が、AIとSNSによってどのように再包装されているのかを観測する研究用ダッシュボードです。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/patterns">
              <Button size="lg">
                観測一覧を見る
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                この観測所について
              </Button>
            </Link>
          </div>

          <div className="mt-14 max-w-2xl border-l-2 border-[var(--border)] pl-5">
            <p className="annotation mb-2">Core Question / 中心の問い</p>
            <p className="prose-ja text-[var(--ink)]">
              AI時代の詐欺は、何を新しくしたのか。
              <br />
              技術ではなく、信頼の偽装形式を観測する。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--paper-raised)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              詐欺は、まず信じる理由を作る。
            </h2>
            <div>
              <p className="prose-ja text-[var(--ink-muted)]">
                AI時代の詐欺で重要なのは、技術そのものではなく、信頼の偽装形式です。有名人、専門家、成功者、恋人、診断結果、限定招待。人が信じたくなる入口を観測することで、古典的な詐欺がどのように再包装されているかが見えてきます。
              </p>
              <Link
                href="/trust-hooks"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
              >
                信頼フック辞書を見る
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="annotation mb-1 text-[var(--accent-red)]">
              Featured Patterns
            </p>
            <h2 className="text-xl font-semibold tracking-tight">
              注目の観測パターン
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              全 {totalCount} 件の観測パターンから、代表的な 6 件を抜粋しています。
            </p>
          </div>
          <Link
            href="/patterns"
            className="hidden shrink-0 items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] sm:inline-flex"
          >
            すべて見る
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {patterns.map((p) => (
            <Link key={p.id} href={`/patterns/${p.id}`} className="group">
              <Card className="flex h-full flex-col p-5 transition-colors hover:border-[var(--ink-faint)]">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold leading-snug tracking-tight">
                    {p.name}
                  </h3>
                  <RiskBadge level={p.riskLevel} showEn={false} />
                </div>
                <dl className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-3 text-sm">
                  <div>
                    <dt className="annotation mb-0.5">古典的起源</dt>
                    <dd>{p.classicalOrigin}</dd>
                  </div>
                  <div>
                    <dt className="annotation mb-0.5">AIアップデート</dt>
                    <dd className="text-[var(--ink-muted)]">{p.aiUpgrade}</dd>
                  </div>
                </dl>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--ink-faint)]">
                    <Eye className="h-3.5 w-3.5" aria-hidden />
                    観測 {p.observedEvidence.length} 件
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/patterns">
            <Button size="lg" variant="outline">
              すべての観測パターンを見る（{totalCount} 件）
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--paper-raised)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="annotation mb-1 flex items-center gap-1.5 text-[var(--accent-red)]">
                <Eye className="h-3.5 w-3.5" aria-hidden />
                Scam Folklore / 観測記事
              </p>
              <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                構造の変化を、長文で追う
              </h2>
            </div>
            <div>
              {latestArticle ? (
                <Link
                  href={`/scam-folklore/${latestArticle.slug}`}
                  className="group block rounded-sm border border-[var(--border)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--ink-faint)]"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="annotation text-[var(--accent-red)]">
                      {observationStatusLabel[latestArticle.status]}
                    </span>
                    <Badge variant="outline">
                      {articleCategoryLabel[latestArticle.category]}
                    </Badge>
                    <time
                      dateTime={latestArticle.publishedAt}
                      className="annotation ml-auto text-[var(--ink-faint)]"
                    >
                      {formatDate(latestArticle.publishedAt)}
                    </time>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-[var(--ink)]">
                    {latestArticle.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--ink-faint)]">
                    {latestArticle.subtitle}
                  </p>
                  <p className="prose-ja mt-3 text-sm text-[var(--ink-muted)]">
                    {latestArticle.summary}
                  </p>
                </Link>
              ) : null}
              <Link
                href="/scam-folklore"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
              >
                観測記事一覧を見る
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--paper-raised)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="annotation mb-1 flex items-center gap-1.5 text-[var(--accent-amber)]">
                <FlaskConical className="h-3.5 w-3.5" aria-hidden />
                Future Fraud Forecasts
              </p>
              <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                未来詐欺予測
              </h2>
            </div>
            <div>
              <p className="prose-ja text-[var(--ink-muted)]">
                詐欺は、スマホ画面から、視界、声、振動、身体状態、AIエージェント同士の判断経路へ移り始める。2026年以降に現れる可能性のある詐欺構造を、観測仮説として記録する。
              </p>
              <Link
                href="/forecasts"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] underline-offset-4 hover:underline"
              >
                未来詐欺予測を見る
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
