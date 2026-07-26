import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { TrustedAiPersonaArticle } from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { TrustedAiPersonaHero } from "@/components/articles/TrustedAiPersonaHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { ArticleComparison } from "@/components/articles/ArticleComparison";
import { FlowDiagram } from "@/components/articles/FlowDiagram";
import { CareControlMap, TensionMap } from "@/components/articles/TensionMap";
import { ScamFolkloreLens } from "@/components/articles/ScamFolkloreLens";
import { FraudTransformationMap } from "@/components/articles/FraudTransformationMap";
import { ObservationFragments } from "@/components/articles/ObservationFragments";
import { ScenarioCards } from "@/components/articles/ScenarioCards";
import { AdviceWarningSigns } from "@/components/articles/AdviceWarningSigns";
import { ProtectiveDesignSection } from "@/components/articles/ProtectiveDesignSection";
import { ConnectedObservatories } from "@/components/articles/ConnectedObservatories";
import { FinalQuestionBlock } from "@/components/articles/FinalQuestionBlock";
import { RelatedObservations } from "@/components/articles/RelatedObservations";
import { FadeIn } from "@/components/articles/FadeIn";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-4 flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
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

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 text-lg font-semibold tracking-tight">
      <span className="annotation mr-2">Section {number}</span>
      {children}
    </h2>
  );
}

export function TrustedAiPersonaArticleDetail({
  article,
}: {
  article: TrustedAiPersonaArticle;
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

      <TrustedAiPersonaHero article={article} />

      {/* Lead */}
      <FadeIn>
        <section className="prose-ja mt-10 space-y-4 text-[var(--ink-muted)]">
          {article.lead.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="space-y-1 border-l-2 border-[var(--border)] pl-4">
            {article.lead.transition.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p>その人格が、</p>
          <ul className="space-y-1">
            {article.lead.recommendationExamples.map((r) => (
              <li key={r} className="text-[var(--ink)]">
                {r}
              </li>
            ))}
          </ul>
          <p>と言ったとき、それは広告や勧誘に見えるだろうか。</p>
          <ThesisQuote lines={article.lead.emphasis} />
        </section>
      </FadeIn>

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      {/* Section 01 */}
      <section className="mt-12">
        <SectionHeading number="01">{article.section01.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section01.intro}
        </p>
        <BulletList items={article.section01.traditionalItems} />
        <BulletList items={article.section01.aiTraits} />
        <ThesisQuote lines={article.section01.emphasis} />
        <ArticleComparison
          left={article.section01.comparison.left}
          center={article.section01.comparison.center}
          right={article.section01.comparison.right}
          variant="highlight-right"
        />
      </section>

      {/* Section 02 */}
      <section className="mt-12">
        <SectionHeading number="02">{article.section02.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section02.intro}
        </p>
        <BulletList items={article.section02.trustItems} />
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section02.bridge}
        </p>
        <ThesisQuote lines={article.section02.emphasis} />
        <FlowDiagram
          title={article.section02.flow.title}
          titleJa={article.section02.flow.titleJa}
          steps={article.section02.flow.steps}
        />
      </section>

      {/* Section 03 */}
      <section className="mt-12">
        <SectionHeading number="03">{article.section03.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section03.intro}
        </p>
        <BulletList items={article.section03.dataItems} />
        <ThesisQuote lines={article.section03.emphasis} />
        <FlowDiagram
          steps={article.section03.flow.steps}
          actions={article.section03.flow.actions}
        />
      </section>

      {/* Section 04 */}
      <section className="mt-12">
        <SectionHeading number="04">{article.section04.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section04.intro}
        </p>
        <BulletList items={article.section04.traditionalAd} />
        <BulletList items={article.section04.conversationalExamples} />
        <ThesisQuote lines={article.section04.emphasis} />
        <ArticleComparison
          left={article.section04.comparison.left}
          center={article.section04.comparison.center}
          right={article.section04.comparison.right}
          variant="highlight-right"
        />
      </section>

      {/* Section 05 */}
      <section className="mt-12">
        <SectionHeading number="05">{article.section05.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section05.intro}
        </p>
        <BulletList items={article.section05.carePhrases} />
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section05.bridge}
        </p>
        <ThesisQuote lines={article.section05.emphasis} />
        <CareControlMap
          care={article.section05.care}
          control={article.section05.control}
        />
      </section>

      {/* Section 06 */}
      <section className="mt-12">
        <SectionHeading number="06">{article.section06.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section06.intro}
        </p>
        <BulletList items={article.section06.risks} />
        <ThesisQuote lines={article.section06.emphasis} />
        <FlowDiagram steps={article.section06.flow.steps} />
      </section>

      {/* Section 07 */}
      <section className="mt-12">
        <SectionHeading number="07">{article.section07.title}</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.section07.intro}
        </p>
        <BulletList items={article.section07.process} />
        <p className="prose-ja text-[var(--ink-muted)]">
          そして、信頼が十分に形成された後で、提案、購入、契約、送金へ誘導する。
        </p>
        <ThesisQuote lines={article.section07.emphasis} />
        <FlowDiagram
          title={article.section07.evolution.title}
          titleJa={article.section07.evolution.titleJa}
          steps={article.section07.evolution.steps}
        />
      </section>

      <ScamFolkloreLens items={article.scamFolkloreLens} />

      <FraudTransformationMap
        oldScam={article.fraudTransformation.old}
        emergingScam={article.fraudTransformation.emerging}
        emphasis={article.fraudTransformation.emphasis}
        emphasisJa={article.fraudTransformation.emphasisJa}
      />

      <TensionMap
        helpful={article.tensionMap.helpful}
        exploitable={article.tensionMap.exploitable}
        conclusion={article.tensionMap.conclusion}
      />

      <ObservationFragments fragments={article.observationFragments} />

      <ScenarioCards scenarios={article.scenarios} />

      <AdviceWarningSigns
        title={article.warningSigns.title}
        titleJa={article.warningSigns.titleJa}
        signs={article.warningSigns.signs}
      />

      <ProtectiveDesignSection
        items={article.protectiveDesign.items}
        emphasis={article.protectiveDesign.emphasis}
      />

      <RelatedObservations
        article={{
          relatedPatternIds: article.relatedPatternIds,
          relatedReportIds: article.relatedReportIds,
          relatedForecastIds: article.relatedForecastIds,
          relatedTrustHookIds: article.relatedTrustHookIds,
          folkloreConnection:
            "人は広告を疑っても、自分を理解している人格の助言は疑いにくい。詐欺は、その時代に人々が信じているものの形を取る。",
        }}
      />

      <ConnectedObservatories observatories={article.connectedObservatories} />

      <FinalQuestionBlock
        ja={article.finalQuestion.ja}
        en={article.finalQuestion.en}
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
