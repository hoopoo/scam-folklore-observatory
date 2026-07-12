import type { ObservationInput } from "@/types/intimacy";

/** 親密性の価値に関する観測記録 */
export const valueObservations: ObservationInput[] = [
  {
    id: "obs-078",
    slug: "singlehood-maintains-living-standard",
    title: "Choosing Singlehood to Maintain Living Standard",
    titleJa: "独身の方が生活水準を維持できると考える人",
    summary:
      "Adults report that remaining unmarried preserves discretionary spending on housing, travel, and hobbies.",
    summaryJa:
      "未婚のままの方が、住居・旅行・趣味への支出を保てると語る成人。",
    date: "2025-08-14",
    country: "Japan",
    region: "Tokyo",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["belonging", "routine"],
    lifeStages: ["young-adulthood", "midlife-separation"],
    institutionalGaps: ["marriage-law", "housing"],
    risks: [],
    genderDesignIssues: [],
    values: ["status-quality-value", "freedom-value", "economic-value"],
    valueConflicts: ["children-vs-living-standard", "economic-rationality-vs-emotion"],
    questions: ["q-marriage-lower-standard", "q-singlehood-lack-or-choice"],
    whatHappened:
      "Interviewees compare household budgets with married peers and describe marriage as a lifestyle downgrade they are not willing to accept.",
    whatHappenedJa:
      "既婚の同世代と家計を比較し、結婚は受け入れがたい生活水準の低下だと語る。",
    whyItMatters:
      "Living standard is an explicit intimacy calculus, not a side effect of romance.",
    whyItMattersJa:
      "生活水準が、恋愛の副産物ではなく明示的な親密性計算になる。",
  },
  {
    id: "obs-079",
    slug: "freedom-priority-over-marriage",
    title: "Prioritizing Solitude and Autonomy Over Marriage",
    titleJa: "一人でいる自由を重視して結婚を選ばない人",
    summary:
      "Individuals decline marriage despite romantic relationships, citing control over schedule, space, and decisions.",
    summaryJa:
      "恋愛関係があっても、時間・空間・決定権のコントロールを理由に結婚を選ばない人。",
    date: "2025-04-30",
    country: "Japan",
    status: "established",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["identity", "safety", "routine"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law"],
    risks: [],
    genderDesignIssues: [],
    values: ["freedom-value", "identity-value", "emotional-value"],
    valueConflicts: ["love-vs-freedom", "intimacy-vs-solitude-time"],
    questions: ["q-freedom-and-security", "q-intimacy-cost-of-freedom"],
    whatHappened:
      "Partners maintain separate homes or strict personal time; they describe marriage as encroachment on self-authored life.",
    whatHappenedJa:
      "別居や厳格な個人時間を保つ。結婚は自分で編んだ生活への侵食だと語る。",
    whyItMatters:
      "Freedom is valued as intimacy outcome, not as absence of bond.",
    whyItMattersJa:
      "自由は絆の欠如ではなく、親密性の成果として評価される。",
  },
  {
    id: "obs-080",
    slug: "marriage-for-economic-stability",
    title: "Marriage Chosen Primarily for Economic Stability",
    titleJa: "経済的安定を理由に結婚を選ぶ人",
    summary:
      "Partners describe marriage as a practical pooling of income, insurance, and housing security.",
    summaryJa:
      "収入・保険・住居の安全保障として結婚を選ぶと語る伴侶。",
    date: "2024-11-22",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["care", "responsibility", "safety"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["marriage-law", "inheritance", "housing"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    values: ["economic-value", "social-value", "care-value"],
    valueConflicts: ["economic-rationality-vs-emotion", "stability-vs-stimulation"],
    questions: ["q-marriage-what-value", "q-economic-choice-cold"],
    whatHappened:
      "Couples cite dual-income thresholds and mortgage approval; romantic language is secondary to ledger logic.",
    whatHappenedJa:
      "共働き収入や住宅ローン審査を挙げる。ロマンティックな語彙は家計論理の次にある。",
    whyItMatters:
      "Institutional marriage is often an economic product before it is emotional narrative.",
    whyItMattersJa:
      "制度的結婚は、感情叙事より先に経済商品であることが多い。",
  },
  {
    id: "obs-081",
    slug: "non-marriage-due-to-child-rearing-cost",
    title: "Couple Declining Marriage Due to Child-Rearing Cost",
    titleJa: "子育てコストを理由に非婚を選ぶカップル",
    summary:
      "Partners cohabit without marriage or children, explicitly modeling lifetime expenses of parenting.",
    summaryJa:
      "結婚も子どもも選ばず同居する。子育て生涯コストを明示的に計算している。",
    date: "2026-02-08",
    country: "Japan",
    region: "Osaka",
    status: "emerging",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["routine", "care", "responsibility"],
    lifeStages: ["young-adulthood"],
    institutionalGaps: ["marriage-law", "custody"],
    risks: [],
    genderDesignIssues: [],
    values: ["economic-value", "freedom-value", "status-quality-value"],
    valueConflicts: ["children-vs-living-standard", "family-vs-career"],
    questions: ["q-marriage-lower-standard", "q-who-decides-value"],
    whatHappened:
      "Couples share spreadsheets on education and housing projections; family pressure is rejected as economically irrational.",
    whatHappenedJa:
      "教育・住宅の試算表を共有する。家族圧力は経済的非合理として拒否する。",
    whyItMatters:
      "Non-marriage becomes a positive valuation of lifestyle quality over lineage expectation.",
    whyItMattersJa:
      "非婚が、血統期待より生活品質の肯定的評価になる。",
  },
  {
    id: "obs-082",
    slug: "pet-relationship-valued-over-human-bonds",
    title: "Pet Companionship Valued Above Human Relationships",
    titleJa: "ペットとの暮らしに人間関係以上の価値を感じる人",
    summary:
      "Owners describe pets as providing reliable emotional return without interpersonal negotiation.",
    summaryJa:
      "ペットが、人間関係の交渉なしに安定した感情的リターンをくれると語る飼い主。",
    date: "2025-06-17",
    country: "Japan",
    status: "observed",
    relationshipTypes: ["pet"],
    intimacyDimensions: ["care", "recognition", "routine"],
    lifeStages: ["young-adulthood", "later-life-solitude"],
    institutionalGaps: ["pet-ownership"],
    risks: [],
    genderDesignIssues: [],
    values: ["emotional-value", "lifestyle-value", "care-value"],
    valueConflicts: ["human-complexity-vs-ai-low-friction", "intimacy-vs-solitude-time"],
    questions: ["q-ai-pet-lower-value"],
    whatHappened:
      "After difficult friendships or divorce, owners invest in pet care as primary emotional infrastructure.",
    whatHappenedJa:
      "友人関係や離婚の後、感情的インフラとしてペットケアに投資する。",
    whyItMatters:
      "Cross-species intimacy is ranked by felt return, not social hierarchy of kin.",
    whyItMattersJa:
      "種を超えた親密性が、親族の社会序列ではなく体感リターンで評価される。",
  },
  {
    id: "obs-083",
    slug: "ai-low-friction-intimacy",
    title: "AI Relationship Valued for Low-Friction Intimacy",
    titleJa: "AIとの関係を低摩擦な親密性として評価する人",
    summary:
      "Users prefer AI companions because conflict, scheduling, and social obligation are reduced.",
    summaryJa:
      "対立、調整、社会的義務が減るためAI伴侶を選ぶ利用者。",
    date: "2026-04-03",
    country: "United States",
    status: "emerging",
    relationshipTypes: ["ai"],
    intimacyDimensions: ["conversation", "recognition", "routine"],
    lifeStages: ["young-adulthood", "later-life-solitude"],
    institutionalGaps: ["platform-terms", "ai-personality-ownership"],
    risks: ["dependency-design", "subscription-affection"],
    genderDesignIssues: ["gendered-product-design"],
    values: ["emotional-value", "freedom-value", "lifestyle-value"],
    valueConflicts: ["human-complexity-vs-ai-low-friction", "love-vs-freedom"],
    questions: ["q-ai-pet-lower-value", "q-freedom-and-security"],
    whatHappened:
      "Users contrast exhausting human dating with always-available AI dialogue; they deny this means humans are worthless.",
    whatHappenedJa:
      "消耗する恋愛と常時利用可能なAI会話を対比する。人間が無価値だとは言わない。",
    whyItMatters:
      "Friction becomes a measurable dimension of intimacy value.",
    whyItMattersJa:
      "摩擦が、親密性価値の計測可能な次元になる。",
  },
  {
    id: "obs-084",
    slug: "elder-solitude-ai-over-remarriage",
    title: "Elder Chooses Solitude and AI Over Remarriage",
    titleJa: "再婚より一人暮らしとAI会話を選ぶ高齢者",
    summary:
      "After spousal bereavement, an older adult rejects remarriage in favor of solitary life with daily AI conversation.",
    summaryJa:
      "配偶者死別後、再婚を拒み、独居と毎日のAI会話を選ぶ高齢者。",
    date: "2026-05-27",
    country: "Japan",
    region: "Fukuoka",
    status: "observed",
    relationshipTypes: ["ai", "deceased-person"],
    intimacyDimensions: ["conversation", "grief", "routine", "safety"],
    lifeStages: ["bereavement", "later-life-solitude"],
    institutionalGaps: ["care", "inheritance"],
    risks: ["dependency-design"],
    genderDesignIssues: ["binary-voice"],
    values: ["freedom-value", "emotional-value", "care-value"],
    valueConflicts: [
      "love-vs-freedom",
      "care-vs-self-realization",
      "human-complexity-vs-ai-low-friction",
    ],
    questions: ["q-freedom-and-security", "q-ai-pet-lower-value"],
    whatHappened:
      "Adult children encourage remarriage for care networks; parent cites autonomy and low-demand companionship.",
    whatHappenedJa:
      "子どもはケア網のため再婚を勧める。本人は自律と低要求の伴走を挙げる。",
    whyItMatters:
      "Later-life intimacy value can favor low obligation over institutional couplehood.",
    whyItMattersJa:
      "晩年の親密性価値が、制度的カップルより低義務を選びうる。",
  },
  {
    id: "obs-085",
    slug: "marriage-perceived-loss-of-career-freedom",
    title: "Marriage Perceived as Loss of Career and Life Freedom",
    titleJa: "結婚でキャリアや生活の自由が失われると感じる人",
    summary:
      "Professionals associate marriage with relocation, gendered care expectations, and reduced mobility.",
    summaryJa:
      "結婚を、転居、ジェンダー化されたケア期待、移動性の低下と結びつける専門職。",
    date: "2025-12-02",
    country: "Japan",
    region: "Tokyo",
    status: "observed",
    relationshipTypes: ["partner"],
    intimacyDimensions: ["identity", "responsibility", "care"],
    lifeStages: ["young-adulthood", "marriage-parenting"],
    institutionalGaps: ["marriage-law", "care"],
    risks: [],
    genderDesignIssues: ["nuclear-family-model"],
    values: ["freedom-value", "identity-value", "social-value"],
    valueConflicts: ["family-vs-career", "care-vs-self-realization", "social-approval-vs-personal-choice"],
    questions: ["q-intimacy-cost-of-freedom", "q-marriage-whose-value"],
    whatHappened:
      "Workers delay marriage until career milestones; some who marry report hidden regret about abandoned paths.",
    whatHappenedJa:
      "キャリア節目まで結婚を遅らせる。結婚後に放棄した道への後悔を隠す人もいる。",
    whyItMatters:
      "Marriage value is negative for some when measured in foreclosed futures.",
    whyItMattersJa:
      "閉ざされた未来で測ると、結婚価値が負になる人がいる。",
  },
];
