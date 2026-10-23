import React, { useEffect, useState } from 'react';

export interface FloatingDamage {
  id: number;
  text: string;
  isCritical: boolean;
  isPlayerDamage?: boolean;
}

interface BattleEffectsProps {
  showSlash: boolean;
  damageQueue: FloatingDamage[];
  isFever: boolean;
}

export const BattleEffects: React.FC<BattleEffectsProps> = ({
  showSlash,
  damageQueue,
  isFever,
}) => {
  const [activeSlash, setActiveSlash] = useState(false);

  useEffect(() => {
    if (showSlash) {
      setActiveSlash(true);
      const timer = setTimeout(() => setActiveSlash(false), 380);
      return () => clearTimeout(timer);
    }
  }, [showSlash]);

  return (
    <div className="battle-effects-layer" pointer-events-none="true">
      {/* Katana Slash Light Beam */}
      {activeSlash && (
        <div className={`slash-effect ${isFever ? 'slash-fever' : ''}`} />
      )}

      {/* Floating Damage Text Indicators */}
      <div className="damage-container">
        {damageQueue.map((item) => (
          <div
            key={item.id}
            className={`floating-damage ${
              item.isPlayerDamage
                ? 'damage-player'
                : item.isCritical
                ? 'damage-critical'
                : 'damage-enemy'
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
