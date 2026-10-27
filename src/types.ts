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

export type ScreenState = 'title' | 'battle' | 'result';
export type GameMode = 'story' | 'endless' | 'timeattack' | 'daily' | 'suddendeath';

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
}
