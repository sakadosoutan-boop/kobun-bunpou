import { ModeDefinition } from './types';
import { CONJUGATION_PROBLEMS, KAKARI_PROBLEMS } from '../data';
import { FIELD_SESSION_COUNT } from './session';

export const verbsMode: ModeDefinition = {
  id: 'verbs',
  section: 'field',
  name: '動詞系',
  label: '動詞系の陣（活用・係り結び）',
  description: `含まれる内容：型稽古（活用${CONJUGATION_PROBLEMS.length}問）＋係り結び${KAKARI_PROBLEMS.length}問`,
  icon: '🥋',
  buttonClass: 'mode-verbs',
  rules: {
    questionCount: FIELD_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: true,
    scoreBased: true,
  },
  getBadge: () => `全${CONJUGATION_PROBLEMS.length + KAKARI_PROBLEMS.length}問`,
};
