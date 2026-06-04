
// Human Interest — Pricing Page
// Content sourced from assets/pricing-page-assets/New Pricing Page Features-1.xlsx
// Layout from image-need attention.png (tiers) + image 2-needs attention.png (tabs)

const PRICING_PAGE = {
  hero: {
    title: 'Your 401(k) provider should do the work',
    subtitle: 'We take responsibility for the parts of a 401(k) that employers don\'t want to own.',
    note: [
      'Employers may be eligible to receive tax credits up to $16,500',
      'for starting a new 401(k) plan with auto-enroll.',
    ],
  },
  tiers: [
    {
      id: 'essentials',
      name: 'Essentials',
      tagline: 'THE BASICS, DONE RIGHT',
      description: 'Affordable, all-in-one 401(k) to get your team saving.',
      basePrice: 80,
      perEmployee: 5,
      dark: false,
      popular: false,
      groups: [
        {
          label: 'ADMINISTRATION',
          items: [
            'Integration with 500+ payrolls',
            'Fund lineup management',
          ],
        },
        {
          label: 'SERVICE',
          items: [
            'U.S.-based support',
            'Customer Experience Guarantee',
          ],
        },
        {
          label: 'EMPLOYEE EXPERIENCE',
          items: [
            'Employee cash back incentive',
            '$0 transaction fees for employees',
          ],
        },
        {
          label: 'PRICE',
          items: [
            '$0 transaction fees for employers',
            'Price Match Guarantee',
          ],
        },
      ],
    },
    {
      id: 'complete',
      name: 'Complete',
      tagline: 'LESS ON YOUR PLATE',
      description: 'End-to-end 401(k) — we take on the burden of compliance, so you don\'t have to.',
      basePrice: 180,
      perEmployee: 7,
      dark: false,
      popular: false,
      includesBadge: 'Includes Essentials',
      includesHeadline: 'Everything in Essentials, plus:',
      highlight: 'We take the filings, tasks, and deadlines off your hands — and the liability that comes with them.',
      groups: [
        {
          label: 'COMPLIANCE',
          items: [
            'IRS Form 5500 signed & filed',
            'Loans and withdrawal approval',
            'ERISA fidelity bond',
          ],
        },
      ],
    },
    {
      id: 'concierge',
      name: 'Concierge',
      tagline: 'FULLY MANAGED PLAN',
      description: 'The ultimate 401(k) with dedicated service, compliance oversight, audit protection, and savings to lower your plan cost.',
      basePrice: 280,
      perEmployee: 9,
      dark: true,
      popular: true,
      includesBadge: 'Includes Complete + Essentials',
      includesHeadline: 'Everything in Complete, plus:',
      highlight: 'A named human who knows your plan, compliance oversight so nothing slips, and savings to lower your plan\'s cost.',
      groups: [
        {
          label: 'SERVICE',
          items: ['Dedicated Account Manager'],
        },
        {
          label: 'COMPLIANCE',
          items: [
            '360 degree compliance monitoring',
            'DOL Audit Defense',
          ],
        },
        {
          label: 'PLAN SAVINGS',
          items: [
            {
              title: 'Tax Savings Maximizer',
              badge: '≤100 EMPLOYEES',
              detail: 'We help you file for up to $16,500 in tax credits on your plan',
            },
            {
              title: 'Audit Relief',
              badge: '100+ EMPLOYEES',
              detail: 'We cover the cost of annual CPA audits required for plans with more than 100 participants ($10,000–$15,000 value)',
            },
          ],
        },
      ],
    },
  ],
  comparisonTabs: [
    {
      id: 'administration',
      label: 'Simple administration',
      headline: 'Your business needs attention. Your 401(k) shouldn\'t.',
      body: [
        'Other providers make administration your problem. Manually uploading payroll. Sending employee enrollment emails. Chasing customer support.',
        'Our 500+ payroll integrations keep your employee and contribution data up to date without you lifting a finger. Employees are automatically notified when they\'re eligible to contribute. We\'re so committed to service that we put money behind our performance guarantee.',
      ],
      rows: [
        { feature: 'Payroll', learnMore: true, hi: '500+ integrations', other: 'Manual uploads' },
        { feature: 'Employee communication', hi: 'Handled for you', other: 'Your job' },
        { feature: 'Support team', hi: 'Award-winning, multi-lingual, U.S.-based', other: 'Offshore' },
        { feature: 'Customer Experience Guarantee', learnMore: true, hi: 'Money-backed', other: 'None' },
        { feature: 'G2 Satisfaction Score', learnMore: true, hi: '90', other: '9 to 71' },
      ],
    },
    {
      id: 'compliance',
      label: 'Automatic compliance',
      headline: 'Compliance shouldn\'t keep you up at night.',
      body: [
        'Most providers leave filings, bonds, and deadlines on your desk — and the penalties that come with missing them.',
        'Complete and Concierge plans put Human Interest in the driver\'s seat for Form 5500, loan approvals, ERISA bonds, and proactive monitoring so your plan stays on track.',
      ],
      rows: [
        { feature: 'IRS Form 5500', hi: 'Signed & filed by HI', other: 'Your responsibility' },
        { feature: 'Loan & withdrawal approval', hi: 'Handled by HI (3(16))', other: 'Employer approves' },
        { feature: 'ERISA fidelity bond', hi: 'Procured & paid by HI', other: 'You source & pay' },
        { feature: '360° compliance monitoring', hi: 'Concierge — AI alerts', other: 'Reactive only' },
        { feature: 'DOL Audit Defense', hi: 'Up to $50k covered', other: 'None' },
      ],
    },
    {
      id: 'experience',
      label: 'Delightful experience',
      headline: 'Employees actually use a plan that feels built for them.',
      body: [
        'Clunky portals and hidden fees discourage saving. We designed enrollment, investing, and support around real employees — not just compliance checkboxes.',
        'From automatic portfolio guidance to $0 transaction fees and cash-back incentives, your team gets a modern retirement experience without extra work from you.',
      ],
      rows: [
        { feature: 'Enrollment', hi: 'Automatic when eligible', other: 'Manual outreach' },
        { feature: 'Investment guidance', hi: 'Built-in advice & rebalancing', other: 'DIY only' },
        { feature: 'Transaction fees (employees)', hi: '$0 guarantee', other: 'Nickel-and-diming' },
        { feature: '(k)ickstart® cash back', hi: '3% up to $250', other: 'Not offered' },
        { feature: 'Support', hi: 'Phone & email for rollovers, loans', other: 'Limited channels' },
      ],
    },
    {
      id: 'pricing',
      label: 'Honest pricing',
      headline: 'Published pricing. No surprises on your bill.',
      body: [
        'Other providers bury fees in amendments, distributions, and form prep. Our pricing is simple, public, and backed by guarantees.',
        'Employers and employees both benefit from $0 transaction fee guarantees and a written Price Match Guarantee — so you know what you pay before you sign.',
      ],
      rows: [
        { feature: 'Published plan pricing', hi: 'On our pricing page', other: 'Quote-only / hidden' },
        { feature: 'Employer transaction fees', hi: '$0 guarantee', other: 'Per-event charges' },
        { feature: 'Employee transaction fees', hi: '$0 guarantee', other: 'Loans, distributions, etc.' },
        { feature: 'Price Match Guarantee', hi: 'Written guarantee', other: 'None' },
        { feature: 'Asset-based fees', hi: 'Disclosed upfront', other: 'Often unclear' },
      ],
    },
  ],
  disclaimer: 'A one-time setup fee of $499 may apply. A monthly investment advisory fee is paid to Human Interest Advisors (HIA) of 0.01% of plan assets when HIA acts as a 3(38) fiduciary, or 0.018% when acting as a 3(21) fiduciary. A separate fee for recordkeeping services and custody-related expenses is paid to Human Interest Inc. (HII) of 0.05% of plan assets. All prices are exclusive of applicable taxes.',
};

