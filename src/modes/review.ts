import { ModeDefinition } from './types';
import { PlayerProfile, ReviewQueueItem } from '../types';
import { CONJUGATION_PROBLEMS, KAKARI_PROBLEMS, KEIGO_PROBLEMS, MEANING_PROBLEMS, PARTICLE_PROBLEMS, READING_PROBLEMS, VERB_PROBLEMS, WORD_PROBLEMS } from '../data';
import { SessionQuestion, shuffledCopy } from './session';
import { getDateKey } from './daily';

/**
 * 怨念回収戦（SRS復習）の間隔（日数）。
 * - 誤答で登録された問題は翌日（+1日）に出題対象になる
 * - 回収戦で1回目の正解 → +3日、2回目の正解 → +7日、3回目の正解 → 卒業（キューから除去）
 */
export const REVIEW_INTERVALS = [1, 3, 7] as const;

/** 1セッションで出題する復習問題の上限 */
export const REVIEW_SESSION_LIMIT = 10;

/** 'YYYY-MM-DD' に日数を加えたキーを返す */
export function addDaysToKey(key: string, days: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const date = new Date(y, (m || 1) - 1, d || 1);
  date.setDate(date.getDate() + days);
  return getDateKey(date);
}

/**
 * 誤答した問題を復習キューに登録（またはリセット）する純関数。
 * 既存の項目があればレベルを0に戻し、翌日を次回出題日にする。
 */
export function registerReviewMistake(
  queue: ReviewQueueItem[],
  key: string,
  todayKey: string
): ReviewQueueItem[] {
  const nextDue = addDaysToKey(todayKey, REVIEW_INTERVALS[0]);
  const existing = queue.find((item) => item.key === key);
  if (existing) {
    return queue.map((item) =>
      item.key === key ? { ...item, level: 0, nextDue } : item
    );
  }
  return [...queue, { key, level: 0, nextDue }];
}

/**
 * 復習問題に正解した時のキュー更新（純関数）。
 * レベルが上がり間隔が伸びる。レベル2で正解すると卒業してキューから消える。
 * キューに無いキーなら何もしない。
 */
export function applyReviewCorrect(
  queue: ReviewQueueItem[],
  key: string,
  todayKey: string
): ReviewQueueItem[] {
  const existing = queue.find((item) => item.key === key);
  if (!existing) return queue;
  if (existing.level >= 2) {
    return queue.filter((item) => item.key !== key);
  }
  const nextLevel = existing.level + 1;
  return queue.map((item) =>
    item.key === key
      ? { ...item, level: nextLevel, nextDue: addDaysToKey(todayKey, REVIEW_INTERVALS[nextLevel]) }
      : item
  );
}

/** 出題期限（nextDue <= today）が来ている項目数 */
export function countDueReviewItems(
  queue: ReviewQueueItem[],
  todayKey: string
): number {
  return queue.filter((item) => item.nextDue <= todayKey).length;
}

/** 復習キーから実際の問題を引く。引けない場合は null */
export function resolveReviewQuestion(key: string): SessionQuestion | null {
  const [kind, a, b] = key.split(':');
  switch (kind) {
    case 'verb': {
      const problem = VERB_PROBLEMS.find((p) => p.word === a);
      return problem ? { kind: 'verb', problem } : null;
    }
    case 'kakari': {
      const problem = KAKARI_PROBLEMS.find((p) => p.particle === a);
      return problem ? { kind: 'kakari', problem } : null;
    }
    case 'meaning': {
      const problem = MEANING_PROBLEMS.find((p) => p.id === a);
      return problem ? { kind: 'meaning', problem } : null;
    }
    case 'reading': {
      const problem = READING_PROBLEMS.find((p) => p.id === a);
      return problem ? { kind: 'reading', problem } : null;
    }
    case 'conj': {
      const problem = CONJUGATION_PROBLEMS.find(
        (p) => p.verb === a && p.targetForm === b
      );
      return problem ? { kind: 'conjugation', problem } : null;
    }
    case 'keigo': {
      const problem = KEIGO_PROBLEMS.find((p) => p.id === a);
      return problem ? { kind: 'keigo', problem } : null;
    }
    case 'word': {
      const problem = WORD_PROBLEMS.find((p) => p.id === a);
      return problem ? { kind: 'word', problem } : null;
    }
    case 'particle': {
      const problem = PARTICLE_PROBLEMS.find((p) => p.id === a);
      return problem ? { kind: 'particle', problem } : null;
    }
    default:
      return null;
  }
}

export interface ReviewSession {
  questions: SessionQuestion[];
  /** 期限到来で出題された復習問題の数 */
  dueCount: number;
  /** キューに期限到来が無く、通常問題で代替したかどうか */
  fallback: boolean;
}

/**
 * 怨念回収戦のセッションを組み立てる。
 * 期限到来の項目を優先して最大 REVIEW_SESSION_LIMIT 問。
 * 期限到来が無い場合は通常問題（動詞＋係り結び）5問で代替する。
 */
export function buildReviewSession(
  profile: PlayerProfile,
  todayKey: string
): ReviewSession {
  const dueItems = profile.reviewQueue.filter((item) => item.nextDue <= todayKey);
  const questions: SessionQuestion[] = [];
  for (const item of shuffledCopy(dueItems)) {
    if (questions.length >= REVIEW_SESSION_LIMIT) break;
    const q = resolveReviewQuestion(item.key);
    if (q) questions.push(q);
  }
  if (questions.length > 0) {
    return { questions, dueCount: questions.length, fallback: false };
  }
  const verbs: SessionQuestion[] = shuffledCopy(VERB_PROBLEMS)
    .slice(0, 3)
    .map((problem) => ({ kind: 'verb', problem }));
  const kakaris: SessionQuestion[] = shuffledCopy(KAKARI_PROBLEMS)
    .slice(0, 2)
    .map((problem) => ({ kind: 'kakari', problem }));
  return {
    questions: shuffledCopy([...verbs, ...kakaris]),
    dueCount: 0,
    fallback: true,
  };
}

export const reviewMode: ModeDefinition = {
  id: 'review',
  section: 'special',
  name: '怨念回収戦',
  label: '怨念回収戦（苦手復習）',
  description: '間違えた問題が間隔を空けて蘇る。繰り返し祓って苦手を卒業させよ',
  icon: '🌀',
  buttonClass: 'mode-review',
  rules: {
    questionCount: REVIEW_SESSION_LIMIT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: true,
    scoreBased: true,
  },
  getBadge: (profile) => {
    const due = countDueReviewItems(profile.reviewQueue, getDateKey());
    if (due > 0) return `回収期限: ${due}件`;
    if (profile.reviewQueue.length > 0)
      return `怨念 ${profile.reviewQueue.length}件・期限待ち`;
    return '怨念なし';
  },
};
