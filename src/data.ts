import { VerbProblem, AuxiliaryCard, KakariProblem, Stage, GrammarEntry, CourtRank, PlayerProfile, MeaningProblem, ReadingProblem, ConjugationProblem, KeigoProblem } from './types';
import kitsuneImg from './assets/images/yokai_white_kitsune_1792736500578.jpg';
import tenguImg from './assets/images/yokai_crow_tengu_1792736501436.jpg';
import lordImg from './assets/images/yokai_phantom_lord_1792736501784.jpg';

export const VERB_PROBLEMS: VerbProblem[] = [
  { word: "咲か", form: "未然形（四段）", targetConn: "未然形" },
  { word: "思ひ", form: "連用形（四段）", targetConn: "連用形" },
  { word: "散る", form: "終止形（四段）", targetConn: "終止形" },
  { word: "見", form: "連用形（上一段）", targetConn: "連用形" },
  { word: "知ら", form: "未然形（四段）", targetConn: "未然形" },
  { word: "待つ", form: "終止形（四段）", targetConn: "終止形" },
  { word: "起き", form: "連用形（上二段）", targetConn: "連用形" },
  { word: "言は", form: "未然形（四段）", targetConn: "未然形" },
  { word: "過ぐ", form: "終止形（下二段）", targetConn: "終止形" },
  { word: "あり", form: "連用形（ラ変）", targetConn: "連用形" },
  { word: "来（こ）", form: "未然形（カ変）", targetConn: "未然形" },
  { word: "死に", form: "連用形（ナ変）", targetConn: "連用形" },
  { word: "書か", form: "未然形（四段）", targetConn: "未然形" },
  { word: "走り", form: "連用形（四段）", targetConn: "連用形" },
  { word: "寝（ね）", form: "未然形（下二段）", targetConn: "未然形" },
  { word: "得（え）", form: "未然形（下二段）", targetConn: "未然形" },
  { word: "居（ゐ）", form: "連用形（上一段）", targetConn: "連用形" },
  { word: "干（ひ）", form: "連用形（上一段）", targetConn: "連用形" },
  { word: "落つ", form: "終止形（上二段）", targetConn: "終止形" },
  { word: "受く", form: "終止形（下二段）", targetConn: "終止形" },
  { word: "聞か", form: "未然形（四段）", targetConn: "未然形" },
  { word: "書き", form: "連用形（四段）", targetConn: "連用形" },
  { word: "読む", form: "終止形（四段）", targetConn: "終止形" },
  { word: "泣き", form: "連用形（四段）", targetConn: "連用形" },
  { word: "笑は", form: "未然形（四段）", targetConn: "未然形" },
  { word: "歌ふ", form: "終止形（四段）", targetConn: "終止形" },
  { word: "飛び", form: "連用形（四段）", targetConn: "連用形" },
  { word: "帰ら", form: "未然形（四段）", targetConn: "未然形" },
  { word: "取る", form: "終止形（四段）", targetConn: "終止形" },
  { word: "守り", form: "連用形（四段）", targetConn: "連用形" },
  { word: "通は", form: "未然形（四段）", targetConn: "未然形" },
  { word: "残る", form: "終止形（四段）", targetConn: "終止形" },
  { word: "忍ば", form: "未然形（四段）", targetConn: "未然形" },
  { word: "盗み", form: "連用形（四段）", targetConn: "連用形" },
  { word: "望む", form: "終止形（四段）", targetConn: "終止形" },
  { word: "漕ぎ", form: "連用形（四段）", targetConn: "連用形" },
  { word: "急が", form: "未然形（四段）", targetConn: "未然形" },
  { word: "結ぶ", form: "終止形（四段）", targetConn: "終止形" },
  { word: "愛し", form: "連用形（四段）", targetConn: "連用形" },
  { word: "変はり", form: "連用形（四段）", targetConn: "連用形" },
  { word: "行き", form: "連用形（四段）", targetConn: "連用形" },
  { word: "立た", form: "未然形（四段）", targetConn: "未然形" },
  { word: "飲み", form: "連用形（四段）", targetConn: "連用形" },
  { word: "防ぐ", form: "終止形（四段）", targetConn: "終止形" },
  { word: "干し", form: "連用形（四段）", targetConn: "連用形" },
  { word: "着", form: "連用形（上一段）", targetConn: "連用形" },
  { word: "似", form: "未然形（上一段）", targetConn: "未然形" },
  { word: "煮る", form: "終止形（上一段）", targetConn: "終止形" },
  { word: "射", form: "連用形（上一段）", targetConn: "連用形" },
  { word: "閉ぢ", form: "連用形（上二段）", targetConn: "連用形" },
  { word: "恥づ", form: "終止形（上二段）", targetConn: "終止形" },
  { word: "起く", form: "終止形（上二段）", targetConn: "終止形" },
  { word: "捨て", form: "連用形（下二段）", targetConn: "連用形" },
  { word: "助け", form: "未然形（下二段）", targetConn: "未然形" },
  { word: "経（へ）", form: "未然形（下二段）", targetConn: "未然形" },
  { word: "植ゑ", form: "連用形（下二段）", targetConn: "連用形" },
  { word: "恋ひ", form: "連用形（下二段）", targetConn: "連用形" },
  { word: "忘れ", form: "連用形（下二段）", targetConn: "連用形" },
  { word: "来（き）", form: "連用形（カ変）", targetConn: "連用形" },
  { word: "来（く）", form: "終止形（カ変）", targetConn: "終止形" },
  { word: "為（せ）", form: "未然形（サ変）", targetConn: "未然形" },
  { word: "為（し）", form: "連用形（サ変）", targetConn: "連用形" },
  { word: "死な", form: "未然形（ナ変）", targetConn: "未然形" },
  { word: "往ぬ", form: "終止形（ナ変）", targetConn: "終止形" },
  { word: "あら", form: "未然形（ラ変）", targetConn: "未然形" },
  { word: "をり", form: "連用形（ラ変）", targetConn: "連用形" },
];

export const AUXILIARY_CARDS: AuxiliaryCard[] = [
  { name: "ず", conn: "未然形", mean: "打消（〜ない）", conjugationType: "特殊型", example: "花咲かず（花が咲かない）" },
  { name: "む", conn: "未然形", mean: "推量・意志（〜だろう）", conjugationType: "四段型", example: "都へ行かむ（都へ行こう）" },
  { name: "す", conn: "未然形", mean: "使役・尊敬（〜せる）", conjugationType: "下二段型", example: "文を書かす（手紙を書かせる）" },
  { name: "る", conn: "未然形", mean: "受身・自発（〜れる）", conjugationType: "下二段型", example: "思ひ出でらる（自然と思い出される）" },
  { name: "まほし", conn: "未然形", mean: "願望（〜たい）", conjugationType: "形容詞型", example: "見まほし（見たい）" },
  { name: "き", conn: "連用形", mean: "直接過去（〜た）", conjugationType: "特殊型", example: "京で見き（京都で見た）" },
  { name: "けり", conn: "連用形", mean: "過去・詠嘆（〜たなあ）", conjugationType: "ラ変型", example: "咲きにけり（咲いたのだなあ）" },
  { name: "つ", conn: "連用形", mean: "完了・強意（〜てしまう）", conjugationType: "下二段型", example: "言ひつ（言ってしまった）" },
  { name: "ぬ", conn: "連用形", mean: "完了・強意（〜た）", conjugationType: "ナ変型", example: "散りぬ（散ってしまった）" },
  { name: "たり", conn: "連用形", mean: "存続・完了（〜ている）", conjugationType: "ラ変型", example: "書きたり（書いている）" },
  { name: "べし", conn: "終止形", mean: "推量・当然（〜べきだ）", conjugationType: "形容詞型", example: "行くべし（行くべきだ）" },
  { name: "らむ", conn: "終止形", mean: "現在推量（今頃〜だろう）", conjugationType: "四段型", example: "鳴くらむ（鳴いているのだろう）" },
  { name: "まじ", conn: "終止形", mean: "打消推量（〜ないだろう）", conjugationType: "形容詞型", example: "散るまじ（散るはずがない）" },
  { name: "なり", conn: "終止形", mean: "伝聞・推定（〜そうだ）", conjugationType: "ラ変型", example: "降るなり（降るようだ）" },
];

