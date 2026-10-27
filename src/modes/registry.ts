import { GameMode } from '../types';
import { ModeDefinition } from './types';
import { storyMode } from './story';
import { endlessMode } from './endless';
import { timeAttackMode } from './timeattack';
import { dailyMode } from './daily';
import { suddenDeathMode } from './suddendeath';

/**
 * モードレジストリ。タイトル画面はこの一覧順でモードボタンを描画する。
 * 新モードはここに1行追加するだけでタイトル画面に並ぶ。
 */
export const MODE_REGISTRY: ModeDefinition[] = [
  storyMode,
  endlessMode,
  timeAttackMode,
  dailyMode,
  suddenDeathMode,
];

export function getModeDefinition(id: GameMode): ModeDefinition {
  return MODE_REGISTRY.find((m) => m.id === id) ?? storyMode;
}
