import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy / プライバシー",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2">Privacy</p>
        <h1 className="text-2xl font-semibold tracking-tight">プライバシー</h1>
      </header>
      <div className="prose-ja text-sm text-[var(--ink-muted)]">
        <p>
          このサイトは静的な観測アーカイブです。アカウント登録や個人情報の収集は行いません。
          アクセス解析を導入する場合は、このページを更新します。
        </p>
      </div>
    </div>
  );
}
