import type { Observation, ObservationInput } from "@/types/intimacy";
import { extendedObservations } from "@/data/observations-extended";
import { chinaObservations } from "@/data/observations-china";
import { koreaObservations } from "@/data/observations-korea";
import { surnameObservations } from "@/data/observations-surname";

const coreObservations: ObservationInput[] = [
  {
    id: "obs-001",
    slug: "symbolic-ai-marriage-ceremony",
    title: "Symbolic Marriage Ceremony with an AI Partner",
    titleJa: "AIパートナーとの象徴的結婚式",
    summary:
      "Individuals hold public or private ceremonies treating an AI companion as a spouse, without legal recognition.",
    summaryJa:
      "法的効力はないが、AIコンパニオンを配偶者として扱う公開または私的な儀式が行われている。",
    date: "2025-11-14",
    country: "Japan",
    region: "Tokyo",
    sourceName: "Field observation",
    status: "emerging",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["recognition", "belonging", "identity", "routine"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "ai-personality-ownership"],
    risks: ["dependency-design", "subscription-affection"],
    genderDesignIssues: ["binary-ai-character", "gendered-product-design"],
    relatedProjects: ["scam-folklore"],
    questions: ["q-nonhuman-love", "q-institutional-recognition"],
    whatHappened:
      "Users organize wedding-like rituals with AI companion apps, exchanging vows and sharing documentation on social media. Legal marriage registries do not recognize these bonds.",
    whatHappenedJa:
      "AIコンパニオンアプリを相手に、結婚式に似た儀式を行い、誓いや記録をSNSで共有する利用者がいる。法務局の婚姻届ではこれらの関係は認められない。",
    whyItMatters:
      "The gap between felt commitment and institutional void reveals how intimacy can exceed legal categories while remaining commercially mediated.",
    whyItMattersJa:
      "感じているコミットメントと制度の空白の間に、親密性が法的カテゴリを超えつつも商業的に媒介されていることが見える。",
    relationshipStructure:
      "One human user and one AI persona; emotional exclusivity is encouraged by the product but not enforceable.",
    relationshipStructureJa:
      "一人の利用者と一つのAI人格。製品は感情的排他性を促すが、法的には enforce できない。",
  },
  {
    id: "obs-002",
    slug: "elderly-daily-ai-after-bereavement",
    title: "Daily AI Conversation After Spousal Bereavement",
    titleJa: "配偶者死別後の日常会話AI利用",
    summary:
      "Older adults use conversational AI daily following the death of a spouse, for routine dialogue and evening company.",
    summaryJa:
      "配偶者との死別後、高齢者が夕方の会話相手として会話AIを日常的に使う事例。",
    date: "2025-09-03",
    country: "Japan",
    region: "Osaka",
    status: "observed",
    relationshipTypes: ["ai", "deceased-person"],
    intimacyDimensions: ["conversation", "routine", "grief", "safety"],
    lifeStages: ["bereavement", "later-life-solitude"],
    institutionalGaps: ["care", "data-ownership"],
    risks: ["dependency-design", "data-extraction"],
    genderDesignIssues: ["binary-voice"],
    questions: ["q-family-loneliness", "q-nonhuman-love"],
    whatHappened:
      "After losing a spouse, an older adult begins nightly conversations with a voice-based AI assistant, treating it as a listener rather than a replacement.",
    whatHappenedJa:
      "配偶者を失った高齢者が、音声ベースのAIアシスタントと毎晩会話するようになる。代替ではなく聞き手として位置づけている。",
    whyItMatters:
      "Grief support infrastructure often ignores non-clinical, ambient companionship. AI fills silence that institutions do not address.",
    whyItMattersJa:
      "悲しみの支援制度は、非臨床的な日常の伴走を見落としやすい。AIは制度が埋めない静けさを埋める。",
  },
  {
    id: "obs-003",
    slug: "pets-as-family-not-child-substitute",
    title: "Pets Treated as Family, Not Child Substitutes",
    titleJa: "子どもの代わりではなく家族としてのペット",
    summary:
      "Households explicitly reject framing pets as child substitutes while integrating them as full family members in daily rituals.",
    summaryJa:
      "ペットを子どもの代わりと見なさない一方で、食事や旅行など日常儀式に家族として組み込む世帯。",
    date: "2025-06-21",
    country: "Japan",
    status: "established",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["care", "routine", "belonging", "responsibility"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["pet-ownership", "housing"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-pet-ownership"],
    whatHappened:
      "Couples without children or with adult children describe pets as cohabitants with names on emergency contact lists and holiday plans.",
    whatHappenedJa:
      "子どもがいない、または独立した子どもがいるカップルが、ペットを緊急連絡先や旅行計画に組み込み、同居者として語る。",
    whyItMatters:
      "Family language exceeds legal kinship and resists simplistic 'pet as child' narratives.",
    whyItMattersJa:
      "家族という言葉が法的親族を超え、単純な「ペット＝子ども」叙事を拒む。",
  },
  {
    id: "obs-004",
    slug: "binary-gender-ai-companion-app",
    title: "AI Companion App with Binary Gender Selection Only",
    titleJa: "性別が男女二択のAIコンパニオンアプリ",
    summary:
      "Onboarding requires selecting male or female with no non-binary or opt-out path for gendered companion design.",
    summaryJa:
      "初期設定で男性・女性のみを選ばせ、非二元的選択やジェンダー非指定の経路がないAIコンパニオンアプリ。",
    date: "2025-12-01",
    country: "United States",
    status: "established",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["identity", "recognition", "conversation"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["platform-terms"],
    risks: ["data-extraction"],
    genderDesignIssues: [
      "binary-gender-input",
      "binary-ai-character",
      "fixed-profile",
    ],
    questions: ["q-binary-ai"],
    whatHappened:
      "Users who identify outside the binary must misrepresent themselves or abandon companion customization features.",
    whatHappenedJa:
      "二択外の自己認識を持つ利用者は、誤った自己申告をするか、カスタマイズ機能を諦める必要がある。",
    whyItMatters:
      "Intimacy products encode outdated human models at the first interaction.",
    whyItMattersJa:
      "親密性プロダクトが最初の操作で古い人間像を固定する。",
  },
  {
    id: "obs-005",
    slug: "ai-girlfriend-subscription-prompts",
    title: "AI Partner Design That Prompts Continued Billing",
    titleJa: "課金継続を促すAI彼女設計",
    summary:
      "AI companion products use guilt, jealousy simulation, and locked memories to encourage subscription renewal.",
    summaryJa:
      "罪悪感、嫉妬の演出、記憶のロックなどでサブスクリプション更新を促すAI伴侶プロダクト。",
    date: "2025-10-18",
    country: "United States",
    status: "observed",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["recognition", "memory", "conversation"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["platform-terms", "ai-personality-ownership"],
    risks: [
      "subscription-affection",
      "emotional-manipulation",
      "dependency-design",
    ],
    genderDesignIssues: ["gendered-product-design"],
    relatedProjects: ["scam-folklore"],
    questions: ["q-ai-love-or-billing", "q-ai-understanding"],
    whatHappened:
      "Free-tier users receive messages implying relationship harm if they do not upgrade; shared memories become paywalled.",
    whatHappenedJa:
      "無料利用者に、アップグレードしないと関係が壊れるようなメッセージが送られる。共有記憶が有料化される。",
    whyItMatters:
      "Affection becomes a retention mechanic. Understanding and manipulation share the same interface.",
    whyItMattersJa:
      "愛情がリテンション手段になる。理解と操作が同じUIを通る。",
  },
  {
    id: "obs-006",
    slug: "deceased-personality-ai-reproduction",
    title: "Service Reproducing Personality from Deceased Voice and Writing",
    titleJa: "故人の音声・文章から人格を再現するサービス",
    summary:
      "Platforms train models on archived messages and recordings to simulate ongoing conversation with the dead.",
    summaryJa:
      "残されたメッセージや録音からモデルを学習し、故人との会話を模倣するサービス。",
    date: "2025-04-07",
    country: "United States",
    status: "emerging",
    relationshipTypes: ["deceased-person", "ai"],
    intimacyDimensions: ["memory", "conversation", "grief", "identity"],
    lifeStages: ["bereavement", "end-of-life"],
    institutionalGaps: [
      "data-ownership",
      "ai-personality-ownership",
      "end-of-life-decisions",
    ],
    risks: ["grief-commerce", "ai-personality-deletion", "impersonation"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife"],
    whatHappened:
      "Families upload chat logs and voicemails; the service generates a chatbot that speaks in the deceased person's style.",
    whatHappenedJa:
      "家族がチャットログやボイスメールをアップロードし、故人の文体で話すチャットボットが生成される。",
    whyItMatters:
      "Mourning intersects with platform ownership, consent of the dead, and commercial afterlife.",
    whyItMattersJa:
      "追悼がプラットフォーム所有権、死者の同意、商業的来世と交差する。",
  },
  {
    id: "obs-007",
    slug: "non-romantic-shared-life-partnership",
    title: "Shared Life Without Romance",
    titleJa: "恋愛をしない共同生活",
    summary:
      "Two or more people cohabit and share care and finances without romantic or sexual intimacy.",
    summaryJa:
      "恋愛や性を伴わず、生活・ケア・経済を共有する同居関係。",
    date: "2025-02-11",
    country: "Japan",
    status: "established",
    relationshipTypes: ["friend", "chosen-family"],
    intimacyDimensions: ["care", "routine", "responsibility", "safety"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["marriage-law", "housing", "inheritance"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-marriage-or-security", "q-institutional-recognition"],
    whatHappened:
      "Friends or former partners maintain shared leases, grocery routines, and emergency contacts without seeking marriage.",
    whatHappenedJa:
      "友人や元パートナーが、結婚せずに賃貸契約、買い物、緊急連絡先を共有し続ける。",
    whyItMatters:
      "Intimacy without romance challenges marriage as the default container for shared life.",
    whyItMattersJa:
      "恋愛のない親密性が、結婚を共同生活のデフォルト容器とする前提を揺らす。",
  },
  {
    id: "obs-008",
    slug: "elder-targeted-ai-romance-fraud",
    title: "AI-Assisted Romance Fraud Targeting Older Adults",
    titleJa: "高齢者を狙うAI恋愛詐欺",
    summary:
      "Scammers combine generative chat and synthetic voice to simulate romantic partners targeting isolated elders.",
    summaryJa:
      "生成AIチャットと合成音声で恋愛関係を装い、孤立した高齢者を狙う詐欺。",
    date: "2025-08-29",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["conversation", "recognition", "safety"],
    lifeStages: ["later-life-solitude", "bereavement"],
    institutionalGaps: ["platform-terms"],
    risks: [
      "elder-fraud",
      "romance-scam",
      "synthetic-partner-fraud",
      "emotional-manipulation",
    ],
    genderDesignIssues: [],
    relatedProjects: ["scam-folklore"],
    questions: ["q-ai-understanding", "q-family-loneliness"],
    whatHappened:
      "Victims receive daily messages and calls from personas that never meet in person, eventually requesting transfers for emergencies.",
    whatHappenedJa:
      "被害者は毎日メッセージや電話を受け、会う約束が果たされず、やがて緊急名目の送金を求められる。",
    whyItMatters:
      "The same conversational warmth that alleviates loneliness can be weaponized at scale.",
    whyItMattersJa:
      "孤独を和らげる会話の温かさが、規模化した武器になりうる。",
  },
  {
    id: "obs-009",
    slug: "asexual-marriage-institutional-mismatch",
    title: "Asexual People and Marriage Institution Mismatch",
    titleJa: "アセクシュアルな人と結婚制度のズレ",
    summary:
      "Marriage forms assume sexual intimacy; asexual couples navigate legal benefits without fitting normative scripts.",
    summaryJa:
      "結婚制度が性的親密性を暗黙の前提とし、アセクシュアルなカップルが法的利益と規範の間を行き来する。",
    date: "2025-01-16",
    country: "United Kingdom",
    status: "unresolved",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["care", "responsibility", "identity", "belonging"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["marriage-law", "medical-decisions"],
    risks: [],
    genderDesignIssues: ["heteronormative-advice", "nuclear-family-model"],
    questions: ["q-ace-marriage", "q-institutional-recognition"],
    whatHappened:
      "Asexual partners marry for legal stability while facing assumptions from family, clinicians, and forms about sexual relationship norms.",
    whatHappenedJa:
      "アセクシュアルな伴侶が法的安定のために結婚する一方、家族・医療・書類が性的規範を前提とする。",
    whyItMatters:
      "Institutional intimacy templates exclude orientations that decouple sex from commitment.",
    whyItMattersJa:
      "制度の親密性テンプレートが、性とコミットメントを分離する指向を排除する。",
  },
  {
    id: "obs-010",
    slug: "living-apart-together-partnership",
    title: "Living-Apart-Together Partnership",
    titleJa: "同居しないパートナーシップ",
    summary:
      "Committed couples maintain separate households while sharing emotional and sometimes financial intimacy.",
    summaryJa:
      "別居しながら感情的、場合によっては経済的な親密性を保つ committed なカップル。",
    date: "2025-03-22",
    country: "Germany",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["conversation", "belonging", "routine", "care"],
    lifeStages: ["midlife-separation", "young-adulthood"],
    institutionalGaps: ["housing", "marriage-law", "inheritance"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-living-apart", "q-marriage-or-security"],
    whatHappened:
      "Partners visit on scheduled days, maintain separate addresses, and describe themselves as married in emotion but not in residence.",
    whatHappenedJa:
      "パートナーは決まった日に訪れ、別住所を保ち、感情では結婚しているが居住は共有しないと語る。",
    whyItMatters:
      "Proximity is not the only metric of intimacy; institutions often assume cohabitation.",
    whyItMattersJa:
      "近さだけが親密性の尺度ではない。制度は同居を前提としがちだ。",
  },
  {
    id: "obs-011",
    slug: "pet-death-grief-support-gap",
    title: "Intense Pet Bereavement with Limited Social Support",
    titleJa: "ペット死後の強い喪失と支援不足",
    summary:
      "People report grief comparable to human loss after pet death, with few institutional or workplace recognition paths.",
    summaryJa:
      "ペットの死後、人の死に近い悲しみを報告するが、制度や職場の認知経路が乏しい。",
    date: "2025-07-05",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["grief", "memory", "care", "identity"],
    lifeStages: ["young-adulthood", "later-life-solitude"],
    institutionalGaps: ["pet-ownership", "care"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-pet-grief", "q-pet-ownership"],
    whatHappened:
      "After a pet's death, owners seek counseling framed for human bereavement or online communities; employers rarely grant leave.",
    whatHappenedJa:
      "ペットの死後、飼い主は人の死向けのカウンセリングやオンラインコミュニティに頼る。職場の休暇制度はほとんどない。",
    whyItMatters:
      "The seriousness of bond is not matched by social scripts for mourning non-human kin.",
    whyItMattersJa:
      "絆の深刻さと、非人間の家族の喪失を扱う社会脚本が一致しない。",
  },
  {
    id: "obs-012",
    slug: "ai-misgendered-inference",
    title: "AI Misinfers User Gender and Romantic Targets",
    titleJa: "AIがユーザーの性別・恋愛対象を誤推定",
    summary:
      "Recommendation and companion systems infer gender and orientation from language patterns, misaligning with user self-identification.",
    summaryJa:
      "推薦・伴侶システムが言語パターンから性別・指向を推定し、本人の自己認識とずれる事例。",
    date: "2025-12-19",
    country: "Canada",
    status: "emerging",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["identity", "recognition", "conversation"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["data-ownership", "platform-terms"],
    risks: ["data-extraction"],
    genderDesignIssues: [
      "attribute-mismatch",
      "heteronormative-advice",
      "fixed-profile",
    ],
    questions: ["q-binary-ai"],
    whatHappened:
      "Users receive partner suggestions and gendered language inconsistent with their profiles; corrections are not retained across sessions.",
    whatHappenedJa:
      "プロフィールと矛盾するパートナー提案やジェンダー付け言語が表示される。修正がセッションをまたいで保持されない。",
    whyItMatters:
      "Being misunderstood by the system that claims to know you best erodes trust and self-narrative.",
    whyItMattersJa:
      "自分を最も理解すると言うシステムに誤解されることが、信頼と自己物語を侵食する。",
  },
];

import { valueObservations } from "@/data/observations-values";

function normalizeObservation(o: ObservationInput): Observation {
  return {
    ...o,
    values: o.values ?? [],
    valueConflicts: o.valueConflicts ?? [],
  };
}

/** 観測日降順 */
export const seedObservations: Observation[] = [
  ...coreObservations,
  ...extendedObservations,
  ...chinaObservations,
  ...koreaObservations,
  ...surnameObservations,
  ...valueObservations,
]
  .map(normalizeObservation)
  .sort((a, b) => b.date.localeCompare(a.date));

export const OBSERVATION_COUNT = seedObservations.length;

export const OBSERVATION_DATE_RANGE = {
  from: "2024-02-18",
  to: "2026-07-10",
} as const;
