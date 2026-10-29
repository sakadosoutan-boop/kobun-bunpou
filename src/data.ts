import { VerbProblem, AuxiliaryCard, KakariProblem, Stage, GrammarEntry, CourtRank, PlayerProfile, MeaningProblem, ReadingProblem, ConjugationProblem, KeigoProblem, WordProblem, ParticleProblem } from './types';
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
  { word: "過ぐ", form: "終止形（上二段）", targetConn: "終止形" },
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
  { word: "忍び", form: "未然形（上二段）", targetConn: "未然形" },
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
  { word: "恋ひ", form: "連用形（上二段）", targetConn: "連用形" },
  { word: "忘れ", form: "連用形（下二段）", targetConn: "連用形" },
  { word: "来（き）", form: "連用形（カ変）", targetConn: "連用形" },
  { word: "来（く）", form: "終止形（カ変）", targetConn: "終止形" },
  { word: "為（せ）", form: "未然形（サ変）", targetConn: "未然形" },
  { word: "為（し）", form: "連用形（サ変）", targetConn: "連用形" },
  { word: "死な", form: "未然形（ナ変）", targetConn: "未然形" },
  { word: "往ぬ", form: "終止形（ナ変）", targetConn: "終止形" },
  { word: "あら", form: "未然形（ラ変）", targetConn: "未然形" },
  { word: "をり", form: "連用形（ラ変）", targetConn: "連用形" },
{ word: "遣ら", form: "未然形（四段）", targetConn: "未然形"},
{ word: "吹き", form: "連用形（四段）", targetConn: "連用形"},
{ word: "鳴く", form: "終止形（四段）", targetConn: "終止形"},
{ word: "遊ば", form: "未然形（四段）", targetConn: "未然形"},
{ word: "呼び", form: "連用形（四段）", targetConn: "連用形"},
{ word: "叩く", form: "終止形（四段）", targetConn: "終止形"},
{ word: "買は", form: "未然形（四段）", targetConn: "未然形"},
{ word: "問ひ", form: "連用形（四段）", targetConn: "連用形"},
{ word: "作る", form: "終止形（四段）", targetConn: "終止形"},
{ word: "売ら", form: "未然形（四段）", targetConn: "未然形"},
{ word: "弾き", form: "連用形（四段）", targetConn: "連用形"},
{ word: "引く", form: "終止形（四段）", targetConn: "終止形"},
{ word: "置か", form: "未然形（四段）", targetConn: "未然形"},
{ word: "勝ち", form: "連用形（四段）", targetConn: "連用形"},
{ word: "焼く", form: "終止形（四段）", targetConn: "終止形"},
{ word: "嗅が", form: "未然形（四段）", targetConn: "未然形"},
{ word: "泳ぎ", form: "連用形（四段）", targetConn: "連用形"},
{ word: "脱ぐ", form: "終止形（四段）", targetConn: "終止形"},
{ word: "指さ", form: "未然形（四段）", targetConn: "未然形"},
{ word: "許し", form: "連用形（四段）", targetConn: "連用形"},
{ word: "渡り", form: "連用形（四段）", targetConn: "連用形"},
{ word: "恨む", form: "終止形（上二段）", targetConn: "終止形"},
{ word: "侘び", form: "連用形（上二段）", targetConn: "連用形"},
{ word: "滅び", form: "未然形（上二段）", targetConn: "未然形"},
{ word: "出で", form: "未然形（下二段）", targetConn: "未然形"},
{ word: "尋ね", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "求む", form: "終止形（下二段）", targetConn: "終止形"},
{ word: "改め", form: "未然形（下二段）", targetConn: "未然形"},
{ word: "暮れ", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "晴る", form: "終止形（下二段）", targetConn: "終止形"},
{ word: "絶え", form: "未然形（下二段）", targetConn: "未然形"},
{ word: "消え", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "燃ゆ", form: "終止形（下二段）", targetConn: "終止形"},
{ word: "教へ", form: "未然形（下二段）", targetConn: "未然形"},
{ word: "答へ", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "聞こゆ", form: "終止形（下二段）", targetConn: "終止形"},
{ word: "覚え", form: "未然形（下二段）", targetConn: "未然形"},
{ word: "集め", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "鋳（い）", form: "連用形（上一段）", targetConn: "連用形"},
{ word: "試み", form: "未然形（上一段）", targetConn: "未然形"},
{ word: "顧みる", form: "終止形（上一段）", targetConn: "終止形"},
{ word: "用ゐ", form: "連用形（上一段）", targetConn: "連用形"},
{ word: "鑑み", form: "未然形（上一段）", targetConn: "未然形"},
{ word: "蹴", form: "未然形（下一段）", targetConn: "未然形"},
{ word: "蹴る", form: "終止形（下一段）", targetConn: "終止形"},
{ word: "感ぜ", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "信ぜ", form: "未然形（下二段）", targetConn: "未然形"},
{ word: "命ぜ", form: "連用形（下二段）", targetConn: "連用形"},
{ word: "論ず", form: "終止形（下二段）", targetConn: "終止形"},
{ word: "死ぬ", form: "終止形（ナ変）", targetConn: "終止形"},
{ word: "往に", form: "連用形（ナ変）", targetConn: "連用形"},
{ word: "はべり", form: "終止形（ラ変）", targetConn: "終止形"},
{ word: "いまそかり", form: "連用形（ラ変）", targetConn: "連用形"},
{ word: "をら", form: "未然形（ラ変）", targetConn: "未然形"},
{ word: "帰り来（こ）", form: "未然形（カ変）", targetConn: "未然形"},
{ word: "為（す）", form: "終止形（サ変）", targetConn: "終止形" },
];

export const AUXILIARY_CARDS: AuxiliaryCard[] = [
  { name: "ず", conn: "未然形", mean: "打消（〜ない）", conjugationType: "特殊型", example: "花咲かず（花が咲かない）" },
  { name: "む", conn: "未然形", mean: "推量・意志（〜だろう）", conjugationType: "四段型", example: "都へ行かむ（都へ行こう）" },
  { name: "す", conn: "未然形", mean: "使役・尊敬（〜せる）", conjugationType: "下二段型", example: "文を書かす（手紙を書かせる）" },
  { name: "る", conn: "未然形", mean: "受身・自発（〜れる）", conjugationType: "下二段型", example: "人に笑はる（人に笑われる）" },
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
  },
{
particle: "ぞ",
targetForm: "連体形",
prompt: "係助詞【ぞ】あり！四段「読む」の結びを選べ",
correct: { text: "読む", sub: "連体形"},
wrongs: [ { text: "読め", sub: "已然形"}, { text: "読み", sub: "連用形"}, { text: "読ま", sub: "未然形"}]
},
{
particle: "こそ",
targetForm: "已然形",
prompt: "係助詞【こそ】あり！四段「書く」の結びを選べ",
correct: { text: "書け", sub: "已然形"},
wrongs: [ { text: "書く", sub: "終止・連体"}, { text: "書き", sub: "連用形"}, { text: "書か", sub: "未然形"}]
},
{
particle: "なむ",
targetForm: "連体形",
prompt: "係助詞【なむ】あり！上一段「見る」の結びを選べ",
correct: { text: "見る", sub: "連体形"},
wrongs: [ { text: "見れ", sub: "已然形"}, { text: "見よ", sub: "命令形"}, { text: "見", sub: "連用形"}]
},
{
particle: "や",
targetForm: "連体形",
prompt: "係助詞【や】あり！上二段「起く」の結びを選べ",
correct: { text: "起くる", sub: "連体形"},
wrongs: [ { text: "起くれ", sub: "已然形"}, { text: "起く", sub: "終止形"}, { text: "起き", sub: "連用形"}]
},
{
particle: "か",
targetForm: "連体形",
prompt: "係助詞【か】あり！下二段「捨つ」の結びを選べ",
correct: { text: "捨つる", sub: "連体形"},
wrongs: [ { text: "捨つれ", sub: "已然形"}, { text: "捨つ", sub: "終止形"}, { text: "捨て", sub: "連用形"}]
},
{
particle: "こそ",
targetForm: "已然形",
prompt: "係助詞【こそ】あり！形容詞「美し」の結びを選べ",
correct: { text: "美しけれ", sub: "已然形"},
wrongs: [ { text: "美しき", sub: "連体形"}, { text: "美し", sub: "終止形"}, { text: "美しく", sub: "連用形"}]
},
{
particle: "ぞ",
targetForm: "連体形",
prompt: "係助詞【ぞ】あり！形容詞「なし」の結びを選べ",
correct: { text: "なき", sub: "連体形"},
wrongs: [ { text: "なけれ", sub: "已然形"}, { text: "なし", sub: "終止形"}, { text: "なく", sub: "連用形"}]
},
{
particle: "なむ",
targetForm: "連体形",
prompt: "係助詞【なむ】あり！形容動詞「のどかなり」の結びを選べ",
correct: { text: "のどかなる", sub: "連体形"},
wrongs: [ { text: "のどかなれ", sub: "已然形"}, { text: "のどかなり", sub: "終止形"}, { text: "のどかに", sub: "連用形"}]
},
{
particle: "こそ",
targetForm: "已然形",
prompt: "係助詞【こそ】あり！助動詞「たり」の結びを選べ",
correct: { text: "たれ", sub: "已然形"},
wrongs: [ { text: "たる", sub: "連体形"}, { text: "たり", sub: "終止形"}, { text: "たら", sub: "未然形"}]
},
{
particle: "や",
targetForm: "連体形",
prompt: "係助詞【や】あり！助動詞「ず」の結びを選べ",
correct: { text: "ざる", sub: "連体形"},
wrongs: [ { text: "ざれ", sub: "已然形"}, { text: "ず", sub: "終止形"}, { text: "ざり", sub: "連用形"}]
},
{
particle: "か",
targetForm: "連体形",
prompt: "係助詞【か】あり！カ変「来」の結びを選べ",
correct: { text: "来（くる）", sub: "連体形"},
wrongs: [ { text: "来（くれ）", sub: "已然形"}, { text: "来（く）", sub: "終止形"}, { text: "来（き）", sub: "連用形"}]
},
{
particle: "こそ",
targetForm: "已然形",
prompt: "係助詞【こそ】あり！ナ変「死ぬ」の結びを選べ",
correct: { text: "死ぬれ", sub: "已然形"},
wrongs: [ { text: "死ぬる", sub: "連体形"}, { text: "死ぬ", sub: "終止形"}, { text: "死に", sub: "連用形"}]
},
{
particle: "ぞ",
targetForm: "連体形",
prompt: "係助詞【ぞ】あり！下二段「忘る」の結びを選べ",
correct: { text: "忘るる", sub: "連体形"},
wrongs: [ { text: "忘るれ", sub: "已然形"}, { text: "忘る", sub: "終止形"}, { text: "忘れ", sub: "連用形"}]
},
];

export const STAGES: Stage[] = [
  {
    name: "惑わしの白狐",
    emoji: "🦊",
    image: kitsuneImg,
    hp: 140,
    label: "第一幕：妖狐の社",
    desc: "千年の修業を経て人の言葉を惑わす妖狐。未然形の言霊で祓え。",
    weakness: "verb",
    weaknessLabel: "助動詞の接続"
  },
  {
    name: "迷妄の烏天狗",
    emoji: "👺",
    image: tenguImg,
    hp: 210,
    label: "第二幕：深山の嵐",
    desc: "山林の嵐を操る漆黒の烏天狗。連用形の言霊で翼を折れ。",
    weakness: "kakari",
    weaknessLabel: "係り結び"
  },
  {
    name: "文法怨霊・藤原の大君",
    emoji: "👻",
    image: lordImg,
    hp: 300,
    label: "大詰：怨霊の玉座",
    desc: "かつて宮廷歌壇を統べた大君の怨霊。係り結びと終止形の秘術を撃ち破れ。",
    weakness: "keigo",
    weaknessLabel: "敬語"
  }
];

