import React from 'react';
import logoImg from '../assets/logo.webp';
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
        color: '#d1d5db',
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
            <a href="#home" aria-label="Haji Club Homepage" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <img
                src={logoImg}
                alt="Haji Club Logo"
                width="168"
                height="54"
                style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
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

            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#d1d5db', marginBottom: '1.75rem' }}>
              Karachi's trusted strength, bodybuilding, and fitness club near Waterpump Chowrangi, Block 13 Federal B Area.
              Vast workout floor, swimming pool, aerobics, and certified coaching.
            </p>

            {/* Social Media Links with Discernible Names and High-Performance Inline SVGs */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                {
                  name: 'Instagram',
                  href: 'https://instagram.com',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  href: 'https://facebook.com',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ),
                },
                {
                  name: 'Twitter',
                  href: 'https://twitter.com',
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  ),
                },
                {
                  name: 'YouTube',
                  href: 'https://youtube.com',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"></path>
                    </svg>
                  ),
                },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Haji Club on ${s.name}`}
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
                  <div style={{ color: '#d1d5db', fontSize: '0.82rem' }}>
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
            color: '#d1d5db',
          }}
        >
          <div>
            © {currentYear} <span style={{ color: '#fff', fontWeight: 700 }}>Haji Club Gym &amp; Fitness</span>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home" style={{ color: '#d1d5db' }}>
              Privacy Policy
            </a>
            <a href="#home" style={{ color: '#d1d5db' }}>
              Terms of Service
            </a>
            <a href="#home" style={{ color: '#d1d5db' }}>
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
