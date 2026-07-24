import { getArticles } from "@/lib/articles";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://scam-folklore-observatory.vercel.app";

export async function GET() {
  const articles = getArticles();

  const items = articles
    .map(
      (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE_URL}/scam-folklore/${a.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/scam-folklore/${a.slug}</guid>
      <description>${escapeXml(a.summary)}</description>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Scam Folklore Observatory — 観測記事</title>
    <link>${SITE_URL}/scam-folklore</link>
    <description>生成AI時代の詐欺構造の変化を記録する長文観測記事</description>
    <language>ja</language>
    <atom:link href="${SITE_URL}/scam-folklore/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
