import React from 'react';
import logoImg from '../assets/logo.png';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0a080a',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ maxWidth: '340px' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <img
                src={logoImg}
                alt="Haji Club Gym & Fitness"
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                HAJI CLUB <br />
                <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>GYM &amp; FITNESS</span>
              </span>
            </a>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Dubai's premier strength, hypertrophy, and lifestyle transformation gym. Featuring 7,000+ sq ft of
              cutting-edge workout zones across Bur Dubai, Al Qusais, and Abu Hail.
            </p>

            {/* Social Media Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <i className="fab fa-instagram" style={{ fontSize: '18px' }}></i>, href: 'https://instagram.com' },
                { icon: <i className="fab fa-facebook-f" style={{ fontSize: '17px' }}></i>, href: 'https://facebook.com' },
                { icon: <i className="fab fa-twitter" style={{ fontSize: '17px' }}></i>, href: 'https://twitter.com' },
                { icon: <i className="fab fa-youtube" style={{ fontSize: '17px' }}></i>, href: 'https://youtube.com' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                  }}
                  className="footer-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Haji Club', href: '#about' },
                { name: 'Features & Equipment', href: '#features' },
                { name: 'Gym Machines & Tour', href: '#machines' },
                { name: 'Member Testimonials', href: '#reviews' },
                { name: 'Pricing & Memberships', href: '#pricing' },
                { name: 'Location & Map', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                    className="footer-link"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Workout Programs */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
              }}
            >
              Training Programs
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                'Strength & Heavy Powerlifting',
                'Hypertrophy & Bodybuilding',
                'High Intensity Cardio & HIIT',
                'Personal Coaching & Form Analysis',
                'Weight Loss & Body Recomposition',
                'Functional Mobility & Recovery',
              ].map((prog, idx) => (
                <li key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  • {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operating Hours */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
              }}
            >
              Contact &amp; Location
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  S.T.1-C &amp; 1-D, Block-13 Federal B Area Near Waterpump Chowrangi, Gulberg Town, Karachi, Pakistan
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>Open Today · Closes 11:00 PM</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    Monday – Saturday: 06:00 AM – 11:00 PM (Male &amp; Female Hours)
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Haji+Club+Federal+B+Area+Block+13+Karachi"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--accent)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} <span style={{ color: '#fff', fontWeight: 700 }}>Total Fit Dubai</span>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home" style={{ color: 'var(--text-muted)' }}>
              Privacy Policy
            </a>
            <a href="#home" style={{ color: 'var(--text-muted)' }}>
              Terms of Service
            </a>
            <a href="#home" style={{ color: 'var(--text-muted)' }}>
              Gym Rules
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-social-btn:hover {
          background: var(--accent) !important;
          border-color: var(--accent) !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 15px var(--accent-glow);
        }
        .footer-link:hover {
          color: var(--accent) !important;
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
}
