import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/articles";

export const alt = "Scam Folklore Observation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  const title = article?.metadata.ogTitle ?? "Scam Folklore";
  const subtitle = article?.metadata.ogDescription ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#f6f5f2",
          color: "#232220",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 8,
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9a3b32",
          }}
        >
          Scam Folklore Observatory
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              width: 480,
              height: 4,
              background: "#dcd8ce",
            }}
          />
          <div
            style={{
              fontSize: 42,
              fontWeight: 600,
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.5,
                color: "#57544e",
                maxWidth: 800,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            color: "#8b877e",
          }}
        >
          <span>Observation Article</span>
          <span>2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
