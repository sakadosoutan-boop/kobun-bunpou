import React, { useState } from 'react';
import { PlayerProfile } from '../types';
import { AUXILIARY_CARDS, ALL_TITLES, getHeldRankInfo } from '../data';

interface CompendiumModalProps {
  isOpen: boolean;
  profile: PlayerProfile;
  onClose: () => void;
}

export const CompendiumModal: React.FC<CompendiumModalProps> = ({
  isOpen,
  profile,
  onClose,
}) => {
  const [tab, setTab] = useState<'ranks' | 'cards' | 'records'>('ranks');

  if (!isOpen) return null;

  const { currentRank, nextRank, progress } = getHeldRankInfo(profile);

  const accuracy = profile.totalQuestionsAnswered > 0
    ? Math.round((profile.totalCorrect / profile.totalQuestionsAnswered) * 100)
    : 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box compendium-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>言霊宝物庫 〜位階と札帖〜</h2>
          <button className="close-x-btn" onClick={onClose} aria-label="閉じる">
            ✕
          </button>
        </div>

        {/* Tab Controls */}
        <div className="grammar-tabs">
          <button
            className={`grammar-tab-btn ${tab === 'ranks' ? 'active' : ''}`}
            onClick={() => setTab('ranks')}
          >
            🎖️ 位階と称号
          </button>
          <button
            className={`grammar-tab-btn ${tab === 'cards' ? 'active' : ''}`}
            onClick={() => setTab('cards')}
          >
            🎴 助動詞札帖
          </button>
          <button
            className={`grammar-tab-btn ${tab === 'records' ? 'active' : ''}`}
            onClick={() => setTab('records')}
          >
            📜 歴代戦績
          </button>
        </div>

        <div className="compendium-content">
          {/* Tab 1: Ranks & Titles */}
          {tab === 'ranks' && (
            <div className="ranks-panel">
              <div className="current-rank-card">
                <div className="rank-badge-title">現在の朝廷位階</div>
                <div className="rank-name">{currentRank.title}</div>
                <div className="rank-desc">{currentRank.description}</div>

                <div className="exp-progress-container">
                  <div className="exp-labels">
                    <span>徳（EXP）: <b>{profile.exp}</b></span>
                    {nextRank ? (
                      <span>次位まで: {nextRank.reqExp - profile.exp}</span>
                    ) : (
                      <span>最高位到達！</span>
                    )}
                  </div>
                  <div className="exp-bar-track">
                    <div className="exp-bar-fill" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>

              <div className="titles-section-heading">獲得称号一覧</div>
              <div className="titles-grid">
                {ALL_TITLES.map((t) => {
                  const unlocked = profile.unlockedTitles.includes(t.name);
                  return (
                    <div
                      key={t.id}
                      className={`title-badge-card ${unlocked ? 'unlocked' : 'locked'}`}
                    >
                      <div className="title-icon">{unlocked ? '✨' : '🔒'}</div>
                      <div className="title-name">{t.name}</div>
                      <div className="title-condition">{t.condition}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Cards Compendium */}
          {tab === 'cards' && (
            <div className="cards-panel">
              <div className="card-compendium-intro">
                正解を重ねることで札の熟練度が上昇し、星（★）が点灯します。
              </div>

              <div className="cards-mastery-grid">
                {AUXILIARY_CARDS.map((card) => {
                  const count = profile.cardMastery[card.name] || 0;
                  const stars = count >= 10 ? '★★★' : count >= 4 ? '★★☆' : count >= 1 ? '★☆☆' : '☆☆☆';
                  const isMastered = count >= 10;

                  return (
                    <div
                      key={card.name}
                      className={`mastery-card ${isMastered ? 'card-golden' : ''}`}
                    >
                      <div className="m-card-header">
                        <span className="m-card-name">{card.name}</span>
                        <span className="m-card-stars">{stars}</span>
                      </div>
                      <div className="m-card-conn">{card.conn}接続</div>
                      <div className="m-card-mean">{card.mean}</div>
                      <div className="m-card-count">成功回数: {count}回</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 3: Records */}
          {tab === 'records' && (
            <div className="records-panel">
              <div className="record-stat-row">
                <span className="r-label">⛩️ 本編（三幕）制覇回数</span>
                <span className="r-val">{profile.storyClears} 回</span>
              </div>
              <div className="record-stat-row">
                <span className="r-label">🌙 百鬼夜行 最高到達波</span>
                <span className="r-val">{profile.endlessHighWave} 体撃破</span>
              </div>
              <div className="record-stat-row">
                <span className="r-label">⏳ 六十秒一閃 最高得点</span>
                <span className="r-val">{profile.timeAttackHighScore} 点</span>
              </div>
              <div className="record-stat-row">
                <span className="r-label">✍️ 累計解答問題数</span>
                <span className="r-val">{profile.totalQuestionsAnswered} 問</span>
              </div>
              <div className="record-stat-row">
                <span className="r-label">🎯 総合正解率</span>
                <span className="r-val">{accuracy}%</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '14px' }}>
          <button className="btn-sub" style={{ padding: '8px 30px' }} onClick={onClose}>
            宝物庫を閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
