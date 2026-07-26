import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { CounterfeitIntimacyArticle } from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { CounterfeitIntimacyHero } from "@/components/articles/CounterfeitIntimacyHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { PersonaLayerStack } from "@/components/articles/PersonaLayerStack";
import { RomanceScamTimeline } from "@/components/articles/RomanceScamTimeline";
import { PersonNetworkDiagram } from "@/components/articles/PersonNetworkDiagram";
import { BeforeAfterComparison } from "@/components/articles/BeforeAfterComparison";
import { VerificationLayers } from "@/components/articles/VerificationLayers";
import { FinalQuestionBlock } from "@/components/articles/FinalQuestionBlock";
import { RelatedObservations } from "@/components/articles/RelatedObservations";
import { RelatedFolkloreSection } from "@/components/articles/RelatedFolkloreSection";
import { FadeIn } from "@/components/articles/FadeIn";
import { Card } from "@/components/ui/card";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-lg font-semibold tracking-tight">{children}</h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="prose-ja mb-4 text-[var(--ink-muted)]">{children}</p>;
}

function TrustCards({
  cards,
}: {
  cards: CounterfeitIntimacyArticle["communityTrust"]["cards"];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, i) => (
        <FadeIn key={card.id} delay={i * 60}>
          <Card className="flex h-full flex-col p-5">
            <p className="annotation mb-2">{card.title}</p>
            <p className="prose-ja mb-3 text-sm text-[var(--ink-muted)]">
              {card.body}
            </p>
            <p className="annotation mb-2">保証するもの</p>
            <ul className="flex flex-wrap gap-1.5">
              {card.guarantees.map((g) => (
                <li
                  key={g}
                  className="rounded-sm border border-[var(--border-subtle)] px-2 py-0.5 text-xs text-[var(--ink-muted)]"
                >
                  {g}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}

function LossGrid({
  cards,
}: {
  cards: CounterfeitIntimacyArticle["losses"]["cards"];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card, i) => (
        <FadeIn key={card.id} delay={i * 50}>
          <Card className="h-full p-5">
            <p className="annotation mb-1">{card.title}</p>
            <p className="text-sm text-[var(--ink-muted)]">
              {card.description}
            </p>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}

function AiOpCards({
  cards,
}: {
  cards: CounterfeitIntimacyArticle["aiPersonaOps"]["cards"];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map((card, i) => (
        <FadeIn key={card.id} delay={i * 50}>
          <Card className="p-5">
            <p className="annotation mb-1">{card.title}</p>
            <p className="text-sm text-[var(--ink-muted)]">
              {card.description}
            </p>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}

function BarrierCards({
  cards,
}: {
  cards: CounterfeitIntimacyArticle["victimBarriers"]["cards"];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map((card, i) => (
        <FadeIn key={card.id} delay={i * 50}>
          <Card className="p-5">
            <p className="annotation mb-1">{card.title}</p>
            <p className="prose-ja text-sm text-[var(--ink-muted)]">
              {card.description}
            </p>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}

function PrivacyTension({
  data,
}: {
  data: CounterfeitIntimacyArticle["privacyTension"];
}) {
  return (
    <FadeIn>
      <div className="grid gap-4 md:grid-cols-2">
        {[data.verification, data.privacy].map((col) => (
          <Card key={col.title} className="p-5">
            <p className="annotation mb-3">{col.title}</p>
            <ul className="mb-4 flex flex-col gap-1.5">
              {col.items.map((item) => (
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
            <dl className="space-y-2 border-t border-[var(--border-subtle)] pt-3 text-sm">
              <div>
                <dt className="annotation mb-0.5">利点</dt>
                <dd className="text-[var(--ink-muted)]">{col.benefit}</dd>
              </div>
              <div>
                <dt className="annotation mb-0.5">リスク</dt>
                <dd className="text-[var(--ink-muted)]">{col.risk}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
      <blockquote className="prose-ja mt-6 text-center font-medium text-[var(--ink-muted)]">
        {data.conclusion.map((line, i) => (
          <span key={i}>
            {line}
            {i < data.conclusion.length - 1 ? <br /> : null}
          </span>
        ))}
      </blockquote>
    </FadeIn>
  );
}

export function CounterfeitIntimacyArticleDetail({
  article,
}: {
  article: CounterfeitIntimacyArticle;
}) {
  const verificationItems = article.verificationLayers.layers.map((l) => ({
    id: l.id,
    title: l.title,
    titleJa: l.titleJa,
    question: l.description,
  }));

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <Link
        href="/scam-folklore"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        観測記事一覧へ戻る
      </Link>

      <CounterfeitIntimacyHero article={article} />

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      <section className="mt-10">
        <SectionHeading>{article.opening.title}</SectionHeading>
        {article.opening.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <ThesisQuote lines={article.opening.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.communityTrust.title}</SectionHeading>
        {article.communityTrust.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <TrustCards cards={article.communityTrust.cards} />
        <ThesisQuote lines={article.communityTrust.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.personaComposition.title}</SectionHeading>
        {article.personaComposition.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <PersonaLayerStack layers={article.personaComposition.layers} />
        <ThesisQuote lines={article.personaComposition.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.romanceProgression.title}</SectionHeading>
        <Prose>{article.romanceProgression.intro}</Prose>
        <RomanceScamTimeline stages={article.romanceProgression.stages} />
        <ThesisQuote lines={article.romanceProgression.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.losses.title}</SectionHeading>
        <Prose>{article.losses.intro}</Prose>
        <LossGrid cards={article.losses.cards} />
        <ThesisQuote lines={article.losses.emphasis} label="Observation / 観測" />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.aiPersonaOps.title}</SectionHeading>
        {article.aiPersonaOps.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <AiOpCards cards={article.aiPersonaOps.cards} />
        <ThesisQuote lines={article.aiPersonaOps.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.deepfakeEvidence.title}</SectionHeading>
        {article.deepfakeEvidence.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <BeforeAfterComparison
          before={{
            title: "Before",
            items: [
              ...article.deepfakeEvidence.before.items,
              `→ ${article.deepfakeEvidence.before.conclusion}`,
            ],
          }}
          after={{
            title: "After",
            items: [
              ...article.deepfakeEvidence.after.items,
              `→ ${article.deepfakeEvidence.after.conclusion}`,
            ],
          }}
        />
        <ThesisQuote lines={article.deepfakeEvidence.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.supportingNetwork.title}</SectionHeading>
        {article.supportingNetwork.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <PersonNetworkDiagram
          centerLabel={article.supportingNetwork.centerLabel}
          nodes={article.supportingNetwork.nodes}
        />
        <ThesisQuote lines={article.supportingNetwork.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.victimBarriers.title}</SectionHeading>
        {article.victimBarriers.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <BarrierCards cards={article.victimBarriers.cards} />
        <ThesisQuote lines={article.victimBarriers.emphasis} />
      </section>

      <section className="mt-12">
        <SectionHeading>{article.verificationLayers.title}</SectionHeading>
        {article.verificationLayers.paragraphs.map((p) => (
          <Prose key={p.slice(0, 24)}>{p}</Prose>
        ))}
        <VerificationLayers items={verificationItems} compact />
        <p className="mt-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4 text-sm text-[var(--ink-muted)]">
          {article.verificationLayers.note}
        </p>
      </section>

      <section className="mt-12">
        <SectionHeading>{article.privacyTension.title}</SectionHeading>
        <PrivacyTension data={article.privacyTension} />
      </section>

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Questions</h2>
        <ul className="flex flex-col gap-3">
          {article.questions.map((q, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4 text-sm text-[var(--ink-muted)]"
            >
              <span className="annotation shrink-0 text-[var(--ink-faint)]">
                Q{i + 1}
              </span>
              {q}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <p className="annotation mb-4">Final Observation</p>
        <FinalQuestionBlock
          ja={article.finalObservation.ja}
          en={article.finalObservation.en}
        />
      </section>

      <RelatedObservations
        article={{
          relatedPatternIds: article.relatedPatternIds,
          relatedReportIds: article.relatedReportIds,
          relatedForecastIds: article.relatedForecastIds,
          relatedTrustHookIds: article.relatedTrustHookIds,
          folkloreConnection:
            "恋愛や親密性を装う詐欺は、金銭を盗む前に、信用・時間・感情・判断力を奪う。プラットフォーム時代の親密性に内在する構造的リスクとして観測する。",
        }}
      />

      <RelatedFolkloreSection
        links={article.relatedFolklore}
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
