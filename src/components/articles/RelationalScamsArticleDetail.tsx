import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type {
  ObservationSection,
  RelationalScamsLonelinessArticle,
} from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { RelationalScamsHero } from "@/components/articles/RelationalScamsHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { ScamFolkloreLens } from "@/components/articles/ScamFolkloreLens";
import {
  ObservationSummaryGrid,
  RelationalScamLoop,
  SafetyQuestionsCard,
} from "@/components/articles/RelationalScamParts";
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
      {section.quotes?.length ? (
        <ThesisQuote lines={section.quotes} label="Observation / 観測" />
      ) : null}
      {section.emphasis?.length ? (
        <ThesisQuote lines={section.emphasis} label="Key Quote / 引用" />
      ) : null}
    </section>
  );
}

export function RelationalScamsArticleDetail({
  article,
}: {
  article: RelationalScamsLonelinessArticle;
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

      <RelationalScamsHero article={article} />

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      {article.sections.map((section) => (
        <ObservationSectionBlock key={section.number} section={section} />
      ))}

      <ThesisQuote
        lines={article.keyObservation}
        label="Key Observation / 中心観測"
      />

      <ScamFolkloreLens
        items={article.scamFolkloreLens}
        title="Scam Folklore Lens"
        description="関係性を入口にした搾取で繰り返し現れる段階。"
      />

      <section className="mt-12">
        <p className="annotation mb-2">Signal</p>
        <FadeIn>
          <Card className="p-5">
            <p className="prose-ja text-sm text-[var(--ink-muted)]">
              {article.signal}
            </p>
          </Card>
        </FadeIn>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          Implications
        </h2>
        <ul className="flex flex-col gap-2">
          {article.implications.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-amber)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <RelationalScamLoop
          centerLabel={article.relationalLoop.centerLabel}
          stages={article.relationalLoop.stages}
          caption={article.relationalLoop.caption}
        />
      </section>

      <section className="mt-12">
        <SafetyQuestionsCard
          title={article.safetyQuestions.title}
          questions={article.safetyQuestions.questions}
          disclaimer={article.safetyQuestions.disclaimer}
        />
      </section>

      <ObservationSummaryGrid cards={article.observationSummary} />

      <ConnectedObservatories
        observatories={article.connectedObservatories}
        heading="Connected Observatories"
        description="関連する観測サイトへの接続。"
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
