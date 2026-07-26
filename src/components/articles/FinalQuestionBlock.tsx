import { FadeIn } from "@/components/articles/FadeIn";

export function FinalQuestionBlock({
  ja,
  en,
}: {
  ja: string[];
  en: string;
}) {
  return (
    <FadeIn>
      <section className="mt-12 border-t border-[var(--border)] pt-10">
        <div className="rounded-sm border border-[var(--border)] bg-[var(--paper-raised)] p-8 md:p-12">
          {ja.map((line, i) => (
            <p
              key={i}
              className="text-xl font-medium leading-relaxed tracking-tight md:text-2xl"
            >
              {line}
            </p>
          ))}
          <p className="mt-6 text-sm italic text-[var(--ink-faint)]">{en}</p>
        </div>
      </section>
    </FadeIn>
  );
}
