import React from 'react';
import aboutGym from '../assets/about-gym.webp';
import bodybuilderCutout from '../assets/bodybuilder-cutout.webp';
import { ArrowRight, CheckCircle2, Users, Award, Maximize2 } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    {
      number: '2000+',
      label: 'Happy Members',
      icon: <Users size={24} color="var(--accent)" />,
      desc: 'Active fitness enthusiasts',
    },
    {
      number: '25+',
      label: 'Professional Trainers',
      icon: <Award size={24} color="var(--accent)" />,
      desc: 'Certified elite coaches',
    },
    {
      number: '7000+',
      label: 'Sq Ft Training Area',
      icon: <Maximize2 size={24} color="var(--accent)" />,
      desc: 'Modern workout zones',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          {/* Left Column: Image Composition */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <img
                src={aboutGym}
                alt="Haji Club Gym Interior and Workout Zones"
                width="750"
                height="587"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17, 14, 16, 0.9) 0%, transparent 50%)',
                }}
              />
            </div>

            {/* Overlapping Bodybuilder Athlete Cutout */}
            <div
              style={{
                position: 'absolute',
                bottom: '-5%',
                right: '-8%',
                width: '45%',
                maxWidth: '260px',
                zIndex: 10,
                filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.9))',
              }}
              className="about-athlete-cutout"
            >
              <img
                src={bodybuilderCutout}
                alt=""
                aria-hidden="true"
                width="199"
                height="380"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>

            {/* Decorative Accent Border Box */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                width: '120px',
                height: '120px',
                borderTop: '3px solid var(--accent)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '12px 0 0 0',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Right Column: Narrative & Counters */}
          <div>
            <div className="section-tag">ABOUT HAJI CLUB</div>

            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
                marginBottom: '1.25rem',
              }}
            >
              Build Power, Strength &amp; Fitness at{' '}
              <span style={{ background: 'linear-gradient(135deg, #d4af37 0%, #ff4d24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Haji Club Karachi
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
              }}
            >
              At Haji Club (حاجی کلب), we are dedicated to helping our community transform their lives through physical fitness,
              discipline, and active sports. Located in Block-13 Federal B Area near Waterpump Chowrangi, Karachi,
              our club is known for its vast workout floor, extensive variety of equipment targeting each and every muscle,
              swimming pool, yoga, aerobics, and certified trainers with the most economical fees in the area.
            </p>

            {/* Value checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem',
                marginBottom: '2.5rem',
              }}
            >
              {[
                'Vast Area with Wide Range of Muscle Machines',
                'Swimming Pool, Aerobics & Yoga Facilities',
                'Dedicated Male & Female Timings & Sections',
                'Highly Economical & Affordable Membership Fees',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ marginBottom: '3rem' }}>
              <a
                href="#pricing"
                className="btn-primary"
                style={{
                  padding: '1rem 2.2rem',
                  letterSpacing: '0.12em',
                }}
              >
                <span>JOIN HAJI CLUB TODAY</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* 3 Numerical Stats Counters */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {[
                { number: '1,245+', label: 'Google Reviews', desc: 'Active member feedback', icon: <Users size={22} color="var(--accent)" /> },
                { number: '4.3 ★', label: 'Average Rating', desc: 'Google verified club', icon: <Award size={22} color="var(--accent)" /> },
                { number: 'Vast', label: 'Gym & Pool', desc: 'Complete fitness zones', icon: <Maximize2 size={22} color="var(--accent)" /> },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '1.2rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                  }}
                  className="stat-box"
                >
                  <div style={{ marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                      color: 'var(--text-white)',
                      lineHeight: 1,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#d1d5db' }}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stat-box:hover {
          background: rgba(255, 77, 36, 0.06) !important;
          border-color: rgba(255, 77, 36, 0.3) !important;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .about-athlete-cutout {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
