import { ModeDefinition } from './types';
import { PARTICLE_PROBLEMS } from '../data';
import { FIELD_SESSION_COUNT } from './session';

export const particlesMode: ModeDefinition = {
  id: 'particles',
  section: 'field',
  name: '助詞',
  label: '助詞の陣（助詞の働き）',
  description: `含まれる内容：実文中の助詞の働きを選ぶ問題。全${PARTICLE_PROBLEMS.length}問`,
  icon: '✒️',
  buttonClass: 'mode-particles',
  rules: {
    questionCount: FIELD_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${PARTICLE_PROBLEMS.length}問`,
};
