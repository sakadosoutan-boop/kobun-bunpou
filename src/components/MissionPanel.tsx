import React from 'react';
import { PlayerProfile } from '../types';
import { getMissionViews } from '../modes/missions';

interface MissionPanelProps {
  profile: PlayerProfile;
}

/** タイトル画面に表示する週間ミッション（3件・進捗バー付き） */
export const MissionPanel: React.FC<MissionPanelProps> = ({ profile }) => {
  const views = getMissionViews(profile);
  if (views.length === 0) return null;

  return (
    <div className="mission-panel">
      <div className="mission-panel-title">📜 今週の任務（週間ミッション）</div>
      {views.map((view) => {
        const percent = Math.round((view.progress / view.target) * 100);
        return (
          <div key={view.template.id} className={`mission-row ${view.done ? 'mission-done' : ''}`}>
            <div className="mission-row-head">
              <span className="mission-text">
                {view.done ? '✅ ' : ''}
                {view.template.text(view.target)}
              </span>
              <span className="mission-progress-label">
                {view.done ? `達成！ +${view.template.reward} 徳` : `${view.progress} / ${view.target}`}
              </span>
            </div>
            <div className="mission-bar">
              <div className="mission-bar-fill" style={{ width: `${percent}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
