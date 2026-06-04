// "The new 401(k) standard" — 6-item blade with drill-down · NEW TREATMENTS
//
// Three new variants. Each shows 6 benchmark categories at the top level (a grid
// with category label + industry-standard summary), with a click affordance.
// Clicking a category reveals the drill-down detail (3 bullet specifics).
//
//   Variant 1 — "Expanding Tile Grid"   (light cream · 3x2 tiles · expand inline)
//   Variant 2 — "Master / Detail"        (navy · left rail of 6 · large right panel)
//   Variant 3 — "Card Deck → Overlay"    (navy · 3x2 cards · click slides in a detail overlay)
//
// Copy reflects the user's brief:
//   Eyebrow:  THE NEW 401(K) STANDARD
//   Headline: What you should expect from a 401(k) provider.
//   Subhead:  Introducing a new benchmark for employers— the 6 benchmarks
//             every 401(k) provider should hit.

// ──────────────────────────────────────────────────────────────────── Data ───
//
// Note: the existing 5-item dataset has been split into 6 by separating
// "Investments" out of "Employee savings" — investments and saver rewards are
// distinct concerns, and the brief asks for six benchmarks. Investments inherits
// the proprietary-fund/diversification bullet; Employee savings keeps fees and
// rewards.

const SIX_STANDARD = {
  eyebrow: 'The new 401(k) standard',
  headline: 'What you should expect from a 401(k) provider.',
  subhead:
  'Introducing a new benchmark for employers — the 5 benchmarks every 401(k) provider should hit.',
  items: [
  {
    id: 'administration',
    label: "Don’t take on a second job",
    icon: 'clock',
    tag: 'Administration',
    summary: 'Spend less than 10 minutes a month managing your plan',
    intro: 'Other providers leave you doing all the work. We take the work off your plate.',
    bullets: [
    'Payroll contributions, employee data sync',
    'Loan and withdrawal approvals',
    'Employee support',
    'Fund lineup management',
    'Compliance deadlines and required notices']

  },
  {
    id: 'compliance',
    label: 'Stay compliant at no extra cost',
    icon: 'shield',
    tag: 'Compliance',
    summary: '$0 in added compliance costs. Your provider shares liability with you.',
    intro: 'Other providers leave the compliance work and the expense. We work to keep your plan compliant, at no added cost.',
    bullets: [
    'Proactive, AI-powered compliance monitoring',
    'Early warning if you are at risk of failure',
    'We sign & file annual IRS Form 5500 ($0)',
    'We pay for your ERISA fidelity bond ($0)',
    'We handle required plan restatements ($0)',
    'If you get audited, we cover the expense ($0)']

  },
  {
    id: 'service',
    label: 'Count on proactive service',
    icon: 'headset',
    tag: 'Service',
    summary: 'Dedicated US-based service held to measurable standards, or you get paid',
    intro: "Other providers route you overseas to reps who don’t know retirement. We give you expert guidance.",
    bullets: [
    'U.S.-based support from retirement experts',
    'A dedicated Account Manager',
    'Quarterly plan reviews',
    'A money-backed Customer Experience Guarantee']

  },
  {
    id: 'investments',
    label: "Offer a plan you’re proud of",
    icon: 'pie',
    tag: 'Employee experience',
    summary: 'No surprise fees or high expense ratios. Your provider helps employees enroll and invest.',
    intro: 'Other providers steer savers into their own proprietary funds and charge added fees. We help your employees save more.',
    bullets: [
    'Employees pay $0 in transaction fees',
    'Low-cost funds. No proprietary products.',
    'Rollover support for old 401(k)s',
    'Lower-wage employees get a cash back incentive to save']

  },
  {
    id: 'employee-savings',
    label: 'Pay a fair, transparent price',
    icon: 'chart',
    tag: 'Price',
    summary: '$0 transaction fees — no nickel-and-diming. Fair pricing, published for anyone to see.',
    intro: 'Other providers make pricing impossible to find and understand. Our pricing is simple and public.',
    bullets: [
    'Employers pay $0 in transaction fees',
    'All pricing published on our pricing page',
    'Price Match Guarantee']

  }]

};

// ─────────────────────────────────────────────────────────────────── Icons ───
// Re-defined here (Babel scripts share global top-level scope, but defining
// SixIcon locally keeps this file self-contained and adds the 'pie' icon used
// for the new Investments category).

function SixIcon({ name, size = 26, stroke = 1.6 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { display: 'block', flexShrink: 0 }
  };
  switch (name) {
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15.5 14" />
        </svg>);

    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6l-8-3Z" />
          <polyline points="9 12 11.5 14.5 15.5 10.5" />
        </svg>);

    case 'headset':
      return (
        <svg {...common}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="3" y="13.5" width="4" height="6.5" rx="1.4" />
          <rect x="17" y="13.5" width="4" height="6.5" rx="1.4" />
          <path d="M21 17v1.5a3.5 3.5 0 0 1-3.5 3.5H13" />
        </svg>);

    case 'chart':
      return (
        <svg {...common}>
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="15 7 21 7 21 13" />
        </svg>);

    case 'tag':
      return (
        <svg {...common}>
          <path d="M3 12V4h8l10 10-8 8L3 12Z" />
          <circle cx="8" cy="8" r="1.6" />
        </svg>);

    case 'pie':
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" />
          <path d="M14 3.3A9 9 0 0 1 20.7 10H14V3.3Z" />
        </svg>);

    default:
      return null;
  }
}

// ──────────────────────────────────────────────────────────── Shared header ──

