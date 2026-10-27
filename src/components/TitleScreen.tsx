import React from 'react';
import { GameMode, PlayerProfile } from '../types';
import { getPlayerRank } from '../data';
import { MODE_REGISTRY } from '../modes/registry';

interface TitleScreenProps {
  profile: PlayerProfile;
  onStartMode: (mode: GameMode) => void;
  onOpenRules: () => void;
  onOpenGrammar: () => void;
  onOpenCompendium: () => void;
  isBgmOn: boolean;
  onToggleBgm: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  profile,
  onStartMode,
  onOpenRules,
  onOpenGrammar,
  onOpenCompendium,
  isBgmOn,
  onToggleBgm,
}) => {
  const { currentRank } = getPlayerRank(profile.exp);

  return (
    <div id="title-screen" className="screen">
      {/* Top Header Controls & Rank Bar */}
      <div className="title-top-controls">
        <button
          className="player-rank-chip"
          onClick={onOpenCompendium}
          title="位階・称号を確認"
        >
          🎖️ {currentRank.title}
        </button>

        <button
          className="audio-toggle-btn"
          onClick={onToggleBgm}
          title={isBgmOn ? 'BGMを消音' : 'BGMを再生'}
        >
          {isBgmOn ? '🎵 奏上中' : '🔇 静寂'}
        </button>
      </div>

      <div className="title-banner">
        <div className="subtitle">雅なる古文文法アクション</div>
        <h1 className="main-title">言霊文法帖</h1>
        <div className="subtitle" style={{ fontSize: '1.02rem', color: 'var(--gold)' }}>
          〜 助動詞と係り結びの陣 〜
        </div>
        <p className="title-desc">
          動詞の活用形を見極め、正しき助動詞の言霊を放て！<br />
          修練を重ねて位階を極め、物の怪の怨霊を浄化せよ。
        </p>
      </div>

      {/* Mode Selection Grid (モード定義レジストリから描画) */}
      <div className="mode-selection-container">
        <div className="mode-select-label">陣立てを選択して出陣せよ</div>

        {MODE_REGISTRY.map((mode) => {
          const badge = mode.getBadge ? mode.getBadge(profile) : null;
          return (
            <button
              key={mode.id}
              className={`mode-btn ${mode.buttonClass}`}
              onClick={() => onStartMode(mode.id)}
            >
              <div className="mode-icon">{mode.icon}</div>
              <div className="mode-info">
                <span className="mode-name">{mode.label}</span>
                <span className="mode-sub">{mode.description}</span>
              </div>
              {badge && <span className="mode-badge">{badge}</span>}
            </button>
          );
        })}
      </div>

      {/* Bottom Sub Actions */}
      <div className="title-actions">
        <div className="title-sub-actions">
          <button id="rule-btn" className="btn-sub" onClick={onOpenRules}>
            指南（遊び方）
          </button>
          <button className="btn-sub btn-gold" onClick={onOpenGrammar}>
            📜 助動詞便覧
          </button>
          <button className="btn-sub" onClick={onOpenCompendium}>
            🎴 宝物庫
          </button>
        </div>
      </div>
    </div>
  );
};
