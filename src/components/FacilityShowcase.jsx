import React from 'react';
import facilityImg from '../assets/facility-showcase.webp';
import { Sparkles, Clock, Check } from 'lucide-react';

export default function FacilityShowcase() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '2rem 0 5rem' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(230, 62, 21, 0.25)',
          }}
        >
          {/* Main facility image */}
          <img
            src={facilityImg}
            alt="Haji Club Gym Facility and Workout Floor"
            width="1200"
            height="520"
            loading="lazy"
            style={{
              width: '100%',
              maxHeight: '520px',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.85) contrast(1.1)',
            }}
          />

          {/* Dark gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(17, 14, 16, 0.95) 0%, rgba(17, 14, 16, 0.4) 60%, transparent 100%)',
            }}
          />

          {/* Overlay Content */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                <Sparkles size={16} />
                <span>STATE-OF-THE-ART GYM INFRASTRUCTURE</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                }}
              >
                Engineered for Peak Athletic Performance
              </h3>

              <p style={{ color: '#d1d5db', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Every corner of our 7,000+ sq ft area is optimized for progression, from heavy powerlifting platforms
                to ergonomic biomechanical resistance machines and dedicated functional zones.
              </p>
            </div>

            {/* Quick Timing & Badge */}
            <div
              style={{
                background: 'rgba(26, 23, 26, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Clock size={24} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase' }}>
                  Open 7 Days a Week
                </div>
                <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700 }}>
                  06:00 AM – 12:00 Midnight
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
