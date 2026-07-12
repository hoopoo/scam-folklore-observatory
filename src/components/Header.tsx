"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Radar, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getHeaderNav } from "@/lib/nav";

const NAV = getHeaderNav();

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--paper-raised)]">
            <Radar className="h-4 w-4 text-[var(--accent-red)]" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">
              Scam Folklore Observatory
            </span>
            <span className="mt-0.5 text-[0.7rem] text-[var(--ink-faint)]">
              詐欺民俗観測所
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-sm px-3 py-1.5 text-sm transition-colors",
                isActive(item.href)
                  ? "bg-[var(--accent-soft)] font-medium text-[var(--ink)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="メニューを開閉"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[var(--border-subtle)] px-5 py-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-sm px-3 py-2 text-sm",
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
