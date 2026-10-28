import { ModeDefinition } from './types';

export const bossRushMode: ModeDefinition = {
  id: 'bossrush',
  name: '連戦の間',
  label: '連戦の間（ボスラッシュ）',
  description: '本編三幕の妖怪を大増量の体力で連戦。気力は回復しない真剣勝負',
  icon: '🔥',
  buttonClass: 'mode-bossrush',
  rules: {
    questionCount: null,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'stages',
    mixKakari: false,
    scoreBased: false,
  },
  getBadge: (profile) => (profile.storyClears > 0 ? '本編制覇済' : null),
};
