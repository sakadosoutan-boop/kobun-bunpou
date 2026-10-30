export interface VerbProblem {
  word: string;
  form: string;
  targetConn: string;
}

export interface AuxiliaryCard {
  name: string;
  conn: string;
  mean: string;
  conjugationType?: string;
  example?: string;
}

export interface ChoiceOption {
  text: string;
  sub: string;
  isCorrect: boolean;
  conn?: string;
}

export interface KakariChoice {
  text: string;
  sub: string;
}

export interface KakariProblem {
  particle: string;
  targetForm: string;
  prompt: string;
  correct: KakariChoice;
  wrongs: KakariChoice[];
}

/** ボスの弱点分野（本編・ボスラッシュで加重出題＆ダメージ1.5倍）。SessionQuestion の kind と対応する */
export type WeaknessKind = 'verb' | 'kakari' | 'keigo' | 'word' | 'particle' | 'conjugation';

export interface Stage {
  name: string;
  emoji: string;
  image: string;
  hp: number;
  label: string;
  desc: string;
  weakness: WeaknessKind;
  weaknessLabel: string;
}

export interface MistakeItem {
  id: string;
  targetWord: string;
  targetForm: string;
  chosenText: string;
  chosenConn?: string;
  correctAnswer: string;
  explanation: string;
  isKakari: boolean;
}

export interface GrammarEntry {
  name: string;
  conn: string;
  meanings: string[];
  conjugation: string;
  tip: string;
  example: string;
}

/** 意味識別問題（言霊の真価）：例文中の助動詞の意味を問う */
export interface MeaningProblem {
  id: string;
  /** 提示する古文の例文 */
  sentence: string;
  /** 対象の助動詞（表示名。例: む、べし、けり） */
  auxiliary: string;
  /** 文中で問う箇所の表記（例: 行かむ） */
  targetText: string;
  /** 正解の意味ラベル */
  correct: string;
  /** 誤答の意味ラベル（3つ） */
  wrongs: string[];
  /** 正解後の短い解説 */
  explanation: string;
}

/** 例文読解問題（古文の間）：古典の実文から文法を問う */
export interface ReadingProblem {
  id: string;
  /** 出典名（例: 徒然草） */
  source: string;
  /** 古典の一節 */
  text: string;
  /** 現代語訳 */
  translation: string;
  /** 設問文 */
  question: string;
  /** 問いの対象となる語句 */
  target: string;
  /** 正解ラベル */
  correct: string;
  /** 誤答ラベル（3つ） */
  wrongs: string[];
  /** 解説 */
  explanation: string;
}

/** 活用形トレーニング問題（型稽古）：動詞の指定された活用形を問う */
export interface ConjugationProblem {
  id: string;
  /** 動詞の基本形表示（例: 書く） */
  verb: string;
  /** 活用の種類（例: 四段） */
  className: string;
  /** 問う活用形（未然形・連用形・終止形・連体形・已然形・命令形） */
  targetForm: string;
  /** 正しい活用形 */
  correct: string;
  /** 誤答の活用形（3つ） */
  wrongs: string[];
  /** 解説 */
  explanation: string;
}

/** 敬意の方向（敬語モードの4択） */
export type KeigoDirection = 'sonkei' | 'kenjou' | 'teinei' | 'nijuu';

/** 敬語問題（敬語モード）：実文中の敬語表現について「敬意の方向」を問う */
export interface KeigoProblem {
  id: string;
  /** 出典名（例: 源氏物語）。例文の場合は「例文」等と明記する */
  source: string;
  /** 提示する古典の文 */
  sentence: string;
  /** 問いの対象となる敬語表現（sentence 内に含まれる文字列。ハイライト表示される） */
  expression: string;
  /** 人物関係のヒント（例: 語り手 → 帝） */
  relation: string;
  /** 正解の敬意の方向 */
  direction: KeigoDirection;
  /** 解答後の解説（誰が・誰に対しての敬意か） */
  explanation: string;
}

/** 古文単語問題（単語の陣）：文脈文中の古文単語の意味を問う */
export interface WordProblem {
  id: string;
  /** 対象の古文単語（基本形の表記。例: あらまほし） */
  word: string;
  /** 文脈を特定するための短い古文の文 */
  sentence: string;
  /** 文中で問う箇所の表記（活用した形のまま。例: あらまほしけれ） */
  targetText: string;
  /** 正解の現代語訳 */
  correct: string;
  /** 誤答の現代語訳（3つ） */
  wrongs: string[];
  /** 正解後の短い解説（文脈から意味が決まる根拠を含む） */
  explanation: string;
}