export const KAKARI_PROBLEMS: KakariProblem[] = [
  {
    particle: "ぞ",
    targetForm: "連体形",
    prompt: "係助詞【ぞ】あり！文末の結びを選べ",
    correct: { text: "咲く", sub: "連体形" },
    wrongs: [
      { text: "咲け", sub: "已然形" },
      { text: "咲き", sub: "連用形" },
      { text: "咲か", sub: "未然形" }
    ]
  },
  {
    particle: "こそ",
    targetForm: "已然形",
    prompt: "係助詞【こそ】あり！文末の結びを選べ",
    correct: { text: "散れ", sub: "已然形" },
    wrongs: [
      { text: "散る", sub: "終止・連体" },
      { text: "散り", sub: "連用形" },
      { text: "散ら", sub: "未然形" }
    ]
  },
  {
    particle: "なむ",
    targetForm: "連体形",
    prompt: "係助詞【なむ】あり！文末の結びを選べ",
    correct: { text: "思ふ", sub: "連体形" },
    wrongs: [
      { text: "思へ", sub: "已然形" },
      { text: "思ひ", sub: "連用形" },
      { text: "思は", sub: "未然形" }
    ]
  },
  {
    particle: "や",
    targetForm: "連体形",
    prompt: "係助詞【や（疑問・反語）】あり！文末の結びを選べ",
    correct: { text: "散る", sub: "連体形" },
    wrongs: [
      { text: "散れ", sub: "已然形" },
      { text: "散り", sub: "連用形" },
      { text: "散ら", sub: "未然形" }
    ]
  },
  {
    particle: "か",
    targetForm: "連体形",
    prompt: "係助詞【か（疑問・反語）】あり！文末の結びを選べ",
    correct: { text: "行く", sub: "連体形" },
    wrongs: [
      { text: "行け", sub: "已然形" },
      { text: "行き", sub: "連用形" },
      { text: "行か", sub: "未然形" }
    ]
  }
,
  {
    particle: "ぞ",
    targetForm: "連体形",
    prompt: "係助詞【ぞ】あり！形容詞「高し」の結びを選べ",
    correct: { text: "高き", sub: "連体形" },
    wrongs: [
      { text: "高けれ", sub: "已然形" },
      { text: "高く", sub: "連用形" },
      { text: "高し", sub: "終止形" }
    ]
  },
  {
    particle: "こそ",
    targetForm: "已然形",
    prompt: "係助詞【こそ】あり！形容詞「清し」の結びを選べ",
    correct: { text: "清けれ", sub: "已然形" },
    wrongs: [
      { text: "清き", sub: "連体形" },
      { text: "清し", sub: "終止形" },
      { text: "清く", sub: "連用形" }
    ]
  },
  {
    particle: "なむ",
    targetForm: "連体形",
    prompt: "係助詞【なむ】あり！形容動詞「静かなり」の結びを選べ",
    correct: { text: "静かなる", sub: "連体形" },
    wrongs: [
      { text: "静かなれ", sub: "已然形" },
      { text: "静かなり", sub: "終止形" },
      { text: "静かに", sub: "連用形" }
    ]
  },
  {
    particle: "か",
    targetForm: "連体形",
    prompt: "係助詞【か】あり！助動詞「べし」の結びを選べ",
    correct: { text: "べき", sub: "連体形" },
    wrongs: [
      { text: "べけれ", sub: "已然形" },
      { text: "べし", sub: "終止形" },
      { text: "べく", sub: "連用形" }
    ]
  },
  {
    particle: "こそ",
    targetForm: "已然形",
    prompt: "係助詞【こそ】あり！助動詞「けり」の結びを選べ",
    correct: { text: "けれ", sub: "已然形" },
    wrongs: [
      { text: "ける", sub: "連体形" },
      { text: "けり", sub: "終止形" },
      { text: "けら", sub: "未然形" }
    ]
  },
  {
    particle: "や",
    targetForm: "連体形",
    prompt: "係助詞【や】あり！断定の助動詞「なり」の結びを選べ",
    correct: { text: "なる", sub: "連体形" },
    wrongs: [
      { text: "なれ", sub: "已然形" },
      { text: "なり", sub: "終止形" },
      { text: "に", sub: "連用形" }
    ]
  },
  {
    particle: "ぞ",
    targetForm: "連体形",
    prompt: "係助詞【ぞ】あり！下二段「受く」の結びを選べ",
    correct: { text: "受くる", sub: "連体形" },
    wrongs: [
      { text: "受くれ", sub: "已然形" },
      { text: "受く", sub: "終止形" },
      { text: "受け", sub: "連用形" }
    ]
  },
  {
    particle: "こそ",
    targetForm: "已然形",
    prompt: "係助詞【こそ】あり！上二段「落つ」の結びを選べ",
    correct: { text: "落つれ", sub: "已然形" },
    wrongs: [
      { text: "落つる", sub: "連体形" },
      { text: "落つ", sub: "終止形" },
      { text: "落ち", sub: "連用形" }
    ]
  },
  {
    particle: "か",
    targetForm: "連体形",
    prompt: "係助詞【か】あり！ラ変「あり」の結びを選べ",
    correct: { text: "ある", sub: "連体形" },
    wrongs: [
      { text: "あれ", sub: "已然形" },
      { text: "あり", sub: "終止形" },
      { text: "あら", sub: "未然形" }
    ]
  },
  {
    particle: "なむ",
    targetForm: "連体形",
    prompt: "係助詞【なむ】あり！下二段「過ぐ」の結びを選べ",
    correct: { text: "過ぐる", sub: "連体形" },
    wrongs: [
      { text: "過ぐれ", sub: "已然形" },
      { text: "過ぐ", sub: "終止形" },
      { text: "過ぎ", sub: "連用形" }
    ]
  },
  {
    particle: "こそ",
    targetForm: "已然形",
    prompt: "係助詞【こそ】あり！形容動詞「あはれなり」の結びを選べ",
    correct: { text: "あはれなれ", sub: "已然形" },
    wrongs: [
      { text: "あはれなる", sub: "連体形" },
      { text: "あはれなり", sub: "終止形" },
      { text: "あはれに", sub: "連用形" }
    ]
  },
  {
    particle: "や",
    targetForm: "連体形",
    prompt: "係助詞【や】あり！形容詞「遠し」の結びを選べ",
    correct: { text: "遠き", sub: "連体形" },
    wrongs: [
      { text: "遠けれ", sub: "已然形" },
      { text: "遠し", sub: "終止形" },
      { text: "遠く", sub: "連用形" }
    ]
  }
];

export const STAGES: Stage[] = [
  {
    name: "惑わしの白狐",
    emoji: "🦊",
    image: kitsuneImg,
    hp: 140,
    label: "第一幕：妖狐の社",
    desc: "千年の修業を経て人の言葉を惑わす妖狐。未然形の言霊で祓え。"
  },
  {
    name: "迷妄の烏天狗",
    emoji: "👺",
    image: tenguImg,
    hp: 210,
    label: "第二幕：深山の嵐",
    desc: "山林の嵐を操る漆黒の烏天狗。連用形の言霊で翼を折れ。"
  },
  {
    name: "文法怨霊・藤原の大君",
    emoji: "👻",
    image: lordImg,
    hp: 300,
    label: "大詰：怨霊の玉座",
    desc: "かつて宮廷歌壇を統べた大君の怨霊。係り結びと終止形の秘術を撃ち破れ。"
  }
];

