"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Trash2 } from "lucide-react";
import {
  deleteUserPattern,
  getServerSnapshot,
  getUserPatternsSnapshot,
  subscribeUserPatterns,
} from "@/lib/storage";
import { PatternDetail } from "@/components/PatternDetail";
import { Button } from "@/components/ui/button";

export function UserPatternDetailClient({ id }: { id: string }) {
  const patterns = useSyncExternalStore(
    subscribeUserPatterns,
    getUserPatternsSnapshot,
    getServerSnapshot,
  );
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const pattern = patterns.find((p) => p.id === id) ?? null;

  if (!hydrated) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-16 text-sm text-[var(--ink-faint)]">
        観測記録を読み込んでいます…
      </div>
    );
  }

  if (!pattern) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="text-sm text-[var(--ink-muted)]">
          この観測記録は見つかりませんでした。ブラウザに保存された記録は、この端末でのみ参照できます。
        </p>
        <Link
          href="/patterns"
          className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
        >
          観測一覧へ戻る
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PatternDetail pattern={pattern} />
      <div className="mx-auto max-w-4xl px-5 pb-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            deleteUserPattern(pattern.id);
            window.location.href = "/patterns";
          }}
        >
          <Trash2 className="h-3.5 w-3.5" aria-hidden />
          この観測記録を削除
        </Button>
      </div>
    </div>
  );
}
