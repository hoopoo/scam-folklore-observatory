/**
 * 詐欺分類の辞書。
 * 「何を悪用するか」の観測軸を整理したもので、手法の再現とは無関係。
 */
export type TaxonomyAxis = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const taxonomy: TaxonomyAxis[] = [
  {
    id: "desire",
    title: "欲望",
    description: "人が前のめりになる方向。詐欺はここに未来像を差し込む。",
    items: [
      "儲けたい",
      "愛されたい",
      "救われたい",
      "認められたい",
      "乗り遅れたくない",
    ],
  },
  {
    id: "anxiety",
    title: "不安",
    description: "人が守りに入る方向。詐欺はここを刺激して判断を急がせる。",
    items: ["老後不安", "孤独", "病気", "仕事", "将来", "家族"],
  },
  {
    id: "authority",
    title: "権威",
    description: "信頼を借りる相手。なりすましや監修の偽装に使われる。",
    items: ["有名人", "政府", "銀行", "医師", "投資家", "AI専門家"],
  },
  {
    id: "medium",
    title: "媒体",
    description: "接触が起こる場所。入口と誘導の経路になる。",
    items: [
      "SNS広告",
      "YouTube広告",
      "DM",
      "LINE",
      "Telegram",
      "WhatsApp",
      "偽LP",
      "偽ニュース記事",
    ],
  },
  {
    id: "ai-use",
    title: "AI利用",
    description: "信頼の演出に使われるAIの要素。手段ではなく偽装の材料。",
    items: [
      "AI画像",
      "AI音声",
      "AI動画",
      "LLMチャット",
      "翻訳",
      "偽レビュー",
      "偽ダッシュボード",
    ],
  },
  {
    id: "classical",
    title: "古典類型",
    description: "再包装される前の、古くからある詐欺の骨格。",
    items: [
      "ポンジスキーム",
      "ロマンス詐欺",
      "霊感商法",
      "求人詐欺",
      "情報商材",
      "なりすまし",
      "フィッシング",
    ],
  },
  {
    id: "extraction",
    title: "最終搾取",
    description: "最後に奪われるもの。金銭とは限らない。",
    items: [
      "入金",
      "暗号資産送金",
      "個人情報",
      "口座開設",
      "労働搾取",
      "サブスク課金",
    ],
  },
];