// Endless Mode dynamic Yokai generator
export function generateEndlessStage(wave: number): Stage {
  const baseYokai = [
    { name: "惑わしの白狐", emoji: "🦊", img: kitsuneImg, labelBase: "妖狐" },
    { name: "宵闇の九尾狐", emoji: "🦊", img: kitsuneImg, labelBase: "妖狐" },
    { name: "迷妄の烏天狗", emoji: "👺", img: tenguImg, labelBase: "天狗" },
    { name: "疾風の鞍馬天狗", emoji: "👺", img: tenguImg, labelBase: "天狗" },
    { name: "文法怨霊・藤原の大君", emoji: "👻", img: lordImg, labelBase: "怨霊" },
    { name: "常世の紫式部怨霊", emoji: "👻", img: lordImg, labelBase: "怨霊" },
  ];

  const pick = baseYokai[(wave - 1) % baseYokai.length];
  const hp = Math.min(450, 100 + wave * 22);

  return {
    name: wave % 5 === 0 ? `【強敵】${pick.name}` : pick.name,
    emoji: pick.emoji,
    image: pick.img,
    hp,
    label: `百鬼夜行：第 ${wave} 体目`,
    desc: `百鬼夜行を彷徨う${pick.labelBase}。討伐を重ねて言霊の限界を超えよ。`
  };
}

export const COURT_RANKS: CourtRank[] = [
  { title: "従八位下・言霊見習い", reqExp: 0, description: "言霊の道を志したばかりの若き修業者。" },
  { title: "正七位・言霊修業者", reqExp: 150, description: "未然・連用の接続を心得始めた言霊使い。" },
  { title: "従六位上・言霊術士", reqExp: 380, description: "係り結びを自在に操り、妖魔を退ける術士。" },
  { title: "従五位下・言霊少丞", reqExp: 750, description: "朝廷より認められ、貴族の列に加わった使い手。" },
  { title: "正四位上・言霊大夫", reqExp: 1300, description: "あらゆる助動詞の活用を極めし宮廷の重鎮。" },
  { title: "従三位・公卿言霊師", reqExp: 2100, description: "言霊の真理に達し、天変地異をも祓う大師。" },
  { title: "正二位・陰陽言霊頭", reqExp: 3200, description: "数多の怨霊を調伏し、天下に名を轟かす筆頭。" },
  { title: "正一位・言霊神王", reqExp: 4800, description: "古今無双、言葉の神格化を果たした伝説の至高者。" },
];

export function getPlayerRank(exp: number): { currentRank: CourtRank; nextRank: CourtRank | null; progress: number } {
  let currentIdx = 0;
  for (let i = COURT_RANKS.length - 1; i >= 0; i--) {
    if (exp >= COURT_RANKS[i].reqExp) {
      currentIdx = i;
      break;
    }
  }

  const currentRank = COURT_RANKS[currentIdx];
  const nextRank = currentIdx < COURT_RANKS.length - 1 ? COURT_RANKS[currentIdx + 1] : null;

  let progress = 100;
  if (nextRank) {
    const range = nextRank.reqExp - currentRank.reqExp;
    const gained = exp - currentRank.reqExp;
    progress = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
  }

  return { currentRank, nextRank, progress };
}

export const ALL_TITLES: { id: string; name: string; condition: string }[] = [
  { id: "initiate", name: "言霊の志士", condition: "最初から所持" },
  { id: "fox_slayer", name: "白狐祓い", condition: "本編第一幕を突破" },
  { id: "tengu_slayer", name: "天狗破り", condition: "本編第二幕を突破" },
  { id: "phantom_pacifier", name: "怨霊鎮魂者", condition: "本編を完全制覇" },
  { id: "combo_master", name: "十連撃の太刀", condition: "10連続正解を達成" },
  { id: "kakari_expert", name: "係り結びの達人", condition: "係り結び一閃を3回以上成功" },
  { id: "hyakki_hero", name: "百鬼夜行の覇者", condition: "百鬼夜行モードで第5体目以上を撃破" },
  { id: "speed_god", name: "六十秒の神速", condition: "タイムアタックで得点400以上を獲得" },
  { id: "flawless", name: "無傷の快挙", condition: "一度も誤答せずに本編をクリア" },
  { id: "card_scholar", name: "助動詞の求道者", condition: "札図鑑の習熟度合計が30以上に到達" }
];

export function checkNewTitles(profile: PlayerProfile, lastResult?: { win: boolean; mode: string; combo: number; score: number; mistakes: number; wave?: number }): string[] {
  const current = new Set(profile.unlockedTitles);
  const newlyUnlocked: string[] = [];

  const grant = (name: string) => {
    if (!current.has(name)) {
      newlyUnlocked.push(name);
      current.add(name);
    }
  };

  if (profile.storyClears >= 1) grant("怨霊鎮魂者");
  if (profile.storyClears >= 1 || (lastResult?.mode === 'story' && (lastResult?.wave || 0) >= 1)) grant("白狐祓い");
  if (profile.storyClears >= 1 || (lastResult?.mode === 'story' && (lastResult?.wave || 0) >= 2)) grant("天狗破り");
  if ((lastResult?.combo || 0) >= 10) grant("十連撃の太刀");
  if (profile.endlessHighWave >= 5) grant("百鬼夜行の覇者");
  if (profile.timeAttackHighScore >= 400) grant("六十秒の神速");
  if (lastResult?.win && lastResult?.mistakes === 0) grant("無傷の快挙");

  const totalMastery = Object.values(profile.cardMastery || {}).reduce((a, b) => a + b, 0);
  if (totalMastery >= 30) grant("助動詞の求道者");

  return newlyUnlocked;
}

