import React from 'react';
import { Dumbbell, Flame, Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    'PLANK',
    'CARDIO',
    'BENCH PRESS',
    'DEAD LIFT',
    'PILATES',
    'DUMBBELL',
    'STRENGTH',
    'CROSSFIT',
  ];

  // Duplicate for seamless 100% infinite scroll
  const marqueeList = [...items, ...items, ...items, ...items];

  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(90deg, #161416 0%, #1e1b1e 50%, #161416 100%)',
        borderTop: '2px solid rgba(255, 77, 36, 0.4)',
        borderBottom: '2px solid rgba(255, 77, 36, 0.4)',
        padding: '1.25rem 0',
        overflow: 'hidden',
        boxShadow: '0 0 25px rgba(255, 77, 36, 0.15)',
        zIndex: 20,
      }}
    >
      {/* Edge gradient fades */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, #110e10, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, #110e10, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marqueeScroll 28s linear infinite',
          willChange: 'transform',
        }}
      >
        {marqueeList.map((term, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '0 1.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1.6rem',
                letterSpacing: '0.08em',
                color: idx % 2 === 0 ? '#ffffff' : 'var(--accent)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                textShadow: idx % 2 !== 0 ? '0 0 15px rgba(255, 77, 36, 0.5)' : 'none',
              }}
            >
              {term}
            </span>
            <div
              style={{
                color: 'var(--accent)',
                opacity: 0.8,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {idx % 3 === 0 ? (
                <Dumbbell size={20} />
              ) : idx % 3 === 1 ? (
                <Flame size={18} />
              ) : (
                <Sparkles size={16} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
