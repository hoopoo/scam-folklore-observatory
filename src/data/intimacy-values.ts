import type { CoreQuestion, IntimacyValue, ValueConflict } from "@/types/intimacy";

export const INTIMACY_VALUES: IntimacyValue[] = [
  {
    id: "emotional-value",
    label: "Emotional Value",
    labelJa: "感情的価値",
    description:
      "Being loved, understood, reassured, and less alone.",
    descriptionJa:
      "愛されること、理解されること、安心すること、孤独が和らぐこと。",
  },
  {
    id: "economic-value",
    label: "Economic Value",
    labelJa: "経済的価値",
    description:
      "Shared living costs, housing, tax treatment, inheritance, rising expenses, economic dependence.",
    descriptionJa:
      "生活費の共有、住宅、税制、相続、支出増加、経済的依存。",
  },
  {
    id: "lifestyle-value",
    label: "Lifestyle Value",
    labelJa: "生活価値",
    description:
      "Daily rhythms, shared meals, household division, compatible routines.",
    descriptionJa:
      "日常のリズム、食事、家事分担、生活習慣の相性。",
  },
  {
    id: "social-value",
    label: "Social Value",
    labelJa: "社会的価値",
    description:
      "Recognition from family, workplace, community, and public legitimacy.",
    descriptionJa:
      "家族、職場、地域、公的社会からの認知と正当性。",
  },
  {
    id: "care-value",
    label: "Care Value",
    labelJa: "ケアの価値",
    description:
      "Being cared for and caring for another through illness, aging, or crisis.",
    descriptionJa:
      "病、老い、危機のときに世話をすること、されること。",
  },
  {
    id: "identity-value",
    label: "Identity Value",
    labelJa: "自己認識の価値",
    description:
      "How a bond shapes who one understands oneself to be.",
    descriptionJa:
      "関係が、自分は誰かという理解を形作ること。",
  },
  {
    id: "freedom-value",
    label: "Freedom Value",
    labelJa: "自由の価値",
    description:
      "Autonomy over time, money, residence, work, and relational choices.",
    descriptionJa:
      "時間、お金、住む場所、働き方、人間関係を自分で決められること。",
  },
  {
    id: "status-quality-value",
    label: "Status and Quality Value",
    labelJa: "地位・生活水準の価値",
    description:
      "How marriage, singlehood, or other bonds change living standards, housing, travel, hobbies, and education investment.",
    descriptionJa:
      "結婚や独身などによって、生活水準、住環境、旅行、趣味、教育投資がどう変化するか。",
  },
];

export const VALUE_CONFLICTS: ValueConflict[] = [
  {
    id: "love-vs-freedom",
    label: "Love vs Freedom",
    labelJa: "愛情 vs 自由",
    poleA: "愛情",
    poleB: "自由",
  },
  {
    id: "stability-vs-stimulation",
    label: "Stability vs Stimulation",
    labelJa: "安定 vs 刺激",
    poleA: "安定",
    poleB: "刺激",
  },
  {
    id: "family-vs-career",
    label: "Family vs Career",
    labelJa: "家族 vs キャリア",
    poleA: "家族",
    poleB: "キャリア",
  },
  {
    id: "children-vs-living-standard",
    label: "Children vs Living Standard",
    labelJa: "子ども vs 生活水準",
    poleA: "子ども",
    poleB: "生活水準",
  },
  {
    id: "care-vs-self-realization",
    label: "Care vs Self-Realization",
    labelJa: "ケア vs 自己実現",
    poleA: "ケア",
    poleB: "自己実現",
  },
  {
    id: "social-approval-vs-personal-choice",
    label: "Social Approval vs Personal Choice",
    labelJa: "社会的承認 vs 個人の選択",
    poleA: "社会的承認",
    poleB: "個人の選択",
  },
  {
    id: "intimacy-vs-solitude-time",
    label: "Intimacy vs Time Alone",
    labelJa: "親密性 vs 一人の時間",
    poleA: "親密性",
    poleB: "一人の時間",
  },
  {
    id: "economic-rationality-vs-emotion",
    label: "Economic Rationality vs Emotion",
    labelJa: "経済合理性 vs 感情",
    poleA: "経済合理性",
    poleB: "感情",
  },
  {
    id: "human-complexity-vs-ai-low-friction",
    label: "Human Complexity vs AI Low-Friction",
    labelJa: "人間関係の複雑さ vs AI関係の低摩擦性",
    poleA: "人間関係の複雑さ",
    poleB: "AI関係の低摩擦性",
  },
];

export const VALUE_QUESTIONS: CoreQuestion[] = [
  {
    id: "q-marriage-what-value",
    textJa: "結婚には、どのような価値があるのか。",
    category: "value-and-meaning",
    filterParams: { value: ["emotional-value", "social-value", "economic-value"] },
  },
  {
    id: "q-marriage-whose-value",
    textJa: "結婚の価値は、誰にとっての価値なのか。",
    category: "value-and-meaning",
    filterParams: { value: ["social-value"], valueConflict: ["social-approval-vs-personal-choice"] },
  },
  {
    id: "q-singlehood-lack-or-choice",
    textJa: "独身でいることは、欠如なのか、選択なのか。",
    category: "value-and-meaning",
    filterParams: { value: ["freedom-value", "identity-value"] },
  },
  {
    id: "q-freedom-and-security",
    textJa: "一人でいる自由と、誰かといる安心は両立できるのか。",
    category: "value-and-meaning",
    filterParams: {
      value: ["freedom-value", "emotional-value"],
      valueConflict: ["love-vs-freedom", "intimacy-vs-solitude-time"],
    },
  },
  {
    id: "q-marriage-lower-standard",
    textJa: "生活水準を下げてまで、結婚する意味はあるのか。",
    category: "value-and-meaning",
    filterParams: {
      value: ["status-quality-value", "economic-value"],
      valueConflict: ["children-vs-living-standard", "economic-rationality-vs-emotion"],
    },
  },
  {
    id: "q-economic-choice-cold",
    textJa: "経済合理性で関係を選ぶことは、冷たいことなのか。",
    category: "value-and-meaning",
    filterParams: {
      value: ["economic-value"],
      valueConflict: ["economic-rationality-vs-emotion"],
    },
  },
  {
    id: "q-intimacy-cost-of-freedom",
    textJa: "親密性は、自由を失う代わりに得るものなのか。",
    category: "value-and-meaning",
    filterParams: {
      valueConflict: ["love-vs-freedom", "intimacy-vs-solitude-time"],
    },
  },
  {
    id: "q-who-decides-value",
    textJa: "関係の価値は、社会が決めるのか、本人が決めるのか。",
    category: "value-and-meaning",
    filterParams: {
      valueConflict: ["social-approval-vs-personal-choice"],
    },
  },
  {
    id: "q-ai-pet-lower-value",
    textJa: "AIやペットとの関係は、人間関係より価値が低いのか。",
    category: "value-and-meaning",
    filterParams: {
      relationship: ["ai", "pet"],
      valueConflict: ["human-complexity-vs-ai-low-friction"],
    },
  },
];
