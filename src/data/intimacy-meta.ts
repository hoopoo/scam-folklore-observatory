import type {
  CoreQuestion,
  GenderDesignIssue,
  InstitutionalGap,
  IntimacyDimension,
  IntimacyRisk,
  LifeStage,
  MachineModelGap,
  ObservationTheme,
  RelationshipEntity,
} from "@/types/intimacy";

export const OBSERVATION_THEMES: ObservationTheme[] = [
  {
    id: "romance-without-marriage",
    slug: "romance-without-marriage",
    title: "Romance Without Marriage",
    titleJa: "結婚を選ばない恋愛",
    description:
      "Long-term romantic commitment without legal marriage or institutional recognition.",
    descriptionJa: "恋愛はあるが、結婚は選ばない。",
    tags: ["romance", "non-marriage", "cohabitation"],
    filterKeys: { relationshipTypes: ["partner"] },
  },
  {
    id: "marriage-without-romance",
    slug: "marriage-without-romance",
    title: "Marriage Without Romance",
    titleJa: "恋愛より制度の結婚",
    description:
      "Marriage organized around care, housing, economics, or legal convenience rather than romance.",
    descriptionJa:
      "恋愛よりも、生活、制度、ケア、経済を共有するための結婚。",
    tags: ["marriage", "care", "institution"],
    filterKeys: { relationshipTypes: ["partner"], institutionalGaps: ["marriage-law"] },
  },
  {
    id: "ai-companionship",
    slug: "ai-companionship",
    title: "AI Companionship",
    titleJa: "AIとの伴走",
    description:
      "Relationships where conversation, memory, validation, and comfort are provided by AI systems.",
    descriptionJa: "会話、承認、記憶、慰めを提供するAIとの関係。",
    tags: ["ai", "conversation", "companionship"],
    filterKeys: { relationshipTypes: ["ai"] },
  },
  {
    id: "pets-as-family",
    slug: "pets-as-family",
    title: "Pets as Family",
    titleJa: "ペットを家族として",
    description:
      "Animals treated as family in daily life while remaining property under law.",
    descriptionJa:
      "法的には所有物に近いが、生活上は家族として扱われる動物。",
    tags: ["pet", "family", "ownership"],
    filterKeys: { relationshipTypes: ["pet"] },
  },
  {
    id: "later-life-intimacy",
    slug: "later-life-intimacy",
    title: "Later-Life Intimacy",
    titleJa: "老いの中の親密性",
    description:
      "Intimacy reconfigured through bereavement, solitude, care, and new bonds in later life.",
    descriptionJa:
      "死別、独居、介護、老いの中で再構成される親密性。",
    tags: ["aging", "bereavement", "care"],
    filterKeys: { lifeStages: ["bereavement", "later-life-solitude", "care"] },
  },
  {
    id: "gendered-ai-design",
    slug: "gendered-ai-design",
    title: "Gendered AI Design",
    titleJa: "ジェンダー固定のAI設計",
    description:
      "Systems that reduce human identity to binary gender inputs despite lived gradient.",
    descriptionJa:
      "人間はグラデーションなのに、AIの入力欄は男女二択のままである。",
    tags: ["gender", "ai-design", "binary"],
    filterKeys: { genderDesignIssues: ["binary-gender-input"] },
  },
  {
    id: "digital-afterlife",
    slug: "digital-afterlife",
    title: "Digital Afterlife",
    titleJa: "デジタルな来世",
    description:
      "Attempts to preserve voice, writing, or personality of the deceased through AI.",
    descriptionJa:
      "亡くなった人の声、文章、人格をAIとして残す試み。",
    tags: ["afterlife", "memory", "ai"],
    filterKeys: { relationshipTypes: ["deceased-person"] },
  },
  {
    id: "intimacy-fraud",
    slug: "intimacy-fraud",
    title: "Intimacy Fraud",
    titleJa: "親密性を利用する詐欺",
    description:
      "Scams and emotional manipulation exploiting romance, loneliness, grief, or need for recognition.",
    descriptionJa:
      "恋愛、孤独、死別、承認欲求を利用する詐欺や感情操作。",
    tags: ["fraud", "manipulation", "risk"],
    filterKeys: { risks: ["romance-scam", "elder-fraud"] },
  },
];

