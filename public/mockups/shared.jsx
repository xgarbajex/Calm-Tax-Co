// Shared bits used by all three mockups.
// Exposed on window so each Babel script can pick them up.

// Inject shared CSS once. Includes a paper-grain SVG noise pattern,
// letterpress-style text glow on terracotta marks, and warm soft shadows.
if (typeof document !== 'undefined' && !document.getElementById('calm-shared-styles')) {
  const s = document.createElement('style');
  s.id = 'calm-shared-styles';
  s.textContent = `
    .grain-bg {
      position: absolute; inset: 0; pointer-events: none;
      mix-blend-mode: multiply; opacity: .55;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch' seed='4'/><feColorMatrix values='0 0 0 0 0.17  0 0 0 0 0.15  0 0 0 0 0.14  0 0 0 0.20 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      background-size: 240px 240px;
    }
    .grain-bg-deep {
      position: absolute; inset: 0; pointer-events: none;
      mix-blend-mode: overlay; opacity: .35;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch' seed='9'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0 0.85  0 0 0 0.35 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      background-size: 240px 240px;
    }
    .ink-bleed {
      text-shadow:
        0 0 0.6px rgba(166,109,94,0.7),
        0 0 6px rgba(166,109,94,0.18),
        0 0 14px rgba(166,109,94,0.08);
    }
    .warm-card {
      box-shadow:
        0 1px 0 rgba(43,39,36,0.04),
        0 8px 24px -12px rgba(94,78,68,0.18),
        0 24px 60px -24px rgba(94,78,68,0.14);
    }
    .warm-card-deep {
      box-shadow:
        0 2px 0 rgba(43,39,36,0.06),
        0 18px 40px -16px rgba(60,40,30,0.30),
        0 40px 100px -40px rgba(60,40,30,0.30);
    }
    .vignette::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse at center, transparent 50%, rgba(43,39,36,0.18) 100%);
    }
    .terra-dot-glow {
      box-shadow:
        0 0 0 1px rgba(166,109,94,0.3),
        0 0 8px rgba(166,109,94,0.45),
        0 0 18px rgba(166,109,94,0.20);
    }
    @keyframes calmFade {
      0%, 100% { opacity: 0.92; }
      50% { opacity: 1; }
    }
  `;
  document.head.appendChild(s);
}

// Paper grain — fixed absolute overlay. Drop at the root of a mockup
// inside a position:relative container so it covers everything subtly.
function PaperGrain({ deep = false, opacity }) {
  return <div className={deep ? 'grain-bg-deep' : 'grain-bg'} style={opacity != null ? { opacity } : undefined} />;
}

// Corner registration marks — for modernist / editorial sections
function RegisterMark({ size = 14, color = 'rgba(43,39,36,0.5)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={style} aria-hidden="true">
      <circle cx="7" cy="7" r="3.2" fill="none" stroke={color} strokeWidth="0.6" />
      <line x1="7" y1="0" x2="7" y2="4" stroke={color} strokeWidth="0.6" />
      <line x1="7" y1="10" x2="7" y2="14" stroke={color} strokeWidth="0.6" />
      <line x1="0" y1="7" x2="4" y2="7" stroke={color} strokeWidth="0.6" />
      <line x1="10" y1="7" x2="14" y2="7" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

// Small printer's mark / asterism
function Asterism({ color = '#A66D5E', size = 14, style = {} }) {
  return (
    <span aria-hidden="true" style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Instrument Serif", serif', fontSize: size, color, letterSpacing: '0.18em',
      ...style,
    }}>⁂</span>
  );
}

