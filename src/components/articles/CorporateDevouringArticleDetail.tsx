import Link from "next/link";
import { AlertTriangle, ArrowLeft, FileText, HelpCircle, Shield } from "lucide-react";
import type {
  CorporateDevouringMaArticle,
  WarningSignalTier,
} from "@/types/article";
import { ArticleTags } from "@/components/articles/ArticleHeader";
import { CorporateDevouringHero } from "@/components/articles/CorporateDevouringHero";
import { ThesisQuote } from "@/components/articles/ThesisQuote";
import { ArticleComparison } from "@/components/articles/ArticleComparison";
import { VerificationChecklist } from "@/components/articles/CuriosityArticleParts";
import { ConnectedObservatories } from "@/components/articles/ConnectedObservatories";
import { RelatedObservations } from "@/components/articles/RelatedObservations";
import { RelatedFolkloreSection } from "@/components/articles/RelatedFolkloreSection";
import { FadeIn } from "@/components/articles/FadeIn";
import { Card } from "@/components/ui/card";
import { riskLevelStyle } from "@/lib/display";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://scam-folklore-observatory.vercel.app";

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-4">
      <p className="annotation mb-1">{number}</p>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
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

function ObservationSummary({
  cards,
}: {
  cards: CorporateDevouringMaArticle["observationSummary"];
}) {
  return (
    <section className="mt-10" aria-labelledby="observation-summary">
      <h2 id="observation-summary" className="mb-4 text-lg font-semibold tracking-tight">
        Observation Summary
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, i) => (
          <FadeIn key={card.id} delay={i * 50}>
            <Card className="h-full p-5">
              <p className="annotation mb-2 text-[var(--accent-amber)]">
                {card.title}
              </p>
              <p className="prose-ja text-sm text-[var(--ink-muted)]">
                {card.body}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function BodyMetaphorTable({
  rows,
}: {
  rows: CorporateDevouringMaArticle["section04"]["bodyMetaphor"];
}) {
  return (
    <FadeIn>
      <div className="my-6 hidden overflow-x-auto rounded-sm border border-[var(--border)] sm:block">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--paper-raised)]">
              <th className="annotation px-4 py-3 text-left">Corporate Element</th>
              <th className="annotation px-4 py-3 text-left text-[var(--accent-amber)]">
                Body Metaphor
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.element}
                className="border-b border-[var(--border-subtle)] last:border-b-0"
              >
                <td className="px-4 py-3 text-[var(--ink-muted)]">{row.element}</td>
                <td className="px-4 py-3 font-medium text-[var(--ink)]">
                  {row.metaphor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-6 grid gap-3 sm:hidden">
        {rows.map((row) => (
          <Card key={`m-${row.element}`} className="p-4">
            <p className="annotation mb-1">{row.element}</p>
            <p className="text-sm font-medium">{row.metaphor}</p>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
}

function WarningSignalTiers({
  tiers,
  disclaimer,
}: {
  tiers: WarningSignalTier[];
  disclaimer: string;
}) {
  const styleMap = {
    High: riskLevelStyle.High,
    Medium: riskLevelStyle.Medium,
    Context: riskLevelStyle.Low,
  } as const;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {tiers.map((tier, i) => {
        const style = styleMap[tier.level];
        return (
          <FadeIn key={tier.id} delay={i * 50}>
            <Card className={`flex h-full flex-col border ${style.border} p-5`}>
              <div className="mb-3 flex items-center gap-2">
                <AlertTriangle
                  className={`h-3.5 w-3.5 ${style.text}`}
                  aria-hidden
                />
                <div>
                  <p className={`annotation ${style.text}`}>{tier.title}</p>
                  <p className="text-sm font-semibold">{tier.titleJa}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-1.5">
                {tier.signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                  >
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${style.dot}`}
                      aria-hidden
                    />
                    {sign}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        );
      })}
      <p className="lg:col-span-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] p-4 text-sm text-[var(--ink-muted)]">
        {disclaimer}
      </p>
    </div>
  );
}

function ClassicalVsInstitutionalTable({
  rows,
}: {
  rows: CorporateDevouringMaArticle["section10"]["rows"];
}) {
  return (
    <FadeIn>
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[540px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="annotation py-2 pr-4 text-left">観点</th>
              <th className="annotation py-2 px-3 text-left">Classical Scam</th>
              <th className="annotation py-2 pl-3 text-left text-[var(--accent-amber)]">
                Institutional Scam
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.aspect}
                className="border-b border-[var(--border-subtle)]"
              >
                <td className="py-3 pr-4 align-top">
                  <span className="annotation block">{row.aspect}</span>
                  <span className="text-[var(--ink-muted)]">{row.aspectJa}</span>
                </td>
                <td className="py-3 px-3 align-top text-[var(--ink-muted)]">
                  {row.legitimate}
                </td>
                <td className="py-3 pl-3 align-top text-[var(--ink-muted)]">
                  {row.fraudulent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 sm:hidden">
        {rows.map((row) => (
          <Card key={`cmp-${row.aspect}`} className="p-4">
            <p className="annotation mb-2">{row.aspectJa}</p>
            <p className="text-xs text-[var(--ink-faint)]">Classical</p>
            <p className="mb-2 text-sm text-[var(--ink-muted)]">
              {row.legitimate}
            </p>
            <p className="text-xs text-[var(--accent-amber)]">Institutional</p>
            <p className="text-sm text-[var(--ink-muted)]">{row.fraudulent}</p>
          </Card>
        ))}
      </div>
    </FadeIn>
  );
}

function CollapseTimeline({
  stages,
}: {
  stages: CorporateDevouringMaArticle["section11"]["stages"];
}) {
  return (
    <ol className="relative flex flex-col gap-0 border-l border-[var(--border)] pl-6">
      {stages.map((stage, i) => (
        <FadeIn key={stage.id} delay={i * 60}>
          <li className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[1.625rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper-raised)] text-[10px] font-semibold text-[var(--accent-amber)]"
              aria-hidden
            >
              {stage.number}
            </span>
            <Card className="p-5">
              <p className="annotation mb-1">{stage.title}</p>
              <p className="prose-ja text-sm text-[var(--ink-muted)]">
                {stage.body}
              </p>
            </Card>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

function CorporateBodyPatternCard({
  pattern,
}: {
  pattern: CorporateDevouringMaArticle["folklorePattern"];
}) {
  return (
    <FadeIn>
      <Card className="border-[var(--accent-amber)]/25 bg-[var(--accent-soft)]/20 p-6 md:p-8">
        <p className="annotation mb-1">Folklore Pattern</p>
        <h3 className="text-lg font-semibold tracking-tight">
          {pattern.patternName}
          <span className="ml-2 text-sm font-normal text-[var(--ink-muted)]">
            — {pattern.japaneseName}
          </span>
        </h3>
        <div className="prose-ja mt-3 space-y-3 text-sm text-[var(--ink-muted)]">
          {pattern.description.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-6">
          <p className="annotation mb-3">Pattern Sequence</p>
          <ol className="flex flex-col gap-2">
            {pattern.sequence.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-3 py-2 text-sm text-[var(--ink-muted)]"
              >
                <span className="annotation shrink-0 text-[var(--accent-amber)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <ThesisQuote lines={pattern.quote} label="Pattern Quote" />
      </Card>
    </FadeIn>
  );
}

function ObservationMatrix({
  rows,
}: {
  rows: CorporateDevouringMaArticle["observationMatrix"];
}) {
  return (
    <section className="mt-12 border-t border-[var(--border)] pt-10">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">
        Observation Matrix
      </h2>
      <div className="hidden overflow-x-auto rounded-sm border border-[var(--border)] sm:block">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--paper-raised)]">
              <th className="annotation px-4 py-3 text-left">Dimension</th>
              <th className="annotation px-4 py-3 text-left">Observation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.dimension}
                className="border-b border-[var(--border-subtle)] last:border-b-0"
              >
                <td className="px-4 py-3 font-medium text-[var(--ink)]">
                  {row.dimension}
                </td>
                <td className="px-4 py-3 text-[var(--ink-muted)]">
                  {row.observation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 sm:hidden">
        {rows.map((row) => (
          <Card key={`mx-${row.dimension}`} className="p-4">
            <p className="annotation mb-1">{row.dimension}</p>
            <p className="text-sm text-[var(--ink-muted)]">{row.observation}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ArticleJsonLd({ article }: { article: CorporateDevouringMaArticle }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metadata.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "ja",
    author: {
      "@type": "Organization",
      name: "Scam Folklore Observatory",
    },
    publisher: {
      "@type": "Organization",
      name: "Scam Folklore Observatory",
    },
    mainEntityOfPage: `${SITE_URL}/scam-folklore/${article.slug}`,
    keywords: [...article.tags, ...article.tagsJa].join(", "),
    citation: article.sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.title,
      publisher: s.publisher,
      ...(s.url ? { url: s.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function CorporateDevouringArticleDetail({
  article,
}: {
  article: CorporateDevouringMaArticle;
}) {
  const { section01: s1, section02: s2, section03: s3 } = article;
  const { section04: s4, section05: s5, section06: s6 } = article;
  const { section07: s7, section08: s8, section09: s9 } = article;
  const { section10: s10, section11: s11, section12: s12 } = article;

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <ArticleJsonLd article={article} />

      <Link
        href="/scam-folklore"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        観測記事一覧へ戻る
      </Link>

      <CorporateDevouringHero article={article} />

      <div className="mt-6">
        <ArticleTags tags={article.tags} tagsJa={article.tagsJa} />
      </div>

      <ObservationSummary cards={article.observationSummary} />

      {/* 01 */}
      <section className="mt-12">
        <SectionHeading number="01" title={s1.title} />
        {s1.paragraphs.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <ThesisQuote lines={s1.pullQuote} label="Pull Quote" />
      </section>

      {/* 02 */}
      <section className="mt-12">
        <SectionHeading number="02" title={s2.title} />
        {s2.paragraphs.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <FadeIn>
          <aside className="my-6 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-5 md:p-6">
            <p className="annotation mb-2 text-[var(--accent-amber)]">
              Highlight Block
            </p>
            <h3 className="mb-3 text-base font-semibold tracking-tight">
              {s2.highlight.title}
            </h3>
            <div className="prose-ja space-y-3 text-sm text-[var(--ink-muted)]">
              {s2.highlight.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </aside>
        </FadeIn>
      </section>

      {/* 03 */}
      <section className="mt-12">
        <SectionHeading number="03" title={s3.title} />
        {s3.intro.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <BulletList items={s3.classicalItems} />
        <Prose>{s3.bridge[0]}</Prose>
        <BulletList items={s3.modernItems} />
        {s3.bridge.slice(1).map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <FadeIn>
          <Card className="mt-6 border-[var(--accent-amber)]/30 bg-[var(--accent-soft)]/40 p-5 md:p-6">
            <p className="annotation mb-2 text-[var(--accent-amber)]">
              Key Definition
            </p>
            <h3 className="mb-3 text-base font-semibold tracking-tight">
              {s3.keyDefinition.title}
            </h3>
            <div className="prose-ja space-y-2 text-sm text-[var(--ink-muted)]">
              {s3.keyDefinition.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* 04 */}
      <section className="mt-12">
        <SectionHeading number="04" title={s4.title} />
        {s4.intro.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <BodyMetaphorTable rows={s4.bodyMetaphor} />
        {s4.paragraphs.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <ThesisQuote lines={s4.pullQuote} label="Pull Quote" />
      </section>

      {/* 05 */}
      <section className="mt-12">
        <SectionHeading number="05" title={s5.title} />
        {s5.intro.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <BulletList items={s5.affirmativeTerms} />
        {s5.bridge.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <div className="mt-6">
          <ArticleComparison
            left={s5.contrast.left}
            center={s5.contrast.center}
            right={s5.contrast.right}
            variant="highlight-right"
          />
        </div>
      </section>

      {/* 06 */}
      <section className="mt-12">
        <SectionHeading number="06" title={s6.title} />
        {s6.paragraphs.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <BulletList items={s6.tensions} />
        {s6.questions.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <ThesisQuote lines={s6.riskStatement} label="Risk Statement" />
      </section>

      {/* 07 */}
      <section className="mt-12">
        <SectionHeading number="07" title={s7.title} />
        {s7.intro.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <div className="mt-6">
          <VerificationChecklist categories={s7.checklists} />
        </div>
      </section>

      {/* 08 */}
      <section className="mt-12">
        <SectionHeading number="08" title={s8.title} />
        {s8.intro.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <BulletList items={s8.trustAssets} />
        {s8.bridge.map((p) => (
          <Prose key={p.slice(0, 28)}>{p}</Prose>
        ))}
        <aside className="my-8 rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-6 md:p-10">
          {s8.largeQuote.map((line) => (
            <p
              key={line}
              className="prose-ja text-xl font-medium leading-relaxed tracking-tight md:text-2xl"
            >
              {line}
            </p>
          ))}
        </aside>
      </section>

      {/* 09 */}
      <section className="mt-12">
        <SectionHeading number="09" title={s9.title} />
        <Prose>{s9.intro}</Prose>
        <WarningSignalTiers tiers={s9.tiers} disclaimer={s9.disclaimer} />
      </section>

      {/* 10 */}
      <section className="mt-12">
        <SectionHeading number="10" title={s10.title} />
        <ClassicalVsInstitutionalTable rows={s10.rows} />
        <ThesisQuote lines={s10.closingQuote} label="Observation / 観測" />
      </section>

      {/* 11 */}
      <section className="mt-12">
        <SectionHeading number="11" title={s11.title} />
        <CollapseTimeline stages={s11.stages} />
        <ThesisQuote lines={s11.emphasis} label="Emphasis" />
      </section>

      {/* 12 */}
      <section className="mt-12">
        <SectionHeading number="12" title={s12.title} />
        <div className="grid gap-4 sm:grid-cols-2">
          {s12.layers.map((layer, i) => (
            <FadeIn key={layer.id} delay={i * 40}>
              <Card className="flex h-full items-start gap-3 p-5">
                <Shield
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-amber)]"
                  aria-hidden
                />
                <div>
                  <p className="annotation mb-1">{layer.title}</p>
                  <p className="prose-ja text-sm text-[var(--ink-muted)]">
                    {layer.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <ObservationMatrix rows={article.observationMatrix} />

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-6 text-lg font-semibold tracking-tight">
          Folklore Pattern
        </h2>
        <CorporateBodyPatternCard pattern={article.folklorePattern} />
      </section>

      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-tight">
          <HelpCircle className="h-4 w-4 text-[var(--ink-faint)]" aria-hidden />
          Protocol Questions
        </h2>
        <ul className="flex flex-col gap-3">
          {article.protocolQuestions.map((q, i) => (
            <li
              key={q}
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

      <RelatedFolkloreSection
        links={[]}
        relatedArticleSlugs={article.relatedArticleSlugs}
      />

      <ConnectedObservatories
        observatories={article.connectedObservatories}
        heading="Cross-Site Connections"
        description="他の SHIRO & Co. プロジェクトへの接続。"
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

      <footer className="mt-12 border-t border-[var(--border)] pt-8">
        <div className="flex items-start gap-2 text-sm text-[var(--ink-muted)]">
          <FileText
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ink-faint)]"
            aria-hidden
          />
          <div className="w-full">
            <p className="annotation mb-3">Sources / 出典・注記</p>
            <ul className="mb-6 flex flex-col gap-3">
              {article.sources.map((source) => (
                <li
                  key={source.title}
                  className="rounded-sm border border-[var(--border-subtle)] bg-[var(--paper-raised)] px-4 py-3"
                >
                  <p className="font-medium text-[var(--ink)]">{source.title}</p>
                  <p className="mt-0.5 text-xs text-[var(--ink-faint)]">
                    {source.publisher}
                  </p>
                  {source.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs text-[var(--accent-amber)] hover:underline"
                    >
                      {source.url}
                    </a>
                  ) : (
                    <p className="annotation mt-2 text-[var(--ink-faint)]">
                      URL required / 要確認
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <p className="prose-ja rounded-sm border border-[var(--border)] bg-[var(--accent-soft)]/30 p-4 text-sm">
              {article.disclaimer}
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
