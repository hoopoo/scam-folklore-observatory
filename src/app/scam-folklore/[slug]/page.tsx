import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/articles";
import { ObservationArticleDetail } from "@/components/articles/ObservationArticleDetail";

type Params = { slug: string };

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://scam-folklore-observatory.vercel.app";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "観測記事" };
  }

  return {
    title: article.metadata.ogTitle,
    description: article.metadata.description,
    openGraph: {
      title: article.metadata.ogTitle,
      description: article.metadata.ogDescription,
      type: "article",
      publishedTime: article.publishedAt,
      locale: "ja_JP",
    },
    alternates: {
      canonical: `${SITE_URL}/scam-folklore/${article.slug}`,
    },
  };
}

export default async function ObservationArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ObservationArticleDetail article={article} />;
}
