import { ModeDefinition } from './types';

export const endlessMode: ModeDefinition = {
  id: 'endless',
  name: '百鬼夜行',
  label: '百鬼夜行（無限サバイバル）',
  description: '倒すほどに強まる妖魔。何体まで祓えるか限界に挑む',
  icon: '🌙',
  buttonClass: 'mode-endless',
  rules: {
    questionCount: null,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'endless',
    mixKakari: false,
    scoreBased: false,
  },
  getBadge: (profile) =>
    profile.endlessHighWave > 0 ? `最高: ${profile.endlessHighWave}体` : null,
};
