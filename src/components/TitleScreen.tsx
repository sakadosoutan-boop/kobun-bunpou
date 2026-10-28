import React, { useState } from 'react';
import { GameMode, PlayerProfile, RuleVariant } from '../types';
import { getHeldRankInfo } from '../data';
import { MODE_REGISTRY } from '../modes/registry';
import { ModeDefinition } from '../modes/types';
import { getExamStatus } from '../modes/exam';
import { MissionPanel } from './MissionPanel';

interface TitleScreenProps {
  profile: PlayerProfile;
  onStartMode: (mode: GameMode, rule: RuleVariant) => void;
  onOpenRules: () => void;
  onOpenGrammar: () => void;
  onOpenCompendium: () => void;
  isBgmOn: boolean;
  onToggleBgm: () => void;
}

const RULE_BUTTONS: { rule: RuleVariant; label: string; sub: string }[] = [
  { rule: 'normal', label: '通常', sub: '10問' },
  { rule: 'timeattack', label: '一閃', sub: '60秒' },
  { rule: 'suddendeath', label: '斬撃', sub: '1ミス終了' },
];

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
  const [expandedField, setExpandedField] = useState<GameMode | null>(null);

  const renderModeButton = (mode: ModeDefinition) => {
    const badge = mode.getBadge ? mode.getBadge(profile) : null;
    const examLocked =
      mode.id === 'exam' && !examStatus.available && !examStatus.isMaxRank;
    const isField = mode.section === 'field';
    const expanded = isField && expandedField === mode.id;
    return (
      <div key={mode.id} className="mode-entry">
        <button
          className={`mode-btn ${mode.buttonClass} ${examLocked ? 'mode-locked' : ''}`}
          onClick={() => {
            if (examLocked) return;
            if (isField) {
              setExpandedField(expanded ? null : mode.id);
            } else {
              onStartMode(mode.id, 'normal');
            }
          }}
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
        {expanded && (
          <div className="rule-buttons">
            {RULE_BUTTONS.map((rb) => (
              <button
                key={rb.rule}
                className={`rule-btn rule-btn-${rb.rule}`}
                onClick={() => onStartMode(mode.id, rb.rule)}
              >
                <span className="rule-btn-label">{rb.label}</span>
                <span className="rule-btn-sub">{rb.sub}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const storyModes = MODE_REGISTRY.filter((m) => m.section === 'story');
  const fieldModes = MODE_REGISTRY.filter((m) => m.section === 'field');
  const specialModes = MODE_REGISTRY.filter((m) => m.section === 'special');

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
              onClick={() => onStartMode('exam', 'normal')}
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

      {/* Mode Selection (セクション別にモード定義レジストリから描画) */}
      <div className="mode-selection-container">
        <div className="mode-select-label">陣立てを選択して出陣せよ</div>

        <div className="mode-section-heading">【本編討伐】</div>
        <p className="mode-section-note">
          弱点：妖狐＝助動詞の接続／烏天狗＝係り結び／藤原の大君＝敬語。弱点の出題が約6割出て、正解でダメージ1.5倍！
        </p>
        {storyModes.map(renderModeButton)}

        <div className="mode-section-heading">【文法修練】</div>
        <p className="mode-section-note">分野を選ぶとルール（通常／一閃／斬撃）を選べる</p>
        {fieldModes.map(renderModeButton)}

        <div className="mode-section-heading">【特別枠】</div>
        {specialModes.map(renderModeButton)}

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
