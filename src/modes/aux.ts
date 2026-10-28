import { ModeDefinition } from './types';
import { MEANING_PROBLEMS, VERB_PROBLEMS } from '../data';
import { FIELD_SESSION_COUNT } from './session';

export const auxMode: ModeDefinition = {
  id: 'aux',
  section: 'field',
  name: '助動詞系',
  label: '助動詞系の陣（接続・意味）',
  description: `含まれる内容：動詞接続${VERB_PROBLEMS.length}問＋意味識別${MEANING_PROBLEMS.length}問`,
  icon: '🔮',
  buttonClass: 'mode-aux',
  rules: {
    questionCount: FIELD_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${VERB_PROBLEMS.length + MEANING_PROBLEMS.length}問`,
};