// A labelled image placeholder — honors the "say what it should be" rule.
// Faint warm stripe + monospace caption + subtle vignette + film grain.
// Aspect = w/h.
function ImageSlot({ label, w = 800, h = 600, tone = 'sand', radius = 0, plate, style = {}, className = '' }) {
  const tones = {
    sand:      { bg: '#EFE9DC', stripe: 'rgba(60,54,51,0.04)',  ink: 'rgba(60,54,51,0.55)', edge: 'rgba(43,39,36,0.16)' },
    paper:     { bg: '#F6F1E5', stripe: 'rgba(60,54,51,0.035)', ink: 'rgba(60,54,51,0.50)', edge: 'rgba(43,39,36,0.14)' },
    sage:      { bg: '#BFC9BD', stripe: 'rgba(43,39,36,0.05)',  ink: 'rgba(43,39,36,0.55)', edge: 'rgba(43,39,36,0.18)' },
    terra:     { bg: '#D5A294', stripe: 'rgba(60,30,20,0.06)',  ink: 'rgba(60,30,20,0.55)', edge: 'rgba(60,30,20,0.22)' },
    deep:      { bg: '#3C3633', stripe: 'rgba(255,250,240,0.05)', ink: 'rgba(244,240,232,0.65)', edge: 'rgba(0,0,0,0.4)' },
    sageDeep:  { bg: '#566857', stripe: 'rgba(255,250,240,0.06)', ink: 'rgba(244,240,232,0.7)',  edge: 'rgba(0,0,0,0.3)' },
  };
  const t = tones[tone] || tones.sand;
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: w === '100%' ? '100%' : `${w}px`,
        height: `${h}px`,
        background: t.bg,
        backgroundImage: `
          radial-gradient(ellipse at 50% 40%, transparent 40%, ${t.edge} 100%),
          repeating-linear-gradient(135deg, ${t.stripe} 0 1px, transparent 1px 14px)
        `,
        borderRadius: radius,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {/* film grain layer over the image slot */}
      <div className="grain-bg" style={{ opacity: 0.6 }} />
      <span
        style={{
          fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
          fontSize: 10,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: t.ink,
          padding: '5px 11px',
          background: 'rgba(255,253,247,0.62)',
          backdropFilter: 'blur(2px)',
          whiteSpace: 'nowrap',
          maxWidth: '85%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {label}
      </span>
      {plate && (
        <span style={{
          position: 'absolute', top: 14, left: 14, zIndex: 2,
          fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
          fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: t.ink, opacity: 0.85,
          padding: '4px 8px', background: 'rgba(255,253,247,0.55)',
        }}>{plate}</span>
      )}
    </div>
  );
}

// A small fleuron/ornament. Single character so it stays simple.
function Fleuron({ size = 14, color = 'var(--terracotta)', style = {} }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        fontFamily: '"Instrument Serif", serif',
        fontStyle: 'italic',
        fontSize: size,
        color,
        lineHeight: 1,
        ...style,
      }}
    >
      ❦
    </span>
  );
}

// Hairline rule with optional centered fleuron
function RuleWithMark({ color = 'var(--rule)', mark = true, markColor = 'var(--terracotta)', style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, ...style }}>
      <div style={{ flex: 1, height: 1, background: color }} />
      {mark && <Fleuron color={markColor} size={13} />}
      <div style={{ flex: 1, height: 1, background: color }} />
    </div>
  );
}

// Inline italic serif word — convenience
function I({ children, color, size, style = {} }) {
  return (
    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', color, fontSize: size, letterSpacing: '0.01em', ...style }}>
      {children}
    </span>
  );
}

// Tiny uppercase label
function Eyebrow({ children, color = 'var(--slate)', tracking = '0.32em', size = 10, weight = 500, style = {} }) {
  return (
    <span style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: size,
      letterSpacing: tracking,
      textTransform: 'uppercase',
      color,
      fontWeight: weight,
      ...style,
    }}>{children}</span>
  );
}

// ————————————————————————————————————————————————————————
// Shared content data — the rewritten copy from the brief.
// ————————————————————————————————————————————————————————

