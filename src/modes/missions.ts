import { PlayerProfile, WeeklyMissionState } from '../types';
import { getDateKey } from './daily';

/** ミッション進捗の計測対象 */
export type MissionMetric =
  | 'totalCorrect'
  | 'kakariCorrect'
  | 'meaningCorrect'
  | 'readingCorrect'
  | 'conjugationCorrect'
  | 'keigoCorrect'
  | 'dailyComplete'
  | 'enemyDefeats';

export interface MissionTemplate {
  id: string;
  metric: MissionMetric;
  /** 目標値を使って表示文を作る */
  text: (target: number) => string;
  /** 週シードで選ばれる目標値の候補 */
  targetOptions: number[];
  /** 達成報酬（EXP） */
  reward: number;
}

export const MISSION_TEMPLATES: MissionTemplate[] = [
  { id: 'kakari-master', metric: 'kakariCorrect', text: (t) => `係り結びの問題に${t}回正解`, targetOptions: [8, 10, 12], reward: 60 },
  { id: 'meaning-eye', metric: 'meaningCorrect', text: (t) => `意味識別で通算${t}問正解`, targetOptions: [10, 15], reward: 50 },
  { id: 'daily-devotion', metric: 'dailyComplete', text: (t) => `日課祓いを${t}回完了`, targetOptions: [2, 3], reward: 70 },
  { id: 'boss-hunter', metric: 'enemyDefeats', text: (t) => `敵を${t}体討伐`, targetOptions: [3, 5], reward: 60 },
  { id: 'total-grind', metric: 'totalCorrect', text: (t) => `問題に通算${t}問正解`, targetOptions: [20, 30], reward: 50 },
  { id: 'reading-deep', metric: 'readingCorrect', text: (t) => `例文読解で${t}問正解`, targetOptions: [6, 8], reward: 50 },
  { id: 'keigo-court', metric: 'keigoCorrect', text: (t) => `敬語モードで${t}問正解`, targetOptions: [8, 10], reward: 50 },
  { id: 'conj-form', metric: 'conjugationCorrect', text: (t) => `型稽古で${t}問正解`, targetOptions: [10, 15], reward: 40 },
];

export function getMissionTemplate(id: string): MissionTemplate | undefined {
  return MISSION_TEMPLATES.find((t) => t.id === id);
}

/** その週の月曜日の日付キーを返す（週間ミッションの週境界） */
export function getWeekKey(date: Date = new Date()): string {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dow = d.getDay(); // 0=日曜
  const diff = (dow + 6) % 7; // 月曜からの経過日数
  d.setDate(d.getDate() - diff);
  return getDateKey(d);
}

function hashString(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

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

/** 週キーから決定的に3件のミッション（IDと目標値）を生成する */
export function generateWeeklyMissions(weekKey: string): WeeklyMissionState {
  const rand = mulberry32(hashString(`missions:${weekKey}`));
  const pool = [...MISSION_TEMPLATES];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const picked = pool.slice(0, 3);
  const targets: Record<string, number> = {};
  for (const t of picked) {
    targets[t.id] = t.targetOptions[Math.floor(rand() * t.targetOptions.length)];
  }
  return {
    weekKey,
    missionIds: picked.map((t) => t.id),
    targets,
    progress: {},
    claimed: [],
  };
}

/**
 * プロフィールの週間ミッションを今週のものに揃える純関数。
 * 既に今週分なら同じオブジェクトをそのまま返す（参照同一性で変更検出できる）。
 */
export function ensureWeeklyMissions(
  profile: PlayerProfile,
  now: Date = new Date()
): PlayerProfile {
  const weekKey = getWeekKey(now);
  const current = profile.weeklyMissions;
  if (current && current.weekKey === weekKey && current.missionIds?.length === 3) {
    return profile;
  }
  return { ...profile, weeklyMissions: generateWeeklyMissions(weekKey) };
}

export interface MissionView {
  template: MissionTemplate;
  target: number;
  progress: number;
  done: boolean;
}

/** 表示用に今週のミッション一覧を返す（プロフィールは ensure 済みであること） */
export function getMissionViews(profile: PlayerProfile): MissionView[] {
  const state = profile.weeklyMissions;
  if (!state) return [];
  return state.missionIds
    .map((id) => {
      const template = getMissionTemplate(id);
      if (!template) return null;
      const target = state.targets[id] ?? template.targetOptions[0];
      const progress = Math.min(state.progress[id] ?? 0, target);
      return {
        template,
        target,
        progress,
        done: state.claimed.includes(id),
      } as MissionView;
    })
    .filter((v): v is MissionView => v !== null);
}

export interface MissionBumpResult {
  profile: PlayerProfile;
  /** この加算で新たに達成したミッション（報酬は profile.exp に加算済み） */
  completed: { template: MissionTemplate; target: number }[];
}

/**
 * ミッション進捗を加算する純関数。
 * 目標に到達したミッションはその場で達成扱いにし、報酬EXPを加算する。
 */
export function bumpMission(
  profile: PlayerProfile,
  metric: MissionMetric,
  amount: number = 1,
  now: Date = new Date()
): MissionBumpResult {
  const ensured = ensureWeeklyMissions(profile, now);
  const state = ensured.weeklyMissions;
  const progress = { ...state.progress };
  const claimed = [...state.claimed];
  const completed: { template: MissionTemplate; target: number }[] = [];
  let exp = ensured.exp;

  for (const id of state.missionIds) {
    const template = getMissionTemplate(id);
    if (!template || template.metric !== metric) continue;
    if (claimed.includes(id)) continue;
    const target = state.targets[id] ?? template.targetOptions[0];
    const next = Math.min((progress[id] ?? 0) + amount, target);
    progress[id] = next;
    if (next >= target) {
      claimed.push(id);
      exp += template.reward;
      completed.push({ template, target });
    }
  }

  return {
    profile: {
      ...ensured,
      exp,
      weeklyMissions: { ...state, progress, claimed },
    },
    completed,
  };
}
