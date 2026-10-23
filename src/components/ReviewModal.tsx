import React from 'react';
import { MistakeItem } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  mistakes: MistakeItem[];
  onClose: () => void;
  onStartReviewDrill?: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  mistakes,
  onClose,
  onStartReviewDrill,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box review-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>復習の書 〜誤答の省察と解説〜</h2>
          <button className="close-x-btn" onClick={onClose} aria-label="閉じる">
            ✕
          </button>
        </div>

        {mistakes.length === 0 ? (
          <div className="empty-mistakes">
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🌸</div>
            <h3 style={{ color: 'var(--gold-light)', marginBottom: '8px' }}>全問正解！誤りなし</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              すべての言霊を正しく繋ぎ、完璧に妖怪を浄化せり。<br />
              助動詞の接続・係り結びを深く会得した証なり。
            </p>
          </div>
        ) : (
          <>
            <p className="review-intro">
              討伐中に見られた接続不備・結びの乱れは以下の<b>{mistakes.length}件</b>なり。<br />
              理屈を理解し、次なる戦いに備えよ。
            </p>

            <div className="mistakes-list">
              {mistakes.map((m, idx) => (
                <div key={idx} className="mistake-card">
                  <div className="mistake-header">
                    <span className="mistake-badge">第 {idx + 1} 問</span>
                    <span className="mistake-word">
                      {m.targetWord} <span className="mistake-form">【{m.targetForm}】</span>
                    </span>
                  </div>

                  <div className="mistake-comparison">
                    <div className="comp-item comp-wrong">
                      <span className="comp-tag wrong">あなたの選択</span>
                      <span className="comp-val">「{m.chosenText}」</span>
                      {m.chosenConn && <span className="comp-sub">（{m.chosenConn}接続）</span>}
                    </div>

                    <div className="comp-item comp-right">
                      <span className="comp-tag right">正解の言霊</span>
                      <span className="comp-val">「{m.correctAnswer}」</span>
                      <span className="comp-sub">（{m.targetForm}に接続）</span>
                    </div>
                  </div>

                  <div className="mistake-expl">
                    <b>解説:</b> {m.explanation}
                  </div>
                </div>
              ))}
            </div>

            {onStartReviewDrill && (
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <button
                  className="btn-main"
                  style={{ fontSize: '1.05rem', padding: '12px 28px' }}
                  onClick={() => {
                    onClose();
                    onStartReviewDrill();
                  }}
                >
                  間違えた問題のみで特訓出陣！
                </button>
              </div>
            )}
          </>
        )}

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <button className="btn-sub" style={{ padding: '8px 30px' }} onClick={onClose}>
            書を閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
