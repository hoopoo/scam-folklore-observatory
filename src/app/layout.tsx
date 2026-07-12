import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Intimacy Observatory — 親密性の観測所",
    template: "%s | Intimacy Observatory",
  },
  description:
    "恋愛、結婚、AI、ペット、高齢者、死別、ジェンダー、家族制度。人が誰と、何と、親密な関係を結び始めているのかを記録する観測所。",
  openGraph: {
    title: "Intimacy Observatory — 親密性の観測所",
    description:
      "恋愛、結婚、AI、ペット、高齢者、死別、ジェンダー、家族制度。人が誰と、何と、親密な関係を結び始めているのかを記録する観測所。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[var(--paper)] focus:px-3 focus:py-2 focus:ring-2 focus:ring-[var(--ink)]/20"
        >
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
