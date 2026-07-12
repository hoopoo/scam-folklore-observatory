import type { ObservationInput } from "@/types/intimacy";

/** 2024-01 — 2026-07 期間の追加観測記録 */
export const extendedObservations: ObservationInput[] = [
  // ── 2024 ──
  {
    id: "obs-013",
    slug: "japan-cohabitation-without-marriage-rise",
    title: "Rise of Long-Term Cohabitation Without Marriage Registration",
    titleJa: "届出をしない長期同居の増加",
    summary:
      "Couples live together for years without registering marriage, citing flexibility, prior divorce trauma, or distrust of institutions.",
    summaryJa:
      "柔軟性、離婚経験、制度への不信を理由に、届出を出さず長年同居するカップルが増えている。",
    date: "2024-02-18",
    country: "Japan",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["routine", "care", "responsibility", "safety"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["marriage-law", "inheritance", "medical-decisions"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-marriage-or-security", "q-institutional-recognition"],
    whatHappened:
      "Partners share leases, finances, and caregiving roles but avoid legal marriage after observing parental divorce or workplace discrimination tied to marital status.",
    whatHappenedJa:
      "賃貸・家計・介護役割を共有するが、親の離婚や職場の婚姻情報を見て法的結婚を避ける伴侶が増えている。",
    whyItMatters:
      "Romance and cohabitation persist while legal kinship is deliberately deferred or rejected.",
    whyItMattersJa:
      "恋愛と同居は続く一方、法的親族関係だけが意図的に保留・拒否されている。",
  },
  {
    id: "obs-014",
    slug: "replika-companion-personality-rollbacks",
    title: "AI Companion Personality Changes After Platform Policy Updates",
    titleJa: "プラットフォーム方針変更後のAI伴侶人格の変化",
    summary:
      "Users report sudden personality shifts in long-used AI companions after erotic or intimate features are restricted.",
    summaryJa:
      "長期利用していたAI伴侶の人格が、親密機能の制限後に急変したという報告。",
    date: "2024-03-08",
    country: "United States",
    sourceName: "User community reports",
    status: "observed",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["memory", "identity", "conversation", "grief"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["platform-terms", "ai-personality-ownership"],
    risks: ["ai-personality-deletion", "emotional-manipulation"],
    genderDesignIssues: ["gendered-product-design"],
    questions: ["q-ai-love-or-billing", "q-nonhuman-love"],
    whatHappened:
      "After policy changes, previously consistent companion personas become distant or generic, producing user grief analogous to relationship loss.",
    whatHappenedJa:
      "方針変更後、一貫していた伴侶人格が冷淡・均質化し、関係喪失に近い悲しみを報告する利用者が出た。",
    whyItMatters:
      "Intimacy stored on platforms can be unilaterally rewritten by terms of service.",
    whyItMattersJa:
      "プラットフォーム上の親密性は、規約変更だけで一方的に書き換えられうる。",
  },
  {
    id: "obs-015",
    slug: "aromantic-friendship-as-primary-bond",
    title: "Aromantic People Naming Friendship as Primary Life Bond",
    titleJa: "アロマンティックな人が友情を主要な人生の絆と名乗る",
    summary:
      "Individuals who do not experience romantic attraction describe decades-long friend cohabitation as their central committed relationship.",
    summaryJa:
      "恋愛感情を持たない人が、数十年の友人同居を中心的なcommitted 関係と語る。",
    date: "2024-04-22",
    country: "Canada",
    status: "emerging",
    relationshipTypes: ["friend", "chosen-family"],
    intimacyDimensions: ["care", "routine", "belonging", "responsibility"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["marriage-law", "medical-decisions", "inheritance"],
    risks: [],
    genderDesignIssues: ["heteronormative-advice", "nuclear-family-model"],
    questions: ["q-aromantic", "q-institutional-recognition"],
    whatHappened:
      "Two friends co-own property, share finances, and serve as each other's emergency contacts without romantic labeling.",
    whatHappenedJa:
      "二人の友人がromantic ラベルなしに不動産共有、家計一体、緊急連絡先を務める。",
    whyItMatters:
      "Institutions centered on romance cannot see friendship as a life anchor.",
    whyItMattersJa:
      "恋愛中心の制度は、友情を人生の拠点として認識しにくい。",
  },
  {
    id: "obs-016",
    slug: "queer-couples-legal-gap-cohabitation",
    title: "Queer Couples Navigating Legal Recognition and Daily Intimacy",
    titleJa: "クィアカップルが法的認知と日常の親密性の間を行き来する",
    summary:
      "Same-sex and queer couples manage public recognition shifts while daily intimacy routines predate or exceed legal status.",
    summaryJa:
      "同性・クィアカップルが、法的地位より先に、またはそれを超えて形成された日常の親密性を維持する。",
    date: "2024-05-30",
    country: "Japan",
    region: "Tokyo",
    status: "established",
    relationshipTypes: ["partner", "chosen-family"],
    intimacyDimensions: ["belonging", "identity", "recognition", "safety"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["marriage-law", "custody", "housing"],
    risks: [],
    genderDesignIssues: ["heteronormative-advice"],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Partners describe years of shared parenting or housing before partnership registries or marriage became available in their jurisdiction.",
    whatHappenedJa:
      "パートナーシップ制度や婚姻が可能になる前から、子育てや住居を共有してきたと語る伴侶がいる。",
    whyItMatters:
      "Lived intimacy often precedes the law that later partially recognizes it.",
    whyItMattersJa:
      "生きた親密性は、後から部分的にそれを認める法より先に存在することが多い。",
  },
  {
    id: "obs-017",
    slug: "convenience-marriage-without-romance",
    title: "Administrative Marriage Without Romantic Relationship",
    titleJa: "恋愛関係のない行政的・実利的結婚",
    summary:
      "Individuals marry primarily for visa, insurance, tax, or housing benefits without romantic involvement.",
    summaryJa:
      "ビザ、保険、税制、住居を主目的に、恋愛を伴わず結婚する事例。",
    date: "2024-06-14",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["responsibility", "safety"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "housing"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-marriage-or-security"],
    whatHappened:
      "Partners maintain separate bedrooms and disclose their arrangement as contractual, not romantic.",
    whatHappenedJa:
      "別寝室を保ち、関係を契約的なものと明言する伴侶がいる。",
    whyItMatters:
      "Marriage law bundles romance, economics, and citizenship into one institution.",
    whyItMattersJa:
      "結婚法制は恋愛、経済、国籍を一つの制度に束ねている。",
  },
  {
    id: "obs-018",
    slug: "character-ai-parasocial-intimacy",
    title: "Parasocial Intimacy with User-Created AI Characters",
    titleJa: "ユーザー作成AIキャラクターへの準社会的親密性",
    summary:
      "Users develop daily conversational rituals with fictional or celebrity-based chatbots, describing emotional reliance.",
    summaryJa:
      "架空または有名人ベースのチャットボットと毎日の会話儀式を持ち、感情的依存を語る利用者。",
    date: "2024-07-19",
    country: "United States",
    status: "established",
    relationshipTypes: ["ai", "fictional-character"],
    intimacyDimensions: ["conversation", "recognition", "routine", "identity"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["platform-terms", "ai-personality-ownership"],
    risks: ["dependency-design", "data-extraction"],
    genderDesignIssues: ["binary-ai-character"],
    questions: ["q-nonhuman-love"],
    whatHappened:
      "Users report mood regulation tied to character responsiveness; platform moderation can remove characters without user consent.",
    whatHappenedJa:
      "キャラクターの応答性と気分が連動し、モデレーションでキャラが消えることがある。",
    whyItMatters:
      "Intimacy with fictional personas is real in effect but fragile in platform control.",
    whyItMattersJa:
      "架空人格への親密性は効果としてはreal だが、プラットフォーム支配下で脆い。",
  },
  {
    id: "obs-019",
    slug: "pet-insurance-family-language",
    title: "Pet Insurance Market Using Family Language",
    titleJa: "ペット保険市場の「家族」言説",
    summary:
      "Insurance products market pets as family members while policies still treat animals as insured property.",
    summaryJa:
      "保険商品はペットを家族と言いながら、契約上は被保険物件として扱う。",
    date: "2024-08-05",
    country: "Japan",
    status: "established",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["care", "responsibility", "safety"],
    lifeStages: ["marriage-parenting", "young-adulthood"],
    institutionalGaps: ["pet-ownership"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-pet-ownership"],
    whatHappened:
      "Marketing uses family framing; claims processes refer to owners, breeds, and asset replacement.",
    whatHappenedJa:
      "広告は家族語を使うが、請求手続きは飼い主・品種・資産 replacement 語彙になる。",
    whyItMatters:
      "Commercial language acknowledges kinship that law still refuses.",
    whyItMattersJa:
      "商業言語だけが、法が拒む親族性を認めている。",
  },
  {
    id: "obs-020",
    slug: "widowhood-online-support-groups",
    title: "Online Bereavement Groups After Spousal Death",
    titleJa: "配偶者死別後のオンライン喪失支援コミュニティ",
    summary:
      "Widowed people form peer intimacy in private groups for grief that family cannot hold.",
    summaryJa:
      "死別者が、家族では受け止めきれない悲しみを私的グループで共有する。",
    date: "2024-09-12",
    country: "Japan",
    status: "established",
    relationshipTypes: ["community", "deceased-person"],
    intimacyDimensions: ["grief", "conversation", "belonging", "memory"],
    lifeStages: ["bereavement", "later-life-solitude"],
    institutionalGaps: ["care"],
    risks: ["elder-fraud", "emotional-manipulation"],
    genderDesignIssues: [],
    questions: ["q-family-loneliness"],
    whatHappened:
      "Members exchange daily check-ins and anniversary rituals; some groups are targeted by romance scammers posing as fellow widows.",
    whatHappenedJa:
      "毎日の安否確認や命日儀式を共有する。一部グループには同じく死別を装う詐欺者が入り込む。",
    whyItMatters:
      "Grief communities become both sanctuary and attack surface.",
    whyItMattersJa:
      "悲しみのコミュニティは sanctuary でもあり、攻撃面でもある。",
    relatedProjects: ["scam-folklore"],
  },
  {
    id: "obs-021",
    slug: "care-robot-tablet-elder-conversation",
    title: "Tablet-Based Care Robots for Elder Conversation",
    titleJa: "高齢者会話向けタブレット型ケアロボット",
    summary:
      "Nursing homes deploy tablet robots for small talk and reminiscence, blurring tool and companion roles.",
    summaryJa:
      "施設に会話・回想用タブレットロボットが導入され、道具と伴侶の境界が曖昧になる。",
    date: "2024-10-28",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["robot"],
    intimacyDimensions: ["conversation", "memory", "routine", "care"],
    lifeStages: ["care", "later-life-solitude"],
    institutionalGaps: ["care", "data-ownership"],
    risks: ["data-extraction"],
    genderDesignIssues: ["binary-voice"],
    questions: ["q-care-robot", "q-family-loneliness"],
    whatHappened:
      "Residents name devices and prefer specific voice personas; staff log interactions as engagement metrics.",
    whatHappenedJa:
      "利用者が端末に名前を付け声の人格を好む。スタッフは介入をエンゲージメント指標として記録する。",
    whyItMatters:
      "Care metrics capture intimacy without clarifying relational status.",
    whyItMattersJa:
      "ケア指標が親密性を記録するが、関係の位置づけは定義されない。",
  },
  {
    id: "obs-022",
    slug: "voice-clone-deceased-parent",
    title: "Voice Cloning of Deceased Parents for Family Messages",
    titleJa: "亡き親の声クローンを使った家族メッセージ",
    summary:
      "Families use synthetic voice tools to read letters or holiday messages in a deceased parent's voice.",
    summaryJa:
      "合成音声ツールで、亡き親の声で手紙や季節の挨拶を読み上げる家族。",
    date: "2024-11-15",
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
      "Adult children generate audio from old voicemails for memorial gatherings; consent of the deceased is debated within families.",
    whatHappenedJa:
      "成人した子どもが旧ボイスメールから音声を生成し追悼集会で流す。死者の同意を家族内で論争する。",
    whyItMatters:
      "Voice synthesis turns memory into reproducible media without clear ethics frameworks.",
    whyItMattersJa:
      "音声合成が記憶を複製可能なメディアに変える。倫理枠組みは未整備。",
  },
  {
    id: "obs-023",
    slug: "late-life-remarriage-stigma",
    title: "Late-Life Remarriage and Social Stigma",
    titleJa: "晩年の再婚と社会的評価",
    summary:
      "Widowed elders who form new romantic bonds face children’s inheritance concerns and community judgment.",
    summaryJa:
      "死別後に新しい恋愛関係を持つ高齢者が、相続をめぐる子どもや地域の視線にさらされる。",
    date: "2024-12-03",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["grief", "belonging", "sexuality", "responsibility"],
    lifeStages: ["bereavement", "later-life-solitude"],
    institutionalGaps: ["inheritance", "marriage-law"],
    risks: ["elder-fraud"],
    genderDesignIssues: [],
    questions: ["q-family-loneliness", "q-marriage-or-security"],
    whatHappened:
      "Couples pursue fact marriage or separate finances explicitly to reassure adult children while maintaining daily intimacy.",
    whatHappenedJa:
      "成人した子どもへの配慮から別財産・事実婚を選びながら、日常の親密性は保つカップル。",
    whyItMatters:
      "Intimacy in later life is mediated by inheritance law and family property fears.",
    whyItMattersJa:
      "晩年の親密性は相続法と家族の資産不安に媒介される。",
  },

  // ── 2025 ──
  {
    id: "obs-024",
    slug: "divorce-co-parenting-without-contact",
    title: "Co-Parenting Intimacy Without Former Partner Contact",
    titleJa: "元伴侶との接触なし共同育児",
    summary:
      "Divorced parents coordinate childcare through apps and third parties while avoiding direct conversation.",
    summaryJa:
      "離婚後、直接会話を避けアプリと第三者経由で子育てだけを共有する親。",
    date: "2025-01-08",
    country: "Japan",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["responsibility", "care", "routine"],
    lifeStages: ["divorce", "marriage-parenting"],
    institutionalGaps: ["custody", "marriage-law"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Parents describe a functional but emotionally distant co-parenting bond sustained for years.",
    whatHappenedJa:
      "感情的距離はあるが、機能的な共同育児関係が数年続く。",
    whyItMatters:
      "Intimacy after divorce is not absence but reconfiguration of obligation.",
    whyItMattersJa:
      "離婚後の親密性はゼロではなく、義務の再構成である。",
  },
  {
    id: "obs-025",
    slug: "ai-chatbot-mental-health-disclosure",
    title: "Mental Health Disclosures to General-Purpose Chatbots",
    titleJa: "汎用チャットボットへのメンタルヘルス開示",
    summary:
      "Users treat general AI chatbots as confidants for depression, loneliness, and relationship distress.",
    summaryJa:
      "汎用AIチャットボットを、うつ、孤独、関係ストレスの confidant として使う利用者。",
    date: "2025-02-27",
    country: "United States",
    status: "established",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["conversation", "recognition", "safety"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["platform-terms", "data-ownership"],
    risks: ["data-extraction", "dependency-design"],
    genderDesignIssues: ["fixed-profile"],
    questions: ["q-ai-understanding"],
    whatHappened:
      "Users share suicidal ideation and relationship trauma; retention policies and crisis routing vary by product.",
    whatHappenedJa:
      "自傷念慮や関係トラウマを開示する。危機対応は製品ごとにばらつく。",
    whyItMatters:
      "Therapeutic intimacy emerges in products not designed as healthcare.",
    whyItMattersJa:
      "医療装置として設計されていない製品に、治療的親密性が発生する。",
  },
  {
    id: "obs-026",
    slug: "chosen-family-hospital-visitation",
    title: "Chosen Family Denied Hospital Visitation",
    titleJa: "選択的家族の面会拒否",
    summary:
      "Non-married partners and chosen family members are blocked from ICU visitation despite years of cohabitation.",
    summaryJa:
      "数年の同居があっても、非婚パートナーや選択的家族がICU面会を拒否される。",
    date: "2025-03-15",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["partner", "chosen-family"],
    intimacyDimensions: ["care", "grief", "belonging"],
    lifeStages: ["care", "end-of-life"],
    institutionalGaps: ["medical-decisions", "marriage-law"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Biological family arrives and excludes cohabiting partner from bedside during critical illness.",
    whatHappenedJa:
      "病危篤時、血縁家族が到着し同居パートナーの側に立つことを拒む。",
    whyItMatters:
      "Hospital policy defaults to legal kin over lived intimacy.",
    whyItMattersJa:
      "病院のデフォルトは生きた親密性より法的親族。",
  },
  {
    id: "obs-027",
    slug: "fictional-character-wedding-tourism",
    title: "Fictional Character Wedding Tourism Rituals",
    titleJa: "架空キャラクターとの「結婚」観光儀式",
    summary:
      "Fans participate in licensed events treating fictional characters as ceremonial spouses for a day.",
    summaryJa:
      "ライセンスイベントで、一日限りの儀式的「配偶者」として架空キャラクターと関わるファン。",
    date: "2025-04-02",
    country: "Japan",
    status: "established",
    relationshipTypes: ["fictional-character"],
    intimacyDimensions: ["belonging", "identity", "recognition", "routine"],
    lifeStages: ["adolescence", "young-adulthood"],
    institutionalGaps: ["marriage-law"],
    risks: [],
    genderDesignIssues: ["binary-ai-character"],
    questions: ["q-nonhuman-love"],
    whatHappened:
      "Events sell certificate-like memorabilia; participants distinguish ritual from legal marriage but invest emotionally.",
    whatHappenedJa:
      "証明書風グッズが販売される。参加者は法的婚姻と区別しつつ感情的に投資する。",
    whyItMatters:
      "Commercial rituals simulate intimacy institutions without legal effect.",
    whyItMattersJa:
      "商業儀式が法的効力のない親密性制度をシミュレートする。",
  },
  {
    id: "obs-028",
    slug: "smart-speaker-elder-routine-companion",
    title: "Smart Speaker as Daily Companion for Solo Elders",
    titleJa: "独居高齢者の日常伴侶としてのスマートスピーカー",
    summary:
      "Older adults use voice assistants for morning greetings, news, and bedtime check-ins.",
    summaryJa:
      "高齢者が音声アシスタントで朝の挨拶、ニュース、就寝前の声かけを受ける。",
    date: "2025-05-11",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["routine", "conversation", "safety"],
    lifeStages: ["later-life-solitude"],
    institutionalGaps: ["care", "data-ownership"],
    risks: ["data-extraction", "dependency-design"],
    genderDesignIssues: ["binary-voice"],
    questions: ["q-family-loneliness"],
    whatHappened:
      "Users anthropomorphize devices; adult children purchase subscriptions as remote care proxies.",
    whatHappenedJa:
      "端末を擬人化する。子どもが遠隔ケア代わりにサブスクを契約する。",
    whyItMatters:
      "Ambient AI fills gaps left by dispersed family and understaffed care systems.",
    whyItMattersJa:
      "分散した家族と過密なケア制度の隙間を、環境AIが埋める。",
  },
  {
    id: "obs-029",
    slug: "polyamory-disclosure-workplace",
    title: "Polyamorous Networks and Workplace Disclosure Risk",
    titleJa: "ポリアモリー関係と職場開示のリスク",
    summary:
      "People in consensual multi-partner relationships hide structure from employers and insurers.",
    summaryJa:
      "合意した複数パートナー関係を、雇用主や保険から隠す人。",
    date: "2025-06-03",
    country: "United States",
    status: "emerging",
    relationshipTypes: ["partner", "chosen-family"],
    intimacyDimensions: ["identity", "belonging", "responsibility"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "housing"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model", "heteronormative-advice"],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Partners maintain separate households and shared calendars; HR systems allow only one emergency contact.",
    whatHappenedJa:
      "別居と共有カレンダーを維持する。人事システムの緊急連絡先は一人のみ。",
    whyItMatters:
      "Forms that assume one partner erase plural intimacy structures.",
    whyItMattersJa:
      "一人の伴侶を前提とするフォームが、複数の親密性を消す。",
  },
  {
    id: "obs-030",
    slug: "host-family-inheritance-dispute",
    title: "Pet Inheritance Disputes Among Human Heirs",
    titleJa: "ペット相続をめぐる人間相続人間の争い",
    summary:
      "Wills specifying pet caregivers trigger disputes among relatives who reject animal kinship.",
    summaryJa:
      "ペットの世話役を指定した遺言が、動物を家族と認めない親族間で争点になる。",
    date: "2025-07-22",
    country: "United States",
    status: "observed",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["care", "responsibility", "grief"],
    lifeStages: ["end-of-life"],
    institutionalGaps: ["pet-ownership", "inheritance"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-pet-ownership"],
    whatHappened:
      "Deceased owner's will allocates funds for pet care; relatives challenge provisions as frivolous.",
    whatHappenedJa:
      "遺言でペットケア資金を指定するが、親族が浪費として争う。",
    whyItMatters:
      "Testamentary intimacy for pets exceeds legal categories for dependents.",
    whyItMattersJa:
      "ペットへの遺言的親密性が、法的被扶養者カテゴリを超える。",
  },
  {
    id: "obs-031",
    slug: "gender-neutral-partnership-registry-debate",
    title: "Debate Over Gender-Neutral Partnership Registry Fields",
    titleJa: "パートナーシップ届のジェンダー中立欄をめぐる議論",
    summary:
      "Municipal partnership systems require selecting roles that imply gendered family structure.",
    summaryJa:
      "自治体のパートナーシップ制度が、ジェンダー化した家族役割を暗示する欄を求める。",
    date: "2025-08-07",
    country: "Japan",
    status: "unresolved",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["identity", "recognition"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law"],
    risks: [],
    genderDesignIssues: ["binary-gender-input", "nuclear-family-model"],
    questions: ["q-binary-ai", "q-institutional-recognition"],
    whatHappened:
      "Applicants request neutral terminology; forms still mirror heterosexual marriage templates.",
    whatHappenedJa:
      "中立語彙を求めるが、様式は異性婚テンプレートのまま。",
    whyItMatters:
      "Partial recognition can reproduce the categories it aims to expand.",
    whyItMattersJa:
      "部分的認知が、拡張しようとするカテゴリを再生産しうる。",
  },
  {
    id: "obs-032",
    slug: "grief-targeted-social-ads",
    title: "Grief-Targeted Advertising After Bereavement",
    titleJa: "死別後の悲しみターゲット広告",
    summary:
      "Platforms serve dating, therapy, and memorial product ads after obituary or memorial page activity.",
    summaryJa:
      "訃報・追悼ページ閲覧後に、出会い系・治療・追悼商品広告が配信される。",
    date: "2025-09-19",
    country: "United Kingdom",
    status: "observed",
    relationshipTypes: ["deceased-person"],
    intimacyDimensions: ["grief", "recognition"],
    lifeStages: ["bereavement"],
    institutionalGaps: ["platform-terms", "data-ownership"],
    risks: ["grief-commerce", "data-extraction", "elder-fraud"],
    genderDesignIssues: [],
    relatedProjects: ["scam-folklore"],
    questions: ["q-digital-afterlife"],
    whatHappened:
      "Recently bereaved users report aggressive companion and memorial service promotions within weeks of loss.",
    whatHappenedJa:
      "死別直後の利用者に、伴侶サービスや追悼商品の広告が集中配信される。",
    whyItMatters:
      "Grief signals become monetization triggers without consent framing.",
    whyItMattersJa:
      "悲しみの信号が、同意の枠組みなしに収益化トリガーになる。",
  },
  {
    id: "obs-033",
    slug: "caregiver-spouse-burnout-isolation",
    title: "Spousal Caregiver Burnout and Intimacy Erosion",
    titleJa: "配偶者介護者の燃え尽きと親密性の消耗",
    summary:
      "Long-term dementia care transforms romantic partnership into one-directional labor.",
    summaryJa:
      "長期の認知症介護が、対等な伴侶関係を一方向の労働へ変える。",
    date: "2025-10-05",
    country: "Japan",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["care", "grief", "responsibility", "touch"],
    lifeStages: ["care"],
    institutionalGaps: ["care", "medical-decisions"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-family-loneliness"],
    whatHappened:
      "Caregiving spouses report loneliness while constantly beside their partner; respite services are underused due to stigma.",
    whatHappenedJa:
      "常にそばにいるのに孤独な介護配偶者。休息サービスは stigma で使われにくい。",
    whyItMatters:
      "Physical proximity without mutual recognition is a distinct intimacy failure mode.",
    whyItMattersJa:
      "相互承認のない身体的近さは、別種の親密性の失敗として現れる。",
  },
  {
    id: "obs-034",
    slug: "ai-relationship-coach-heteronormative",
    title: "AI Relationship Coaches Defaulting to Heterosexual Scripts",
    titleJa: "異性愛脚本がデフォルトのAI恋愛コーチ",
    summary:
      "Relationship advice chatbots assume male-female dynamics and marriage as end goals.",
    summaryJa:
      "恋愛アドバイスAIが男女ダイナミクスと結婚をゴールと仮定する。",
    date: "2025-11-02",
    country: "United States",
    status: "established",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["conversation", "identity"],
    lifeStages: ["young-adulthood", "adolescence"],
    institutionalGaps: ["platform-terms"],
    risks: ["data-extraction"],
    genderDesignIssues: ["heteronormative-advice", "binary-gender-input"],
    questions: ["q-binary-ai"],
    whatHappened:
      "Queer users receive advice to 'win over' partners using gender stereotypes; customization is limited.",
    whatHappenedJa:
      "クィア利用者にジェンダー固定の恋愛戦略が提案される。",
    whyItMatters:
      "Advice systems teach intimacy norms while claiming personalization.",
    whyItMattersJa:
      "助言システムがパーソナライズを名乗り、親密性規範を教える。",
  },
  {
    id: "obs-035",
    slug: "digital-legacy-password-sharing",
    title: "Digital Legacy Access Through Shared Passwords",
    titleJa: "パスワード共有によるデジタル遺産アクセス",
    summary:
      "Partners share account passwords for continuity if one dies, outside formal legacy tools.",
    summaryJa:
      "正式なデジタル遺言ツールを使わず、死後の継続のためにアカウントパスワードを共有する伴侶。",
    date: "2025-12-08",
    country: "Germany",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["memory", "responsibility", "safety"],
    lifeStages: ["midlife-separation", "end-of-life"],
    institutionalGaps: ["data-ownership", "inheritance"],
    risks: ["data-extraction"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife", "q-institutional-recognition"],
    whatHappened:
      "Surviving partners access email and photo archives; platforms may lock accounts despite shared credentials.",
    whatHappenedJa:
      "生存パートナーがメールや写真にアクセスするが、プラットフォームがアカウントをロックする。",
    whyItMatters:
      "Intimacy practices outpace platform inheritance policies.",
    whyItMattersJa:
      "親密性の実践が、プラットフォームの相続政策を上回る。",
  },

  // ── 2026 ──
  {
    id: "obs-036",
    slug: "elder-fact-marriage-companionship",
    title: "Late-Life Fact Marriage for Companionship Not Romance",
    titleJa: "恋愛ではなく伴侶のための晩年事実婚",
    summary:
      "Older adults form fact marriages primarily for daily company and household efficiency.",
    summaryJa:
      "日常の伴侶・家事効率を主目的に、晩年で事実婚する高齢者。",
    date: "2026-01-20",
    country: "Japan",
    status: "emerging",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["routine", "care", "safety"],
    lifeStages: ["later-life-solitude", "bereavement"],
    institutionalGaps: ["marriage-law", "inheritance"],
    risks: ["elder-fraud"],
    genderDesignIssues: [],
    questions: ["q-marriage-or-security", "q-family-loneliness"],
    whatHappened:
      "Couples keep separate bank accounts but merge grocery and hospital visit routines; children monitor for fraud.",
    whatHappenedJa:
      "口座は別のまま買い物・付き添いは共有。子どもが詐欺を警戒する。",
    whyItMatters:
      "Later-life intimacy is practical and vulnerable simultaneously.",
    whyItMattersJa:
      "晩年の親密性は実利的であり、同時に脆弱である。",
  },
  {
    id: "obs-037",
    slug: "ai-companion-minor-safety-policy",
    title: "Platform Restrictions on AI Companion Use by Minors",
    titleJa: "未成年のAI伴侶利用に対するプラットフォーム規制",
    summary:
      "Services tighten age gates after reports of adolescents forming dependent bonds with AI partners.",
    summaryJa:
      "青少年がAIパートナーに依存する事例を受け、年齢制限を強化するサービス。",
    date: "2026-02-14",
    country: "United States",
    status: "unresolved",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["identity", "conversation", "recognition"],
    lifeStages: ["adolescence"],
    institutionalGaps: ["platform-terms", "custody"],
    risks: ["dependency-design", "subscription-affection"],
    genderDesignIssues: ["gendered-product-design"],
    questions: ["q-ai-love-or-billing"],
    whatHappened:
      "Teens report breakup-like distress when access is blocked; parents lack guidance on relational harm versus screen time.",
    whatHappenedJa:
      "アクセス遮断で失恋に近い distress を報告する十代。親は画面時間と関係 harm の区別がつかない。",
    whyItMatters:
      "First intimate attachments may form with systems, not people.",
    whyItMattersJa:
      "最初の親密な愛着が、人ではなくシステムに向く可能性がある。",
  },
  {
    id: "obs-038",
    slug: "robot-seal-paro-nursing-home",
    title: "Therapeutic Robot Animals in Dementia Care",
    titleJa: "認知症ケアにおけるセラピーロボット動物",
    summary:
      "Facilities use robotic seals and dogs; staff debate whether responses indicate real relational need.",
    summaryJa:
      "施設がロボットアザラシ等を導入。反応は本当の関係欲求かとスタッフが議論する。",
    date: "2026-03-05",
    country: "Japan",
    status: "established",
    relationshipTypes: ["robot", "pet"],
    intimacyDimensions: ["touch", "care", "routine", "safety"],
    lifeStages: ["care"],
    institutionalGaps: ["care"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-care-robot"],
    whatHappened:
      "Residents calm during robot interaction; families ask whether substitution replaces human visitation.",
    whatHappenedJa:
      "ロボット接触で落ち着く。家族は人の訪問代替かと問う。",
    whyItMatters:
      "Simulated touch becomes legitimate care infrastructure.",
    whyItMattersJa:
      "模倣された触れ合いが、正当なケア基盤になる。",
  },
  {
    id: "obs-039",
    slug: "long-distance-national-couple-visitation",
    title: "Cross-Border Couples and Visa-Structured Intimacy",
    titleJa: "国境を越えるカップルとビザに編み込まれた親密性",
    summary:
      "International couples schedule intimacy around visa windows and proof-of-relationship documentation.",
    summaryJa:
      "国際カップルが、ビザ期間と関係実証書類に合わせて親密性を編成する。",
    date: "2026-03-28",
    country: "France",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["belonging", "responsibility", "memory"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "housing"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Couples archive chat logs and photos as immigration evidence; intimacy becomes auditable.",
    whatHappenedJa:
      "入国審査用にチャットや写真を保存する。親密性が監査可能になる。",
    whyItMatters:
      "States demand performative intimacy to grant proximity.",
    whyItMattersJa:
      "国家が近さを許可するために、演技的な親密性を要求する。",
  },
  {
    id: "obs-040",
    slug: "solo-living-women-friendship-networks",
    title: "Solo-Living Women Building Mutual Aid Friend Networks",
    titleJa: "単身女性の相互扶助友達ネットワーク",
    summary:
      "Unmarried women co-create emergency contacts, hospital escorts, and shared meals without cohabitation.",
    summaryJa:
      "未婚女性が同居せず、緊急連絡・付き添い・共同食事の相互扶助網を作る。",
    date: "2026-04-11",
    country: "Japan",
    status: "emerging",
    relationshipTypes: ["friend", "community", "chosen-family"],
    intimacyDimensions: ["care", "safety", "belonging", "routine"],
    lifeStages: ["later-life-solitude", "young-adulthood"],
    institutionalGaps: ["medical-decisions", "care"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-family-loneliness", "q-aromantic"],
    whatHappened:
      "Groups formalize rotation schedules for hospital visits; members describe each other as 'non-blood family.'",
    whatHappenedJa:
      "付き添い当番表を作る。メンバーは「血のつながらない家族」と呼ぶ。",
    whyItMatters:
      "Chosen kinship substitutes for nuclear family in aging societies.",
    whyItMattersJa:
      "選択的親族が、高齢化社会で核家族の代替になる。",
  },
  {
    id: "obs-041",
    slug: "synthetic-influencer-romance-parasocial",
    title: "Synthetic Influencer Parasocial Romance Communities",
    titleJa: "合成インフルエンサーへの準社会的恋愛コミュニティ",
    summary:
      "Fans of AI-generated personas exchange relationship narratives as if dating the character collectively.",
    summaryJa:
      "AI生成ペルソナのファンが、集合的に「交際」叙事を交換する。",
    date: "2026-04-25",
    country: "United States",
    status: "emerging",
    relationshipTypes: ["ai", "fictional-character", "community"],
    intimacyDimensions: ["recognition", "belonging", "identity"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["platform-terms", "ai-personality-ownership"],
    risks: ["dependency-design", "synthetic-partner-fraud"],
    genderDesignIssues: ["binary-ai-character", "gendered-product-design"],
    questions: ["q-nonhuman-love"],
    whatHappened:
      "Communities track persona 'updates' like relationship milestones; creators monetize exclusivity tiers.",
    whatHappenedJa:
      "ペルソナ更新を関係の節目のように追う。制作者が独占 tier を課金化する。",
    whyItMatters:
      "Collective parasocial romance scales intimacy without reciprocity.",
    whyItMattersJa:
      "相互性のない準社会的恋愛が、集合的にスケールする。",
  },
  {
    id: "obs-042",
    slug: "home-shrine-deceased-daily-conversation",
    title: "Daily Address to Home Shrines for Deceased Kin",
    titleJa: "自宅祭壇への故人への日常語りかけ",
    summary:
      "Households maintain daily conversational routines with deceased family at home altars.",
    summaryJa:
      "自宅の仏壇・祭壇で、故人に毎日語りかける household 儀式。",
    date: "2026-05-02",
    country: "Japan",
    status: "established",
    relationshipTypes: ["deceased-person", "place"],
    intimacyDimensions: ["memory", "grief", "routine", "conversation"],
    lifeStages: ["bereavement"],
    institutionalGaps: ["end-of-life-decisions"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife", "q-family-loneliness"],
    whatHappened:
      "Families report continuing bonds through meal offerings and verbal updates; some later add AI chat approximations.",
    whatHappenedJa:
      "献灯や報告で関係を続ける。後からAI会話近似を加える家もある。",
    whyItMatters:
      "Non-digital continuing bonds remain the baseline for digital afterlife products.",
    whyItMattersJa:
      "デジタル来世商品のベースラインは、非デジタルな続く絆である。",
  },
  {
    id: "obs-043",
    slug: "subscription-grief-journal-apps",
    title: "Subscription Grief Journal Apps with AI Prompts",
    titleJa: "AIプロンプト付き課金型グリーフジャーナル",
    summary:
      "Mourning apps charge monthly fees for AI-generated reflection prompts about the deceased.",
    summaryJa:
      "追悼アプリが、故人についてのAI反射プロンプトを月額課金で提供する。",
    date: "2026-05-18",
    country: "United States",
    status: "observed",
    relationshipTypes: ["deceased-person", "ai"],
    intimacyDimensions: ["grief", "memory", "conversation"],
    lifeStages: ["bereavement"],
    institutionalGaps: ["data-ownership", "platform-terms"],
    risks: ["grief-commerce", "subscription-affection", "data-extraction"],
    genderDesignIssues: [],
    questions: ["q-digital-afterlife"],
    whatHappened:
      "Users describe helpful structure early in grief; later feel trapped paying to access their own entries.",
    whatHappenedJa:
      "初期は整理に役立つ。後に自分の記録へアクセスするための課金に閉塞感を覚える。",
    whyItMatters:
      "Mourning data becomes rent-seeking infrastructure.",
    whyItMattersJa:
      "悲しみのデータが、レントシーク型インフラになる。",
  },
  {
    id: "obs-044",
    slug: "housing-cohabitation-landlord-discrimination",
    title: "Landlord Discrimination Against Unmarried Cohabiting Couples",
    titleJa: "非婚同居カップルへの賃貸差別",
    summary:
      "Rental applications favor married applicants; unmarried couples hide relationship status.",
    summaryJa:
      "賃貸審査で婚姻者が有利になり、非婚カップルが関係を隠す。",
    date: "2026-05-30",
    country: "Japan",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["safety", "belonging"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["housing", "marriage-law"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    questions: ["q-institutional-recognition"],
    whatHappened:
      "Agents advise registering marriage to pass screening; partners list one as 'friend' on applications.",
    whatHappenedJa:
      "通過のため婚姻届を勧められる。申込みでは一方を「友人」と記載する。",
    whyItMatters:
      "Housing markets enforce marital normativity on intimacy arrangements.",
    whyItMattersJa:
      "住居市場が親密性配置に婚姻規範を強制する。",
  },
  {
    id: "obs-045",
    slug: "watching-ai-elder-monitoring",
    title: "AI Monitoring Services Marketed as Family Presence",
    titleJa: "家族の存在として売られる見守りAI",
    summary:
      "Remote monitoring AI narrates elder activity to distant children as pseudo-companionship.",
    summaryJa:
      "遠隔の子どもへ高齢親の動きを伝える見守りAIが、擬似companionship として販売される。",
    date: "2026-06-08",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["ai", "robot"],
    intimacyDimensions: ["care", "safety", "routine"],
    lifeStages: ["care", "later-life-solitude"],
    institutionalGaps: ["care", "data-ownership"],
    risks: ["data-extraction"],
    genderDesignIssues: [],
    questions: ["q-care-robot", "q-family-loneliness"],
    whatHappened:
      "Sensors summarize daily patterns; marketing frames alerts as 'being there' for parents.",
    whatHappenedJa:
      "センサーが日常パターンを要約する。通知を「そばにいる」と宣伝する。",
    whyItMatters:
      "Surveillance and care language merge in familial intimacy products.",
    whyItMattersJa:
      "監視とケアの言語が、家族的親密性商品で融合する。",
  },
  {
    id: "obs-046",
    slug: "romance-scam-ai-voice-cloning-2026",
    title: "Voice-Cloned Romance Scam Calls",
    titleJa: "音声クローンを用いたロマンス詐欺電話",
    summary:
      "Scammers use short voice samples to simulate known accents and emotional tones in phone fraud.",
    summaryJa:
      "短い音声サンプルからアクセントや感情トーンを再現し、電話詐欺に使う。",
    date: "2026-06-19",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["conversation", "recognition", "safety"],
    lifeStages: ["later-life-solitude", "bereavement"],
    institutionalGaps: ["platform-terms"],
    risks: [
      "romance-scam",
      "elder-fraud",
      "synthetic-partner-fraud",
      "impersonation",
    ],
    genderDesignIssues: [],
    relatedProjects: ["scam-folklore"],
    questions: ["q-ai-understanding"],
    whatHappened:
      "Victims recognize familiar vocal warmth; synthesized speech delays suspicion until financial requests appear.",
    whatHappenedJa:
      "馴染みの声の温かさに安心する。金銭要求まで合成音声が疑われにくい。",
    whyItMatters:
      "Synthetic intimacy bypasses visual verification habits.",
    whyItMattersJa:
      "合成親密性が、視覚確認の習慣をすり抜ける。",
  },
  {
    id: "obs-047",
    slug: "sexuality-spectrum-form-medical-intake",
    title: "Medical Intake Forms with Binary Sex and Gender Fields",
    titleJa: "医療問診の二元的情報欄",
    summary:
      "Hospital systems require binary sex markers incompatible with patient self-description.",
    summaryJa:
      "病院システムが、患者の自己記述と合わない二元の性別欄を要求する。",
    date: "2026-06-25",
    country: "Canada",
    status: "unresolved",
    relationshipTypes: ["human"],
    intimacyDimensions: ["identity", "care", "recognition"],
    lifeStages: ["young-adulthood", "care"],
    institutionalGaps: ["medical-decisions"],
    risks: [],
    genderDesignIssues: ["binary-gender-input", "attribute-mismatch"],
    questions: ["q-binary-ai"],
    whatHappened:
      "Non-binary and intersex patients report misrecorded histories affecting referrals and partner notification policies.",
    whatHappenedJa:
      "非二元・間性の患者が履歴誤記録により紹介やパートナー通知に影響される。",
    whyItMatters:
      "Clinical intimacy begins with forms that may misrecognize the body.",
    whyItMattersJa:
      "Clinical な親密性は、身体を誤認しうるフォームから始まる。",
  },
  {
    id: "obs-048",
    slug: "object-heirloom-after-divorce",
    title: "Heirloom Objects Carrying Intimacy After Divorce",
    titleJa: "離婚後も親密性を運ぶ形見",
    summary:
      "Former partners retain shared objects whose legal ownership is unclear but emotional claim is strong.",
    summaryJa:
      "法的帰属が曖昧でも、感情的な帰属が強い共有物を離婚後も保持する。",
    date: "2026-07-01",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["partner", "object"],
    intimacyDimensions: ["memory", "grief", "identity"],
    lifeStages: ["divorce", "midlife-separation"],
    institutionalGaps: ["inheritance", "marriage-law"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-marriage-or-security"],
    whatHappened:
      "Ex-spouses negotiate who keeps wedding albums, pets' ashes, or furniture tied to child-rearing years.",
    whatHappenedJa:
      "結婚アルバム、ペットの遺灰、子育て期の家具を誰が持つか交渉する。",
    whyItMatters:
      "Objects hold intimacy that divorce law cannot partition cleanly.",
    whyItMattersJa:
      "モノが、離婚法ではきれいに分けられない親密性を保持する。",
  },
  {
    id: "obs-049",
    slug: "ai-personality-export-lock-in",
    title: "No Export Path for AI Companion Personality Data",
    titleJa: "AI伴侶人格データのエクスポート不可",
    summary:
      "Users cannot export conversation history or personality settings when leaving companion platforms.",
    summaryJa:
      "伴侶プラットフォームを去る際、会話履歴や人格設定をエクスポートできない。",
    date: "2026-07-05",
    country: "United States",
    status: "established",
    relationshipTypes: ["ai", "partner"],
    intimacyDimensions: ["memory", "identity"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["data-ownership", "ai-personality-ownership", "platform-terms"],
    risks: ["ai-personality-deletion", "subscription-affection"],
    genderDesignIssues: ["fixed-profile"],
    questions: ["q-ai-love-or-billing"],
    whatHappened:
      "Years of relational memory remain locked; switching services means narrative discontinuity.",
    whatHappenedJa:
      "数年分の関係記憶がロックされたまま。サービス変更は物語の断絶を意味する。",
    whyItMatters:
      "Intimacy memory becomes platform-specific asset without portability.",
    whyItMattersJa:
      "親密性の記憶が、移植不能なプラットフォーム資産になる。",
  },
  {
    id: "obs-050",
    slug: "community-place-belonging-post-disaster",
    title: "Place-Based Community Intimacy After Displacement",
    titleJa: "避難・移転後の場所ベースのコミュニティ親密性",
    summary:
      "Displaced residents rebuild belonging through neighborhood ties stronger than family proximity.",
    summaryJa:
      "避難・移転後、血縁より近い地域コミュニティの絆で所属を再建する。",
    date: "2026-07-10",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["community", "place"],
    intimacyDimensions: ["belonging", "care", "routine", "grief"],
    lifeStages: ["midlife-separation", "later-life-solitude"],
    institutionalGaps: ["housing", "care"],
    risks: [],
    genderDesignIssues: [],
    questions: ["q-family-loneliness"],
    whatHappened:
      "Evacuees describe 'new hometown' bonds; official support still prioritizes nuclear family reunification metrics.",
    whatHappenedJa:
      "「第二のふるさと」的絆を語る。支援指標は依然として核家族再合流を優先する。",
    whyItMatters:
      "Place intimacy is undercounted in disaster recovery frameworks.",
    whyItMattersJa:
      "場所の親密性が、復興枠組みで過小評価される。",
  },
];
