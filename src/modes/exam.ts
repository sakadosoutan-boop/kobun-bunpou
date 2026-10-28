import { ModeDefinition } from './types';
import { PlayerProfile } from '../types';
import { getHeldRankInfo } from '../data';

/** 昇進試験の出題数 */
export const EXAM_QUESTION_COUNT = 10;

/** 昇進試験で許されるミス回数（これを超えると不合格で即終了） */
export const EXAM_MISTAKE_LIMIT = 2;

/**
 * 昇進試験の状態を返す。
 * - available: 次の位階の受験資格（必要EXP）を満たし、試験を受けられる
 * - targetTitle: 合格すると昇進する位階（最高位なら null）
 */
export function getExamStatus(profile: PlayerProfile): {
  available: boolean;
  targetTitle: string | null;
  isMaxRank: boolean;
} {
  const info = getHeldRankInfo(profile);
  return {
    available: info.examAvailable,
    targetTitle: info.nextRank ? info.nextRank.title : null,
    isMaxRank: info.nextRank === null,
  };
}

export const examMode: ModeDefinition = {
  id: 'exam',
  section: 'special',
  name: '昇進試験',
  label: '昇進試験（位階への挑戦）',
  description: '混合10問・ミス2回まで。合格すれば次の位階へ昇進。不合格でも修練は減らない',
  icon: '🎓',
  buttonClass: 'mode-exam',
  rules: {
    questionCount: EXAM_QUESTION_COUNT,
    mistakeLimit: EXAM_MISTAKE_LIMIT,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: true,
    scoreBased: true,
  },
  getBadge: (profile) => {
    const status = getExamStatus(profile);
    if (status.isMaxRank) return '最高位到達';
    if (status.available) return '受験可能！';
    return null;
  },
};
