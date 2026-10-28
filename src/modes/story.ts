import { ModeDefinition } from './types';

export const storyMode: ModeDefinition = {
  id: 'story',
  section: 'story',
  name: '本編討伐',
  label: '本編討伐（全三幕）',
  description: '白狐・烏天狗・藤原の大君の三体を退ける正統の陣。弱点：妖狐＝助動詞の接続／烏天狗＝係り結び／藤原の大君＝敬語。弱点を突くとダメージ1.5倍',
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
