import React, { useState } from 'react';
import { Stage, ChoiceOption, GameMode, RuleVariant } from '../types';
import { BattleEffects, FloatingDamage } from './BattleEffects';

interface BattleScreenProps {
  stage: Stage;
  /** 例文読解・意味識別で表示する例文（通常モードでは null） */
  sentenceText?: string | null;
  /** 文中でハイライトする語句（敬語モードの敬語表現） */
  sentenceHighlight?: string | null;
  /** 奥義「言霊解放」のゲージ (0-100) */
  ougiGauge: number;
  /** この戦闘で奥義を使い切ったか */
  ougiUsed: boolean;
  /** 奥義発動 */
  onUseOugi: () => void;
  gameMode: GameMode;
  ruleVariant: RuleVariant;
  combo: number;
  enemyHp: number;
  enemyMaxHp: number;
  playerHp: number;
  timeRemaining: number;
  score: number;
  wave: number;
  guideText: string;
  targetWord: string;
  targetForm: string;
  messageLog: React.ReactNode;
  cards: ChoiceOption[];
  isLocked: boolean;
  enemyTransform: string;
  isHitFlash: boolean;
  showSlash: boolean;
  damageQueue: FloatingDamage[];
  isFever: boolean;
  isBgmOn: boolean;
  onToggleBgm: () => void;
  onOpenGrammar: () => void;
  onCardSelected: (card: ChoiceOption) => void;
}

