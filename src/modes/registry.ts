import { GameMode } from '../types';
import { ModeDefinition } from './types';
import { storyMode } from './story';
import { endlessMode } from './endless';
import { dailyMode } from './daily';
import { reviewMode } from './review';
import { bossRushMode } from './bossrush';
import { keigoMode } from './keigo';
import { examMode } from './exam';
import { verbsMode } from './verbs';
import { auxMode } from './aux';
import { wordsMode } from './words';
import { particlesMode } from './particles';

/**
 * モードレジストリ。タイトル画面は section ごとにこの一覧を描画する。
 * 並び順: 本編（story）→ 分野（field）→ 特別枠（special）。
 */
export const MODE_REGISTRY: ModeDefinition[] = [
  storyMode,
  verbsMode,
  auxMode,
  keigoMode,
  wordsMode,
  particlesMode,
  endlessMode,
  dailyMode,
  reviewMode,
  bossRushMode,
  examMode,
];

export function getModeDefinition(id: GameMode): ModeDefinition {
  return MODE_REGISTRY.find((m) => m.id === id) ?? storyMode;
}
