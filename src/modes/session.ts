import {
  ConjugationProblem,
  KakariProblem,
  MeaningProblem,
  ReadingProblem,
  VerbProblem,
} from '../types';

/**
 * セッション型モード（意味識別・怨念回収・例文読解・型稽古）で使う
 * 「決まった出題リストを順に解く」ための共通の出題型。
 * 日課祓いの DailyQuestion を一般化したもの。
 */
export type SessionQuestion =
  | { kind: 'verb'; problem: VerbProblem }
  | { kind: 'kakari'; problem: KakariProblem }
  | { kind: 'meaning'; problem: MeaningProblem }
  | { kind: 'reading'; problem: ReadingProblem }
  | { kind: 'conjugation'; problem: ConjugationProblem };

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
