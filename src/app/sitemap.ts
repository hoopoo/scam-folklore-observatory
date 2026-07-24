import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { getForecasts } from "@/lib/forecasts";
import { getSeedPatterns } from "@/lib/data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://scam-folklore-observatory.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/patterns",
    "/reports",
    "/forecasts",
    "/trust-hooks",
    "/taxonomy",
    "/about",
    "/scam-folklore",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const patternRoutes = getSeedPatterns().map((p) => ({
    url: `${SITE_URL}/patterns/${p.id}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const forecastRoutes = getForecasts().map((f) => ({
    url: `${SITE_URL}/forecasts/${f.id}`,
    lastModified: new Date(f.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = getArticles().map((a) => ({
    url: `${SITE_URL}/scam-folklore/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...patternRoutes, ...forecastRoutes, ...articleRoutes];
}
