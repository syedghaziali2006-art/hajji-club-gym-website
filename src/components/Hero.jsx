import React from 'react';
import heroAthlete from '../assets/hero-athlete.webp';
import heroBg from '../assets/hero-bg.webp';
import badgeSmall from '../assets/badge-124x44.png';
import badgeVertical from '../assets/badge-29x131.png';
import { ArrowRight, Flame, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center',
        background: `radial-gradient(circle at 75% 30%, rgba(230, 62, 21, 0.15) 0%, rgba(17, 14, 16, 0.98) 70%), url(${heroBg}) center/cover no-repeat`,
        overflow: 'hidden',
        contain: 'paint',
      }}
    >
      {/* Ambient background glow elements isolated inside strict container */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          contain: 'strict',
        }}
      >
        <div
          className="ambient-glow"
          style={{
            top: '15%',
            right: '10%',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(230, 62, 21, 0.22) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <div
          className="ambient-glow"
          style={{
            bottom: '5%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(230, 62, 21, 0.12) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
      </div>

      {/* Floating decorative badges from original template */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '3%',
          zIndex: 5,
          animation: 'floatUpDown 6s ease-in-out infinite',
          opacity: 0.85,
        }}
        className="hero-badge-left"
        aria-hidden="true"
      >
        <img
          src={badgeVertical}
          alt=""
          width="26"
          height="117"
          style={{ width: '26px', height: 'auto', filter: 'drop-shadow(0 0 12px rgba(230,62,21,0.3))' }}
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          zIndex: 5,
          animation: 'floatUpDown 7s ease-in-out infinite reverse',
          opacity: 0.85,
        }}
        className="hero-badge-right"
        aria-hidden="true"
      >
        <img
          src={badgeSmall}
          alt=""
          width="110"
          height="39"
          style={{ width: '110px', height: 'auto', filter: 'drop-shadow(0 0 15px rgba(230,62,21,0.4))' }}
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
          }}
        >
          {/* Left Column: Headlines & CTA */}
          <div style={{ maxWidth: '640px' }}>
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <Flame size={14} color="var(--accent)" />
              <span>HAJI CLUB • GYM &amp; FITNESS • KARACHI</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.05,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              Transform Your Body at
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #ff4d24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  marginTop: '0.25rem',
                }}
              >
                Haji Club Karachi
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
              }}
            >
              Located in Block-13 Federal B Area near Waterpump Chowrangi, Karachi. Experience a vast workout floor
              with complete range of gym machines, swimming pool, yoga &amp; aerobics, certified coaches, and the most economical fees in the city.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '3rem',
              }}
            >
              <a href="#pricing" className="btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '0.95rem' }}>
                <span>VIEW MEMBERSHIP FEES</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '0.95rem' }}>
                <span>FIND ON MAP</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.75rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>4.3 ★ (1,245 Reviews)</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Google Verified</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <Flame size={18} />
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>Gym &amp; Swimming Pool</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Aerobics &amp; Yoga</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>Near Waterpump</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Block 13, F.B. Area, Karachi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Visual backdrop frame */}
            <div
              style={{
                position: 'relative',
                maxWidth: '520px',
                width: '100%',
              }}
            >
              <img
                src={heroAthlete}
                alt="Haji Club Karachi Gym Fitness Athlete"
                width="894"
                height="675"
                fetchPriority="high"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.85)) drop-shadow(0 0 35px rgba(230, 62, 21, 0.25))',
                  position: 'relative',
                  zIndex: 2,
                }}
              />

              {/* Decorative floating stats card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '-5%',
                  background: 'rgba(26, 23, 26, 0.92)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 77, 36, 0.3)',
                  padding: '1rem 1.4rem',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  animation: 'floatUpDown 5s ease-in-out infinite',
                }}
                className="hero-float-card"
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #ff4d24, #ff7a59)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                  }}
                >
                  <Flame size={24} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: '1.25rem',
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    2000+
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                    Active Club Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-badge-left, .hero-badge-right {
            display: none !important;
          }
          .hero-float-card {
            left: 5% !important;
            bottom: 5% !important;
          }
        }
      `}</style>
    </section>
  );
}
