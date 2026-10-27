import { ModeDefinition } from './types';

export const suddenDeathMode: ModeDefinition = {
  id: 'suddendeath',
  name: '斬撃一閃',
  label: '斬撃一閃（サドンデス）',
  description: 'ミス1回で即終了。連続正解の限界に挑む一発勝負の陣',
  icon: '⚔️',
  buttonClass: 'mode-suddendeath',
  rules: {
    questionCount: null,
    mistakeLimit: 0,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: (profile) =>
    profile.suddenDeathBest > 0 ? `最高: ${profile.suddenDeathBest}連続正解` : null,
};
