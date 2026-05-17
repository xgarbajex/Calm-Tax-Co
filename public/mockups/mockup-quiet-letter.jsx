// Mockup 1 — The Quiet Letter
// Treat the homepage as a small-press printed pamphlet.
// Sections numbered as folios (§ 01, § 02...). Drop caps. Hairline rules
// with centered fleurons. Pricing as a printed Schedule of Fees with
// leader-dots. Terracotta is used as ink accent for marks only.

const QL = {
  paper:    '#F6F1E5',
  paperDeep:'#EDE6D4',
  ink:      '#2B2724',
  inkSoft:  '#3C3633',
  inkMute:  '#5D5751',
  slate:    '#6E6962',
  rule:     'rgba(43,39,36,0.22)',
  ruleSoft: 'rgba(43,39,36,0.10)',
  terra:    '#A66D5E',
  sage:     '#7D8E7E',
  sageDeep: '#5E6F5F',
};

// ---- small reusable bits scoped to this mockup ----

function QLFolio({ num, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, color: QL.terra }}>
      <span className="ink-bleed" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 20 }}>§</span>
      <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: QL.terra, fontWeight: 500 }}>
        {num} · {title}
      </span>
    </div>
  );
}

function QLDisplay({ children, size = 90, style = {} }) {
  return (
    <h2 style={{
      margin: 0,
      fontFamily: '"Instrument Serif", serif',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: size,
      lineHeight: 0.98,
      letterSpacing: '-0.005em',
      color: QL.ink,
      ...style,
    }}>{children}</h2>
  );
}

function QLBody({ children, justify = true, size = 15, style = {} }) {
  return (
    <p style={{
      margin: 0,
      fontFamily: 'Inter, sans-serif',
      fontWeight: 300,
      fontSize: size,
      lineHeight: 1.7,
      color: QL.inkMute,
      textAlign: justify ? 'justify' : 'left',
      hyphens: 'auto',
      ...style,
    }}>{children}</p>
  );
}

function QLDropCap({ letter, color = QL.terra }) {
  return (
    <span
      className="ink-bleed"
      style={{
        float: 'left',
        fontFamily: '"Instrument Serif", serif',
        fontStyle: 'italic',
        fontSize: 108,
        lineHeight: 0.82,
        color,
        paddingRight: 14,
        paddingTop: 6,
        marginRight: 2,
        textShadow: '0 1px 0 rgba(166,109,94,0.5), 0 0 12px rgba(166,109,94,0.18)',
      }}
    >{letter}</span>
  );
}

// Double rule with centered fleuron — more letterpress than a single line
function QLDoubleRule() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <div style={{ flex: 1 }}>
        <div style={{ height: 1, background: QL.rule }} />
        <div style={{ height: 1, background: QL.rule, opacity: 0.45, marginTop: 3 }} />
      </div>
      <span className="ink-bleed" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, color: QL.terra, lineHeight: 1 }}>❦</span>
      <div style={{ flex: 1 }}>
        <div style={{ height: 1, background: QL.rule }} />
        <div style={{ height: 1, background: QL.rule, opacity: 0.45, marginTop: 3 }} />
      </div>
    </div>
  );
}

function QLPill({ children, primary = false, dark = false }) {
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 28px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 11,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    fontWeight: 500,
    borderRadius: 999,
    cursor: 'pointer',
    transition: 'all .3s ease',
    textDecoration: 'none',
    border: '1px solid transparent',
  };
  if (primary) Object.assign(styles, { background: QL.ink, color: QL.paper });
  else if (dark) Object.assign(styles, { background: 'transparent', color: QL.paper, borderColor: 'rgba(244,240,232,0.5)' });
  else Object.assign(styles, { background: 'transparent', color: QL.ink, borderColor: QL.ink });
  return <a style={styles}>{children}</a>;
}

