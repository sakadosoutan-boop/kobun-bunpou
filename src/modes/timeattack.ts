import { ModeDefinition } from './types';

export const timeAttackMode: ModeDefinition = {
  id: 'timeattack',
  name: '六十秒一閃',
  label: '六十秒一閃（タイムアタック）',
  description: '制限時間60秒！神速の判断で最高得点を目指せ',
  icon: '⏳',
  buttonClass: 'mode-timeattack',
  rules: {
    questionCount: null,
    mistakeLimit: null,
    timerSeconds: 60,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: (profile) =>
    profile.timeAttackHighScore > 0 ? `最高: ${profile.timeAttackHighScore}点` : null,
};
