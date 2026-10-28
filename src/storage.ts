import { PlayerProfile } from './types';
import { getRankIndexByExp } from './data';

const STORAGE_KEY = 'kotodama_bunpou_profile_v1';

export const DEFAULT_PROFILE: PlayerProfile = {
  exp: 0,
  storyClears: 0,
  endlessHighWave: 0,
  timeAttackHighScore: 0,
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  cardMastery: {},
  unlockedTitles: ['言霊の志士'],
  dailyLastDate: '',
  dailyStreak: 0,
  suddenDeathBest: 0,
  reviewQueue: [],
  weeklyMissions: { weekKey: '', missionIds: [], targets: {}, progress: {}, claimed: [] },
  promotedRank: 0,
};

export function loadPlayerProfile(): PlayerProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    const merged: PlayerProfile = { ...DEFAULT_PROFILE, ...parsed };
    // 旧セーブ移行: 昇進試験導入前にEXPだけで決まっていた位階を保持位階として引き継ぐ
    if (typeof parsed.promotedRank !== 'number') {
      merged.promotedRank = getRankIndexByExp(merged.exp);
    }
    return merged;
  } catch (e) {
    console.warn('Failed to load profile from localStorage:', e);
    return DEFAULT_PROFILE;
  }
}

export function savePlayerProfile(profile: PlayerProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.warn('Failed to save profile to localStorage:', e);
  }
}
