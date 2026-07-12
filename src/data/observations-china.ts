import type { ObservationInput } from "@/types/intimacy";

/** 中国を対象とした観測記録（2024–2026） */
export const chinaObservations: ObservationInput[] = [
  {
    id: "obs-051",
    slug: "china-declining-marriage-cohabitation-rise",
    title: "Declining Marriage Registration with Rising Unregistered Cohabitation",
    titleJa: "婚姻届減少と届出を伴わない同居の増加",
    summary:
      "Young urban couples cohabit for years while postponing or rejecting hukou-linked marriage registration.",
    summaryJa:
      "都市部の若いカップルが、戸籍連動の婚姻登録を先延ばしまたは拒否しながら長期同居する。",
    date: "2024-03-12",
    country: "China",
    region: "Shanghai",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["routine", "care", "responsibility", "belonging"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "housing", "inheritance"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-marriage-or-security", "q-institutional-recognition"],
    whatHappened:
      "Partners share rental contracts and daily expenses but delay registration due to property rules, career mobility, or skepticism toward institutional marriage.",
    whatHappenedJa:
      "賃貸契約と生活費を共有するが、不動産規制、転勤、制度結婚への懐疑から登録を遅らせる。",
    whyItMatters:
      "Intimacy stabilizes in daily life while legal kinship is deferred by housing and hukou logic.",
    whyItMattersJa:
      "親密性は日常で安定する一方、戸籍・住宅ロジックにより法的親族関係が保留される。",
  },
  {
    id: "obs-052",
    slug: "china-form-marriage-lgbtq-couples",
    title: "Form Marriage Arrangements Outside Romantic Intimacy",
    titleJa: "恋愛を伴わない形婚",
    summary:
      "LGBTQ individuals enter cooperative marriages with strangers to satisfy family and workplace expectations while maintaining separate intimate lives.",
    summaryJa:
      "LGBTQ当事者が家族・職場の期待に応えるため、別々の親密生活を保ったまま見知らぬ相手と形婚する。",
    date: "2024-06-08",
    country: "China",
    region: "Beijing",
    status: "observed",
    relationshipTypes: ["partner", "chosen-family"],
    intimacyDimensions: ["identity", "belonging", "responsibility"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["marriage-law", "housing", "medical-decisions"],
    risks: ["emotional-manipulation"],
    genderDesignIssues: ["heteronormative-advice", "nuclear-family-model"],
    questions: ["q-institutional-recognition", "q-ace-marriage"],
    whatHappened:
      "Contractual spouses appear at holidays and on social media; authentic partners remain institutionally invisible.",
    whatHappenedJa:
      "契約上の配偶者が帰省やSNSに登場する。本当の伴侶は制度的に不可視のまま。",
    whyItMatters:
      "Marriage becomes performance for kin while real intimacy is hidden from institutions.",
    whyItMattersJa:
      "結婚が親族向けの演技となり、本当の親密性が制度から隠される。",
  },
  {
    id: "obs-053",
    slug: "china-left-behind-elder-wechat-intimacy",
    title: "WeChat Video Rituals Between Left-Behind Elders and Migrant Children",
    titleJa: "留守老人と移住子どものWeChat映像儀式",
    summary:
      "Elderly parents in rural areas sustain daily intimacy through scheduled video calls with children working in distant cities.",
    summaryJa:
      "地方に残る高齢親が、都市で働く子どもとの定時ビデオ通話で日常の親密性を維持する。",
    date: "2024-09-20",
    country: "China",
    region: "Henan",
    status: "established",
    relationshipTypes: ["human", "community"],
    intimacyDimensions: ["conversation", "routine", "care", "belonging"],
    lifeStages: ["later-life-solitude", "care"],
    institutionalGaps: ["care", "housing"],
    risks: ["elder-fraud"],
    genderDesignIssues: [],
    questions: ["q-family-loneliness"],
    whatHappened:
      "Families treat nightly calls as mutual check-ins; physical co-residence is replaced by platform-mediated presence.",
    whatHappenedJa:
      "毎晩の通話を相互安否確認とする。同居はプラットフォーム媒介の存在感に置き換わる。",
    whyItMatters:
      "Platform intimacy substitutes for geographic family proximity at national scale.",
    whyItMattersJa:
      "プラットフォーム上の親密性が、国家的規模で地理的家族近接の代替になる。",
  },
  {
    id: "obs-054",
    slug: "china-ai-companion-urban-singles",
    title: "AI Chat Companions Among Urban Single Workers",
    titleJa: "都市部単身労働者のAI会話伴侶",
    summary:
      "Young workers use domestic AI companion apps for after-work conversation and emotional venting.",
    summaryJa:
      "若い労働者が国産AI伴侶アプリを、退勤後の会話と感情の吐露に使う。",
    date: "2025-01-25",
    country: "China",
    region: "Shenzhen",
    status: "emerging",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["conversation", "recognition", "routine"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["platform-terms", "data-ownership"],
    risks: ["dependency-design", "subscription-affection", "data-extraction"],
    genderDesignIssues: ["binary-ai-character", "gendered-product-design"],
    questions: ["q-ai-love-or-billing", "q-nonhuman-love"],
    whatHappened:
      "Users customize gendered personas and pay for extended memory; breakup-like distress follows account bans or feature removals.",
    whatHappenedJa:
      "ジェンダー付き人格をカスタマイズし記憶延長に課金する。BANや機能削除で失恋に近い distress が報告される。",
    whyItMatters:
      "Migrant urban isolation feeds commercialized conversational intimacy.",
    whyItMattersJa:
      "都市部の移住孤立が、商業化された会話親密性を育てる。",
  },
  {
    id: "obs-055",
    slug: "china-pig-butchering-romance-scam",
    title: "Long-Build Romance Fraud Targeting Lonely Urban Adults",
    titleJa: "孤独な都市成人を標的にした長期恋愛詐欺",
    summary:
      "Scammers cultivate months-long romantic trust via messaging apps before financial extraction.",
    summaryJa:
      "詐欺師がメッセージアプリで数か月の恋愛的信頼を築き、のちに金銭を搾取する。",
    date: "2025-04-18",
    country: "China",
    status: "observed",
    relationshipTypes: ["partner", "ai"],
    intimacyDimensions: ["conversation", "recognition", "safety"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["platform-terms"],
    risks: [
      "romance-scam",
      "emotional-manipulation",
      "synthetic-partner-fraud",
    ],
    genderDesignIssues: [],
    relatedProjects: ["scam-folklore"],
    questions: ["q-ai-understanding"],
    whatHappened:
      "Victims report daily affection messages and shared future plans; meetings are repeatedly postponed until investment requests appear.",
    whatHappenedJa:
      "毎日の愛情メッセージと将来設計を共有する。投資要求まで会えない。",
    whyItMatters:
      "Intimacy labor becomes a fraud onboarding pipeline in dense messaging ecosystems.",
    whyItMattersJa:
      "親密性労働が、密なメッセージング・エコシステムの詐欺導入パイプラインになる。",
  },
  {
    id: "obs-056",
    slug: "china-pet-family-tier-one-cities",
    title: "Pets as Family Members in Tier-One City Households",
    titleJa: "一線都市世帯のペット＝家族",
    summary:
      "Urban couples without children invest heavily in pet care, memorial services, and pet-friendly housing searches.",
    summaryJa:
      "子なし都市カップルが、ペットケア、追悼サービス、ペット可住宅探しに大きく投資する。",
    date: "2025-07-03",
    country: "China",
    region: "Guangzhou",
    status: "established",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["care", "routine", "belonging", "responsibility"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["pet-ownership", "housing"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-pet-ownership"],
    whatHappened:
      "Owners purchase premium veterinary plans and pet cemeteries; landlords remain primary gatekeepers of cohabitation rights.",
    whatHappenedJa:
      "高級獣医プランやペット霊園を利用する。賃貸の同居権は依然として家主が握る。",
    whyItMatters:
      "Consumer markets recognize pet kinship that tenancy law still restricts.",
    whyItMattersJa:
      "消費市場だけが、賃貸法がまだ制限するペット親族性を認める。",
  },
  {
    id: "obs-057",
    slug: "china-online-memorial-ancestor-platforms",
    title: "Online Memorial Platforms for Ancestor Veneration",
    titleJa: "オンライン祭祀・追悼プラットフォーム",
    summary:
      "Families maintain digital shrines and timed rituals for deceased relatives on commercial memorial sites.",
    summaryJa:
      "家族が商用追悼サイトで故人のデジタル霊廟と定時の儀式を維持する。",
    date: "2025-10-12",
    country: "China",
    status: "established",
    relationshipTypes: ["deceased-person", "place"],
    intimacyDimensions: ["memory", "grief", "routine", "belonging"],
    lifeStages: ["bereavement"],
    institutionalGaps: ["data-ownership", "end-of-life-decisions"],
    risks: ["grief-commerce", "data-extraction"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife"],
    whatHappened:
      "Users pay for virtual incense, message boards, and anniversary reminders; offline tomb visits are supplemented not replaced.",
    whatHappenedJa:
      "バーチャル線香、掲示板、忌日通知に課金する。オフライン墓参りを補完する。",
    whyItMatters:
      "Ancestor intimacy migrates to subscription memorial infrastructure.",
    whyItMattersJa:
      "祖先との親密性が、サブスク型追悼インフラへ移行する。",
  },
  {
    id: "obs-058",
    slug: "china-nursing-robot-companion",
    title: "Companion Robots in Nursing Home Recreation Programs",
    titleJa: "養老施設レクリエーションの伴走ロボット",
    summary:
      "Institutions deploy small companion robots for conversation and mood monitoring among residents with limited family visits.",
    summaryJa:
      "家族の面会が少ない入所者向けに、会話・気分モニタリング用の小型伴走ロボットを導入する施設。",
    date: "2026-01-15",
    country: "China",
    region: "Chengdu",
    status: "observed",
    relationshipTypes: ["robot"],
    intimacyDimensions: ["conversation", "care", "routine", "touch"],
    lifeStages: ["care", "later-life-solitude"],
    institutionalGaps: ["care", "data-ownership"],
    risks: ["data-extraction"],
    genderDesignIssues: ["binary-voice"],
    questions: ["q-care-robot", "q-family-loneliness"],
    whatHappened:
      "Residents assign nicknames to devices; staff track engagement metrics while family visits remain irregular.",
    whatHappenedJa:
      "利用者が端末に愛称を付ける。スタッフはエンゲージメントを記録するが、家族訪問は依然不定期。",
    whyItMatters:
      "Institutional care scales robotic intimacy where familial visits fail.",
    whyItMattersJa:
      "家族訪問の不足を、制度的ケアがロボット親密性でスケールする。",
  },
  {
    id: "obs-059",
    slug: "china-elder-remarriage-family-opposition",
    title: "Late-Life Remarriage Blocked by Adult Children Over Property",
    titleJa: "資産をめぐり子どもが阻む晩年再婚",
    summary:
      "Widowed elders abandon new partnerships after children threaten inheritance disputes.",
    summaryJa:
      "死別後の新しい伴侶関係を、相続争いをちらつかせる子どもが阻み、高齢者が関係を断つ。",
    date: "2026-03-20",
    country: "China",
    region: "Jiangsu",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["grief", "care", "responsibility", "belonging"],
    lifeStages: ["bereavement", "later-life-solitude"],
    institutionalGaps: ["inheritance", "marriage-law"],
    risks: ["elder-fraud"],
    genderDesignIssues: [],
    questions: ["q-marriage-or-security", "q-family-loneliness"],
    whatHappened:
      "Couples consider informal cohabitation without registration; children intervene citing property notarization fears.",
    whatHappenedJa:
      "届出なし同居を検討するが、子どもが公証・財産を理由に介入する。",
    whyItMatters:
      "Later-life intimacy is vetoed through inheritance anxiety rather than lack of desire.",
    whyItMattersJa:
      "晩年の親密性は、欲望の欠如ではなく相続不安によって拒否される。",
  },
  {
    id: "obs-060",
    slug: "china-virtual-idol-parasocial-intimacy",
    title: "Virtual Idol Parasocial Intimacy and Membership Economies",
    titleJa: "バーチャルアイドル準社会親密性と会員経済",
    summary:
      "Fans sustain daily emotional bonds with virtual streamers through paid memberships and exclusive messaging tiers.",
    summaryJa:
      "ファンが有料会員・独占メッセージ階層を通じて、バーチャル配信者と日常的な感情関係を維持する。",
    date: "2026-05-08",
    country: "China",
    status: "emerging",
    relationshipTypes: ["fictional-character", "ai", "community"],
    intimacyDimensions: ["recognition", "belonging", "routine", "identity"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["platform-terms", "ai-personality-ownership"],
    risks: ["subscription-affection", "dependency-design"],
    genderDesignIssues: ["binary-ai-character", "gendered-product-design"],
    questions: ["q-nonhuman-love", "q-ai-love-or-billing"],
    whatHappened:
      "Members describe streamers as 'companions' during lonely work shifts; platform rules ban real-world dating claims.",
    whatHappenedJa:
      "孤独な勤務中の「伴侶」と呼ぶ会員がいる。プラットフォームは現実恋愛の主張を禁止する。",
    whyItMatters:
      "Commercial fandom formalizes intimacy without reciprocal obligation.",
    whyItMattersJa:
      "商業的ファンダムが、相互義務のない親密性を形式化する。",
  },
  {
    id: "obs-061",
    slug: "china-hukou-barrier-unmarried-partners",
    title: "Hukou Barriers for Unmarried Partners Seeking Joint Services",
    titleJa: "未婚パートナーの戸籍壁",
    summary:
      "Unmarried cohabiting couples cannot access joint school, insurance, or housing benefits tied to marital household registration.",
    summaryJa:
      "非婚同居カップルが、婚姻世帯に紐づく入学・保険・住宅福利を共同利用できない。",
    date: "2026-06-22",
    country: "China",
    region: "Beijing",
    status: "unresolved",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["responsibility", "safety", "care"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["marriage-law", "housing", "medical-decisions"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Partners maintain separate hukou records despite years of shared rent and child-rearing plans.",
    whatHappenedJa:
      "数年の共同賃貸・子育て計画があっても戸籍は別のまま。",
    whyItMatters:
      "Household registration binds intimacy to paperwork more than to daily life.",
    whyItMattersJa:
      "戸籍が、日常生活より書類手続きに親密性を縛る。",
  },
  {
    id: "obs-062",
    slug: "china-ai-grief-bot-deceased-chat",
    title: "Domestic Services Simulating Chat with Deceased Relatives",
    titleJa: "故人との会話を模す国内サービス",
    summary:
      "Startups offer chat interfaces trained on WeChat history to simulate conversation with deceased family members.",
    summaryJa:
      "WeChat履歴から学習し、亡き家族との会話を模すチャットを提供する国内スタートアップ。",
    date: "2026-07-08",
    country: "China",
    region: "Hangzhou",
    status: "emerging",
    relationshipTypes: ["deceased-person", "ai"],
    intimacyDimensions: ["memory", "conversation", "grief"],
    lifeStages: ["bereavement"],
    institutionalGaps: ["data-ownership", "ai-personality-ownership"],
    risks: ["grief-commerce", "impersonation", "ai-personality-deletion"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife"],
    whatHappened:
      "Families upload chat exports after funerals; ethics of consent and data deletion vary by vendor.",
    whatHappenedJa:
      "葬儀後にチャット履歴をアップロードする。同意と削除の倫理は事業者ごとに異なる。",
    whyItMatters:
      "Messaging archives become training material for afterlife intimacy products.",
    whyItMattersJa:
      "メッセージアーカイブが、来世親密性商品の学習素材になる。",
  },
];
