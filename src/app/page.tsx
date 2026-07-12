import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurrentObservationSection } from "@/components/intimacy/CurrentObservationSection";
import { CoreQuestionsSection } from "@/components/intimacy/CoreQuestionsSection";
import { RelationshipMapSection } from "@/components/intimacy/RelationshipMapSection";
import { DimensionsSection } from "@/components/intimacy/DimensionsSection";
import { ValueOfIntimacySection } from "@/components/intimacy/ValueOfIntimacySection";
import { MachineModelSection } from "@/components/intimacy/MachineModelSection";
import { LifeStagesSection } from "@/components/intimacy/LifeStagesSection";
import { InstitutionalGapsSection } from "@/components/intimacy/InstitutionalGapsSection";
import { RiskObservatorySection } from "@/components/intimacy/RiskObservatorySection";
import { LatestObservationsSection } from "@/components/intimacy/LatestObservationsSection";
import { LatestArticlesSection } from "@/components/intimacy/LatestArticlesSection";

export const metadata: Metadata = {
  title: "Intimacy Observatory — 親密性の観測所",
  description:
    "恋愛、結婚、AI、ペット、高齢者、死別、ジェンダー、家族制度。人が誰と、何と、親密な関係を結び始めているのかを記録する観測所。",
  openGraph: {
    title: "Intimacy Observatory — 親密性の観測所",
    description:
      "恋愛、結婚、AI、ペット、高齢者、死別、ジェンダー、家族制度。人が誰と、何と、親密な関係を結び始めているのかを記録する観測所。",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="grid-surface border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="annotation mb-5 text-[var(--accent-violet)]">
            Intimacy Observatory / 親密性の観測所
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Intimacy Observatory
          </h1>
          <p className="mt-2 text-lg text-[var(--ink-muted)]">
            親密性の観測所
          </p>
          <p className="prose-ja mt-8 max-w-2xl text-[var(--ink-muted)]">
            恋愛、結婚、家族、友情、AI、ペット、死者、ケア。
            <br />
            親密性は、もう人間同士の一対一の関係だけでは説明できない。
            <br />
            ここは、人が誰と、何と、どのような関係を結び始めているのかを記録する観測所です。
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--ink-faint)]">
            Relationships are no longer defined only by romance, marriage,
            gender, or even humanity. This observatory records how intimacy is
            being redistributed across people, animals, machines, memories, and
            institutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/observations">
              <Button variant="outline" size="lg">
                Explore Observations
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
            <Link href="/questions">
              <Button variant="outline" size="lg">
                Read the Questions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CurrentObservationSection />
      <CoreQuestionsSection />
      <RelationshipMapSection />
      <DimensionsSection />
      <ValueOfIntimacySection />
      <MachineModelSection />
      <LifeStagesSection />
      <InstitutionalGapsSection />
      <RiskObservatorySection />
      <LatestObservationsSection />
      <LatestArticlesSection />
    </div>
  );
}
