# Scam Folklore Observatory / 詐欺民俗観測所

AI時代に再包装される古典的詐欺の構造を、**研究・教育・注意喚起**のために観測・分類・記録する研究用ダッシュボードの MVP。

> このアプリは詐欺の実行を支援するツールではありません。詐欺の検知・分類・構造分析・注意喚起を目的とした防御的・研究用アプリです。詐欺文面・誘導文・手順の生成は一切扱いません。

## 技術スタック

- Next.js 16（App Router）
- TypeScript
- Tailwind CSS v4
- shadcn/ui スタイルの軽量 UI プリミティブ（`src/components/ui`）
- Lucide icons
- 初期データはローカル JSON（`src/data/patterns.ts`）
- 追加観測はブラウザの localStorage に保存

## 起動

```bash
npm install
npm run dev
```

http://localhost:3000 を開く。

## スクリプト

```bash
npm run dev        # 開発サーバー
npm run build      # 本番ビルド
npm run start      # 本番起動
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## ページ

| パス | 内容 |
| --- | --- |
| `/` | 概要・主要観測カテゴリ・「信じる理由」セクション |
| `/patterns` | 観測一覧（検索・カテゴリ／リスクフィルタ） |
| `/patterns/[id]` | 個別パターンの詳細（Observation Note・Migration Flow を含む） |
| `/reports` | 週次観測レポート（信頼の偽装の増加傾向） |
| `/trust-hooks` | 信頼フック辞書（信頼の偽装形式を6分類） |
| `/forecasts` | 未来詐欺予測（2026年以降の観測仮説） |
| `/submit` | 新規観測の追加フォーム（**ローカル開発のみ**。Public 版では非公開） |
| `/taxonomy` | 詐欺分類辞書（7つの観測軸） |
| `/about` | 観測所の思想 |

## データ設計と将来の DB 移行

- 型: `src/types/scam.ts`（`ScamPattern` / `Evidence` / `ScamPatternInput`）
- 永続化: `src/lib/storage.ts` に集約。現状は localStorage 実装だが、
  `loadUserPatterns` / `saveUserPattern` / `deleteUserPattern` のシグネチャを保ったまま
  SQLite / Supabase 実装へ差し替えられる。
- 表示は `src/lib/data.ts` の純粋関数（`mergePatterns` など）で seed と利用者データをマージする。

## リスクレベルの配色

Low: gray / Medium: amber / High: orange / Critical: red（いずれも彩度を抑えた観測的トーン）。

## Vercel へのデプロイ（Public 版）

Public 版では **Submit（観測追加）は非公開** です。ナビゲーションから除外され、`/submit` へ直接アクセスしても 404 になります。

### 手順

1. リポジトリを GitHub に push する
2. [Vercel](https://vercel.com) で **Import Project** → リポジトリを選択
3. Framework Preset: **Next.js**（自動検出）
4. 環境変数: **追加不要**（`NEXT_PUBLIC_ENABLE_SUBMIT` は設定しない）
5. Deploy

### ローカル開発で Submit を使う場合

`.env.local` を作成し、以下を設定する（`.env.example` を参照）:

```bash
NEXT_PUBLIC_ENABLE_SUBMIT=true
```

### ビルド確認

```bash
npm run build
npm run start
```

本番ビルドでは Submit が無効な状態でビルドされる。`/submit` は 404、Header / Footer に Submit リンクは表示されない。