// Endless Mode dynamic Yokai generator
export function generateEndlessStage(wave: number): Stage {
  const baseYokai: {
    name: string;
    emoji: string;
    img: string;
    labelBase: string;
    weakness: Stage['weakness'];
    weaknessLabel: string;
  }[] = [
    { name: "惑わしの白狐", emoji: "🦊", img: kitsuneImg, labelBase: "妖狐", weakness: "verb", weaknessLabel: "助動詞の接続" },
    { name: "宵闇の九尾狐", emoji: "🦊", img: kitsuneImg, labelBase: "妖狐", weakness: "verb", weaknessLabel: "助動詞の接続" },
    { name: "迷妄の烏天狗", emoji: "👺", img: tenguImg, labelBase: "天狗", weakness: "kakari", weaknessLabel: "係り結び" },
    { name: "疾風の鞍馬天狗", emoji: "👺", img: tenguImg, labelBase: "天狗", weakness: "kakari", weaknessLabel: "係り結び" },
    { name: "文法怨霊・藤原の大君", emoji: "👻", img: lordImg, labelBase: "怨霊", weakness: "keigo", weaknessLabel: "敬語" },
    { name: "常世の紫式部怨霊", emoji: "👻", img: lordImg, labelBase: "怨霊", weakness: "keigo", weaknessLabel: "敬語" },
  ];

  const pick = baseYokai[(wave - 1) % baseYokai.length];
  const hp = Math.min(450, 100 + wave * 22);

  return {
    name: wave % 5 === 0 ? `【強敵】${pick.name}` : pick.name,
    emoji: pick.emoji,
    image: pick.img,
    hp,
    label: `百鬼夜行：第 ${wave} 体目`,
    desc: `百鬼夜行を彷徨う${pick.labelBase}。討伐を重ねて言霊の限界を超えよ。`,
    weakness: pick.weakness,
    weaknessLabel: pick.weaknessLabel
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
  { id: "speed_god", name: "六十秒の神速", condition: "一閃（60秒）で25問以上正解" },
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
  if (profile.timeAttackHighScore >= 25) grant("六十秒の神速");
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
    explanation: "根拠：主語は話者自身（一人称）なので、「む」は自分の意志を表します。訳：さあ、都へ行こう。誤答について：推量は三人称の事柄を推し量る時、勧誘は相手（二人称）を誘う時に使う意味で、ここでは自分の決意なので意志です。",
  },
  {
    id: "m02",
    sentence: "この花、明日は散らむ。",
    auxiliary: "む",
    targetText: "散らむ",
    correct: "推量（〜だろう）",
    wrongs: ["意志（〜よう）", "勧誘（〜しようよ）", "命令（〜せよ）"],
    explanation: "根拠：主語は「花」という三人称の物で、意志を持つ主体ではないため、「む」は推量です。訳：この花は、明日は散るだろう。誤答について：意志・勧誘は人間の主体にしか使えず、命令は「む」の意味にそもそもありません。",
  },
  {
    id: "m03",
    sentence: "君も、都へ行かむ。",
    auxiliary: "む",
    targetText: "行かむ",
    correct: "勧誘（〜しようよ）",
    wrongs: ["推量（〜だろう）", "意志（〜よう）", "打消（〜ない）"],
    explanation: "根拠：主語が二人称の「君」なので、「む」は相手を誘う勧誘です。訳：あなたも、都へ行きましょう。誤答について：自分の決意なら意志となりますが、相手に呼びかける文なので勧誘と判断します。",
  },
  {
    id: "m04",
    sentence: "世の中を、何に譬へむ。",
    auxiliary: "む",
    targetText: "譬へむ",
    correct: "婉曲（〜たらよいだろう）",
    wrongs: ["推量（〜だろう）", "意志（〜よう）", "勧誘（〜しようよ）"],
    explanation: "根拠：疑問の言葉を伴った「む」は、断定を避けて柔らかく問う婉曲の用法です。訳：世の中を、何に例えたらよいものだろう。誤答について：具体的な予測でも自分の決意でもなく、『何に』という問いと結びついた迷いの表現なので、推量・意志・勧誘とは区別します。",
  },
  {
    id: "m05",
    sentence: "友は今頃、都に着きなむ。",
    auxiliary: "む",
    targetText: "着きなむ",
    correct: "推量（〜だろう）",
    wrongs: ["意志（〜よう）", "完了（〜てしまった）だけ", "命令（〜せよ）"],
    explanation: "根拠：「着きなむ」は完了の「ぬ」の未然形「な」に推量の「む」が付いた形です。主語は三人称の友で、目の前の出来事ではないので、『今頃は着いているだろう』と推し量る推量が中心の意味です。訳：友は今頃、都に着いているだろう。誤答について：『完了だけ』では推し量るニュアンスが抜けますし、友の行為なので意志や命令でもありません。",
  },
  // ── べし ──
  {
    id: "m06",
    sentence: "明日は雨降るべし。",
    auxiliary: "べし",
    targetText: "降るべし",
    correct: "推量（〜だろう）",
    wrongs: ["意志（〜つもりだ）", "命令（〜せよ）", "不可能（〜できない）"],
    explanation: "根拠：天気は自分の意志の及ばない事柄なので、「べし」は推量です。訳：明日は雨が降るだろう。誤答について：意志は人間の主体の決意、命令は人への指示に使う意味で、天候の予測には当てはまりません。",
  },
  {
    id: "m07",
    sentence: "必ずや、仇を討つべし。",
    auxiliary: "べし",
    targetText: "討つべし",
    correct: "意志（〜つもりだ）",
    wrongs: ["推量（〜だろう）", "可能（〜できる）", "伝聞（〜そうだ）"],
    explanation: "根拠：主語は話者自身で、『必ずや』という副詞とともに強い決意を述べているので、「べし」は意志です。訳：必ずや、仇を討つつもりだ。誤答について：自分の行為についての決意なので、第三者の出来事を推し量る推量や、能力を示す可能とは区別します。",
  },
  {
    id: "m08",
    sentence: "この嶺よりは、都まで見渡すべし。",
    auxiliary: "べし",
    targetText: "見渡すべし",
    correct: "可能（〜できる）",
    wrongs: ["推量（〜だろう）", "当然（〜べきだ）", "命令（〜せよ）"],
    explanation: "根拠：『この嶺よりは』という場所の条件が示され、その条件のもとでできることを述べているので、「べし」は可能です。訳：この嶺からは、都まで見渡すことができる。誤答について：景色が見えるかどうかは予測（推量）ではなく眺望の可否の問題であり、人への義務や命令の文脈でもありません。",
  },
  {
    id: "m09",
    sentence: "学生は、勉学に励むべし。",
    auxiliary: "べし",
    targetText: "励むべし",
    correct: "当然・義務（〜べきだ）",
    wrongs: ["推量（〜だろう）", "可能（〜できる）", "意志（〜つもりだ）"],
    explanation: "根拠：『学生は』という立場を示し、その立場上なすべきことを述べているので、「べし」は当然・義務です。訳：学生は、勉学に励むべきだ。誤答について：励むかどうかは予測の問題ではないので推量ではなく、本人の能力を示す可能や、本人の決意を示す意志とも文脈が異なります。",
  },
  {
    id: "m10",
    sentence: "汝、明日までにこの門を守るべし。",
    auxiliary: "べし",
    targetText: "守るべし",
    correct: "命令（〜せよ）",
    wrongs: ["推量（〜だろう）", "適当（〜するのがよい）", "打消推量（〜ないだろう）"],
    explanation: "根拠：二人称『汝』への指示の文脈で、上位者から下位者へ命じているので、「べし」は命令です。訳：おまえは、明日までにこの門を守れ（守りなさい）。誤答について：天気予報のような推量ではなく、助言としての適当とも違い、果たすべき任務を言い渡す命令です。",
  },
  {
    id: "m11",
    sentence: "暑さ厳しき日は、無理に歩くまじ。涼しき蔭に休むべし。",
    auxiliary: "べし",
    targetText: "休むべし",
    correct: "適当（〜するのがよい）",
    wrongs: ["推量（〜だろう）", "意志（〜つもりだ）", "命令（〜せよ）"],
    explanation: "根拠：前文の『歩くまじ（歩いてはならない）』と対になる助言の文脈で、『〜するのがよい』と勧めているので、「べし」は適当です。訳：暑さの厳しい日は、無理に歩いてはならない。涼しい蔭に休むのがよい。誤答について：相手への強制的な命令ではなく、予測（推量）や話者の決意（意志）でもない、穏やかな勧めです。",
  },
  // ── る・らる ──
  {
    id: "m12",
    sentence: "猫に、大事の魚を取らる。",
    auxiliary: "る",
    targetText: "取らる",
    correct: "受身（〜れる）",
    wrongs: ["尊敬（〜なさる）", "自発（自然と〜される）", "可能（〜できる）"],
    explanation: "根拠：『猫に』という動作主が明示され、大切な魚を取られるという被害の話なので受身です。なお四段動詞『取る』の未然形『取ら』に付くのは『らる』ではなく『る』で、『取ら＋る＝取らる』となります。訳：猫に、大切な魚を取られた。誤答について：主語（被害者）は目上の人ではないので尊敬ではなく、動作主がいるので自発でもありません。",
  },
  {
    id: "m13",
    sentence: "帝は、臣下の働きを褒めらる。",
    auxiliary: "らる",
    targetText: "褒めらる",
    correct: "尊敬（〜なさる）",
    wrongs: ["受身（〜れる）", "自発（自然と〜される）", "使役（〜せる）"],
    explanation: "根拠：主語が帝という最高に高貴な方なので、『らる』は尊敬です。下二段動詞『褒む』の未然形『褒め』に『らる』が付いた形です。訳：帝は、臣下の働きをお褒めになる。誤答について：帝が誰かに何かされる文ではないので受身ではなく、自然にそうなる自発でもありません。『す・さす』系の使役とも形が違います。",
  },
  {
    id: "m14",
    sentence: "都の春の景色、思ひ出でらる。",
    auxiliary: "らる",
    targetText: "出でらる",
    correct: "自発（自然と〜される）",
    wrongs: ["受身（〜れる）", "尊敬（〜なさる）", "可能（〜できる）"],
    explanation: "根拠：『思ひ出づ』に付いた『らる』で、誰かに思い出させられるのでも、誰かが思い出すのでもなく、景色がひとりでに思い浮かぶ心理の動きなので自発です。訳：都の春の景色が、自然と思い出される。誤答について：動作主の『〜に』がない点が受身との違いで、主語が高貴な人物でもないので尊敬でもありません。",
  },
  {
    id: "m15",
    sentence: "静かなる夜は、遠くの鐘の音もよく聞かる。",
    auxiliary: "る",
    targetText: "聞かる",
    correct: "可能（〜できる）",
    wrongs: ["受身（〜れる）", "尊敬（〜なさる）", "自発（自然と〜される）"],
    explanation: "根拠：四段動詞『聞く』の未然形『聞か』に『る』が付いた形です。『静かなる夜は』という条件のもとで『よく聞くことができる』という能力・条件の話なので可能です。訳：静かな夜は、遠くの鐘の音もよく聞くことができる。誤答について：誰かに聞かれる受身ではなく、聞こえてくる主体が高貴な人でもないので尊敬でもありません。",
  },
  // ── す・さす ──
  {
    id: "m16",
    sentence: "母、子に薬を飲ます。",
    auxiliary: "す",
    targetText: "飲ます",
    correct: "使役（〜せる）",
    wrongs: ["尊敬（〜なさる）", "受身（〜れる）", "自発（自然と〜される）"],
    explanation: "根拠：『子に』という、動作をさせる相手（使役の対象）が示されているので、『す』は使役です。訳：母が、子に薬を飲ませる。誤答について：母自身が薬を飲むのではないので尊敬ではなく、母が何かをされる受身でもありません。",
  },
  {
    id: "m17",
    sentence: "院は、歌を詠ませ給ふ。",
    auxiliary: "す",
    targetText: "詠ませ",
    correct: "尊敬（〜なさる）",
    wrongs: ["使役（〜せる）", "受身（〜れる）", "可能（〜できる）"],
    explanation: "根拠：四段動詞『詠む』の未然形『詠ま』に付く使役の助動詞は『さす』ではなく『す』で、その連用形『せ』に尊敬の補助動詞『給ふ』が続くため、全体として主語の院への尊敬を表します。訳：院は、歌をお詠みになる。誤答について：院が誰かに詠ませている文ではないので使役ではなく、『給ふ』がある点も尊敬の裏付けです。",
  },
  // ── なり（伝聞・推定） ──
  {
    id: "m18",
    sentence: "人づてに聞けば、都の寺にて明日、法会すなり。",
    auxiliary: "なり",
    targetText: "すなり",
    correct: "伝聞（〜だそうだ）",
    wrongs: ["推定（〜のようだ）", "断定（〜である）", "打消（〜でない）"],
    explanation: "根拠：「人づてに聞けば」と、情報源が人からの話であることが明示されているので、「なり」は伝聞です。接続：伝聞・推定の「なり」は終止形に付き、ここではサ変動詞「す」の終止形「す」に付いています。断定の「なり」なら連体形に付いて「するなり」となるはずで、形の上からも区別できます。訳：人づてに聞くと、都の寺で明日、法会をするそうだ。誤答について：音や様子を直接見聞きして判断したのではないので推定ではありません。",
  },
  {
    id: "m19",
    sentence: "隣の家にて、子ども泣くなり。",
    auxiliary: "なり",
    targetText: "泣くなり",
    correct: "推定（〜のようだ）",
    wrongs: ["伝聞（〜だそうだ）", "断定（〜である）", "過去（〜た）"],
    explanation: "根拠：隣家から聞こえる泣き声という『音』を耳にして判断しているので、『なり』は推定です。訳：隣の家で、子どもが泣いているようだ。誤答について：誰かに聞いた話ではないので伝聞ではなく、姿を直接見て言い切っているわけでもないので断定でもありません。『音を聞いての推定』が『なり』の代表的な用法です。",
  },
  // ── まじ ──
  {
    id: "m20",
    sentence: "この寒さにては、梅の花、今週中に咲くまじ。",
    auxiliary: "まじ",
    targetText: "咲くまじ",
    correct: "打消推量（〜ないだろう）",
    wrongs: ["禁止（〜してはならない）", "打消意志（〜しないつもりだ）", "不可能（〜できない）"],
    explanation: "根拠：寒さという条件のもとで、花が咲くかどうかという自然現象の見通しを述べているので、『まじ』は打消推量です。なお『まじ』は終止形接続なので、四段動詞『咲く』の終止形『咲く』にそのまま付きます。訳：この寒さでは、梅の花は今週中には咲かないだろう。誤答について：人への指示ではないので禁止ではなく、自分の決意でもないので打消意志でもありません。また「咲く」は人の能力で成否が決まる行為ではないので、能力の及ばなさを示す不可能とも区別します。",
  },
  {
    id: "m21",
    sentence: "汝、このことを人に語るまじ。",
    auxiliary: "まじ",
    targetText: "語るまじ",
    correct: "禁止（〜してはならない）",
    wrongs: ["打消推量（〜ないだろう）", "打消意志（〜しないつもりだ）", "不可能（〜できない）"],
    explanation: "根拠：二人称『汝』への指示の文脈で、目下の者に行いを禁じているので、『まじ』は禁止です。訳：おまえは、このことを人に語ってはならない。誤答について：相手の行為を止める文なので、将来の見通し（打消推量）や話者自身の決意（打消意志）とは区別します。",
  },
  // ── らむ ──
  {
    id: "m22",
    sentence: "今頃は、故郷にて桜咲くらむ。",
    auxiliary: "らむ",
    targetText: "咲くらむ",
    correct: "現在推量（今頃〜しているだろう）",
    wrongs: ["過去推量（〜しただろう）", "意志（〜よう）", "伝聞（〜だそうだ）"],
    explanation: "根拠：『今頃は』という言葉とともに、目の前にいない故郷の現在の様子を推し量っているので、『らむ』は現在推量です。訳：今頃は、故郷で桜が咲いているだろう。誤答について：過去のことではないので過去推量ではなく、花が主語なので意志でもありません。",
  },
  {
    id: "m23",
    sentence: "などかくは泣くらむ。",
    auxiliary: "らむ",
    targetText: "泣くらむ",
    correct: "原因推量（なぜ〜のだろう）",
    wrongs: ["現在推量（今頃〜しているだろう）", "意志（〜よう）", "命令（〜せよ）"],
    explanation: "根拠：疑問の副詞『など（なぜ）』と結びついた『らむ』は、理由・原因を推し量る原因推量です。訳：なぜ、こんなに泣いているのだろう。誤答について：『今頃』のような現在の状況そのものの推量ではなく、『なぜ泣くのか』という理由への推量である点が、現在推量との違いです。",
  },
  // ── き・けり ──
  {
    id: "m24",
    sentence: "昔、男ありけり。（伊勢物語）",
    auxiliary: "けり",
    targetText: "ありけり",
    correct: "過去（伝え聞いた過去：〜た）",
    wrongs: ["詠嘆（〜だなあ）", "推量（〜だろう）", "完了（〜てしまった）"],
    explanation: "根拠：物語の語り出しの『けり』は、語り手が昔の話として伝える過去です。訳：昔、男がいた。誤答について：和歌のような感慨の場面ではないので詠嘆ではなく、語り手自身の体験談として述べる『き』の直接過去とも使い分けられます。",
  },
  {
    id: "m25",
    sentence: "山桜、咲きにけり。",
    auxiliary: "けり",
    targetText: "咲きにけり",
    correct: "詠嘆（〜だなあ）",
    wrongs: ["過去（伝え聞いた過去：〜た）", "推量（〜だろう）", "打消（〜ない）"],
    explanation: "根拠：和歌や感動の場面で現れる『〜にけり』は、気づきと感慨を表す詠嘆です。『に』は完了の助動詞『ぬ』の連用形です。訳：山桜が、咲いたのだなあ。誤答について：物語の叙述のような伝聞的な過去ではなく、咲いていることに気づいた驚きと感動が中心なので詠嘆と判断します。",
  },
  {
    id: "m26",
    sentence: "我、昨日その歌を聞きき。",
    auxiliary: "き",
    targetText: "聞きき",
    correct: "直接過去（自分が体験した過去：〜た）",
    wrongs: ["過去（伝え聞いた過去：〜た）", "詠嘆（〜だなあ）", "完了（〜てしまった）"],
    explanation: "根拠：『き』は話者自身が直接体験した過去専用の助動詞で、主語の『我』が自分の体験を述べています。訳：私は、昨日その歌を聞いた。誤答について：伝え聞いた話なら『けり』を使うところで、自分の体験である点が決め手です。完了の助動詞は『つ・ぬ』であり、『き』とは別物です。",
  },
// ── り ──
  {
    id: "m27",
    sentence: "我、師の言葉を今も思へり。",
    auxiliary: "り",
    targetText: "思へり",
    correct: "存続（〜し続けている）",
    wrongs: ["完了（〜てしまった）", "推量（〜だろう）", "詠嘆（〜だなあ）"],
    explanation: "「り」は四段動詞の已然形に付き（思へ＋り）、完了・存続を表します。「今も」という言葉が示す通り、思いが今も続いている状態なので存続です。訳：私は、師の言葉を今も思い続けている。誤答について：完了なら思いが終わった点に焦点が移りますし、推量・詠嘆は「り」の意味ではありません。",
  },
  // ── めり ──
  {
    id: "m28",
    sentence: "遠くの山に、雪積もるめり。",
    auxiliary: "めり",
    targetText: "積もるめり",
    correct: "推定（〜ようだ）",
    wrongs: ["断定（〜である）", "伝聞（〜だそうだ）", "完了（〜てしまった）"],
    explanation: "「めり」は終止形（ラ変型の活用語には連体形）に接続し、目で見た様子に基づく推定を表します。遠くの山を直接確かめたわけではなく、白く見える様子から判断しているのが手がかりです。訳：遠くの山には、雪が積もっているようだ。誤答について：人から聞いた話ではないので伝聞ではなく、見た目で言い切っていないので断定でもありません。",
  },
  {
    id: "m29",
    sentence: "その人の歌、いとあはれに聞こゆめり。",
    auxiliary: "めり",
    targetText: "聞こゆめり",
    correct: "婉曲（断定を和らげた推定：〜ように思われる）",
    wrongs: ["断定（〜である）", "伝聞（〜だそうだ）", "過去（〜た）"],
    explanation: "「めり」には、自分の感想・判断を言い切らずに柔らかく述べる婉曲の働きがあります。歌を聞いた自分の感動を「〜ように思われる」と和らげて表現しているのが手がかりです。訳：その人の歌は、とてもしみじみと心に響くように思われる。誤答について：言い切りではないので断定ではなく、聞いた話でもないので伝聞でもありません。",
  },
  // ── らし ──
  {
    id: "m30",
    sentence: "春過ぎて、夏来にけらし白妙の、衣ほすてふ天の香具山。（小倉百人一首・持統天皇）",
    auxiliary: "らし",
    targetText: "来にけらし",
    correct: "推定（根拠に基づいて〜らしい）",
    wrongs: ["伝聞（〜だそうだ）", "意志（〜よう）", "断定（〜である）"],
    explanation: "「らし」は、客観的な根拠に基づいて推定する助動詞です。「来にけらし」は「来（カ変『来』の連用形）＋に（完了『ぬ』の連用形）＋けらし（過去『けり』の連体形『ける』に推定『らし』が付いた『けるらし』が縮まった形）」で、白い衣が干されているという目に見える証拠から「夏が来た」と判断しています。訳：春が過ぎて夏が来たらしい。白い衣を干すという、あの天の香具山よ。誤答について：誰かから聞いた話ではないので伝聞ではなく、根拠のある推量なので単なる言い切りの断定でもありません。",
  },
  // ── けむ ──
  {
    id: "m31",
    sentence: "父は若かりし頃、遠く旅しけむ。",
    auxiliary: "けむ",
    targetText: "旅しけむ",
    correct: "過去推量（〜たであろう）",
    wrongs: ["現在推量（今頃〜しているだろう）", "意志（〜よう）", "直接過去（〜た）"],
    explanation: "「けむ」は連用形に接続する過去推量の助動詞です。「若かりし頃」という過去の時期に、第三者である父の行動を振り返って推し量っているのが手がかりです。訳：父は若かった頃、遠くへ旅をしたであろう。誤答について：現在のことを推量するなら「らむ」を使いますし、「き」「けり」なら推量ではなく、実際にあった過去として述べることになります。",
  },
  // ── らまし ──
  {
    id: "m32",
    sentence: "金あらましかば、都へ上らまし。",
    auxiliary: "らまし",
    targetText: "あらましかば",
    correct: "反実仮想（実際とは違う仮定：〜だったら）",
    wrongs: ["未来の推量（〜だろう）", "意志（〜よう）", "伝聞（〜だそうだ）"],
    explanation: "「らまし」は未然形に接続する反実仮想の助動詞で、「〜ましかば…まし」という呼応の形が最大の手がかりです。実際にはお金がないのに、「もしあったら」と現実と反対の仮定をしています。訳：お金があったなら、都へ上っただろうに。誤答について：起こりうる未来の予測ではなく、実現していない仮定なので、ただの推量や意志とは区別します。",
  },
  // ── まほし ──
  {
    id: "m33",
    sentence: "都の花を見まほし。",
    auxiliary: "まほし",
    targetText: "見まほし",
    correct: "願望（〜たい）",
    wrongs: ["推量（〜だろう）", "使役（〜せる）", "命令（〜せよ）"],
    explanation: "「まほし」は未然形（見→見まほし）に接続し、話者自身の願望を表します。主語が省略されている一人称で、「見たい」という自分の希望を述べている文脈が手がかりです。訳：都の花を見たい。誤答について：他人にさせる使役でも、相手への命令でもなく、あくまで自分の「〜たい」という気持ちです。",
  },
  // ── たり（存続と完了の判別） ──
  {
    id: "m34",
    sentence: "門の前に、白馬つなぎたり。",
    auxiliary: "たり",
    targetText: "つなぎたり",
    correct: "存続（〜てある・〜ている）",
    wrongs: ["完了（〜てしまった）", "過去（〜た）", "推量（〜だろう）"],
    explanation: "「たり」は連用形に接続し、存続と完了を表します。ここでは「つなぐ」という動作の結果である「つながれた状態」が、門の前に今も続いているので存続です。訳：門の前に、白馬がつないである。誤答について：完了なら「つないでしまった」という行為の終了に焦点が移り、馬が今いる光景の描写にはなりません。",
  },
  {
    id: "m35",
    sentence: "文を書き終へて、使者にはすでに渡したり。",
    auxiliary: "たり",
    targetText: "渡したり",
    correct: "完了（〜てしまった・〜た）",
    wrongs: ["存続（〜ている）", "推量（〜だろう）", "断定（〜である）"],
    explanation: "同じ「たり」でも、「書き終へて」「すでに」と行為の終了を示す言葉が並び、動作が終わった点に焦点がある場合は完了です。訳：手紙を書き終えて、使者にもう渡してしまった。誤答について：存続なら「渡した状態が続いている」という意味になりますが、ここは一連の行動が済んだことを述べる文脈なので合いません。",
  },
  // ── つ・ぬ（完了の使い分け） ──
  {
    id: "m36",
    sentence: "我、心を込めて文を書きつ。",
    auxiliary: "つ",
    targetText: "書きつ",
    correct: "完了（〜てしまった・〜た）",
    wrongs: ["打消（〜ない）", "推量（〜だろう）", "過去（伝え聞いた過去：〜た）"],
    explanation: "完了の「つ」「ぬ」のうち、「つ」は人の意志的な行為によく使われます。主語の「我」が心を込めて書くという、故意の行為なので「書きつ」となります。訳：私は、心を込めて手紙を書いてしまった（書き上げた）。誤答について：打消なら未然形に「ず」が付いて「書かず」となるはずで、形からも区別できます。",
  },
  {
    id: "m37",
    sentence: "秋風に、木の葉は散りぬ。",
    auxiliary: "ぬ",
    targetText: "散りぬ",
    correct: "完了（〜てしまった・〜た）",
    wrongs: ["打消（〜ない）", "意志（〜よう）", "存続（〜ている）"],
    explanation: "完了の「ぬ」は、自然現象や無意志的な変化によく使われます。木の葉が風で自然と散る現象なので「散りぬ」となります。また、連用形「散り」に付いている点も「ぬ（完了）」の証拠です。訳：秋風によって、木の葉は散ってしまった。誤答について：打消の「ず」なら未然形「散ら」に付いて「散らぬ・散らず」となるので、形が違います。",
  },
  {
    id: "m38",
    sentence: "明日は必ずや、出立しつべし。",
    auxiliary: "つ",
    targetText: "しつべし",
    correct: "強意・確述（きっと〜する）",
    wrongs: ["完了（〜てしまった）だけ", "伝聞（〜だそうだ）", "打消（〜ない）"],
    explanation: "「つ＋べし（つべし）」は、完了の「つ」が推量の「べし」の上に付いて「きっと〜するはずだ」という確信を強める、強意・確述の形です。「必ずや」という副詞との呼応が手がかりです。訳：明日はきっと出発するはずだ。誤答について：単なる完了だけでは「必ずや」の強い確信を説明できず、入試では「つべし・ぬべし・てむ・なむ」を強意と即答できることが求められます。",
  },
  // ── き・けり（追加） ──
  {
    id: "m39",
    sentence: "去年の春、我はその山に登りき。",
    auxiliary: "き",
    targetText: "登りき",
    correct: "直接過去（自分が体験した過去：〜た）",
    wrongs: ["過去（伝え聞いた過去：〜た）", "詠嘆（〜だなあ）", "完了（〜てしまった）"],
    explanation: "「き」は、話者自身が直接体験した過去専用の助動詞です。主語が「我」で、自分が登った体験を述べているのが決め手です。訳：去年の春、私はその山に登った。誤答について：伝え聞いた話なら「けり」を使いますし、ここは感動を述べる場面でもないので詠嘆でもありません。",
  },
  {
    id: "m40",
    sentence: "昔、この里に、賢き翁住みけり。",
    auxiliary: "けり",
    targetText: "住みけり",
    correct: "過去（伝え聞いた過去：〜た）",
    wrongs: ["直接過去（自分が体験した過去：〜た）", "詠嘆（〜だなあ）", "現在推量（今頃〜しているだろう）"],
    explanation: "「昔…けり」という物語の語りの形で、語り手自身ではなく昔の翁の話を伝えているので、「けり」は伝え聞いた過去です。訳：昔、この里に、賢い翁が住んでいた。誤答について：語り手本人の体験なら「き」を使うところで、ここは他者の昔話なので「けり」が選ばれています。",
  },
  // ── なり（断定） ──
  {
    id: "m41",
    sentence: "これは、都より参りし使者なり。",
    auxiliary: "なり",
    targetText: "使者なり",
    correct: "断定（〜である）",
    wrongs: ["伝聞（〜だそうだ）", "推定（〜のようだ）", "打消（〜でない）"],
    explanation: "断定の「なり」は体言や活用語の連体形に接続し、伝聞・推定の「なり」は終止形（ラ変型の活用語には連体形）に接続します。ここでは体言「使者」に付いているので、接続のしかたから断定と判断できます。訳：これは、都から来た使者である。誤答について：目の前の人物を言い切っているので、人から聞いた伝聞や、音などから判断する推定ではありません。",
  },
  {
    id: "m42",
    sentence: "若きうちに、学問に励むべきなり。",
    auxiliary: "なり",
    targetText: "べきなり",
    correct: "断定（〜である）",
    wrongs: ["伝聞・推定（〜だそうだ・〜のようだ）", "過去（〜た）", "完了（〜てしまった）"],
    explanation: "「べき」は助動詞「べし」の連体形で、断定の「なり」は連体形に接続します。「〜べきである」と言い切る文になっているのが手がかりです。訳：若いうちに、学問に励むべきである。誤答について：伝聞・推定の「なり」は終止形に付くもので、連体形「べき」には付かないため、形の上からも伝聞・推定にはなりません。",
  },
  // ── まじ（追加の意味） ──
  {
    id: "m43",
    sentence: "我は、決して約束を破るまじ。",
    auxiliary: "まじ",
    targetText: "破るまじ",
    correct: "打消意志（〜しないつもりだ）",
    wrongs: ["打消推量（〜ないだろう）", "禁止（〜してはならない）", "伝聞（〜だそうだ）"],
    explanation: "「まじ」は終止形に接続するので、四段動詞「破る」の終止形「破る」にそのまま付きます（未然形「破ら」に付けるのは誤り）。主語が一人称の「我」で、「決して」という副詞とともに自分の決意を述べているので、「まじ」は打消意志です。訳：私は、決して約束を破らないつもりだ。誤答について：相手に命じているのではないので禁止ではなく、自分の意志の問題なので第三者の見通しを述べる打消推量でもありません。",
  },
  {
    id: "m44",
    sentence: "この大岩は、一人しては動かすまじ。",
    auxiliary: "まじ",
    targetText: "動かすまじ",
    correct: "不可能（〜できそうにない）",
    wrongs: ["打消意志（〜しないつもりだ）", "禁止（〜してはならない）", "打消（〜ない）"],
    explanation: "「まじ」には、能力や状況から「できそうにない」という不可能の意味があります。「一人しては（＝一人では）」という条件が、人の力の及ばなさを示す手がかりです。訳：この大きな岩は、一人では動かせそうにない。誤答について：誰かの「しないつもり」という意志の問題でも、人への禁止でもなく、物事の性質上の不可能を判断しています。",
  },
  // ── る・らる（追加の文脈） ──
  {
    id: "m45",
    sentence: "旅の空にて、故郷の母の顔がしのばる。",
    auxiliary: "る",
    targetText: "しのばる",
    correct: "自発（自然と〜される）",
    wrongs: ["受身（〜れる）", "尊敬（〜なさる）", "可能（〜できる）"],
    explanation: "四段動詞「しのぶ」の未然形「しのば」に「る」が付いた形です。動作主を示す「〜に」がなく、母の顔がひとりでに思い浮かぶ心理の動きなので自発です。訳：旅先の空の下で、故郷の母の顔が自然と偲ばれる。誤答について：受身なら「誰々に」という動作主が示されるはずで、ここにはない点が区別の根拠です。",
  },
  {
    id: "m46",
    sentence: "旅人は、村人に助けらる。",
    auxiliary: "らる",
    targetText: "助けらる",
    correct: "受身（〜れる）",
    wrongs: ["尊敬（〜なさる）", "自発（自然と〜される）", "使役（〜せる）"],
    explanation: "下二段動詞「助く」の未然形「助け」に「らる」が付いた形です。「村人に」という動作主が明示され、主語の旅人は身分の高い人物でもないので受身です。訳：旅人は、村人に助けられる。誤答について：尊敬なら主語が高貴な人物であるはずで、自発なら動作主の「に」は現れません。",
  },
  // ── べし（追加の文脈） ──
  {
    id: "m47",
    sentence: "親の恩は、忘るべからず。",
    auxiliary: "べし",
    targetText: "忘るべからず",
    correct: "当然・義務（〜てはならない）",
    wrongs: ["推量（〜だろう）", "可能（〜できる）", "意志（〜つもりだ）"],
    explanation: "「べからず」は「べし」の未然形相当の形「べから」に打消の「ず」が付いた決まった形で、「〜すべきでない・〜してはならない」という当然・義務の打消を表します。訳：親の恩は、忘れてはならない。誤答について：「忘れるだろう」という推量では恩への報い方を説く文意に合わず、この形自体が義務の打消として固定しています。",
  },
  // ── けむ（原因推量） ──
  {
    id: "m48",
    sentence: "昔の人は、などかく嘆きけむ。",
    auxiliary: "けむ",
    targetText: "嘆きけむ",
    correct: "過去の原因推量（なぜ〜たのだろう）",
    wrongs: ["現在推量（今頃〜しているだろう）", "直接過去（〜た）", "詠嘆（〜だなあ）"],
    explanation: "疑問の副詞「など（なぜ）」と結びついた「けむ」は、過去の出来事の理由を推し量る原因推量になります。主語が「昔の人」という過去の第三者である点も手がかりです。訳：昔の人は、なぜこんなに嘆いたのだろう。誤答について：現在の理由を問うなら「らむ」を使うところで、ここは過去のことなので「けむ」です。",
  },
  // ── らし（追加の文脈） ──
  {
    id: "m49",
    sentence: "雲の切れ間、いと明るし。月、出でぬらし。",
    auxiliary: "らし",
    targetText: "出でぬらし",
    correct: "推定（根拠に基づいて〜らしい）",
    wrongs: ["伝聞（〜だそうだ）", "断定（〜である）", "完了（〜てしまった）だけ"],
    explanation: "「らし」は完了の助動詞「ぬ」の終止形に接続しています。雲の切れ間が明るいという目に見える根拠から、月の出現を推し量っているのが手がかりです。訳：雲の切れ間が、とても明るい。月が出たらしい。誤答について：「出でぬ」自体に完了の意味は含まれますが、文全体の判断を担う「らし」の働きは、根拠に基づく推定です。",
  },
  // ── まほし（追加の文脈） ──
  {
    id: "m50",
    sentence: "病重くて、故郷へ帰らまほし。",
    auxiliary: "まほし",
    targetText: "帰らまほし",
    correct: "願望（〜たい）",
    wrongs: ["推量（〜だろう）", "勧誘（〜しようよ）", "打消意志（〜しないつもりだ）"],
    explanation: "「まほし」は未然形に接続します。四段動詞「帰る」の未然形は「帰ら」なので「帰らまほし」が正しい形で、病に伏す話者自身の「帰りたい」という気持ちを表します。訳：病気が重くて、故郷へ帰りたい。誤答について：相手を誘う場面ではないので勧誘ではなく、あくまで自分の願望です。連用形「帰り」に付けるのは誤りという点も、接続の確認ポイントです。",
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
    explanation: "根拠：物語の語り出しに現れる『けり』は、語り手が昔の出来事として伝える過去の用法です。訳は本文の通り『いた』となります。誤答について：和歌や感慨の場面で使う詠嘆ではなく、推量や完了の意味も『けり』にはありません。語句補足：『竹取の翁』は竹を取って生計を立てる老人で、かぐや姫を育てた人物です。",
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
    explanation: "根拠：『たる』は連用形接続の助動詞『たり』の連体形で、雲が細くたなびいている状態が続いていることを表す存続です。誤答について：『たり』に過去そのものや推量・打消の意味はなく、雲の現在の姿を描写する文脈からも存続と分かります。語句補足：『紫だちたる』は『紫がかっている』の意で、『たる』が繰り返し現れる一節です。",
  },
  {
    id: "r03",
    source: "枕草子（夏は夜）",
    text: "夏は夜。月の頃はさらなり、闇もなほ、螢の多く飛びちがひたる。",
    translation: "夏は夜がよい。月が出ている頃は言うまでもなく、闇の夜もやはり、螢がたくさん飛び交っている（のがよい）。",
    question: "「さらなり」は文法上どのように分類されるか？",
    target: "さらなり",
    correct: "形容動詞「さらなり」（ナリ活用）の終止形",
    wrongs: ["断定の助動詞「なり」の終止形", "伝聞・推定の助動詞「なり」の終止形", "ラ行四段動詞「なる」の終止形"],
    explanation: "根拠：『さらなり』は『言うまでもない・もちろんである』の意の形容動詞（ナリ活用）で、一語として活用します。文末の『なり』はその活用語尾であり、体言や連体形に付く断定の助動詞『なり』そのものではありません。誤答について：動詞の終止形に付く伝聞・推定の『なり』でも、動詞『なる』でもありません。語句補足：『月の頃はさらなり』は『月が出ている頃は言うまでもなくよい』の意です。",
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
    explanation: "根拠：係助詞『こそ』の結びは已然形と決まっています。文末の『ものぐるほしけれ』は形容詞『ものぐるほし』の已然形『けれ』で結ばれており、規則通りの形です。誤答について：連体形で結ぶのは『ぞ・なむ・や・か』の場合で、『こそ』だけが例外的に已然形を取る点が入試の頻出ポイントです。語句補足：『よしなしごと』は『たわいもないこと』の意です。",
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
    explanation: "根拠：『あらず』はラ変動詞『あり』の未然形『あら』に打消の助動詞『ず』の終止形が付いた形です。『ず』は未然形接続という接続の知識からも特定できます。誤答について：推量は『む・らむ』、完了は『つ・ぬ』、尊敬は『る・らる』などが担う意味で、『ず』の意味ではありません。語句補足：『しかも』は『それにも関わらず・そのうえ』の意です。",
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
    explanation: "根拠：『たる』は助動詞『たり』の連体形で、後ろの体言『ためし（例）』にかかります。泡が長くとどまっている例がないという、状態の存続を述べる文です。誤答について：『たり』に推量や打消の意味はなく、過去の助動詞は『き・けり』なので区別できます。語句補足：『うたかた』は水の泡のことで、はかなさの象徴として使われています。",
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
    explanation: "根拠：『ける』は過去の助動詞『けり』の連体形で、体言『なか』にかかるため連体形になっています。形の対応（けり→ける）が決め手です。誤答について：『らむ』の連体形は『らむ』のまま、『たり』は『たる』、『なり』は『なる』となるため、『ける』になる助動詞は『けり』しかありません。語句補足：『さぶらひたまひ』は『お仕えなさる』の意の敬語表現です。",
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
    explanation: "根拠：体言『旅人』に直接接続する『なり』は断定で、『旅人である』と言い切っています。断定の『なり』と伝聞・推定の『なり』は、接続先（体言・連体形か、終止形か）で見分けるのが原則です。誤答について：人から聞いた話でも、音などからの推定でもないため伝聞・推定にはならず、打消は『ず』が担います。語句補足：『百代（はくたい）』は永遠の意です。",
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
    explanation: "根拠：打消の助動詞『ず』は未然形に接続します。形容詞『久し』の未然形は『久しから』という形を取り、『からず』全体で『長く続かない』の意になります。誤答について：連用形なら『久しく』、終止形なら『久し』、連体形なら『久しき』と形が変わるため、接続先は未然形と特定できます。語句補足：形容詞が助動詞に続く時は、この『〜から』の形を使うのが古典文法の決まりです。",
  },
  {
    id: "r10",
    source: "枕草子（秋は夕暮れ）",
    text: "秋は夕暮れ。夕日のさして山の端いと近うなりたるに、烏の寝所へ行くとて、三つ四つ、二つ三つなど飛び急ぐさへあはれなり。",
    translation: "秋は夕暮れがよい。夕日が差して山の稜線がとても近くなっているところに、烏が寝所へ帰ろうとして、三つ四つ、二つ三つなどと飛び急ぐのまでも、しみじみと趣がある。",
    question: "文末「あはれなり」は文法上どのように分類されるか？",
    target: "あはれなり",
    correct: "形容動詞「あはれなり」（ナリ活用）の終止形",
    wrongs: ["断定の助動詞「なり」の終止形", "伝聞・推定の助動詞「なり」の終止形", "過去の助動詞「けり」の終止形"],
    explanation: "根拠：『あはれなり』は『しみじみと趣がある』の意の形容動詞（ナリ活用）で、一語として活用し、文末の『なり』はその活用語尾です。助動詞の『なり』が別に付いた形ではありません。誤答について：動詞の終止形に付く伝聞・推定の『なり』でも、過去の助動詞でもありません。語句補足：『山の端』は山の稜線、『さへ』は『〜までも』の意の副助詞です。",
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
    explanation: "根拠：『たる』は助動詞『たり』の連体形で、体言相当の内容（雪が降っている様子）にかかります。雪が降り積もっている状態が続く冬の早朝の描写なので存続です。誤答について：『たり』に推量・打消・命令の意味はなく、状態の継続を表す点がポイントです。語句補足：『つとめて』は『早朝』の意の古文単語で、現代語の『努めて』とは別語です。",
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
    explanation: "根拠：疑問・反語を表す係助詞『か』の結びは連体形です。この文では動詞『見る』が連体形で体言『もの』にかかり、文全体の結びの役割を果たしています。誤答について：已然形で結ぶのは『こそ』だけであり、『か』を含む他の係助詞（ぞ・なむ・や）はすべて連体形で結びます。語句補足：『かは』は『か』に間投助詞『は』が重なった形で、反語『〜だろうか、いや違う』を表します。",
  },
{
    id: "r13",
    source: "土佐日記（冒頭）",
    text: "男もすなる日記といふものを、女もしてみむとて、するなり。",
    translation: "男も書くという日記というものを、女である私も書いてみようと思って、書くのである。",
    question: "文末「するなり」の「なり」の意味として正しいものは？",
    target: "するなり",
    correct: "断定（〜である）",
    wrongs: ["伝聞（〜だそうだ）", "推定（〜のようだ）", "過去（〜た）"],
    explanation: "サ変動詞「す」は終止形と連体形がともに「する」で同形のため、文脈で判断します。書き手自身がこれから書く行為なので、断定の「なり」（連体形に接続）です。なお前の「すなる」の「なる」は伝聞の「なり」の連体形で、「男が書くという」という意味。誤答について：人から聞いた話を述べる文末ではないので伝聞ではなく、書き手自身の行為を言い切る断定です。語句補足：「してみむ」は「してみよう」の意で、「む」は意志です。",
  },
  {
    id: "r14",
    source: "伊勢物語（東下りの歌）",
    text: "唐衣着つつ馴れにし妻しあれば、はるばる来ぬる旅をしぞ思ふ。",
    translation: "着慣れた唐衣のように、慣れ親しんだ妻が都にいるので、はるばる来てしまった旅（のつらさ）をしみじみと思う。",
    question: "「来ぬる」の「ぬる」は、どの助動詞の何形か？",
    target: "来ぬる",
    correct: "完了の助動詞「ぬ」の連体形",
    wrongs: ["打消の助動詞「ず」の連体形", "過去の助動詞「けり」の連体形", "推量の助動詞「む」の連体形"],
    explanation: "「来ぬる」はカ変動詞「来」の連用形「き」に、完了の助動詞「ぬ」の連体形「ぬる」が付いた形です。文中の係助詞「ぞ」の結びが連体形になることも、連体形である裏付けになります。誤答について：打消「ず」の連体形は「ぬ」止まりで「ぬる」とはならず、「けり」の連体形は「ける」、「む」の連体形は「む」なので、形から区別できます。語句補足：「妻し」の「し」は強意の副助詞です。",
  },
  {
    id: "r15",
    source: "源氏物語（夕顔の歌）",
    text: "心あてにそれかとぞ見る白露の、光添へたる夕顔の花。",
    translation: "あてずっぽうに、あの人のことかしらと見る、白露の光を添えた夕顔の花を。",
    question: "「添へたる」の「たる」が表す意味は？",
    target: "添へたる",
    correct: "存続（〜ている）",
    wrongs: ["推量（〜だろう）", "打消（〜ない）", "伝聞（〜だそうだ）"],
    explanation: "「たる」は連用形接続の助動詞「たり」の連体形で、体言「花」にかかります。白露の光が花に添った状態が続いているので存続です。誤答について：「たり」に推量・打消・伝聞の意味はなく、後ろの体言にかかる形である点からも、連体形の「たり」と特定できます。語句補足：「心あてに」は「あてずっぽうに」の意です。",
  },
  {
    id: "r16",
    source: "枕草子（ありがたきもの）",
    text: "ありがたきもの。舅にほめらるる婿。また、姑に思はるる嫁の君。",
    translation: "めったにないもの。舅にほめられる婿。また、姑に大切に思われる嫁。",
    question: "「ほめらるる」の「らる」の意味として正しいものは？",
    target: "ほめらるる",
    correct: "受身（〜れる）",
    wrongs: ["尊敬（〜なさる）", "自発（自然と〜される）", "可能（〜できる）"],
    explanation: "下二段動詞『褒む』の未然形『ほめ』に『らる』の連体形『らるる』が付いた形です。『舅に』という動作主が示され、婿がほめられる側なので受身です。誤答について：受け手である婿への尊敬ではなく、動作主が明示されているので自発でもありません。語句補足：『ありがたき』は『めったにない』の意で、現代語の『ありがたい』とは意味がずれる古文単語です。",
  },
  {
    id: "r17",
    source: "徒然草（仁和寺の法師）",
    text: "仁和寺に、ある法師、年寄るまで石清水を拝まざりければ、心憂く覚えて、ある時思ひ立ちて、ただ一人、徒歩より詣でけり。",
    translation: "仁和寺に、ある法師が、年を取るまで石清水八幡宮を参拝したことがなかったので、情けなく思って、ある時思い立って、ただ一人、徒歩で参詣した。",
    question: "「拝まざりけれ」の「ざり」は何か？",
    target: "拝まざりけれ",
    correct: "打消の助動詞「ず」の連用形（補助活用）の形",
    wrongs: ["過去の助動詞「けり」の未然形", "尊敬の助動詞「らる」の連用形", "完了の助動詞「たり」の連用形"],
    explanation: "打消の助動詞「ず」は、後ろに「けり」などが続くとき「ざり」という連用形（補助活用）を取ります。「拝まざりけれ」は「拝ま（未然形）＋ざり（ず）＋けれ（けり已然形）＋ば」で、「参拝しなかったので」という意味です。誤答について：「けり」自体の未然形は「けら」であり、「らる」「たり」の連用形はそれぞれ「られ」「たり」で、形が一致しません。語句補足：「徒歩（かち）より」は「徒歩で」の意です。",
  },
  {
    id: "r18",
    source: "方丈記",
    text: "知らず、生まれ死ぬる人、いづ方より来たりて、いづ方へか去る。",
    translation: "わからない、生まれて死ぬ人は、どこから来て、どこへ去るのか。",
    question: "「死ぬる」の「ぬる」は何か？",
    target: "死ぬる",
    correct: "ナ変動詞「死ぬ」自体の連体形",
    wrongs: ["完了の助動詞「ぬ」の連体形", "打消の助動詞「ず」の連体形", "推量の助動詞「む」の連体形"],
    explanation: "「死ぬ」はそれ自体がナ行変格活用の動詞で、「ぬる」はその連体形です。助動詞の「ぬ」ではありません。見分け方は、直前が連用形かどうかを見ること：「死」は「死ぬ」の語幹の一部であり、連用形「死に」が別にある点が証拠です。誤答について：完了の「ぬ」なら連用形に接続するはずで、「死にぬる」となれば完了の「ぬ」ですが、ここは「死ぬる」なので動詞自体の活用形です。入試で頻出の識別ポイントです。",
  },
  {
    id: "r19",
    source: "竹取物語（かぐや姫の発見）",
    text: "竹の中に、もと光る竹なむ一筋ありける。あやしがりて寄りて見るに、筒の中光りたり。",
    translation: "竹の中に、根元が光る竹が一筋あった。不思議に思って近寄って見ると、筒の中が光っていた。",
    question: "係助詞「なむ」を受けて文を結ぶ「ありける」は、何形か？",
    target: "ありける",
    correct: "連体形",
    wrongs: ["已然形", "終止形", "連用形"],
    explanation: "係助詞「なむ」「ぞ」「や」「か」の結びは連体形です。「ける」は過去の助動詞「けり」の連体形で、「なむ…ありける」と呼応しています。誤答について：已然形で結ぶのは係助詞「こそ」だけであり、「けり」の終止形は「けり」、連用形に当たる形はない点からも区別できます。語句補足：「もと光る」は「根元が光る」の意です。",
  },
  {
    id: "r20",
    source: "古今和歌集（在原業平）",
    text: "世の中にたえて桜のなかりせば、春の心はのどけからまし。",
    translation: "世の中にまったく桜がなかったならば、春の人の心はのどかであっただろうに。",
    question: "「のどけからまし」の「まし」の意味として正しいものは？",
    target: "のどけからまし",
    correct: "反実仮想（実際とは違う仮定：〜だろうに）",
    wrongs: ["過去推量（〜たであろう）", "意志（〜よう）", "現在推量（今頃〜しているだろう）"],
    explanation: "根拠：『のどけからまし』は、形容詞『のどけし』の未然形『のどけから』に助動詞『まし』が付いた形です。『ら』は未然形語尾『から』の一部で、『らまし』という助動詞はありません。前半の『なかりせば（なかったならば）』という仮定条件と『まし』が呼応する『〜せば…まし』の型は、反実仮想の決まったパターンです。実際には桜が存在するのに、ないものと仮定して述べています。誤答について：過去推量なら『けむ』、現在推量なら『らむ』を使う場面であり、『まし』のこの用法とは区別できます。語句補足：『のどけし』は『のんびりと落ち着いている』の意です。",
  },
  {
    id: "r21",
    source: "古今和歌集（小野小町）",
    text: "花の色は移りにけりな、いたづらに我が身世にふるながめせしまに。",
    translation: "花の色は褪せてしまったなあ、むなしく私が世の中で年月を経て、物思いにふけっている間に。",
    question: "「移りにけりな」の「けり」の意味として正しいものは？",
    target: "移りにけりな",
    correct: "詠嘆（〜だなあ）",
    wrongs: ["過去（伝え聞いた過去：〜た）", "推量（〜だろう）", "完了（〜てしまった）"],
    explanation: "和歌の中で自分の身の上を振り返る「〜にけりな」は、気づきと感慨を表す詠嘆です。「に」は完了の「ぬ」、「な」は詠嘆の終助詞で、全体で感慨を強めています。誤答について：物語の語り出しのような伝聞的過去ではなく、歌い手自身の実感を述べているので詠嘆と判断します。語句補足：「ふる」は「経る（年月を経る）」と「降る（雨が降る）」の掛詞、「ながめ」は「長雨」と「眺め（物思い）」の掛詞です。",
  },
  {
    id: "r22",
    source: "大鏡（藤原道長の歌）",
    text: "この世をば我が世とぞ思ふ、望月の欠けたることもなしと思へば。",
    translation: "この世は私の世だと思う、満月に欠けたところがまったくないように（私の栄華にも欠けるところがない）と思うと。",
    question: "係助詞「ぞ」を受けて結ぶ「思ふ」は、何形として働いているか？",
    target: "思ふ",
    correct: "連体形",
    wrongs: ["終止形", "已然形", "命令形"],
    explanation: "係助詞「ぞ」の結びは連体形です。四段動詞「思ふ」は終止形と連体形が同形ですが、「ぞ」がある以上、文法上は連体形として結んでいると判断します。誤答について：已然形で結ぶのは「こそ」の場合で、「思ふ」の已然形・命令形は「思へ」となる点からも区別できます。語句補足：「望月」は満月のことで、道長の完全な栄華の比喩です。",
  },
  {
    id: "r23",
    source: "平家物語（忠度の最期・箙の中の歌）",
    text: "行き暮れて木の下蔭を宿とせば、花や今宵の主ならまし。",
    translation: "（旅の途中で）日が暮れて、木の下蔭を宿とするならば、花が今夜の主人になるだろうに。",
    question: "「宿とせば」の「せ」は、動詞「す」の何形か？",
    target: "とせば",
    correct: "未然形",
    wrongs: ["連用形", "終止形", "已然形"],
    explanation: "接続助詞「ば」が未然形に付けば仮定条件（〜ならば）、已然形に付けば確定条件（〜ので・〜すると）になります。ここは「宿とするならば」という仮定の話なので、「せ」はサ変動詞「す」の未然形です。誤答について：サ変の連用形は「し」、終止形は「す」、已然形は「すれ」であり、形からも特定できます。語句補足：この歌は、一の谷の合戦で討ち死にした平忠度の箙に結び付けられていた短冊から見つかり、詠み手が忠度と分かったと『平家物語』は伝えます。",
  },
  {
    id: "r24",
    source: "伊勢物語（初冠の段）",
    text: "昔、男、初冠して、平城の京、春日の里に、しるよしして狩りに往にけり。その里に、いとなまめいたる女はらから住みけり。",
    translation: "昔、ある男が、元服をして、奈良の都の春日の里に、その土地を領有している縁で狩りに出かけた。その里に、たいそう若々しく美しい姉妹が住んでいた。",
    question: "「住みけり」の「けり」の意味として正しいものは？",
    target: "住みけり",
    correct: "過去（伝え聞いた過去：〜た）",
    wrongs: ["詠嘆（〜だなあ）", "推量（〜だろう）", "現在推量（今頃〜しているだろう）"],
    explanation: "物語の本文で出来事を語る『けり』は、語り手が伝える過去です。前文の『往にけり』と並ぶ語りの『けり』で、感慨を述べる場面ではありません。誤答について：詠嘆の『けり』は和歌や感動の場面で『〜にけり』の形で現れることが多く、地の文の叙述では過去と取るのが原則です。語句補足：『初冠（ういかむり）』は元服のこと、『しる』は『知る』ではなく『領る（領有する）』で『その土地を領有している縁』の意、『女はらから』は姉妹の意です。",
  },
  {
    id: "r25",
    source: "徒然草（第七段）",
    text: "あだし野の露消ゆるときなく、鳥部山の煙立ち去らでのみ住み果つるならひならば、いかにもののあはれもなからん。世は定めなきこそいみじけれ。",
    translation: "あだし野の露が消えることが決してなく、鳥部山の煙が立ち去らないでいてばかりで、人がいつまでもこの世に住み続けるのが定めであるならば、どれほど物の情趣もないだろうか。世は無常であるからこそ、素晴らしいのだ。",
    question: "係助詞「こそ」を受けて文を結ぶ「いみじけれ」は、何形か？",
    target: "いみじけれ",
    correct: "已然形",
    wrongs: ["連体形", "終止形", "未然形"],
    explanation: "根拠：係助詞『こそ』の結びは已然形と決まっています。文末の『いみじけれ』は形容詞『いみじ』の已然形で結ばれており、規則通りの形です。誤答について：連体形で結ぶのは『ぞ・なむ・や・か』の場合で、『こそ』だけが已然形を取る点が頻出ポイントです。語句補足：『定めなき』は『定まっていない＝無常である』の意、『ならひ』は『定め・習わし』の意です。",
  },
  {
    id: "r26",
    source: "方丈記（無常の譬え）",
    text: "あるいは露落ちて花残れり。残るといへども、朝日に枯れぬ。あるいは花しぼみて、露なほ消えず。消えずといへども、夕べを待つことなし。",
    translation: "あるときは露が落ちて花が残る。残るといっても、朝の日光に枯れてしまう。またあるときは花がしぼんで、露はまだ消えずに残る。消えずに残るといっても、夕方までもつことはない。",
    question: "「枯れぬ（かれぬ）」の「ぬ」は何か？",
    target: "枯れぬ",
    correct: "完了の助動詞「ぬ」",
    wrongs: ["打消の助動詞「ず」の連体形", "断定の助動詞「なり」の未然形", "推量の助動詞「む」の連体形"],
    explanation: "読みが「かれぬ」である点が決め手です。下二段動詞「枯る」の連用形「枯れ」に完了の「ぬ」が付いた形だからです。もし打消の「ず」なら、未然形「枯ら」に付いて「からぬ」という読みになります。文意も「朝日に枯れてしまう」という無常の例えで、完了が合います。誤答について：形が似る「ぬ」の識別は、接続する活用形と読み（れ／ら）で判断するのが入試の定石です。",
  },
  {
    id: "r27",
    source: "古今和歌集（紀友則）",
    text: "久方の光のどけき春の日に、しづ心なく花の散るらむ。",
    translation: "日の光がのどかな春の日に、落ち着いた心もなく、花は散っているのだろうか（なぜこんなに急いで散るのだろう）。",
    question: "「散るらむ」の「らむ」の意味として正しいものは？",
    target: "散るらむ",
    correct: "現在推量（今〜しているだろう）",
    wrongs: ["過去推量（〜たであろう）", "意志（〜よう）", "伝聞（〜だそうだ）"],
    explanation: "「らむ」は終止形に接続する現在推量の助動詞で、目の前の春の日に散る花について「なぜ散っているのだろう」と現在の様子・理由を推し量っています。誤答について：過去のことなら「けむ」を使う場面であり、花が主語なので意志でもありません。語句補足：「久方の」は「光」にかかる枕詞、「しづ心」は「落ち着いた心」の意です。",
  },
  {
    id: "r28",
    source: "古今和歌集（源宗于）",
    text: "山里は冬ぞ寂しさまさりける、人目も草も枯れぬと思へば。",
    translation: "山里は冬こそ寂しさがまさるのだ、人の訪れも草も枯れてしまうと思うと。",
    question: "係助詞「ぞ」を受けて結ぶ「まさりける」の「ける」は、どの助動詞の何形か？",
    target: "まさりける",
    correct: "過去の助動詞「けり」の連体形",
    wrongs: ["完了の助動詞「たり」の連体形", "断定の助動詞「なり」の連体形", "推量の助動詞「らむ」の連体形"],
    explanation: "係助詞「ぞ」の結びは連体形です。「ける」は「けり」の連体形で、「まさり」に接続して冬の寂しさを実感する詠嘆含みの叙述になっています。誤答について：「たり」の連体形は「たる」、「なり」の連体形は「なる」、「らむ」の連体形は「らむ」と形が異なり、「ける」になるのは「けり」だけです。語句補足：「枯れぬ」の「枯れ」には「離れ（人の訪れが絶える）」の意も重なります。",
  },
  {
    id: "r29",
    source: "古今和歌集（藤原敏行）",
    text: "秋来ぬと目にはさやかに見えねども、風の音にぞ驚かれぬる。",
    translation: "秋が来たと目にははっきり見えないけれども、風の音に（秋の訪れを）自然と感じて驚く。",
    question: "「驚かれぬる」の「ぬる」は、どの助動詞の何形か？",
    target: "驚かれぬる",
    correct: "完了の助動詞「ぬ」の連体形",
    wrongs: ["打消の助動詞「ず」の連体形", "過去の助動詞「けり」の連体形", "存続の助動詞「たり」の連体形"],
    explanation: "「驚かれぬる」は「驚か（未然形）＋れ（自発の『る』の連用形）＋ぬる」で、「ぬる」は完了の助動詞「ぬ」の連体形です。係助詞「ぞ」の結びが連体形であることも傍証になります。誤答について：打消「ず」の連体形は「ぬ」止まりで「ぬる」にはならず、「けり」は「ける」、「たり」は「たる」となるため、形で判別できます。",
  },
  {
    id: "r30",
    source: "古今和歌集（在原業平）",
    text: "月やあらぬ春や昔の春ならぬ、我が身一つはもとの身にして。",
    translation: "月は昔の月ではないのか、春は昔の春ではないのか。私一人だけは昔のままの身でいるのに。",
    question: "「春ならぬ」の「ぬ」は何か？",
    target: "ならぬ",
    correct: "打消の助動詞「ず」の連体形",
    wrongs: ["完了の助動詞「ぬ」の連体形", "過去の助動詞「けり」の連体形", "断定の助動詞「なり」の連体形"],
    explanation: "「ならぬ」は断定の助動詞「なり」の未然形「なら」に、打消の助動詞「ず」の連体形「ぬ」が付いた形で、「春ではない」という意味です。決め手は接続先：「ず」は未然形に付くので「なら＋ぬ」となり、完了の「ぬ」なら連用形に付くはずです。誤答について：「なり」の連体形は「なる」であり、「ぬ」自体が「なり」の形になることはありません。語句補足：「や」は疑問の係助詞で、結びは連体形になります。",
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
  { verb: "過ぐ", className: "上二段", forms: ["過ぎ", "過ぎ", "過ぐ", "過ぐる", "過ぐれ", "過ぎよ"] },
  { verb: "捨つ", className: "下二段", forms: ["捨て", "捨て", "捨つ", "捨つる", "捨つれ", "捨てよ"] },
  { verb: "来", className: "カ変", forms: ["こ", "き", "く", "くる", "くれ", "こよ"] },
  { verb: "す", className: "サ変", forms: ["せ", "し", "す", "する", "すれ", "せよ"] },
  { verb: "死ぬ", className: "ナ変", forms: ["死な", "死に", "死ぬ", "死ぬる", "死ぬれ", "死ね"] },
  { verb: "あり", className: "ラ変", forms: ["あら", "あり", "あり", "ある", "あれ", "あれ"] },
  { verb: "行く", className: "四段", forms: ["行か", "行き", "行く", "行く", "行け", "行け"] },
  { verb: "泣く", className: "四段", forms: ["泣か", "泣き", "泣く", "泣く", "泣け", "泣け"] },
  { verb: "歌ふ", className: "四段", forms: ["歌は", "歌ひ", "歌ふ", "歌ふ", "歌へ", "歌へ"] },
  { verb: "取る", className: "四段", forms: ["取ら", "取り", "取る", "取る", "取れ", "取れ"] },
  { verb: "帰る", className: "四段", forms: ["帰ら", "帰り", "帰る", "帰る", "帰れ", "帰れ"] },
  { verb: "出づ", className: "下二段", forms: ["出で", "出で", "出づ", "出づる", "出づれ", "出でよ"] },
  { verb: "助く", className: "下二段", forms: ["助け", "助け", "助く", "助くる", "助くれ", "助けよ"] },
  { verb: "忘る", className: "下二段", forms: ["忘れ", "忘れ", "忘る", "忘るる", "忘るれ", "忘れよ"] },
  { verb: "得（う）", className: "下二段", forms: ["え", "え", "う", "うる", "うれ", "えよ"] },
  { verb: "蹴る", className: "下一段", forms: ["蹴", "蹴", "蹴る", "蹴る", "蹴れ", "蹴よ"] },
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
    source: "枕草子（例文）",
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
    explanation: "補助動詞「給ふ（四段）」が、車から降りる源氏（動作主）の動作を高める尊敬表現です。",
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
    source: "竹取物語（例文）",
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
    sentence: "従者、「御車の用意は、調ひてはべり」と告ぐ。",
    expression: "はべり",
    relation: "従者 → 主人（聞き手）",
    direction: "teinei",
    explanation: "「はべり」は聞き手への丁寧語で、文を丁寧に締めくくります。「用意する」という動作自体を高めているわけではありません。",
  },
  // ── 二重敬語（最高位への最大の敬意） ──
  {
    id: "k17",
    source: "源氏物語（例文）",
    sentence: "帝、このことを聞こし召す。",
    expression: "聞こし召す",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「聞こし召す」は尊敬語「聞こす」に、さらに尊敬の「召す」が重なった二重敬語。最高位の帝への最大の敬意です。",
  },
  {
    id: "k18",
    source: "源氏物語・桐壺（例文）",
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
    source: "源氏物語（例文）",
    sentence: "帝、夜更けて御殿へ入らせ給ふ。",
    expression: "入らせ給ふ",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「入らせ給ふ」は「入る」に尊敬の助動詞「す（せ）」と尊敬の補助動詞「給ふ」が重なった二重敬語。御殿へ入る帝（動作主）への最大の敬意です。",
  },
// ── 尊敬（動作主を高める） ──
  {
    id: "k21",
    source: "源氏物語（例文）",
    sentence: "光源氏、月の夜に歌を詠み給ふ。",
    expression: "詠み給ふ",
    relation: "語り手 → 光源氏",
    direction: "sonkei",
    explanation: "「詠む」に尊敬の補助動詞「給ふ（四段）」が付いた形。歌を詠む源氏（動作主）を高める尊敬です。敬意の受け手はいないので謙譲ではなく、聞き手への丁寧でもありません。",
  },
  {
    id: "k22",
    source: "竹取物語（例文）",
    sentence: "帝、かぐや姫を迎へに御車に召す。",
    expression: "召す",
    relation: "語り手 → 帝",
    direction: "sonkei",
    explanation: "「召す」はここでは「乗る」の尊敬語（「呼ぶ」の意味ではない）。御車に乗る帝（動作主）を高める尊敬です。帝自身がへりくだる謙譲ではありません。",
  },
  {
    id: "k23",
    source: "源氏物語（例文）",
    sentence: "帝、その夜、大殿ごもる。",
    expression: "大殿ごもる",
    relation: "語り手 → 帝",
    direction: "sonkei",
    explanation: "「大殿ごもる」は「寝る」の尊敬語。お休みになる帝（動作主）を高める尊敬です。単一の尊敬語で、尊敬表現の重なりはないため二重敬語ではありません。",
  },
  {
    id: "k24",
    source: "枕草子（例文）",
    sentence: "中宮、若宮の行く末をおぼす。",
    expression: "おぼす",
    relation: "語り手（清少納言）→ 中宮",
    direction: "sonkei",
    explanation: "「おぼす」は「思ふ」の尊敬語。将来を思い案じる中宮（動作主）を高める尊敬です。「召す」が重なっていないので、「思し召す」のような二重敬語ではありません。",
  },
  {
    id: "k25",
    source: "大鏡（例文）",
    sentence: "帝、御病ひ重くして、つひに崩ず。",
    expression: "崩ず",
    relation: "語り手 → 帝",
    direction: "sonkei",
    explanation: "「崩ず」は天皇などが「死ぬ」ことの尊敬語。崩御する帝（動作主）を最も高い語で高める尊敬です。誰かへの動作ではないので謙譲ではありません。",
  },
  // ── 謙譲（受け手を高め、動作主がへりくだる） ──
  {
    id: "k26",
    source: "例文",
    sentence: "僧、帝の御前で経を読み奉る。",
    expression: "読み奉る",
    relation: "僧 → 帝",
    direction: "kenjou",
    explanation: "「読む」に謙譲語「奉る」が付いた形。経を読む僧（動作主）がへりくだり、聞く帝（受け手）を高める謙譲です。帝の動作ではないので尊敬ではありません。",
  },
  {
    id: "k27",
    source: "紫式部日記（例文）",
    sentence: "紫式部、中宮彰子に仕うまつる。",
    expression: "仕うまつる",
    relation: "紫式部 → 中宮彰子",
    direction: "kenjou",
    explanation: "「仕うまつる」は「仕える（宮仕えする）」の謙譲語。仕える紫式部（動作主）がへりくだり、仕えられる中宮（受け手）を高める謙譲です。",
  },
  {
    id: "k28",
    source: "枕草子（例文）",
    sentence: "清少納言、中宮にこの歌の心を聞こえさす。",
    expression: "聞こえさす",
    relation: "清少納言 → 中宮",
    direction: "kenjou",
    explanation: "「聞こえさす」は「聞こゆ（申し上げる）」に使役の助動詞「さす」が付いて一語化した謙譲語で、「聞こゆ」より敬意が強くなります。説明する清少納言がへりくだり、聞く中宮（受け手）を高めます。中宮の動作ではないので尊敬ではありません。",
  },
  {
    id: "k29",
    source: "例文",
    sentence: "家臣、主君に名馬を参らす。",
    expression: "参らす",
    relation: "家臣 → 主君",
    direction: "kenjou",
    explanation: "「参らす」は「差し上げる・進上する」の謙譲語。馬を差し出す家臣（動作主）がへりくだり、受ける主君（受け手）を高める謙譲です。",
  },
  {
    id: "k30",
    source: "源氏物語（例文）",
    sentence: "女房、中宮の仰せを承る。",
    expression: "承る",
    relation: "女房 → 中宮",
    direction: "kenjou",
    explanation: "「承る」は「聞く・受けたまわる」の謙譲語。仰せを聞く女房（動作主）がへりくだり、仰せを下した中宮（受け手）を高める謙譲です。中宮は「承る」の動作主ではなく敬意を受ける側なので、動作主を高める尊敬とは区別します。",
  },
  // ── 丁寧（聞き手・読み手への丁寧さ） ──
  {
    id: "k31",
    source: "源氏物語（例文）",
    sentence: "女房、中宮に「この物語は、昔より伝はりさぶらふ」と語る。",
    expression: "さぶらふ",
    relation: "女房 → 中宮（聞き手）",
    direction: "teinei",
    explanation: "「さぶらふ」は「ございます」に当たる丁寧語。伝わる対象は物語で、誰かへの奉仕の動作ではないため謙譲ではなく、聞き手の中宮へ文を丁寧に述べる丁寧です。",
  },
  {
    id: "k32",
    source: "例文",
    sentence: "女房の文、「御文、まことにありがたく候ふ」。",
    expression: "候ふ",
    relation: "文の書き手（女房）→ 中宮（読み手）",
    direction: "teinei",
    explanation: "手紙文の「候ふ」は「ございます」に当たる丁寧語。ここでは御前に控える意味ではなく、文全体を読み手の中宮へ丁寧に差し出す働きなので丁寧です。",
  },
  {
    id: "k33",
    source: "枕草子（例文）",
    sentence: "清少納言、中宮に「仰せの御琴は、ここにさぶらふ」と答ふ。",
    expression: "さぶらふ",
    relation: "清少納言 → 中宮（聞き手）",
    direction: "teinei",
    explanation: "「さぶらふ」は琴のありかを「ございます」と丁寧に答える丁寧語。琴を差し上げる動作ではないので謙譲ではなく、動作主を高める尊敬でもありません。",
  },
  {
    id: "k34",
    source: "土佐日記（例文）",
    sentence: "その夜、月いと明かくはべり。",
    expression: "はべり",
    relation: "語り手 → 読者",
    direction: "teinei",
    explanation: "日記の地の文の「はべり」は丁寧語。月の明るさという叙述自体を、読み手に向けて丁寧に差し出しています。特定の動作主や受け手を高める表現ではありません。",
  },
  {
    id: "k35",
    source: "例文",
    sentence: "女房、遠方の友への文に「御無事のほどを、待ちはべり」と書く。",
    expression: "はべり",
    relation: "文の書き手（女房）→ 友（読み手）",
    direction: "teinei",
    explanation: "手紙文の「はべり」は丁寧語で、「お待ちしてございます」と文を丁寧に結びます。待つ相手を動作の受け手として高める謙譲ではなく、読み手への丁寧さを示すものです。",
  },
  // ── 二重敬語（最高位への最大の敬意） ──
  {
    id: "k36",
    source: "源氏物語（例文）",
    sentence: "帝、源氏に宮中へ戻るやう仰せ給ふ。",
    expression: "仰せ給ふ",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「仰せ給ふ」は「言ふ」の尊敬語「仰す」に尊敬の補助動詞「給ふ」が重なった二重敬語。命令を下す帝（動作主）への最大の敬意で、単なる一重の尊敬より一段高い表現です。",
  },
  {
    id: "k37",
    source: "源氏物語（例文）",
    sentence: "帝、更衣のことを深く思し召す。",
    expression: "思し召す",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「思し召す」は「思ふ」の尊敬語「思す（おぼす）」に尊敬の「召す」が重なった二重敬語。思いを寄せる帝（動作主）への最大の敬意です。",
  },
  {
    id: "k38",
    source: "例文",
    sentence: "帝、国々の政を知ろし召す。",
    expression: "知ろし召す",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「知ろし召す」は「知る」の尊敬語「知ろす」に尊敬の「召す」が重なった二重敬語。政を把握する帝（動作主）への最大の敬意を表します。",
  },
  {
    id: "k39",
    source: "枕草子（例文）",
    sentence: "中宮、女房らに「いかがあらむ」とのたまはせ給ふ。",
    expression: "のたまはせ給ふ",
    relation: "語り手（清少納言）→ 中宮",
    direction: "nijuu",
    explanation: "「のたまはせ給ふ」は尊敬語「のたまふ」に尊敬の助動詞「す（せ）」と「給ふ」が重なった二重敬語。言葉を発する中宮（動作主）への最大の敬意です。",
  },
  {
    id: "k40",
    source: "源氏物語（例文）",
    sentence: "帝、清涼殿におはし給ふ。",
    expression: "おはし給ふ",
    relation: "語り手 → 帝",
    direction: "nijuu",
    explanation: "「おはし給ふ」は「あり・居る」の尊敬語「おはす」に尊敬の補助動詞「給ふ」が重なった二重敬語。清涼殿にいらっしゃる帝（動作主）への最大の敬意です。",
  },
];

