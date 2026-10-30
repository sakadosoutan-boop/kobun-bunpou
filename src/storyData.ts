// 第8弾: 本編ストーリー台本・ボス/雑魚データ
// 本編6幕のプロローグ/エンディング、各幕の導入・ボス登場・撃破台本、
// ボスステージ定義と各幕の前哨戦（雑魚）敵データをまとめたモジュール。

import kitsuneImg from './assets/images/yokai_white_kitsune_1792736500578.jpg';
import tenguImg from './assets/images/yokai_crow_tengu_1792736501436.jpg';
import lordImg from './assets/images/yokai_phantom_lord_1792736501784.jpg';
import yukionnaImg from './assets/images/boss_yukionna.jpg';
import jorogumoImg from './assets/images/boss_jorogumo.jpg';
import raijuImg from './assets/images/boss_raiju.jpg';
import chochinImg from './assets/images/zako_chochin.jpg';
import karakasaImg from './assets/images/zako_karakasa.jpg';
import kappaImg from './assets/images/zako_kappa.jpg';
import zashikiImg from './assets/images/zako_zashiki.jpg';
import kodanukiImg from './assets/images/zako_kodanuki.jpg';
import tsuchigumoImg from './assets/images/zako_tsuchigumo.jpg';

export interface StoryPanel {
  speaker: string;        // 表示名。ナレーションは 'ナレーション'
  image: string | null;   // 話者のポートレート画像（importした変数）。ナレーション/主人公は null 可
  text: string;
}

export const PROLOGUE_PANELS: StoryPanel[] = [
  {
    speaker: 'ナレーション',
    image: null,
    text: 'ここは「ことのはの国」。言葉に力が宿り、正しい文法が世界の秩序を保ってきた。',
  },
  {
    speaker: 'ナレーション',
    image: null,
    text: 'だが ある夜、言霊が乱れた。助動詞は勝手にくっつき、係り結びはほどけ、眠っていた妖怪たちが目を覚ましたのだ。',
  },
  {
    speaker: 'ナレーション',
    image: null,
    text: '乱れの源は、宮廷の奥に巣くう怨霊――文法怨霊・藤原の大君。配下の妖怪が各地に結界を張り、言葉の秩序を奪っていく。',
  },
  {
    speaker: '言霊使い',
    image: null,
    text: '大丈夫。文法は裏切らない。正しい言葉で、みんな祓ってみせる！',
  },
  {
    speaker: 'ナレーション',
    image: null,
    text: '目指すは六つの舞台。妖狐の社、深山、雪原、糸繰りの館、雷鳴の峰――そして怨霊の玉座。',
  },
  {
    speaker: '言霊使い',
    image: null,
    text: 'まずは第一幕、妖狐の社から。行くぞ、言霊文法帖――開帖！',
  },
];

export const ENDING_PANELS: StoryPanel[] = [
  {
    speaker: 'ナレーション',
    image: null,
    text: '怨霊が消え、ことのはの国に正しい言葉の響きが戻った。社にも山にも、人々の笑い声が戻っていく。',
  },
  {
    speaker: '言霊使い',
    image: null,
    text: '終わった……。文法帖の最後のページ、ちゃんと閉じられたかな。',
  },
  {
    speaker: 'ナレーション',
    image: null,
    text: '数日後。祓われた妖怪たちからは、時折 文法の質問状が届くようになったとか、ならないとか。',
  },
  {
    speaker: '言霊使い',
    image: null,
    text: 'さあ、今日も一問。言霊文法帖――開帖！',
  },
];

export interface ActStory { intro: StoryPanel[]; bossIntro: StoryPanel[]; bossDefeat: StoryPanel[]; }

