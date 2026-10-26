import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { Menu, X, Phone, ArrowUpRight, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#features' },
    { name: 'Gym Machines', href: '#machines' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(17, 14, 16, 0.94)' : 'rgba(17, 14, 16, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.5)' : 'none',
          padding: isScrolled ? '0.75rem 0' : '1.15rem 0',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* 1. Brand Logo */}
          <a
            href="#home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              textDecoration: 'none',
            }}
          >
            <img
              src={logoImg}
              alt="Haji Club Gym & Fitness"
              style={{
                height: isScrolled ? '46px' : '54px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))',
              }}
            />
          </a>

          {/* 2. Desktop Navigation Menu */}
          <nav
            className="navbar-desktop-menu"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem',
              margin: '0 auto',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-link"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.25s ease',
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 3. Right Action Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexShrink: 0,
            }}
          >
            {/* Location & Contact link */}
            <a
              href="#contact"
              className="navbar-phone-link"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 77, 36, 0.15)',
                  border: '1px solid rgba(255, 77, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}
              >
                <MapPin size={15} />
              </div>
              <span>Waterpump Chowrangi, Karachi</span>
            </a>

            {/* CTA Button */}
            <a
              href="#pricing"
              className="navbar-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'linear-gradient(135deg, #ff4d24 0%, #ff6a47 100%)',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.65rem 1.4rem',
                borderRadius: '6px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 15px rgba(255, 77, 36, 0.35)',
                transition: 'all 0.25s ease',
              }}
            >
              <span>JOIN NOW</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="navbar-mobile-toggle"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(15, 12, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '6rem 2rem 2.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: 'auto' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  textDecoration: 'none',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                padding: '0.85rem',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              <MapPin size={17} color="var(--accent)" />
              <span>Waterpump Chowrangi, Karachi</span>
            </a>

            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: 'var(--accent)',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                padding: '0.95rem',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px var(--accent-glow)',
              }}
            >
              <span>Get Membership</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Media Query Styles for Desktop / Mobile */}
      <style>{`
        @media (min-width: 992px) {
          .navbar-desktop-menu {
            display: flex !important;
          }
          .navbar-phone-link {
            display: inline-flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
        }

        .navbar-link:hover {
          color: var(--accent) !important;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: all 0.25s ease;
          transform: translateX(-50%);
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        .navbar-phone-link:hover {
          color: var(--accent) !important;
        }

        .navbar-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 22px rgba(255, 77, 36, 0.5) !important;
        }
      `}</style>
    </>
  );
}
