import React from 'react';
import { GameMode, PlayerProfile } from '../types';
import { getPlayerRank } from '../data';

interface ResultScreenProps {
  isWin: boolean;
  gameMode: GameMode;
  maxCombo: number;
  mistakesCount: number;
  stagesCleared: number;
  wave: number;
  score: number;
  expGained: number;
  newTitles: string[];
  profile: PlayerProfile;
  onRestartSameMode: () => void;
  onReturnToTitle: () => void;
  onOpenReview: () => void;
  onOpenGrammar: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  isWin,
  gameMode,
  maxCombo,
  mistakesCount,
  stagesCleared,
  wave,
  score,
  expGained,
  newTitles,
  profile,
  onRestartSameMode,
  onReturnToTitle,
  onOpenReview,
  onOpenGrammar,
}) => {
  const { currentRank } = getPlayerRank(profile.exp);

  let modeHeading = '本編討伐・結末';
  let modeTitle = isWin ? '免許皆伝！' : '気力尽きたり';
  let modeSubtitle = isWin ? '全三幕制覇・言霊成就' : '無念・再起を期す';

  if (gameMode === 'endless') {
    modeHeading = '百鬼夜行・討伐記録';
    modeTitle = `${wave} 体撃破！`;
    modeSubtitle = wave >= 5 ? '百鬼を圧倒せし大活劇' : '妖魔の群れに呑まれり';
  } else if (gameMode === 'timeattack') {
    modeHeading = '六十秒一閃・成績';
    modeTitle = `${score} 点獲得！`;
    modeSubtitle = score >= 400 ? '神速の言霊使い' : 'さらなる速度を磨け';
  } else if (gameMode === 'daily') {
    modeHeading = '日課祓い・記録';
    modeTitle = '日課成就！';
    modeSubtitle =
      profile.dailyStreak > 0
        ? `連続 ${profile.dailyStreak} 日の修練、本日分を記録せり`
        : '本日の修練を完了せり';
  } else if (gameMode === 'suddendeath') {
    modeHeading = '斬撃一閃・記録';
    modeTitle = `${score} 連続正解！`;
    modeSubtitle =
      score > 0 && score >= profile.suddenDeathBest
        ? '自己最高記録に到達せり'
        : '一撃に散れど、次こそは';
  }

  return (
    <div
      id="result-screen"
      className="screen"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px 16px',
        backgroundColor: 'rgba(8, 11, 18, 0.92)',
        overflowY: 'auto',
      }}
    >
      <div className="title-banner" style={{ width: '100%', maxWidth: '420px', margin: 'auto 0' }}>
        <div style={{ fontSize: '0.78rem', color: '#94a3b8', letterSpacing: '0.2em', marginBottom: '2px' }}>
          {modeHeading}
        </div>
        <div className="subtitle" id="result-subtitle">
          {modeSubtitle}
        </div>
        <h1 className="main-title" id="result-title" style={{ fontSize: '2.1rem' }}>
          {modeTitle}
        </h1>

        {/* EXP and Rank Update Card */}
        <div className="result-exp-card">
          <div className="exp-gain-text">
            徳（EXP）獲得: <b style={{ color: '#fef08a' }}>+{expGained}</b>
          </div>
          <div className="result-rank-text">
            朝廷位階：<b>{currentRank.title}</b>
          </div>
        </div>

        {/* Unlocked Titles Notification */}
        {newTitles.length > 0 && (
          <div className="new-titles-banner">
            <span className="spark-icon">✨</span> 新たな称号を獲得！
            <div className="new-titles-list">
              {newTitles.map((t) => (
                <span key={t} className="new-title-tag">【{t}】</span>
              ))}
            </div>
          </div>
        )}

        {/* Performance Stats */}
        <div className="result-stats-box">
          {gameMode === 'story' && (
            <div className="stat-col">
              <span className="stat-label">討伐幕数</span>
              <span className="stat-value">{stagesCleared} / 3</span>
            </div>
          )}
          {gameMode === 'endless' && (
            <div className="stat-col">
              <span className="stat-label">討伐体数</span>
              <span className="stat-value">{wave} 体</span>
            </div>
          )}
          {gameMode === 'timeattack' && (
            <div className="stat-col">
              <span className="stat-label">総得点</span>
              <span className="stat-value" style={{ color: 'var(--gold-light)' }}>
                {score}
              </span>
            </div>
          )}
          {gameMode === 'daily' && (
            <div className="stat-col">
              <span className="stat-label">連続日数</span>
              <span className="stat-value" style={{ color: 'var(--gold-light)' }}>
                {profile.dailyStreak} 日
              </span>
            </div>
          )}
          {gameMode === 'suddendeath' && (
            <>
              <div className="stat-col">
                <span className="stat-label">連続正解</span>
                <span className="stat-value" style={{ color: 'var(--gold-light)' }}>
                  {score}
                </span>
              </div>
              <div className="stat-col">
                <span className="stat-label">自己最高</span>
                <span className="stat-value">{profile.suddenDeathBest}</span>
              </div>
            </>
          )}

          <div className="stat-col">
            <span className="stat-label">最大連撃</span>
            <span className="stat-value" style={{ color: 'var(--gold-light)' }}>
              {maxCombo}
            </span>
          </div>
          <div className="stat-col">
            <span className="stat-label">誤答数</span>
            <span
              className="stat-value"
              style={{ color: mistakesCount > 0 ? '#fca5a5' : '#6ee7b7' }}
            >
              {mistakesCount}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="result-actions-list">
          {mistakesCount > 0 ? (
            <button
              className="btn-main"
              style={{
                fontSize: '1rem',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 100%)',
                borderColor: '#93c5fd',
                width: '100%',
              }}
              onClick={onOpenReview}
            >
              📖 誤答を復習する（{mistakesCount}問）
            </button>
          ) : (
            <button
              className="btn-sub"
              style={{ borderColor: '#6ee7b7', color: '#6ee7b7', width: '100%' }}
              onClick={onOpenReview}
            >
              ✨ 全問正解の記録を確認
            </button>
          )}

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', width: '100%' }}>
            <button
              className="btn-sub"
              style={{ flex: 1, padding: '10px 8px' }}
              onClick={onOpenGrammar}
            >
              📜 便覧
            </button>
            <button
              className="btn-sub"
              style={{ flex: 1, padding: '10px 8px' }}
              onClick={onReturnToTitle}
            >
              陣選択へ
            </button>
            <button
              className="btn-main"
              style={{ flex: 1.2, padding: '10px 10px', fontSize: '0.98rem' }}
              onClick={onRestartSameMode}
            >
              再挑戦
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
