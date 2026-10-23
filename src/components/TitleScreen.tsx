import React from 'react';
import { GameMode, PlayerProfile } from '../types';
import { getPlayerRank } from '../data';

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

      {/* Mode Selection Grid */}
      <div className="mode-selection-container">
        <div className="mode-select-label">陣立てを選択して出陣せよ</div>

        <button
          className="mode-btn mode-story"
          onClick={() => onStartMode('story')}
        >
          <div className="mode-icon">⛩️</div>
          <div className="mode-info">
            <span className="mode-name">本編討伐（全三幕）</span>
            <span className="mode-sub">白狐・烏天狗・藤原怨霊の三体を退ける正統の陣</span>
          </div>
        </button>

        <button
          className="mode-btn mode-endless"
          onClick={() => onStartMode('endless')}
        >
          <div className="mode-icon">🌙</div>
          <div className="mode-info">
            <span className="mode-name">百鬼夜行（無限サバイバル）</span>
            <span className="mode-sub">倒すほどに強まる妖魔。何体まで祓えるか限界に挑む</span>
          </div>
          {profile.endlessHighWave > 0 && (
            <span className="mode-badge">最高: {profile.endlessHighWave}体</span>
          )}
        </button>

        <button
          className="mode-btn mode-timeattack"
          onClick={() => onStartMode('timeattack')}
        >
          <div className="mode-icon">⏳</div>
          <div className="mode-info">
            <span className="mode-name">六十秒一閃（タイムアタック）</span>
            <span className="mode-sub">制限時間60秒！神速の判断で最高得点を目指せ</span>
          </div>
          {profile.timeAttackHighScore > 0 && (
            <span className="mode-badge">最高: {profile.timeAttackHighScore}点</span>
          )}
        </button>
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
