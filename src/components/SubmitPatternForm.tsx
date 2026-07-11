"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Info } from "lucide-react";
import type { RiskLevel, ScamPatternInput } from "@/types/scam";
import { RISK_LEVELS, riskLevelLabel } from "@/lib/display";
import { saveUserPattern } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const EMPTY: ScamPatternInput = {
  name: "",
  classicalOrigin: "",
  aiUpgrade: "",
  entryPoint: "",
  trustHook: "",
  emotionalTrigger: "",
  migrationPath: "",
  redFlags: "",
  evidenceUrl: "",
  evidenceNote: "",
  riskLevel: "Medium",
  tags: "",
  preventionNotes: "",
};

function Field({
  label,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {hint ? (
        <p className="text-xs text-[var(--ink-faint)]">{hint}</p>
      ) : null}
      {children}
    </div>
  );
}

export function SubmitPatternForm() {
  const [form, setForm] = useState<ScamPatternInput>(EMPTY);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof ScamPatternInput>(
    key: K,
    value: ScamPatternInput[K],
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.name.trim()) {
      setError("パターン名（Name）は必須です。");
      return;
    }
    // 将来的に DB 保存へ差し替え可能。現状は localStorage に保存する。
    const saved = saveUserPattern(form);
    // 開発時の確認用にコンソールへも出力する。
    console.log("[SFO] 観測記録を保存しました:", saved);
    setSavedId(saved.id);
    setForm(EMPTY);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex items-start gap-2 rounded-sm border border-[var(--border-subtle)] bg-[var(--accent-soft)] p-4">
        <Info
          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-amber)]"
          aria-hidden
        />
        <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
          記録するのは「観測した構造」です。詐欺の文面・誘導文・手順は書かないでください。
          複数項目はカンマまたは改行で区切ると、それぞれ分けて記録されます。
          このフォームの内容はお使いのブラウザ内（localStorage）にのみ保存されます。
        </p>
      </div>

      {savedId ? (
        <div className="flex items-center justify-between gap-3 rounded-sm border border-[var(--risk-low)]/30 bg-[var(--risk-low-bg)] p-4">
          <p className="flex items-center gap-2 text-sm text-[var(--ink)]">
            <CheckCircle2 className="h-4 w-4 text-[var(--accent-amber)]" aria-hidden />
            観測記録を保存しました。
          </p>
          <Link
            href={`/patterns/${savedId}`}
            className="text-sm font-medium underline underline-offset-4"
          >
            記録を見る
          </Link>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label="Name（パターン名）" htmlFor="name">
            <Input
              id="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="例：AI投資ポンジ型"
              required
            />
          </Field>
        </div>

        <Field label="Classical Origin（古典的起源）" htmlFor="classicalOrigin">
          <Input
            id="classicalOrigin"
            value={form.classicalOrigin}
            onChange={(e) => update("classicalOrigin", e.target.value)}
            placeholder="例：ポンジスキーム / 投資詐欺"
          />
        </Field>

        <Field label="AI Upgrade（AIによる再包装）" htmlFor="aiUpgrade">
          <Input
            id="aiUpgrade"
            value={form.aiUpgrade}
            onChange={(e) => update("aiUpgrade", e.target.value)}
            placeholder="例：偽の収益ダッシュボード、ディープフェイク推薦"
          />
        </Field>

        <Field
          label="Entry Point（入口）"
          hint="接触が起こる媒体。カンマ／改行区切り。"
          htmlFor="entryPoint"
        >
          <Textarea
            id="entryPoint"
            value={form.entryPoint}
            onChange={(e) => update("entryPoint", e.target.value)}
            placeholder="SNS広告, YouTube広告, X投稿"
          />
        </Field>

        <Field
          label="Trust Hook（信頼のフック）"
          hint="信頼させる要素。カンマ／改行区切り。"
          htmlFor="trustHook"
        >
          <Textarea
            id="trustHook"
            value={form.trustHook}
            onChange={(e) => update("trustHook", e.target.value)}
            placeholder="有名人推薦, 高利回り, 限定招待"
          />
        </Field>

        <Field
          label="Emotional Trigger（感情の引き金）"
          hint="刺激される感情。カンマ／改行区切り。"
          htmlFor="emotionalTrigger"
        >
          <Textarea
            id="emotionalTrigger"
            value={form.emotionalTrigger}
            onChange={(e) => update("emotionalTrigger", e.target.value)}
            placeholder="老後不安, 副収入欲, 乗り遅れ不安"
          />
        </Field>

        <Field
          label="Migration Path（誘導経路）"
          hint="接触から搾取までの経路。カンマ／改行区切り。"
          htmlFor="migrationPath"
        >
          <Textarea
            id="migrationPath"
            value={form.migrationPath}
            onChange={(e) => update("migrationPath", e.target.value)}
            placeholder="広告, LP, LINE/Telegram, 個別チャット, 入金"
          />
        </Field>

        <div className="md:col-span-2">
          <Field
            label="Red Flags（危険サイン）"
            hint="被害予防のための観測ポイント。カンマ／改行区切り。"
            htmlFor="redFlags"
          >
            <Textarea
              id="redFlags"
              value={form.redFlags}
              onChange={(e) => update("redFlags", e.target.value)}
              placeholder="高利回り保証, 出金前の追加手数料, 限定枠"
            />
          </Field>
        </div>

        <Field
          label="Evidence URL（観測URL）"
          hint="公開情報の参照先。任意。"
          htmlFor="evidenceUrl"
        >
          <Input
            id="evidenceUrl"
            type="url"
            value={form.evidenceUrl}
            onChange={(e) => update("evidenceUrl", e.target.value)}
            placeholder="https://example.com/warning"
          />
        </Field>

        <Field label="Risk Level（リスクレベル）" htmlFor="riskLevel">
          <Select
            id="riskLevel"
            value={form.riskLevel}
            onChange={(e) => update("riskLevel", e.target.value as RiskLevel)}
          >
            {RISK_LEVELS.map((r) => (
              <option key={r} value={r}>
                {riskLevelLabel[r]}（{r}）
              </option>
            ))}
          </Select>
        </Field>

        <div className="md:col-span-2">
          <Field
            label="Evidence Note（観測メモ）"
            hint="いつ・どこで・どんな構造を観測したか。文面の引用は避ける。"
            htmlFor="evidenceNote"
          >
            <Textarea
              id="evidenceNote"
              value={form.evidenceNote}
              onChange={(e) => update("evidenceNote", e.target.value)}
              placeholder="例：残高画面だけが整い、約款や運営者情報が確認できなかった。"
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field
            label="Tags（タグ）"
            hint="分類用のタグ。カンマ／改行区切り。"
            htmlFor="tags"
          >
            <Input
              id="tags"
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
              placeholder="投資, ポンジ, ディープフェイク"
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field
            label="Prevention Notes（予防メモ）"
            hint="被害を防ぐための注意点。カンマ／改行区切り。"
            htmlFor="preventionNotes"
          >
            <Textarea
              id="preventionNotes"
              value={form.preventionNotes}
              onChange={(e) => update("preventionNotes", e.target.value)}
              placeholder="出金時に追加入金を求められたら送金を止める。"
            />
          </Field>
        </div>
      </div>

      {error ? (
        <p className="text-sm text-[var(--accent-red)]">{error}</p>
      ) : null}

      <div className="flex items-center gap-3">
        <Button type="submit" size="lg">
          観測記録を保存
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setForm(EMPTY);
            setSavedId(null);
            setError(null);
          }}
        >
          クリア
        </Button>
      </div>
    </form>
  );
}
