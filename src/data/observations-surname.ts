import type { ObservationInput } from "@/types/intimacy";

/** 氏名・婚姻に関する観測記録 */
export const surnameObservations: ObservationInput[] = [
  {
    id: "obs-075",
    slug: "japan-selective-separate-surname-debate",
    title: "Debate Over Selective Separate Surnames for Married Couples",
    titleJa: "選択的夫婦別姓をめぐる論争",
    summary:
      "Couples who wish to marry without sharing one legal surname navigate constitutional debate and workplace forms.",
    summaryJa:
      "同一の法的姓を取らずに結婚したいカップルが、憲法論争と職場書類の間を行き来する。",
    date: "2025-05-20",
    country: "Japan",
    status: "unresolved",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["identity", "recognition", "belonging", "responsibility"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["surname-marriage", "marriage-law"],
    risks: [],
    genderDesignIssues: ["marriage-rename-lifecycle", "nuclear-family-model"],
    questions: [
      "q-surname-marriage-link",
      "q-family-without-rename",
      "q-institutional-recognition",
    ],
    whatHappened:
      "Partners delay marriage or use legal workarounds; public employment and banking systems assume a single household surname.",
    whatHappenedJa:
      "結婚を先延ばしする、または法的な回避策を取る。公務・金融は世帯姓一本を前提とする。",
    whyItMatters:
      "Marriage registration bundles intimacy with mandatory surname alignment for one spouse.",
    whyItMattersJa:
      "婚姻届が、親密性と一方の改姓を同一手続きに束ねる。",
  },
  {
    id: "obs-076",
    slug: "maiden-name-career-discontinuity",
    title: "Career Record Discontinuity After Marriage Surname Change",
    titleJa: "改姓による職歴・研究実績の分断",
    summary:
      "Researchers and professionals lose searchable continuity when legal names change after marriage.",
    summaryJa:
      "結婚改姓後、研究者・専門職の法的氏名が変わり、検索可能な実績の連続性が失われる。",
    date: "2025-11-03",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["identity", "memory", "recognition"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["surname-marriage"],
    risks: [],
    genderDesignIssues: [
      "legal-name-primary",
      "alias-name-exception",
      "fixed-profile",
    ],
    questions: ["q-family-name-unity", "q-family-without-rename"],
    whatHappened:
      "Publications and credit histories remain under former names; administrative systems treat prior identity as exception data.",
    whatHappenedJa:
      "論文・信用情報は旧姓のまま。行政システムは以前の身份を例外データとして扱う。",
    whyItMatters:
      "Name change for institutional family unity fractures professional personhood.",
    whyItMattersJa:
      "家族一体のための改名が、職業的な自己同一性を分断する。",
  },
  {
    id: "obs-077",
    slug: "digital-id-maiden-name-mismatch",
    title: "Digital ID and Banking Failures for Maiden Name Users",
    titleJa: "旧姓・通称利用者のデジタルID・金融認証不全",
    summary:
      "Users who daily use maiden names or aliases face verification errors in AI support and government portals.",
    summaryJa:
      "旧姓・通称で生活する利用者が、AIサポートや行政ポータルで本人確認エラーに直面する。",
    date: "2026-06-15",
    country: "Japan",
    status: "emerging",
    relationshipTypes: ["partner", "ai"],
    intimacyDimensions: ["identity", "safety", "recognition"],
    lifeStages: ["marriage-parenting", "divorce"],
    institutionalGaps: ["surname-marriage", "data-ownership"],
    risks: ["data-extraction"],
    genderDesignIssues: [
      "legal-name-primary",
      "alias-name-exception",
      "marriage-rename-lifecycle",
    ],
    questions: ["q-family-without-rename", "q-binary-ai"],
    whatHappened:
      "Chatbots and call centers insist on legal surname while users respond with names used at work and in community life.",
    whatHappenedJa:
      "チャットボットやコールセンターが法的姓を要求する。利用者は職場・地域で使う名前で応答する。",
    whyItMatters:
      "Systems built for one legal name cannot hold the double life of married professional identity.",
    whyItMattersJa:
      "唯一の法的氏名向けのシステムが、結婚後の二重の名前生活を保持できない。",
  },
];