// ============================================================
// THE QUIET LETTER
// ============================================================
function QuietLetter() {
  const colW = 720;

  return (
    <div style={{
      background: QL.paper,
      color: QL.ink,
      fontFamily: 'Inter, sans-serif',
      width: '100%',
      position: 'relative',
      // Subtle paper tone wash
      backgroundImage: `
        radial-gradient(circle at 18% 20%, rgba(166,109,94,0.05) 0, transparent 50%),
        radial-gradient(circle at 82% 80%, rgba(125,142,126,0.05) 0, transparent 55%),
        radial-gradient(circle at 50% 50%, transparent 70%, rgba(60,40,30,0.06) 100%)
      `,
    }}>
      {/* Paper grain overlay — covers the whole page */}
      <PaperGrain />
      {/* ============= MASTHEAD ============= */}
      <div style={{ padding: '22px 56px 0', position: 'relative', zIndex: 1 }}>
        {/* Register marks at the four masthead corners */}
        <div style={{ position: 'absolute', top: 14, left: 18 }}><RegisterMark size={10} color="rgba(166,109,94,0.55)" /></div>
        <div style={{ position: 'absolute', top: 14, right: 18 }}><RegisterMark size={10} color="rgba(166,109,94,0.55)" /></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: QL.inkMute, fontWeight: 500 }}>
          <span>Vol. I &nbsp;·&nbsp; Folio 04 &nbsp;·&nbsp; A.D. MMXXVI</span>
          <span>A Practice in Patient Tax Preparation</span>
          <span>Set quietly in Arizona</span>
        </div>
        <div style={{ marginTop: 14, height: 1, background: QL.rule }} />
        <div style={{ marginTop: 4, height: 1, background: QL.rule, opacity: 0.4 }} />
      </div>

      {/* ============= NAVBAR ============= */}
      <header style={{ padding: '28px 56px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="assets/logo-alone.png" alt="" style={{ width: 28, height: 32, objectFit: 'contain', opacity: 0.85 }} />
          <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 26, color: QL.ink, letterSpacing: '0.01em' }}>Calm Tax Co.</span>
        </div>
        <nav style={{ display: 'flex', gap: 36 }}>
          {['The Practice', 'Who It’s For', 'How It Works', 'Pricing', 'Correspond'].map(l => (
            <a key={l} style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: QL.inkSoft, fontWeight: 500 }}>{l}</a>
          ))}
        </nav>
        <div style={{ width: 100, textAlign: 'right' }}>
          <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: QL.terra }}>read on ↓</span>
        </div>
      </header>

      {/* ============= HERO ============= */}
      <section style={{ padding: '120px 56px 100px', maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 180px', gap: 0, alignItems: 'start' }}>
          {/* Left margin */}
          <div style={{ paddingTop: 16 }}>
            <QLFolio num="An Opening" title="The Letter" />
            <div style={{ marginTop: 36, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: QL.slate, lineHeight: 1.6 }}>
              <span className="ink-bleed" style={{ color: QL.terra }}>fol.</span> i<br />
              issued in the<br />year of our<br />returns, 2026
            </div>
          </div>

          {/* Center */}
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <QLDisplay size={104} style={{ marginBottom: 36 }}>
              Tax prep<br /><span className="ink-bleed" style={{ color: QL.terra }}>without</span> the dread.
            </QLDisplay>
            <div style={{ width: 1, height: 36, background: QL.rule, margin: '0 auto 24px' }} />
            <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: QL.inkSoft, maxWidth: 580, marginInline: 'auto' }}>
              We handle simple returns with unusual care — by email, on your timeline, year-round.
            </p>
            <p style={{ margin: '20px auto 0', fontFamily: 'Inter', fontSize: 14, fontWeight: 300, color: QL.inkMute, letterSpacing: '0.02em' }}>
              You bring the documents. We bring the calm.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 56 }}>
              <QLPill primary>See if we’re a fit</QLPill>
              <QLPill>Pricing →</QLPill>
            </div>
          </div>

          {/* Right margin */}
          <div style={{ paddingTop: 16, textAlign: 'right' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: QL.slate, lineHeight: 1.6 }}>
              <span className="ink-bleed" style={{ color: QL.terra }}>est.</span> 2026<br />
              by Jennifer,<br />
              from her desk<br />
              in Arizona
            </div>
          </div>
        </div>
      </section>

      {/* Double-rule with fleuron between sections */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 56px', position: 'relative', zIndex: 1 }}>
        <QLDoubleRule />
      </div>

      {/* ============= § 01 · THE PRACTICE ============= */}
      <section style={{ padding: '110px 56px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60 }}>
          <div>
            <QLFolio num="§ 01" title="The Practice" />
            <div style={{ marginTop: 24, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: QL.slate, lineHeight: 1.6 }}>
              On the difference between<br />treating a schedule as<br />sovereign and a person<br />as sovereign.
            </div>
          </div>
          <div style={{ maxWidth: colW }}>
            <QLDisplay size={68} style={{ marginBottom: 44 }}>
              Tax season, but <span style={{ fontStyle: 'italic', color: QL.sageDeep }}>quieter.</span>
            </QLDisplay>

            <div style={{ columnCount: 2, columnGap: 44, columnRule: `1px solid ${QL.ruleSoft}` }}>
              <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 15, lineHeight: 1.75, color: QL.inkMute, textAlign: 'justify', fontWeight: 300, hyphens: 'auto' }}>
                <QLDropCap letter="M" />
                ost preparers treat their schedule as the priority and yours as the variable. We do it the other way. Send us your documents when you have them ready — afternoon, midnight, three weeks before the deadline. We review, ask any questions in writing, prepare the return, and walk you through it before we file.
              </p>
              <p style={{ margin: '14px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: QL.ink, textAlign: 'left' }}>
                No appointments. No phone tag. No urgency that isn’t yours.
              </p>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 14, lineHeight: 1.75, color: QL.inkMute, textAlign: 'justify', fontWeight: 300, hyphens: 'auto' }}>
                We work year-round, which means you can ask a question in July about whether something’s deductible, or get an estimated tax calculation in September, without booking a meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= § 02 · AN INVITATION (Breathing) ============= */}
      <section style={{ background: QL.paperDeep, padding: '120px 56px', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 48 }}>
            <QLFolio num="§ 02" title="An Invitation" />
            <QLDisplay size={56}>
              Before you read further,<br />a moment of <span style={{ color: QL.sageDeep }}>breath.</span>
            </QLDisplay>

            {/* Breathing visualization */}
            <div style={{ position: 'relative', width: 320, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
              {/* outer ring */}
              <div style={{ position: 'absolute', inset: 0, border: `1px solid ${QL.rule}`, borderRadius: '50%' }} />
              {/* breathing circle */}
              <div style={{
                width: 240, height: 240, borderRadius: '50%',
                background: `radial-gradient(circle at 35% 30%, rgba(125,142,126,0.18), rgba(125,142,126,0.04))`,
                border: `1px solid ${QL.sage}`,
                animation: 'qlBreathe 8s ease-in-out infinite',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28, color: QL.sageDeep }}>inhale</span>
              </div>
              {/* tick marks */}
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} style={{
                  position: 'absolute', width: 1, height: 10, background: QL.terra,
                  top: 6, left: '50%', marginLeft: -0.5,
                  transformOrigin: '50% 154px',
                  transform: `rotate(${deg}deg)`,
                }} />
              ))}
            </div>

            <p style={{ margin: 0, maxWidth: 460, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.55, color: QL.inkMute }}>
              In for four counts. Hold for four. Out for six.<br />Repeat for as long as feels honest.
            </p>
            <Eyebrow color={QL.slate} size={9}>— a small gesture, from the practice —</Eyebrow>
          </div>
        </div>
        <style>{`
          @keyframes qlBreathe {
            0%, 100% { transform: scale(0.92); }
            50% { transform: scale(1.06); }
          }
        `}</style>
      </section>

      {/* ============= § 03 · WHO WE'RE BUILT FOR ============= */}
      <section style={{ padding: '120px 56px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60, marginBottom: 80 }}>
          <div>
            <QLFolio num="§ 03" title="On the Reader" />
            <div style={{ marginTop: 24, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: QL.slate, lineHeight: 1.6 }}>
              Four small portraits<br />of the people this<br />practice is for.
            </div>
          </div>
          <div>
            <QLDisplay size={68}>Who we’re built for.</QLDisplay>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: `1px solid ${QL.rule}` }}>
          {COPY.personas.map((p, i) => (
            <article key={i} style={{
              padding: '48px 56px 48px 0',
              paddingLeft: i % 2 === 1 ? 56 : 0,
              borderBottom: `1px solid ${QL.ruleSoft}`,
              borderRight: i % 2 === 0 ? `1px solid ${QL.ruleSoft}` : 'none',
              display: 'flex',
              gap: 24,
            }}>
              <div style={{ flex: '0 0 56px' }}>
                <div className="ink-bleed" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 48, color: QL.terra, lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <Eyebrow color={QL.sageDeep} size={10}>For — {p.tag}</Eyebrow>
                <p style={{ margin: '16px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.55, color: QL.inkSoft, fontWeight: 400 }}>
                  {p.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============= § 04 · HOW IT WORKS ============= */}
      <section style={{ background: QL.paperDeep, padding: '120px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60, marginBottom: 64 }}>
            <div>
              <QLFolio num="§ 04" title="The Method" />
              <div style={{ marginTop: 24, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: QL.slate, lineHeight: 1.6 }}>
                A schedule, in five<br />unhurried movements.
              </div>
            </div>
            <div>
              <QLDisplay size={68}>How it works.</QLDisplay>
            </div>
          </div>

          {/* Printed-schedule layout: each step a line with leader-dots */}
          <div style={{ borderTop: `1px solid ${QL.rule}`, marginTop: 32 }}>
            {COPY.steps.map((s, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: 32,
                padding: '36px 0',
                borderBottom: `1px solid ${QL.ruleSoft}`,
                alignItems: 'baseline',
              }}>
                <div className="ink-bleed" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 40, color: QL.terra, lineHeight: 1 }}>{s.n}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 28, color: QL.ink, lineHeight: 1.2 }}>{s.title}</span>
                  <span style={{ flex: 1, borderBottom: `1px dotted ${QL.rule}`, transform: 'translateY(-6px)' }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 14, color: QL.inkMute, fontWeight: 300, maxWidth: 380, textAlign: 'right' }}>{s.text}</span>
                </div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: QL.slate }}>step {i + 1} of 5</div>
              </div>
            ))}
          </div>

          <p style={{ margin: '40px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: QL.inkMute, textAlign: 'center' }}>
            {COPY.stepsFootnote}
          </p>
        </div>
      </section>

      {/* ============= § 05 · ABOUT JENNIFER ============= */}
      <section style={{ padding: '120px 56px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 60 }}>
          <div>
            <QLFolio num="§ 05" title="The Practitioner" />
            <div style={{ marginTop: 32, width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', border: `1px solid ${QL.rule}`, filter: 'sepia(8%)' }}>
              <img src="assets/jennifer.png" alt="Jennifer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ marginTop: 18, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: QL.slate, lineHeight: 1.6 }}>
              IRS-registered<br />
              tax preparer<br />
              with an EFIN,<br />
              from Arizona.
            </div>
          </div>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow color={QL.terra}>A brief introduction</Eyebrow>
            <QLDisplay size={88} style={{ marginTop: 18, marginBottom: 44 }}>
              On <span style={{ color: QL.sageDeep }}>Jennifer.</span>
            </QLDisplay>

            <div style={{ fontFamily: 'Inter', fontWeight: 300, color: QL.inkMute, fontSize: 15, lineHeight: 1.75 }}>
              <p style={{ margin: 0, textAlign: 'justify', hyphens: 'auto' }}>
                <QLDropCap letter="J" />
                {COPY.about.paras[0]}
              </p>
              <div style={{ height: 24 }} />
              <p style={{ margin: 0, textAlign: 'justify', hyphens: 'auto' }}>{COPY.about.paras[1]}</p>
              <div style={{ height: 24 }} />
              {/* Pull quote */}
              <div style={{ borderLeft: `1px solid ${QL.terra}`, paddingLeft: 28, margin: '8px 0 8px' }}>
                <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, lineHeight: 1.4, color: QL.ink }}>
                  Filing taxes shouldn’t activate anyone’s stress response, including the preparer’s.
                </p>
              </div>
              <div style={{ height: 24 }} />
              <p style={{ margin: 0, textAlign: 'justify', hyphens: 'auto' }}>{COPY.about.paras[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Double-rule with fleuron */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 56px', position: 'relative', zIndex: 1 }}>
        <QLDoubleRule />
      </div>

      {/* ============= § 06 · SCHEDULE OF FEES ============= */}
      <section style={{ padding: '120px 56px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <QLFolio num="§ 06" title="Schedule of Fees" />
          <QLDisplay size={80} style={{ marginTop: 28 }}>
            Pricing, <span className="ink-bleed" style={{ color: QL.terra }}>plainly stated.</span>
          </QLDisplay>
        </div>

        <div style={{ maxWidth: 920, margin: '0 auto', borderTop: `2px solid ${QL.ink}`, borderBottom: `1px solid ${QL.rule}` }}>
          {COPY.pricing.map((p, i) => (
            <div key={i} style={{
              padding: '40px 0',
              borderBottom: i === 0 ? `1px solid ${QL.ruleSoft}` : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 34, color: QL.ink }}>{p.name}</span>
                <span style={{ flex: 1, borderBottom: `1.5px dotted ${QL.rule}`, transform: 'translateY(-8px)' }} />
                <span className="ink-bleed" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 48, color: QL.terra }}>{p.price}</span>
              </div>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 14, lineHeight: 1.7, color: QL.inkMute, fontWeight: 300, maxWidth: 720 }}>
                {p.blurb}
              </p>
            </div>
          ))}
        </div>

        <p style={{ margin: '36px auto 0', maxWidth: 720, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.6, color: QL.inkMute, textAlign: 'center' }}>
          {COPY.pricingNote}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <QLPill primary>Begin a correspondence</QLPill>
        </div>
      </section>

      {/* ============= § 07 · NOT THE FIT, YET ============= */}
      <section style={{ background: QL.paperDeep, padding: '120px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80 }}>
            <div>
              <QLFolio num="§ 07" title="An Honest List" />
              <QLDisplay size={56} style={{ marginTop: 28 }}>
                Who we’re <span className="ink-bleed" style={{ fontStyle: 'italic', color: QL.terra }}>not</span> the right fit for —<br />yet.
              </QLDisplay>
              <p style={{ margin: '32px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: QL.inkMute, textAlign: 'justify' }}>
                {COPY.notYet.intro}
              </p>
            </div>

            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${QL.rule}` }}>
                {COPY.notYet.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 24,
                    padding: '24px 0',
                    borderBottom: `1px solid ${QL.ruleSoft}`,
                  }}>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: QL.terra, minWidth: 24 }}>
                      {String.fromCharCode(97 + i)}.
                    </span>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22, color: QL.inkSoft, lineHeight: 1.4 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ margin: '32px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.55, color: QL.inkMute }}>
                {COPY.notYet.outro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= § 08 · HOW WE OPERATE ============= */}
      <section style={{ padding: '120px 56px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <QLFolio num="§ 08" title="On Operation" />
          <QLDisplay size={68} style={{ marginTop: 28 }}>
            How we operate.
          </QLDisplay>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56, borderTop: `1px solid ${QL.rule}`, paddingTop: 48 }}>
          {COPY.trust.map((t, i) => (
            <div key={i}>
              <div className="ink-bleed" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, color: QL.terra, marginBottom: 8 }}>
                {String(i + 1).padStart(2, '0')}.
              </div>
              <h4 style={{ margin: '0 0 18px', fontFamily: '"Instrument Serif", serif', fontSize: 26, color: QL.ink, lineHeight: 1.25 }}>{t.label}</h4>
              <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 14, lineHeight: 1.75, color: QL.inkMute, fontWeight: 300 }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= § 09 · COMMON QUESTIONS ============= */}
      <section style={{ background: QL.paperDeep, padding: '120px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80 }}>
            <div>
              <QLFolio num="§ 09" title="Correspondence" />
              <QLDisplay size={64} style={{ marginTop: 28 }}>Common<br />questions.</QLDisplay>
              <p style={{ marginTop: 32, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.55, color: QL.slate }}>
                Answered as if you’d written to ask.
              </p>
            </div>
            <div style={{ borderTop: `1px solid ${QL.rule}` }}>
              {COPY.faqs.map((f, i) => (
                <div key={i} style={{ padding: '32px 0', borderBottom: `1px solid ${QL.ruleSoft}` }}>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: QL.terra, minWidth: 28, paddingTop: 6 }}>
                      Q.
                    </span>
                    <h5 style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontSize: 22, color: QL.ink, lineHeight: 1.35 }}>{f.q}</h5>
                  </div>
                  <div style={{ display: 'flex', gap: 24, marginTop: 14 }}>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: QL.sageDeep, minWidth: 28, paddingTop: 4 }}>
                      A.
                    </span>
                    <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 14, lineHeight: 1.75, color: QL.inkMute, fontWeight: 300 }}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============= § 10 · CORRESPOND ============= */}
      <section style={{ padding: '140px 56px', maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
        <QLFolio num="§ 10" title="Begin" />
        <QLDisplay size={104} style={{ marginTop: 32 }}>
          Let’s <span className="ink-bleed" style={{ color: QL.terra }}>correspond.</span>
        </QLDisplay>
        <p style={{ margin: '36px auto 0', maxWidth: 540, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, color: QL.inkMute }}>
          We respond within one business day, by email.<br />Most questions get answered the same day.
        </p>

        <form style={{ maxWidth: 620, margin: '64px auto 0', textAlign: 'left' }}>
          {[
            { label: 'Your name', placeholder: 'Yours truly,' },
            { label: 'Email address', placeholder: 'where shall we write back?' },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 36 }}>
              <Eyebrow color={QL.terra} size={9}>{f.label}</Eyebrow>
              <div style={{ marginTop: 10, borderBottom: `1px solid ${QL.rule}`, paddingBottom: 10 }}>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 20, color: QL.slate, opacity: 0.6 }}>{f.placeholder}</span>
              </div>
            </div>
          ))}
          <div style={{ marginBottom: 36 }}>
            <Eyebrow color={QL.terra} size={9}>Service of interest</Eyebrow>
            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['Personal Filing', 'Self-Employed & Gig', 'Not Sure Yet', 'Other'].map((opt, j) => (
                <span key={j} style={{
                  padding: '10px 20px',
                  border: `1px solid ${QL.rule}`,
                  borderRadius: 999,
                  fontFamily: 'Inter',
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: QL.inkSoft,
                  fontWeight: 400,
                }}>{opt}</span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 36 }}>
            <Eyebrow color={QL.terra} size={9}>A short note</Eyebrow>
            <div style={{ marginTop: 10, borderBottom: `1px solid ${QL.rule}`, paddingBottom: 64 }}>
              <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: QL.slate, opacity: 0.5 }}>tell us a little about your year…</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <QLPill primary>Send the letter →</QLPill>
          </div>
        </form>
      </section>

      {/* ============= COLOPHON / FOOTER ============= */}
      <footer style={{ background: QL.ink, color: QL.paper, padding: '80px 56px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 56 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <img src="assets/logo-alone.png" alt="" style={{ width: 28, height: 32, objectFit: 'contain', filter: 'invert(1) brightness(1.5)', opacity: 0.85 }} />
                <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 28 }}>Calm Tax Co.</span>
              </div>
              <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, color: 'rgba(244,240,232,0.7)', lineHeight: 1.5, maxWidth: 340 }}>
                A small, careful tax practice.<br />Conducted entirely by correspondence.
              </p>
            </div>
            <div>
              <Eyebrow color="rgba(244,240,232,0.5)" size={9}>Address</Eyebrow>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'rgba(244,240,232,0.85)', lineHeight: 1.8 }}>
                hello@calmtax.co<br />
                Arizona, U.S.<br />
                year-round
              </p>
            </div>
            <div>
              <Eyebrow color="rgba(244,240,232,0.5)" size={9}>Credentials</Eyebrow>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'rgba(244,240,232,0.85)', lineHeight: 1.8 }}>
                IRS PTIN holder<br />
                IRS Authorized E-File Provider<br />
                Proton-secured correspondence
              </p>
            </div>
            <div>
              <Eyebrow color="rgba(244,240,232,0.5)" size={9}>Read also</Eyebrow>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'rgba(244,240,232,0.85)', lineHeight: 1.8 }}>
                Privacy notice<br />
                Terms of engagement<br />
                Accessibility
              </p>
            </div>
          </div>

          <div style={{ marginTop: 64, paddingTop: 28, borderTop: '1px solid rgba(244,240,232,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(244,240,232,0.55)' }}>
              Set in Instrument Serif &amp; Inter. Printed quietly for the year MMXXVI.
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Asterism color="rgba(244,240,232,0.5)" size={16} />
              <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(244,240,232,0.5)', fontWeight: 500 }}>
                © Calm Tax Co. — all rights reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.QuietLetter = QuietLetter;
