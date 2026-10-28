import {
  ConjugationProblem,
  GameMode,
  KakariProblem,
  KeigoProblem,
  MeaningProblem,
  ParticleProblem,
  ReadingProblem,
  VerbProblem,
  WordProblem,
} from '../types';
import {
  CONJUGATION_PROBLEMS,
  KAKARI_PROBLEMS,
  KEIGO_PROBLEMS,
  MEANING_PROBLEMS,
  PARTICLE_PROBLEMS,
  VERB_PROBLEMS,
  WORD_PROBLEMS,
} from '../data';

/** 旧・独立モードから移設したセッション出題数（分野・試験・復習で共用） */
export const MEANING_SESSION_COUNT = 10;
export const READING_SESSION_COUNT = 8;
export const CONJUGATION_SESSION_COUNT = 10;
/** 分野モード（通常ルール）の1セッションの出題数 */
export const FIELD_SESSION_COUNT = 10;
/** 分野モード（タイムアタック）の用意する出題数（60秒で解き切れない十分な数） */
export const FIELD_TIMEATTACK_COUNT = 99;

/**
 * セッション型モード（分野モード・怨念回収・昇進試験）で使う
 * 「決まった出題リストを順に解く」ための共通の出題型。
 * 日課祓いの DailyQuestion を一般化したもの。
 * kind の meaning / reading / conjugation は分野・試験・復習で引き続き使う。
 */
export type SessionQuestion =
  | { kind: 'verb'; problem: VerbProblem }
  | { kind: 'kakari'; problem: KakariProblem }
  | { kind: 'meaning'; problem: MeaningProblem }
  | { kind: 'reading'; problem: ReadingProblem }
  | { kind: 'conjugation'; problem: ConjugationProblem }
  | { kind: 'keigo'; problem: KeigoProblem }
  | { kind: 'word'; problem: WordProblem }
  | { kind: 'particle'; problem: ParticleProblem };

/** 問題をSRS復習キューで識別するキーを返す */
export function reviewKeyFor(question: SessionQuestion): string {
  switch (question.kind) {
    case 'verb':
      return `verb:${question.problem.word}`;
    case 'kakari':
      return `kakari:${question.problem.particle}`;
    case 'meaning':
      return `meaning:${question.problem.id}`;
    case 'reading':
      return `reading:${question.problem.id}`;
    case 'conjugation':
      return `conj:${question.problem.verb}:${question.problem.targetForm}`;
    case 'keigo':
      return `keigo:${question.problem.id}`;
    case 'word':
      return `word:${question.problem.id}`;
    case 'particle':
      return `particle:${question.problem.id}`;
  }
}

/** 配列をシャッフルしたコピーを返す */
export function shuffledCopy<T>(arr: readonly T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** プールを繰り返しシャッフルしながら count 件取り出す */
function repeatShuffled<T>(arr: readonly T[], count: number): T[] {
  const out: T[] = [];
  while (out.length < count) {
    out.push(...shuffledCopy(arr));
  }
  return out.slice(0, count);
}

/** 2種類の出題をほぼ半々に混ぜて count 件のセッションを作る */
function mixTwo(a: SessionQuestion[], b: SessionQuestion[], count: number): SessionQuestion[] {
  const aCount = Math.ceil(count / 2);
  const bCount = count - aCount;
  return shuffledCopy([...repeatShuffled(a, aCount), ...repeatShuffled(b, bCount)]);
}

/**
 * 分野モードのセッションを生成する。
 * - verbs: 型稽古（conjugation）＋係り結び（kakari）の混合
 * - aux: 動詞接続（verb）＋意味識別（meaning）の混合
 * - keigo: 敬語（keigo）のみ
 * - words: 単語（word）のみ
 * - particles: 助詞（particle）のみ
 */
export function buildFieldSession(mode: GameMode, count: number): SessionQuestion[] {
  switch (mode) {
    case 'verbs':
      return mixTwo(
        CONJUGATION_PROBLEMS.map((problem) => ({ kind: 'conjugation' as const, problem })),
        KAKARI_PROBLEMS.map((problem) => ({ kind: 'kakari' as const, problem })),
        count
      );
    case 'aux':
      return mixTwo(
        VERB_PROBLEMS.map((problem) => ({ kind: 'verb' as const, problem })),
        MEANING_PROBLEMS.map((problem) => ({ kind: 'meaning' as const, problem })),
        count
      );
    case 'keigo':
      return repeatShuffled(
        KEIGO_PROBLEMS.map((problem) => ({ kind: 'keigo' as const, problem })),
        count
      );
    case 'words':
      return repeatShuffled(
        WORD_PROBLEMS.map((problem) => ({ kind: 'word' as const, problem })),
        count
      );
    case 'particles':
      return repeatShuffled(
        PARTICLE_PROBLEMS.map((problem) => ({ kind: 'particle' as const, problem })),
        count
      );
    default:
      return [];
  }
}

/** 分野モードかどうか */
export function isFieldMode(mode: GameMode): boolean {
  return mode === 'verbs' || mode === 'aux' || mode === 'keigo' || mode === 'words' || mode === 'particles';
}
