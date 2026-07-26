import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import type { ForgedAuthorityArticle, ObservationSection } from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { ForgedAuthorityHero } from "@/components/articles/ForgedAuthorityHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { ScamFolkloreLens } from "@/components/articles/ScamFolkloreLens";
import { FlowDiagram } from "@/components/articles/FlowDiagram";
import { ScamEvolutionTimeline } from "@/components/articles/ScamEvolutionTimeline";
import { AdviceWarningSigns } from "@/components/articles/AdviceWarningSigns";
import { ConnectedObservatories } from "@/components/articles/ConnectedObservatories";
import { RelatedObservations } from "@/components/articles/RelatedObservations";
import { RelatedFolkloreSection } from "@/components/articles/RelatedFolkloreSection";
import { FadeIn } from "@/components/articles/FadeIn";
import { Card } from "@/components/ui/card";

function SectionHeading({
  number,
  titleEn,
  titleJa,
}: {
  number: string;
  titleEn: string;
  titleJa: string;
}) {
  return (
    <div className="mb-4">
      <p className="annotation mb-1">
        {number}. {titleEn}
      </p>
      <h2 className="text-lg font-semibold tracking-tight">{titleJa}</h2>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="prose-ja mb-4 text-[var(--ink-muted)]">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-4 flex flex-col gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
        >
          <span
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink-faint)]"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function QuoteList({ items }: { items: string[] }) {
  return (
    <ul className="my-4 flex flex-col gap-2 border-l-2 border-[var(--border)] pl-4">
      {items.map((item) => (
        <li key={item} className="text-sm text-[var(--ink-muted)]">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ObservationSectionBlock({ section }: { section: ObservationSection }) {
  return (
    <section className="mt-12">
      <SectionHeading
        number={section.number}
        titleEn={section.titleEn}
        titleJa={section.titleJa}
      />
      {section.paragraphs.map((p) => (
        <Prose key={p.slice(0, 28)}>{p}</Prose>
      ))}
      {section.bullets?.length ? <BulletList items={section.bullets} /> : null}
      {section.quotes?.length ? <QuoteList items={section.quotes} /> : null}
      {section.emphasis?.length ? (
        <ThesisQuote lines={section.emphasis} label="Observation / 観測" />
      ) : null}
    </section>
  );
}

function DefensivePrinciples({
  principles,
}: {
  principles: ForgedAuthorityArticle["defensivePrinciples"];
}) {
  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        Defensive Principles
      </h2>
      <p className="mb-6 text-sm text-[var(--ink-muted)]">
        見分ける能力より、見分けられなくても実行できない構造を優先する。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {principles.map((item, i) => (
          <FadeIn key={item.id} delay={i * 40}>
            <Card className="flex h-full items-start gap-3 p-5">
              <span className="annotation shrink-0 text-[var(--accent-amber)]">
                {item.number}
              </span>
              <div className="flex items-start gap-2">
                <ShieldCheck
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--ink-faint)]"
                  aria-hidden
                />
                <p className="text-sm text-[var(--ink-muted)]">{item.title}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function ForgedAuthorityArticleDetail({
  article,
}: {
  article: ForgedAuthorityArticle;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <Link
        href="/scam-folklore"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        観測記事一覧へ戻る
      </Link>

      <ForgedAuthorityHero article={article} />

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      {article.sections.map((section) => (
        <ObservationSectionBlock key={section.number} section={section} />
      ))}

      <ThesisQuote lines={article.pullQuote} label="Pull Quote / 観測命題" />

      <ScamFolkloreLens
        items={article.keyFindings}
        title="Key Findings"
        description="権限偽造をめぐる構造的な観測点。"
      />

      <section className="mt-12">
        <h2 className="mb-1 text-lg font-semibold tracking-tight">
          {article.scamPattern.title}
        </h2>
        <p className="annotation mb-6">{article.scamPattern.titleJa}</p>
        <FlowDiagram steps={article.scamPattern.steps} />
      </section>

      <ScamEvolutionTimeline
        title={article.scamEvolution.title}
        titleJa={article.scamEvolution.titleJa}
        phases={article.scamEvolution.phases}
      />

      <AdviceWarningSigns
        heading="Signals to Watch"
        title="Signals to Watch"
        titleJa="監視対象の兆候"
        signs={article.signalsToWatch}
      />

      <DefensivePrinciples principles={article.defensivePrinciples} />

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          Editorial Note
        </h2>
        <div className="prose-ja space-y-4 text-sm text-[var(--ink-muted)]">
          {article.editorialNote.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
      </section>

      <ConnectedObservatories
        observatories={article.connectedObservatories}
        heading="Connected Observations"
        description="関連する観測サイトへの接続。未公開の観測は予告として保持する。"
      />

      <RelatedObservations
        article={{
          relatedPatternIds: article.relatedPatternIds,
          relatedReportIds: article.relatedReportIds,
          relatedForecastIds: article.relatedForecastIds,
          relatedTrustHookIds: article.relatedTrustHookIds,
          folkloreConnection: article.folkloreConnection,
        }}
      />

      <RelatedFolkloreSection
        links={[]}
        relatedArticleSlugs={article.relatedArticleSlugs}
      />

      <footer className="mt-12 border-t border-[var(--border)] pt-8">
        <div className="flex items-start gap-2 text-sm text-[var(--ink-muted)]">
          <FileText
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ink-faint)]"
            aria-hidden
          />
          <div>
            <p className="annotation mb-2">Source Note / 出典注記</p>
            <p className="prose-ja">{article.sourceNote}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}