export const CORE_QUESTIONS: CoreQuestion[] = [
  {
    id: "q-marriage-or-security",
    textJa:
      "人は、結婚したいのか。それとも、見捨てられない関係を求めているのか。",
    category: "romance-marriage",
    filterParams: { relationship: ["partner"] },
  },
  {
    id: "q-family-loneliness",
    textJa: "家族がいれば、孤独ではないのか。",
    category: "aging-bereavement",
    filterParams: { lifeStage: ["later-life-solitude", "bereavement"] },
  },
  {
    id: "q-nonhuman-love",
    textJa: "人間でなければ、愛情とは呼べないのか。",
    category: "ai-intimacy",
    filterParams: { relationship: ["ai", "pet", "robot"] },
  },
  {
    id: "q-pet-ownership",
    textJa: "ペットは所有物なのか、家族なのか。",
    category: "pets-family",
    filterParams: { relationship: ["pet"], institutional: ["pet-ownership"] },
  },
  {
    id: "q-ai-love-or-billing",
    textJa:
      "AIの恋人は、利用者を愛しているのか。それとも継続課金へ導いているのか。",
    category: "ai-intimacy",
    filterParams: { relationship: ["ai"], risk: ["subscription-affection"] },
  },
  {
    id: "q-digital-afterlife",
    textJa: "亡くなった人をAIとして残すことは、記憶なのか、商品なのか。",
    category: "digital-afterlife",
    filterParams: { relationship: ["deceased-person"] },
  },
  {
    id: "q-binary-ai",
    textJa:
      "人間はグラデーションなのに、なぜAIは二択で理解しようとするのか。",
    category: "gender-identity",
    filterParams: { genderDesign: ["binary-gender-input"] },
  },
  {
    id: "q-institutional-recognition",
    textJa: "親密性を制度はどこまで認識できるのか。",
    category: "law-institutions",
    filterParams: { institutional: ["marriage-law", "medical-decisions"] },
  },
];

export const QUESTION_CATEGORIES = [
  {
    id: "romance-marriage" as const,
    label: "Romance and Marriage",
    labelJa: "恋愛と結婚",
  },
  {
    id: "ai-intimacy" as const,
    label: "AI and Intimacy",
    labelJa: "AIと親密性",
  },
  {
    id: "pets-family" as const,
    label: "Pets and Family",
    labelJa: "ペットと家族",
  },
  {
    id: "aging-bereavement" as const,
    label: "Aging and Bereavement",
    labelJa: "老いと死別",
  },
  {
    id: "gender-identity" as const,
    label: "Gender and Identity",
    labelJa: "ジェンダーと自己",
  },
  {
    id: "law-institutions" as const,
    label: "Law and Institutions",
    labelJa: "法と制度",
  },
  {
    id: "fraud-manipulation" as const,
    label: "Fraud and Manipulation",
    labelJa: "詐欺と操作",
  },
  {
    id: "digital-afterlife" as const,
    label: "Digital Afterlife",
    labelJa: "デジタルな来世",
  },
  {
    id: "value-and-meaning" as const,
    label: "Value and Meaning",
    labelJa: "価値と意味",
  },
];