function SixHeader({ tone = 'light', align = 'left', maxWidth = 820, eyebrowColor, headline, subhead }) {
  const C = SIX_STANDARD;
  const resolvedHeadline = headline ?? C.headline;
  const resolvedSubhead = subhead ?? C.subhead;
  const isDark = tone === 'dark';
  const resolvedEyebrow = eyebrowColor || (isDark ? HI_BRAND.tealAccent : HI_BRAND.tealText);
  const headlineColor = isDark ? '#fff' : HI_BRAND.navy;
  const subColor = isDark ? 'rgba(255,255,255,0.72)' : HI_BRAND.gray[600];
  return (
    <header
      style={{
        maxWidth,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
        textAlign: align,
        marginBottom: 56
      }}>
      
      <p
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: resolvedEyebrow,
          margin: '0 0 20px'
        }}>
        
        {C.eyebrow}
      </p>
      <h2
        style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 56,
          fontWeight: 400,
          color: headlineColor,
          lineHeight: 1.08,
          letterSpacing: '-0.022em',
          margin: '0 0 18px',
          textWrap: 'balance'
        }}>
        
        {resolvedHeadline}
      </h2>
      <p
        style={{
          fontSize: 18,
          color: subColor,
          lineHeight: 1.55,
          margin: 0,
          textWrap: 'pretty'
        }}>
        
        {resolvedSubhead}
      </p>
    </header>);

}

// ═════════════════════════════════════════════════════════════════════════════
// Variant 1 — "Paper" (warm cream canvas, white tiles, navy text)
//
// Lighter treatment. Background is a warm off-white cream. Tiles sit on the
// cream as white cards with a hairline gray border. Opening a tile keeps the
// white card but adds a teal border + soft elevation, with all drill-down
// content in navy/gray for easy reading. Same content and layout as Variant 3.
// ═════════════════════════════════════════════════════════════════════════════

function StandardBlade_TileGridPaper() {
  const C = SIX_STANDARD;
  const [open, setOpen] = React.useState('compliance');
  const [hover, setHover] = React.useState(null);

  const CANVAS = '#FAF6EE';
  const HAIRLINE = '#E8E2D4';
  const TILE_BASE = '#FFFFFF';
  const TILE_HOVER = '#FFFDF8';

  return (
    <section
      style={{
        fontFamily: 'Manrope, sans-serif',
        background: CANVAS,
        padding: '104px 80px 120px',
        minWidth: 1280,
        color: HI_BRAND.navy
      }}>

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SixHeader tone="light" align="left" maxWidth={820} eyebrowColor={HI_BRAND.tealDark} />

        {/* Helper line — above the grid */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 20
          }}>

          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: HI_BRAND.gray[500]
            }}>

            The six benchmarks
          </span>
          <span
            style={{
              fontFamily: 'Lora, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 15,
              color: HI_BRAND.tealDark
            }}>Tap any benchmark to see how Human Interest delivers.
          </span>
        </div>

        {/* 2 columns × 3 rows grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16
          }}>

          {C.items.map((item) => {
            const isOpen = open === item.id;
            const isHover = hover === item.id;
            const borderColor = isOpen ? HI_BRAND.teal : HAIRLINE;
            const bg = isOpen ? '#FFFFFF' : isHover ? TILE_HOVER : TILE_BASE;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  appearance: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: HI_BRAND.navy,
                  padding: '36px 40px 36px',
                  borderRadius: 8,
                  border: `1px solid ${borderColor}`,
                  background: bg,
                  boxShadow: isOpen ?
                  '0 14px 36px rgba(2, 42, 77, 0.10)' :
                  '0 1px 2px rgba(2, 42, 77, 0.03)',
                  transition: 'background 160ms ease, border-color 160ms ease, box-shadow 200ms ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                  minHeight: 240
                }}>

                {/* Top row: category pill + plus affordance */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12
                  }}>

                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 18px',
                      borderRadius: 999,
                      background: HI_BRAND.tealPale,
                      color: HI_BRAND.tealDark,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      lineHeight: 1
                    }}>

                    {item.tag}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      border: `1px solid ${isOpen ? HI_BRAND.teal : HI_BRAND.gray[200]}`,
                      color: isOpen ? HI_BRAND.tealDark : HI_BRAND.gray[600],
                      background: isOpen ? HI_BRAND.tealPale : 'transparent',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease',
                      flexShrink: 0
                    }}>

                    +
                  </span>
                </div>

                {/* Label */}
                <h3
                  style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: 32,
                    fontWeight: 400,
                    color: HI_BRAND.navy,
                    margin: 0,
                    lineHeight: 1.12,
                    letterSpacing: '-0.01em'
                  }}>

                  {item.label}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.42,
                    color: HI_BRAND.gray[700],
                    margin: 0,
                    textWrap: 'pretty',
                    fontWeight: 400
                  }}>

                  {item.summary}
                </p>

                {/* Drill-down */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 1200 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 280ms ease, opacity 220ms ease'
                  }}>

                  <div
                    style={{
                      borderTop: `1px solid ${HI_BRAND.gray[100]}`,
                      paddingTop: 20,
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14
                    }}>

                    {item.intro &&
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: HI_BRAND.gray[600],
                        margin: '0 0 4px',
                        textWrap: 'pretty'
                      }}>

                        {(() => {
                        const idx = item.intro.indexOf('. ');
                        if (idx === -1) {
                          return item.intro;
                        }
                        const first = item.intro.slice(0, idx + 1);
                        const rest = item.intro.slice(idx + 2);
                        return (
                          <React.Fragment>
                              {first}{' '}
                              <strong style={{ fontWeight: 700, color: HI_BRAND.navy }}>
                                {rest}
                              </strong>
                            </React.Fragment>);

                      })()}
                      </p>
                    }
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {item.bullets.map((b, i) =>
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 12,
                          alignItems: 'baseline'
                        }}>

                          <span
                          aria-hidden
                          style={{
                            color: HI_BRAND.teal,
                            fontSize: 15,
                            lineHeight: 1.4,
                            fontWeight: 700
                          }}>

                            ✓
                          </span>
                          <span
                          style={{
                            fontSize: 15,
                            lineHeight: 1.5,
                            color: HI_BRAND.gray[800]
                          }}>

                            {b}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </button>);

          })}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
          <a
            href="#"
            style={{
              display: 'inline-block',
              background: HI_BRAND.navy,
              color: '#FFFFFF',
              fontFamily: 'Manrope, sans-serif',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '0.005em',
              textDecoration: 'none',
              padding: '20px 40px',
              borderRadius: 10,
            }}>

            See the standard and how we meet it
          </a>
        </div>
      </div>
    </section>);

}

// ═════════════════════════════════════════════════════════════════════════════
// Variant 1 (legacy alias) — kept so any external reference still resolves.
// Points at the new Paper treatment.
// ═════════════════════════════════════════════════════════════════════════════

