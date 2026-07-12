"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Telescope, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getHeaderNav, getRelatedProjectLinks } from "@/lib/nav";

const NAV = getHeaderNav();
const RELATED = getRelatedProjectLinks();

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--paper-raised)]">
            <Telescope
              className="h-4 w-4 text-[var(--accent-violet)]"
              aria-hidden
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">
              Intimacy Observatory
            </span>
            <span className="mt-0.5 text-[0.7rem] text-[var(--ink-faint)]">
              親密性の観測所
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="メイン">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-sm px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20",
                isActive(item.href)
                  ? "bg-[var(--accent-soft)] font-medium text-[var(--ink)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav
          className="hidden items-center gap-2 md:flex lg:hidden"
          aria-label="関連プロジェクト"
        >
          <a
            href={RELATED[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--ink-faint)] hover:text-[var(--ink)]"
          >
            Projects
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-label="メニューを開閉"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-[var(--border-subtle)] px-5 py-2 lg:hidden"
          aria-label="モバイルメニュー"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-sm px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]/20",
                isActive(item.href)
                  ? "bg-[var(--accent-soft)] font-medium text-[var(--ink)]"
                  : "text-[var(--ink-muted)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