/** 助詞の働きの5分類（助詞問題の分類フィールド） */
export type ParticleCategory = '格助詞' | '接続助詞' | '係助詞' | '終助詞' | '副助詞';

/** 助詞問題（助詞の陣）：実文中の助詞の働きを問う */
export interface ParticleProblem {
  id: string;
  /** 出典名（例: 方丈記）。例文の場合は「例文」と明記する */
  source: string;
  /** 提示する古文の文 */
  sentence: string;
  /** 対象の助詞（例: が、こそ、ばや） */
  particle: string;
  /** 文中で問う箇所の表記（例: 翁が、ものぐるほしけれ） */
  targetText: string;
  /** 助詞の5分類 */
  category: ParticleCategory;
  /** 正解の働きのラベル */
  correct: string;
  /** 誤答の働きのラベル（3つ） */
  wrongs: string[];
  /** 解説（働きが決まる根拠・係り結びの結び等を含む） */
  explanation: string;
}

/**
 * 週間ミッションの状態。
 * weekKey（その週の月曜の日付キー）が変わると自動で作り直される。
 */
export interface WeeklyMissionState {
  /** 対象週の月曜 'YYYY-MM-DD' */
  weekKey: string;
  /** 今週のミッションID（3件） */
  missionIds: string[];
  /** ミッションIDごとの目標値 */
  targets: Record<string, number>;
  /** ミッションIDごとの進捗 */
  progress: Record<string, number>;
  /** 達成済み（報酬付与済み）のミッションID */
  claimed: string[];
}

/**
 * SRS復習キューの項目（怨念回収戦）。
 * 誤答した問題を key で識別し、正解を重ねるごとに次回出題間隔が伸びる。
 */
export interface ReviewQueueItem {
  /**
   * 問題の識別キー。
   * - verb:<動詞表記> / kakari:<係助詞> / meaning:<問題id> / reading:<問題id> / conj:<動詞>:<活用形>
   * - keigo:<問題id> / word:<問題id> / particle:<問題id>
   */
  key: string;
  /** 連続正解レベル（0〜2。次回正解で卒業するのはレベル2） */
  level: number;
  /** 次回出題日 'YYYY-MM-DD'（この日以降に出題対象になる） */
  nextDue: string;
}

export type ScreenState = 'title' | 'battle' | 'result' | 'story';
/**
 * ゲームモード（第5弾で再編）。
 * 独立モードだった meaning / reading / conjugation / timeattack / suddendeath は廃止し、
 * 文法分野モード（verbs / aux / keigo / words / particles）＋ルールバリアントへ移行した。
 * timeAttackHighScore / suddenDeathBest は全体記録としてプロフィールに残る。
 */
export type GameMode =
  | 'story'
  | 'endless'
  | 'daily'
  | 'review'
  | 'bossrush'
  | 'keigo'
  | 'exam'
  | 'verbs'
  | 'aux'
  | 'words'
  | 'particles';

/** 分野モード共通のルールバリアント */
export type RuleVariant = 'normal' | 'timeattack' | 'suddendeath';

export interface CourtRank {
  title: string;
  reqExp: number;
  description: string;
}

export interface PlayerTitle {
  id: string;
  name: string;
  condition: string;
  isUnlocked: boolean;
}

export interface PlayerProfile {
  exp: number;
  storyClears: number;
  endlessHighWave: number;
  timeAttackHighScore: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  cardMastery: Record<string, number>;
  unlockedTitles: string[];
  /** 日課祓い（daily）を最後に完了した日 'YYYY-MM-DD'（未実施なら空文字） */
  dailyLastDate: string;
  /** 日課祓いの連続実施日数 */
  dailyStreak: number;
  /** 斬撃一閃（suddendeath）の最高連続正解数 */
  suddenDeathBest: number;
  /** 怨念回収戦（review）のSRS復習キュー */
  reviewQueue: ReviewQueueItem[];
  /** 週間ミッションの状態 */
  weeklyMissions: WeeklyMissionState;
  /**
   * 昇進試験で実際に保持している位階のインデックス（COURT_RANKS の添字）。
   * EXPは「受験資格」であり、表示上の位階は試験合格で上がる。
   * 旧セーブに無い場合は読み込み時にEXPから導出した位階で初期化される。
   */
  promotedRank: number;
  /**
   * 既読の本編ストーリーシーンのキー一覧（第8弾）。
   * 'prologue' / 'ending' / `act${i}-intro` / `act${i}-boss` / `act${i}-defeat`（i は 0〜5）。
   * 旧セーブに無い場合は読み込み時に空配列で初期化される。
   */
  seenStoryScenes: string[];
}
