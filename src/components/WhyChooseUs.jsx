import React from 'react';
import gymFacility from '../assets/gym-facility-1.jpg';
import { Maximize, Users, Target, Dumbbell, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Maximize size={32} color="var(--accent)" />,
      badge: '7000+ Sq Ft',
      title: 'Spacious 7000+ Sq Ft Training Area',
      description:
        'Enjoy a spacious 7000+ sq ft gym designed for comfortable and effective workouts with dedicated strength, cardio, and functional fitness zones.',
    },
    {
      icon: <Users size={32} color="var(--accent)" />,
      badge: 'Community',
      title: 'Motivating Fitness Community',
      description:
        'Our gym is more than just a workout space. It is a supportive community where members motivate each other to stay consistent and achieve better results.',
    },
    {
      icon: <Target size={32} color="var(--accent)" />,
      badge: 'All Levels',
      title: 'Programs for Every Goal',
      description:
        'Whether your goal is weight loss, muscle building, strength training, or improving overall fitness, we offer programs designed for every fitness level.',
    },
    {
      icon: <Dumbbell size={32} color="var(--accent)" />,
      badge: 'Premium Tech',
      title: 'Modern Equipment',
      description:
        'We provide a wide range of high-quality strength and cardio machines, allowing members to perform effective workouts and target every muscle group.',
    },
  ];

  return (
    <section id="features" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            FEATURE
          </div>
          <h2 className="section-title">
            WHY CHOOSE <span>US</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Discover why Total Fit Dubai is the gym of choice for athletes, beginners, and fitness enthusiasts across Dubai.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="feature-card"
            >
              {/* Corner accent glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'var(--accent-glow)',
                  filter: 'blur(30px)',
                  opacity: 0.2,
                  transition: 'opacity 0.3s ease',
                }}
                className="card-glow"
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.75rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '14px',
                    background: 'var(--accent-subtle)',
                    border: '1px solid rgba(255, 77, 36, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {feat.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    background: 'rgba(255, 77, 36, 0.08)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 77, 36, 0.2)',
                  }}
                >
                  {feat.badge}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '1rem',
                  lineHeight: 1.25,
                }}
              >
                {feat.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  flexGrow: 1,
                }}
              >
                {feat.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                <span>Read More</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 77, 36, 0.45) !important;
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 77, 36, 0.15) !important;
        }
        .feature-card:hover .card-glow {
          opacity: 0.6 !important;
        }
      `}</style>
    </section>
  );
}
