// Mockup 3 — Negative Space / Modernist
// Strict-but-humanized grid. Massive negative space.
// Type does almost all the work. One terracotta dot is the only chromatic
// hit per section. Italic Instrument Serif at editorial scale.

const M = {
  paper:     '#FBF8F1',
  paperWarm: '#F4EFE5',
  ink:       '#1F1B18',
  inkSoft:   '#3C3633',
  inkMute:   '#5D5751',
  slate:     '#7A7570',
  sage:      '#7D8E7E',
  sageDeep:  '#5E6F5F',
  terra:     '#A66D5E',
  rule:      'rgba(31,27,24,0.16)',
  ruleSoft:  'rgba(31,27,24,0.08)',
};

// Section letter in the left gutter (A —, B —, C —)
function MGutter({ letter, label }) {
  return (
    <div style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
          {letter}
        </span>
        <span style={{ width: 24, height: 1, background: M.rule, transform: 'translateY(-3px)' }} />
      </div>
      <div style={{ marginTop: 14, fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: M.inkMute, fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

function MDisplay({ children, size = 96, italic = false, color = M.ink, style = {} }) {
  return (
    <h2 style={{
      margin: 0,
      fontFamily: '"Instrument Serif", serif',
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: 400,
      fontSize: size,
      lineHeight: 0.96,
      letterSpacing: '-0.008em',
      color,
      ...style,
    }}>{children}</h2>
  );
}

function MDot({ size = 14, style = {}, glow = false }) {
  return <span className={glow ? 'terra-dot-glow' : ''} style={{ display: 'inline-block', width: size, height: size, borderRadius: '50%', background: M.terra, ...style }} />;
}

function MLink({ children, dark = false }) {
  return (
    <a style={{
      fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: dark ? 'rgba(244,240,232,0.85)' : M.inkSoft, fontWeight: 500, position: 'relative',
    }}>{children}</a>
  );
}

function MPill({ children, primary, dark }) {
  const s = {
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '14px 26px', borderRadius: 0, borderBottom: `1px solid ${M.ink}`,
    fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.28em',
    textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer',
    background: 'transparent', color: M.ink, textDecoration: 'none',
  };
  if (primary) Object.assign(s, { background: M.ink, color: M.paper, borderBottom: '1px solid ' + M.ink, padding: '16px 30px' });
  if (dark) Object.assign(s, { color: M.paper, borderBottom: '1px solid rgba(244,240,232,0.4)' });
  return <a style={s}>{children}</a>;
}

// ============================================================
// NEGATIVE SPACE / MODERNIST
// ============================================================
function Modernist() {
  // 12-col grid base
  const gutterCol = '64px';
  const grid = `${gutterCol} repeat(12, 1fr) ${gutterCol}`;

  return (
    <div style={{ background: M.paper, color: M.ink, fontFamily: 'Inter, sans-serif', width: '100%', position: 'relative' }}>
      {/* Page-wide paper grain */}
      <PaperGrain opacity={0.35} />

      {/* ============= TOP STRIP / NAV ============= */}
      <div style={{ borderBottom: `1px solid ${M.rule}`, padding: '20px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="assets/logo-alone.png" alt="" style={{ width: 22, height: 26, objectFit: 'contain', opacity: 0.85 }} />
          <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22, color: M.ink }}>Calm Tax Co.</span>
          <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: M.slate, fontWeight: 500, marginLeft: 18 }}>
            est. 2026 — Florida
          </span>
        </div>
        <nav style={{ display: 'flex', gap: 36 }}>
          {['Approach', 'Who it’s for', 'Method', 'Pricing', 'About'].map(l => (
            <MLink key={l}>{l}</MLink>
          ))}
        </nav>
        <MPill primary>Begin →</MPill>
      </div>

      {/* ============= HERO — 12 col, anchored ============= */}
      <section style={{ padding: '64px 64px 140px', minHeight: 820, position: 'relative' }}>
        {/* Corner registration marks */}
        <div style={{ position: 'absolute', top: 20, left: 24 }}><RegisterMark size={14} color="rgba(166,109,94,0.6)" /></div>
        <div style={{ position: 'absolute', top: 20, right: 24 }}><RegisterMark size={14} color="rgba(166,109,94,0.6)" /></div>
        <div style={{ position: 'absolute', bottom: 80, left: 24 }}><RegisterMark size={14} color="rgba(166,109,94,0.4)" /></div>
        <div style={{ position: 'absolute', bottom: 80, right: 24 }}><RegisterMark size={14} color="rgba(166,109,94,0.4)" /></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, rowGap: 0, position: 'relative', minHeight: 700 }}>

          {/* tiny eyebrow top-left */}
          <div style={{ gridColumn: '1 / span 4', gridRow: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <MDot size={6} glow />
              <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.inkMute, fontWeight: 500 }}>
                A small tax practice, conducted by post
              </span>
            </div>
          </div>

          {/* serial number top-right */}
          <div style={{ gridColumn: '11 / span 2', gridRow: '1', textAlign: 'right' }}>
            <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.slate, fontWeight: 500 }}>
              No. 001 / 2026
            </span>
          </div>

          {/* Big italic anchored to a corner of the grid */}
          <div style={{ gridColumn: '1 / span 11', gridRow: '2', marginTop: 80 }}>
            <MDisplay size={156} style={{ lineHeight: 0.92 }}>
              Tax prep
            </MDisplay>
          </div>
          <div style={{ gridColumn: '3 / span 10', gridRow: '3', marginTop: 8 }}>
            <MDisplay size={156} italic style={{ lineHeight: 0.92 }}>
              without the dread<span className="ink-bleed" style={{ color: M.terra }}>.</span>
            </MDisplay>
          </div>

          {/* tiny paragraph anchored bottom-right */}
          <div style={{ gridColumn: '9 / span 4', gridRow: '4', marginTop: 80 }}>
            <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: M.inkMute }}>
              We handle simple returns with unusual care — by email, on your timeline, year-round.
            </p>
            <p style={{ margin: '18px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, color: M.ink, lineHeight: 1.5 }}>
              You bring the documents. We bring the calm.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 8 }}>
              <MPill primary>See if we’re a fit →</MPill>
              <MPill>Pricing</MPill>
            </div>
          </div>

          {/* floating "01" — tasteful, big, low contrast */}
          <div style={{ gridColumn: '1 / span 2', gridRow: '4', marginTop: 80, color: M.terra }}>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 88, lineHeight: 0.9, opacity: 0.85 }}>
              i.
            </span>
            <div style={{ marginTop: 16, width: 1, height: 60, background: M.rule }} />
            <div style={{ marginTop: 16, fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.slate, fontWeight: 500 }}>
              opening
            </div>
          </div>
        </div>
      </section>

      {/* ============= A — APPROACH ============= */}
      <section style={{ padding: '120px 64px', borderTop: `1px solid ${M.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="A —" label="The Approach" />
          </div>
          <div style={{ gridColumn: '3 / span 6' }}>
            <MDisplay size={88}>
              Tax season<span className="ink-bleed" style={{ color: M.terra }}>,</span>
            </MDisplay>
            <MDisplay size={88} italic style={{ marginTop: 4 }}>
              but quieter.
            </MDisplay>
          </div>
          <div style={{ gridColumn: '10 / span 4' }}>
            <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: M.inkMute }}>
              Most preparers treat their schedule as the priority and yours as the variable. We do it the other way. Send us your documents when you have them ready — afternoon, midnight, three weeks before the deadline.
            </p>
            <p style={{ margin: '20px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, color: M.ink, lineHeight: 1.45 }}>
              No appointments. No phone tag. No urgency that isn’t yours.
            </p>
            <p style={{ margin: '20px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: M.inkMute }}>
              We work year-round — ask a question in July about whether something’s deductible, or get an estimated tax calculation in September, without booking a meeting.
            </p>
          </div>
        </div>
      </section>

      {/* ============= B — A SMALL BREATH ============= */}
      <section style={{ padding: '160px 64px', borderTop: `1px solid ${M.rule}`, background: M.paperWarm }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, alignItems: 'center' }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="B —" label="An invitation" />
          </div>
          <div style={{ gridColumn: '3 / span 5' }}>
            <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
              pause
            </span>
            <MDisplay size={72} italic style={{ marginTop: 24, color: M.inkSoft }}>
              A small breath, before<br />you read on.
            </MDisplay>
            <p style={{ margin: '32px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: M.inkMute, maxWidth: 360 }}>
              In for four counts. Hold for four. Out for six. Repeat for as long as feels honest.
            </p>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.slate, fontWeight: 500 }}>00:04 · 00:04 · 00:06</span>
            </div>
          </div>
          <div style={{ gridColumn: '9 / span 4', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 320, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, border: `1px solid ${M.rule}`, borderRadius: '50%' }} />
              <div style={{ position: 'absolute', inset: 28, border: `1px dashed ${M.ruleSoft}`, borderRadius: '50%' }} />
              {/* tick marks */}
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} style={{
                  position: 'absolute', width: 1, height: 8, background: M.terra,
                  top: -4, left: '50%', marginLeft: -0.5,
                  transformOrigin: '50% 164px',
                  transform: `rotate(${deg}deg)`,
                }} />
              ))}
              <div style={{
                width: 220, height: 220, borderRadius: '50%',
                background: M.paper, border: `1px solid ${M.ink}`,
                boxShadow: 'inset 0 -8px 24px rgba(60,40,30,0.06), inset 0 8px 24px rgba(255,255,255,0.4)',
                animation: 'mBreath 9s ease-in-out infinite',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MDot size={10} glow />
              </div>
              {/* fig label */}
              <span style={{
                position: 'absolute', bottom: -28, fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
                fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.slate, fontWeight: 500,
              }}>fig. i — a breath</span>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes mBreath {
            0%, 100% { transform: scale(0.86); }
            50% { transform: scale(1.06); }
          }
        `}</style>
      </section>

      {/* ============= C — WHO IT'S FOR ============= */}
      <section style={{ padding: '140px 64px', borderTop: `1px solid ${M.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, marginBottom: 80 }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="C —" label="Who it’s for" />
          </div>
          <div style={{ gridColumn: '3 / span 8' }}>
            <MDisplay size={88}>
              Four kinds<br /><I size={88} color={M.terra}>of</I> <I size={88}>filer.</I>
            </MDisplay>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, borderTop: `1px solid ${M.rule}` }}>
          {COPY.personas.map((p, i) => (
            <article key={i} style={{
              gridColumn: `${1 + i * 3} / span 3`,
              padding: '48px 24px 48px 0',
              borderRight: i < 3 ? `1px solid ${M.ruleSoft}` : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 28 }}>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 42, color: M.terra, lineHeight: 0.9 }}>
                  {String.fromCharCode(105 + i)}.
                </span>
                <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.inkMute, fontWeight: 500 }}>
                  {['Cautious filer', 'Side income', 'Newly freelance', 'Knowledge worker'][i]}
                </span>
              </div>
              <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.55, color: M.inkSoft }}>
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============= D — METHOD (HOW IT WORKS) ============= */}
      <section style={{ padding: '140px 64px', borderTop: `1px solid ${M.rule}`, background: M.paperWarm }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, marginBottom: 80, alignItems: 'end' }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="D —" label="The Method" />
          </div>
          <div style={{ gridColumn: '3 / span 7' }}>
            <MDisplay size={96}>
              In five <I size={96} color={M.sageDeep}>unhurried</I> movements<span className="ink-bleed" style={{ color: M.terra }}>.</span>
            </MDisplay>
          </div>
          <div style={{ gridColumn: '11 / span 3' }}>
            <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.55, color: M.inkMute }}>
              {COPY.stepsFootnote}
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', borderTop: `1px solid ${M.ink}` }}>
          {COPY.steps.map((s, i) => (
            <div key={i} style={{
              padding: '40px 24px 48px 0',
              borderRight: i < 4 ? `1px solid ${M.rule}` : 'none',
              minHeight: 280,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 28 }}>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 28, color: M.terra }}>{s.n}</span>
                <div style={{ flex: 1, height: 1, background: M.rule, transform: 'translateY(-6px)' }} />
              </div>
              <h4 style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontSize: 24, color: M.ink, lineHeight: 1.25 }}>{s.title}</h4>
              <p style={{ margin: '16px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 13.5, lineHeight: 1.7, color: M.inkMute }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= E — ABOUT JENNIFER ============= */}
      <section style={{ padding: '160px 64px', borderTop: `1px solid ${M.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="E —" label="The practitioner" />
          </div>
          <div style={{ gridColumn: '3 / span 6' }}>
            <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
              Hello, I’m
            </span>
            <MDisplay size={156} italic style={{ marginTop: 28, lineHeight: 0.92 }}>
              Jennifer<span className="ink-bleed" style={{ color: M.terra }}>.</span>
            </MDisplay>

            <div style={{ marginTop: 64, maxWidth: 540, fontFamily: 'Inter', fontWeight: 300, color: M.inkMute, fontSize: 15, lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>{COPY.about.paras[0]}</p>
              <p style={{ margin: '20px 0 0' }}>{COPY.about.paras[1]}</p>
            </div>

            {/* pull quote */}
            <div style={{ marginTop: 48, paddingLeft: 28, borderLeft: `1px solid ${M.terra}` }}>
              <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, lineHeight: 1.4, color: M.ink, maxWidth: 540 }}>
                Filing taxes shouldn’t activate anyone’s stress response, including the preparer’s.
              </p>
            </div>

            <p style={{ margin: '48px 0 0', maxWidth: 540, fontFamily: 'Inter', fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: M.inkMute }}>
              {COPY.about.paras[2]}
            </p>
          </div>

          {/* portrait, intentionally small + offset */}
          <div style={{ gridColumn: '10 / span 3', marginTop: 80 }}>
            <div style={{ width: '100%', aspectRatio: '4 / 5', background: M.paperWarm, overflow: 'hidden', filter: 'sepia(6%)' }}>
              <img src="assets/jennifer.png" alt="Jennifer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }} />
            </div>
            <div style={{ marginTop: 16, fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: M.slate, fontWeight: 500 }}>
              fig. i — at her desk, Florida
            </div>
            <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${M.rule}`, fontFamily: 'Inter', fontSize: 11, fontWeight: 300, color: M.inkMute, lineHeight: 1.8 }}>
              IRS-registered tax preparer<br />
              EFIN holder<br />
              additional certification, in progress
            </div>
          </div>
        </div>
      </section>

      {/* ============= F — PRICING ============= */}
      <section style={{ padding: '140px 64px', borderTop: `1px solid ${M.rule}`, background: M.paperWarm }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, marginBottom: 64, alignItems: 'end' }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="F —" label="Pricing" />
          </div>
          <div style={{ gridColumn: '3 / span 7' }}>
            <MDisplay size={96}>
              Two prices<span className="ink-bleed" style={{ color: M.terra }}>.</span><br /><I size={96} color={M.sageDeep}>No surprises.</I>
            </MDisplay>
          </div>
        </div>

        {/* Each pricing line is a single composition */}
        <div style={{ borderTop: `2px solid ${M.ink}` }}>
          {COPY.pricing.map((p, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24,
              padding: '56px 0',
              borderBottom: `1px solid ${M.rule}`,
              alignItems: 'center',
            }}>
              <div style={{ gridColumn: '1 / span 1', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28, color: M.terra }}>
                0{i + 1}.
              </div>
              <div style={{ gridColumn: '2 / span 5' }}>
                <MDisplay size={56} italic={i === 1}>{p.name}</MDisplay>
              </div>
              <div style={{ gridColumn: '7 / span 4' }}>
                <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: M.inkMute }}>{p.blurb}</p>
              </div>
              <div style={{ gridColumn: '11 / span 3', textAlign: 'right' }}>
                <MDisplay size={84}>{p.price}</MDisplay>
              </div>
            </div>
          ))}
        </div>

        <p style={{ margin: '40px 0 0', maxWidth: 760, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.55, color: M.inkMute }}>
          {COPY.pricingNote}
        </p>
      </section>

      {/* ============= G — NOT THE FIT (YET) ============= */}
      <section style={{ padding: '140px 64px', borderTop: `1px solid ${M.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24 }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="G —" label="An honest list" />
          </div>
          <div style={{ gridColumn: '3 / span 5' }}>
            <MDisplay size={76}>
              Who we’re<br /><I size={76} color={M.terra}>not</I> the right fit<br />for<span className="ink-bleed" style={{ color: M.terra }}>,</span> <I size={76}>yet.</I>
            </MDisplay>
            <p style={{ margin: '40px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 14.5, lineHeight: 1.75, color: M.inkMute, maxWidth: 460 }}>
              {COPY.notYet.intro}
            </p>
            <p style={{ margin: '24px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.55, color: M.inkMute, maxWidth: 460 }}>
              {COPY.notYet.outro}
            </p>
          </div>
          <div style={{ gridColumn: '9 / span 5' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${M.ink}` }}>
              {COPY.notYet.items.map((item, i) => (
                <li key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr 80px',
                  alignItems: 'baseline',
                  gap: 20,
                  padding: '24px 0',
                  borderBottom: `1px solid ${M.ruleSoft}`,
                }}>
                  <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
                    G.{String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 21, color: M.inkSoft, lineHeight: 1.4 }}>
                    {item}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.slate, fontWeight: 500, textAlign: 'right' }}>
                    refer →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============= H — HOW WE OPERATE ============= */}
      <section style={{ padding: '140px 64px', borderTop: `1px solid ${M.rule}`, background: M.paperWarm }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, marginBottom: 72 }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="H —" label="Operations" />
          </div>
          <div style={{ gridColumn: '3 / span 8' }}>
            <MDisplay size={84}>
              Three commitments<span className="ink-bleed" style={{ color: M.terra }}>.</span>
            </MDisplay>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${M.ink}` }}>
          {COPY.trust.map((t, i) => (
            <div key={i} style={{ padding: '48px 32px 48px 0', borderRight: i < 2 ? `1px solid ${M.rule}` : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <MDot size={6} />
                <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
                  H.0{i + 1}
                </span>
              </div>
              <h4 style={{ margin: '0 0 18px', fontFamily: '"Instrument Serif", serif', fontSize: 28, color: M.ink, lineHeight: 1.25, fontStyle: i === 1 ? 'italic' : 'normal' }}>{t.label}</h4>
              <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: M.inkMute }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= I — COMMON QUESTIONS ============= */}
      <section style={{ padding: '140px 64px', borderTop: `1px solid ${M.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, marginBottom: 64 }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <MGutter letter="I —" label="Common questions" />
          </div>
          <div style={{ gridColumn: '3 / span 8' }}>
            <MDisplay size={84}>
              You may be <I size={84} color={M.terra}>wondering.</I>
            </MDisplay>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 64, rowGap: 0, borderTop: `1px solid ${M.rule}` }}>
          {COPY.faqs.map((f, i) => (
            <div key={i} style={{
              padding: '32px 0',
              borderBottom: `1px solid ${M.ruleSoft}`,
              borderRight: i % 2 === 0 ? 'none' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
                <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
                  Q.{String(i + 1).padStart(2, '0')}
                </span>
                <h5 style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontSize: 22, color: M.ink, lineHeight: 1.3 }}>{f.q}</h5>
              </div>
              <p style={{ margin: '14px 0 0 50px', fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: M.inkMute }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= J — CORRESPOND (CONTACT) ============= */}
      <section style={{ padding: '180px 64px', borderTop: `1px solid ${M.rule}`, background: M.ink, color: M.paper, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24 }}>
          <div style={{ gridColumn: '1 / span 2' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>J —</span>
              <span style={{ width: 24, height: 1, background: 'rgba(244,240,232,0.3)', transform: 'translateY(-3px)' }} />
            </div>
            <div style={{ marginTop: 14, fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(244,240,232,0.6)', fontWeight: 500 }}>
              Correspond
            </div>
          </div>

          <div style={{ gridColumn: '3 / span 6' }}>
            <MDisplay size={156} color={M.paper} style={{ lineHeight: 0.94 }}>
              Let’s
            </MDisplay>
            <MDisplay size={156} italic color="rgba(244,240,232,0.9)" style={{ marginTop: 4, lineHeight: 0.94 }}>
              exhale<span className="ink-bleed" style={{ color: M.terra }}>.</span>
            </MDisplay>
            <p style={{ margin: '48px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: 'rgba(244,240,232,0.85)', maxWidth: 480, lineHeight: 1.5 }}>
              We respond within one business day, by email. Most questions get answered the same day.
            </p>
          </div>

          <div style={{ gridColumn: '10 / span 4', marginTop: 12 }}>
            {[
              { label: 'name', placeholder: 'How shall we address you?' },
              { label: 'email', placeholder: 'where shall we write back?' },
              { label: 'service', placeholder: 'Personal · Self-employed · Not sure' },
              { label: 'a short note', placeholder: 'tell us a little about your year…' },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: 32 }}>
                <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
                  J.0{i + 1} · {f.label}
                </span>
                <div style={{ marginTop: 10, paddingBottom: i === 3 ? 56 : 10, borderBottom: '1px solid rgba(244,240,232,0.3)' }}>
                  <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, color: 'rgba(244,240,232,0.45)' }}>{f.placeholder}</span>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 32 }}>
              <MPill dark>Send the letter →</MPill>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FOOTER ============= */}
      <footer style={{ background: M.paper, color: M.ink, padding: '64px 64px 32px', borderTop: `1px solid ${M.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 24, alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / span 4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src="assets/logo-alone.png" alt="" style={{ width: 24, height: 28, objectFit: 'contain', opacity: 0.85 }} />
              <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22 }}>Calm Tax Co.</span>
            </div>
            <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: M.inkMute, lineHeight: 1.5, maxWidth: 280 }}>
              A small, careful tax practice. Conducted entirely by correspondence.
            </p>
          </div>

          {[
            { label: 'Address', lines: ['hello@calmtax.co', 'Florida, U.S.', 'year-round'] },
            { label: 'Credentials', lines: ['IRS PTIN holder', 'IRS Authorized E-File Provider', 'Proton-secured'] },
            { label: 'Read also', lines: ['Privacy notice', 'Terms of engagement', 'Accessibility'] },
          ].map((col, i) => (
            <div key={i} style={{ gridColumn: `${5 + i * 3} / span 3` }}>
              <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: M.terra, fontWeight: 500 }}>
                {col.label}
              </span>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 12, fontWeight: 300, color: M.inkSoft, lineHeight: 1.85 }}>
                {col.lines.map((l, j) => <span key={j}>{l}<br /></span>)}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid ${M.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: M.slate }}>
            Set in Instrument Serif &amp; Inter. MMXXVI.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <MDot size={6} />
            <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: M.slate, fontWeight: 500 }}>
              © Calm Tax Co. — all rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.Modernist = Modernist;
