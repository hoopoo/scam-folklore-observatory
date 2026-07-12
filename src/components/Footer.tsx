import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { getFooterNav } from "@/lib/nav";

export function Footer() {
  const footerNav = getFooterNav();

  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--paper-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold tracking-tight">
              Scam Folklore Observatory
            </p>
            <p className="mt-1 text-xs text-[var(--ink-faint)]">
              詐欺民俗観測所 — AI時代に再包装される古典的詐欺の構造を観測する研究用ダッシュボード。
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)]">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex items-start gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)] p-4">
          <ShieldAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-amber)]"
            aria-hidden
          />
          <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
            このサイトは研究・教育・注意喚起を目的としています。詐欺行為、なりすまし、フィッシング、無断収集、違法行為を支援するものではありません。
          </p>
        </div>

        <p className="mt-6 text-[0.7rem] text-[var(--ink-faint)]">
          © {new Date().getFullYear()} Scam Folklore Observatory
        </p>
      </div>
    </footer>
  );
}