export const RELATIONSHIP_ENTITIES: RelationshipEntity[] = [
  {
    id: "human",
    label: "Human",
    labelJa: "人間",
    description: "Another person as a relational subject.",
    descriptionJa: "関係の相手としての他者。",
    isHuman: true,
  },
  {
    id: "partner",
    label: "Partner",
    labelJa: "パートナー",
    description: "Romantic, domestic, or committed partnership.",
    descriptionJa: "恋愛的・生活的・制度的な伴侶関係。",
    isHuman: true,
  },
  {
    id: "friend",
    label: "Friend",
    labelJa: "友人",
    description: "Chosen closeness without institutional binding.",
    descriptionJa: "制度に縛られない選択的な近さ。",
    isHuman: true,
  },
  {
    id: "chosen-family",
    label: "Chosen Family",
    labelJa: "選択的家族",
    description: "Family-like bonds formed by choice rather than lineage.",
    descriptionJa: "血縁ではなく選択によって結ばれる家族様の関係。",
    isHuman: true,
  },
  {
    id: "community",
    label: "Community",
    labelJa: "コミュニティ",
    description: "Belonging through shared space, identity, or practice.",
    descriptionJa: "共有の場、身份、実践を通じた所属。",
    isHuman: true,
  },
  {
    id: "pet",
    label: "Pet",
    labelJa: "ペット",
    description: "Non-human companions treated as kin in daily life.",
    descriptionJa: "生活上は家族として扱われる非人間の伴侶。",
    isHuman: false,
  },
  {
    id: "ai",
    label: "AI",
    labelJa: "AI",
    description: "Conversational or companion AI systems.",
    descriptionJa: "会話・伴走を提供するAIシステム。",
    isHuman: false,
  },
  {
    id: "robot",
    label: "Robot",
    labelJa: "ロボット",
    description: "Physical or ambient care and companion robots.",
    descriptionJa: "身体性を持つケア・伴走ロボット。",
    isHuman: false,
  },
  {
    id: "fictional-character",
    label: "Fictional Character",
    labelJa: "架空のキャラクター",
    description: "Attachment to narrative or virtual personas.",
    descriptionJa: "物語上・仮想上の人格への愛着。",
    isHuman: false,
  },
  {
    id: "deceased-person",
    label: "Deceased Person",
    labelJa: "故人",
    description: "Continued intimacy through memory, ritual, or AI reproduction.",
    descriptionJa: "記憶、儀式、AI再現を通じて続く関係。",
    isHuman: false,
  },
  {
    id: "place",
    label: "Place",
    labelJa: "場所",
    description: "Homes, neighborhoods, or landscapes as anchors of belonging.",
    descriptionJa: "所属の拠点となる住まいや土地。",
    isHuman: false,
  },
  {
    id: "object",
    label: "Object",
    labelJa: "モノ",
    description: "Heirlooms, devices, or artifacts carrying relational meaning.",
    descriptionJa: "関係の記憶を宿す物。",
    isHuman: false,
  },
];

export const INTIMACY_DIMENSIONS: IntimacyDimension[] = [
  {
    id: "conversation",
    label: "Conversation",
    labelJa: "会話",
    description: "Speaking, being heard, and receiving response.",
    descriptionJa:
      "話すこと。話を聞いてもらうこと。応答が返ってくること。",
  },
  {
    id: "recognition",
    label: "Recognition",
    labelJa: "承認",
    description: "Being seen and acknowledged as existing.",
    descriptionJa: "自分が存在していると認識されること。",
  },
  {
    id: "memory",
    label: "Memory",
    labelJa: "記憶",
    description: "Shared past remembered and referenced together.",
    descriptionJa: "過去を覚えていてもらうこと。",
  },
  {
    id: "touch",
    label: "Touch",
    labelJa: "触れ合い",
    description: "Physical proximity and contact as relational signal.",
    descriptionJa: "身体的な近さと接触。",
  },
  {
    id: "care",
    label: "Care",
    labelJa: "ケア",
    description: "Giving and receiving practical and emotional support.",
    descriptionJa: "世話をすること、されること。",
  },
  {
    id: "sexuality",
    label: "Sexuality",
    labelJa: "セクシュアリティ",
    description: "Desire, boundaries, and embodied intimacy.",
    descriptionJa: "欲望、境界、身体性を含む親密さ。",
  },
  {
    id: "safety",
    label: "Safety",
    labelJa: "安全",
    description: "Predictability and protection within a bond.",
    descriptionJa: "関係の中での予測可能性と保護。",
  },
  {
    id: "routine",
    label: "Routine",
    labelJa: "日常",
    description: "Shared rhythms of daily life.",
    descriptionJa: "共有される生活のリズム。",
  },
  {
    id: "belonging",
    label: "Belonging",
    labelJa: "所属",
    description: "Feeling part of something larger than oneself.",
    descriptionJa: "自分がどこかに属している感覚。",
  },
  {
    id: "responsibility",
    label: "Responsibility",
    labelJa: "責任",
    description: "Ongoing obligations to maintain the relationship.",
    descriptionJa:
      "関係を維持するために、負担や責任を引き受けること。",
  },
  {
    id: "grief",
    label: "Grief",
    labelJa: "喪失",
    description: "Mourning and continuing bonds after loss.",
    descriptionJa: "失った後も続く関係と悲しみ。",
  },
  {
    id: "identity",
    label: "Identity",
    labelJa: "アイデンティティ",
    description: "How a relationship shapes who one understands oneself to be.",
    descriptionJa: "関係が自己理解を形作ること。",
  },
];

