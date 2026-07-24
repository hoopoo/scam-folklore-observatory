import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { ObservationArticle } from "@/types/article";
import {
  ArticleTags,
  ObservationHero,
} from "@/components/articles/ObservationHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { FraudEvolution } from "@/components/articles/FraudEvolution";
import { RelationshipScamStack } from "@/components/articles/RelationshipScamStack";
import { WarningSigns } from "@/components/articles/WarningSigns";
import { VerificationLayers } from "@/components/articles/VerificationLayers";
import { BeforeAfterComparison } from "@/components/articles/BeforeAfterComparison";
import { OpenQuestions } from "@/components/articles/OpenQuestions";
import { RelatedObservations } from "@/components/articles/RelatedObservations";
import { CrossObservatoryLinks } from "@/components/articles/CrossObservatoryLinks";

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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-lg font-semibold tracking-tight">{children}</h2>
  );
}

function ComparisonColumns({
  entertainment,
  fraud,
}: {
  entertainment: { title: string; items: string[] };
  fraud: { title: string; items: string[] };
}) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5">
        <p className="annotation mb-3">{entertainment.title}</p>
        <BulletList items={entertainment.items} />
      </div>
      <div className="rounded-sm border border-[var(--accent-red)]/20 bg-[var(--risk-critical-bg)]/30 p-5">
        <p className="annotation mb-3 text-[var(--accent-red)]">
          {fraud.title}
        </p>
        <BulletList items={fraud.items} />
      </div>
    </div>
  );
}

export function ObservationArticleDetail({
  article,
}: {
  article: ObservationArticle;
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

      <ObservationHero article={article} />

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      {/* Section 1 */}
      <section className="mt-12">
        <SectionHeading>1. Observation</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.observation.intro}
        </p>
        <BulletList items={article.observation.designedElements} />
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.observation.flow}
        </p>
        <BulletList items={article.observation.beliefItems} />
        <p className="prose-ja text-[var(--ink-muted)]">
          という関係の物語である。
        </p>
      </section>

      {/* Section 2 */}
      <FraudEvolution data={article.fraudEvolution} />

      {/* Section 3 */}
      <RelationshipScamStack layers={article.scamStack} />

      {/* Section 4 */}
      <section className="mt-12">
        <SectionHeading>4. Trust Is Built by Repetition</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.trustRepetition.intro}
        </p>
        <BulletList items={article.trustRepetition.repetitionItems} />
        <p className="prose-ja mt-4 text-[var(--ink-muted)]">
          {article.trustRepetition.bridge}
        </p>
        <ThesisQuote lines={article.trustRepetition.emphasis} />
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.trustRepetition.aiNote}
        </p>
      </section>

      {/* Section 5 */}
      <section className="mt-12">
        <SectionHeading>5. The Scam Does Not Begin with Money</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.scamEntry.intro}
        </p>
        <BulletList items={article.scamEntry.entryPoints} />
        <p className="prose-ja mt-4 text-[var(--ink-muted)]">
          {article.scamEntry.bridge}
        </p>
        <ThesisQuote lines={article.scamEntry.emphasis} />
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.scamEntry.securityNote}
        </p>
      </section>

      {/* Section 6 */}
      <section className="mt-12">
        <SectionHeading>6. AI Does Not Need to Do Everything</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.hybridOperation.intro}
        </p>
        <BulletList items={article.hybridOperation.hybridItems} />
        <p className="prose-ja mt-4 text-[var(--ink-muted)]">
          {article.hybridOperation.bridge}
        </p>
        <BulletList items={article.hybridOperation.realityItems} />
        <p className="prose-ja text-[var(--ink-muted)]">
          からなるチームと接触している可能性がある。
        </p>
        <ThesisQuote lines={article.hybridOperation.emphasis} />
      </section>

      {/* Section 7 */}
      <section className="mt-12">
        <SectionHeading>
          7. The Boundary Between Entertainment and Fraud
        </SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.entertainmentBoundary.intro}
        </p>
        <ComparisonColumns
          entertainment={article.entertainmentBoundary.entertainment}
          fraud={article.entertainmentBoundary.fraud}
        />
        <ThesisQuote lines={article.entertainmentBoundary.emphasis} />
      </section>

      {/* Section 8 */}
      <section className="mt-12">
        <SectionHeading>8. Emotional Data Becomes Attack Surface</SectionHeading>
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.emotionalData.intro}
        </p>
        <BulletList items={article.emotionalData.dataItems} />
        <ThesisQuote lines={article.emotionalData.emphasis} />
        <p className="prose-ja text-[var(--ink-muted)]">
          {article.emotionalData.privacyNote}
        </p>
      </section>

      {/* Section 9 */}
      <WarningSigns
        categories={article.warningSigns}
        disclaimer={article.warningDisclaimer}
      />

      {/* Section 10 */}
      <VerificationLayers items={article.verificationLayers} />

      {/* Section 11 */}
      <BeforeAfterComparison
        before={article.beforeAfter.before}
        after={article.beforeAfter.after}
      />

      {/* Section 12 */}
      <OpenQuestions
        questions={article.openQuestions}
        emphasized={article.emphasizedOpenQuestion}
      />

      {/* Section 13 */}
      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <SectionHeading>13. Closing Statement</SectionHeading>
        {article.closingStatement.map((para, i) => (
          <p key={i} className="prose-ja mb-4 text-[var(--ink-muted)]">
            {para}
          </p>
        ))}
        <div className="mt-6 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-8">
          {article.closingConclusion.map((line, i) => (
            <p
              key={i}
              className="text-lg font-medium leading-relaxed tracking-tight md:text-xl"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      <RelatedObservations article={article} />
      <CrossObservatoryLinks />

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
