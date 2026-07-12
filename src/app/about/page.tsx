import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About / この観測所について",
  description:
    "親密性の観測所は、関係の正解や優劣を示すものではなく、親密性の形の変化と制度の人間像を記録するアーカイブです。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <p className="annotation mb-2 text-[var(--accent-violet)]">About</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          この観測所について
        </h1>
      </header>

      <div className="prose-ja flex flex-col gap-8 text-[var(--ink-muted)]">
        <p>
          このサイトは、恋愛や結婚の正解を示すものではない。
        </p>
        <p>関係に優劣を付けるものでもない。</p>
        <p>
          人間同士の関係を否定し、AIやペットとの関係を推奨するものでもない。
        </p>

        <hr className="border-[var(--border-subtle)]" />

        <p>
          社会の中で、親密性の形がどのように変化しているかを記録する。
        </p>
        <p>
          また、制度、サービス、AIがどのような人間像を前提にしているかを観測する。
        </p>
        <p>
          特に、分類からこぼれる関係、名前のない関係、制度が認識できない関係を記録する。
        </p>

        <hr className="border-[var(--border-subtle)]" />

        <section>
          <h2 className="mb-3 text-base font-semibold text-[var(--ink)]">
            Intimacy Observatory
          </h2>
          <p className="text-sm">
            An observation project by SHIRO &amp; Co.
          </p>
          <p className="mt-4 text-sm italic text-[var(--ink-faint)]">
            Relationships may not agree with the categories used to describe
            them.
          </p>
        </section>
      </div>
    </div>
  );
}