function PricingCheck({ color = HI_BRAND.teal, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" fill={color} opacity={0.15} />
      <path d="M8 12.5l2.5 2.5L16 9" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingTierCard({ tier }) {
  const isDark = tier.dark;
  const text = isDark ? '#fff' : HI_BRAND.navy;
  const muted = isDark ? 'rgba(255,255,255,0.72)' : HI_BRAND.gray[600];
  const checkColor = isDark ? HI_BRAND.tealLight : HI_BRAND.teal;
  const cardClass = [
    'hi-pricing-tier-card',
    isDark ? 'hi-pricing-tier-card--dark' : 'hi-pricing-tier-card--light',
    tier.popular ? 'hi-pricing-tier-card--popular' : '',
  ].filter(Boolean).join(' ');

  return (
    <article
      className={cardClass}
      style={{
        position: 'relative',
        background: isDark ? HI_BRAND.navy : HI_BRAND.white,
        borderRadius: 12,
        padding: tier.popular ? '40px 28px 36px' : '36px 28px',
        boxShadow: isDark
          ? '0 8px 32px rgba(2, 42, 77, 0.22)'
          : '0 2px 12px rgba(2, 42, 77, 0.06)',
        border: isDark
          ? `1px solid rgba(143, 213, 209, 0.22)`
          : `1px solid ${HI_BRAND.gray[100]}`,
      }}
    >
      {tier.popular && (
        <div style={{
          position: 'absolute',
          top: -13,
          left: '50%',
          transform: 'translateX(-50%)',
          background: HI_BRAND.yellow,
          color: HI_BRAND.navy,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.1em',
          padding: '6px 18px',
          borderRadius: 24,
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(255, 207, 103, 0.35)',
        }}>
          MOST POPULAR
        </div>
      )}

      <div className="hi-pricing-tier-card__title">
        <h3 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 32,
          fontWeight: 400,
          color: text,
          margin: '0 0 8px',
          lineHeight: 1.1,
          letterSpacing: '-0.015em',
        }}>
          {tier.name}
        </h3>
      </div>

      <div className="hi-pricing-tier-card__tagline">
        <p style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: isDark ? HI_BRAND.tealAccent : HI_BRAND.tealText,
          margin: 0,
        }}>
          {tier.tagline}
        </p>
      </div>

      <div className="hi-pricing-tier-card__badge">
        {tier.includesBadge && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: isDark ? 'rgba(20, 181, 171, 0.15)' : HI_BRAND.tealPale,
            border: `1px solid ${isDark ? 'rgba(143, 213, 209, 0.35)' : 'rgba(20, 181, 171, 0.25)'}`,
            borderRadius: 24,
            padding: '6px 14px',
            alignSelf: 'flex-start',
          }}>
            <PricingCheck color={checkColor} size={14} />
            <span style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: isDark ? HI_BRAND.tealAccent : HI_BRAND.tealDark,
            }}>
              {tier.includesBadge}
            </span>
          </div>
        )}
      </div>

      <div className={`hi-pricing-tier-card__desc${tier.id === 'essentials' ? ' hi-pricing-tier-card__desc--essentials' : ''}`}>
        {tier.description && (
          <p style={{
            fontSize: 15,
            color: muted,
            lineHeight: 1.55,
            margin: 0,
          }}>
            {tier.description}
          </p>
        )}
      </div>

      <div className="hi-pricing-tier-card__price">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 44, fontWeight: 700, color: text, lineHeight: 1, letterSpacing: '-0.02em' }}>${tier.basePrice}</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: muted }}>/mo base</span>
        </div>
        <p style={{ fontSize: 14, color: muted, margin: '10px 0 0' }}>
          + ${tier.perEmployee}/mo per eligible employee
        </p>
      </div>

      <div className="hi-pricing-tier-card__highlight">
        {tier.highlight && (
          <p style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 19,
            fontWeight: 400,
            color: text,
            lineHeight: 1.5,
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            {tier.highlight}
          </p>
        )}
      </div>

      <div className="hi-pricing-tier-card__cta">
        <a
          href="#"
          className={`hi-btn ${isDark ? 'hi-btn--teal' : 'hi-btn--navy'}`}
          style={{
            display: 'block',
            textAlign: 'center',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 15,
            fontWeight: 700,
            padding: '14px 24px',
            borderRadius: 8,
            textDecoration: 'none',
            background: isDark ? HI_BRAND.teal : HI_BRAND.navy,
            color: isDark ? HI_BRAND.navy : '#fff',
          }}
        >
          Get started
        </a>
      </div>

      <div className="hi-pricing-tier-card__includes">
        {tier.includesHeadline && (
          <div style={{
            borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : HI_BRAND.gray[100]}`,
            paddingTop: 20,
          }}>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              color: text,
              margin: 0,
              lineHeight: 1.4,
            }}>
              {tier.includesHeadline}
            </p>
          </div>
        )}
      </div>

      <div className="hi-pricing-tier-card__features">
        {tier.groups.map((group) => (
          <div key={group.label} style={{ marginBottom: 22 }}>
            <p style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isDark ? HI_BRAND.tealAccent : HI_BRAND.tealText,
              margin: '0 0 12px',
            }}>
              {group.label}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {group.items.map((item) => {
                const isRich = typeof item === 'object';
                const key = isRich ? item.title : item;
                return (
                  <li key={key} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <PricingCheck color={checkColor} />
                    <div>
                      {isRich ? (
                        <>
                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                            <span style={{ fontSize: 14, fontWeight: 600, color: text }}>{item.title}</span>
                            {item.badge && (
                              <span style={{
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: '0.06em',
                                padding: '4px 10px',
                                borderRadius: 24,
                                background: isDark ? 'rgba(255,255,255,0.1)' : HI_BRAND.tealPale,
                                color: isDark ? HI_BRAND.tealAccent : HI_BRAND.tealDark,
                                border: `1px solid ${isDark ? 'rgba(255,255,255,0.18)' : 'rgba(20, 181, 171, 0.2)'}`,
                              }}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: 13, color: muted, margin: 0, lineHeight: 1.55 }}>{item.detail}</p>
                        </>
                      ) : (
                        <span style={{ fontSize: 14, color: text, lineHeight: 1.5 }}>{item}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function PricingComparisonTabs() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const tab = PRICING_PAGE.comparisonTabs[activeIdx];

  return (
    <section style={{
      background: HI_BRAND.gray[50],
      padding: '96px clamp(24px, 5vw, 80px) 112px',
      fontFamily: 'Manrope, sans-serif',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: HI_BRAND.tealText,
            margin: '0 0 20px',
          }}>
            Why Human Interest
          </p>
          <h2 style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 400,
            color: HI_BRAND.navy,
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: 0,
            textWrap: 'balance',
          }}>
            See how we compare
          </h2>
        </div>

        <div
          className="hi-pricing-comparison-shell"
          style={{
            background: HI_BRAND.white,
            borderRadius: 12,
            border: `1px solid ${HI_BRAND.gray[100]}`,
            boxShadow: '0 2px 16px rgba(2, 42, 77, 0.05)',
            overflow: 'hidden',
          }}
        >
          <div className="hi-pricing-comparison-tabs-wrap">
            <nav
              className="hi-pricing-comparison-tabs"
              role="tablist"
              aria-label="Comparison topics"
              style={{
                display: 'inline-flex',
                background: HI_BRAND.gray[50],
                borderRadius: 8,
                padding: 3,
                gap: 0,
              }}
            >
              {PRICING_PAGE.comparisonTabs.map((t, i) => {
                const active = i === activeIdx;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveIdx(i)}
                    className={`hi-btn hi-btn--toggle${active ? ' hi-btn--toggle-active' : ''}`}
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 13,
                      fontWeight: 600,
                      color: HI_BRAND.navy,
                      background: active ? '#fff' : 'transparent',
                      border: 'none',
                      borderRadius: 6,
                      padding: '7px 16px',
                      cursor: 'pointer',
                      boxShadow: active ? '0 1px 3px rgba(2,42,77,0.12), 0 0 0 1px rgba(2,42,77,0.06)' : 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div
            className="hi-pricing-comparison-panel"
            style={{
              padding: 'clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px)',
              display: 'grid',
              gridTemplateColumns: 'minmax(220px, 1fr) minmax(300px, 1.15fr)',
              gap: 'clamp(28px, 4vw, 56px)',
              alignItems: 'start',
            }}
          >
              <div>
                <h3 style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 400,
                  color: HI_BRAND.navy,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  margin: '0 0 24px',
                }}>
                  {tab.headline}
                </h3>
                {tab.body.map((para, i) => (
                  <p key={i} style={{
                    fontSize: 15,
                    color: HI_BRAND.gray[600],
                    lineHeight: 1.65,
                    margin: i === 0 ? '0 0 16px' : '0 0 0',
                  }}>
                    {para}
                  </p>
                ))}
              </div>

              <div style={{ overflowX: 'auto' }}>
                <div
                  className="hi-pricing-comparison-table"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.35fr 1fr 1fr',
                    gap: 0,
                    minWidth: 400,
                  }}
                >
                  <div />
                  <div style={{
                    textAlign: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: HI_BRAND.white,
                    padding: '14px 16px',
                    background: HI_BRAND.navy,
                  }}>
                    HUMAN INTEREST
                  </div>
                  <div style={{
                    textAlign: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: HI_BRAND.gray[600],
                    padding: '14px 16px',
                    background: HI_BRAND.white,
                    borderBottom: `1px solid ${HI_BRAND.gray[100]}`,
                  }}>
                    OTHER PROVIDERS
                  </div>

                  {tab.rows.map((row, ri) => (
                    <React.Fragment key={row.feature}>
                      <div style={{
                        padding: '16px 12px 16px 16px',
                        borderTop: ri > 0 ? `1px solid ${HI_BRAND.gray[100]}` : 'none',
                        background: HI_BRAND.white,
                      }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: HI_BRAND.navy }}>{row.feature}</span>
                        {row.learnMore && (
                          <a href="#" className="hi-btn hi-btn--link" style={{
                            display: 'block',
                            fontSize: 12,
                            fontWeight: 600,
                            color: HI_BRAND.tealText,
                            textDecoration: 'none',
                            marginTop: 4,
                          }}>
                            Learn more →
                          </a>
                        )}
                      </div>
                      <div style={{
                        padding: '16px',
                        borderTop: ri > 0 ? `1px solid ${HI_BRAND.gray[100]}` : 'none',
                        background: 'rgba(20, 181, 171, 0.07)',
                        textAlign: 'center',
                      }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: HI_BRAND.navy, lineHeight: 1.45 }}>{row.hi}</span>
                      </div>
                      <div style={{
                        padding: '16px',
                        borderTop: ri > 0 ? `1px solid ${HI_BRAND.gray[100]}` : 'none',
                        background: HI_BRAND.white,
                        textAlign: 'center',
                      }}>
                        <span style={{ fontSize: 14, color: HI_BRAND.gray[600], lineHeight: 1.45 }}>{row.other}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  const homeHref = typeof window !== 'undefined' && window.__hiHomeHref ? window.__hiHomeHref : 'index.html';

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif', background: '#fff', maxWidth: '100%' }}>
      <HINav
        showEyebrow={false}
        employeeStyle="moderate"
        variant="A"
        audienceToggle={false}
        transparent={false}
        homeHref={homeHref}
        pricingHref="pricing.html"
        activeNav="Pricing"
      />

      <section style={{
        padding: '88px clamp(32px, 6vw, 120px) 48px',
        textAlign: 'center',
        maxWidth: 920,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: HI_BRAND.tealPale,
          borderRadius: 24,
          padding: '6px 16px',
          marginBottom: 24,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: HI_BRAND.teal, display: 'inline-block' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: HI_BRAND.tealDark, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Plan pricing
          </span>
        </div>
        <h1 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(40px, 5vw, 56px)',
          fontWeight: 400,
          color: HI_BRAND.navy,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          margin: '0 0 20px',
          textWrap: 'balance',
        }}>
          {PRICING_PAGE.hero.title}
        </h1>
        <p style={{
          fontSize: 18,
          color: HI_BRAND.gray[600],
          lineHeight: 1.65,
          margin: '0 0 24px',
          maxWidth: 760,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {PRICING_PAGE.hero.subtitle}
        </p>
        <p style={{
          display: 'inline-block',
          fontSize: 14,
          color: HI_BRAND.tealDark,
          fontWeight: 600,
          lineHeight: 1.5,
          margin: 0,
          padding: '10px 18px',
          background: HI_BRAND.tealPale,
          borderRadius: 8,
          border: `1px solid rgba(20, 181, 171, 0.18)`,
          maxWidth: 680,
        }}>
          {PRICING_PAGE.hero.note[0]}
          <br />
          {PRICING_PAGE.hero.note[1]}
        </p>
      </section>

      <section style={{
        padding: '48px clamp(24px, 5vw, 80px) 96px',
        background: HI_BRAND.gray[50],
      }}>
        <div
          className="hi-pricing-tier-row"
          style={{
          maxWidth: 1280,
          margin: '0 auto',
          paddingTop: 0,
        }}
        >
          {PRICING_PAGE.tiers.map((tier) => (
            <PricingTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>

      <PricingComparisonTabs />

      <section style={{
        padding: '48px clamp(24px, 5vw, 80px) 64px',
        maxWidth: 960,
        margin: '0 auto',
      }}>
        <p style={{
          fontSize: 12,
          color: HI_BRAND.gray[500],
          lineHeight: 1.65,
          margin: 0,
        }}>
          {PRICING_PAGE.disclaimer}
        </p>
      </section>

      <HIFooter homeHref={homeHref} pricingHref="pricing.html" />
    </div>
  );
}

Object.assign(window, { PricingPage, PRICING_PAGE });
