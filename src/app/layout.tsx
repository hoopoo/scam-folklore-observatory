import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Scam Folklore Observatory / 詐欺民俗観測所",
    template: "%s | Scam Folklore Observatory",
  },
  description:
    "AI時代に再包装される古典的詐欺の構造を、研究・教育・注意喚起のために観測・分類・記録する研究用ダッシュボード。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
