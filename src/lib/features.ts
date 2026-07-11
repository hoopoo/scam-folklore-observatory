/**
 * Public 版（Vercel 本番）では Submit を非公開にする。
 * ローカル開発で Submit を有効にする場合は .env.local に
 * NEXT_PUBLIC_ENABLE_SUBMIT=true を設定する。
 */
export function isSubmitEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_SUBMIT === "true";
}
