import React, { useEffect, useState } from 'react';
import { StoryPanel } from '../storyData';
import { sound } from '../sound';

interface StoryScreenProps {
  /** 表示するコマ列 */
  panels: StoryPanel[];
  /** シーン見出し（例: 第一幕：妖狐の社） */
  heading?: string;
  /** 既読シーンかどうか（既読なら自動送りトグルが使える） */
  isSeen: boolean;
  /** 全コマ終了／スキップ時の遷移先処理 */
  onFinish: () => void;
}

/**
 * 本編ストーリー表示画面（第8弾）。
 * ポートレート＋話者名＋テキストボックスをタップで送り、常設スキップとコマ数表示を持つ。
 * 既読シーンでは自動送り（約1.8秒間隔）をオンにできる。
 */
export const StoryScreen: React.FC<StoryScreenProps> = ({ panels, heading, isSeen, onFinish }) => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const panel = panels[index];
  const isLast = index >= panels.length - 1;

  const advance = () => {
    if (isLast) {
      onFinish();
    } else {
      sound.playBell();
      setIndex((i) => Math.min(i + 1, panels.length - 1));
    }
  };

  // 既読シーンの高速送り: 自動送りトグルがオンの間、一定間隔で次のコマへ進む
  useEffect(() => {
    if (!autoPlay || !isSeen) return;
    const timer = setTimeout(() => {
      if (isLast) {
        onFinish();
      } else {
        setIndex((i) => Math.min(i + 1, panels.length - 1));
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [autoPlay, isSeen, index, isLast, onFinish, panels.length]);

  if (!panel) return null;

  return (
    <div id="story-screen" className="screen story-screen">
      <div className="story-topbar">
        <span className="story-heading">{heading ?? '物語'}</span>
        <span className="story-counter">
          {index + 1} / {panels.length}
        </span>
      </div>

      <button type="button" className="story-stage" onClick={advance} aria-label="次のコマへ">
        {panel.image ? (
          <div className="story-portrait-frame">
            <img src={panel.image} alt={panel.speaker} className="story-portrait-img" referrerPolicy="no-referrer" />
          </div>
        ) : (
          <div className="story-portrait-frame story-portrait-narration">
            <span className="story-narration-mark">〜 語り 〜</span>
          </div>
        )}

        <div className="story-textbox">
          <div className="story-speaker">{panel.speaker}</div>
          <p className="story-text">{panel.text}</p>
          <div className="story-next-hint">{isLast ? 'タップで進む ▸' : 'タップで次へ ▼'}</div>
        </div>
      </button>

      <div className="story-controls">
        {isSeen && (
          <button
            type="button"
            className={`story-auto-btn ${autoPlay ? 'story-auto-on' : ''}`}
            onClick={() => setAutoPlay((v) => !v)}
          >
            {autoPlay ? '⏸ 自動送り中' : '⏩ 自動送り'}
          </button>
        )}
        <button type="button" className="story-skip-btn" onClick={onFinish}>
          スキップ ≫
        </button>
      </div>
    </div>
  );
};