export const BattleScreen: React.FC<BattleScreenProps> = ({
  stage,
  sentenceText,
  sentenceHighlight,
  ougiGauge,
  ougiUsed,
  onUseOugi,
  gameMode,
  ruleVariant,
  combo,
  enemyHp,
  enemyMaxHp,
  playerHp,
  timeRemaining,
  score,
  wave,
  guideText,
  targetWord,
  targetForm,
  messageLog,
  cards,
  isLocked,
  enemyTransform,
  isHitFlash,
  showSlash,
  damageQueue,
  isFever,
  isBgmOn,
  onToggleBgm,
  onOpenGrammar,
  onCardSelected,
}) => {
  const [imageError, setImageError] = useState(false);
  const FIELD_LABELS: Partial<Record<GameMode, string>> = {
    verbs: '🥋 動詞系の陣',
    aux: '🔮 助動詞系の陣',
    keigo: '👑 敬語の陣',
    words: '📖 単語の陣',
    particles: '✒️ 助詞の陣',
  };
  const fieldLabel = FIELD_LABELS[gameMode];
  const isFieldHeader = fieldLabel !== undefined;
  const enemyHpPercent = Math.max(0, (enemyHp / enemyMaxHp) * 100);
  const playerHpPercent = Math.max(0, playerHp);

  return (
    <div id="battle-screen" className={`screen ${isFever ? 'fever-mode' : ''}`}>
      {/* Visual Effects Layer */}
      <BattleEffects
        showSlash={showSlash}
        damageQueue={damageQueue}
        isFever={isFever}
      />

      {/* Top Header Bar */}
      <div className="header-bar">
        <div className="header-stage-info">
          {ruleVariant === 'timeattack' && isFieldHeader ? (
            <div className="time-attack-status">
              <span id="stage-label">{fieldLabel}</span>
              <span className={`timer-badge ${timeRemaining <= 10 ? 'timer-urgent' : ''}`}>
                ⏳ {timeRemaining}秒
              </span>
              <span className="score-badge">正解: <b>{score}</b></span>
            </div>
          ) : ruleVariant === 'suddendeath' && isFieldHeader ? (
            <div className="time-attack-status">
              <span id="stage-label">{fieldLabel}</span>
              <span className="score-badge">⚔️ 連続正解: <b>{score}</b></span>
            </div>
          ) : gameMode === 'daily' ? (
            <span id="stage-label">📿 日課祓い</span>
          ) : isFieldHeader ? (
            <div className="time-attack-status">
              <span id="stage-label">{fieldLabel}</span>
              <span className="score-badge">正解: <b>{score}</b></span>
            </div>
          ) : gameMode === 'review' ? (
            <div className="time-attack-status">
              <span id="stage-label">🌀 怨念回収戦</span>
              <span className="score-badge">回収: <b>{score}</b></span>
            </div>
          ) : gameMode === 'exam' ? (
            <div className="time-attack-status">
              <span id="stage-label">🎓 昇進試験</span>
              <span className="score-badge">正解: <b>{score}</b></span>
            </div>
          ) : gameMode === 'bossrush' ? (
            <span id="stage-label">🔥 連戦の間：{stage.label}</span>
          ) : gameMode === 'endless' ? (
            <span id="stage-label">🌙 百鬼夜行：第{wave}体目</span>
          ) : (
            <span id="stage-label">{stage.label}</span>
          )}

          <span className="combo-pill">
            連撃: <b id="combo-count">{combo}</b>
          </span>
        </div>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={onToggleBgm}
            title={isBgmOn ? 'BGMを停止' : 'BGMを再生'}
          >
            {isBgmOn ? '🎵' : '🔇'}
          </button>
          <button
            className="icon-btn text-icon-btn"
            onClick={onOpenGrammar}
            title="助動詞便覧（巻物）を開く"
          >
            📜 便覧
          </button>
        </div>
      </div>

      {/* Enemy Visual Area */}
      <div className="enemy-area" id="enemy-box">
        <div
          className={`enemy-portrait-frame ${isHitFlash ? 'enemy-hit-flash' : ''}`}
          style={{ transform: enemyTransform || undefined }}
        >
          {!imageError && stage.image ? (
            <img
              src={stage.image}
              alt={stage.name}
              className="enemy-portrait-img"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="enemy-fallback">
              <span className="enemy-fallback-emoji">{stage.emoji}</span>
            </div>
          )}
          {isFever && <div className="fever-aura-ring" />}
        </div>

        <div className="enemy-name" id="enemy-name">
          {stage.name}
        </div>

        {(gameMode === 'story' || gameMode === 'bossrush') && (
          <div className="weakness-chip">弱点：{stage.weaknessLabel}</div>
        )}

        {(gameMode === 'story' ||
          gameMode === 'bossrush' ||
          gameMode === 'endless' ||
          gameMode === 'daily') && (
          <div className="hp-container">
            <div
              id="enemy-hp-bar"
              className="hp-bar enemy"
              style={{ width: `${enemyHpPercent}%` }}
            />
          </div>
        )}
      </div>

      {/* Sentence (例文読解・意味識別・敬語モード) */}
      {sentenceText && (
        <div className="sentence-box">
          <div className="sentence-text">
            {sentenceHighlight && sentenceText.includes(sentenceHighlight)
              ? sentenceText
                  .split(sentenceHighlight)
                  .map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="keigo-highlight">{sentenceHighlight}</span>
                      )}
                    </React.Fragment>
                  ))
              : sentenceText}
          </div>
        </div>
      )}

      {/* Target Word & Grammatical Form */}
      <div className={`phrase-stage ${isFever ? 'phrase-stage-fever' : ''}`}>
        <div className="phrase-guide" id="guide-text">
          {guideText}
        </div>
        <div className="current-word" id="target-word">
          {targetWord}
        </div>
        <div className="current-form" id="target-form">
          {targetForm}
        </div>
      </div>

      {/* Message Log */}
      <div className="message-log" id="message-log">
        {messageLog}
      </div>

      {/* 奥義「言霊解放」 */}
      <div className="ougi-row">
        <div className="ougi-gauge-wrap">
          <span className="ougi-label">奥義</span>
          <div className="ougi-gauge">
            <div
              className={`ougi-gauge-fill ${ougiGauge >= 100 && !ougiUsed ? 'ougi-ready' : ''}`}
              style={{ width: `${Math.min(100, Math.max(0, ougiGauge))}%` }}
            />
          </div>
        </div>
        <button
          className="ougi-btn"
          disabled={ougiUsed || ougiGauge < 100 || isLocked}
          onClick={onUseOugi}
          title={
            ougiUsed
              ? 'この戦闘では使用済み'
              : ougiGauge >= 100
              ? '言霊解放：この問題を正解として突破する'
              : '連続正解でゲージが溜まる'
          }
        >
          {ougiUsed ? '言霊解放・使用済' : '✨ 言霊解放'}
        </button>
      </div>

      {/* Auxiliary Verb Card Choices */}
      <div className="cards-grid" id="cards-container">
        {cards.map((card, idx) => (
          <button
            key={idx}
            className={`card-btn ${isFever ? 'card-btn-fever' : ''} ${!card.sub ? 'card-btn-label' : ''}`}
            disabled={isLocked}
            onClick={() => onCardSelected(card)}
          >
            <span className="card-main">{card.text}</span>
            <span
              className="card-sub"
              dangerouslySetInnerHTML={{ __html: card.sub }}
            />
          </button>
        ))}
      </div>

      {/* Player HP Status (Hidden or infinite in Time Attack) */}
      <div className="player-status">
        <span>あなたの気力</span>
        <div className="hp-container" style={{ width: '52%' }}>
          <div
            id="player-hp-bar"
            className={`hp-bar ${playerHp <= 25 ? 'hp-danger' : ''}`}
            style={{ width: `${playerHpPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