export const GRAMMAR_DICTIONARY: GrammarEntry[] = [
  // 未然形接続
  {
    name: "ず",
    conn: "未然形",
    meanings: ["打消（〜ない）"],
    conjugation: "特殊型（（ず）・ず・ず・ぬ・ね・〇 / ざら・ざり・〇・ざる・ざれ・ざれ）",
    tip: "最も基本的な打消の助動詞。ラ変型の補助活用「ざり」も重要。",
    example: "秋風立ちて、花咲かず。（秋風が立って花が咲かない）"
  },
  {
    name: "む・むず",
    conn: "未然形",
    meanings: ["推量（〜だろう）", "意志（〜よう）", "勧誘・適当", "仮定・婉曲"],
    conjugation: "四段型（〇・〇・む・む・め・〇）",
    tip: "主語が一人称なら意志、三人称なら推量、二人称なら勧誘になりやすい。",
    example: "いざ、都へ行かむ。（さあ、都へ行こう）"
  },
  {
    name: "る・らる",
    conn: "未然形",
    meanings: ["受身（〜れる）", "尊敬（〜なさる）", "自発（自然と〜される）", "可能（〜できる）"],
    conjugation: "下二段型（れ・れ・る・るる・るれ・れよ）",
    tip: "四段・ナ変・ラ変の未然形には「る」、それ以外には「らる」が接続。",
    example: "昔のことが思ひ出でらる。（昔のことが自然と思い出される）"
  },
  {
    name: "す・さす・しむ",
    conn: "未然形",
    meanings: ["使役（〜せる・〜させる）", "尊敬（〜なさる）"],
    conjugation: "下二段型（せ・せ・す・する・すれ・せよ）",
    tip: "「仰せらる」「聞こしめす」など高貴な人への最高敬語にも使われる。",
    example: "使者に文を持たせ給ふ。（使者に手紙を持たせなさる）"
  },
  {
    name: "まほし",
    conn: "未然形",
    meanings: ["自己の願望（〜たい）"],
    conjugation: "形容詞型（まほしく・まほし・まほしき・まほしけれ）",
    tip: "連用形接続の「たし」と同じく願望を表すが、「まほし」は未然形接続。",
    example: "都の桜を見まほし。（都の桜を見たい）"
  },
  // 連用形接続
  {
    name: "き",
    conn: "連用形",
    meanings: ["直接過去（自分が体験した過去：〜た）"],
    conjugation: "特殊型（（せ）・〇・き・し・しか・〇）",
    tip: "話者自身が直接経験した過去の事実を表す（カ変・サ変への接続に注意）。",
    example: "昨日かの寺に行きき。（昨日あの寺へ行った）"
  },
  {
    name: "けり",
    conn: "連用形",
    meanings: ["過去（伝え聞いた過去：〜たそうだ）", "詠嘆（〜だなあ）"],
    conjugation: "ラ変型（けら・〇・けり・ける・けれ・〇）",
    tip: "和歌の中や「〜にけり」の形では、気づきを表す「詠嘆」になることが多い。",
    example: "山桜咲きにけり。（山桜が咲いたのだなあ）"
  },
  {
    name: "つ・ぬ",
    conn: "連用形",
    meanings: ["完了（〜てしまった・〜た）", "強意・確述（きっと〜する）", "並列"],
    conjugation: "下二段型（て・て・つ・つる・つれ・てよ） / ナ変型（な・に・ぬ・ぬる・ぬれ・ね）",
    tip: "推量の助動詞「む・べし」の上に付くと強意（「てむ」「なむ」「つべし」「ぬべし」）。",
    example: "風吹きぬ。（風が吹いてしまった）"
  },
  {
    name: "たり（完了）",
    conn: "連用形",
    meanings: ["存続（〜ている）", "完了（〜てしまった）"],
    conjugation: "ラ変型（たら・たり・たり・たる・たれ・たれ）",
    tip: "動作が行われた結果が今も残っている「存続」の意が中心。",
    example: "雪降り積もりたり。（雪が降り積もっている）"
  },
  // 終止形接続
  {
    name: "べし",
    conn: "終止形（ラ変型は連体形）",
    meanings: ["推量", "意志", "可能", "当然・義務", "命令", "適当（スイカトメテ）"],
    conjugation: "形容詞型（べく・べし・べき・べけれ など）",
    tip: "語呂合わせ「すいかとめて」（推量・意志・可能・当然・命令・適当）。",
    example: "必ず勝つべし。（きっと勝つだろう／勝たねばならない）"
  },
  {
    name: "らむ",
    conn: "終止形（ラ変型は連体形）",
    meanings: ["現在推量（今頃〜しているだろう）", "現在の原因推量", "現在の伝聞・婉曲"],
    conjugation: "四段型（〇・〇・らむ・らむ・らめ・〇）",
    tip: "目の前にない現在の事態を推し量る。",
    example: "今頃は都にて散るらむ。（今頃は都で散っているだろう）"
  },
  {
    name: "まじ",
    conn: "終止形（ラ変型は連体形）",
    meanings: ["打消推量（〜ないだろう）", "打消意志（〜しないつもりだ）", "不可能", "禁止"],
    conjugation: "形容詞型（まじく・まじ・まじき・まじけれ）",
    tip: "「べし」の打消版。意味も「べし」の各意味の打消に対応。",
    example: "この城落つるまじ。（この城は落ちないだろう）"
  },
  {
    name: "なり（伝聞・推定）",
    conn: "終止形（ラ変型は連体形）",
    meanings: ["伝聞（〜という・〜そうだ）", "推定（音を聞いて〜と判断する）"],
    conjugation: "ラ変型（〇・なり・なり・なる・なれ・〇）",
    tip: "耳で聞いた音や声に基づく推定。「笛の音聞こゆなり」など。",
    example: "遠くにて鳥鳴くなり。（遠くで鳥が鳴いているようだ）"
  }
];

export const KAKARI_RULES = [
  { particle: "ぞ", musubi: "連体形", meaning: "強意（文末が連体形になる）" },
  { particle: "なむ", musubi: "連体形", meaning: "強意（文末が連体形になる）" },
  { particle: "や", musubi: "連体形", meaning: "疑問・反語（文末が連体形になる）" },
  { particle: "か", musubi: "連体形", meaning: "疑問・反語（文末が連体形になる）" },
  { particle: "こそ", musubi: "已然形", meaning: "強意・逆接（文末が已然形になる）" },
];

