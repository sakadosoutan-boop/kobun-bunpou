import { ModeDefinition } from './types';
import { KakariProblem, VerbProblem } from '../types';
import { KAKARI_PROBLEMS, STAGES, VERB_PROBLEMS } from '../data';

/** 日課祓いの1セットあたりの出題数 */
export const DAILY_QUESTION_COUNT = 5;

/** 日課祓いの1問の種別（動詞の接続問題 / 係り結び問題） */
export type DailyQuestion =
  | { kind: 'verb'; problem: VerbProblem }
  | { kind: 'kakari'; problem: KakariProblem };

/** ローカル日付を 'YYYY-MM-DD' 形式で返す（日課の判定は端末の暦日ベース） */
export function getDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** 指定日（既定は今日）の前日の日付キーを返す */
export function getYesterdayKey(today: Date = new Date()): string {
  const d = new Date(today);
  d.setDate(d.getDate() - 1);
  return getDateKey(d);
}

/** 日付キーから決定的なシードを作る（FNV-1a ハッシュ） */
function hashDateKey(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** シード付き乱数（mulberry32）。同じ日付キーでは常に同じ列になる */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(arr: readonly T[], rand: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * その日の日課セット（全5問）を生成する。
 * 日付シードで決定的に決まるため、その日は何度挑戦しても同じ出題セットになる。
 * 内訳は動詞の接続問題が残り、係り結び問題が1〜2問混ざる。
 */
export function generateDailyQuestions(dateKey: string): DailyQuestion[] {
  const rand = mulberry32(hashDateKey(`daily:${dateKey}`));
  const kakariCount = 1 + Math.floor(rand() * 2); // 1〜2問
  const verbCount = DAILY_QUESTION_COUNT - kakariCount;

  const verbs: DailyQuestion[] = shuffled(VERB_PROBLEMS, rand)
    .slice(0, verbCount)
    .map((problem) => ({ kind: 'verb', problem }));
  const kakaris: DailyQuestion[] = shuffled(KAKARI_PROBLEMS, rand)
    .slice(0, kakariCount)
    .map((problem) => ({ kind: 'kakari', problem }));

  return shuffled([...verbs, ...kakaris], rand);
}

/** その日の日課で相手をするステージのインデックス（日替わり） */
export function pickDailyStageIndex(dateKey: string): number {
  return hashDateKey(`daily-stage:${dateKey}`) % STAGES.length;
}

/** その日に日課を完了済みか */
export function isDailyCompletedOn(
  profile: { dailyLastDate: string },
  dateKey: string
): boolean {
  return profile.dailyLastDate === dateKey;
}

/**
 * 日課完了時の記録更新を計算する純関数。
 * - 同日に完了済みなら streak は変えない（二重加算防止）
 * - 前日に完了していれば streak + 1
 * - それ以外（初回・間隔が空いた）は streak = 1 にリセット
 */
export function applyDailyCompletion(
  current: { dailyLastDate: string; dailyStreak: number },
  todayKey: string,
  yesterdayKey: string
): { dailyLastDate: string; dailyStreak: number } {
  if (current.dailyLastDate === todayKey) {
    return { dailyLastDate: todayKey, dailyStreak: Math.max(1, current.dailyStreak) };
  }
  const streak = current.dailyLastDate === yesterdayKey ? current.dailyStreak + 1 : 1;
  return { dailyLastDate: todayKey, dailyStreak: streak };
}

export const dailyMode: ModeDefinition = {
  id: 'daily',
  name: '日課祓い',
  label: '日課祓い（デイリー）',
  description: '1日1セット全5問。接続と係り結びの日替わり修練で連続記録を伸ばせ',
  icon: '📿',
  buttonClass: 'mode-daily',
  rules: {
    questionCount: DAILY_QUESTION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'daily',
    mixKakari: true,
    scoreBased: false,
  },
  getBadge: (profile) => {
    const done = isDailyCompletedOn(profile, getDateKey());
    const streakText = profile.dailyStreak > 0 ? ` 🔥${profile.dailyStreak}日連続` : '';
    return done ? `本日：済${streakText}` : `本日：未実施${streakText}`;
  },
};