// ============================================================
// 古文単語問題（単語の陣）
// 高校古文の基本単語30語。多義語は短い文脈文で意味を1つに特定する。
// 現代語と意味がずれる語（あたらし・おどろく・なつかし・ありがたし等）は
// 現代語の意味をあえて誤答に入れ、文脈で判定が割れないようにした。
// ============================================================
export const WORD_PROBLEMS: WordProblem[] = [
  {
    id: "w01",
    word: "あらまほし",
    sentence: "かかる人の心ばへこそ、あらまほしけれ。",
    targetText: "あらまほしけれ",
    correct: "理想的だ（望ましい）",
    wrongs: ["思いがけない", "情けない", "頼りない"],
    explanation: "「あらまほし」は「かくありたい」と思う様子で、理想的・望ましいという意味。係助詞「こそ」を受けて已然形「あらまほしけれ」で結んでいます。",
  },
  {
    id: "w02",
    word: "いみじ",
    sentence: "名人の笛の音、いみじかりけり。人々皆聞き惚れたり。",
    targetText: "いみじかり",
    correct: "すばらしい",
    wrongs: ["つまらない", "悲しい", "恥ずかしい"],
    explanation: "「いみじ」は程度がはなはだしい意で、良いことにも悪いことにも使いますが、ここでは人々が聞き惚れているので「すばらしい」の意。「いみじかり」は、シク活用のカリ活用（「いみじくあり」の縮約）の連用形で、過去の助動詞「けり」が続いた形です。音便ではありません。",
  },
  {
    id: "w03",
    word: "あたらし",
    sentence: "あたら桜の花を、春風の散らすかな。",
    targetText: "あたら",
    correct: "もったいない（惜しい）",
    wrongs: ["新しい", "鮮やかな", "香りの高い"],
    explanation: "古文の「あたらし」は「もったいない・惜しい」の意。現代語の「新しい」は古文では「あらたし」と言い、「あたらし」とは別語です。",
  },
  {
    id: "w04",
    word: "おどろく",
    sentence: "夜半に、夢におどろきて、あたりを見まはしぬ。",
    targetText: "おどろき",
    correct: "はっと目が覚める",
    wrongs: ["驚いて飛びのく", "怯えて震える", "慌てて走り出す"],
    explanation: "古文の「おどろく」は眠りから目覚める意が中心です。夢から目覚めて周囲を見回す場面であり、現代語の「驚く（びっくりする）」とは意味がずれます。",
  },
  {
    id: "w05",
    word: "あくがる",
    sentence: "長き旅路に、心あくがれて、ただ物思ふ。",
    targetText: "あくがれて",
    correct: "心がさまよって、ぼんやりする",
    wrongs: ["すっかり飽きてしまう", "ひどく怒る", "落ち着きを取り戻す"],
    explanation: "「あくがる」は心が体から離れてさまよう意で、うわの空・ぼんやりした様子を表します。「飽く（あく）」とは別語です。",
  },
  {
    id: "w06",
    word: "ゆかし",
    sentence: "隣にて琴の音す。ゆかしくて、近寄りて聞く。",
    targetText: "ゆかしく",
    correct: "心が引かれて（聞きたい）",
    wrongs: ["懐かしくて", "恐ろしくて", "涼しくて"],
    explanation: "「ゆかし」は見たい・聞きたい・知りたいと心が引かれる意。琴の音に引かれて近寄って聞く、という流れから決まります。",
  },
  {
    id: "w07",
    word: "あさまし",
    sentence: "助けられし恩人を売る。その心、あさまし。",
    targetText: "あさまし",
    correct: "あきれるほど情けない",
    wrongs: ["立派で感心する", "水が浅い", "激しく悲しむ"],
    explanation: "「あさまし」は驚きあきれるほどひどい・情けないという意。恩人を裏切る行為への評価なので、この意味になります。「浅し」とは別です。",
  },
  {
    id: "w08",
    word: "つれなし",
    sentence: "頼みし人に、つれなき返事して、帰しつ。",
    targetText: "つれなき",
    correct: "冷淡な・素っ気ない",
    wrongs: ["連れのいない", "退屈な", "忙しそうな"],
    explanation: "「つれなし」は冷淡で素っ気ない意。頼みに来た人を素っ気ない返事で帰した、という文脈から決まります。「連れ」とは関係ありません。",
  },
  {
    id: "w09",
    word: "なつかし",
    sentence: "老人の昔語りする声、なつかしく聞こゆ。",
    targetText: "なつかしく",
    correct: "心引かれて慕わしい",
    wrongs: ["昔が懐かしい", "暑苦しい", "恥ずかしい"],
    explanation: "古文の「なつかし」は、対象に心が引かれて慕わしい・親しみ深いという意。現代語の「（昔が）懐かしい」とは意味がずれます。",
  },
  {
    id: "w10",
    word: "わりなし",
    sentence: "幼き子を一人残して行くこと、わりなし。",
    targetText: "わりなし",
    correct: "どうしようもなくつらい",
    wrongs: ["割合が決まらない", "理由が全くない", "分け隔てがない"],
    explanation: "「わりなし」は理屈では割り切れないほどどうにもならない・つらいという意。幼い子を残していく辛さに使われています。",
  },
  {
    id: "w11",
    word: "あいなし",
    sentence: "語り手の長き話、あいなくて、人々席を立ちぬ。",
    targetText: "あいなく",
    correct: "つまらなくて",
    wrongs: ["愛情がなくて", "相手がいなくて", "悲しくて"],
    explanation: "「あいなし」は味気ない・つまらない・気にくわないという意。話がつまらなくて人々が席を立った、という流れから決まります。",
  },
  {
    id: "w12",
    word: "心もとなし",
    sentence: "旅に発ちし人より便りなく、心もとなし。",
    targetText: "心もとなし",
    correct: "不安で心配だ",
    wrongs: ["心がこもっていない", "もったいない", "頼もしく心強い"],
    explanation: "「心もとなし」は先が見えず不安で心配な気持ちを表します。旅に出た人から便りがない状況に使われています。",
  },
  {
    id: "w13",
    word: "かたはらいたし",
    sentence: "転びし人を笑ふ人々を見て、かたはらいたし。",
    targetText: "かたはらいたし",
    correct: "見ていて痛々しい（恥ずかしい）",
    wrongs: ["傍らが物理的に痛い", "見ていてうらやましい", "見ていて面白い"],
    explanation: "「かたはらいたし」は、傍らで見ているのが辛いほど痛々しい・恥ずかしいという意。転んだ人を笑う人々を見ての感想です。体が痛いわけではありません。",
  },
  {
    id: "w14",
    word: "まめやか",
    sentence: "まめやかに主に仕へて、信頼を得たり。",
    targetText: "まめやかに",
    correct: "誠実に・まじめに",
    wrongs: ["豆のように小さく", "派手やかに", "急いで"],
    explanation: "「まめやか」は誠実でまじめな様子を表す形容動詞。主君にまじめに仕えて信頼を得た、という文脈です。「豆」とは関係ありません。",
  },
  {
    id: "w15",
    word: "あてなり",
    sentence: "姫君の御姿、いとあてなり。",
    targetText: "あてなり",
    correct: "上品で優雅だ",
    wrongs: ["あてがあって頼もしい", "派手で華やかだ", "幼く小さい"],
    explanation: "「あてなり」は身分が高く上品で優雅な様子を表します。姫君の姿への評価として使われています。",
  },
  {
    id: "w16",
    word: "をかし",
    sentence: "夏の夜、螢の飛び交ふ様、をかし。",
    targetText: "をかし",
    correct: "趣がある（面白い）",
    wrongs: ["滑稽で笑える", "馬鹿げている", "恐ろしい"],
    explanation: "「をかし」は明るい知的な趣・面白さを表し、枕草子で清少納言が愛用した評価の言葉です。現代語の「おかしい（滑稽・変だ）」とは意味がずれます。",
  },
  {
    id: "w17",
    word: "あはれ",
    sentence: "秋の夕暮れ、雁の声あはれなり。",
    targetText: "あはれなり",
    correct: "しみじみと心にしみる趣がある",
    wrongs: ["賑やかで楽しい", "滑稽で笑える", "まぶしく明るい"],
    explanation: "「あはれ」はしみじみと心にしみる感動を表します。秋の夕暮れに雁の声を聞く場面の、静かな趣を表す言葉です。",
  },
  {
    id: "w18",
    word: "かなし",
    sentence: "幼き子の笑む顔、いとかなし。",
    targetText: "かなし",
    correct: "いとしい（かわいい）",
    wrongs: ["悲しい", "情けない", "恥ずかしい"],
    explanation: "「かなし」には悲しいの他に「いとしい」という意味があり、幼い子の笑顔への愛情を表すこの文では「いとしい」の意です。",
  },
  {
    id: "w19",
    word: "うつくし",
    sentence: "生まれし子の顔、うつくしく見ゆ。",
    targetText: "うつくしく",
    correct: "かわいらしい",
    wrongs: ["美しい", "恐ろしい", "立派だ"],
    explanation: "古文の「うつくし」は、小さいもの・幼いものへの愛情を込めた「かわいらしい」の意が中心です。生まれた子の顔への言葉なのでこの意味になります。",
  },
  {
    id: "w20",
    word: "めでたし",
    sentence: "この歌の調べ、いとめでたし。",
    targetText: "めでたし",
    correct: "すばらしい",
    wrongs: ["珍しい", "恐れ多い", "新しい"],
    explanation: "「めでたし」は愛でたくなるほどすばらしい・立派だという意。歌の調べを褒める言葉です。",
  },
  {
    id: "w21",
    word: "ありがたし",
    sentence: "かかる宝にめぐり会ふこと、ありがたし。",
    targetText: "ありがたし",
    correct: "めったにない（珍しい）",
    wrongs: ["感謝せずにはいられない", "当然のことだ", "永遠に続く"],
    explanation: "古文の「ありがたし」は「あることが難しい」から来た語で、めったにない・珍しいの意が中心です。現代語の「感謝する気持ち」とは意味がずれます。",
  },
  {
    id: "w22",
    word: "おぼつかなし",
    sentence: "闇夜に、山路いとおぼつかなし。",
    targetText: "おぼつかなし",
    correct: "はっきりせず頼りない",
    wrongs: ["恐ろしく激しい", "懐かしく慕わしい", "つまらなく退屈だ"],
    explanation: "「おぼつかなし」は物事がはっきりせず、頼りなく不安な様子を表します。闇夜で山道が見分けにくい状況です。",
  },
  {
    id: "w23",
    word: "ねんごろなり",
    sentence: "ねんごろに語らひて、やがて心許しぬ。",
    targetText: "ねんごろに",
    correct: "親しみを込めて（親密に）",
    wrongs: ["年頃になって", "退屈そうに", "静かに"],
    explanation: "「ねんごろなり」は丁寧・親密の意。ここでは親しく語り合って打ち解けたという流れなので「親密に」の意です。「年頃」とは関係ありません。",
  },
  {
    id: "w24",
    word: "はづかし",
    sentence: "大宮人の前にて舞ふこと、はづかしく覚ゆ。",
    targetText: "はづかしく",
    correct: "気恥ずかしい",
    wrongs: ["懐かしい", "忙しい", "美しい"],
    explanation: "「はづかし」は人前に出ることに気後れする・恥ずかしいという意。高貴な人々の前で舞うことへの気恥ずかしさを表します。",
  },
  {
    id: "w25",
    word: "さやか",
    sentence: "秋の月、さやかに澄みて照らす。",
    targetText: "さやかに",
    correct: "はっきりと明るく",
    wrongs: ["涼しく爽やかに", "静かに", "速やかに"],
    explanation: "「さやか」は明らかではっきりしている様子。澄んだ秋の月がはっきりと照らす様子です。現代語の「さわやか（涼しい）」とは意味がずれます。",
  },
  {
    id: "w26",
    word: "ゆゆし",
    sentence: "出陣の前に、ゆゆしき言をな言ひそ。",
    targetText: "ゆゆしき",
    correct: "不吉な",
    wrongs: ["立派な", "賑やかな", "急な"],
    explanation: "「ゆゆし」は程度のはなはだしさを表し、ここでは不吉・縁起が悪い意。出陣前に「言うな（な〜そ）」と止められていることから決まります。",
  },
  {
    id: "w27",
    word: "かしこし",
    sentence: "帝の御前に出でて、かしこく覚ゆ。",
    targetText: "かしこく",
    correct: "恐れ多い",
    wrongs: ["賢く", "懐かしく", "忙しく"],
    explanation: "古文の「かしこし」は恐ろしい・恐れ多いの意。帝の前に出る畏れの気持ちを表します。現代語の「賢い」とは意味がずれます。",
  },
  {
    id: "w28",
    word: "らうたし",
    sentence: "幼君の御声、いとらうたし。",
    targetText: "らうたし",
    correct: "かわいらしい（いとしい）",
    wrongs: ["乱暴だ", "うるさい", "悲しい"],
    explanation: "「らうたし」は幼いものへの愛情を表す語で、かわいらしい・いとしいの意。幼い君主の声への言葉です。",
  },
  {
    id: "w29",
    word: "しのぶ",
    sentence: "昔の人をしのびて、涙落つ。",
    targetText: "しのびて",
    correct: "思い出して慕って",
    wrongs: ["我慢して", "身を隠して", "盗んで"],
    explanation: "「しのぶ」には我慢する意もありますが、ここは「昔の人」を対象に涙を落としているので、思い出して慕う意の「しのぶ」です。",
  },
  {
    id: "w30",
    word: "あやし",
    sentence: "あやしき小家に、一人住む翁ありけり。",
    targetText: "あやしき",
    correct: "粗末な",
    wrongs: ["怪しく不審な", "美しく立派な", "広く新しい"],
    explanation: "古文の「あやし」は身分が低い・粗末だという意が中心で、ここでは翁の住む小さな家を表します。現代語の「怪しい（不審だ）」とは意味がずれます。",
  },
  {
    id: "w31",
    word: "いとほし",
    sentence: "幼き子を残して旅立つこと、いとほし。",
    targetText: "いとほし",
    correct: "かわいそうだ（気の毒だ）",
    wrongs: ["かわいらしい", "忙しい", "恥ずかしい"],
    explanation: "「幼き子を残して」という境遇への同情の文脈で意味が決まります。「いとほし」は気の毒・かわいそうの意で、現代語で似た響きの「いとおしい（愛しい）」とはずれます。形が近い誤答「かわいらしい」は「うつくし・らうたし」の領域です。",
  },
  {
    id: "w32",
    word: "こころにくし",
    sentence: "簾の向かうに隠れたる姫の歌声、こころにくし。",
    targetText: "こころにくし",
    correct: "奥ゆかしく心引かれる",
    wrongs: ["憎らしく腹が立つ", "心が痛く苦しい", "つまらなく退屈だ"],
    explanation: "姿が見えず歌声だけが聞こえる場面で、もっと知りたいと心引かれる様子を表します。現代語の「憎い」と結びつける誤答「憎らしく」は正反対で、古文の「こころにくし」は奥ゆかしさへの好意的な評価です。",
  },
  {
    id: "w33",
    word: "すさまじ",
    sentence: "楽しき宴の半ばに酒尽きて、すさまじ。",
    targetText: "すさまじ",
    correct: "興ざめだ（白々しい）",
    wrongs: ["勢いがすさまじい", "清々しく爽やかだ", "すばらしく見事だ"],
    explanation: "楽しい宴の途中で酒が尽きたという流れから、興が冷める意だと決まります。現代語の「すさまじい（猛烈だ）」と取ると文意が合いません。「すばらしい」は「いみじ・めでたし」の領域で、ここは場が白ける場面です。",
  },
  {
    id: "w34",
    word: "なまめかし",
    sentence: "若き姫君の御姿、いとなまめかし。",
    targetText: "なまめかし",
    correct: "若々しく優美だ",
    wrongs: ["艶っぽく妖しい", "弱々しく頼りない", "派手でけばけばしい"],
    explanation: "若い姫君の姿への賛辞の文脈なので、若々しく上品で優美な意になります。現代語の「なまめかしい（色っぽい）」という誤答とはずれがあり、古文では優美さの評価に使われます。",
  },
  {
    id: "w35",
    word: "ねたし",
    sentence: "友の栄えゆくを見て、ねたしと覚ゆ。",
    targetText: "ねたし",
    correct: "うらやましくてしゃくだ",
    wrongs: ["眠たくてたまらない", "懐かしくてたまらない", "恥ずかしくてたまらない"],
    explanation: "友人が出世していく姿を見ての気持ちなので、うらやましくてしゃくにさわる意だと決まります。音が似た誤答「眠たい」は「ねたし（寝たし）」とは無関係で、文脈にも合いません。",
  },
  {
    id: "w36",
    word: "くちをし",
    sentence: "せっかくの花盛りに雨降りて、くちをし。",
    targetText: "くちをし",
    correct: "残念だ",
    wrongs: ["腹立たしい", "悲しくて泣ける", "つまらない"],
    explanation: "楽しみにしていた花盛りが雨で台無しになった場面なので、残念だという意になります。「腹立たしい」は怒りの対象がある場合の感情で、ここは天候への落胆です。誰かへの怒りと取り違えた誤答に注意。",
  },
  {
    id: "w37",
    word: "あぢきなし",
    sentence: "病に伏して春を過ごす身、あぢきなし。",
    targetText: "あぢきなし",
    correct: "つまらない（甲斐がない）",
    wrongs: ["味がしなくてまずい", "忙しくて暇がない", "恥ずかしくてならない"],
    explanation: "病気で寝込み、春を無為に過ごす身の上への嘆きなので、甲斐がなくつまらない意だと決まります。「味」と結びつける誤答は漢字の連想によるもので、食べ物の味を言う語ではありません。",
  },
  {
    id: "w38",
    word: "わびし",
    sentence: "都を離れ、知る人もなき里に住む身、わびし。",
    targetText: "わびし",
    correct: "心細くてつらい",
    wrongs: ["静かで趣がある", "貧しく質素だ", "恥ずかしく情けない"],
    explanation: "知り合いのいない土地で暮らす孤独な境遇の文脈なので、心細くつらい意になります。現代語の「侘び（趣）」と結びつける誤答「静かで趣がある」とはずれがあり、古文の「わびし」は困窮した辛さを表します。",
  },
  {
    id: "w39",
    word: "せちなり",
    sentence: "せちに帰郷を願ひて、手紙を書き送る。",
    targetText: "せちに",
    correct: "切実に（しきりに）",
    wrongs: ["切ない気持ちで", "少しだけ遠慮がちに", "節ごとに区切って"],
    explanation: "故郷へ帰りたい願いの強さが、手紙を書き送る行動にまで及んでいる文脈で、切実に・しきりにの意だと決まります。現代語の「切ない（悲しい）」に引きずられた誤答とはずれがあり、願いの切迫感を表す語です。",
  },
  {
    id: "w40",
    word: "おぼろけなり",
    sentence: "その笛の音、おぼろけならず、人々涙を流す。",
    targetText: "おぼろけならず",
    correct: "並一通りではない（格別だ）",
    wrongs: ["ぼんやりしてはっきりしない", "思いがけず偶然だ", "静かで目立たない"],
    explanation: "「おぼろけならず」は打消を伴う決まった言い方で、並大抵ではない・格別の意。人々が涙するほどの笛の音という文脈で決まります。「ぼんやり」という誤答は単独の「おぼろけ（かすか）」の連想で、打消と組み合わさると意味が反転します。",
  },
  {
    id: "w41",
    word: "いぶかし",
    sentence: "奥の部屋より聞こゆる琴の音、その弾く主いぶかし。",
    targetText: "いぶかし",
    correct: "誰か知りたくて心引かれる",
    wrongs: ["不気味で怪しく恐ろしい", "懐かしくて慕わしい", "忙しくて騒がしい"],
    explanation: "琴の音だけが聞こえて弾き手が見えない場面なので、姿を見たい・知りたいと心引かれる意だと決まります。「いぶかし」には不審の意もありますが、ここは美しい琴の音への関心の文脈なので、誤答「怪しく恐ろしい」にはなりません。",
  },
  {
    id: "w42",
    word: "いぶせし",
    sentence: "長雨続きて外にも出でず、ただいぶせし。",
    targetText: "いぶせし",
    correct: "気が晴れず鬱々としている",
    wrongs: ["煙たくて苦しい", "不審で怪しい", "忙しく慌ただしい"],
    explanation: "長雨で外出もできず閉じこもる日々の文脈なので、気分が晴れない意だと決まります。「いぶかし（知りたい・不審）」と形が似た別語で、誤答「不審で怪しい」と取り違えやすい語です。",
  },
  {
    id: "w43",
    word: "いたはる",
    sentence: "母、病める子をいたはりて、夜も寝ず。",
    targetText: "いたはり",
    correct: "大切に世話をして",
    wrongs: ["痛がってうめいて", "偽ってごまかして", "急いで駆けつけて"],
    explanation: "病気の子のために夜も寝ずに付き添う文脈なので、大切に看病する意だと決まります。「痛」という字の連想による誤答「痛がって」とは無関係で、相手を労わり世話する動作を表します。",
  },
  {
    id: "w44",
    word: "かしづく",
    sentence: "翁夫婦、拾ひし姫をかしづきて育てたり。",
    targetText: "かしづき",
    correct: "大切に育てて",
    wrongs: ["頭を下げてお辞儀して", "かしこまって控えて", "質素に慎ましく"],
    explanation: "拾った姫を育てるという文脈なので、大切に養育する意だと決まります。「かしこまる」という誤答は音の連想によるもので、「かしづく」は相手を大事に世話し育てる動作です。",
  },
  {
    id: "w45",
    word: "まかる",
    sentence: "用向きありて、来月都へまかるつもりなり。",
    targetText: "まかる",
    correct: "（へりくだって）参る・行く",
    wrongs: ["退出して帰る", "走って駆けつける", "曲がってそれる"],
    explanation: "「都へ」という行き先が示されているので、行く・参るの意だと決まります。「まかる」自体には貴人の前から退出する意もあり、「まかづ」にも参る意があります。両語とも両義を持つため、語の違いではなく、行き先「都へ」があるかどうかという文脈で判定します。",
  },
  {
    id: "w46",
    word: "まかづ",
    sentence: "役目を終へて、御前をまかづ。",
    targetText: "まかづ",
    correct: "退出する（おいとまする）",
    wrongs: ["参上する", "通り過ぎる", "向かって進む"],
    explanation: "「御前を」という離れる場所と、役目を終えたという文脈から、貴人の前から下がる退出の意だと決まります。「まかづ」自体には参る意もあり、「まかる」にも退出の意があります。両語とも両義を持つため、語の違いではなく、「御前を」という出発点と文脈で判定します。",
  },
  {
    id: "w47",
    word: "なげく",
    sentence: "友の死をなげきて、涙止まらず。",
    targetText: "なげき",
    correct: "悲しんで嘆いて",
    wrongs: ["投げ捨てて", "長く息を吐いてだけ", "訴え出て"],
    explanation: "友人の死と止まらない涙という文脈なので、悲しみ嘆く意だと決まります。現代語の「投げる」と結びつける誤答とは無関係で、「嘆く」は悲嘆そのものを表します。",
  },
  {
    id: "w48",
    word: "やがて",
    sentence: "衣も着替えず、やがて出で立ちぬ。",
    targetText: "やがて",
    correct: "そのまま（の姿で）",
    wrongs: ["しばらくたって", "ゆっくりと時間をかけて", "とうとう最後に"],
    explanation: "「衣も着替えず」と直前にあり、その状態のまま出発したという文脈なので、「そのまま」の意だと決まります。現代語の「やがて（しばらくして）」という誤答とはずれがあり、古文では「そのまま・すぐに」の意が中心的です。",
  },
  {
    id: "w49",
    word: "なべて",
    sentence: "都の人々、なべて花見に集ふ。",
    targetText: "なべて",
    correct: "すべて・一様に",
    wrongs: ["並べて順に", "特別に選ばれて", "わずかに少し"],
    explanation: "都の人々が残らず集まる場面なので、すべて・一様にの意だと決まります。「並べる」という動詞の連想による誤答とは無関係な副詞で、全体をまとめて言う語です。",
  },
  {
    id: "w50",
    word: "よも",
    sentence: "親しき友が裏切ること、よもあらじ。",
    targetText: "よも",
    correct: "まさか〜ないだろう（打消推量と呼応）",
    wrongs: ["決して〜ない（強い打消）", "四方どこでも", "夜通しずっと"],
    explanation: "文末の打消推量「あらじ」と呼応しているのが決め手で、「まさか裏切ることはないだろう」という意になります。強い断定の打消「え・決して」と呼応する誤答系統とは違い、「よも」は推量の助動詞・打消推量と呼応します。",
  },
  {
    id: "w51",
    word: "え",
    sentence: "あまりに悲しくて、え言はず。",
    targetText: "え言は",
    correct: "（悲しくて）言うことができない",
    wrongs: ["決して言わない", "なんと言っても言わない", "ああ言わない"],
    explanation: "副詞「え」は打消の「ず」と呼応して「〜できない」という不可能を表します。悲しみのあまり言葉が出ない文脈で決まります。単なる打消と取る誤答「決して言わない」では、意志ではなく能力・状況の不可能である点を取り違えます。",
  },
  {
    id: "w52",
    word: "さらに",
    sentence: "その事、さらに覚えず。",
    targetText: "さらに",
    correct: "（打消と呼応して）全く〜ない",
    wrongs: ["いっそう強く", "その上に加えて", "再びもう一度"],
    explanation: "文末の打消「ず」と呼応しているのが決め手で、「全く覚えていない」という意になります。現代語の「さらに（いっそう）」という誤答は肯定文での意味で、古文では打消と呼応する用法が頻出します。",
  },
  {
    id: "w53",
    word: "めざまし",
    sentence: "姫君の舞ふ御姿、いとめざまし。",
    targetText: "めざまし",
    correct: "目を見張るほどすばらしい",
    wrongs: ["気にくわなくしゃくだ", "眠気が覚めるほど退屈だ", "恥ずかしくてならない"],
    explanation: "姫君の舞姿への賛辞の文脈なので、目が覚めるほど見事だという意になります。「めざまし」には対照的に「気にくわない」の意もあり、人への不平の文脈ならそちらになりますが、ここは舞の美しさを褒める場面なので誤答にはなりません。",
  },
  {
    id: "w54",
    word: "かたじけなし",
    sentence: "帝より賜はり物して、かたじけなしと拝す。",
    targetText: "かたじけなし",
    correct: "ありがたく恐れ多い",
    wrongs: ["形が整わず見苦しい", "片時も忘れられない", "固く遠慮がちだ"],
    explanation: "帝から物を賜って拝むという文脈なので、ありがたさと恐れ多さの意だと決まります。「形」という字の連想による誤答とは無関係で、身に余る恩恵への畏れを表す語です。",
  },
  {
    id: "w55",
    word: "こちたし",
    sentence: "こちたき挨拶長くて、人々少し退きぬ。",
    targetText: "こちたき",
    correct: "仰々しくわざとらしい",
    wrongs: ["東風のように爽やかな", "固くかしこまった", "小さく控えめな"],
    explanation: "挨拶が長くて周囲が引いてしまう文脈なので、大げさでわざとらしい意だと決まります。「東風（こち）」という誤答は音の連想によるもので、風とは無関係に、言動の仰々しさを表します。",
  },
  {
    id: "w56",
    word: "すずろなり",
    sentence: "すずろに心騒ぎて、今宵は眠れず。",
    targetText: "すずろに",
    correct: "何となく・わけもなく",
    wrongs: ["涼やかに爽やかに", "静かにひっそりと", "鈴の音のように澄んで"],
    explanation: "眠れない理由が自分でも分からない胸騒ぎの文脈なので、わけもなく・何となくの意だと決まります。「涼しい」という誤答は音の連想によるもので、気分の落ち着かなさを表す語です。",
  },
  {
    id: "w57",
    word: "たまさか",
    sentence: "たまさか旧友に都にて出会ふ。",
    targetText: "たまさか",
    correct: "たまたま・偶然に",
    wrongs: ["時々しばしば", "必ずきっと", "玉のように美しく"],
    explanation: "予期せぬ再会の場面なので、偶然にという意だと決まります。「時々」という頻度の誤答とは違い、「たまさか」は滅多にない出来事がたまたま起きたことを表します。",
  },
  {
    id: "w58",
    word: "いかで",
    sentence: "いかでこの難き歌の心を知らむ。",
    targetText: "いかで",
    correct: "どうやって・どうして",
    wrongs: ["いかがでしょうかと丁寧に", "ぜひとも必ず", "いかにも確かに"],
    explanation: "難しい歌の意味を知る手段を問う疑問の文脈で、文末の推量「む」とも響き合って「どうして知ることができようか」という意になります。「ぜひとも」という願望の意で使う誤答パターンとは、ここが疑問文である点で区別します。",
  },
  {
    id: "w59",
    word: "かねて",
    sentence: "かねて聞きし噂、まことなりけり。",
    targetText: "かねて",
    correct: "以前から・あらかじめ",
    wrongs: ["金を使って", "兼ねて同時にもう一つ", "ついでにそのまま"],
    explanation: "以前から聞いていた噂が本当だったと分かる文脈なので、あらかじめ・以前からの意だと決まります。「兼ねる」という誤答は現代語の「勉強と部活を兼ねる」の連想で、古文の副詞「かねて」は時間の先行を表します。",
  },
  {
    id: "w60",
    word: "さながら",
    sentence: "雪積もりし山、さながら白き絵のごとし。",
    targetText: "さながら",
    correct: "まるで",
    wrongs: ["しかしながら", "その頃ちょうど", "静かにそっと"],
    explanation: "「〜のごとし」という比喩の言い方と組み合わさり、まるで絵のようだという文脈で意味が決まります。現代語の接続詞「しかしながら」と取り違える誤答とは違い、古文の「さながら」は「まるで・そのまま」を表す副詞です。",
  },
  {
    id: "w61",
    word: "あながち",
    sentence: "その行ひ、あながち責むべきにあらず。",
    targetText: "あながち",
    correct: "一概に",
    wrongs: ["穴が空くほどじっと", "決して絶対に", "無理やり強引にだけ"],
    explanation: "「責むべきにあらず」という部分否定と組み合わさり、一概に責めるべきではないという文脈で意味が決まります。「あながち」には無理にの意もありますが、ここは否定と響き合う「一概に」の用法で、誤答「決して絶対に」では文意が強すぎます。",
  },
  {
    id: "w62",
    word: "つとめて",
    sentence: "冬のつとめて、霜白く降りたり。",
    targetText: "つとめて",
    correct: "早朝",
    wrongs: ["熱心に努めて", "勤め先へ出かけて", "包んで隠して"],
    explanation: "「冬のつとめて」は枕草子でも知られる言い方で、夜明けの早朝を指します。季節と霜の描写から時刻を表す名詞だと決まります。現代語の動詞「努める」と取る誤答とは品詞からして異なります。",
  },
];