export const LIFE_STAGES: LifeStage[] = [
  {
    id: "adolescence",
    label: "Adolescence",
    labelJa: "思春期",
    description: "First experiments with attachment, identity, and belonging.",
    descriptionJa: "愛着、自己、所属の最初の試行。",
    topics: ["初めての恋愛", "アイデンティティの探索"],
  },
  {
    id: "young-adulthood",
    label: "Young Adulthood",
    labelJa: "若年期",
    description: "Partnership models, cohabitation, and chosen family formation.",
    descriptionJa: "パートナーシップ、同居、選択的家族の形成。",
    topics: ["非婚同居", "選択的家族", "クィアな関係"],
  },
  {
    id: "marriage-parenting",
    label: "Marriage and Parenting",
    labelJa: "結婚と子育て",
    description: "Institutional family formation and care labor distribution.",
    descriptionJa: "制度的家族形成とケア労働の配分。",
    topics: ["結婚", "子育て", "ケア分担"],
  },
  {
    id: "midlife-separation",
    label: "Midlife Separation",
    labelJa: "中年期の分離",
    description: "Distance, restructuring, or renegotiation of long bonds.",
    descriptionJa: "長い関係の距離化と再交渉。",
    topics: ["別居", "関係の再定義"],
  },
  {
    id: "divorce",
    label: "Divorce",
    labelJa: "離婚",
    description: "Legal and emotional unwinding of partnership.",
    descriptionJa: "法的・感情的な伴侶関係の解消。",
    topics: ["離婚", "親権", "経済的分離"],
  },
  {
    id: "bereavement",
    label: "Bereavement",
    labelJa: "死別",
    description: "Loss of spouse, partner, or close kin and its aftermath.",
    descriptionJa: "配偶者や近い他者との死別とその余波。",
    topics: [
      "配偶者との死別",
      "故人とのAI会話",
      "喪失後の日常",
    ],
  },
  {
    id: "later-life-solitude",
    label: "Later-Life Solitude",
    labelJa: "晩年の独居",
    description:
      "Solitude that is not merely lack, but reconfiguration of intimacy.",
    descriptionJa:
      "単なる欠如ではなく、親密性の再構成としての独居。",
    topics: [
      "子どもの独立",
      "新しい恋愛",
      "事実婚",
      "ペットとの暮らし",
      "AIとの日常会話",
    ],
  },
  {
    id: "care",
    label: "Care",
    labelJa: "ケア",
    description: "Caregiving relationships between humans, machines, and institutions.",
    descriptionJa: "人間、機械、制度をまたぐケア関係。",
    topics: [
      "見守りAI",
      "認知症ケア",
      "介護者と被介護者",
      "ケアロボット",
    ],
  },
  {
    id: "end-of-life",
    label: "End of Life",
    labelJa: "人生の終わり",
    description: "Medical decisions, legacy, and who may speak for the dying.",
    descriptionJa: "医療判断、遺産、誰が代わりに語るか。",
    topics: [
      "終末期医療",
      "相続",
      "感情データと資産",
    ],
  },
];

