import React, { useState, useEffect } from 'react';
import testimonialsBg from '../assets/testimonials-bg.webp';
import { Quote, Star, ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Mr. Mohsin',
      badge: 'Local Guide · 22 reviews',
      rating: 5,
      date: '4 months ago',
      quote:
        'The one and only gym that I love due to its vast area of gym, amazing trainers and varieties of different machines for each and every single muscle in the body and with all this they charge very affordable rates!',
    },
    {
      name: 'Fariha Ashraf',
      badge: 'Local Guide · 92 reviews',
      rating: 5,
      date: '2 months ago',
      quote:
        'A decent gym for beginners who want to build discipline and develop a consistent workout habit. The membership fee is quite nominal. Dedicated female timings and supportive workout environment.',
    },
    {
      name: 'Naveed Ahmed',
      badge: 'Local Guide · 635 reviews',
      rating: 5,
      date: 'Verified Member',
      quote:
        'One of the most economical gyms with the widest variety of equipment with Yoga and Aerobics facilities which is rare in this vicinity. Easy parking and plenty of workout zones.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section
      id="reviews"
      className="section"
      style={{
        position: 'relative',
        background: `radial-gradient(circle at center, rgba(29, 27, 29, 0.94) 0%, rgba(17, 14, 16, 0.98) 100%), url(${testimonialsBg}) center/cover no-repeat`,
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            GOOGLE REVIEWS
          </div>
          <h2 className="section-title">
            WHAT OUR MEMBERS <span>SAY ON GOOGLE</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real experiences from over 1,245+ members training at Haji Club, Block 13 Federal B Area, Karachi.
          </p>

          {/* Google Summary Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.65rem 1.5rem',
              borderRadius: '999px',
              marginTop: '1.5rem',
            }}
          >
            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>4.3</span>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#ffb703" color="#ffb703" />
              ))}
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Based on <strong>1,245 Google reviews</strong>
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(29, 27, 29, 0.88)',
                backdropFilter: 'blur(16px)',
                borderRadius: '18px',
                padding: '2.5rem 2rem',
                border:
                  idx === activeIndex
                    ? '1px solid var(--accent)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow:
                  idx === activeIndex
                    ? '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 77, 36, 0.2)'
                    : 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s ease',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => setActiveIndex(idx)}
              className="testimonial-card"
            >
              {/* Quote Mark */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  opacity: 0.15,
                  color: 'var(--accent)',
                }}
              >
                <Quote size={52} />
              </div>

              {/* Star Rating & Date */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.3rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={17} fill="#ffb703" color="#ffb703" />
                  ))}
                </div>
                <span style={{ fontSize: '0.78rem', color: '#d1d5db' }}>{rev.date}</span>
              </div>

              {/* Quote text */}
              <p
                style={{
                  color: '#e5e7eb',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                  flexGrow: 1,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                “{rev.quote}”
              </p>

              {/* Member details */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Avatar initial */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent), #ff7e5f)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.15rem',
                  }}
                >
                  {rev.name.charAt(0)}
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {rev.name}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--accent)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle size={13} />
                    <span>{rev.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Indicator Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Previous Review"
          >
            <ChevronLeft size={20} />
          </button>

          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                minWidth: '44px',
                minHeight: '44px',
                padding: '12px 6px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label={`Go to review ${idx + 1}`}
            >
              <span
                style={{
                  display: 'block',
                  width: idx === activeIndex ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '999px',
                  background: idx === activeIndex ? 'var(--accent)' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                }}
              />
            </button>
          ))}

          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Next Review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 77, 36, 0.4) !important;
        }
      `}</style>
    </section>
  );
}
