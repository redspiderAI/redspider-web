import { useEffect, useState } from 'react';

type Rect = {
  id: number;
  side: 'left' | 'right';
  top: number; // percent
  left?: number; // percent when side left
  right?: number; // percent when side right
  width: number; // px
  height: number; // px
  rotate: number; // deg
  blur: number; // px
  opacity: number;
  bg: string;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function DecorativeRects() {
  const [rects, setRects] = useState<Rect[]>([]);

  useEffect(() => {
    const colors = ['#FF6B9B', '#FF4A76', '#B91C1C', '#7F1D1D', '#FF9FB3'];
    const count = Math.floor(rand(6, 12));
    const out: Rect[] = [];
    for (let i = 0; i < count; i++) {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const w = Math.round(rand(40, 360));
      const h = Math.round(rand(30, 300));
      const top = Math.round(rand(-5, 85));
      const lr = Math.round(rand(0, 6));
      out.push({
        id: i,
        side,
        top,
        left: side === 'left' ? lr : undefined,
        right: side === 'right' ? lr : undefined,
        width: w,
        height: h,
        rotate: Math.round(rand(-15, 15)),
        blur: Math.round(rand(4, 18)),
        opacity: parseFloat((rand(0.06, 0.18)).toFixed(2)),
        bg: colors[Math.floor(rand(0, colors.length))],
      });
    }
    setRects(out);
  }, []);

  return (
    <>
      {rects.map((r) => (
        <div
          key={r.id}
          aria-hidden
          style={{
            position: 'absolute',
            top: `${r.top}%`,
            left: r.side === 'left' ? `${r.left}%` : undefined,
            right: r.side === 'right' ? `${r.right}%` : undefined,
            width: `${r.width}px`,
            height: `${r.height}px`,
            background: r.bg,
            opacity: r.opacity,
            transform: `rotate(${r.rotate}deg)`,
            filter: `blur(${r.blur}px)`,
            borderRadius: '8px',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}
