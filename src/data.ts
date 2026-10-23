import { VerbProblem, AuxiliaryCard, KakariProblem, Stage, GrammarEntry, CourtRank, PlayerProfile } from './types';
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
