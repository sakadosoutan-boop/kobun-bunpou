import { ModeDefinition } from './types';
import { WORD_PROBLEMS } from '../data';
import { FIELD_SESSION_COUNT } from './session';

export const wordsMode: ModeDefinition = {
  id: 'words',
  section: 'field',
  name: '単語',
  label: '単語の陣（古文単語）',
  description: `含まれる内容：文脈文から古文単語の意味を選ぶ問題。全${WORD_PROBLEMS.length}問`,
  icon: '📖',
  buttonClass: 'mode-words',
  rules: {
    questionCount: FIELD_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${WORD_PROBLEMS.length}問`,
};