// ============================================================
// 意味識別問題（言霊の真価）
// 短い古文の例文を提示し、文中の助動詞の意味を4択で問う。
// 例文は著名な古典からの引用、または古典の文体に倣った確実な文。
// ============================================================
export const MEANING_PROBLEMS: MeaningProblem[] = [
  // ── む ──
  {
    id: "m01",
    sentence: "いざ、都へ行かむ。",
    auxiliary: "む",
    targetText: "行かむ",
    correct: "意志（〜よう）",
    wrongs: ["推量（〜だろう）", "勧誘（〜しようよ）", "婉曲（〜かしら）"],
    explanation: "主語は話者自身（一人称）なので、「む」は自分の意志を表します。「さあ、都へ行こう」。",
  },
  {
    id: "m02",
    sentence: "この花、明日は散らむ。",
    auxiliary: "む",
    targetText: "散らむ",
    correct: "推量（〜だろう）",
    wrongs: ["意志（〜よう）", "勧誘（〜しようよ）", "命令（〜せよ）"],
    explanation: "主語は「花」という三人称の物なので、「む」は推量。「明日は散るだろう」となります。",
  },
  {
    id: "m03",
    sentence: "君も、都へ行かむ。",
    auxiliary: "む",
    targetText: "行かむ",
    correct: "勧誘（〜しようよ）",
    wrongs: ["推量（〜だろう）", "意志（〜よう）", "打消（〜ない）"],
    explanation: "主語が二人称「君」なので、「む」は相手を誘う勧誘。「あなたも都へ行きましょう」。",
  },
  {
    id: "m04",
    sentence: "世の中を、何に譬へむ。",
    auxiliary: "む",
    targetText: "譬へむ",
    correct: "婉曲（〜たらよいだろう）",
    wrongs: ["推量（〜だろう）", "意志（〜よう）", "勧誘（〜しようよ）"],
    explanation: "疑問の言葉と結びついた「む」は、断定を避ける婉曲の用法。「何に例えたらよいものだろう」。",
  },
  {
    id: "m05",
    sentence: "友は今頃、都に着きなむ。",
    auxiliary: "む",
    targetText: "着きなむ",
    correct: "推量（〜だろう）",
    wrongs: ["意志（〜よう）", "完了（〜てしまった）だけ", "命令（〜せよ）"],
    explanation: "「なむ」は完了の「ぬ」＋推量の「む」。三人称の友のことを「今頃は都に着いているだろう」と推し量っています。",
  },
  // ── べし ──
  {
    id: "m06",
    sentence: "明日は雨降るべし。",
    auxiliary: "べし",
    targetText: "降るべし",
    correct: "推量（〜だろう）",
    wrongs: ["意志（〜つもりだ）", "命令（〜せよ）", "不可能（〜できない）"],
    explanation: "天気という自分の意志の及ばない事柄なので、「べし」は推量。「明日は雨が降るだろう」。",
  },
  {
    id: "m07",
    sentence: "必ずや、仇を討つべし。",
    auxiliary: "べし",
    targetText: "討つべし",
    correct: "意志（〜つもりだ）",
    wrongs: ["推量（〜だろう）", "可能（〜できる）", "伝聞（〜そうだ）"],
    explanation: "主語は話者自身で、強い決意の文脈なので「べし」は意志。「必ず仇を討つつもりだ」。",
  },
  {
    id: "m08",
    sentence: "この嶺よりは、都まで見渡すべし。",
    auxiliary: "べし",
    targetText: "見渡すべし",
    correct: "可能（〜できる）",
    wrongs: ["推量（〜だろう）", "当然（〜べきだ）", "命令（〜せよ）"],
    explanation: "場所の条件から「見渡すことができる」という可能の意味になります。",
  },
  {
    id: "m09",
    sentence: "学生は、勉学に励むべし。",
    auxiliary: "べし",
    targetText: "励むべし",
    correct: "当然・義務（〜べきだ）",
    wrongs: ["推量（〜だろう）", "可能（〜できる）", "意志（〜つもりだ）"],
    explanation: "立場上なすべきことを示すので、「べし」は当然・義務。「勉学に励むべきだ」。",
  },
  {
    id: "m10",
    sentence: "汝、明日までにこの文を持て来るべし。",
    auxiliary: "べし",
    targetText: "来るべし",
    correct: "命令（〜せよ）",
    wrongs: ["推量（〜だろう）", "適当（〜するのがよい）", "打消推量（〜ないだろう）"],
    explanation: "目下の者への指示の文脈なので、「べし」は命令。「持って来なさい」。",
  },
  {
    id: "m11",
    sentence: "暑さ厳しき日は、無理に歩くまじ。涼しき蔭に休むべし。",
    auxiliary: "べし",
    targetText: "休むべし",
    correct: "適当（〜するのがよい）",
    wrongs: ["推量（〜だろう）", "意志（〜つもりだ）", "命令（〜せよ）"],
    explanation: "助言の文脈で「〜するのがよい」と勧める適当の用法。「涼しい蔭に休むのがよい」。",
  },
  // ── る・らる ──
  {
    id: "m12",
    sentence: "猫に、大事の魚を取らる。",
    auxiliary: "らる",
    targetText: "取らる",
    correct: "受身（〜れる）",
    wrongs: ["尊敬（〜なさる）", "自発（自然と〜される）", "可能（〜できる）"],
    explanation: "「猫に」という動作主が示され、被害を受ける話なので「らる」は受身。「猫に魚を取られた」。",
  },
  {
    id: "m13",
    sentence: "帝は、その歌を御覧ぜらる。",
    auxiliary: "らる",
    targetText: "御覧ぜらる",
    correct: "尊敬（〜なさる）",
    wrongs: ["受身（〜れる）", "自発（自然と〜される）", "使役（〜なさる）"],
    explanation: "主語が帝という高貴な方なので、「らる」は尊敬。「帝はその歌を御覧になる」。",
  },
  {
    id: "m14",
    sentence: "都の春の景色、思ひ出でらる。",
    auxiliary: "らる",
    targetText: "出でらる",
    correct: "自発（自然と〜される）",
    wrongs: ["受身（〜れる）", "尊敬（〜なさる）", "可能（〜できる）"],
    explanation: "「思ひ出づ」についた「らる」は自発。「（昔見た）都の春の景色が自然と思い出される」。",
  },
  {
    id: "m15",
    sentence: "静かなる夜は、遠くの鐘の音もよく聞かる。",
    auxiliary: "る",
    targetText: "聞かる",
    correct: "可能（〜できる）",
    wrongs: ["受身（〜れる）", "尊敬（〜なさる）", "自発（自然と〜される）"],
    explanation: "四段動詞「聞く」には「る」が接続します。ここでは「よく聞くことができる」という可能の意味です。",
  },
  // ── す・さす ──
  {
    id: "m16",
    sentence: "母、子に薬を飲ます。",
    auxiliary: "す",
    targetText: "飲ます",
    correct: "使役（〜せる）",
    wrongs: ["尊敬（〜なさる）", "受身（〜れる）", "自発（自然と〜される）"],
    explanation: "「子に」という使役の対象が示されているので、「す」は使役。「母が子に薬を飲ませる」。",
  },
  {
    id: "m17",
    sentence: "院は、歌を詠ませ給ふ。",
    auxiliary: "さす",
    targetText: "詠ませ",
    correct: "尊敬（〜なさる）",
    wrongs: ["使役（〜せる）", "受身（〜れる）", "可能（〜できる）"],
    explanation: "「さす」に尊敬の「給ふ」が続く形は、そのまま主語への尊敬を表します。「院は歌をお詠みになる」。",
  },
  // ── なり（伝聞・推定） ──
  {
    id: "m18",
    sentence: "あの山に、名のある滝ありなり。",
    auxiliary: "なり",
    targetText: "ありなり",
    correct: "伝聞（〜だそうだ）",
    wrongs: ["推定（〜のようだ）", "断定（〜である）", "打消（〜でない）"],
    explanation: "人から聞いた情報を述べているので、伝聞・推定の「なり」は伝聞。「滝があるそうだ」。",
  },
  {
    id: "m19",
    sentence: "隣の家にて、子ども泣くなり。",
    auxiliary: "なり",
    targetText: "泣くなり",
    correct: "推定（〜のようだ）",
    wrongs: ["伝聞（〜だそうだ）", "断定（〜である）", "過去（〜た）"],
    explanation: "泣き声という音を耳にして判断しているので、「なり」は推定。「子どもが泣いているようだ」。",
  },
  // ── まじ ──
  {
    id: "m20",
    sentence: "この雪にては、峠は越えまじ。",
    auxiliary: "まじ",
    targetText: "越えまじ",
    correct: "打消推量（〜ないだろう）",
    wrongs: ["禁止（〜してはならない）", "打消意志（〜しないつもりだ）", "不可能（〜できない）"],
    explanation: "天候という意志の及ばない事柄の見通しなので、「まじ」は打消推量。「峠は越えられないだろう」。",
  },
  {
    id: "m21",
    sentence: "汝、このことを人に語るまじ。",
    auxiliary: "まじ",
    targetText: "語るまじ",
    correct: "禁止（〜してはならない）",
    wrongs: ["打消推量（〜ないだろう）", "打消意志（〜しないつもりだ）", "不可能（〜できない）"],
    explanation: "目下の者への指示の文脈なので、「まじ」は禁止。「人に語ってはならない」。",
  },
  // ── らむ ──
  {
    id: "m22",
    sentence: "今頃は、故郷にて桜咲くらむ。",
    auxiliary: "らむ",
    targetText: "咲くらむ",
    correct: "現在推量（今頃〜しているだろう）",
    wrongs: ["過去推量（〜しただろう）", "意志（〜よう）", "伝聞（〜だそうだ）"],
    explanation: "「今頃は」と、目の前にない現在の様子を推し量るので、「らむ」は現在推量。",
  },
  {
    id: "m23",
    sentence: "などかくは泣くらむ。",
    auxiliary: "らむ",
    targetText: "泣くらむ",
    correct: "原因推量（なぜ〜のだろう）",
    wrongs: ["現在推量（今頃〜しているだろう）", "意志（〜よう）", "命令（〜せよ）"],
    explanation: "「など（なぜ）」という疑問の言葉と結びついた「らむ」は、理由を推し量る原因推量です。",
  },
  // ── き・けり ──
  {
    id: "m24",
    sentence: "昔、男ありけり。（伊勢物語）",
    auxiliary: "けり",
    targetText: "ありけり",
    correct: "過去（伝え聞いた過去：〜た）",
    wrongs: ["詠嘆（〜だなあ）", "推量（〜だろう）", "完了（〜てしまった）"],
    explanation: "物語の語り出しの「けり」は、伝え聞いた過去を表します。自分が直接体験した過去には「き」を使います。",
  },
  {
    id: "m25",
    sentence: "山桜、咲きにけり。",
    auxiliary: "けり",
    targetText: "咲きにけり",
    correct: "詠嘆（〜だなあ）",
    wrongs: ["過去（伝え聞いた過去：〜た）", "推量（〜だろう）", "打消（〜ない）"],
    explanation: "和歌や感動の場面の「〜にけり」は詠嘆。「山桜が咲いたのだなあ」と、気づきと感動を表します。",
  },
  {
    id: "m26",
    sentence: "我、昨日その歌を聞きき。",
    auxiliary: "き",
    targetText: "聞きき",
    correct: "直接過去（自分が体験した過去：〜た）",
    wrongs: ["過去（伝え聞いた過去：〜た）", "詠嘆（〜だなあ）", "完了（〜てしまった）"],
    explanation: "助動詞「き」は、話者自身が直接体験した過去専用です。「私は昨日その歌を聞いた」。",
  },
];