// ============================================================
// 助詞問題（助詞の陣）
// 実文中の助詞の働きを問う。格助詞・接続助詞・係助詞・終助詞・副助詞の
// 5分類から各4問、計20問。結びの活用形や呼応で判定が1つに決まる例のみ。
// ============================================================
export const PARTICLE_PROBLEMS: ParticleProblem[] = [
  // ── 格助詞（4問） ──
  {
    id: "p01",
    source: "例文",
    sentence: "翁が、山にて光る竹を見つけたり。",
    particle: "が",
    targetText: "翁が",
    category: "格助詞",
    correct: "主語を示す格助詞（主格）",
    wrongs: ["逆接を示す接続助詞", "願望を表す終助詞", "体言を修飾する格助詞（連体修飾格）"],
    explanation: "文の主語「翁」を示しているので、「が」は主格の格助詞です。「が」には逆接の接続助詞の用法もありますが、ここでは体言に付いて主語を作っています。",
  },
  {
    id: "p02",
    source: "例文",
    sentence: "姫、月の光を見て、歌を詠む。",
    particle: "を",
    targetText: "歌を",
    category: "格助詞",
    correct: "動作の対象を示す格助詞（目的格）",
    wrongs: ["主語を示す格助詞（主格）", "場所の通過を示す格助詞", "詠嘆を表す間投助詞"],
    explanation: "「詠む」という動作の対象が「歌」であることを示す目的格の「を」です。「を」には通過する場所を示す用法もありますが、ここでは対象を示しています。",
  },
  {
    id: "p03",
    source: "平家物語（祇園精舎）",
    sentence: "祇園精舎の鐘の声、諸行無常の響きあり。",
    particle: "の",
    targetText: "精舎の",
    category: "格助詞",
    correct: "体言を修飾する格助詞（連体修飾格）",
    wrongs: ["主語を示す格助詞（主格）", "引用を示す格助詞", "理由を示す接続助詞"],
    explanation: "「祇園精舎」が後ろの体言「鐘」を修飾しているので、「の」は連体修飾格の格助詞です。",
  },
  {
    id: "p04",
    source: "方丈記（冒頭）",
    sentence: "淀みに浮かぶうたかたは、かつ消えかつ結びて、久しくとどまりたるためしなし。",
    particle: "に",
    targetText: "淀みに",
    category: "格助詞",
    correct: "存在する場所を示す格助詞",
    wrongs: ["動作の時を示す格助詞", "動作の目的を示す格助詞", "比較の基準を示す格助詞"],
    explanation: "泡が浮かんでいる場所が「淀み」であることを示す、場所の格助詞「に」です。「に」には時・目的・比較の基準などの用法もありますが、ここでは存在の場所です。",
  },
  // ── 接続助詞（4問） ──
  {
    id: "p05",
    source: "例文",
    sentence: "花咲けば、鳥鳴く。",
    particle: "ば",
    targetText: "咲けば",
    category: "接続助詞",
    correct: "順接の確定条件（〜ので・〜すると）",
    wrongs: ["順接の仮定条件（〜たら）", "逆接の確定条件（〜けれども）", "単なる継起の接続（〜て）"],
    explanation: "「ば」が已然形「咲け」に付いているので、すでに確定した条件としてつなぐ順接の確定条件です。未然形に付けば仮定条件になります。",
  },
  {
    id: "p06",
    source: "例文",
    sentence: "雪降れど、旅人は出で立ちぬ。",
    particle: "ど",
    targetText: "降れど",
    category: "接続助詞",
    correct: "逆接の確定条件（〜けれども）",
    wrongs: ["順接の確定条件（〜ので）", "順接の仮定条件（〜たら）", "逆接の仮定条件（〜ても）"],
    explanation: "「ど」が已然形「降れ」に付いているので、確定した事実に対する逆接です。「ど・ども」は已然形にしか付きません。仮定の逆接（〜ても）は、終止形に付く「とも」で表します。",
  },
  {
    id: "p07",
    source: "例文",
    sentence: "翁、光る竹を取りて、家に帰りぬ。",
    particle: "て",
    targetText: "取りて",
    category: "接続助詞",
    correct: "動作の連続・継起を示す接続助詞（〜て）",
    wrongs: ["逆接を示す接続助詞（〜けれども）", "理由を示す接続助詞（〜ので）", "並立を示す接続助詞（〜たり）"],
    explanation: "竹を取る動作の後に家に帰る動作が続く、時間の順序に沿った継起の接続です。",
  },
  {
    id: "p08",
    source: "例文",
    sentence: "月を眺めつつ、歌を詠む。",
    particle: "つつ",
    targetText: "眺めつつ",
    category: "接続助詞",
    correct: "動作の同時進行を示す接続助詞（〜しながら）",
    wrongs: ["逆接を示す接続助詞（〜けれども）", "順接の仮定条件を示す接続助詞（〜たら）", "詠嘆を表す終助詞"],
    explanation: "「つつ」が連用形に付いて、月を眺める動作と歌を詠む動作が同時に行われることを示しています。",
  },
  // ── 係助詞（4問） ──
  {
    id: "p09",
    source: "例文",
    sentence: "この山ぞ、いと高き。",
    particle: "ぞ",
    targetText: "この山ぞ",
    category: "係助詞",
    correct: "強意を示す係助詞（結びは連体形）",
    wrongs: ["疑問を示す係助詞（結びは連体形）", "逆接を示す接続助詞", "詠嘆を表す終助詞"],
    explanation: "「ぞ」は強意の係助詞で、結びは連体形になります。文末の「高き」が形容詞「高し」の連体形で結んでいます。",
  },
  {
    id: "p10",
    source: "徒然草（序段）",
    sentence: "つれづれなるままに、日暮らし、硯に向かひて、心にうつりゆくよしなしごとを、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。",
    particle: "こそ",
    targetText: "あやしうこそ",
    category: "係助詞",
    correct: "強意を示す係助詞（結びは已然形）",
    wrongs: ["疑問を示す係助詞（結びは連体形）", "願望を表す終助詞", "逆接を示す接続助詞"],
    explanation: "「こそ」は強意の係助詞で、結びは已然形になる唯一の係助詞です。文末の「ものぐるほしけれ」が已然形で結んでいます。",
  },
  {
    id: "p11",
    source: "徒然草（花は盛りに）",
    sentence: "花は盛りに、月は隈なきをのみ見るものかは。",
    particle: "か",
    targetText: "ものかは",
    category: "係助詞",
    correct: "反語を示す係助詞（結びは連体形）",
    wrongs: ["強意を示す係助詞（結びは已然形）", "詠嘆を表す終助詞", "主語を示す格助詞"],
    explanation: "「か」は疑問・反語の係助詞で、結びは連体形です。ここでは「見るものだろうか、いやそうではない」という反語を表し、「見る」が連体形で「もの」にかかって結んでいます。",
  },
  {
    id: "p12",
    source: "例文",
    sentence: "翁なむ、昔を忘るる。",
    particle: "なむ",
    targetText: "翁なむ",
    category: "係助詞",
    correct: "強意を示す係助詞（結びは連体形）",
    wrongs: ["疑問を示す係助詞（結びは連体形）", "禁止を表す終助詞", "丁寧を表す助動詞"],
    explanation: "「なむ」は強意の係助詞で、結びは連体形です。文末の「忘るる」が下二段動詞「忘る」の連体形で結んでいます。推量の助動詞「む」とは別物です。",
  },
  // ── 終助詞（4問） ──
  {
    id: "p13",
    source: "例文",
    sentence: "都の桜を見ばや。",
    particle: "ばや",
    targetText: "見ばや",
    category: "終助詞",
    correct: "自分の願望を表す終助詞（〜たい）",
    wrongs: ["他者への願望を表す終助詞（〜てほしい）", "詠嘆を表す終助詞（〜だなあ）", "疑問を表す終助詞"],
    explanation: "「ばや」は動詞の未然形に付いて、話し手自身の願望「〜したい」を表す終助詞です。",
  },
  {
    id: "p14",
    source: "例文",
    sentence: "故郷の山、懐かしきかな。",
    particle: "かな",
    targetText: "懐かしきかな",
    category: "終助詞",
    correct: "詠嘆を表す終助詞（〜だなあ）",
    wrongs: ["疑問を表す係助詞", "願望を表す終助詞（〜たい）", "禁止を表す終助詞（〜するな）"],
    explanation: "文末の「かな」は、しみじみとした感動を表す詠嘆の終助詞です。疑問の係助詞「か」とは位置も働きも異なります。",
  },
  {
    id: "p15",
    source: "例文",
    sentence: "春の花を、一目見てしがな。",
    particle: "がな",
    targetText: "見てしがな",
    category: "終助詞",
    correct: "願望を表す終助詞（〜たいなあ）",
    wrongs: ["詠嘆だけを表す終助詞（〜だなあ）", "疑問を表す係助詞", "打消を表す助動詞"],
    explanation: "「てしがな」は「〜したいなあ」という願望を表す、決まった形の終助詞です。",
  },
  {
    id: "p16",
    source: "例文",
    sentence: "翁、「心配すな。必ず勝つぞ」と言ふ。",
    particle: "ぞ",
    targetText: "勝つぞ",
    category: "終助詞",
    correct: "文末で強く念押しする終助詞",
    wrongs: ["文中で結びを導く係助詞", "疑問を表す終助詞", "願望を表す終助詞"],
    explanation: "文末にある「ぞ」は、文を強く言い切って念押しする終助詞です。文中にあって結びを導く係助詞の「ぞ」とは、位置で見分けます。",
  },
  // ── 副助詞（4問） ──
  {
    id: "p17",
    source: "例文",
    sentence: "酒を少しのみ飲む。",
    particle: "のみ",
    targetText: "少しのみ",
    category: "副助詞",
    correct: "限定を示す副助詞（〜だけ）",
    wrongs: ["添加を示す副助詞（〜までも）", "程度の甚だしさだけを示す副助詞", "逆接を示す接続助詞"],
    explanation: "「のみ」は「少し」だけに限るという限定を表す副助詞です。",
  },
  {
    id: "p18",
    source: "例文",
    sentence: "泣くばかりにて、物を言はず。",
    particle: "ばかり",
    targetText: "泣くばかり",
    category: "副助詞",
    correct: "限定を示す副助詞（〜ばかり）",
    wrongs: ["理由を示す格助詞", "逆接を示す接続助詞", "願望を表す終助詞"],
    explanation: "「ばかり」は、泣くことだけに限られているという限定を表す副助詞です。「泣いてばかりいて」という使い方です。",
  },
  {
    id: "p19",
    source: "枕草子（秋は夕暮れ）",
    sentence: "秋は夕暮れ。夕日のさして山の端いと近うなりたるに、烏の寝所へ行くとて、三つ四つ、二つ三つなど飛び急ぐさへあはれなり。",
    particle: "さへ",
    targetText: "飛び急ぐさへ",
    category: "副助詞",
    correct: "添加・例示を示す副助詞（〜までも・〜さえ）",
    wrongs: ["限定を示す副助詞（〜だけ）", "打消と呼応する副助詞（〜さえ〜ない）", "疑問を示す係助詞"],
    explanation: "「さへ」は、烏が飛び急ぐ様子までもが趣深い一例として加わる、添加・例示の副助詞です。肯定文で使われているので、打消と呼応する用法ではありません。",
  },
  {
    id: "p20",
    source: "例文",
    sentence: "その名をだに聞かず。",
    particle: "だに",
    targetText: "名をだに",
    category: "副助詞",
    correct: "打消と呼応して最小限の例示を示す副助詞（〜さえ）",
    wrongs: ["添加を示す副助詞（〜までも）", "限定を示す副助詞（〜だけ）", "順接を示す接続助詞"],
    explanation: "「だに」は打消の「ず」と呼応して、「名前さえ聞かない」という最小限の例示を表す副助詞です。",
  },
  // ── 格助詞（+4件） ──
  {
    id: "p21",
    source: "例文",
    sentence: "翁、都へ帰りぬ。",
    particle: "へ",
    targetText: "都へ",
    category: "格助詞",
    correct: "動作の向かう方向を示す格助詞",
    wrongs: ["動作の起点を示す格助詞", "動作の目的を示す格助詞", "主語を示す格助詞（主格）"],
    explanation: "「帰る」という移動の動作が向かう先が「都」であることを示す、方向の格助詞です。出発点を示す「より」とは反対の働きで、ここでは到着の向きを表しています。",
  },
  {
    id: "p22",
    source: "例文",
    sentence: "卯の時より、出で立ちぬ。",
    particle: "より",
    targetText: "時より",
    category: "格助詞",
    correct: "動作の起点（出発点）を示す格助詞",
    wrongs: ["比較の基準を示す格助詞", "動作の向かう方向を示す格助詞", "理由を示す接続助詞"],
    explanation: "出発の時刻を起点として示しているので、起点の格助詞です。「より」には比較の基準の用法もありますが、ここでは比べる相手がなく、動作の始まる時点を示しています。",
  },
  {
    id: "p23",
    source: "例文",
    sentence: "友と都へ行きて、花を見る。",
    particle: "と",
    targetText: "友と",
    category: "格助詞",
    correct: "動作を共にする相手を示す格助詞（共同）",
    wrongs: ["発言を引用する格助詞", "変化の結果を示す格助詞", "主語を示す格助詞（主格）"],
    explanation: "「行く」という動作を一緒にする相手が「友」であることを示す、共同の格助詞です。言葉を引用する「と」は発言内容の後ろに付きますが、ここでは人物に付いています。",
  },
  {
    id: "p24",
    source: "例文",
    sentence: "翁、「竹の中に姫あり」と言ふ。",
    particle: "と",
    targetText: "あり」と",
    category: "格助詞",
    correct: "発言・思考の内容を引用する格助詞",
    wrongs: ["動作を共にする相手を示す格助詞", "変化の結果を示す格助詞", "並立を示す格助詞（〜と〜と）"],
    explanation: "「言ふ」という発言の動詞に先立ち、発言内容全体を受ける引用の格助詞です。人や物に付いて共同や並立を表す用法とは、引用句を受けている点で区別します。",
  },
  // ── 接続助詞（+4件） ──
  {
    id: "p25",
    source: "例文",
    sentence: "桜咲くに、鶯鳴きぬ。",
    particle: "に",
    targetText: "咲くに",
    category: "接続助詞",
    correct: "順接につなぐ接続助詞（〜すると・〜ので）",
    wrongs: ["存在する場所を示す格助詞", "動作の時を示す格助詞", "動作の目的を示す格助詞"],
    explanation: "「に」は活用語の連体形に付いて、順接の確定条件を表す接続助詞です。「咲く」は四段動詞「咲く」の連体形（終止形と同形）で、桜が咲いたので・咲くと、という理由・契機を表します。連用形「咲き」に付く「に」は格助詞の扱いになるため、接続助詞の問題では連体形を用います。",
  },
  {
    id: "p26",
    source: "例文",
    sentence: "道遠きを、朝早く出で立ちぬ。",
    particle: "を",
    targetText: "遠きを",
    category: "接続助詞",
    correct: "理由を示す接続助詞（〜ので）",
    wrongs: ["動作の対象を示す格助詞（目的格）", "通過する場所を示す格助詞", "詠嘆を表す間投助詞"],
    explanation: "形容詞の連体形「遠き」に付いて、道が遠いことを理由として示す接続助詞です。名詞に付いて動作の対象を示す目的格の「を」とは、活用語の連体形に付いている点で区別します。",
  },
  {
    id: "p27",
    source: "例文",
    sentence: "雪降るとも、峠を越えむ。",
    particle: "とも",
    targetText: "降るとも",
    category: "接続助詞",
    correct: "仮定の逆接を示す接続助詞（〜ても）",
    wrongs: ["動作を共にする相手を示す格助詞", "発言を引用する格助詞", "確定した逆接を示す接続助詞（〜けれども）"],
    explanation: "まだ降っていない雪を仮定して、それでも峠を越えようという意志が続くので、仮定の逆接です。確定した事実に対する逆接の「ど」とは、条件が未実現である点で区別します。",
  },
  {
    id: "p28",
    source: "例文",
    sentence: "待ちて待てども、友来ず。",
    particle: "ども",
    targetText: "待てども",
    category: "接続助詞",
    correct: "確定した逆接を示す接続助詞（〜けれども）",
    wrongs: ["仮定の逆接を示す接続助詞（〜ても）", "順接の確定条件を示す接続助詞（〜ので）", "動作の連続を示す接続助詞（〜て）"],
    explanation: "「ども」は已然形「待て」に付く接続助詞で、逆接の確定条件（〜けれども）を表します。実際に待ち続けたという事実を前提に、期待に反して友が来ないことを表します。仮定の逆接（〜ても）は終止形に付く「とも」が担います。「いくら〜ても」と訳せそうでも、已然形接続である以上、確定として判定します。",
  },
  // ── 係助詞（+4件） ──
  {
    id: "p29",
    source: "例文",
    sentence: "我は都人なり。",
    particle: "は",
    targetText: "我は",
    category: "係助詞",
    correct: "主題を提示する係助詞",
    wrongs: ["強意を示す係助詞（結びは已然形）", "疑問を示す係助詞（結びは連体形）", "主語を示す格助詞（主格）"],
    explanation: "「は」は文の主題として「我」を取り立てて提示する係助詞です。結びを強意の「こそ」のように已然形に変える働きはなく、文末は終止形で終わっています。主格の格助詞「が」とは、主題提示である点で区別するのが高校古文の扱いです。",
  },
  {
    id: "p30",
    source: "例文",
    sentence: "庭に桜も、梅も咲きたり。",
    particle: "も",
    targetText: "梅も",
    category: "係助詞",
    correct: "同類を並べ立てる係助詞（並立提示）",
    wrongs: ["強意を示す係助詞（結びは連体形）", "疑問を示す係助詞", "詠嘆を表す終助詞"],
    explanation: "「桜も〜梅も」と同類のものを並べて示しているので、並立提示の係助詞です。「も」自体は結びの活用形を変えず、文末は通常の形で結ばれています。",
  },
  {
    id: "p31",
    source: "例文",
    sentence: "「君や来る」と、里人に問ふ。",
    particle: "や",
    targetText: "君や",
    category: "係助詞",
    correct: "疑問を示す係助詞（結びは連体形）",
    wrongs: ["詠嘆を示す間投助詞", "強意を示す係助詞（結びは已然形）", "並立を示す格助詞"],
    explanation: "「や」は疑問の係助詞で、結びは連体形です。カ変動詞「来（く）」の連体形「来る」で結んでおり、「あなたは来るのだろうか」と尋ねる文です。文節の切れ目で呼びかけ・詠嘆を添える間投助詞の「や」とは、結びを取る点で区別します。",
  },
  {
    id: "p32",
    source: "例文",
    sentence: "君の心こそ、まことに頼もしけれ。",
    particle: "こそ",
    targetText: "心こそ",
    category: "係助詞",
    correct: "強意を示す係助詞（結びは已然形）",
    wrongs: ["強意を示す係助詞（結びは連体形）", "疑問を示す係助詞（結びは連体形）", "理由を示す接続助詞"],
    explanation: "「こそ」の結びは已然形です。文末の「頼もしけれ」がシク活用形容詞「頼もし」の本活用・已然形で結んでいます。カリ活用の「頼もしかれ」は命令形であり（カリ活用に已然形はありません。「多し」の「多かれ」は例外）、こそ の結びにはなりません。",
  },
  // ── 終助詞（+4件） ──
  {
    id: "p33",
    source: "例文",
    sentence: "明日は必ず晴るるかし。",
    particle: "かし",
    targetText: "晴るるかし",
    category: "終助詞",
    correct: "強く念押しする終助詞",
    wrongs: ["疑問を表す終助詞", "願望を表す終助詞（〜たいなあ）", "詠嘆を表す終助詞（〜だなあ）"],
    explanation: "文末の「かし」は「きっと〜だよ」と自分の判断を強く念押しする終助詞です。疑問文ではないので、疑問の助詞とは区別します。",
  },
  {
    id: "p34",
    source: "例文",
    sentence: "故郷よりの便りもがな。",
    particle: "もがな",
    targetText: "便りもがな",
    category: "終助詞",
    correct: "願望を表す終助詞（〜がほしい・〜だといいなあ）",
    wrongs: ["詠嘆を表す終助詞（〜だなあ）", "念押しを表す終助詞", "疑問を表す終助詞"],
    explanation: "体言「便り」に付いて、手紙が欲しいという願望を表す終助詞です。「〜もがな」は、まだ実現していないものを望む言い方です。",
  },
  {
    id: "p35",
    source: "例文",
    sentence: "故郷の山、懐かしきかも。",
    particle: "かも",
    targetText: "懐かしきかも",
    category: "終助詞",
    correct: "詠嘆を表す終助詞（〜だなあ）",
    wrongs: ["疑問を表す係助詞", "願望を表す終助詞", "念押しを表す終助詞"],
    explanation: "文末の「かも」は、懐かしさの感動を表す詠嘆の終助詞で、和歌の文末によく現れます。疑問の係助詞「か」とは、文末にある点と感動を表す点で区別します。",
  },
  {
    id: "p36",
    source: "例文",
    sentence: "この滝の音は、都にて名高きものなりかし。",
    particle: "かし",
    targetText: "なりかし",
    category: "終助詞",
    correct: "詠嘆・念押しを表す終助詞（〜だなあ・〜よ）",
    wrongs: ["願望を表す終助詞（〜たい）", "疑問を示す係助詞", "禁止を表す終助詞（〜するな）"],
    explanation: "文末の「かし」は、断定の助動詞「なり」の終止形に付いて、感嘆や念押し（〜だなあ・〜よ）を表す終助詞です。文中にあって結びを導く係助詞とは異なり、文末で文を閉じます。",
  },
  // ── 副助詞（+4件） ──
  {
    id: "p37",
    source: "例文",
    sentence: "庭に桜など咲きたり。",
    particle: "など",
    targetText: "桜など",
    category: "副助詞",
    correct: "例示を示す副助詞（〜など）",
    wrongs: ["限定を示す副助詞（〜だけ）", "添加を示す副助詞（〜までも）", "概算を示す副助詞（およそ〜）"],
    explanation: "「桜など」は、桜を一例として挙げ、他にも花があることをほのめかす例示の副助詞です。「だけ」と言い切る限定とは違い、例を挙げる働きです。",
  },
  {
    id: "p38",
    source: "例文",
    sentence: "この歌の心は、幼き子すら知ることなり。",
    particle: "すら",
    targetText: "子すら",
    category: "副助詞",
    correct: "最小限の例示を示す副助詞（〜さえ）",
    wrongs: ["限定を示す副助詞（〜だけ）", "単なる例示を示す副助詞（〜など）", "添加を示す副助詞（〜までも）"],
    explanation: "「すら」は、幼い子でさえ知っている、と最も意外な最小限の例を挙げて他を類推させる副助詞です。「など」の通常の例示より、意外性が強い点で区別します。",
  },
  {
    id: "p39",
    source: "例文",
    sentence: "その話を聞きて、子どもまで泣きぬ。",
    particle: "まで",
    targetText: "子どもまで",
    category: "副助詞",
    correct: "添加を示す副助詞（〜までも）",
    wrongs: ["到達点を示す格助詞", "限定を示す副助詞（〜だけ）", "理由を示す接続助詞"],
    explanation: "感情の及ぶ範囲が子どもにまで広がったという添加の副助詞です。場所の到達点を示す格助詞なら移動の文脈になりますが、ここでは泣く人の範囲の広がりを表しています。",
  },
  {
    id: "p40",
    source: "例文",
    sentence: "京までは三日ばかりの道なり。",
    particle: "ばかり",
    targetText: "三日ばかり",
    category: "副助詞",
    correct: "概算・程度を示す副助詞（およそ〜）",
    wrongs: ["限定を示す副助詞（〜ばかり）", "理由を示す格助詞", "添加を示す副助詞（〜までも）"],
    explanation: "数量「三日」に付いているので、「ばかり」はおよその量を示す概算の用法です。動作の繰り返しを限定する「泣くばかり」の「ばかり」とは、数量に付く点で区別します。",
  },
];
