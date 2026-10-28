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

export interface Stage {
  name: string;
  emoji: string;
  image: string;
  hp: number;
  label: string;
  desc: string;
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

/**
 * SRS復習キューの項目（怨念回収戦）。
 * 誤答した問題を key で識別し、正解を重ねるごとに次回出題間隔が伸びる。
 */
export interface ReviewQueueItem {
  /**
   * 問題の識別キー。
   * - verb:<動詞表記> / kakari:<係助詞> / meaning:<問題id> / reading:<問題id> / conj:<動詞>:<活用形>
   */
  key: string;
  /** 連続正解レベル（0〜2。次回正解で卒業するのはレベル2） */
  level: number;
  /** 次回出題日 'YYYY-MM-DD'（この日以降に出題対象になる） */
  nextDue: string;
}

export type ScreenState = 'title' | 'battle' | 'result';
export type GameMode =
  | 'story'
  | 'endless'
  | 'timeattack'
  | 'daily'
  | 'suddendeath'
  | 'meaning'
  | 'review'
  | 'reading'
  | 'conjugation'
  | 'bossrush';

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
}
