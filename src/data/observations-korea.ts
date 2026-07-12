import type { ObservationInput } from "@/types/intimacy";

/** 韓国を対象とした観測記録（2024–2026） */
export const koreaObservations: ObservationInput[] = [
  {
    id: "obs-063",
    slug: "korea-record-low-marriage-singles-households",
    title: "Record-Low Marriage Rate and Single-Person Household Growth",
    titleJa: "婚姻率の歴史的低下と単身世帯の増加",
    summary:
      "More adults live alone while maintaining romantic relationships outside marriage registration.",
    summaryJa:
      "より多くの成人が単身で暮らし、婚姻登録外の恋愛関係を維持している。",
    date: "2024-02-28",
    country: "South Korea",
    region: "Seoul",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["routine", "belonging", "identity"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "housing", "inheritance"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-marriage-or-security", "q-institutional-recognition"],
    whatHappened:
      "Couples describe long dating periods without marriage plans; single-person households exceed paired households in major cities.",
    whatHappenedJa:
      "結婚予定のない長期交際を語るカップルが増える。主要都市で単身世帯が既婚世帯を上回る。",
    whyItMatters:
      "National intimacy patterns decouple from marriage faster than family policy adapts.",
    whyItMattersJa:
      "国家的な親密性パターンが、家族政策の適応より速く結婚から乖離する。",
  },
  {
    id: "obs-064",
    slug: "korea-same-sex-couples-no-legal-recognition",
    title: "Same-Sex Couples Without Legal Partnership Recognition",
    titleJa: "法的認知のない同性カップル",
    summary:
      "Committed same-sex couples cohabit and share finances while lacking marriage or civil union status.",
    summaryJa:
      "法的コミットメントのある同性カップルが、婚姻・民事結合の地位なしに同居・家計を共有する。",
    date: "2024-05-16",
    country: "South Korea",
    region: "Seoul",
    status: "unresolved",
    relationshipTypes: ["partner", "chosen-family"],
    intimacyDimensions: ["belonging", "identity", "care", "recognition"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["marriage-law", "medical-decisions", "inheritance"],
    risks: [],
    genderDesignIssues: ["heteronormative-advice", "nuclear-family-model"],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Partners use ceremonial events and social recognition within communities; hospitals and insurers still default to legal kin.",
    whatHappenedJa:
      "コミュニティ内儀式や社会的認知はある。病院・保険は依然として法的親族を前提とする。",
    whyItMatters:
      "Lived queer intimacy persists in a legal vacuum reinforced by administrative forms.",
    whyItMattersJa:
      "生きたクィアな親密性が、行政フォームに強化された法的空白の中で続く。",
  },
  {
    id: "obs-065",
    slug: "korea-ai-chatbot-lonely-youth",
    title: "AI Chatbots Used as Confidants by Lonely Youth",
    titleJa: "孤独な若者のAIへの話し相手",
    summary:
      "Adolescents and young adults use domestic and global chatbots for nightly emotional conversation.",
    summaryJa:
      "十代・若年成人が国内外のチャットボットを、毎晩の感情会話に使う。",
    date: "2024-08-22",
    country: "South Korea",
    status: "emerging",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["conversation", "recognition", "routine"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["platform-terms", "data-ownership"],
    risks: ["dependency-design", "data-extraction"],
    genderDesignIssues: ["binary-ai-character", "gendered-product-design"],
    questions: ["q-nonhuman-love", "q-ai-love-or-billing"],
    whatHappened:
      "Users report preferring AI listeners over friends for shame-sensitive topics; schools lack guidance frameworks.",
    whatHappenedJa:
      "恥ずかしい話題は友人よりAIに話すと報告する。学校に指針がない。",
    whyItMatters:
      "First emotional disclosure moves to platforms outside familial and peer oversight.",
    whyItMattersJa:
      "最初の感情開示が、家族・同辈の見守り外のプラットフォームへ移る。",
  },
  {
    id: "obs-066",
    slug: "korea-pet-stroller-family-culture",
    title: "Pet Stroller Culture and Pet-as-Family Urban Norms",
    titleJa: "ペットカート文化と都市のペット＝家族規範",
    summary:
      "Urban owners treat pets as family in public life while insurance and tenancy rules lag.",
    summaryJa:
      "都市の飼い主が公共の場でペットを家族として扱う。保険・賃貸規則は追いつかない。",
    date: "2024-11-07",
    country: "South Korea",
    region: "Busan",
    status: "established",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["care", "routine", "belonging", "responsibility"],
    lifeStages: ["young-adulthood", "later-life-solitude"],
    institutionalGaps: ["pet-ownership", "housing"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-pet-ownership"],
    whatHappened:
      "Cafes and transit norms shift toward pet inclusion; landlords still commonly ban animals.",
    whatHappenedJa:
      "カフェや移動の規範がペット包含へ。家主は依然としてペット禁止が多い。",
    whyItMatters:
      "Public culture recognizes pet kinship before rental law does.",
    whyItMattersJa:
      "賃貸法より先に、公共文化がペット親族性を認める。",
  },
  {
    id: "obs-067",
    slug: "korea-kpop-fan-parasocial-intimacy",
    title: "K-Pop Fan Parasocial Intimacy and Paid Fanclub Tiers",
    titleJa: "K-Popファンの準社会親密性と有料ファンクラブ",
    summary:
      "Fans describe emotional reliance on idols mediated through membership apps and exclusive content.",
    summaryJa:
      "ファンが会員アプリ・独占コンテンツを通じたアイドル依存を語る。",
    date: "2025-03-04",
    country: "South Korea",
    status: "established",
    relationshipTypes: ["fictional-character", "community"],
    intimacyDimensions: ["recognition", "belonging", "identity", "routine"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["platform-terms"],
    risks: ["subscription-affection", "dependency-design"],
    genderDesignIssues: ["gendered-product-design"],
    questions: ["q-nonhuman-love"],
    whatHappened:
      "Fans schedule daily app check-ins; agencies monetize proximity through tiered messaging and fan meetings.",
    whatHappenedJa:
      "毎日のアプリ確認を儀式化する。事務所が段階制メッセージ・ファンミーティングで近さを課金化する。",
    whyItMatters:
      "Industrialized entertainment formalizes one-directional intimacy at scale.",
    whyItMattersJa:
      "産業化エンタメが、一方的親密性を規模化して形式化する。",
  },
  {
    id: "obs-068",
    slug: "korea-elder-living-alone-ai-speaker",
    title: "Solo Elders Using Smart Speakers for Daily Greetings",
    titleJa: "独居高齢者のスマートスピーカー挨拶",
    summary:
      "Older adults living alone use voice assistants for morning and evening conversational rituals.",
    summaryJa:
      "独居高齢者が音声アシスタントで朝夕の会話儀式を行う。",
    date: "2025-06-18",
    country: "South Korea",
    region: "Daegu",
    status: "observed",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["conversation", "routine", "safety"],
    lifeStages: ["later-life-solitude"],
    institutionalGaps: ["care", "data-ownership"],
    risks: ["data-extraction", "dependency-design"],
    genderDesignIssues: ["binary-voice"],
    questions: ["q-family-loneliness"],
    whatHappened:
      "Municipal programs sometimes subsidize devices; children view them as remote monitoring tools.",
    whatHappenedJa:
      "自治体が端末を補助する場合がある。子どもは遠隔見守りと見なす。",
    whyItMatters:
      "Voice AI becomes default elder companionship where family migration hollows out co-residence.",
    whyItMattersJa:
      "家族の移住で同居が空く場所で、音声AIが高齢者伴侶のデフォルトになる。",
  },
  {
    id: "obs-069",
    slug: "korea-voice-clone-memorial-culture",
    title: "Voice Synthesis for Memorial Messages to Deceased Kin",
    titleJa: "故人への追悼メッセージ音声合成",
    summary:
      "Families use synthetic voice tools to deliver holiday messages in a deceased parent's voice.",
    summaryJa:
      "合成音声で、亡き親の声で季節の挨拶を届ける家族。",
    date: "2025-09-25",
    country: "South Korea",
    status: "emerging",
    relationshipTypes: ["deceased-person", "ai"],
    intimacyDimensions: ["memory", "grief", "conversation"],
    lifeStages: ["bereavement"],
    institutionalGaps: ["data-ownership", "ai-personality-ownership"],
    risks: ["grief-commerce", "impersonation"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife"],
    whatHappened:
      "Adult children combine memorial rituals with audio generated from archived voicemails; consent norms vary by family.",
    whatHappenedJa:
      "追悼儀式に旧ボイスメール由来の音声を組み合わせる。同意規範は家族ごとに異なる。",
    whyItMatters:
      "Traditional ancestor intimacy intersects with generative media products.",
    whyItMattersJa:
      "伝統的な祖先親密性が、生成メディア商品と交差する。",
  },
  {
    id: "obs-070",
    slug: "korea-living-apart-together-couples",
    title: "Living-Apart-Together Couples in High-Density Cities",
    titleJa: "高密度都市の別居パートナー",
    summary:
      "Partners maintain separate apartments while treating the relationship as primary life commitment.",
    summaryJa:
      "別アパートを保ちながら、関係を主要な人生コミットメントとする伴侶。",
    date: "2025-12-11",
    country: "South Korea",
    region: "Seoul",
    status: "emerging",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["conversation", "belonging", "routine", "care"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["housing", "marriage-law"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-living-apart", "q-marriage-or-security"],
    whatHappened:
      "Couples cite work hours and housing costs; they share calendars and messaging threads more than domestic space.",
    whatHappenedJa:
      "労働時間と住宅費を理由に別居。共有するのは住空間よりカレンダーとメッセージ。",
    whyItMatters:
      "Urban housing economics reshape intimacy geography without reducing commitment narratives.",
    whyItMattersJa:
      "都市住宅経済が、コミットメント叙事を保ったまま親密性の地理を組み替える。",
  },
  {
    id: "obs-071",
    slug: "korea-military-service-long-distance-intimacy",
    title: "Military Service and Long-Distance Couple Intimacy",
    titleJa: "兵役と遠距離カップルの親密性",
    summary:
      "Young couples sustain relationships through mandated separation during military service using messaging and timed leave.",
    summaryJa:
      "兵役による強制別居期間、メッセージと限られた休暇で関係を維持する若いカップル。",
    date: "2026-01-30",
    country: "South Korea",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["conversation", "memory", "responsibility", "belonging"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-marriage-or-security"],
    whatHappened:
      "Partners describe institutional scheduling of intimacy around leave windows; some relationships end during service.",
    whatHappenedJa:
      "休暇窗口に親密性を合わせる制度的スケジュールを語る。兵役中に関係が終わる例もある。",
    whyItMatters:
      "State service temporarily reorganizes couple time at a life-stage threshold.",
    whyItMattersJa:
      "国家サービスが、人生段階の境目でカップル時間を一時的に編成する。",
  },
  {
    id: "obs-072",
    slug: "korea-elder-romance-scam-messaging",
    title: "Messaging App Romance Scams Targeting Older Adults",
    titleJa: "高齢者を標的にしたメッセージアプリ恋愛詐欺",
    summary:
      "Isolated elders receive affectionate daily messages leading to fraudulent investment or transfer requests.",
    summaryJa:
      "孤立した高齢者が、毎日の愛情メッセージの後に投資・送金要求を受ける。",
    date: "2026-03-14",
    country: "South Korea",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["conversation", "recognition", "safety"],
    lifeStages: ["later-life-solitude", "bereavement"],
    institutionalGaps: ["platform-terms"],
    risks: ["elder-fraud", "romance-scam", "emotional-manipulation"],
    genderDesignIssues: [],
    relatedProjects: ["scam-folklore"],
    questions: ["q-ai-understanding", "q-family-loneliness"],
    whatHappened:
      "Scammers pose as overseas professionals; victims report shame that delays reporting to children or police.",
    whatHappenedJa:
      "海外の専門職を装う。被害者は恥ずかしさから子どもや警察への申告を遅らせる。",
    whyItMatters:
      "Messaging intimacy bypasses traditional family gatekeeping for elders.",
    whyItMattersJa:
      "メッセージ親密性が、高齢者の伝統的家族ゲートキーパーをすり抜ける。",
  },
  {
    id: "obs-073",
    slug: "korea-care-robot-nursing-home-pilot",
    title: "Care Robot Pilots in Nursing Facilities",
    titleJa: "養護施設のケアロボット実証",
    summary:
      "Facilities test companion robots for dementia engagement while families question substitution for visits.",
    summaryJa:
      "認知症関与のため伴走ロボットを試す施設。家族は訪問代替かと問う。",
    date: "2026-05-20",
    country: "South Korea",
    region: "Incheon",
    status: "observed",
    relationshipTypes: ["robot"],
    intimacyDimensions: ["touch", "care", "routine", "conversation"],
    lifeStages: ["care"],
    institutionalGaps: ["care"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-care-robot"],
    whatHappened:
      "Residents respond positively to animal-shaped robots; staff document reduced agitation but not relational equivalence.",
    whatHappenedJa:
      "動物型ロボットに好反応。興奮減少は記録するが、関係的同等性は証明しない。",
    whyItMatters:
      "Clinical calm metrics stand in for unanswered questions about robotic intimacy.",
    whyItMattersJa:
      "臨床的落ち着き指標が、ロボット親密性の未答の問いの代わりになる。",
  },
  {
    id: "obs-074",
    slug: "korea-digital-legacy-account-inheritance",
    title: "Digital Account Access After Partner Death",
    titleJa: "伴侶死後のデジタルアカウントアクセス",
    summary:
      "Surviving partners struggle to retrieve photos and messages from platform accounts of deceased loved ones.",
    summaryJa:
      "生存伴侶が、故人のプラットフォームアカウントから写真・メッセージを取り出せない。",
    date: "2026-07-06",
    country: "South Korea",
    region: "Seoul",
    status: "unresolved",
    relationshipTypes: ["partner", "deceased-person"],
    intimacyDimensions: ["memory", "grief", "responsibility"],
    lifeStages: ["bereavement", "end-of-life"],
    institutionalGaps: ["data-ownership", "inheritance", "platform-terms"],
    risks: ["ai-personality-deletion", "data-extraction"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife", "q-institutional-recognition"],
    whatHappened:
      "Partners without marriage certificates face additional verification barriers; shared cloud albums may lock abruptly.",
    whatHappenedJa:
      "婚姻証明がない伴侶は追加確認に直面する。共有クラウドアルバムが突然ロックされる。",
    whyItMatters:
      "Digital memory inheritance follows marital paperwork more than lived partnership.",
    whyItMattersJa:
      "デジタル記憶の継承が、生きた伴侶関係より婚姻書類に従う。",
  },
];
