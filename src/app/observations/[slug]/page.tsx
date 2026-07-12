import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getAllObservationSlugs,
  getObservationBySlug,
} from "@/lib/observations";
import { ObservationDetail } from "@/components/intimacy/ObservationDetail";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllObservationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const observation = getObservationBySlug(slug);
  if (!observation) return { title: "Not Found" };
  return {
    title: `${observation.titleJa} / ${observation.title}`,
    description: observation.summaryJa,
    openGraph: {
      title: observation.titleJa,
      description: observation.summaryJa,
    },
  };
}

export default async function ObservationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const observation = getObservationBySlug(slug);
  if (!observation) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <Link
        href="/observations"
        className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        観測一覧に戻る
      </Link>
      <ObservationDetail observation={observation} />
    </div>
  );
}