export const ACT_STORY: Record<number, ActStory> = {
  0: {
    intro: [
      {
        speaker: 'ナレーション',
        image: null,
        text: '第一幕・妖狐の社。境内の灯りが、ふっと青く揺れた。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '社の前哨には、提灯小僧が提灯を掲げて待ち構えている。',
      },
    ],
    bossIntro: [
      {
        speaker: '妖狐',
        image: kitsuneImg,
        text: 'あら、言霊使い。あたしの社へ、ようこそ。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '白狐！ 言葉の乱れを元に戻しに来た。',
      },
      {
        speaker: '妖狐',
        image: kitsuneImg,
        text: 'ふふ。じゃあ聞くけど……打消の「ず」は、何形にくっつくか知ってる？ 終止形、って答えたら祓われちゃうわよ♪',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '「ず」は未然形に付く。「書かず」「見ず」――惑わされはしない！',
      },
    ],
    bossDefeat: [
      {
        speaker: '妖狐',
        image: kitsuneImg,
        text: 'まあ……未然形、ばっちりじゃない。あたし、ちょっと気に入っちゃった。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '社の結界は解けた。次は深山の烏天狗だ。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '妖狐は尾を畳み、静かに頭を下げた。――第一幕、終。',
      },
    ],
  },
  1: {
    intro: [
      {
        speaker: 'ナレーション',
        image: null,
        text: '第二幕・深山の嵐。風がうなり、木々がざわめく山道を進む。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '傘化けが一本足でぴょんぴょん跳ねながら、行く手を阻んでいる。',
      },
    ],
    bossIntro: [
      {
        speaker: '烏天狗',
        image: tenguImg,
        text: 'フハハハ！ よくぞ参った、言霊使い。わしの嵐に、文の心まで吹き飛ばされるなよ。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '烏天狗！ その暴風、今日で止める。',
      },
      {
        speaker: '烏天狗',
        image: tenguImg,
        text: 'ほほう。では「こそ」の結びは、何形じゃと思う？ 連体形と答えたら、嵐の餌食じゃぞ。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '「こそ」は已然形で結ぶ！ 「ぞ・なむ・や・か」は連体形――基本中の基本だ！',
      },
    ],
    bossDefeat: [
      {
        speaker: '烏天狗',
        image: tenguImg,
        text: 'ぐぬぬ……「こそ」に已然形、文句なしじゃ。嵐は、止むしかなかろう。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '深山に静けさが戻った。次は雪原――ずいぶん寒くなりそうだ。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '烏天狗は翼を休め、山の守りへと戻っていった。――第二幕、終。',
      },
    ],
  },
  2: {
    intro: [
      {
        speaker: 'ナレーション',
        image: null,
        text: '第三幕・雪原の社。吹雪の中に、青白く光る鳥居が見えた。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '雪に半分埋もれた河童が、甲羅を震わせながら現れた。',
      },
    ],
    bossIntro: [
      {
        speaker: '雪女',
        image: yukionnaImg,
        text: '……あら、珍しい。こんな吹雪の夜に、お客さま。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '雪女か。冷気で言葉まで凍らせる気だね。',
      },
      {
        speaker: '雪女',
        image: yukionnaImg,
        text: 'ふふ……「雪は白い」と「雪が白い」。主題の「は」と主格の「が」、あなたは見分けられるかしら。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '「は」は主題を提示する係助詞、「が」は主格を示す格助詞。凍らせるなら、その惑わせ文句の方だ！',
      },
    ],
    bossDefeat: [
      {
        speaker: '雪女',
        image: yukionnaImg,
        text: '……見事。心まで澄んでいて、凍らせがいがないわ。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '吹雪が晴れてきた。雪女の心も、少しは溶けたかな。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '雪女は微笑み、白い息とともに雪原へ消えた。――第三幕、終。',
      },
    ],
  },
  3: {
    intro: [
      {
        speaker: 'ナレーション',
        image: null,
        text: '第四幕・糸繰りの館。扉を開けた瞬間、細い糸が頬を撫でた。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '座敷童子が糸の間で笑いながら、こちらを手招きしている。',
      },
    ],
    bossIntro: [
      {
        speaker: '絡新婦',
        image: jorogumoImg,
        text: 'いらっしゃい、言霊使い。あたしの糸は、言葉の意味で編んであるの。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '絡新婦。旅人を絡め取る糸、今夜でほどく。',
      },
      {
        speaker: '絡新婦',
        image: jorogumoImg,
        text: 'あら怖い。じゃあ「あはれ」って、どういう意味？ 「かわいそう」と答えたら、糸に巻かれちゃうわよ。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '古文の「あはれ」は「しみじみと趣深い」。現代の「哀れ」とは違う――その手には乗らない！',
      },
    ],
    bossDefeat: [
      {
        speaker: '絡新婦',
        image: jorogumoImg,
        text: 'あらあら、意味の糸を一本も切らなかったのね。……腕を上げるじゃない。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '館の糸はほどけた。次は雷鳴の峰だ。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '絡新婦は糸を静かに巻き取り、館の奥へ姿を消した。――第四幕、終。',
      },
    ],
  },
  4: {
    intro: [
      {
        speaker: 'ナレーション',
        image: null,
        text: '第五幕・雷鳴の峰。ゴロゴロと、地鳴りのような雷が近づいてくる。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '小狸が雷太鼓を背負い、化かし笑いを響かせている。',
      },
    ],
    bossIntro: [
      {
        speaker: '雷獣',
        image: raijuImg,
        text: 'ガルル……よくぞ登ったな、言霊使い。オレの雷は、乱れた言葉を焼き払う！',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '雷獣！ 活用の乱れは国中に広がっている。その雷で焼く前に、正してやる。',
      },
      {
        speaker: '雷獣',
        image: raijuImg,
        text: 'ほざけ！ 「書く」の活用を言ってみろ。ア・イ・ウ・ウ・エ・エ――四段の型を乱すやつは、雷の餌だ！',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '「書か・書き・書く・書く・書け・書け」、四段活用は完璧だ。型あってこその言霊だろ！',
      },
    ],
    bossDefeat: [
      {
        speaker: '雷獣',
        image: raijuImg,
        text: 'ガハハ！ 型の乱れぬ言霊、見事だ。……雷も、鎮まってきた。',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '峰に静寂が戻った。残るは玉座の大君だけだ。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '雷獣は峰の守り神に戻り、空には星が瞬き始めた。――第五幕、終。',
      },
    ],
  },
  5: {
    intro: [
      {
        speaker: 'ナレーション',
        image: null,
        text: '大詰・怨霊の玉座。宮廷の奥、言葉の乱れの源が待っている。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '玉座の前には土蜘蛛の子が糸を張り巡らせ、最後の番をしている。',
      },
    ],
    bossIntro: [
      {
        speaker: '藤原の大君',
        image: lordImg,
        text: 'おお、言霊使い殿。よくぞお越しくださり給ひて、まことに畏れ多くも……',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '大君。その過剰な物言いこそ、言葉の乱れの証だ。',
      },
      {
        speaker: '藤原の大君',
        image: lordImg,
        text: 'ふふふ、「仰せられ給ふ」――尊敬を重ねに重ねた、わが秘術じゃ。敬語の乱れこそ、わが力の源！',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '敬語は相手を敬うためのもの。重ねすぎれば、心が遠のく。本当の敬意で、あなたを祓う！',
      },
    ],
    bossDefeat: [
      {
        speaker: '藤原の大君',
        image: lordImg,
        text: '……見事じゃ、言霊使い。わしの長き怨念も、そなたの言葉に溶けていく……',
      },
      {
        speaker: '言霊使い',
        image: null,
        text: '大君、どうか安らかに。言葉は、人の心をつなぐためにあるんです。',
      },
      {
        speaker: 'ナレーション',
        image: null,
        text: '怨霊は光の粒子となって天へ昇り、玉座に静けさが戻った。――大詰、終。',
      },
    ],
  },
};

