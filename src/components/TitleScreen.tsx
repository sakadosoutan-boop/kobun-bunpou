import React from 'react';
import { GameMode, PlayerProfile } from '../types';
import { getHeldRankInfo } from '../data';
import { MODE_REGISTRY } from '../modes/registry';
import { getExamStatus } from '../modes/exam';
import { MissionPanel } from './MissionPanel';

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
  const { currentRank } = getHeldRankInfo(profile);
  const examStatus = getExamStatus(profile);

  return (
    <div id="title-screen" className="screen">
      {/* Top Header Controls & Rank Bar */}
      <div className="title-top-controls">
        <div className="rank-chip-group">
          <button
            className="player-rank-chip"
            onClick={onOpenCompendium}
            title="位階・称号を確認"
          >
            🎖️ {currentRank.title}
          </button>
          {examStatus.available && (
            <button
              className="exam-available-badge"
              onClick={() => onStartMode('exam')}
              title="昇進試験に挑戦"
            >
              🎓 昇進試験 受験可能！
            </button>
          )}
        </div>

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
          const examLocked =
            mode.id === 'exam' && !examStatus.available && !examStatus.isMaxRank;
          return (
            <button
              key={mode.id}
              className={`mode-btn ${mode.buttonClass} ${examLocked ? 'mode-locked' : ''}`}
              onClick={() => onStartMode(mode.id)}
              disabled={examLocked}
            >
              <div className="mode-icon">{mode.icon}</div>
              <div className="mode-info">
                <span className="mode-name">{mode.label}</span>
                <span className="mode-sub">
                  {examLocked
                    ? `次の位階に必要な修練（徳）に達すると受験できる`
                    : mode.description}
                </span>
              </div>
              {badge && <span className="mode-badge">{badge}</span>}
            </button>
          );
        })}

        {/* Weekly Missions */}
        <MissionPanel profile={profile} />
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
