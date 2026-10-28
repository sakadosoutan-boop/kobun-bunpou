import { ModeDefinition } from './types';
import { CONJUGATION_PROBLEMS } from '../data';

/** 型稽古の1セッションの出題数 */
export const CONJUGATION_SESSION_COUNT = 10;

export const conjugationMode: ModeDefinition = {
  id: 'conjugation',
  name: '型稽古',
  label: '型稽古（活用形トレーニング）',
  description: '動詞の指定された活用形を選ぶ型の稽古。活用表を身体で覚える',
  icon: '🥋',
  buttonClass: 'mode-conjugation',
  rules: {
    questionCount: CONJUGATION_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${CONJUGATION_PROBLEMS.length}問`,
};