function StandardBlade_ExpandingTileGrid() {
  const C = SIX_STANDARD;
  const [open, setOpen] = React.useState('compliance');
  const [hover, setHover] = React.useState(null);

  const TILE_BASE = 'rgba(255, 255, 255, 0.035)';
  const TILE_HOVER = 'rgba(255, 255, 255, 0.07)';
  const TILE_OPEN = 'rgba(255, 255, 255, 0.09)';
  const BORDER = 'rgba(255, 255, 255, 0.12)';
  const BORDER_OPEN = HI_BRAND.teal;

  return (
    <section
      style={{
        fontFamily: 'Manrope, sans-serif',
        background: '#022A4D',
        padding: '104px 80px 120px',
        minWidth: 1280,
        color: '#fff'
      }}>
      
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SixHeader tone="dark" align="left" maxWidth={820} />

        {/* Helper line — above the grid */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 20
          }}>
          
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)'
            }}>
            
            The six benchmarks
          </span>
          <span
            style={{
              fontFamily: 'Lora, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 15,
              color: HI_BRAND.tealLight
            }}>Tap any benchmark to see how Human Interest delivers.


          </span>
        </div>

        {/* 2 columns × 3 rows grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16
          }}>
          
          {C.items.map((item) => {
            const isOpen = open === item.id;
            const isHover = hover === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  appearance: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: '#fff',
                  padding: '36px 40px 36px',
                  borderRadius: 8,
                  border: `1px solid ${isOpen ? BORDER_OPEN : BORDER}`,
                  background: isOpen ? TILE_OPEN : isHover ? TILE_HOVER : TILE_BASE,
                  transition: 'background 160ms ease, border-color 160ms ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                  minHeight: 240
                }}>
                
                {/* Top row: category pill + plus affordance */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12
                  }}>
                  
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 18px',
                      borderRadius: 999,
                      background: 'rgba(20, 181, 171, 0.16)',
                      color: HI_BRAND.tealLight,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      lineHeight: 1
                    }}>
                    
                    {item.tag}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      border: `1px solid ${isOpen ? HI_BRAND.teal : 'rgba(255,255,255,0.30)'}`,
                      color: isOpen ? HI_BRAND.tealLight : 'rgba(255,255,255,0.85)',
                      background: isOpen ? 'rgba(20, 181, 171, 0.16)' : 'transparent',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease',
                      flexShrink: 0
                    }}>
                    
                    +
                  </span>
                </div>

                {/* Label */}
                <h3
                  style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: 32,
                    fontWeight: 400,
                    color: '#fff',
                    margin: 0,
                    lineHeight: 1.12,
                    letterSpacing: '-0.01em'
                  }}>
                  
                  {item.label}
                </h3>

                {/* Summary — larger, the headline of the tile */}
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.42,
                    color: 'rgba(255,255,255,0.86)',
                    margin: 0,
                    textWrap: 'pretty',
                    fontWeight: 400
                  }}>
                  
                  {item.summary}
                </p>

                {/* Drill-down */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 1200 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 280ms ease, opacity 220ms ease'
                  }}>
                  
                  <div
                    style={{
                      borderTop: '1px solid rgba(143, 213, 209, 0.35)',
                      paddingTop: 20,
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14
                    }}>
                    
                    {item.intro &&
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: 'rgba(255,255,255,0.75)',
                        margin: '0 0 4px',
                        textWrap: 'pretty'
                      }}>
                      
                        {item.intro.split(/(\*[^*]+\*)/g).map((chunk, i) =>
                      chunk.startsWith('*') && chunk.endsWith('*') ?
                      <em key={i} style={{ fontFamily: 'Lora, Georgia, serif', fontStyle: 'italic', color: '#fff' }}>
                              {chunk.slice(1, -1)}
                            </em> :

                      <React.Fragment key={i}>{chunk}</React.Fragment>

                      )}
                      </p>
                    }
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {item.bullets.map((b, i) =>
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 12,
                          alignItems: 'baseline'
                        }}>
                        
                          <span
                          aria-hidden
                          style={{
                            color: HI_BRAND.tealLight,
                            fontSize: 15,
                            lineHeight: 1.4,
                            fontWeight: 700
                          }}>
                          
                            ✓
                          </span>
                          <span
                          style={{
                            fontSize: 15,
                            lineHeight: 1.5,
                            color: 'rgba(255,255,255,0.88)'
                          }}>
                          
                            {b}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </button>);

          })}
        </div>
      </div>
    </section>);

}
// ═════════════════════════════════════════════════════════════════════════════
// Variant 2 — "Mint" (soft teal-pale canvas, white tiles, navy text)
//
// Lighter treatment. Background is HI_BRAND.tealPale (#E5F4F3). Tiles sit on
// it as white cards with a hairline teal-tinted border. Opening a tile keeps
// the white card but adds a teal border + soft elevation. Same content and
// layout as Variant 3 — just a fresher, cooler canvas than the warm Paper one.
// ═════════════════════════════════════════════════════════════════════════════