// ============================================================
// 例文読解問題（古文の間）
// 著作権の切れた古典の実文の一節を用い、助動詞の意味・係り結び・接続を問う。
// ============================================================
export const READING_PROBLEMS: ReadingProblem[] = [
  {
    id: "r01",
    source: "竹取物語",
    text: "今は昔、竹取の翁といふ者ありけり。",
    translation: "今となっては昔の話だが、竹取の翁という者がいた。",
    question: "「ありけり」の助動詞「けり」の意味として正しいものは？",
    target: "ありけり",
    correct: "過去（伝え聞いた過去）",
    wrongs: ["詠嘆（〜だなあ）", "推量（〜だろう）", "完了（〜てしまった）"],
    explanation: "物語の語り出しの「けり」は、語り手が伝え聞いた過去を表します。",
  },
  {
    id: "r02",
    source: "枕草子（春はあけぼの）",
    text: "春はあけぼの。やうやう白くなりゆく山際、少し明かりて、紫だちたる雲の細くたなびきたる。",
    translation: "春は明け方がよい。だんだん白くなっていく山の稜線が少し明るくなって、紫がかった雲が細くたなびいている（のがよい）。",
    question: "「たなびきたる」の「たる」が表す意味は？",
    target: "たなびきたる",
    correct: "存続（〜ている）",
    wrongs: ["過去（〜た）", "推量（〜だろう）", "打消（〜ない）"],
    explanation: "「たる」は存続・完了の助動詞「たり」の連体形。ここでは雲がたなびいている状態の存続を表します。",
  },
  {
    id: "r03",
    source: "枕草子（夏は夜）",
    text: "夏は夜。月の頃はさらなり、闇もなほ、螢の多く飛びちがひたる。",
    translation: "夏は夜がよい。月が出ている頃は言うまでもなく、闇の夜もやはり、螢がたくさん飛び交っている（のがよい）。",
    question: "「さらなり」の「なり」の意味として正しいものは？",
    target: "さらなり",
    correct: "断定（〜である）",
    wrongs: ["伝聞（〜だそうだ）", "推定（〜のようだ）", "打消（〜でない）"],
    explanation: "「さらなり」の「なり」は断定の助動詞で、体言（副詞「さら」）に接続しています。伝聞・推定の「なり」は動詞の終止形に接続するので、接続から見分けられます。",
  },
  {
    id: "r04",
    source: "徒然草（序段）",
    text: "つれづれなるままに、日暮らし、硯に向かひて、心にうつりゆくよしなしごとを、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。",
    translation: "手持ち無沙汰なのにまかせて、一日中硯に向かって、心に浮かんでは消えるたわいもないことを、とりとめもなく書きつけると、不思議と心が乱れるような気がする。",
    question: "文中の係助詞「こそ」を受けて、文末はどの活用形で結ばれているか？",
    target: "ものぐるほしけれ",
    correct: "已然形",
    wrongs: ["連体形", "終止形", "未然形"],
    explanation: "係助詞「こそ」の結びは已然形。「ものぐるほしけれ」は形容詞「ものぐるほし」の已然形です。",
  },
  {
    id: "r05",
    source: "方丈記（冒頭）",
    text: "ゆく河の流れは絶えずして、しかももとの水にあらず。",
    translation: "流れゆく河の流れは絶えることがなく、しかも（それは）もとの水ではない。",
    question: "「あらず」の助動詞「ず」の意味は？",
    target: "あらず",
    correct: "打消（〜ない）",
    wrongs: ["推量（〜だろう）", "完了（〜てしまった）", "尊敬（〜なさる）"],
    explanation: "「あらず」は「あり」の未然形「あら」＋打消の「ず」。「もとの水ではない」という意味です。",
  },
  {
    id: "r06",
    source: "方丈記（冒頭）",
    text: "淀みに浮かぶうたかたは、かつ消えかつ結びて、久しくとどまりたるためしなし。",
    translation: "淀みに浮かぶ水の泡は、消えたり結んだりして、長くとどまっていた例はない。",
    question: "「とどまりたる」の「たる」が表す意味は？",
    target: "とどまりたる",
    correct: "存続（〜ている）",
    wrongs: ["推量（〜だろう）", "過去（〜た）", "打消（〜ない）"],
    explanation: "「たる」は「たり」の連体形で、泡がとどまっている状態の存続を表します。",
  },
  {
    id: "r07",
    source: "源氏物語（桐壺）",
    text: "いづれの御時にか、女御、更衣あまたさぶらひたまひけるなかに、いとやむごとなき際ならぬが、すぐれて時めきたまふありけり。",
    translation: "どの帝の御代であったか、女御や更衣が大勢お仕えしていたなかに、たいして高貴な身分ではないが、格別に帝の寵愛を受けている方がいた。",
    question: "「さぶらひたまひける」の「ける」は、どの助動詞の活用形か？",
    target: "たまひける",
    correct: "過去の助動詞「けり」の連体形",
    wrongs: ["推量の助動詞「らむ」の連体形", "完了の助動詞「たり」の連体形", "断定の助動詞「なり」の連体形"],
    explanation: "「ける」は過去の助動詞「けり」の連体形で、体言「なか」にかかっています。",
  },
  {
    id: "r08",
    source: "奥の細道（冒頭）",
    text: "月日は百代の過客にして、行きかふ年もまた旅人なり。",
    translation: "月日は永遠の旅人であり、行き交う年もまた旅人である。",
    question: "「旅人なり」の「なり」の意味として正しいものは？",
    target: "旅人なり",
    correct: "断定（〜である）",
    wrongs: ["伝聞（〜だそうだ）", "推定（〜のようだ）", "打消（〜でない）"],
    explanation: "体言「旅人」に接続する「なり」は断定。「旅人である」と言い切っています。",
  },
  {
    id: "r09",
    source: "平家物語（祇園精舎）",
    text: "おごれる人も久しからず、ただ春の夜の夢のごとし。",
    translation: "おごり高ぶる人も（その栄華は）長くは続かず、まるで春の夜の夢のようである。",
    question: "「久しからず」の「ず」は、形容詞「久し」のどの活用形に接続しているか？",
    target: "久しからず",
    correct: "未然形",
    wrongs: ["連用形", "終止形", "連体形"],
    explanation: "打消の助動詞「ず」は未然形接続。「久し」の未然形「久しから」に接続しています（「ず」の補助活用は形容詞の未然形に準じます）。",
  },
  {
    id: "r10",
    source: "枕草子（秋は夕暮れ）",
    text: "秋は夕暮れ。夕日のさして山の端いと近うなりたるに、烏の寝所へ行くとて、三つ四つ、二つ三つなど飛び急ぐさへあはれなり。",
    translation: "秋は夕暮れがよい。夕日が差して山の稜線がとても近くなっているところに、烏が寝所へ帰ろうとして、三つ四つ、二つ三つなどと飛び急ぐのまでも、しみじみと趣がある。",
    question: "文末「あはれなり」の「なり」の意味として正しいものは？",
    target: "あはれなり",
    correct: "断定（〜である）",
    wrongs: ["伝聞（〜だそうだ）", "推定（〜のようだ）", "過去（〜た）"],
    explanation: "形容動詞の語幹「あはれ」に付く「なり」は断定。「趣がある」と言い切る文末です。",
  },
  {
    id: "r11",
    source: "枕草子（冬はつとめて）",
    text: "冬はつとめて。雪の降りたるは、いふべきにもあらず。",
    translation: "冬は早朝がよい。雪が降っているのは、言うまでもなく（よい）。",
    question: "「降りたる」の「たる」が表す意味は？",
    target: "降りたる",
    correct: "存続（〜ている）",
    wrongs: ["推量（〜だろう）", "打消（〜ない）", "命令（〜せよ）"],
    explanation: "「たる」は「たり」の連体形。雪が降っている状態が続いていることを表す存続の用法です。",
  },
  {
    id: "r12",
    source: "徒然草（花は盛りに）",
    text: "花は盛りに、月は隈なきをのみ見るものかは。",
    translation: "花は満開の時だけを、月は曇りのない時だけを見るものだろうか。（いや、そうではない）",
    question: "文中の係助詞「か」を受けて文が結ばれる時、結びの活用形はどれか？",
    target: "見るものかは",
    correct: "連体形",
    wrongs: ["已然形", "終止形", "未然形"],
    explanation: "疑問・反語の係助詞「か」の結びは連体形。ここでは体言「もの」が結びの役割を果たしています。「こそ」だけが已然形で結ぶ点と区別しましょう。",
  },
];

