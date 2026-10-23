import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rot: number;
  rotSpeed: number;
  color: string;
}

interface SakuraCanvasProps {
  isStormMode?: boolean;
}

export const SakuraCanvas: React.FC<SakuraCanvasProps> = ({ isStormMode = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isStormRef = useRef(isStormMode);

  useEffect(() => {
    isStormRef.current = isStormMode;
  }, [isStormMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let petals: Petal[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const petalCount = 36;
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 6,
        speedX: Math.random() * 1.5 - 0.5,
        speedY: Math.random() * 1.5 + 1,
        rot: Math.random() * 360,
        rotSpeed: Math.random() * 2 - 1,
        color: Math.random() > 0.25 ? 'rgba(255, 192, 203, 0.65)' : 'rgba(251, 238, 167, 0.7)',
      });
    }

    const drawSakura = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stormMultiplier = isStormRef.current ? 2.4 : 1.0;

      petals.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = isStormRef.current ? 'rgba(254, 240, 138, 0.85)' : p.color;

        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.speedX * stormMultiplier;
        p.y += p.speedY * stormMultiplier;
        p.rot += p.rotSpeed * stormMultiplier;

        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 10) {
          p.x = -10;
        } else if (p.x < -10) {
          p.x = canvas.width + 10;
        }
      });

      animId = requestAnimationFrame(drawSakura);
    };

    drawSakura();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="sakura-canvas" ref={canvasRef} />;
};