export interface BossStageDef {
  name: string; epithet: string; emoji: string; image: string;
  hp: number; label: string; desc: string;
  weakness: 'verb' | 'kakari' | 'particle' | 'word' | 'conjugation' | 'keigo';
  weaknessLabel: string;
}

export const BOSS_STAGE_DEFS: BossStageDef[] = [
  {
    name: '惑わしの白狐',
    epithet: '言葉を惑わす千年の狐',
    emoji: '🦊',
    image: kitsuneImg,
    hp: 140,
    label: '第一幕：妖狐の社',
    desc: '千年の修業を経て人の言葉を惑わす妖狐。未然形の言霊で祓え。',
    weakness: 'verb',
    weaknessLabel: '助動詞の接続',
  },
  {
    name: '迷妄の烏天狗',
    epithet: '嵐を呼ぶ深山の覇者',
    emoji: '👺',
    image: tenguImg,
    hp: 210,
    label: '第二幕：深山の嵐',
    desc: '山林の嵐を操る漆黒の烏天狗。連用形の言霊で翼を折れ。',
    weakness: 'kakari',
    weaknessLabel: '係り結び',
  },
  {
    name: '雪女',
    epithet: '吹雪の氷姫',
    emoji: '❄️',
    image: yukionnaImg,
    hp: 245,
    label: '第三幕：雪原の社',
    desc: '吹雪の夜に現れ、言葉の主題と主格を取り違えさせる雪女。助詞の言霊で心の迷いを晴らせ。',
    weakness: 'particle',
    weaknessLabel: '助詞',
  },
  {
    name: '絡新婦',
    epithet: '千糸を繰る館の主',
    emoji: '🕷️',
    image: jorogumoImg,
    hp: 280,
    label: '第四幕：糸繰りの館',
    desc: '古今で意味のずれた言葉の糸を編み、旅人を絡め取る絡新婦。単語の真の意味を見抜いて糸を断て。',
    weakness: 'word',
    weaknessLabel: '単語',
  },
  {
    name: '雷獣',
    epithet: '雷鳴を駆る峰の主',
    emoji: '⚡',
    image: raijuImg,
    hp: 315,
    label: '第五幕：雷鳴の峰',
    desc: '雷鳴とともに峰に降り立ち、活用の型を乱して言霊を暴走させる雷獣。動詞の活用を整え、雷を鎮めよ。',
    weakness: 'conjugation',
    weaknessLabel: '動詞の活用',
  },
  {
    name: '文法怨霊・藤原の大君',
    epithet: '怨念に囚われし宮廷の主',
    emoji: '👻',
    image: lordImg,
    hp: 360,
    label: '大詰：怨霊の玉座',
    desc: 'かつて宮廷歌壇を統べた大君の怨霊。係り結びと終止形の秘術を撃ち破れ。',
    weakness: 'keigo',
    weaknessLabel: '敬語',
  },
];

