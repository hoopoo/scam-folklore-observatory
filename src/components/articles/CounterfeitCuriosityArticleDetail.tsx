import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import type {
  CounterfeitCuriosityArticle,
  DisguiseSection,
} from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { CounterfeitCuriosityHero } from "@/components/articles/CounterfeitCuriosityHero";
import { CuriosityExitBranch } from "@/components/articles/CuriosityExitBranch";
import {
  CuriosityStageFlow,
  ServiceComparisonTable,
} from "@/components/articles/CuriosityStageFlow";
import {
  FolklorePatternCard,
  VerificationChecklist,
  VerifyExitCta,
} from "@/components/articles/CuriosityArticleParts";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { ConnectedObservatories } from "@/components/articles/ConnectedObservatories";
import { RelatedObservations } from "@/components/articles/RelatedObservations";
import { RelatedFolkloreSection } from "@/components/articles/RelatedFolkloreSection";
import { FinalQuestionBlock } from "@/components/articles/FinalQuestionBlock";
import { FadeIn } from "@/components/articles/FadeIn";
import { Card } from "@/components/ui/card";

const OBSERVATORY_LINKS: Record<
  NonNullable<DisguiseSection["linkNote"]>,
  { label: string; href: string }
> = {
  intimacy: {
    label: "Intimacy — 好奇心の出口",
    href: "https://intimacy.shiroand.io/curiosity-exits",
  },
  "body-meaning": {
    label: "Body Meaning — 身体データの回収",
    href: "https://body-meaning.shiroand.io/ai-first-interpreter-of-the-body",
  },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-lg font-semibold tracking-tight">{children}</h2>
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

function DisguiseSectionBlock({ section }: { section: DisguiseSection }) {
  const link =
    section.linkNote != null ? OBSERVATORY_LINKS[section.linkNote] : null;

  return (
    <section className="mt-12">
      <SectionHeading>{section.title}</SectionHeading>
      {section.intro ? <Prose>{section.intro}</Prose> : null}
      <BulletList items={section.examples} />
      {section.reasons?.length ? (
        <>
          <p className="annotation mb-2">狙われやすい理由</p>
          <BulletList items={section.reasons} />
        </>
      ) : null}
      {section.emphasis?.length ? (
        <ThesisQuote lines={section.emphasis} />
      ) : null}
      {section.quote?.length ? (
        <ThesisQuote lines={section.quote} label="Observation / 観測" />
      ) : null}
      {link ? (
        <FadeIn>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-2.5 text-sm text-[var(--ink-muted)] transition-colors hover:border-[var(--ink-faint)]"
          >
            {link.label}
            <ExternalLink
              className="h-3.5 w-3.5 text-[var(--ink-faint)] group-hover:text-[var(--ink)]"
              aria-hidden
            />
          </a>
        </FadeIn>
      ) : null}
    </section>
  );
}

export function CounterfeitCuriosityArticleDetail({
  article,
}: {
  article: CounterfeitCuriosityArticle;
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

      <CounterfeitCuriosityHero article={article} />

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      <CuriosityExitBranch branch={article.exitBranch} />

      <section className="mt-10">
        <SectionHeading>{article.sectionExitDisguise.title}</SectionHeading>
        {article.sectionExitDisguise.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <div className="my-4 flex flex-wrap gap-1.5">
          {article.sectionExitDisguise.emotions.map((e) => (
            <span
              key={e}
              className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
            >
              {e}
            </span>
          ))}
        </div>
        <ThesisQuote lines={article.sectionExitDisguise.emphasis} />
      </section>

      {article.disguiseSections.map((section) => (
        <DisguiseSectionBlock key={section.number} section={section} />
      ))}

      <section className="mt-12">
        <SectionHeading>好奇心が資産へ変換されるまで</SectionHeading>
        <CuriosityStageFlow
          stages={article.curiosityStages.stages}
          flowLabel={article.curiosityStages.flowLabel}
        />
      </section>

      <section className="mt-12">
        <ServiceComparisonTable
          title={article.serviceComparison.title}
          rows={article.serviceComparison.rows}
        />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.verificationChecklist.title}</SectionHeading>
        <VerificationChecklist
          categories={article.verificationChecklist.categories}
        />
        <ThesisQuote lines={article.verificationChecklist.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>
          好奇心を抑えるのではなく、出口を検証する
        </SectionHeading>
        {article.conclusion.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <FadeIn>
          <Card className="my-4 p-5">
            <p className="annotation mb-3">検証の実践</p>
            <ul className="flex flex-col gap-2">
              {article.conclusion.practices.map((item) => (
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
          </Card>
        </FadeIn>
        <FinalQuestionBlock
          ja={article.conclusion.emphasis}
          en="Curiosity is not dangerous. Entering an unverified exit alone is."
        />
      </section>

      <section className="mt-12">
        <FolklorePatternCard pattern={article.folklorePattern} />
      </section>

      <ConnectedObservatories observatories={article.connectedObservatories} />

      <VerifyExitCta
        title={article.verifyExitCta.title}
        body={article.verifyExitCta.body}
        buttons={article.verifyExitCta.buttons}
      />

      <RelatedObservations
        article={{
          relatedPatternIds: article.relatedPatternIds,
          relatedReportIds: article.relatedReportIds,
          relatedForecastIds: article.relatedForecastIds,
          relatedTrustHookIds: article.relatedTrustHookIds,
          folkloreConnection:
            "詐欺は、好奇心そのものではなく、好奇心が向かう出口を偽装する。恋愛、創作、変身、コミュニティ、AI人格、ビジネス機会——正当な進路に見える接続点から、資産が回収される構造として観測する。",
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