function StandardBlade_TileGridMint() {
  const C = SIX_STANDARD;
  const [open, setOpen] = React.useState(null);
  const [hover, setHover] = React.useState(null);

  const CANVAS = '#022A4D'; // navy
  const HAIRLINE = 'rgba(2, 42, 77, 0.10)'; // subtle navy-tinted edge on tiles
  const TILE_FILL = '#E8EEF3'; // very light navy tint (replaces warm cream)
  const TILE_BORDER_OPEN = HI_BRAND.teal; // teal border marks the open tile

  // Body-copy emphasis — the number/metric claim in each card's summary.
  // Keyed by item id, value is an array of substrings to bold.
  const SUMMARY_EMPHASIS = {
    administration: ['under 10 minutes a month'],
    compliance: ['$0 in added compliance costs'],
    service: ['Dedicated US-based service'],
    investments: ['No surprise fees or high expense ratios'],
    'employee-savings': ['$0 transaction fees']
  };

  // Per-card summary overrides (Mint-only copy tweaks). Falls back to item.summary.
  const SUMMARY_OVERRIDES = {
    administration: 'We handle the admin load so you can manage your plan in under 10 minutes a month.',
    compliance: '$0 in added compliance costs, and we share liability with you'
  };

  // Per-card drill-down intro overrides (Mint-only). Falls back to item.intro.
  const INTRO_OVERRIDES = {
    administration: "Here’s what we handle - so you don’t have to:",
    compliance: "We shoulder the burden of keeping your plan compliant:",
    service: "We help you stay ahead of problems:",
    investments: "We help your employees save more:",
    'employee-savings': "Our pricing is simple, public, and competitive:"
  };

  // Per-card bullet overrides (Mint-only). Falls back to item.bullets.
  const BULLETS_OVERRIDES = {
    administration: [
    'Process payroll contributions',
    'Sync employee data',
    'Track compliance deadlines',
    'Send required notices',
    'Field employee questions',
    'Approve loans and withdrawals',
    'Manage your fund lineup'],

    service: [
    'U.S.-based support from retirement experts',
    'Dedicated Account Manager',
    'Quarterly plan reviews',
    'Money-backed Customer Experience Guarantee'],

    'employee-savings': [
    'Employers pay $0 in transaction fees',
    'Pricing disclosed upfront',
    'Price Match Guarantee']

  };

  // Wrap matched substrings in <strong>. Matches applied left-to-right.
  function renderSummary(text, marks) {
    if (!marks || marks.length === 0) return text;
    const nodes = [];
    let cursor = 0;
    while (cursor < text.length) {
      let nextMatch = null;
      for (const m of marks) {
        const idx = text.indexOf(m, cursor);
        if (idx !== -1 && (nextMatch === null || idx < nextMatch.idx)) {
          nextMatch = { idx, mark: m };
        }
      }
      if (!nextMatch) {
        nodes.push(text.slice(cursor));
        break;
      }
      if (nextMatch.idx > cursor) {
        nodes.push(text.slice(cursor, nextMatch.idx));
      }
      nodes.push(
        <strong key={cursor} style={{ fontWeight: 700, color: HI_BRAND.navy }}>
          {nextMatch.mark}
        </strong>
      );
      cursor = nextMatch.idx + nextMatch.mark.length;
    }
    return nodes.map((n, i) => <React.Fragment key={i}>{n}</React.Fragment>);
  }

  return (
    <section
      style={{
        fontFamily: 'Manrope, sans-serif',
        background: CANVAS,
        padding: '104px 80px 120px',
        minWidth: 1280,
        color: '#fff'
      }}>

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SixHeader
          tone="dark"
          align="left"
          maxWidth={820}
          headline="We set a new standard for 401(k) providers."
          subhead="The six benchmarks every provider should hit. Tap any to see how Human Interest delivers." />
        

        {/* 2 columns × 3 rows grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16
          }}>

          {C.items.map((item, index) => {
            const isOpen = open === item.id;
            const isHover = hover === item.id;
            const borderColor = isOpen ? TILE_BORDER_OPEN : HAIRLINE;
            const bg = isOpen ? '#FFFFFF' : TILE_FILL;
            const benchmarkNum = index + 1;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  appearance: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: HI_BRAND.navy,
                  padding: '36px 40px 36px',
                  borderRadius: 8,
                  border: `1px solid ${borderColor}`,
                  background: bg,
                  boxShadow: isOpen ?
                  '0 18px 40px rgba(0, 0, 0, 0.28)' :
                  '0 10px 24px rgba(0, 0, 0, 0.18)',
                  transition: 'background 160ms ease, border-color 160ms ease, box-shadow 200ms ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                  minHeight: 240
                }}>

                {/* Top row: category pill + plus affordance */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12
                  }}>

                  <span
                    style={{ ...{
                        display: 'inline-block',
                        padding: '8px 18px',
                        borderRadius: 999,
                        background: isOpen ? HI_BRAND.teal : HI_BRAND.tealDark,
                        color: '#FFFFFF',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                        transition: 'background 160ms ease, color 160ms ease'
                      }, background: "rgb(2, 42, 77)" }}>

                    <span style={{ fontSize: 12, fontWeight: 800, opacity: 0.92, marginRight: 7 }}>{benchmarkNum}</span>
                    {item.tag}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      border: `1px solid ${isOpen ? HI_BRAND.teal : 'rgba(0, 88, 91, 0.30)'}`,
                      color: isOpen ? '#FFFFFF' : HI_BRAND.tealDark,
                      background: isOpen ? HI_BRAND.teal : '#FFFFFF',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease, color 200ms ease',
                      flexShrink: 0
                    }}>

                    +
                  </span>
                </div>

                {/* Label */}
                <h3
                  style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: 32,
                    fontWeight: 400,
                    color: HI_BRAND.navy,
                    margin: 0,
                    lineHeight: 1.12,
                    letterSpacing: '-0.01em'
                  }}>

                  {item.label}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 20,
                    fontStyle: 'normal',
                    lineHeight: 1.45,
                    color: HI_BRAND.gray[800],
                    margin: 0,
                    textWrap: 'pretty',
                    fontWeight: 400
                  }}>

                  {renderSummary(SUMMARY_OVERRIDES[item.id] ?? item.summary, SUMMARY_EMPHASIS[item.id])}
                </p>

                {/* Drill-down */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 1200 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 280ms ease, opacity 220ms ease'
                  }}>

                  <div
                    style={{
                      borderTop: `1px solid rgba(0, 88, 91, 0.18)`,
                      paddingTop: 20,
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14
                    }}>

                    {(() => {
                      const intro = INTRO_OVERRIDES[item.id] ?? item.intro;
                      if (!intro) return null;
                      return (
                        <p
                          style={{
                            fontSize: 15,
                            lineHeight: 1.55,
                            color: HI_BRAND.navy,
                            fontWeight: 700,
                            margin: '0 0 4px',
                            textWrap: 'pretty'
                          }}>

                          {intro}
                        </p>);

                    })()}
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {(BULLETS_OVERRIDES[item.id] ?? item.bullets).map((b, i) =>
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '16px 1fr',
                          gap: 6,
                          alignItems: 'baseline'
                        }}>

                          <span
                          aria-hidden
                          style={{
                            color: HI_BRAND.teal,
                            fontSize: 15,
                            lineHeight: 1.4,
                            fontWeight: 700
                          }}>

                            ✓
                          </span>
                          <span
                          style={{
                            fontSize: 15,
                            lineHeight: 1.5,
                            color: HI_BRAND.gray[800]
                          }}>

                            {b}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </button>);

          })}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
          <a
            href="#"
            style={{
              display: 'inline-block',
              background: HI_BRAND.yellow,
              color: HI_BRAND.navy,
              fontFamily: 'Manrope, sans-serif',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '0.005em',
              textDecoration: 'none',
              padding: '20px 40px',
              borderRadius: 10,
            }}>Why the standard was needed


          </a>
        </div>
      </div>
    </section>);

}

