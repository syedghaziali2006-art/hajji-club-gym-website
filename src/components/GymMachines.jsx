import React from 'react';
import machineClose from '../assets/haji-machine-close.webp';
import gymFloor from '../assets/haji-gym-floor.webp';
import gymHall from '../assets/haji-gym-hall.webp';
import { Dumbbell, Flame, CheckCircle, Sparkles, Eye, ArrowRight, ShieldCheck } from 'lucide-react';

export default function GymMachines() {
  const machineCards = [
    {
      title: 'Targeted Muscle Isolation Stations',
      category: 'Heavy-Duty Steel Pulley',
      badge: 'Custom Fabricated',
      image: machineClose,
      description:
        'Heavy-duty plate and chain driven cable stations designed for precision biomechanical resistance, deep muscle engagement, and strict form.',
      features: [
        'Dedicated Back & Lat Row Systems',
        'Heavy-Gauge Steel Framing',
        'Diamond Plate Stabilizer Footrests',
      ],
    },
    {
      title: 'Endless Cardio & Circuit Zone',
      category: 'Vast Floor Capacity',
      badge: 'Zero Waiting Time',
      image: gymFloor,
      description:
        'Long rows of cardio runners, incline trainers, and circuit equipment so you never have to wait in line during peak workout hours.',
      features: [
        'Massive Cardio & Stamina Lineup',
        'Spacious Walkways & Clean Tiled Floor',
        'Aerobic Conditioning Stations',
      ],
    },
    {
      title: 'Vast Multi-Zone Training Hall',
      category: 'Every Muscle Group Covered',
      badge: '100+ Total Machines',
      image: gymHall,
      description:
        'A comprehensive multi-level facility packed with flat, incline, decline Olympic benches, leg presses, squat racks, and cable crossovers.',
      features: [
        'Machines for Every Muscle Group',
        'Olympic Free-Weight Bays',
        'Upper Floor View & High Ventilation',
      ],
    },
  ];

  return (
    <section id="machines" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            REAL GYM TOUR &amp; EQUIPMENT
          </div>
          <h2 className="section-title">
            MACHINES FOR <span>EVERY SINGLE MUSCLE</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', fontSize: '1.05rem' }}>
            Take an authentic look inside Haji Club Karachi. We pride ourselves on having one of the widest varieties
            of heavy-duty fitness equipment and vast training floors in Federal B Area.
          </p>
        </div>

        {/* 3 Real Gym Photo Showcase Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.25rem',
            alignItems: 'stretch',
            marginBottom: '3.5rem',
          }}
        >
          {machineCards.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
              }}
              className="gym-machine-card"
            >
              {/* Photo Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '320px',
                  overflow: 'hidden',
                  backgroundColor: '#161416',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width="430"
                  height="320"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="machine-img"
                />

                {/* Dark Gradient Vignette */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(32, 30, 32, 0.98) 0%, rgba(32, 30, 32, 0.3) 50%, transparent 100%)',
                  }}
                />

                {/* Badge Tag */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(17, 14, 16, 0.88)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 77, 36, 0.35)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Sparkles size={12} color="var(--accent)" />
                  <span>{item.badge}</span>
                </span>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <span
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    display: 'block',
                  }}
                >
                  {item.category}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {item.description}
                </p>

                {/* Features checklist */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    marginTop: 'auto',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {item.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        fontSize: '0.82rem',
                        color: '#d1d5db',
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Member Real Quote Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(29, 27, 29, 0.95) 0%, rgba(38, 26, 28, 0.95) 100%)',
            border: '1px solid rgba(255, 77, 36, 0.3)',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              VERIFIED GOOGLE REVIEW
            </div>
            <p style={{ color: '#ffffff', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
              “The one and only gym that I love due to its vast area, amazing trainers and varieties of different machines
              for each and every single muscle in the body — with nominal and affordable fees!”
            </p>
            <span style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.5rem', display: 'inline-block' }}>
              — Mr. Mohsin, Local Guide (Google Verified Review)
            </span>
          </div>

          <a
            href="#pricing"
            className="btn-primary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '0.88rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span>JOIN THE CLUB</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .gym-machine-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 77, 36, 0.45) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 77, 36, 0.2) !important;
        }
        .gym-machine-card:hover .machine-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
