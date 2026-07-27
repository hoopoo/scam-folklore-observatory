import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type {
  ForgedRelationshipArticle,
  ObservationSection,
} from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { ForgedRelationshipHero } from "@/components/articles/ForgedRelationshipHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { ScamFolkloreLens } from "@/components/articles/ScamFolkloreLens";
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
    </section>
  );
}

export function ForgedRelationshipArticleDetail({
  article,
}: {
  article: ForgedRelationshipArticle;
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

      <ForgedRelationshipHero article={article} />

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
        items={article.scamPatterns}
        title="Scam Pattern"
        description="関係性が認証情報として機能するときの、繰り返し現れる構造。"
      />

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          Scam Folklore Lens
        </h2>
        <FadeIn>
          <Card className="border-[var(--accent-amber)]/25 bg-[var(--accent-soft)]/20 p-6 md:p-8">
            {article.folkloreLens.map((line) => (
              <p
                key={line.slice(0, 24)}
                className="prose-ja text-[var(--ink-muted)]"
              >
                {line}
              </p>
            ))}
          </Card>
        </FadeIn>
      </section>

      <ThesisQuote
        lines={[article.openQuestion]}
        label="Question / 問い"
      />

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          Closing Statement
        </h2>
        <div className="prose-ja space-y-3 text-[var(--ink-muted)]">
          {article.closingStatement.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
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
