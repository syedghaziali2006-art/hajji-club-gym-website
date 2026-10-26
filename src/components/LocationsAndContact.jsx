import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, Navigation, Star, ShieldCheck, Car } from 'lucide-react';

export default function LocationsAndContact() {
  const addressText = "S.T.1-C & 1-D, Block-13 Federal B Area Near Waterpump Chowrangi, Block 13 Gulberg Town, Karachi, Pakistan";
  const plusCode = "W3PF+RR Gulberg Town, Karachi, Pakistan";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Haji+Club+Federal+B+Area+Block+13+Karachi";

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            FIND US &amp; CONTACT
          </div>
          <h2 className="section-title">
            VISIT <span>HAJI CLUB KARACHI</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Conveniently located near Waterpump Chowrangi, Federal B Area, Karachi. Featuring a vast workout area,
            swimming pool, aerobics, dedicated male &amp; female hours, and ample parking.
          </p>

          {/* Google Rating Banner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1.25rem',
              borderRadius: '999px',
              marginTop: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#ffb703" color="#ffb703" />
              ))}
            </div>
            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.9rem' }}>4.3</span>
            <span style={{ color: '#d1d5db', fontSize: '0.82rem' }}>
              (1,245+ Verified Google Reviews)
            </span>
          </div>
        </div>

        {/* 2-Column Split: Detailed Location Card & Info & Google Maps Embed */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Official Location & Facility Details */}
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              padding: '2.5rem 2.2rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Accent Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                filter: 'blur(50px)',
                opacity: 0.35,
              }}
            />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--accent-subtle)',
                    border: '1px solid rgba(255, 77, 36, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                    }}
                  >
                    MAIN CLUB ADDRESS
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: '#ffffff',
                    }}
                  >
                    Haji Club (حاجی کلب)
                  </h3>
                </div>
              </div>

              {/* Exact Address */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.82rem', color: '#d1d5db', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Street &amp; Chowrangi
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {addressText}
                </div>
                <div style={{ color: 'var(--accent)', fontSize: '0.82rem', marginTop: '0.5rem', fontWeight: 700 }}>
                  📍 Plus Code: {plusCode}
                </div>
              </div>

              {/* Timing & Schedule */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1.2rem',
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                }}
              >
                <Clock size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase' }}>
                    Open Today · Closes 11:00 PM
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '2px' }}>
                    Mon – Sat: 06:00 AM – 11:00 PM <br />
                    <span style={{ color: '#d1d5db', fontSize: '0.8rem' }}>
                      (Dedicated Male &amp; Female sections &amp; timings available)
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features Icons */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                {[
                  'Vast Workout Floor',
                  'Swimming Pool Facility',
                  'Aerobics & Yoga',
                  'Easy & Spacious Parking',
                ].map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.82rem',
                      color: '#e5e7eb',
                      fontWeight: 600,
                    }}
                  >
                    <ShieldCheck size={16} color="var(--accent)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{
                  flex: '1 1 200px',
                  padding: '0.85rem 1.4rem',
                  fontSize: '0.88rem',
                }}
              >
                <Navigation size={17} />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?text=Hello%20Haji%20Club!%20I%20want%20to%20inquire%20about%20membership%20and%20timings."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Haji Club Karachi"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: '#25D366',
                  color: '#0d1b10',
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  flex: '1 1 140px',
                }}
              >
                <MessageSquare size={17} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Live Area Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '440px',
            }}
          >
            {/* Top Bar with Map Meta */}
            <div
              style={{
                padding: '1.25rem 1.75rem',
                background: 'rgba(0,0,0,0.4)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.95rem' }}>
                  Waterpump Chowrangi, Block 13, Karachi
                </div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem' }}>
                  Federal B Area, Gulberg Town
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                }}
              >
                <span>Open in Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div style={{ flexGrow: 1, position: 'relative', minHeight: '340px' }}>
              <iframe
                title="Haji Club Karachi Google Map"
                src="https://maps.google.com/maps?q=Haji+Club+Federal+B+Area+Block+13+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)',
                  position: 'absolute',
                  inset: 0,
                }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Bottom Quick Callout */}
            <div
              style={{
                padding: '1rem 1.75rem',
                background: '#161416',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span>🚗 Easy parking available right outside the club</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Waterpump Chowrangi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
