import { ModeDefinition } from './types';

export const bossRushMode: ModeDefinition = {
  id: 'bossrush',
  section: 'special',
  name: '連戦の間',
  label: '連戦の間（ボスラッシュ・全六幕）',
  description: '本編六幕のボスを体力1.5倍で連戦する六連戦（前哨戦と物語はなし）。弱点は本編と同じ6分野で、弱点を突くとダメージ1.5倍。気力は回復しない真剣勝負',
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