// ═════════════════════════════════════════════════════════════════════════════
// Layout alt — "Master / Detail" (navy canvas · left rail of 6 · detail panel)
//
// Same Mint copy/tokens as TileGridMint, but the six benchmarks scan as a numbered
// list on the left while detail stays in a stable panel on the right — no uneven
// row heights when bullets expand.
// ═════════════════════════════════════════════════════════════════════════════

function StandardBlade_MasterDetailMint() {
  const C = SIX_STANDARD;
  const [current, setCurrent] = React.useState(C.items[0].id);

  const CANVAS = '#022A4D';
  const HAIRLINE = 'rgba(2, 42, 77, 0.17)';
  const TILE_FILL = '#B0BFD0';
  const RAIL_WIDTH = 360;
  const RAIL_GAP = 10;
  const CONNECTOR_GAP = 32;
  const DETAIL_HEIGHT = 640;
  const CONNECTOR_HEIGHT = 2;
  const PHOTO_PAD = 16;
  const PHOTO_RADIUS = 12;
  const PHOTO_HEIGHT_ADMIN = 130;
  const PHOTO_HEIGHT_OTHER = 180;
  const getPhotoHeight = (id) => id === 'administration' ? PHOTO_HEIGHT_ADMIN : PHOTO_HEIGHT_OTHER;
  const CONTENT_PHOTO_GAP = 16;
  const PHOTO_IMAGES = {};

  const layoutRef = React.useRef(null);
  const tabRefs = React.useRef([]);
  const [connectorTop, setConnectorTop] = React.useState(0);

  const updateConnector = React.useCallback(() => {
    const layout = layoutRef.current;
    const idx = C.items.findIndex((item) => item.id === current);
    const currentEl = tabRefs.current[idx];
    if (!layout || !currentEl) return;
    const layoutRect = layout.getBoundingClientRect();
    const currentRect = currentEl.getBoundingClientRect();
    setConnectorTop(currentRect.top - layoutRect.top + currentRect.height / 2);
  }, [current]);

  React.useLayoutEffect(() => {
    updateConnector();
    const raf = requestAnimationFrame(updateConnector);
    window.addEventListener('resize', updateConnector);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateConnector);
    };
  }, [current, updateConnector]);

  const SUMMARY_EMPHASIS = {
    administration: ['under 10 minutes a month'],
    compliance: ['$0 in added compliance costs'],
    service: ['Dedicated US-based service'],
    investments: ['No surprise fees or high expense ratios'],
    'employee-savings': ['$0 transaction fees']
  };

  const SUMMARY_OVERRIDES = {
    administration: 'We handle the admin load so you can manage your plan in under 10 minutes a month.',
    compliance: '$0 in added compliance costs, and we share liability with you'
  };

  const INTRO_OVERRIDES = {
    administration: "Here’s what we handle — so you don’t have to:",
    compliance: "We shoulder the burden of keeping your plan compliant:",
    service: "We help you stay ahead of problems:",
    investments: "We help your employees save more:",
    'employee-savings': "Our pricing is simple, public, and competitive:"
  };

  const BULLETS_OVERRIDES = {
    administration: [
      'Process payroll contributions',
      'Sync employee data',
      'Track compliance deadlines',
      'Send required notices',
      'Field employee questions',
      'Approve loans and withdrawals',
      'Manage your fund lineup'],
    service: [
      'U.S.-based support from retirement experts',
      'Dedicated Account Manager',
      'Quarterly plan reviews',
      'Money-backed Customer Experience Guarantee'],
    'employee-savings': [
      'Employers pay $0 in transaction fees',
      'Pricing disclosed upfront',
      'Price Match Guarantee']
  };

  function renderSummary(text, marks, reversed = false) {
    if (!marks || marks.length === 0) return text;
    const nodes = [];
    let cursor = 0;
    const strongColor = reversed ? '#FFFFFF' : HI_BRAND.navy;
    while (cursor < text.length) {
      let nextMatch = null;
      for (const m of marks) {
        const idx = text.indexOf(m, cursor);
        if (idx !== -1 && (nextMatch === null || idx < nextMatch.idx)) {
          nextMatch = { idx, mark: m };
        }
      }
      if (!nextMatch) {
        nodes.push(text.slice(cursor));
        break;
      }
      if (nextMatch.idx > cursor) {
        nodes.push(text.slice(cursor, nextMatch.idx));
      }
      nodes.push(
        <strong key={cursor} style={{ fontWeight: 700, color: strongColor }}>
          {nextMatch.mark}
        </strong>
      );
      cursor = nextMatch.idx + nextMatch.mark.length;
    }
    return nodes.map((n, i) => <React.Fragment key={i}>{n}</React.Fragment>);
  }

  const currentItem = C.items.find((item) => item.id === current) ?? C.items[0];

  return (
    <section
      style={{
        fontFamily: 'Manrope, sans-serif',
        background: CANVAS,
        padding: '104px 120px 120px',
        color: '#fff'
      }}>

      <div style={{ minWidth: 1280 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SixHeader
          tone="dark"
          align="left"
          maxWidth={820}
          headline="We set a new standard for 401(k) providers."
          subhead="The five benchmarks every provider should hit. Hover any to see how Human Interest delivers." />

        <div
          ref={layoutRef}
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: `${RAIL_WIDTH}px minmax(0, 1fr)`,
            gap: CONNECTOR_GAP,
            alignItems: 'stretch',
            height: DETAIL_HEIGHT
          }}>

          {/* Connector — measured from active tab center */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: RAIL_WIDTH + 6,
              width: CONNECTOR_GAP - 12,
              top: connectorTop,
              height: CONNECTOR_HEIGHT,
              background: 'rgba(74, 118, 164, 0.52)',
              borderRadius: CONNECTOR_HEIGHT,
              transform: 'translateY(-50%)',
              transition: 'top 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 160ms ease',
              pointerEvents: 'none',
              zIndex: 2
            }} />

          {/* Left rail — equal-height rows matching detail panel */}
          <div
            role="tablist"
            aria-label="Five benchmarks"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: RAIL_GAP,
              height: DETAIL_HEIGHT,
              position: 'relative',
              zIndex: 1
            }}>

            {C.items.map((item, index) => {
              const isCurrent = current === item.id;
              const benchmarkNum = index + 1;
              return (
                <button
                  key={item.id}
                  ref={(el) => { tabRefs.current[index] = el; }}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onMouseEnter={() => setCurrent(item.id)}
                  onFocus={() => setCurrent(item.id)}
                  style={{
                    appearance: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    color: HI_BRAND.navy,
                    padding: '16px 20px 16px 18px',
                    flex: 1,
                    minHeight: 0,
                    borderRadius: 8,
                    border: `1px solid ${isCurrent ? 'rgba(20, 181, 171, 0.55)' : HAIRLINE}`,
                    background: isCurrent ? '#FFFFFF' : TILE_FILL,
                    boxShadow: isCurrent ?
                      '0 0 0 1px rgba(20, 181, 171, 0.32), 0 12px 36px rgba(20, 181, 171, 0.22), 0 0 32px rgba(20, 181, 171, 0.14)' :
                      'none',
                    transition: 'background 160ms ease, border-color 160ms ease, box-shadow 220ms ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 8
                  }}>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignSelf: 'flex-start',
                      alignItems: 'center',
                      padding: '6px 14px',
                      borderRadius: 999,
                      background: isCurrent ? HI_BRAND.teal : 'rgb(2, 42, 77)',
                      color: '#FFFFFF',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      lineHeight: 1
                    }}>

                    <span style={{ fontSize: 12, fontWeight: 800, opacity: 0.92 }}>{benchmarkNum}. </span>
                    {item.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Lora, Georgia, serif',
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                      color: HI_BRAND.navy
                    }}>

                    {item.label}
                  </span>
                </button>);
            })}
          </div>

          {/* Right panel — fixed frame; grouped type hierarchy */}
          <article
            role="tabpanel"
            aria-label={currentItem.tag}
            style={{
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 8,
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 18px 40px rgba(0, 0, 0, 0.22)',
              padding: '28px 40px 40px',
              color: '#FFFFFF',
              boxSizing: 'border-box',
              height: DETAIL_HEIGHT,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>

            {/* Hero — headline, summary */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0
              }}>

              <h3
                    style={{
                      fontFamily: 'Lora, Georgia, serif',
                      fontSize: 34,
                      fontWeight: 400,
                      color: '#FFFFFF',
                      margin: '0 0 10px',
                      lineHeight: 1.12,
                      letterSpacing: '-0.015em',
                      textWrap: 'balance'
                    }}>

                    {currentItem.label}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 19,
                      lineHeight: 1.45,
                      color: 'rgba(255, 255, 255, 0.88)',
                      margin: 0,
                      textWrap: 'pretty',
                      fontWeight: 400
                    }}>

                    {renderSummary(
                      SUMMARY_OVERRIDES[currentItem.id] ?? currentItem.summary,
                      SUMMARY_EMPHASIS[currentItem.id],
                      true
                    )}
                  </p>
            </div>

            {/* Detail — intro, bullets; photo bottom-locked */}
            <div
              style={{
                marginTop: 13,
                paddingTop: 9,
                borderTop: '1px solid rgba(143, 213, 209, 0.28)',
                display: 'flex',
                flexDirection: 'column',
                gap: CONTENT_PHOTO_GAP,
                flex: 1,
                minHeight: 0
              }}>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  flex: 1,
                  minHeight: 0,
                  overflowY: 'auto'
                }}>
              {(() => {
                    const intro = INTRO_OVERRIDES[currentItem.id] ?? currentItem.intro;
                    if (!intro) return null;
                    return (
                      <p
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 17,
                          lineHeight: 1.32,
                          color: 'rgba(255, 255, 255, 0.92)',
                          fontWeight: 800,
                          margin: '12px 0 8px',
                          textWrap: 'pretty'
                        }}>

                        {intro}
                      </p>);
                  })()}

                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {(BULLETS_OVERRIDES[currentItem.id] ?? currentItem.bullets).map((b, i) =>
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 7,
                          alignItems: 'start'
                        }}>

                        <span
                          aria-hidden
                          style={{
                            color: HI_BRAND.tealAccent,
                            fontSize: 18,
                            lineHeight: 1.35,
                            fontWeight: 700
                          }}>

                          ✓
                        </span>
                        <span
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 16,
                            lineHeight: 1.35,
                            color: 'rgba(255, 255, 255, 0.9)'
                          }}>

                          {b}
                        </span>
                      </li>
                    )}
                  </ul>
              </div>

              {/* Photo slot — locked to card bottom */}
              <div
                style={{
                  width: '100%',
                  marginTop: 'auto',
                  flexShrink: 0,
                  padding: PHOTO_PAD,
                  borderRadius: PHOTO_RADIUS,
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxSizing: 'border-box',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)'
                }}>

                <div
                  role="img"
                  aria-label={`${currentItem.tag} illustration`}
                  style={{
                    width: '100%',
                    height: getPhotoHeight(currentItem.id),
                    borderRadius: PHOTO_RADIUS - 4,
                    overflow: 'hidden',
                    background: PHOTO_IMAGES[currentItem.id] ?
                      'rgba(2, 42, 77, 0.35)' :
                      'linear-gradient(145deg, rgba(143, 213, 209, 0.22) 0%, rgba(74, 118, 164, 0.32) 52%, rgba(2, 42, 77, 0.42) 100%)',
                    border: '1px dashed rgba(255, 255, 255, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>

                  {PHOTO_IMAGES[currentItem.id] ?
                    <img
                      src={PHOTO_IMAGES[currentItem.id]}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    /> :

                    <span
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.38)'
                      }}>

                      Photo
                    </span>
                  }
                </div>
              </div>
            </div>
          </article>
        </div>

        <div style={{ marginTop: 56 }}>
          <a
            href="#"
            className="hi-btn hi-btn--yellow"
            style={{
              display: 'inline-block',
              width: RAIL_WIDTH,
              boxSizing: 'border-box',
              textAlign: 'center',
              background: HI_BRAND.yellow,
              color: HI_BRAND.navy,
              fontFamily: 'Manrope, sans-serif',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '0.005em',
              textDecoration: 'none',
              padding: '20px 40px',
              borderRadius: 10,
            }}>

            Why the standard was needed
          </a>
        </div>
      </div>
      </div>
    </section>);

}

