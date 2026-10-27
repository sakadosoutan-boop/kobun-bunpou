import { GameMode, PlayerProfile } from '../types';

/**
 * モードのルール設定。
 * 新モードを追加するときは、この設定で挙動の違いを表現し、
 * App 側の共通ロジック（出題・正誤判定・結果集計）が参照する。
 */
export interface ModeRules {
  /** 出題数（null = 終了条件を満たすまで無制限） */
  questionCount: number | null;
  /** 許容ミス回数（null = 従来のHP制で管理、0 = ミス1回で即終了） */
  mistakeLimit: number | null;
  /** 制限時間（秒、null = なし） */
  timerSeconds: number | null;
  /**
   * 敵の扱い。
   * - stages: 本編ステージの敵を順に相手にする
   * - endless: 倒すたびに自動生成される敵
   * - dummy: HP無限の的（スコア・連続正解が主役）
   * - daily: 日替わりで決まる敵1体（HPは表示用）
   */
  enemyStyle: 'stages' | 'endless' | 'dummy' | 'daily';
  /** 係り結び問題を通常の出題プールに混ぜるか（false の場合は従来どおりコンボのフィーバーでのみ出現） */
  mixKakari: boolean;
  /** スコア（得点・連続正解数）を主役にするモードか */
  scoreBased: boolean;
}

/**
 * モード定義。タイトル画面はこの定義の一覧（MODE_REGISTRY）を描画する。
 * 新モードの追加手順:
 * 1. src/modes/ に定義ファイルを作り ModeDefinition を export する
 * 2. src/modes/registry.ts の MODE_REGISTRY に追加する
 * 3. 特殊な進行ルールが必要なら App.tsx の開始処理・ターン評価に分岐を足す
 *    （questionCount / mistakeLimit / timerSeconds / enemyStyle で表せる範囲は共通処理が面倒を見る）
 */
export interface ModeDefinition {
  /** モードID（GameMode と一致） */
  id: GameMode;
  /** 短い名称 */
  name: string;
  /** 和風の表示名（タイトル画面に出る正式名称） */
  label: string;
  /** モードの説明文（タイトル画面のサブテキスト） */
  description: string;
  /** アイコン絵文字 */
  icon: string;
  /** タイトル画面ボタンの追加CSSクラス */
  buttonClass: string;
  /** ルール設定 */
  rules: ModeRules;
  /** タイトル画面ボタン右上に表示する記録バッジ（表示しない場合は null） */
  getBadge?: (profile: PlayerProfile) => string | null;
}
