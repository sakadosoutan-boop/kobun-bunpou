import { PlayerProfile } from './types';

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
};

export function loadPlayerProfile(): PlayerProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...parsed };
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
