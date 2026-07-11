import type { Metadata } from "next";
import { getSeedPatternById, getSeedPatterns } from "@/lib/data";
import { PatternDetail } from "@/components/PatternDetail";
import { UserPatternDetailClient } from "@/components/UserPatternDetailClient";

type Params = { id: string };

/** ルートパラメータは URL エンコードされて渡される場合があるため安全に復号する。 */
function decodeId(raw: string): string {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export function generateStaticParams() {
  return getSeedPatterns().map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const id = decodeId((await params).id);
  const pattern = getSeedPatternById(id);
  return {
    title: pattern ? pattern.name : "観測記録",
  };
}

export default async function PatternDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const id = decodeId((await params).id);
  const pattern = getSeedPatternById(id);

  if (pattern) {
    return <PatternDetail pattern={pattern} />;
  }

  // seed に無い id は、この端末の localStorage に保存された観測記録として扱う。
  return <UserPatternDetailClient id={id} />;
}
