import React from 'react';
import { GameMode, PlayerProfile, RuleVariant } from '../types';
import { getHeldRankInfo, STAGES } from '../data';

/** 戦績カード画像（PNG）をCanvasで描画してダウンロードさせる。外部送信は行わない。 */
function downloadResultCard(params: {
  modeHeading: string;
  modeTitle: string;
  modeSubtitle: string;
  rankTitle: string;
  maxCombo: number;
  mistakesCount: number;
  score: number;
  expGained: number;
}) {
  const W = 800;
  const H = 1000;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#131022');
  bg.addColorStop(0.55, '#0a0e16');
  bg.addColorStop(1, '#1a0f14');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 6;
  ctx.strokeRect(24, 24, W - 48, H - 48);
  ctx.strokeStyle = 'rgba(212,175,55,0.45)';
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 40, W - 80, H - 80);

  const center = (text: string, y: number, font: string, color: string) => {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(text, W / 2, y);
  };
  const serif = '"Noto Serif JP","Hiragino Mincho ProN","Yu Mincho",serif';

  center('言霊文法帖', 150, `900 92px ${serif}`, '#f5d97e');
  center('〜 助動詞と係り結びの陣 〜', 205, `600 30px ${serif}`, '#d4af37');
  center(params.modeHeading, 300, `600 28px ${serif}`, '#94a3b8');
  center(params.modeTitle, 390, `900 64px ${serif}`, '#ffffff');
  center(params.modeSubtitle, 445, `400 28px ${serif}`, '#cbd5e1');

  ctx.strokeStyle = 'rgba(212,175,55,0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(140, 495);
  ctx.lineTo(W - 140, 495);
  ctx.stroke();

  const rows: [string, string][] = [
    ['朝廷位階', params.rankTitle],
    ['最大連撃', `${params.maxCombo} 連撃`],
    ['誤答数', `${params.mistakesCount} 問`],
    ['獲得した徳（EXP）', `+${params.expGained}`],
  ];
  rows.forEach(([label, value], i) => {
    const y = 580 + i * 78;
    ctx.font = `600 30px ${serif}`;
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'left';
    ctx.fillText(label, 150, y);
    ctx.font = `700 36px ${serif}`;
    ctx.fillStyle = '#fef08a';
    ctx.textAlign = 'right';
    ctx.fillText(value, W - 150, y);
  });

  const now = new Date();
  const dateText = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
  center(dateText, 920, `400 26px ${serif}`, '#64748b');

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const ymd = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(
      now.getDate()
    ).padStart(2, '0')}`;
    a.href = url;
    a.download = `kotodama-result-${ymd}.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }, 'image/png');
}

