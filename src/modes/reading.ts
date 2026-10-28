import { ModeDefinition } from './types';
import { READING_PROBLEMS } from '../data';

/** 例文読解モードの1セッションの出題数 */
export const READING_SESSION_COUNT = 8;

export const readingMode: ModeDefinition = {
  id: 'reading',
  name: '古文の間',
  label: '古文の間（例文読解）',
  description: '竹取・枕草子・徒然草など古典の実文から、助動詞と係り結びを読み解く',
  icon: '📚',
  buttonClass: 'mode-reading',
  rules: {
    questionCount: READING_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${READING_PROBLEMS.length}問`,
};