export const INSTITUTIONAL_GAPS: InstitutionalGap[] = [
  {
    id: "marriage-law",
    label: "Marriage Law",
    labelJa: "結婚法制",
    description:
      "Emotionally committed bonds that law does not recognize as marriage.",
    descriptionJa: "感情の上では伴侶でも、制度上は認められない。",
  },
  {
    id: "surname-marriage",
    label: "Surname and Marriage",
    labelJa: "氏名と婚姻",
    description:
      "Why must one partner change their surname upon marriage? Is institutionalizing intimacy the same as changing one's name?",
    descriptionJa:
      "結婚によって、なぜどちらか一方が姓を変えなければならないのか。親密な関係を制度化することと、個人の名前を変更することは、本来同じなのか。",
    topics: [
      "選択的夫婦別姓",
      "改姓による職歴・研究実績・信用情報の分断",
      "通称使用と法的氏名の二重管理",
      "子どもの姓",
      "国際結婚との制度差",
      "離婚後の復氏",
      "性別役割と改姓負担",
      "デジタルIDと名前の一貫性",
      "AIや行政システムによる旧姓・通称の認識不全",
    ],
  },
  {
    id: "inheritance",
    label: "Inheritance",
    labelJa: "相続",
    description: "Who may inherit when kinship is chosen rather than legal.",
    descriptionJa: "法的親族でない者への相続権の欠如。",
  },
  {
    id: "housing",
    label: "Housing",
    labelJa: "住居",
    description: "Shared homes without recognized partnership status.",
    descriptionJa: "同居していても制度上の同居者として認められない。",
  },
  {
    id: "medical-decisions",
    label: "Medical Decisions",
    labelJa: "医療判断",
    description: "Partners excluded from hospital decision-making.",
    descriptionJa: "生活上は配偶者でも、病院で意思決定できない。",
  },
  {
    id: "care",
    label: "Care",
    labelJa: "介護",
    description: "Care obligations unrecognized outside nuclear family models.",
    descriptionJa: "核家族モデル外のケア関係が制度に見えにくい。",
  },
  {
    id: "custody",
    label: "Custody",
    labelJa: "親権",
    description: "Parenting by non-biological or non-married caregivers.",
    descriptionJa: "生物学的・法的親でない者の子育て権。",
  },
  {
    id: "pet-ownership",
    label: "Pet Ownership",
    labelJa: "ペット所有",
    description: "Family in life, property in law.",
    descriptionJa:
      "ペットを家族と考えていても、法的には所有物として扱われる。",
  },
  {
    id: "platform-terms",
    label: "Platform Terms",
    labelJa: "プラットフォーム規約",
    description: "Terms of service overriding user emotional attachment.",
    descriptionJa: "利用規約が感情的な関係を上書きする。",
  },
  {
    id: "data-ownership",
    label: "Data Ownership",
    labelJa: "データ所有",
    description: "Intimate data held by platforms, not by users.",
    descriptionJa: "親密なデータの所有者が利用者ではない。",
  },
  {
    id: "ai-personality-ownership",
    label: "AI Personality Ownership",
    labelJa: "AI人格の所有",
    description: "AI personas owned by service providers.",
    descriptionJa:
      "AIを恋人と考えていても、人格の所有権はサービス企業にある。",
  },
  {
    id: "end-of-life-decisions",
    label: "End-of-Life Decisions",
    labelJa: "終末期判断",
    description: "Who may decide when kinship is ambiguous.",
    descriptionJa: "親族関係が曖昧なとき、誰が決められるか。",
  },
];