// ═════════════════════════════════════════════════════════════════════════════
// Variant 2 — "Expanding Tile Grid" · YELLOW ACCENT (legacy, no longer surfaced)
//
// Same layout, copy, and behavior as Variant 1. Teal accents replaced with the
// brand yellow (#FFCF67): the header eyebrow, the per-tile category pill, the
// "+" affordance when open, the open-tile border, the drill-down rule, the
// italic emphasis in the intro line, and the bullet checkmarks.
// ═════════════════════════════════════════════════════════════════════════════

function StandardBlade_TileGridYellow() {
  const C = SIX_STANDARD;
  const [open, setOpen] = React.useState('compliance');
  const [hover, setHover] = React.useState(null);

  const YELLOW = HI_BRAND.yellow; // #FFCF67
  const YELLOW_SOFT = 'rgba(255, 207, 103, 0.16)';
  const YELLOW_RULE = 'rgba(255, 207, 103, 0.40)';

  const TILE_BASE = 'rgba(255, 255, 255, 0.035)';
  const TILE_HOVER = 'rgba(255, 255, 255, 0.07)';
  const TILE_OPEN = 'rgba(255, 255, 255, 0.09)';
  const BORDER = 'rgba(255, 255, 255, 0.12)';
  const BORDER_OPEN = YELLOW;

  return (
    <section
      style={{
        fontFamily: 'Manrope, sans-serif',
        background: '#022A4D',
        padding: '104px 80px 120px',
        minWidth: 1280,
        color: '#fff'
      }}>

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SixHeader tone="dark" align="left" maxWidth={820} eyebrowColor={YELLOW} />

        {/* Helper line — above the grid */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 20
          }}>

          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)'
            }}>

            The six benchmarks
          </span>
          <span
            style={{
              fontFamily: 'Lora, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 15,
              color: YELLOW
            }}>Tap any benchmark to see how Human Interest delivers.
          </span>
        </div>

        {/* 2 columns × 3 rows grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16
          }}>

          {C.items.map((item) => {
            const isOpen = open === item.id;
            const isHover = hover === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  appearance: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: '#fff',
                  padding: '36px 40px 36px',
                  borderRadius: 8,
                  border: `1px solid ${isOpen ? BORDER_OPEN : BORDER}`,
                  background: isOpen ? TILE_OPEN : isHover ? TILE_HOVER : TILE_BASE,
                  transition: 'background 160ms ease, border-color 160ms ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                  minHeight: 240
                }}>

                {/* Top row: category pill (yellow) + plus affordance */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12
                  }}>

                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 18px',
                      borderRadius: 999,
                      background: YELLOW_SOFT,
                      color: YELLOW,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      lineHeight: 1
                    }}>

                    {item.tag}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      border: `1px solid ${isOpen ? YELLOW : 'rgba(255,255,255,0.30)'}`,
                      color: isOpen ? YELLOW : 'rgba(255,255,255,0.85)',
                      background: isOpen ? YELLOW_SOFT : 'transparent',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease',
                      flexShrink: 0
                    }}>

                    +
                  </span>
                </div>

                {/* Label */}
                <h3
                  style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: 32,
                    fontWeight: 400,
                    color: '#fff',
                    margin: 0,
                    lineHeight: 1.12,
                    letterSpacing: '-0.01em'
                  }}>

                  {item.label}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.42,
                    color: 'rgba(255,255,255,0.86)',
                    margin: 0,
                    textWrap: 'pretty',
                    fontWeight: 400
                  }}>

                  {item.summary}
                </p>

                {/* Drill-down */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 1200 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 280ms ease, opacity 220ms ease'
                  }}>

                  <div
                    style={{
                      borderTop: `1px solid ${YELLOW_RULE}`,
                      paddingTop: 20,
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14
                    }}>

                    {item.intro &&
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: 'rgba(255,255,255,0.75)',
                        margin: '0 0 4px',
                        textWrap: 'pretty'
                      }}>

                        {item.intro.split(/(\*[^*]+\*)/g).map((chunk, i) =>
                      chunk.startsWith('*') && chunk.endsWith('*') ?
                      <em key={i} style={{ fontFamily: 'Lora, Georgia, serif', fontStyle: 'italic', color: YELLOW }}>
                              {chunk.slice(1, -1)}
                            </em> :

                      <React.Fragment key={i}>{chunk}</React.Fragment>

                      )}
                      </p>
                    }
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {item.bullets.map((b, i) =>
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 12,
                          alignItems: 'baseline'
                        }}>

                          <span
                          aria-hidden
                          style={{
                            color: YELLOW,
                            fontSize: 15,
                            lineHeight: 1.4,
                            fontWeight: 700
                          }}>

                            ✓
                          </span>
                          <span
                          style={{
                            fontSize: 15,
                            lineHeight: 1.5,
                            color: 'rgba(255,255,255,0.88)'
                          }}>

                            {b}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </button>);

          })}
        </div>
      </div>
    </section>);

}