interface ResultScreenProps {
  isWin: boolean;
  gameMode: GameMode;
  ruleVariant: RuleVariant;
  maxCombo: number;
  mistakesCount: number;
  stagesCleared: number;
  wave: number;
  score: number;
  expGained: number;
  /** クリア特典の表示文（本編クリア時のみ。EXPは expGained に合算済み） */
  bonusText?: string | null;
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
  ruleVariant,
  maxCombo,
  mistakesCount,
  stagesCleared,
  wave,
  score,
  expGained,
  bonusText,
  newTitles,
  profile,
  onRestartSameMode,
  onReturnToTitle,
  onOpenReview,
  onOpenGrammar,
}) => {
  const { currentRank } = getHeldRankInfo(profile);

  const FIELD_HEADINGS: Partial<Record<GameMode, string>> = {
    verbs: '動詞系の陣・記録',
    aux: '助動詞系の陣・記録',
    words: '単語の陣・記録',
    particles: '助詞の陣・記録',
    keigo: '敬語の陣・記録',
  };
  const isField = FIELD_HEADINGS[gameMode] !== undefined;

  let modeHeading = FIELD_HEADINGS[gameMode] ?? '本編討伐・結末';
  let modeTitle = isWin ? '免許皆伝！' : '気力尽きたり';
  let modeSubtitle = isWin ? '全六幕制覇・言霊成就' : '無念・再起を期す';

  if (gameMode === 'endless') {
    modeHeading = '百鬼夜行・討伐記録';
    modeTitle = `${wave} 体撃破！`;
    modeSubtitle = wave >= 5 ? '百鬼を圧倒せし大活劇' : '妖魔の群れに呑まれり';
  } else if (gameMode === 'daily') {
    modeHeading = '日課祓い・記録';
    modeTitle = '日課成就！';
    modeSubtitle =
      profile.dailyStreak > 0
        ? `連続 ${profile.dailyStreak} 日の修練、本日分を記録せり`
        : '本日の修練を完了せり';
  } else if (isField) {
    if (ruleVariant === 'suddendeath') {
      modeTitle = `${score} 連続正解！`;
      modeSubtitle =
        score > 0 && score >= profile.suddenDeathBest
          ? '自己最高記録に到達せり'
          : '一撃に散れど、次こそは';
    } else if (ruleVariant === 'timeattack') {
      modeTitle = `${score} 問正解！`;
      modeSubtitle = '六十秒一閃、神速の修練なり';
    } else {
      modeTitle = `${score} 問正解！`;
      modeSubtitle = mistakesCount === 0 ? '分野の型、乱れなし' : '分野の修練、さらに磨くべし';
    }
  } else if (gameMode === 'review') {
    modeHeading = '怨念回収戦・記録';
    modeTitle = `${score} 問回収！`;
    modeSubtitle =
      profile.reviewQueue.length > 0
        ? `残りの怨念 ${profile.reviewQueue.length} 件、時を置いて再び現れる`
        : '怨念は全て回収されたり';
  } else if (gameMode === 'bossrush') {
    modeHeading = '連戦の間・記録';
    modeTitle = isWin ? '六連戦制覇！' : '連戦終幕';
    modeSubtitle = isWin ? '回復なき連戦を制したり' : '大増量の妖怪に屈したり';
  } else if (gameMode === 'exam') {
    modeHeading = '昇進試験・結果';
    modeTitle = isWin ? '合格・昇進！' : '不合格';
    modeSubtitle = isWin
      ? `新たな位階「${currentRank.title}」に就いた`
      : '修練は減らない。再挑戦で位階を掴め';
  }

  return (
    <div
      id="result-screen"
      className={`screen ${isWin ? 'result-win' : ''}`}
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

        {/* クリア特典（本編クリア時のみ表示。EXPは獲得分に合算済み） */}
        {bonusText && (
          <div className="story-bonus-banner">
            🎁 {bonusText}
          </div>
        )}

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
              <span className="stat-value">{stagesCleared} / {STAGES.length}</span>
            </div>
          )}
          {gameMode === 'endless' && (
            <div className="stat-col">
              <span className="stat-label">討伐体数</span>
              <span className="stat-value">{wave} 体</span>
            </div>
          )}
          {(isField ||
            gameMode === 'exam' ||
            gameMode === 'review') && ruleVariant !== 'suddendeath' && (
            <div className="stat-col">
              <span className="stat-label">正解数</span>
              <span className="stat-value" style={{ color: 'var(--gold-light)' }}>
                {score} / {score + mistakesCount}
              </span>
            </div>
          )}
          {gameMode === 'review' && (
            <div className="stat-col">
              <span className="stat-label">残りの怨念</span>
              <span className="stat-value">{profile.reviewQueue.length} 件</span>
            </div>
          )}
          {gameMode === 'bossrush' && (
            <div className="stat-col">
              <span className="stat-label">討伐幕数</span>
              <span className="stat-value">{stagesCleared} / {STAGES.length}</span>
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
          {isField && ruleVariant === 'suddendeath' && (
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

          <button
            className="btn-sub"
            style={{ borderColor: '#d4af37', color: '#f5d97e', width: '100%' }}
            onClick={() =>
              downloadResultCard({
                modeHeading,
                modeTitle,
                modeSubtitle,
                rankTitle: currentRank.title,
                maxCombo,
                mistakesCount,
                score,
                expGained,
              })
            }
          >
            🖼️ 戦績カードを保存（PNG）
          </button>

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