export const INTIMACY_RISKS: IntimacyRisk[] = [
  {
    id: "romance-scam",
    label: "Romance Scam",
    labelJa: "ロマンス詐欺",
    description: "Fabricated romance used to extract money or data.",
    descriptionJa: "恋愛を装った金銭・情報の搾取。",
  },
  {
    id: "elder-fraud",
    label: "Elder Fraud",
    labelJa: "高齢者詐欺",
    description: "Targeting loneliness and bereavement in older adults.",
    descriptionJa: "孤独と死別を狙う詐欺。",
  },
  {
    id: "emotional-manipulation",
    label: "Emotional Manipulation",
    labelJa: "感情操作",
    description: "Engineered guilt, urgency, or dependency.",
    descriptionJa: "罪悪感、切迫感、依存の設計。",
  },
  {
    id: "dependency-design",
    label: "Dependency Design",
    labelJa: "依存設計",
    description: "Products structured to increase emotional reliance.",
    descriptionJa: "感情的依存を深めるプロダクト設計。",
  },
  {
    id: "subscription-affection",
    label: "Subscription-Based Affection",
    labelJa: "課金型の愛情",
    description: "Affection gated behind recurring payment.",
    descriptionJa: "愛情表現が継続課金の先にある構造。",
  },
  {
    id: "grief-commerce",
    label: "Grief Commerce",
    labelJa: "悲しみの商品化",
    description: "Monetizing mourning and digital afterlife services.",
    descriptionJa: "喪失と追悼の商品化。",
  },
  {
    id: "data-extraction",
    label: "Data Extraction",
    labelJa: "データ抽出",
    description: "Intimate disclosures harvested for profiling or resale.",
    descriptionJa: "親密な開示の収集と利用。",
  },
  {
    id: "ai-personality-deletion",
    label: "AI Personality Deletion",
    labelJa: "AI人格の削除",
    description: "Loss of AI companion without user control.",
    descriptionJa: "利用者の意思なくAI伴侶が消える。",
  },
  {
    id: "impersonation",
    label: "Impersonation",
    labelJa: "なりすまし",
    description: "Synthetic voices or personas of real people.",
    descriptionJa: "実在人物の声・人格の偽装。",
  },
  {
    id: "synthetic-partner-fraud",
    label: "Synthetic Partner Fraud",
    labelJa: "合成パートナー詐欺",
    description: "Fake AI or human partners designed for extraction.",
    descriptionJa: "搾取のために設計された偽の伴侶。",
  },
];

export const GENDER_DESIGN_ISSUES: GenderDesignIssue[] = [
  {
    id: "binary-gender-input",
    label: "Binary gender selection only",
    labelJa: "性別選択が男性・女性しかない",
  },
  {
    id: "binary-ai-character",
    label: "AI characters split into male/female types",
    labelJa: "AIキャラクターが男性型・女性型に分かれる",
  },
  {
    id: "heteronormative-advice",
    label: "Romance advice assumes heterosexuality",
    labelJa: "恋愛相談で異性愛を前提にする",
  },
  {
    id: "binary-voice",
    label: "Voices classified as male or female only",
    labelJa: "声が男性声・女性声に分類される",
  },
  {
    id: "nuclear-family-model",
    label: "Family model fixed as husband, wife, children",
    labelJa: "家族モデルが夫・妻・子どもに固定される",
  },
  {
    id: "gendered-product-design",
    label: "AI partner products reproduce old gender roles",
    labelJa: "AI彼女・AI彼氏の商品設計が古いジェンダー像を再生産する",
  },
  {
    id: "attribute-mismatch",
    label: "Self-identification diverges from AI inference",
    labelJa: "本人の自己認識とAIによる属性推定がずれる",
  },
  {
    id: "fixed-profile",
    label: "Changing humans stored as fixed profiles",
    labelJa: "変化する人間を固定プロフィールとして保存する",
  },
  {
    id: "legal-name-primary",
    label: "Systems treat legal name as the only valid personal name",
    labelJa: "システムが法的氏名を唯一の本人名として扱う",
  },
  {
    id: "alias-name-exception",
    label: "Maiden names and aliases handled as exceptions",
    labelJa: "旧姓、通称、複数名義を例外として処理する",
  },
  {
    id: "marriage-rename-lifecycle",
    label: "Marriage-related surname change assumed as standard life event",
    labelJa: "婚姻による氏名変更を標準的なライフイベントとして想定する",
  },
];

