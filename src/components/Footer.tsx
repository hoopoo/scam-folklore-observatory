import Link from "next/link";
import { getFooterNav, getRelatedProjectLinks } from "@/lib/nav";

export function Footer() {
  const footerNav = getFooterNav();
  const relatedProjects = getRelatedProjectLinks();

  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--paper-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold tracking-tight">
              Intimacy Observatory
            </p>
            <p className="mt-1 text-xs text-[var(--ink-faint)]">
              An observation project by SHIRO &amp; Co.
            </p>
            <p className="mt-3 text-xs italic text-[var(--ink-muted)]">
              Relationships may not agree with the categories used to describe
              them.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <nav
              className="flex flex-col gap-2 text-sm text-[var(--ink-muted)]"
              aria-label="フッターナビゲーション"
            >
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

            <nav
              className="flex flex-col gap-2 text-sm text-[var(--ink-muted)]"
              aria-label="関連プロジェクト"
            >
              <span className="annotation mb-1">Related Projects</span>
              {relatedProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--ink)]"
                >
                  {project.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-8 text-[0.7rem] text-[var(--ink-faint)]">
          © {new Date().getFullYear()} Intimacy Observatory · SHIRO &amp; Co.
        </p>
      </div>
    </footer>
  );
}