const COPY = {
  hero: {
    headline: 'Tax prep without the dread.',
    sub: 'We handle simple returns with unusual care — by email, on your timeline, year-round.',
    sub2: 'You bring the documents. We bring the calm.',
    cta1: 'See if we’re a fit',
    cta2: 'Pricing',
  },

  whatWeDo: {
    title: 'Tax season, but quieter.',
    body: [
      'Most preparers treat their schedule as the priority and yours as the variable. We do it the other way. Send us your documents when you have them ready — afternoon, midnight, three weeks before the deadline. We review, ask any questions in writing, prepare the return, and walk you through it before we file.',
      'No appointments. No phone tag. No urgency that isn’t yours.',
      'We work year-round, which means you can ask a question in July about whether something’s deductible, or get an estimated tax calculation in September, without booking a meeting.',
    ],
  },

  personas: [
    {
      tag: 'The cautious filer',
      text: 'You file W‑2 income and you’ve been using TurboTax for years. It works, mostly, but you’ve started wondering whether you’re missing things — and you’d like a human to read the return before it goes out.',
    },
    {
      tag: 'The side‑income filer',
      text: 'You have a side income stream — Etsy, freelance gigs, a 1099 from one client — and you’re not sure how to think about it. Schedule C feels like a foreign country. You’d like someone to handle it without making it a thing.',
    },
    {
      tag: 'The newly self‑employed',
      text: 'You went full freelance or independent contractor in the last year or two. Your income is irregular, your receipts are scattered, and you’re realizing you don’t know what you don’t know about quarterly estimates and self‑employment tax.',
    },
    {
      tag: 'The thoughtful professional',
      text: 'You’re a knowledge worker, a creative, a therapist, a designer. Your situation is straightforward but it’s yours, and you’d rather work with someone who’ll take it seriously without making you feel small.',
    },
  ],

  steps: [
    { n: '01', title: 'A short intake form',   text: 'A few questions about your year. Five minutes, by email.' },
    { n: '02', title: 'Encrypted upload',      text: 'Send documents to a secure folder, at your own pace.' },
    { n: '03', title: 'We prepare your return', text: 'We review, research questions, and send you a draft.' },
    { n: '04', title: 'Questions, in writing', text: 'You ask. We answer — usually the same day.' },
    { n: '05', title: 'E‑file on your sign‑off', text: 'Once you’ve approved everything, we file.' },
  ],
  stepsFootnote: 'Most returns wrap in 7–14 days from the day we have your complete documents.',

  about: {
    name: 'Jennifer',
    paras: [
      'Jennifer runs Calm Tax Co. as a solo practice from Arizona. She’s an IRS-registered tax preparer with an EFIN, currently completing additional certification, and serves clients across the country.',
      'Her approach to tax work is methodical and unhurried. Every return gets careful attention. Questions get researched rather than guessed at. Situations outside her current scope get referred warmly to specialists. She’d rather take fewer returns and do them well than build a volume practice.',
      'The "calm" in Calm Tax Co. isn’t a marketing pose — it’s a longstanding personal practice around nervous system regulation that became the operating principle of the firm. Filing taxes shouldn’t activate anyone’s stress response, including the preparer’s. That’s why everything happens in writing, on your schedule, with as much room to think as either of you needs.',
    ],
  },

  pricing: [
    {
      name: 'Personal returns',
      price: '$175',
      blurb: 'For W‑2 earners with standard situations. Federal + one state. Standard deduction or simple itemizing. Investment income, retirement distributions, and dependents included.',
    },
    {
      name: 'Self‑employed & gig',
      price: '$375',
      blurb: 'For freelancers, sole proprietors, and 1099 workers. Schedule C preparation, expense review, and quarterly estimate calculation. Federal + one state.',
    },
  ],
  pricingNote: 'Multi-state, additional schedules, or complex situations are quoted in advance. We’ll tell you the full price before any work starts, and we’ll never send you a surprise invoice.',

  notYet: {
    title: 'Who we’re not the right fit for — yet',
    intro: 'Honesty saves everyone time. There are situations we don’t currently take on, because they’re better served by someone with deeper specialization. If yours is one of these, reach out anyway and we’ll point you to someone good.',
    items: [
      'S‑Corp returns or complex business entity structures',
      'Significant crypto or NFT activity',
      'International filings (FBAR, FATCA, foreign income)',
      'Audit representation, or back taxes more than two years old',
      'Tax planning or strategy beyond return preparation',
      'Real estate professional status, oil & gas, or other specialized areas',
    ],
    outro: 'We expect this list to shrink over time as the practice grows. For now, we’d rather refer you well than fumble through unfamiliar territory.',
  },

  faqs: [
    {
      q: 'What if I get an IRS letter after you file?',
      a: 'Contact us first. We’ll review the notice with you and help you understand what’s being asked. Most letters are routine — verification requests, matching notices, simple corrections — and we’ll walk you through your response. For matters requiring formal representation, we’ll refer you to a credentialed preparer with representation rights.',
    },
    {
      q: 'How do I know my documents are secure?',
      a: 'Documents move through encrypted folders, not email attachments. We use Proton for storage and email — encrypted at rest and in transit, with access limited to your engagement.',
    },
    {
      q: 'How long does the whole process take?',
      a: 'Most returns wrap in 7–14 days from the day we have your complete documents. We don’t rush during peak season; we plan for it.',
    },
    {
      q: 'What if my situation changes mid‑year?',
      a: 'Ask us. We work year‑round, and a quick question about a new 1099 or whether something is deductible doesn’t require a new engagement. Clients can email anytime.',
    },
    {
      q: 'What if I’m running late getting my documents together?',
      a: 'We file extensions for clients who need them. The extension isn’t a problem — the not‑telling‑us‑about‑it is. As long as we know, we can plan accordingly.',
    },
    {
      q: 'Do I need to come in for a meeting?',
      a: 'No. Everything happens by email and secure upload. We don’t have an office for clients to visit, and we don’t take phone meetings — having time to research and respond carefully in writing is part of how we deliver good work.',
    },
  ],

  trust: [
    { label: 'Encrypted by default', text: 'Proton-based storage and email. Encrypted at rest and in transit. No documents move through plain attachments.' },
    { label: 'Year-round availability', text: 'Ask a question in July. Get an estimate in September. The practice doesn’t close between deadlines.' },
    { label: 'Honest referrals', text: 'If your situation is outside our scope, we’ll say so and point you to someone good. Always before any work begins.' },
  ],
};

Object.assign(window, { ImageSlot, Fleuron, RuleWithMark, I, Eyebrow, COPY, PaperGrain, RegisterMark, Asterism });
