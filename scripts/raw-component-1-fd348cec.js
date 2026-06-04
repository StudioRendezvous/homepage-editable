
// Human Interest - Shared brand tokens and components

const HI_BRAND = {
  navy: '#022A4D',
  teal: '#14B5AB',
  tealLight: '#8FD5D1',
  tealText: '#0E938B', // small type on light backgrounds
  tealAccent: '#6ABFB9', // small type on dark backgrounds
  tealPale: '#E5F4F3',
  tealDark: '#00585B',
  tealMid: '#15A29B',
  yellow: '#FFCF67',
  yellowDark: '#FAC069',
  black: '#000025',
  white: '#FFFFFF',
  gray: {
    900: '#0E101E',
    800: '#1B1E2D',
    700: '#363B49',
    600: '#515966',
    500: '#6C7682',
    400: '#87939F',
    300: '#9FA9B2',
    200: '#C3C9CF',
    100: '#DBDFE2',
    50:  '#EFF1F4',
  }
};

// ─── Logo ────────────────────────────────────────────────────────────────────
function HILogo({ color = HI_BRAND.navy, height = 28 }) {
  // Simplified inline SVG of the Human Interest logo
  return (
    <svg height={height} viewBox="0 0 1176.717 170.426" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
      <g fill={color}>
        <path d="M241.348,72.108v38.451h-39.912v-38.451c0-1.957-1.587-3.544-3.544-3.544h-13.526c-1.957,0-3.544,1.587-3.544,3.544v93.239c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-38.232h39.912v38.232c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-93.239c0-1.957-1.587-3.544-3.544-3.544h-13.526c-1.957,0-3.544,1.587-3.544,3.544Z"/>
        <path d="M326.578,94.44c-1.957,0-3.544,1.587-3.544,3.544v36.786c-.057,6.097-1.771,10.827-4.812,14.384-3.093,3.399-7.333,5.263-12.374,5.263-4.239,0-7.333-1.206-9.853-3.618-2.211-2.327-3.466-5.995-3.552-10.976v-41.839c0-1.957-1.587-3.544-3.544-3.544h-13.526c-1.957,0-3.544,1.587-3.544,3.544v45.249c.111,8.662,2.784,15.57,7.906,20.175,5.123,4.605,11.581,7.017,19.376,7.017,5.457,0,10.579-1.206,15.145-3.838,4.585-2.58,7.986-6.116,10.427-11.005l.638,9.99c.119,1.866,1.667,3.318,3.537,3.318h14.79v-70.906c0-1.957-1.587-3.544-3.544-3.544h-13.526Z"/>
        <path d="M467.422,99.923c-5.044-4.605-11.403-7.017-19.078-7.017-5.373,0-10.417,1.206-14.912,3.838-4.534,2.591-7.894,6.145-10.299,11.068-1.275-3.09-3.072-5.742-5.392-7.888-4.98-4.605-11.259-7.017-18.838-7.017-5.305,0-10.285,1.206-14.724,3.838-4.481,2.593-7.801,6.152-10.176,11.082l-.643-10.067c-.119-1.866-1.667-3.318-3.537-3.318h-14.79v70.906c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-36.786c.055-6.096,1.688-10.827,4.588-14.384,2.949-3.399,6.991-5.263,11.798-5.263,4.042,0,6.991,1.206,9.394,3.618,2.122,2.343,3.319,6.041,3.386,11.073v41.742c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-36.477c0-6.25,1.639-11.074,4.588-14.693,2.949-3.399,6.991-5.263,11.798-5.263,4.042,0,6.991,1.206,9.394,3.618,2.166,2.391,3.366,6.187,3.386,11.38v41.435c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-45.249c-.11-8.662-2.741-15.57-7.785-20.175Z"/>
        <path d="M578.131,168.891c1.957,0,3.544-1.587,3.544-3.544v-36.786c.057-6.097,1.771-10.827,4.812-14.384,3.093-3.399,7.333-5.263,12.374-5.263,4.239,0,7.333,1.206,9.853,3.618,2.211,2.327,3.466,5.995,3.552,10.976v41.839c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-45.249c-.111-8.662-2.784-15.57-7.906-20.175-5.123-4.605-11.581-7.017-19.376-7.017-5.457,0-10.579,1.206-15.145,3.838-4.585,2.58-7.986,6.116-10.427,11.005l-.638-9.99c-.119-1.866-1.667-3.318-3.537-3.318h-14.79v70.906c0,1.957,1.587,3.544,3.544,3.544h13.526Z"/>
        <path d="M554.043,156.72c-1.754,0-3.18-.439-4.166-1.425-.768-.767-1.425-2.412-1.425-4.386v-30.482c0-9.101-3.07-15.899-8.991-20.504-6.031-4.605-14.254-7.018-24.89-7.018-8.991,0-16.228,1.864-21.929,5.592-4.02,2.65-6.823,5.757-8.724,9.637-.323.658-.602,1.336-.855,2.024-.028.077-.053.155-.081.231-.133.373-.218.768-.218,1.186,0,1.443.865,2.679,2.103,3.232l.12.052,9.326,4.011.618.266c.342.11.701.185,1.08.185,1.56,0,2.907-1.052,3.381-2.453,0,0,.082-.229.132-.34,1.109-2.493,2.51-4.198,4.521-5.752,2.851-1.974,6.579-3.07,11.294-3.07,4.057,0,7.018,1.206,9.21,3.399,2.193,2.412,3.399,5.482,3.399,9.43v3.618l-17.872,3.399c-19.517,3.618-29.166,11.513-29.166,23.574,0,6.25,1.974,10.855,6.031,14.254,4.057,3.18,9.868,5.044,17.105,5.044,6.25,0,11.622-.987,16.228-2.851,4.605-1.864,8.004-4.605,10.197-8.443,1.864,7.456,7.675,11.294,17.105,11.294,2.851,0,5.263-.439,7.675-1.206v-12.5h-1.206ZM527.947,144.838c0,1.172-.156,2.352-.588,3.441-.822,2.073-2.365,3.799-4.785,5.151-3.728,2.303-7.785,3.289-12.39,3.289-2.632,0-4.934-.658-6.359-1.864-1.425-1.206-2.303-3.07-2.303-5.592s.877-4.276,2.522-5.811c1.645-1.425,4.276-2.522,7.785-3.289l16.118-3.652v8.327Z"/>
        <rect x="673.765" y="67.467" width="20.614" height="101.424" rx="3.544" ry="3.544"/>
        <path d="M726.799,168.891c1.957,0,3.544-1.587,3.544-3.544v-36.786c.057-6.097,1.771-10.827,4.812-14.384,3.093-3.399,7.333-5.263,12.374-5.263,4.239,0,7.333,1.206,9.853,3.618,2.211,2.327,3.466,5.995,3.552,10.976v41.839c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-45.249c-.111-8.662-2.784-15.57-7.906-20.175-5.123-4.605-11.581-7.017-19.376-7.017-5.457,0-10.579,1.206-15.145,3.838-4.585,2.58-7.986,6.116-10.427,11.005l-.638-9.99c-.119-1.866-1.667-3.318-3.537-3.318h-14.79v70.906c0,1.957,1.587,3.544,3.544,3.544h13.526Z"/>
        <path d="M836.059,155.521h0c-.331-1.616-1.76-2.83-3.472-2.83-.535,0-1.032.102-1.487.314-2.204,1.06-4.76,1.632-7.446,1.632-6.798,0-10.197-3.399-10.197-10.307v-34.648h19.045c1.956,0,3.542-1.586,3.542-3.542v-8.267c0-1.956-1.586-3.542-3.542-3.542h-19.045v-24.162c0-2.298-2.155-3.988-4.387-3.44l-13.53,3.323c-1.584.389-2.697,1.809-2.697,3.44v74.457c0,15.131,8.223,22.478,24.89,22.478,4.057,0,7.785-.658,11.403-1.645,3.618-.987,6.579-2.632,8.991-4.386l-2.068-8.875Z"/>
        <path d="M914.331,131.282c0-12.281-2.961-21.929-9.21-28.618-6.25-6.688-15.351-10.087-26.754-10.087-11.842,0-21.162,3.509-27.741,10.307-6.688,6.908-9.868,16.337-9.868,28.618s3.399,21.82,10.197,28.618c6.798,6.908,16.447,10.307,28.728,10.307,8.443,0,15.46-1.425,21.052-4.605,4.421-2.499,7.746-5.756,10.125-9.772.126-.214.237-.44.359-.658.172-.417.27-.873.27-1.353,0-1.477-.9-2.747-2.184-3.28l-10.225-3.768c-1.51-.558-3.236.229-4.251,1.44,0,0-2.802,3.221-4.653,4.232-2.869,1.645-6.4,2.412-10.703,2.412-10.483,0-16.772-5.263-18.758-15.899h49.947c1.791-.006,3.27-1.34,3.502-3.07,0,0,.169-3.231.169-4.825ZM860.714,124.703c.767-5.592,2.632-9.978,5.592-12.829,2.961-2.851,7.018-4.276,11.952-4.386,4.824,0,8.552,1.316,11.623,4.386,2.96,2.96,4.824,7.237,5.592,12.829h-34.758Z"/>
        <path d="M969.867,92.8c-1.202-.175-2.416-.311-3.381-.311-5.457,0-9.701.576-14.266,3.208-4.585,2.58-7.712,7.163-10.152,12.052l-.638-9.99c-.119-1.866-1.667-3.318-3.537-3.318h-14.79v70.906c0,1.957,1.587,3.544,3.544,3.544h13.526c1.957,0,3.544-1.587,3.544-3.544v-36.786c.057-6.097,1.703-9.854,4.744-13.411,3.093-3.399,7.978-5.688,13.019-5.688,2.277,0,5.53.881,5.53.881.302.083.614.111.942.111,1.958,0,3.212-1.042,3.531-3.255l1.401-10.419c.26-1.931-1.09-3.699-3.018-3.98Z"/>
        <path d="M1045.688,131.282c0-12.281-2.961-21.929-9.21-28.618-6.25-6.688-15.351-10.087-26.754-10.087-11.842,0-21.162,3.509-27.741,10.307-6.688,6.908-9.868,16.337-9.868,28.618s3.399,21.82,10.197,28.618c6.798,6.908,16.447,10.307,28.728,10.307,8.443,0,15.46-1.425,21.052-4.605,4.421-2.499,7.746-5.756,10.125-9.772.126-.214.237-.44.359-.658.172-.417.27-.873.27-1.353,0-1.477-.9-2.747-2.184-3.28l-10.225-3.768c-1.51-.558-3.236.229-4.251,1.44,0,0-2.802,3.221-4.653,4.232-2.869,1.645-6.4,2.412-10.703,2.412-10.483,0-16.772-5.263-18.758-15.899h49.947c1.791-.006,3.27-1.34,3.502-3.07,0,0,.169-3.231.169-4.825ZM992.071,124.703c.767-5.592,2.632-9.978,5.592-12.829,2.961-2.851,7.018-4.276,11.952-4.386,4.824,0,8.552,1.316,11.623,4.386,2.96,2.96,4.824,7.237,5.592,12.829h-34.758Z"/>
        <path d="M1114.656,132.378c-4.605-3.618-12.28-6.469-23.135-8.662-6.031-1.206-10.197-2.412-12.609-3.838s-3.618-3.289-3.618-5.263,1.206-3.618,3.618-5.044c2.412-1.316,5.811-1.974,9.868-1.974,5.044,0,9.101.987,12.28,2.851,2.316,1.309,4.438,3.269,6.132,5.619.648.847,1.661,1.346,2.81,1.359.925.011,1.754-.354,2.406-.911l7.259-6.196c.641-.641,1.037-1.527,1.037-2.505,0-.774-.255-1.485-.676-2.068-3.289-4.166-7.127-7.456-11.294-9.43-5.263-2.632-11.842-3.838-20.285-3.838-7.237,0-13.267,1.206-18.311,3.399-4.934,2.193-8.772,5.263-11.403,8.881-2.632,3.838-3.838,7.566-3.838,11.842,0,6.25,2.412,11.294,7.017,15.131,4.605,3.838,12.719,6.908,24.122,9.101,5.592.987,9.43,2.193,11.623,3.399,2.193,1.206,3.399,2.741,3.399,4.386,0,2.193-1.206,3.838-3.618,5.044-2.412,1.206-5.811,1.864-10.197,1.864-5.373,0-9.978-.767-13.815-2.632-2.645-1.228-4.703-2.864-6.427-5.258-.639-.931-1.715-1.535-2.929-1.535-.975,0-1.858.394-2.499,1.032l-6.625,6.797c-.629.64-1.019,1.515-1.019,2.483,0,.856.316,1.63.821,2.243.107.12.219.236.328.355,6.932,7.551,17.588,11.41,32.402,11.41,10.855,0,19.298-2.193,25.109-6.469,5.921-4.167,8.881-9.868,8.881-16.886,0-6.25-2.193-11.074-6.798-14.693Z"/>
        <path d="M1174.649,155.521h0c-.331-1.616-1.76-2.83-3.472-2.83-.535,0-1.032.102-1.487.314-2.204,1.06-4.76,1.632-7.446,1.632-6.798,0-10.197-3.399-10.197-10.307v-34.648h19.045c1.956,0,3.542-1.586,3.542-3.542v-8.267c0-1.956-1.586-3.542-3.542-3.542h-19.045v-24.162c0-2.298-2.155-3.988-4.387-3.44l-13.53,3.323c-1.584.389-2.697,1.809-2.697,3.44v74.457c0,15.131,8.223,22.478,24.89,22.478,4.057,0,7.785-.658,11.403-1.645,3.618-.987,6.579-2.632,8.991-4.386l-2.068-8.875Z"/>
        <path d="M106.722,75.637c-4.404-6.861-10.587-9.232-19.82-9.317-7.708-.085-18.211,3.473-33.203,11.011-10.587,5.336-17.363,10.757-17.363,10.757V15.754c0-4.404-3.557-7.962-7.962-7.962-1.355,0-2.541.339-3.642.847L0,20.497v148.393h24.986c6.183,0,11.265-5.082,11.265-11.265v-50.142s4.997-3.981,12.451-7.708c6.098-3.049,11.689-5.082,16.008-4.997,5.336.085,9.656,2.71,9.656,8.724v54.123c0,6.183,5.082,11.265,11.265,11.265h24.224v-80.041c.085-4.066-.678-9.401-3.134-13.213Z"/>
      </g>
      <circle cx="89.612" cy="25.156" r="25.156" fill="#14B5AB"/>
    </svg>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────
function HINav({
  showEyebrow = false,
  employeeStyle = 'moderate',
  variant = 'A',
  audienceToggle = false,
  defaultAudience = 'employees',
  transparent = false,
  homeHref = 'index.html',
  pricingHref = '#',
  activeNav = null,
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [audience, setAudience] = React.useState(defaultAudience);

  const navItems = audienceToggle
    ? [
        { label: 'The New 401(k) Standard', hasDropdown: true },
        { label: 'Solutions', hasDropdown: true },
        { label: 'Pricing', hasDropdown: true },
        { label: 'Payrolls', hasDropdown: true },
        { label: 'Resources', hasDropdown: true },
      ]
    : [
        { label: 'The New 401(k) Standard', hasDropdown: true },
        { label: 'Retirement solutions', hasDropdown: true },
        { label: 'Pricing', hasDropdown: true },
        { label: 'Payroll integrations', hasDropdown: true },
        { label: 'Learn', hasDropdown: true },
      ];

  return (
    <div style={{ width: '100%' }}>
      {showEyebrow && (
        <div style={{
          background: HI_BRAND.tealPale,
          color: HI_BRAND.navy,
          fontSize: 13,
          fontFamily: 'Manrope, sans-serif',
          textAlign: 'center',
          padding: '8px 24px',
          letterSpacing: '0.01em',
        }}>
          <span style={{ fontWeight: 600 }}>SURVEY:</span> 68% of employees regret not saving for retirement sooner. Be the employer who changes that.{' '}
          <a href="#" style={{ color: HI_BRAND.navy, fontWeight: 700, textDecoration: 'underline' }}>See how →</a>
        </div>
      )}
      {/* Employee redirect — moderate */}
      {employeeStyle === 'moderate' && (
        <div style={{
          background: HI_BRAND.tealPale,
          borderBottom: `1px solid ${HI_BRAND.tealLight}`,
          padding: '7px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 8,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 13,
          color: HI_BRAND.gray[600],
        }}>
          <span>Are you an employee?</span>
          <a href="#" className="hi-btn hi-btn--teal-pill" style={{
            background: HI_BRAND.teal,
            color: '#fff',
            borderRadius: 20,
            padding: '4px 14px',
            fontWeight: 600,
            fontSize: 12,
            textDecoration: 'none',
          }}>Log in to your account →</a>
        </div>
      )}
      <nav style={{
        background: transparent ? 'transparent' : '#fff',
        borderBottom: `1px solid ${HI_BRAND.gray[100]}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(24px, 5vw, 120px) 0 clamp(32px, 8vw, 160px)',
        height: 64,
        gap: 0,
        boxShadow: transparent ? 'none' : '0 1px 4px rgba(2,42,77,0.06)',
      }}>
        <a href={homeHref} style={{ marginRight: 40, flexShrink: 0, textDecoration: 'none', transform: 'translateY(-4px)' }}>
          <HILogo height={24} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, minWidth: 0 }}>
          {navItems.map(item => {
            const href = item.label === 'Pricing' ? pricingHref : '#';
            const isActive = activeNav === item.label;
            return (
            <a key={item.label} href={href} style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 13,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? HI_BRAND.navy : HI_BRAND.gray[700],
              textDecoration: 'none',
              padding: '4px 10px',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              whiteSpace: 'nowrap',
              background: isActive ? HI_BRAND.gray[50] : 'transparent',
            }}>
              {item.label}
              {item.hasDropdown && <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>}
            </a>
          );
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          {audienceToggle ? (
            <>
              <div style={{
                display: 'inline-flex',
                background: HI_BRAND.gray[50],
                borderRadius: 8,
                padding: 3,
                gap: 0,
              }}>
                {[
                  { id: 'employers', label: 'Employer Login' },
                  { id: 'employees', label: 'Employee Login' },
                ].map(opt => {
                  const active = audience === opt.id;
                  return (
                    <button
                      key={opt.id}
                      className={`hi-btn hi-btn--toggle${active ? ' hi-btn--toggle-active' : ''}`}
                      onClick={() => setAudience(opt.id)}
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
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              <a href="#" className="hi-btn hi-btn--navy" style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                color: '#fff',
                background: HI_BRAND.navy,
                borderRadius: 6,
                padding: '10px 22px',
                textDecoration: 'none',
                marginLeft: 4,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>Get Started</a>
            </>
          ) : (
            <>
              <a href="#" className="hi-btn hi-btn--ghost" style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: HI_BRAND.navy,
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: 6,
              }}>Sign In</a>
              <a href="#" className="hi-btn hi-btn--navy" style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                color: '#fff',
                background: HI_BRAND.navy,
                borderRadius: 6,
                padding: '8px 20px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>Get Started</a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function HIFooter({ homeHref = 'index.html', pricingHref = '#' } = {}) {
  const productLinks = [
    { label: '401(k) Plans', href: '#' },
    { label: 'Payroll Integrations', href: '#' },
    { label: 'Compliance', href: '#' },
    { label: 'Employee Experience', href: '#' },
  ];
  const cols = [
    { title: 'Product', links: productLinks },
    { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map((l) => ({ label: l, href: '#' })) },
    { title: 'Resources', links: ['Learning Center', 'FAQs', 'Help Center', 'Calculators', 'Webinars'].map((l) => ({ label: l, href: '#' })) },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Disclosures', 'Accessibility'].map((l) => ({ label: l, href: '#' })) },
  ];
  return (
    <footer style={{
      background: `radial-gradient(ellipse 120% 90% at 50% 0%, ${HI_BRAND.navy} 0%, ${HI_BRAND.black} 72%)`,
      color: '#fff',
      padding: '64px 48px 40px',
      fontFamily: 'Manrope, sans-serif',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
        <div>
          <a href={homeHref} style={{ textDecoration: 'none', display: 'inline-block' }}>
            <HILogo color="#fff" height={22} />
          </a>
          <p style={{ fontSize: 13, color: HI_BRAND.gray[300], marginTop: 16, lineHeight: 1.7, maxWidth: 240 }}>
            The highest-rated, fastest-growing 401(k) provider, setting the new standard for retirement.
          </p>
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: 16 }}>{col.title}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(link => (
                <a key={link.label} href={link.href} className="hi-footer-link">{link.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: 12, color: HI_BRAND.gray[400] }}>© 2026 Human Interest Inc. All rights reserved.</p>
        <p style={{ fontSize: 11, color: HI_BRAND.gray[500], maxWidth: 500, textAlign: 'right', lineHeight: 1.5 }}>
          Investment advisory services offered through Human Interest Advisors LLC, an SEC-registered investment adviser.
        </p>
      </div>
    </footer>
  );
}

// Export all shared components
Object.assign(window, { HI_BRAND, HILogo, HINav, HIFooter });
