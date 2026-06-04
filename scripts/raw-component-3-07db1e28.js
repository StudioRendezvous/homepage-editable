
// Human Interest — "How it works" section variants
// Two distinct directions exploring the new step content where steps 1+2 are
// "you" actions and step 3 is the big "we" payoff.

// ─── Shared content ──────────────────────────────────────────────────────────
const HOW_STEPS = [
{
  n: '1',
  actor: 'you',
  title: 'Pick a plan',
  body: 'Choose from a list of popular options or design your own.\nSet up online in minutes, or have an onboarding specialist walk you through it live.'
},
{
  n: '2',
  actor: 'you',
  title: 'Connect your payroll',
  body: 'A one-time setup with any of our 500+ payroll partners and the account you’ll fund from.\nContributions and bank transfers happen automatically every pay period after that.'
},
{
  n: '3',
  actor: 'us',
  title: 'We handle everything else',
  body: 'The whole plan, managed — so you can stay focused on your business.',
  handled: [
  'Compliance testing',
  'IRS filings',
  'Fiduciary oversight',
  'Investment management',
  'Employee disclosures',
  '24/7 employee support']

}];


// ════════════════════════════════════════════════════════════════════════════
// VARIANT A — Asymmetric handoff
// 2/3 layout: steps 1 & 2 stack on the left as quick "you" actions; step 3
// occupies a large navy card on the right with the handled items as a
// 2-column checklist grid. The visual mass IS the message.
// ════════════════════════════════════════════════════════════════════════════
function HowVariantA() {
  const [s1, s2, s3] = HOW_STEPS;

  return (
    <section style={{ background: HI_BRAND.gray[50], padding: '96px 80px', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 56, maxWidth: 820 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: HI_BRAND.tealText, marginBottom: 16 }}>How it works for you</p>
          <h2 style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 56,
            fontWeight: 400,
            color: HI_BRAND.navy,
            lineHeight: 1.08,
            margin: '0 0 20px',
            letterSpacing: '-0.015em'
          }}>
            You handle two steps.<br />
            <span style={{ fontStyle: 'italic', color: HI_BRAND.tealDark }}>We handle the rest.</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 32, alignItems: 'stretch' }}>
          {/* LEFT — the two "you" steps, stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: HI_BRAND.gray[400], margin: '0 0 4px'
            }}>You · 2 things</p>

            {[s1, s2].map((s, i) =>
            <div key={i} style={{
              background: '#fff',
              border: `1px solid ${HI_BRAND.gray[100]}`,
              borderRadius: 18,
              padding: '32px 32px 32px 28px',
              display: 'grid',
              gridTemplateColumns: '64px 1fr',
              gap: 20,
              position: 'relative',
              flex: 1
            }}>
                {/* Numeral */}
                <div style={{
                fontFamily: 'Lora, Georgia, serif',
                fontSize: 76,
                fontWeight: 400,
                color: HI_BRAND.navy,
                lineHeight: 0.85,
                letterSpacing: '-0.04em'
              }}>{s.n}</div>
                <div>
                  <h3 style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: 24,
                  fontWeight: 400,
                  color: HI_BRAND.navy,
                  margin: '0 0 10px',
                  lineHeight: 1.25
                }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: HI_BRAND.gray[600], lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>{s.body.replace(/\n{2,}/g, '\n')}</p>
                </div>
                {/* Subtle progress connector between cards */}
                {i === 0 &&
              <div style={{
                position: 'absolute',
                bottom: -10, left: 60,
                width: 1, height: 20, background: HI_BRAND.gray[200]
              }} />
              }
              </div>
            )}

            {/* Tiny meta strip below the two cards */}
            <div style={{
              display: 'flex', gap: 24, alignItems: 'center',
              padding: '4px 8px', marginTop: 4
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: HI_BRAND.teal }} />
                <span style={{ fontSize: 12, color: HI_BRAND.gray[500], fontWeight: 600 }}>Avg. setup: under 30 min</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: HI_BRAND.teal }} />
                <span style={{ fontSize: 12, color: HI_BRAND.gray[500], fontWeight: 600 }}>Switching? Done in 10 days</span>
              </div>
            </div>
          </div>

          {/* RIGHT — the big "we" card */}
          <div style={{
            background: HI_BRAND.navy,
            borderRadius: 18,
            padding: '40px 44px 44px',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Subtle teal radial accent */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(20,181,171,0.22) 0%, transparent 60%)',
              pointerEvents: 'none'
            }} />
            <div style={{ position: 'relative' }}>
              <p style={{
                fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: HI_BRAND.tealAccent, margin: '0 0 18px'
              }}>Us · everything else</p>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 28 }}>
                <div style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: 120,
                  fontWeight: 400,
                  color: HI_BRAND.teal,
                  lineHeight: 0.78,
                  letterSpacing: '-0.04em',
                  flexShrink: 0
                }}>{s3.n}</div>
                <div style={{ paddingTop: 6 }}>
                  <h3 style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: 36,
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: 1.12,
                    margin: '0 0 14px',
                    letterSpacing: '-0.01em'
                  }}>{s3.title}</h3>
                  <p style={{
                    fontSize: 16,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: 460,
                    whiteSpace: 'pre-line'
                  }}>{s3.body}</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '0 0 24px' }} />

              {/* Handled items — 2-col checklist */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px 24px'
              }}>
                {s3.handled.map((item, i) =>
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(20,181,171,0.18)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={HI_BRAND.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span style={{ fontSize: 15, color: '#fff', fontWeight: 500 }}>{item}</span>
                  </div>
                )}
              </div>

              {/* Bottom CTA strip */}
              <div style={{
                marginTop: 32, paddingTop: 22,
                borderTop: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <p style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0
                }}>The whole plan, managed.</p>
                <a href="#" style={{
                  color: HI_BRAND.tealText, fontWeight: 600, fontSize: 14,
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6
                }}>See what we handle <span style={{ fontSize: 13 }}>›</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ════════════════════════════════════════════════════════════════════════════
// VARIANT B — Editorial three-up
// Three horizontal columns with oversized Lora numerals as graphic elements,
// YOU / YOU / US eyebrows that establish the rhythm, and step 3's six items
// revealed as a chip grid that gives the column its visual heft.
// ════════════════════════════════════════════════════════════════════════════
function HowVariantB() {
  const [s1, s2, s3] = HOW_STEPS;
  const steps = [s1, s2, s3];
  const STEP_TOP_ZONE_HEIGHT = 72;
  const STEP_COLUMNS = '1fr 1fr 1fr';
  const STEP_PAD = 32;

  return (
    <section style={{ background: '#fff', padding: '96px 80px 56px', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header — two-column with eyebrow + headline left, supporting copy right */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64,
          alignItems: 'start', marginBottom: 96
        }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: HI_BRAND.tealText, marginBottom: 16 }}>HOW IT WORKS</p>
            <h2 style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: 60,
              fontWeight: 400,
              color: HI_BRAND.navy,
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              You run your business.<br />
              <span style={{ fontStyle: 'italic' }}>We run your plan.</span>
            </h2>
          </div>
          <div style={{ paddingTop: 47 }}>
            <p style={{ fontSize: 16, color: HI_BRAND.gray[500], lineHeight: 1.65, margin: '0 0 24px' }}>Two steps from you, the rest from us. New plans are live in minutes — without the admin burden that comes with other providers.</p>
            <a href="#" style={{
              display: 'inline-block',
              fontFamily: 'Manrope, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              background: HI_BRAND.navy,
              borderRadius: 6,
              padding: '12px 24px',
              textDecoration: 'none',
              letterSpacing: '0.01em'
            }}>Get started</a>
          </div>
        </div>

        {/* Journey split — makes the you / us handoff explicit before scanning steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: STEP_COLUMNS,
          gap: 0,
          marginBottom: 28,
          alignItems: 'center'
        }}>
          <div style={{ gridColumn: '1 / 3', display: 'flex', alignItems: 'center', gap: 14, paddingLeft: STEP_PAD, paddingRight: STEP_PAD, borderRight: `1px solid ${HI_BRAND.gray[100]}` }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: HI_BRAND.gray[50],
              border: `1px solid ${HI_BRAND.gray[100]}`,
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: HI_BRAND.navy,
              whiteSpace: 'nowrap'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: HI_BRAND.navy, flexShrink: 0 }} />
              You · steps 1 &amp; 2
            </span>
            <span style={{ flex: 1, height: 1, background: HI_BRAND.gray[200] }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: STEP_PAD, paddingRight: STEP_PAD }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: HI_BRAND.navy,
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fff',
              whiteSpace: 'nowrap'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: HI_BRAND.teal, flexShrink: 0 }} />
              We take it from here
            </span>
          </div>
        </div>

        {/* Three-up columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: STEP_COLUMNS,
          gap: 0,
          alignItems: 'stretch'
        }}>
          {steps.map((s, i) => {
            const isUs = s.actor === 'us';
            return (
              <div key={i} style={{
                borderLeft: i > 0 ? `1px solid ${HI_BRAND.gray[100]}` : 'none',
                boxSizing: 'border-box'
              }}>
                <div style={{
                  background: isUs ? HI_BRAND.navy : 'transparent',
                  borderRadius: isUs ? 16 : 0,
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  padding: `0 ${STEP_PAD}px 36px`,
                  boxSizing: 'border-box'
                }}>
                  {isUs &&
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(ellipse 70% 80% at 100% 0%, rgba(20,181,171,0.24) 0%, transparent 58%)',
                      pointerEvents: 'none'
                    }} />
                  }

                  {/* Shared top zone — keeps 1, 2, 3 numerals on the same baseline */}
                  <div style={{
                    height: STEP_TOP_ZONE_HEIGHT,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {!isUs ?
                      <span style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: HI_BRAND.gray[400]
                      }}>Your step</span> :
                      <span style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: HI_BRAND.tealAccent
                      }}>Human Interest</span>
                    }
                  </div>

                  <div style={{
                    position: 'relative',
                    zIndex: 1
                  }}>
                {/* Oversized numeral */}
                <div style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: 160,
                  fontWeight: 400,
                  color: isUs ? HI_BRAND.teal : HI_BRAND.navy,
                  lineHeight: 0.85,
                  letterSpacing: '-0.05em',
                  marginBottom: 24,
                  marginLeft: -6
                }}>{s.n}</div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontSize: 24,
                  fontWeight: 400,
                  color: isUs ? '#fff' : HI_BRAND.navy,
                  lineHeight: 1.2,
                  margin: '0 0 14px',
                  letterSpacing: '-0.005em',
                  fontStyle: isUs ? 'italic' : 'normal'
                }}>{s.title}</h3>

                {/* Body — steps 1 & 2: empty square bullets; step 3: paragraphs */}
                {!isUs ?
                  <ul style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                  }}>
                    {s.body.split(/\n+/).filter(Boolean).map((item, bi) =>
                      <li key={bi} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10
                      }}>
                        <span aria-hidden="true" style={{
                          width: 11,
                          height: 11,
                          marginTop: 5,
                          border: `1.5px solid ${HI_BRAND.gray[400]}`,
                          borderRadius: 2,
                          flexShrink: 0,
                          boxSizing: 'border-box'
                        }} />
                        <span style={{
                          fontSize: 15,
                          color: HI_BRAND.gray[600],
                          lineHeight: 1.6
                        }}>{item.trim()}</span>
                      </li>
                    )}
                  </ul> :
                  s.body.split(/\n+/).filter(Boolean).map((paragraph, pi) =>
                    <p key={pi} style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.78)',
                      lineHeight: 1.6,
                      margin: pi === 0 ? '0 0 8px' : 0
                    }}>{paragraph.trim()}</p>
                  )
                }

                {/* Step 3 only — chip grid of handled items */}
                {isUs && s.handled &&
                <>
                    <div style={{
                    marginTop: 28, marginBottom: 16,
                    display: 'flex', alignItems: 'center', gap: 12
                  }}>
                      <span style={{
                      fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: HI_BRAND.tealAccent
                    }}>What we handle for you</span>
                      <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.16)' }} />
                    </div>
                    <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8
                  }}>
                      {s.handled.map((item, j) =>
                    <div key={j} style={{
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: 999,
                      padding: '8px 12px 8px 10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      border: '1px solid rgba(143, 213, 209, 0.28)',
                      minWidth: 0
                    }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={HI_BRAND.tealAccent} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span style={{ fontSize: 12, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{item}</span>
                        </div>
                    )}
                    </div>
                  </>
                }
                  </div>
                </div>
              </div>);

          })}
        </div>

        {/* Bottom CTA row */}
        <div style={{
          marginTop: 56,
          paddingBottom: 48,
          borderBottom: `1px solid ${HI_BRAND.gray[100]}`,
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24
        }}>
          <a href="#" className="hi-btn hi-btn--navy" style={{
            background: HI_BRAND.navy, color: '#fff',
            borderRadius: 8, padding: '14px 32px',
            fontWeight: 700, fontSize: 15, textDecoration: 'none'
          }}>Get Started in Minutes</a>
          <a href="#" className="hi-btn hi-btn--link" style={{
            fontSize: 14, fontWeight: 700, color: HI_BRAND.tealText,
            textDecoration: 'none', display: 'inline-flex',
            alignItems: 'center', gap: 8
          }}>Talk to an onboarding specialist <span style={{ fontSize: 13 }}>›</span></a>
        </div>
      </div>
    </section>);

}

Object.assign(window, { HowVariantA, HowVariantB });