// Shared bits used by all three mockups.
// Exposed on window so each Babel script can pick them up.

// A labelled image placeholder — honors the "say what it should be" rule.
// Faint warm stripe + monospace caption. Aspect = w/h.
function ImageSlot({ label, w = 800, h = 600, tone = 'sand', radius = 0, style = {}, className = '' }) {
  const tones = {
    sand:      { bg: '#EFE9DC', stripe: 'rgba(60,54,51,0.04)', ink: 'rgba(60,54,51,0.50)' },
    paper:     { bg: '#F6F1E5', stripe: 'rgba(60,54,51,0.035)', ink: 'rgba(60,54,51,0.45)' },
    sage:      { bg: '#C9D2C7', stripe: 'rgba(43,39,36,0.05)',  ink: 'rgba(43,39,36,0.55)' },
    terra:     { bg: '#D9A697', stripe: 'rgba(60,30,20,0.06)',  ink: 'rgba(60,30,20,0.55)' },
    deep:      { bg: '#3C3633', stripe: 'rgba(255,250,240,0.05)', ink: 'rgba(244,240,232,0.55)' },
    sageDeep:  { bg: '#5E6F5F', stripe: 'rgba(255,250,240,0.06)', ink: 'rgba(244,240,232,0.60)' },
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
        backgroundImage: `repeating-linear-gradient(135deg, ${t.stripe} 0 1px, transparent 1px 14px)`,
        borderRadius: radius,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
          fontSize: 10,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: t.ink,
          padding: '4px 10px',
          background: 'rgba(255,253,247,0.55)',
          backdropFilter: 'blur(2px)',
          whiteSpace: 'nowrap',
          maxWidth: '85%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {label}
      </span>
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

Object.assign(window, { ImageSlot, Fleuron, RuleWithMark, I, Eyebrow, COPY });