// ============================================================
// 活用形トレーニング問題（型稽古）
// 活用表が確実な動詞だけを収録し、6活用形すべてを出題対象として生成する。
// 誤答は同じ動詞の他の活用形（表記が異なるもの）から選ぶ。
// ============================================================
const CONJUGATION_FORMS = ["未然形", "連用形", "終止形", "連体形", "已然形", "命令形"] as const;

const CONJUGATION_TABLES: { verb: string; className: string; forms: string[] }[] = [
  { verb: "書く", className: "四段", forms: ["書か", "書き", "書く", "書く", "書け", "書け"] },
  { verb: "咲く", className: "四段", forms: ["咲か", "咲き", "咲く", "咲く", "咲け", "咲け"] },
  { verb: "思ふ", className: "四段", forms: ["思は", "思ひ", "思ふ", "思ふ", "思へ", "思へ"] },
  { verb: "読む", className: "四段", forms: ["読ま", "読み", "読む", "読む", "読め", "読め"] },
  { verb: "立つ", className: "四段", forms: ["立た", "立ち", "立つ", "立つ", "立て", "立て"] },
  { verb: "聞く", className: "四段", forms: ["聞か", "聞き", "聞く", "聞く", "聞け", "聞け"] },
  { verb: "見る", className: "上一段", forms: ["見", "見", "見る", "見る", "見れ", "見よ"] },
  { verb: "着る", className: "上一段", forms: ["着", "着", "着る", "着る", "着れ", "着よ"] },
  { verb: "起く", className: "上二段", forms: ["起き", "起き", "起く", "起くる", "起くれ", "起きよ"] },
  { verb: "落つ", className: "上二段", forms: ["落ち", "落ち", "落つ", "落つる", "落つれ", "落ちよ"] },
  { verb: "受く", className: "下二段", forms: ["受け", "受け", "受く", "受くる", "受くれ", "受けよ"] },
  { verb: "過ぐ", className: "下二段", forms: ["過ぎ", "過ぎ", "過ぐ", "過ぐる", "過ぐれ", "過ぎよ"] },
  { verb: "捨つ", className: "下二段", forms: ["捨て", "捨て", "捨つ", "捨つる", "捨つれ", "捨てよ"] },
  { verb: "来", className: "カ変", forms: ["こ", "き", "く", "くる", "くれ", "こよ"] },
  { verb: "す", className: "サ変", forms: ["せ", "し", "す", "する", "すれ", "せよ"] },
  { verb: "死ぬ", className: "ナ変", forms: ["死な", "死に", "死ぬ", "死ぬる", "死ぬれ", "死ね"] },
  { verb: "あり", className: "ラ変", forms: ["あら", "あり", "あり", "ある", "あれ", "あれ"] },
];

function buildConjugationProblems(): ConjugationProblem[] {
  const problems: ConjugationProblem[] = [];
  for (const table of CONJUGATION_TABLES) {
    CONJUGATION_FORMS.forEach((formName, i) => {
      const correct = table.forms[i];
      const alternates: string[] = [];
      for (const f of table.forms) {
        if (f !== correct && !alternates.includes(f)) alternates.push(f);
      }
      if (alternates.length < 3) return;
      problems.push({
        id: `conj-${table.verb}-${formName}`,
        verb: table.verb,
        className: table.className,
        targetForm: formName,
        correct,
        wrongs: alternates.slice(0, 3),
        explanation: `「${table.verb}」は${table.className}活用。${table.forms.join("・")}と活用し、${formName}は「${correct}」です。`,
      });
    });
  }
  return problems;
}

export const CONJUGATION_PROBLEMS: ConjugationProblem[] = buildConjugationProblems();

/** EXPだけから導かれる位階インデックス（受験資格の判定用） */
export function getRankIndexByExp(exp: number): number {
  let idx = 0;
  for (let i = COURT_RANKS.length - 1; i >= 0; i--) {
    if (exp >= COURT_RANKS[i].reqExp) {
      idx = i;
      break;
    }
  }
  return idx;
}

/**
 * 実際に保持している位階（昇進試験で合格した位階）に基づく表示用の位階情報。
 * - currentRank: 保持位階
 * - nextRank: 次の位階（最高位なら null）
 * - progress: 次の位階の受験資格（必要EXP）に対する進捗％
 * - examAvailable: 次の位階の受験資格を満たし、昇進試験を受けられるか
 */
export function getHeldRankInfo(profile: PlayerProfile): {
  currentRank: CourtRank;
  nextRank: CourtRank | null;
  progress: number;
  examAvailable: boolean;
  rankIndex: number;
} {
  const held =
    typeof profile.promotedRank === 'number'
      ? Math.min(Math.max(0, profile.promotedRank), COURT_RANKS.length - 1)
      : getRankIndexByExp(profile.exp);
  const currentRank = COURT_RANKS[held];
  const nextRank = held < COURT_RANKS.length - 1 ? COURT_RANKS[held + 1] : null;
  let progress = 100;
  if (nextRank) {
    const range = nextRank.reqExp - currentRank.reqExp;
    const gained = profile.exp - currentRank.reqExp;
    progress = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
  }
  return {
    currentRank,
    nextRank,
    progress,
    examAvailable: nextRank !== null && profile.exp >= nextRank.reqExp,
    rankIndex: held,
  };
}

