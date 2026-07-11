/**
 * 信頼フック辞書。
 * 「詐欺がどのように“信じる理由”を作るか」を偽装形式で分類したもの。
 * 手法の再現ではなく、危険サインの観測・予防・教育を目的とする。
 */
export type TrustHookCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
  /** この偽装形式を見抜くための観測ポイント。 */
  watchFor: string;
  /** この偽装形式が観測されやすい詐欺パターンの id。 */
  relatedPatternIds: string[];
};

export const trustHookCategories: TrustHookCategory[] = [
  {
    id: "authority",
    title: "権威の偽装",
    description:
      "「信頼できる立場の人が言っている」という形で、判断の代わりに肩書きを差し出す。",
    items: ["有名人", "政府", "銀行", "医師", "AI専門家"],
    watchFor:
      "本人・公式機関の一次情報で裏が取れるか。肩書きだけで内容の検証が省かれていないか。",
    relatedPatternIds: ["celebrity-deepfake-ad", "ai-investment-ponzi"],
  },
  {
    id: "intimacy",
    title: "親密さの偽装",
    description:
      "継続的なやり取りや共感の演出で、関係の記憶を積み立て、断りにくさを作る。",
    items: ["毎日返信", "記憶しているふり", "恋愛感情", "家族的な言葉"],
    watchFor:
      "親密さが深まった直後に金銭や投資の話が現れていないか。会う・確認する前に信頼を求めていないか。",
    relatedPatternIds: ["ai-romance-scam"],
  },
  {
    id: "success",
    title: "成功の偽装",
    description:
      "「すでに成功している証拠」を見せることで、再現できそうという期待を作る。",
    items: ["収益スクショ", "出金履歴", "成功者インタビュー"],
    watchFor:
      "スクリーンショットや実績は編集・演出が可能。再現性の根拠が具体的に説明されているか。",
    relatedPatternIds: ["ai-side-hustle-infoproduct", "ai-investment-ponzi"],
  },
  {
    id: "scarcity",
    title: "限定性の偽装",
    description:
      "「今しかない」「あなただけ」という希少性で、検討の時間と冷静さを奪う。",
    items: ["招待制", "残り数名", "今だけ", "非公開情報"],
    watchFor:
      "期限や枠の希少性が決断を急がせていないか。急かされたら一度離れて確認する。",
    relatedPatternIds: ["ai-investment-ponzi", "ai-side-hustle-infoproduct"],
  },
  {
    id: "personalization",
    title: "個別性の偽装",
    description:
      "「あなただけに宛てた」という個別感を演出する。AIで大量生成できるほど安価になった。",
    items: ["あなただけ", "特別鑑定", "個別診断", "専用プラン"],
    watchFor:
      "個別感が過剰に強くないか。同じ文面が誰にでも当てはまる汎用的な内容になっていないか。",
    relatedPatternIds: ["ai-fortune-telling", "ai-romance-scam"],
  },
  {
    id: "officialness",
    title: "公式性の偽装",
    description:
      "公式サイトや報道に見える体裁で、正規のものだと錯覚させる。",
    items: ["偽ニュース", "公式風LP", "ロゴ", "証明書", "認定マーク"],
    watchFor:
      "ドメインや発信元が公式のものか。ロゴや認定マークは画像として貼るだけで偽装できる。",
    relatedPatternIds: ["celebrity-deepfake-ad"],
  },
];