// ═════════════════════════════════════════════════════════════════════════════
// Variant 3 — "Expanding Tile Grid" · WHITE DRILL-DOWN
//
// Same layout, copy, and behavior as Variant 1. When you click a tile open, the
// whole tile flips to a white card with dark text — the tag pill, label, summary,
// intro, and bullets all sit on white. Closed tiles stay on navy like Variant 1.
// This keeps the bullets highly legible without losing the navy blade.
// ═════════════════════════════════════════════════════════════════════════════

function StandardBlade_TileGridWhitePanel() {
  const C = SIX_STANDARD;
  const [open, setOpen] = React.useState('compliance');
  const [hover, setHover] = React.useState(null);

  const TILE_BASE = 'rgba(255, 255, 255, 0.035)';
  const TILE_HOVER = 'rgba(255, 255, 255, 0.07)';
  const BORDER = 'rgba(255, 255, 255, 0.12)';

  return (
    <section
      style={{
        fontFamily: 'Manrope, sans-serif',
        background: '#022A4D',
        padding: '104px 80px 120px',
        minWidth: 1280,
        color: '#fff'
      }}>

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SixHeader tone="dark" align="left" maxWidth={820} />

        {/* Helper line — above the grid */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 20
          }}>

          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)'
            }}>

            The six benchmarks
          </span>
          <span
            style={{
              fontFamily: 'Lora, Georgia, serif',
              fontStyle: 'italic',
              fontSize: 15,
              color: HI_BRAND.tealLight
            }}>Tap any benchmark to see how Human Interest delivers.
          </span>
        </div>

        {/* 2 columns × 3 rows grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16
          }}>

          {C.items.map((item) => {
            const isOpen = open === item.id;
            const isHover = hover === item.id;

            // Theme tokens — depend on whether the tile is open (white) or closed (navy).
            const bg = isOpen ? '#FFFFFF' : isHover ? TILE_HOVER : TILE_BASE;
            const borderColor = isOpen ? '#FFFFFF' : BORDER;
            const labelColor = isOpen ? HI_BRAND.navy : '#fff';
            const summaryColor = isOpen ? HI_BRAND.gray[700] : 'rgba(255,255,255,0.86)';
            const introColor = isOpen ? HI_BRAND.gray[600] : 'rgba(255,255,255,0.75)';
            const introEmColor = isOpen ? HI_BRAND.navy : '#fff';
            const bulletColor = isOpen ? HI_BRAND.gray[800] : 'rgba(255,255,255,0.88)';
            const checkColor = isOpen ? HI_BRAND.teal : HI_BRAND.tealLight;
            const ruleColor = isOpen ? HI_BRAND.gray[200] : 'rgba(143, 213, 209, 0.35)';
            const pillBg = isOpen ? HI_BRAND.tealPale : 'rgba(20, 181, 171, 0.16)';
            const pillColor = isOpen ? HI_BRAND.tealDark : HI_BRAND.tealLight;
            const plusBorder = isOpen ? HI_BRAND.tealDark : 'rgba(255,255,255,0.30)';
            const plusColor = isOpen ? HI_BRAND.tealDark : 'rgba(255,255,255,0.85)';
            const plusBg = isOpen ? HI_BRAND.tealPale : 'transparent';

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  appearance: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: '#fff',
                  padding: '36px 40px 36px',
                  borderRadius: 8,
                  border: `1px solid ${borderColor}`,
                  background: bg,
                  boxShadow: isOpen ? '0 18px 40px rgba(0,0,0,0.18)' : 'none',
                  transition: 'background 160ms ease, border-color 160ms ease, box-shadow 200ms ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                  minHeight: 240
                }}>

                {/* Top row: category pill + plus affordance */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12
                  }}>

                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 18px',
                      borderRadius: 999,
                      background: pillBg,
                      color: pillColor,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      lineHeight: 1
                    }}>

                    {item.tag}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      border: `1px solid ${plusBorder}`,
                      color: plusColor,
                      background: plusBg,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 200ms ease, background 200ms ease, border-color 200ms ease',
                      flexShrink: 0
                    }}>

                    +
                  </span>
                </div>

                {/* Label */}
                <h3
                  style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: 32,
                    fontWeight: 400,
                    color: labelColor,
                    margin: 0,
                    lineHeight: 1.12,
                    letterSpacing: '-0.01em',
                    transition: 'color 160ms ease'
                  }}>

                  {item.label}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.42,
                    color: summaryColor,
                    margin: 0,
                    textWrap: 'pretty',
                    fontWeight: 400,
                    transition: 'color 160ms ease'
                  }}>

                  {item.summary}
                </p>

                {/* Drill-down */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 1200 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 280ms ease, opacity 220ms ease'
                  }}>

                  <div
                    style={{
                      borderTop: `1px solid ${ruleColor}`,
                      paddingTop: 20,
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14
                    }}>

                    {item.intro &&
                    <p
                      style={{
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: introColor,
                        margin: '0 0 4px',
                        textWrap: 'pretty'
                      }}>

                        {(() => {
                        const idx = item.intro.indexOf('. ');
                        if (idx === -1) {
                          return item.intro;
                        }
                        const first = item.intro.slice(0, idx + 1);
                        const rest = item.intro.slice(idx + 2);
                        return (
                          <React.Fragment>
                              {first}{' '}
                              <strong style={{ fontWeight: 700, color: introEmColor }}>
                                {rest}
                              </strong>
                            </React.Fragment>);

                      })()}
                      </p>
                    }
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {item.bullets.map((b, i) =>
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 12,
                          alignItems: 'baseline'
                        }}>

                          <span
                          aria-hidden
                          style={{
                            color: checkColor,
                            fontSize: 15,
                            lineHeight: 1.4,
                            fontWeight: 700
                          }}>

                            ✓
                          </span>
                          <span
                          style={{
                            fontSize: 15,
                            lineHeight: 1.5,
                            color: bulletColor
                          }}>

                            {b}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </button>);

          })}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
          <a
            href="#"
            style={{
              display: 'inline-block',
              background: HI_BRAND.yellow,
              color: HI_BRAND.navy,
              fontFamily: 'Manrope, sans-serif',
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: '0.005em',
              textDecoration: 'none',
              padding: '20px 40px',
              borderRadius: 10,
            }}>

            See the standard and how we meet it
          </a>
        </div>
      </div>
    </section>);

}