export interface ZakoEnemy {
  id: string; actIndex: number; name: string; epithet: string; emoji: string; image: string;
  hp: number; exp: number;
  weakness: BossStageDef['weakness']; weaknessLabel: string;
  introLine: string; defeatLine: string;
}

export const ZAKO_ENEMIES: ZakoEnemy[] = [
  {
    id: 'chochin',
    actIndex: 0,
    name: '提灯小僧',
    epithet: '青い炎の門番',
    emoji: '🏮',
    image: chochinImg,
    hp: 55,
    exp: 15,
    weakness: 'verb',
    weaknessLabel: '助動詞の接続',
    introLine: 'やいやい、提灯小僧さまのお通りだ！ 「ず」は未然形に付くって、本当か〜？',
    defeatLine: 'うぅ、未然形バッチリじゃん……あかり、消えちゃう〜。',
  },
  {
    id: 'karakasa',
    actIndex: 1,
    name: '傘化け',
    epithet: '一本足の嵐小僧',
    emoji: '☂️',
    image: karakasaImg,
    hp: 58,
    exp: 17,
    weakness: 'kakari',
    weaknessLabel: '係り結び',
    introLine: 'ひょひょひょ、傘化けだよ！ 「ぞ」の結びは連体形……なんて、引っかからないよね〜？',
    defeatLine: 'うわ〜ん、連体形ってバレてた〜！',
  },
  {
    id: 'kappa',
    actIndex: 2,
    name: '河童',
    epithet: '皿自慢の川童',
    emoji: '🐢',
    image: kappaImg,
    hp: 60,
    exp: 19,
    weakness: 'particle',
    weaknessLabel: '助詞',
    introLine: 'きゅうりくれよ〜。あと、「は」と「が」の違いも教えてくれよ〜。',
    defeatLine: '主題と主格、すっきりした〜！ お礼にきゅうり、あげる。',
  },
  {
    id: 'zashiki',
    actIndex: 3,
    name: '座敷童子',
    epithet: '糸あそびの座敷守',
    emoji: '🧸',
    image: zashikiImg,
    hp: 62,
    exp: 21,
    weakness: 'word',
    weaknessLabel: '単語',
    introLine: 'ねえねえ、「をかし」って「お菓子」のことじゃないの？ あそぼ、あそぼ！',
    defeatLine: '「をかし」は明るく趣がある、だって！ もっと遊びたかったな〜。',
  },
  {
    id: 'kodanuki',
    actIndex: 4,
    name: '小狸',
    epithet: '雷太鼓の化かし手',
    emoji: '🦝',
    image: kodanukiImg,
    hp: 65,
    exp: 23,
    weakness: 'conjugation',
    weaknessLabel: '動詞の活用',
    introLine: 'へへっ、小狸だポン！ 四段活用、ぜ〜んぶ化かしてやるポン！',
    defeatLine: 'か・き・く・く・け・け……完敗だポン。',
  },
  {
    id: 'tsuchigumo',
    actIndex: 5,
    name: '土蜘蛛の子',
    epithet: '玉座の糸番人',
    emoji: '🕸️',
    image: tsuchigumoImg,
    hp: 68,
    exp: 25,
    weakness: 'keigo',
    weaknessLabel: '敬語',
    introLine: '大君さまの番人だい！ 敬語なら任せて……「申す」は謙譲語、だもん！',
    defeatLine: 'うぅ、「申す」は自分をへりくだる言葉……ボクが間違えたんじゃなくて、言葉が難しいんだい！',
  },
];