// ─────────────────────────────────────────────
// 敬語問題（敬語モード）: 実文中の敬語表現について「敬意の方向」を問う。
// 方向の内訳: 尊敬6 / 謙譲6 / 丁寧4 / 二重敬語4。
// 出典を明記した実文・場面を中心に、文法的に紛れのない例だけを収録する。
// ─────────────────────────────────────────────
export const KEIGO_PROBLEMS: KeigoProblem[] = [
  // ── 尊敬（動作主を高める） ──
  {
    id: "k01",
    source: "枕草子",
    sentence: "中宮、簾の内より「香炉峰の雪は、いかならむ」とのたまふ。",
    expression: "のたまふ",
    relation: "語り手（清少納言）→ 中宮",
    direction: "sonkei",
    explanation: "「のたまふ」は「言ふ」の尊敬語。言葉を発する中宮（動作主）を高めているので尊敬です。",
  },
  {
    id: "k02",
    source: "源氏物語（例文）",
    sentence: "若宮、御所の庭におはす。",
    expression: "おはす",
    relation: "語り手 → 若宮",
    direction: "sonkei",
    explanation: "「おはす」は「あり・居る」の尊敬語。そこにいらっしゃる若宮（動作主）を高める尊敬表現です。",
  },
  {
    id: "k03",
    source: "例文",
    sentence: "光源氏、御車より降り給ふ。",
    expression: "降り給ふ",
    relation: "語り手 → 光源氏",
    direction: "sonkei",
    explanation: "助動詞「給ふ（四段）」が、車から降りる源氏（動作主）の動作を高める尊敬表現です。",
  },
  {
    id: "k04",
    source: "枕草子（例文）",
    sentence: "殿、笛を遊ばす。",
    expression: "遊ばす",
    relation: "語り手 → 殿",
    direction: "sonkei",
    explanation: "「遊ばす」は「す（する）」の尊敬語で、現代語の「なさる」に当たります。笛を吹く殿（動作主）を高めています。",
  },
  {
    id: "k05",
    source: "源氏物語（例文）",
    sentence: "中宮、絵巻を御覧ず。",
    expression: "御覧ず",
    relation: "語り手 → 中宮",
    direction: "sonkei",
    explanation: "「御覧ず」は「見る」の尊敬語。絵巻を見る中宮（動作主）を高める尊敬表現です。",
  },
  {
    id: "k06",
    source: "竹取物語（例文）",
    sentence: "帝、歌人を召す。",
    expression: "召す",
    relation: "語り手 → 帝",
    direction: "sonkei",
    explanation: "「召す」は「呼ぶ・招く」の尊敬語。歌人を呼び寄せる帝（動作主）を高めています。",
  },
  // ── 謙譲（受け手を高め、動作主がへりくだる） ──
  {
    id: "k07",
    source: "竹取物語",
    sentence: "天人、かぐや姫に天の羽衣を着せ奉る。",
    expression: "着せ奉る",
    relation: "天人 → かぐや姫",
    direction: "kenjou",
    explanation: "「奉る」は謙譲語。羽衣を着せる天人がへりくだり、羽衣を受けるかぐや姫（受け手）を高めています。",
  },
  {
    id: "k08",
    source: "源氏物語（例文）",
    sentence: "女房、帝に「しかじか」と申す。",
    expression: "申す",
    relation: "女房 → 帝",
    direction: "kenjou",
    explanation: "「申す」は「言ふ」の謙譲語。言う女房がへりくだり、聞く帝（受け手）を高める謙譲です。",
  },
  {
    id: "k09",
    source: "徒然草（例文）",
    sentence: "弟子、上人に大事を聞こゆ。",
    expression: "聞こゆ",
    relation: "弟子 → 上人",
    direction: "kenjou",
    explanation: "「聞こゆ」は「申し上げる・お聞かせする」の謙譲語。弟子がへりくだって、聞く上人を高めています。",
  },
  {
    id: "k10",
    source: "例文",
    sentence: "家臣、御前に候ふ。",
    expression: "候ふ",
    relation: "家臣 → 主君",
    direction: "kenjou",
    explanation: "「候ふ」は「お仕えする・控える」の謙譲語。主君のそばに仕える家臣自身をへりくだって表します。",
  },
  {
    id: "k11",
    source: "例文",
    sentence: "女房、中宮の御所へまゐる。",
    expression: "まゐる",
    relation: "女房 → 中宮",
    direction: "kenjou",
    explanation: "「まゐる」は「行く・来る」の謙譲語。行く女房がへりくだり、行き先の主である中宮を高めます。",
  },
  {
    id: "k12",
    source: "枕草子（例文）",
    sentence: "清少納言、中宮に草子をたてまつる。",
    expression: "たてまつる",
    relation: "清少納言 → 中宮",
    direction: "kenjou",
    explanation: "「たてまつる（奉る）」は「差し上げる」の謙譲語。渡す清少納言がへりくだり、受ける中宮を高めています。",
  },
  // ── 丁寧（聞き手・読み手への丁寧さ） ──
  {
    id: "k13",
    source: "源氏物語（例文）",
    sentence: "女房、「その儀は、しかではべり」。",
    expression: "はべり",
    relation: "女房 → 帝（聞き手）",
    direction: "teinei",
    explanation: "「はべり」は「ございます」に当たる丁寧語。動作主や受け手を高めるのではなく、聞き手の帝への丁寧さを表します。",
  },
  {
    id: "k14",
    source: "枕草子（例文）",
    sentence: "清少納言、「雪の山、しかではべり」と答ふ。",
    expression: "はべり",
    relation: "清少納言 → 中宮（聞き手）",
    direction: "teinei",
    explanation: "返答の文末にある「はべり」は丁寧語です。聞き手の中宮へ文を丁寧に差し出す働きをしています。",
  },
  {
    id: "k15",
    source: "大鏡（例文）",
    sentence: "語り手の翁、「そのころのことは、よう覚えてはべり」。",
    expression: "はべり",
    relation: "語り手 → 読者・聞き手",
    direction: "teinei",
    explanation: "語り手が聞き手（読者）に向けて「はべり」で丁寧に語っています。特定の動作主を高める尊敬ではありません。",
  },
  {
    id: "k16",
    source: "例文",
    sentence: "従者、「御車の用意は、できてはべり」と告ぐ。",
    expression: "はべり",
    relation: "従者 → 主人（聞き手）",
    direction: "teinei",
    explanation: "「はべり」は聞き手への丁寧語で、文を丁寧に締めくくります。「用意する」という動作自体を高めているわけではありません。",
  },
  // ── 二重敬語（最高位への最大の敬意） ──
  {
    id: "k17",
    source: "源氏物語",
    sentence: "帝、このことを聞こし召す。",
    expression: "聞こし召す",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「聞こし召す」は尊敬語「聞こす」に、さらに尊敬の「召す」が重なった二重敬語。最高位の帝への最大の敬意です。",
  },
  {
    id: "k18",
    source: "源氏物語・桐壺",
    sentence: "帝、更衣の御局へ渡らせ給ふ。",
    expression: "渡らせ給ふ",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「渡る」に尊敬の助動詞「す（せ）」と「給ふ」が二つ重なった二重敬語。帝への最大の敬意を表します。",
  },
  {
    id: "k19",
    source: "枕草子（例文）",
    sentence: "中宮、女房に仰せらる。",
    expression: "仰せらる",
    relation: "語り手 → 中宮",
    direction: "nijuu",
    explanation: "「仰せらる」は「言ふ」の尊敬語「仰す」に尊敬の助動詞「らる」が付いた二重敬語。最高位の中宮への最大の敬意です。",
  },
  {
    id: "k20",
    source: "竹取物語（例文）",
    sentence: "帝、かぐや姫の噂を聞こしめす。",
    expression: "聞こしめす",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「聞こしめす」は尊敬語「聞こす」に尊敬の「めす」が重なった二重敬語で、「聞こし召す」と同じく帝への最大の敬意です。",
  },
];
