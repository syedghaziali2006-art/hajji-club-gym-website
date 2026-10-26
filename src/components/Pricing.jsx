import React from 'react';
import { Check, Flame, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: '1 Month Membership',
      duration: '1 Month',
      popular: false,
      tagline: 'Economical starter access for all fitness enthusiasts',
      features: [
        'Full access to vast gym workout floor',
        'Use of complete machine range for every muscle',
        'Free weights & barbell power racks',
        'Dedicated male & female session timings',
        'Locker & shower facilities',
      ],
      whatsappMsg: 'Hello! I am interested in the 1 Month Gym Membership at Haji Club Karachi.',
    },
    {
      name: '3 Month Membership',
      duration: '3 Months',
      popular: true,
      tagline: 'Most popular consistent workout & routine package',
      features: [
        'Full gym floor access for 3 months',
        'Complete equipment access for all muscle groups',
        'Yoga & Aerobics training sessions included',
        'Trainer guidance & workout schedule',
        'Easy & spacious parking privileges',
        'Priority locker access',
      ],
      whatsappMsg: 'Hello! I want to join the 3 Month Package (Most Popular) at Haji Club Karachi.',
    },
    {
      name: '6 Month Club Access',
      duration: '6 Months',
      popular: false,
      tagline: 'Best value for serious commitment & sports lovers',
      features: [
        'Full access to gym workout area',
        'Swimming Pool facility access included',
        'Yoga, Aerobics & functional fitness',
        'Complete body recomposition tracking',
        'Male & female specialized coaching sessions',
        'Maximum savings with nominal monthly fee',
      ],
      whatsappMsg: 'Hello! I am interested in the 6 Month Gym & Swimming Pool Membership at Haji Club Karachi.',
    },
  ];

  return (
    <section id="pricing" className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            MEMBERSHIP
          </div>
          <h2 className="section-title">
            CHOOSE PRICING PLANS <span>THAT SUITS YOU</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Flexible membership plans tailored to your fitness journey. Transparent pricing with zero hidden charges and full facility access.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: plan.popular
                  ? 'linear-gradient(180deg, rgba(38, 25, 27, 0.95) 0%, rgba(26, 21, 23, 0.95) 100%)'
                  : 'var(--bg-card)',
                borderRadius: '20px',
                padding: '2.75rem 2.2rem',
                border: plan.popular
                  ? '2px solid var(--accent)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: plan.popular
                  ? '0 20px 50px rgba(255, 77, 36, 0.25), 0 0 35px rgba(255, 77, 36, 0.15)'
                  : 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: plan.popular ? 'scale(1.03)' : 'none',
                transition: 'all 0.35s ease',
              }}
              className="pricing-card"
            >
              {/* Popular Flag */}
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.4rem 1.25rem',
                    borderRadius: '999px',
                    boxShadow: '0 4px 15px rgba(255, 77, 36, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Flame size={14} />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Plan Title & Duration */}
              <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: plan.popular ? 'var(--accent)' : 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {plan.duration}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.65rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1.15,
                    marginBottom: '0.6rem',
                  }}
                >
                  {plan.name}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {plan.tagline}
                </p>
              </div>

              {/* Feature Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem', flexGrow: 1 }}>
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: plan.popular ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ color: '#e5e7eb', fontSize: '0.92rem', fontWeight: 500 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Action Button */}
              <a
                href={`https://api.whatsapp.com/send?phone=971565377884&text=${encodeURIComponent(plan.whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                style={{
                  width: '100%',
                  padding: '1rem',
                  justifyContent: 'center',
                  fontSize: '0.92rem',
                }}
              >
                <span>GET MEMBERSHIP</span>
                <ArrowRight size={17} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-card:hover {
          transform: translateY(-8px) ${/* preserve scale on popular */ ''};
          border-color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
}
