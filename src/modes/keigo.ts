import { ModeDefinition } from './types';
import { KeigoDirection } from '../types';
import { KEIGO_PROBLEMS } from '../data';

/** 敬語モードの1セッションの出題数 */
export const KEIGO_SESSION_COUNT = 10;

/** 敬意の方向の選択肢（全問共通の4択） */
export const KEIGO_DIRECTION_CHOICES: {
  direction: KeigoDirection;
  text: string;
  sub: string;
  label: string;
}[] = [
  { direction: 'sonkei', text: '尊敬', sub: '動作主（主語）を高める', label: '尊敬（動作主を高める）' },
  { direction: 'kenjou', text: '謙譲', sub: '受け手を高め、動作主がへりくだる', label: '謙譲（受け手を高める）' },
  { direction: 'teinei', text: '丁寧', sub: '聞き手・読み手への丁寧さ', label: '丁寧（聞き手への丁寧）' },
  { direction: 'nijuu', text: '二重敬語', sub: '最高位への最大の敬意', label: '二重敬語（最大の敬意）' },
];

/** 方向キーから表示ラベルを返す */
export function keigoDirectionLabel(direction: KeigoDirection): string {
  return (
    KEIGO_DIRECTION_CHOICES.find((c) => c.direction === direction)?.label ??
    direction
  );
}

export const keigoMode: ModeDefinition = {
  id: 'keigo',
  section: 'field',
  name: '敬語の陣',
  label: '敬語の陣（敬語モード）',
  description: `含まれる内容：敬語の方向（尊敬／謙譲／丁寧／二重敬語）を見極める問題。全${KEIGO_PROBLEMS.length}問`,
  icon: '👑',
  buttonClass: 'mode-keigo',
  rules: {
    questionCount: KEIGO_SESSION_COUNT,
    mistakeLimit: null,
    timerSeconds: null,
    enemyStyle: 'dummy',
    mixKakari: false,
    scoreBased: true,
  },
  getBadge: () => `全${KEIGO_PROBLEMS.length}問`,
};
