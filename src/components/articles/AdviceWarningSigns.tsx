import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/articles/FadeIn";

export function AdviceWarningSigns({
  title,
  titleJa,
  signs,
  heading = "Warning Signs",
}: {
  title: string;
  titleJa: string;
  signs: string[];
  heading?: string;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        {heading}
      </h2>
      <p className="annotation mb-6">
        {title} / {titleJa}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {signs.map((sign, i) => (
          <FadeIn key={sign} delay={i * 30}>
            <Card className="p-4">
              <CardHeader className="p-0">
                <CardTitle className="flex items-start gap-2 text-sm font-normal text-[var(--ink-muted)]">
                  <AlertTriangle
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-amber)]"
                    aria-hidden
                  />
                  {sign}
                </CardTitle>
              </CardHeader>
              <CardContent className="hidden p-0" />
            </Card>
          </FadeIn>
        ))}
      </div>
      <p className="mt-6 text-sm text-[var(--ink-muted)]">
        これらは観測のための兆候であり、単一のサインだけで詐欺と断定すべきではない。
      </p>
    </section>
  );
}