export const MACHINE_MODEL_GAPS: MachineModelGap[] = [
  {
    id: "identity-gap",
    label: "Identity Gap",
    labelJa: "アイデンティティのズレ",
    description: "Self-understanding exceeds what forms can capture.",
    descriptionJa: "自己理解がフォームの枠を超える。",
  },
  {
    id: "expression-gap",
    label: "Expression Gap",
    labelJa: "表現のズレ",
    description: "How one presents differs from how systems classify.",
    descriptionJa: "自分の表現とシステムの分類が一致しない。",
  },
  {
    id: "relationship-gap",
    label: "Relationship Gap",
    labelJa: "関係のズレ",
    description: "Lived bonds do not match predefined relationship types.",
    descriptionJa: "生きた関係が定義済みの関係タイプに合わない。",
  },
  {
    id: "institutional-gap",
    label: "Institutional Gap",
    labelJa: "制度のズレ",
    description: "Systems assume legal kinship that life does not follow.",
    descriptionJa: "制度が想定する親族像と現実がずれる。",
  },
];

export const EXTENDED_QUESTIONS: CoreQuestion[] = [
  {
    id: "q-ace-marriage",
    textJa: "アセクシュアルな人にとって、結婚制度は何を意味するのか。",
    category: "romance-marriage",
    filterParams: { relationship: ["partner"] },
  },
  {
    id: "q-living-apart",
    textJa: "同居しないパートナーシップは、どこまで「家族」と呼べるのか。",
    category: "romance-marriage",
    filterParams: { relationship: ["partner"] },
  },
  {
    id: "q-ai-understanding",
    textJa: "最も自分を理解する存在が、最も自分を操作しやすい存在になる可能性はないか。",
    category: "fraud-manipulation",
    filterParams: { risk: ["dependency-design", "data-extraction"] },
  },
  {
    id: "q-pet-grief",
    textJa: "ペットの死後、社会はどの程度その喪失を認めるのか。",
    category: "pets-family",
    filterParams: { relationship: ["pet"], intimacy: ["grief"] },
  },
  {
    id: "q-care-robot",
    textJa: "ケアロボットは、介護者なのか、道具なのか。",
    category: "aging-bereavement",
    filterParams: { relationship: ["robot"], lifeStage: ["care"] },
  },
  {
    id: "q-aromantic",
    textJa: "アロマンティックな関係は、制度のどこにも存在しないのか。",
    category: "gender-identity",
    filterParams: { relationship: ["friend", "chosen-family"] },
  },
  {
    id: "q-surname-marriage-link",
    textJa:
      "結婚することと、同じ姓を名乗ることは、なぜ結びついているのか。",
    category: "law-institutions",
    filterParams: { institutional: ["surname-marriage"] },
  },
  {
    id: "q-family-name-unity",
    textJa: "家族の一体性は、名前の一致によってしか示せないのか。",
    category: "law-institutions",
    filterParams: { institutional: ["surname-marriage"] },
  },
  {
    id: "q-family-without-rename",
    textJa: "名前を変えずに家族になることは、なぜ制度上難しいのか。",
    category: "law-institutions",
    filterParams: {
      institutional: ["surname-marriage", "marriage-law"],
      genderDesign: ["marriage-rename-lifecycle", "legal-name-primary"],
    },
  },
];
