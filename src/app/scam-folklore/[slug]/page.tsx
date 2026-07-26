import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticles,
  isCounterfeitIntimacyArticle,
  isRelationshipFraudArticle,
  isTrustedAiPersonaArticle,
} from "@/lib/articles";
import { ObservationArticleDetail } from "@/components/articles/ObservationArticleDetail";
import { TrustedAiPersonaArticleDetail } from "@/components/articles/TrustedAiPersonaArticleDetail";
import { CounterfeitIntimacyArticleDetail } from "@/components/articles/CounterfeitIntimacyArticleDetail";

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

  const title =
    article.metadata.pageTitle ?? article.metadata.ogTitle;

  return {
    title,
    description: article.metadata.description,
    openGraph: {
      title: article.metadata.ogTitle,
      description: article.metadata.ogDescription,
      type: "article",
      publishedTime: article.publishedAt,
      locale: "ja_JP",
      images: [
        {
          url: `${SITE_URL}/scam-folklore/${article.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.metadata.ogTitle,
        },
      ],
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

  if (isCounterfeitIntimacyArticle(article)) {
    return <CounterfeitIntimacyArticleDetail article={article} />;
  }

  if (isTrustedAiPersonaArticle(article)) {
    return <TrustedAiPersonaArticleDetail article={article} />;
  }

  if (isRelationshipFraudArticle(article)) {
    return <ObservationArticleDetail article={article} />;
  }

  notFound();
}
