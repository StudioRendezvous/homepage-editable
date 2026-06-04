
// Human Interest — Combined Landing Page
// Built from sections of existing design directions per the user's brief:
//   1. Nav + Hero from Direction B
//   2. "6 benchmarks · Variant 2 — Navy canvas, warm off-white tiles" (StandardBlade_TileGridMint)
//   3. "WHY CHOOSE US" blade from Treatment 2 (with eyebrow rules removed)
//   4. TESTIMONIALS blade + "You deserve a great 401(k)" CTA from Direction A
//   5. HOW IT WORKS — Editorial three-up (HowVariantB)
//   6. "Common questions" FAQ + "A better 401(k) starts here" CTA from Direction A
//      (with `>` after "See all FAQs", no underline)

function CombinedLandingPage() {
  const [openFaq, setOpenFaq] = React.useState(null);
  const [testimonialIdx, setTestimonialIdx] = React.useState(0);
  const isGitHubPages = /\.github\.io$/i.test(window.location.hostname);
  const isSafari = (() => {
    const ua = navigator.userAgent;
    return /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|FxiOS/i.test(ua);
  })();
  const needsScreenBlend = isGitHubPages && !isSafari;
  const awardsMediaStyle = {
    display: 'block',
    width: '100%',
    maxWidth: 360,
    height: 'auto',
    objectFit: 'contain',
    background: 'transparent',
    backgroundColor: 'transparent',
  };

  // ─── Data ──────────────────────────────────────────────────────────────────
  const testimonials = [
    {
      quote: 'I wanted to do something that demonstrated thoughtfulness, truly helped boost team cohesion, and also could signal to donors that we were a responsible employer while being fiscally prudent.',
      name: 'Simon Davies',
      title: 'Executive Director at Teen Cancer America',
      meta: 'Nonprofit · 1-25 employees · Los Angeles, CA',
      img: window.__resources.simonDavies,
      logo: window.__resources.teenCancerLogo,
    },
    {
      quote: 'Many restaurants don’t feel they have the profits to contribute to a match. But to attract knowledgeable, dedicated staff that will help grow the business, we need to be able to offer these important benefits.',
      name: 'Kyle Peters',
      title: 'Owner at Sexy Pizza',
      meta: 'Restaurant · 77 employees · Denver, CO',
      img: null,
      logo: null,
    },
  ];

  const faqs = [
    { q: 'Are we too small to offer a 401(k)?', a: 'Human Interest was built for companies with as few as 1 employee. Plans are affordable at any size.' },
    { q: 'How long does it take to set up?', a: 'New to 401(k)? You’re up and running in minutes. Switching from another provider? You’re done within 10 days.' },
    { q: 'How do employees choose their investments?', a: 'Employees start automatically in a low-cost, diversified portfolio — or they can choose their own funds.' },
  ];

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif', background: '#fff', maxWidth: '100%' }}>

      {/* ═══════════════════════════════════════════════════════════
          1 · NAV + HERO  (from Direction B)
          ═══════════════════════════════════════════════════════════ */}
      {/* Nav + hero share a full-bleed backdrop so the yellow glow is not clipped */}
      <div className="hi-header-shell">
        <div className="hi-header-shell__content">
          <HINav showEyebrow={false} employeeStyle="none" variant="B" audienceToggle={true} defaultAudience="employers" transparent={true} homeHref="index.html" pricingHref="pricing.html" />

      <section style={{
        position: 'relative',
        background: 'transparent',
        padding: '100px clamp(32px, 6vw, 120px) 64px',
        overflow: 'visible',
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'min(42%, 520px)',
          height: '75%',
          background: 'radial-gradient(ellipse 90% 90% at 0% 100%, #8FD5D1 0%, transparent 58%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 60,
          marginBottom: 48,
          maxWidth: 1280,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}>
          {/* Left: copy */}
          <div style={{ flex: 1, maxWidth: 820, display: 'flex', flexDirection: 'column' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: HI_BRAND.tealPale, borderRadius: 24, padding: '6px 16px',
              marginBottom: 24, alignSelf: 'flex-start',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: HI_BRAND.teal, display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: HI_BRAND.tealDark, letterSpacing: '0.08em', textTransform: 'uppercase' }}>50,000+ employers trust Human Interest</span>
            </div>
            <h1 style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: 'clamp(48px, 5.4vw, 76px)',
              fontWeight: 400,
              color: HI_BRAND.navy,
              lineHeight: 1.08,
              margin: '0 0 8px',
              letterSpacing: '-0.025em',
            }}>
              401(k)s weren’t built<br />
              for{' '}
              <span style={{
                background: 'linear-gradient(90deg, #022A4D 0%, #14B5AB 50%, #022A4D 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontStyle: 'normal',
              }}>employers</span>.<br />
              We changed that.
            </h1>
            <p style={{ fontSize: 20, color: HI_BRAND.gray[600], lineHeight: 1.65, maxWidth: 520, marginBottom: 8, marginTop: 10 }}>
              We listened and built what employers actually need—<br />
              a new standard for retirement.
            </p>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20, paddingTop: 32 }}>
              <a href="#standard" className="hi-btn hi-btn--navy" style={{
                background: HI_BRAND.navy, color: '#fff',
                borderRadius: 8, padding: '14px 32px',
                fontWeight: 700, fontSize: 15, textDecoration: 'none',
                display: 'inline-block',
              }}>See what changed</a>
            </div>
          </div>
          {/* Right: badge wall */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 16, width: 'min(380px, 100%)', maxWidth: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
              <div
                className="hi-hero-awards-stage"
                style={{ width: '100%', maxWidth: 360 }}
              >
                <div className={'hi-hero-awards-media' + (needsScreenBlend ? ' hi-hero-awards-media--blend' : '')} style={{ width: '100%', maxWidth: 360 }}>
                  {isSafari ? (
                    <img
                      className="hi-hero-awards-img"
                      src={window.__resources.awardsImg}
                      alt="Awards"
                      style={awardsMediaStyle}
                    />
                  ) : (
                    <video
                      className={'hi-hero-awards-video' + (needsScreenBlend ? ' hi-hero-awards-video--screen-blend' : '')}
                      src={window.__resources.awardsVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label="Awards"
                      style={awardsMediaStyle}
                    />
                  )}
                </div>
              </div>
              <p style={{
                fontFamily: 'Lora, Georgia, serif',
                fontSize: 16,
                fontStyle: 'italic',
                color: HI_BRAND.gray[700],
                margin: 0,
                textAlign: 'center',
                lineHeight: 1.4,
              }}>
                The highest-rated, fastest-growing 401(k) provider
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          2 · 6 BENCHMARKS — Variant 2 (Navy canvas, warm off-white tiles)
          ═══════════════════════════════════════════════════════════ */}
      <div id="standard" className="hi-benchmarks-shell">
        <StandardBlade_MasterDetailMint />
        {/* Layout options: StandardBlade_TileGridMint (2×3 accordion) · StandardBlade_MasterDetailMint (left rail) */}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          3 · WHY CHOOSE US (Treatment 2 — without the eyebrow rules)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: HI_BRAND.gray[50],
        padding: '96px 80px 112px',
        fontFamily: 'Manrope, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            {/* Eyebrow — flanking rules removed per brief */}
            <p style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: HI_BRAND.tealText,
              margin: '0 0 20px',
            }}>
              Why choose us
            </p>
            <h2 style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: 48,
              fontWeight: 400,
              color: HI_BRAND.navy,
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: '0 0 20px',
              textWrap: 'balance',
            }}>
              We rebuilt the 401(k) around the employer.
            </h2>
            <p style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: 24,
              fontStyle: 'italic',
              fontWeight: 400,
              color: HI_BRAND.gray[700],
              lineHeight: 1.4,
              letterSpacing: '-0.005em',
              margin: '8px 0 0',
              textWrap: 'balance',
            }}>
              That’s why we’ve earned more 5-star reviews than any other provider.
            </p>
          </div>

          {/* 5-star proof card */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'stretch',
              background: HI_BRAND.white,
              borderRadius: 16,
              boxShadow: '0 1px 2px rgba(2,42,77,0.04), 0 12px 32px rgba(2,42,77,0.07)',
              overflow: 'hidden',
            }}>
              {/* Left — 5.0 + stars */}
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '40px 72px', gap: 18,
              }}>
                <span style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 56, fontWeight: 600,
                  color: HI_BRAND.navy,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>5.0</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[0, 1, 2, 3, 4].map((s) =>
                    <svg key={s} width="46" height="46" viewBox="0 0 24 24" fill={HI_BRAND.yellow}>
                      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.5l7.1-.6L12 2z" />
                    </svg>
                  )}
                </div>
              </div>
              {/* Divider */}
              <div style={{ width: 1, background: HI_BRAND.gray[100], alignSelf: 'stretch' }} />
              {/* Right — 2,744 + 5-STAR RATINGS */}
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '40px 72px', gap: 14,
              }}>
                <span style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 56, fontWeight: 600,
                  color: HI_BRAND.navy,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                }}>2,744</span>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: HI_BRAND.navy,
                  margin: '4px 0 0',
                  fontSize: 16,
                }}>5-Star Ratings</p>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 17, fontWeight: 500,
                  color: HI_BRAND.gray[600],
                  margin: 0, lineHeight: 1.4,
                }}>across G2, Google, and Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4a · TESTIMONIALS  (from Direction A)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#fff',
        padding: '88px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 90% at 50% 50%, #FFCF6722 0%, transparent 70%)',
          zIndex: 0,
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: HI_BRAND.tealText, marginBottom: 16 }}>TESTIMONIALS</p>
          <h2 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 44, fontWeight: 400, color: HI_BRAND.navy, lineHeight: 1.15, margin: '0 0 48px', maxWidth: 640 }}>
            Trusted by employers nationwide
          </h2>

          <div style={{ position: 'relative' }}>
            {(() => {
              const t = testimonials[testimonialIdx];
              return (
                <div style={{
                  background: '#fff',
                  border: `1px solid ${HI_BRAND.gray[100]}`,
                  borderRadius: 20,
                  position: 'relative',
                  maxWidth: 980,
                  margin: '0 auto',
                  display: 'grid',
                  gridTemplateColumns: t.img ? '320px 1fr' : '1fr',
                  overflow: 'hidden',
                  minHeight: 360,
                }}>
                  {t.img &&
                    <div style={{
                      backgroundImage: `url(${t.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }} />
                  }
                  <div style={{ padding: '52px 56px 48px', position: 'relative' }}>
                    <span style={{ fontSize: 96, fontFamily: 'Lora, Georgia, serif', color: HI_BRAND.yellow, lineHeight: 1, position: 'absolute', top: 18, left: 36, opacity: 0.8 }}>‘</span>
                    <p style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 21, fontWeight: 400, color: HI_BRAND.navy, lineHeight: 1.6, margin: '12px 0 28px', fontStyle: 'italic' }}>{t.quote}</p>
                    <p style={{ fontWeight: 700, fontSize: 15, color: HI_BRAND.navy, margin: '0 0 4px' }}>{t.name}</p>
                    <p style={{ fontSize: 14, color: HI_BRAND.gray[500], margin: 0 }}>{t.title}</p>
                    <p style={{ fontSize: 12, color: HI_BRAND.gray[300], marginTop: 10 }}>{t.meta}</p>
                    {t.logo &&
                      <img src={t.logo} alt="" style={{ position: 'absolute', right: 40, bottom: 36, height: 64, width: 'auto', opacity: 0.85 }} />
                    }
                  </div>
                </div>
              );
            })()}

            {/* Prev/next arrows */}
            <div style={{ position: 'absolute', top: '50%', left: -8, transform: 'translateY(-50%)' }}>
              <button onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)} aria-label="Previous" className="hi-btn hi-btn--icon" style={{
                width: 48, height: 48, borderRadius: '50%', border: 'none', background: HI_BRAND.teal, color: '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
            </div>
            <div style={{ position: 'absolute', top: '50%', right: -8, transform: 'translateY(-50%)' }}>
              <button onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)} aria-label="Next" className="hi-btn hi-btn--icon" style={{
                width: 48, height: 48, borderRadius: '50%', border: 'none', background: HI_BRAND.teal, color: '#fff',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
            {[0, 1, 2, 3].map((i) =>
              <button key={i} onClick={() => setTestimonialIdx(i % testimonials.length)} aria-label={`Go to testimonial ${i + 1}`} className="hi-btn hi-btn--dot" style={{
                width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
                background: i === testimonialIdx ? HI_BRAND.teal : HI_BRAND.gray[200],
              }} />
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 600, color: HI_BRAND.tealText, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              See all customer stories <span style={{ fontSize: 13 }}>›</span>
            </a>
          </div>

          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
            <img src={window.__resources.customerLogos} alt="Customer logos: Goddard School, KW South Bay, BMW Motorcycles Fort Lauderdale, Luke’s, Servpro" style={{ width: '100%', maxWidth: 1120, height: 'auto', display: 'block', opacity: 0.85 }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4b · "You deserve a great 401(k)" CTA  (from Direction A)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: HI_BRAND.navy,
        padding: '72px 80px 96px',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 120% at 50% 0%, rgba(20, 181, 171, 0.22) 0%, transparent 58%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(255, 207, 103, 0.12) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto' }}>
          <p style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: HI_BRAND.tealAccent,
            margin: '0 0 20px',
          }}>
            Built for employers like you
          </p>
          <h2 style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: 56,
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            textWrap: 'balance',
          }}>
            You deserve a{' '}
            <span style={{
              fontStyle: 'italic',
              color: HI_BRAND.white,
            }}>great 401(k)</span>
          </h2>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 20,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.6,
            margin: '0 0 44px',
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Now you can offer one — with all of your needs met.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a href="#" className="hi-btn hi-btn--yellow" style={{
              background: HI_BRAND.yellow,
              color: HI_BRAND.navy,
              borderRadius: 8,
              padding: '16px 36px',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
            }}>Talk to an Expert</a>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, fontWeight: 500 }}>or</span>
            <a href="#" className="hi-btn hi-btn--outline-light" style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.85)',
              borderRadius: 8,
              padding: '14px 36px',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
            }}>Get Started in Minutes</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5 · HOW IT WORKS (B · Editorial three-up)
          ═══════════════════════════════════════════════════════════ */}
      <HowVariantB />

      {/* ═══════════════════════════════════════════════════════════
          6a · FAQ — "Common questions we get asked" (from Direction A)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '24px 80px 36px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: 44, fontWeight: 400, color: HI_BRAND.navy, margin: '0 0 40px', lineHeight: 1.15 }}>
            Common questions we get asked
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((f, i) =>
              <div key={i} style={{
                background: '#fff',
                border: `1px solid ${HI_BRAND.gray[100]}`,
                borderLeft: `6px solid ${HI_BRAND.teal}`,
                borderRadius: 8,
                padding: '24px 28px',
              }}>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, fontWeight: 700, color: HI_BRAND.navy, margin: '0 0 8px' }}>Q. {f.q}</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 15, color: HI_BRAND.gray[600], margin: 0, lineHeight: 1.6 }}>A. {f.a}</p>
              </div>
            )}
          </div>
          <div style={{ marginTop: 24 }}>
            {/* Arrow replaced with `>`, no underline */}
            <a href="#" className="hi-btn hi-btn--link" style={{ fontSize: 14, fontWeight: 700, color: HI_BRAND.tealText, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              See all FAQs <span style={{ fontSize: 13 }}>›</span>
            </a>
          </div>
        </div>
      </section>

      <HIBetter401kCta />

      <HIFooter homeHref="index.html" pricingHref="pricing.html" />
    </div>
  );
}

Object.assign(window, { CombinedLandingPage });
