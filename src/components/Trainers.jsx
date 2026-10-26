import React from 'react';
import trainer1 from '../assets/trainer-1.jpg';
import trainer2 from '../assets/trainer-2.jpg';
import trainer3 from '../assets/trainer-3.jpg';

export default function Trainers() {
  const trainers = [
    {
      name: 'Alexandre Silva',
      role: 'Fitness Coach',
      specialty: 'Strength & Hypertrophy Specialist',
      image: trainer1,
      experience: '8+ Years Exp.',
    },
    {
      name: 'Marcus Vance',
      role: 'Fitness Coach',
      specialty: 'CrossFit & Conditioning Coach',
      image: trainer2,
      experience: '10+ Years Exp.',
    },
    {
      name: 'David Kalu',
      role: 'Fitness Coach',
      specialty: 'Body Transformation & Fat Loss',
      image: trainer3,
      experience: '7+ Years Exp.',
    },
  ];

  return (
    <section id="trainers" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            TEAM
          </div>
          <h2 className="section-title">
            MEET OUR EXPERT <span>FITNESS TRAINERS</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Train alongside certified elite professionals who provide personalized coaching, biomechanical correction,
            and nutritional advice to unlock your peak physical potential.
          </p>
        </div>

        {/* Trainer Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
          }}
        >
          {trainers.map((coach, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
              }}
              className="trainer-card"
            >
              {/* Trainer Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  overflow: 'hidden',
                  backgroundColor: '#1a181a',
                }}
              >
                <img
                  src={coach.image}
                  alt={coach.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease',
                  }}
                  className="trainer-img"
                />

                {/* Gradient vignette */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(29, 27, 29, 0.95) 0%, rgba(29, 27, 29, 0.2) 60%, transparent 100%)',
                  }}
                />

                {/* Experience Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(17, 14, 16, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(255, 77, 36, 0.3)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                    letterSpacing: '0.08em',
                  }}
                >
                  {coach.experience}
                </span>

                {/* Social Floating Bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.6rem',
                    background: 'rgba(17, 14, 16, 0.88)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#ffffff', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }}
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram" style={{ fontSize: '18px' }}></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#ffffff', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }}
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f" style={{ fontSize: '17px' }}></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#ffffff', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }}
                    className="social-icon"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter" style={{ fontSize: '17px' }}></i>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=971565377884"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#25D366', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center' }}
                    className="social-icon"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '19px' }}></i>
                  </a>
                </div>
              </div>

              {/* Card Meta */}
              <div style={{ padding: '1.75rem', textAlign: 'center' }}>
                <span
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.35rem',
                  }}
                >
                  {coach.role}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    marginBottom: '0.4rem',
                  }}
                >
                  {coach.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{coach.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trainer-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 77, 36, 0.4) !important;
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 77, 36, 0.15) !important;
        }
        .trainer-card:hover .trainer-img {
          transform: scale(1.05);
        }
        .social-icon:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
}
