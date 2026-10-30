import { ModeDefinition } from './types';

export const storyMode: ModeDefinition = {
  id: 'story',
  section: 'story',
  name: '本編討伐',
  label: '本編討伐（全六幕）',
  description: '物語を追いながら六体の妖怪を退ける正統の陣。各幕は前哨戦（雑魚）からボス戦へ。弱点：妖狐＝助動詞の接続／烏天狗＝係り結び／雪女＝助詞／絡新婦＝単語／雷獣＝動詞の活用／藤原の大君＝敬語。弱点を突くとダメージ1.5倍',
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
