import type { Metadata } from "next";
import Link from "next/link";
import { RELATED_PROJECTS } from "@/config/projects";

export const metadata: Metadata = {
  title: "Related Projects / 関連プロジェクト",
};

export default function RelatedProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2">Related Projects</p>
        <h1 className="text-2xl font-semibold tracking-tight">
          関連プロジェクト
        </h1>
      </header>
      <ul className="flex flex-col gap-4">
        {RELATED_PROJECTS.map((project) => (
          <li
            key={project.id}
            className="rounded-sm border border-[var(--border)] p-5"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold underline-offset-4 hover:underline"
            >
              {project.name}
            </a>
            {project.nameJa ? (
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {project.nameJa}
              </p>
            ) : null}
          </li>
        ))}
        <li className="rounded-sm border border-[var(--border)] p-5">
          <Link
            href="/scam-folklore/about"
            className="text-base font-semibold underline-offset-4 hover:underline"
          >
            Scam Folklore Observatory（アーカイブ）
          </Link>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">
            このリポジトリ内の詐欺民俗観測データ
          </p>
          <ul className="mt-3 flex flex-wrap gap-3 text-sm text-[var(--ink-faint)]">
            <li>
              <Link href="/patterns" className="hover:text-[var(--ink)]">
                観測パターン
              </Link>
            </li>
            <li>
              <Link href="/forecasts" className="hover:text-[var(--ink)]">
                未来詐欺予測
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
