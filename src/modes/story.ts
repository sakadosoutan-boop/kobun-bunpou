import { ModeDefinition } from './types';

export const storyMode: ModeDefinition = {
  id: 'story',
  name: '本編討伐',
  label: '本編討伐（全三幕）',
  description: '白狐・烏天狗・藤原怨霊の三体を退ける正統の陣',
  icon: '⛩️',
  buttonClass: 'mode-story',
  rules: {
    questionCount: null,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'stages',
    mixKakari: false,
    scoreBased: false,
  },
};
