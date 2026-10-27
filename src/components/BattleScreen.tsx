import React, { useState } from 'react';
import { Stage, ChoiceOption, GameMode } from '../types';
import { BattleEffects, FloatingDamage } from './BattleEffects';

interface BattleScreenProps {
  stage: Stage;
  gameMode: GameMode;
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
  gameMode,
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
          {gameMode === 'timeattack' ? (
            <div className="time-attack-status">
              <span className={`timer-badge ${timeRemaining <= 10 ? 'timer-urgent' : ''}`}>
                ⏳ {timeRemaining}秒
              </span>
              <span className="score-badge">得点: <b>{score}</b></span>
            </div>
          ) : gameMode === 'suddendeath' ? (
            <div className="time-attack-status">
              <span className="score-badge">⚔️ 連続正解: <b>{score}</b></span>
            </div>
          ) : gameMode === 'daily' ? (
            <span id="stage-label">📿 日課祓い</span>
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

        {gameMode !== 'timeattack' && gameMode !== 'suddendeath' && (
          <div className="hp-container">
            <div
              id="enemy-hp-bar"
              className="hp-bar enemy"
              style={{ width: `${enemyHpPercent}%` }}
            />
          </div>
        )}
      </div>

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

      {/* Auxiliary Verb Card Choices */}
      <div className="cards-grid" id="cards-container">
        {cards.map((card, idx) => (
          <button
            key={idx}
            className={`card-btn ${isFever ? 'card-btn-fever' : ''}`}
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
