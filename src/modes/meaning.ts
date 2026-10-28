import { ModeDefinition } from './types';
import { MEANING_PROBLEMS } from '../data';

/** 意味識別モードの1セッションの出題数 */
export const MEANING_SESSION_COUNT = 10;

export const meaningMode: ModeDefinition = {
  id: 'meaning',
  name: '言霊の真価',
  label: '言霊の真価（意味識別）',
  description: '例文中の助動詞の意味を四択で見極める。多義語の判別こそ入試の本丸',
  icon: '🔮',
  buttonClass: 'mode-meaning',
  rules: {
    questionCount: MEANING_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${MEANING_PROBLEMS.length}問`,
};
