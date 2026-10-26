import React, { useState } from 'react';
import { MessageSquare, X, Send, MapPin, Dumbbell } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const branches = [
    {
      name: 'Haji Club - Front Desk',
      location: 'Block 13, Waterpump, Karachi',
      defaultMsg: 'Hello Haji Club! I want to inquire about gym membership fees and timings.',
    },
    {
      name: 'Swimming Pool & Aerobics',
      location: 'Haji Club Sports Section',
      defaultMsg: 'Hello! I want to inquire about swimming pool, yoga & aerobics timings at Haji Club.',
    },
    {
      name: 'Ladies / Female Timings',
      location: 'Dedicated Female Gym Section',
      defaultMsg: 'Hello! Please share details regarding female gym timings and female trainers at Haji Club.',
    },
  ];

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '4.5rem',
            right: 0,
            width: '320px',
            background: '#1d1b1d',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(37, 211, 102, 0.2)',
            overflow: 'hidden',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #075E54 0%, #128C7E 100%)',
              padding: '1.25rem',
              color: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#fff' }}>Haji Club (حاجی کلب)</h4>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Karachi • Direct WhatsApp Support</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '4px',
                }}
                aria-label="Close WhatsApp Chat Window"
              >
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: '0.82rem', margin: 0, opacity: 0.95, lineHeight: 1.4 }}>
              Select a department below to start a direct WhatsApp inquiry:
            </p>
          </div>

          {/* Branch List */}
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {branches.map((b, idx) => (
              <a
                key={idx}
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(b.defaultMsg)}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Inquire about ${b.name} on WhatsApp`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                className="wa-branch-btn"
              >
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>{b.name}</div>
                  <div style={{ color: '#d1d5db', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={11} color="var(--accent)" />
                    <span>{b.location}</span>
                  </div>
                </div>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0d1b10',
                  }}
                >
                  <Send size={15} />
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              padding: '0.75rem',
              textAlign: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.75rem',
              color: '#d1d5db',
              background: '#161416',
            }}
          >
            ⚡ Official Haji Club Karachi WhatsApp Support
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
        className="wa-toggle-btn"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

        {/* Pulse Ring */}
        {!isOpen && (
          <span
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              border: '2px solid #25D366',
              animation: 'pulseGlow 2s infinite',
              pointerEvents: 'none',
            }}
          />
        )}
      </button>

      <style>{`
        .wa-toggle-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.7) !important;
        }
        .wa-branch-btn:hover {
          background: rgba(37, 211, 102, 0.15) !important;
          border-color: #25D366 !important;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
