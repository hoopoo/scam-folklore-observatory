import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getForecastById, getForecasts } from "@/lib/forecasts";
import { ForecastDetail } from "@/components/ForecastDetail";

type Params = { id: string };

function decodeId(raw: string): string {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export function generateStaticParams() {
  return getForecasts().map((f) => ({ id: f.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const id = decodeId((await params).id);
  const forecast = getForecastById(id);
  return {
    title: forecast
      ? `${forecast.japaneseTitle ?? forecast.title} / 未来詐欺予測`
      : "未来詐欺予測",
  };
}

export default async function ForecastDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const id = decodeId((await params).id);
  const forecast = getForecastById(id);

  if (!forecast) {
    notFound();
  }

  return <ForecastDetail forecast={forecast} />;
}
