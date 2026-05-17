// Mockup 2 — Atelier
// Image-led, warm color washes, atmospheric.
// Each section shifts the temperature: paper → sage → terracotta → ink.
// Imagery placeholders are honest about what should go there
// ("morning light through gauze", "a stack of receipts, unfussy").

const AT = {
  sand:       '#F4EFE5',
  sandDeep:   '#EDE6D4',
  paper:      '#FBF8F1',
  ink:        '#2B2724',
  inkSoft:    '#3C3633',
  inkMute:    '#5D5751',
  slate:      '#6E6962',
  sage:       '#7D8E7E',
  sageDeep:   '#5E6F5F',
  sageMist:   '#C9D2C7',
  terra:      '#A66D5E',
  terraDeep:  '#8A5749',
  terraMist:  '#DCB3A5',
  rule:       'rgba(43,39,36,0.18)',
  ruleSoft:   'rgba(43,39,36,0.10)',
};

// ---- pieces ----

function ATDisplay({ children, size = 92, italic = false, color = AT.ink, style = {} }) {
  return (
    <h2 style={{
      margin: 0,
      fontFamily: '"Instrument Serif", serif',
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: 400,
      fontSize: size,
      lineHeight: 0.98,
      letterSpacing: '-0.005em',
      color,
      ...style,
    }}>{children}</h2>
  );
}

function ATEyebrow({ children, color = AT.terra, style = {} }) {
  return (
    <span style={{
      fontFamily: 'Inter',
      fontSize: 10,
      letterSpacing: '0.36em',
      textTransform: 'uppercase',
      color,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      ...style,
    }}>
      <span style={{ width: 24, height: 1, background: 'currentColor', opacity: 0.6 }} />
      {children}
    </span>
  );
}

function ATPill({ children, primary, light, dark, onSurface }) {
  const s = {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '15px 30px', borderRadius: 999,
    fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.26em',
    textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer',
    transition: 'all .3s ease', textDecoration: 'none',
    border: '1px solid transparent',
  };
  if (primary)         Object.assign(s, { background: AT.ink, color: AT.paper });
  else if (onSurface)  Object.assign(s, { background: AT.paper, color: AT.ink });
  else if (light)      Object.assign(s, { background: 'transparent', color: AT.paper, borderColor: 'rgba(244,240,232,0.5)' });
  else                 Object.assign(s, { background: 'transparent', color: AT.ink, borderColor: AT.ink });
  return <a style={s}>{children}</a>;
}

// ============================================================
// ATELIER
// ============================================================
function Atelier() {
  return (
    <div style={{ background: AT.sand, color: AT.ink, fontFamily: 'Inter, sans-serif', width: '100%' }}>

      {/* ============= NAV — over hero ============= */}
      <header style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        padding: '32px 64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="assets/logo-alone.png" alt="" style={{ width: 26, height: 30, objectFit: 'contain', opacity: 0.85 }} />
          <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 24, color: AT.ink }}>Calm Tax Co.</span>
        </div>
        <nav style={{ display: 'flex', gap: 40 }}>
          {['Approach', 'Who it’s for', 'How it works', 'Pricing', 'About'].map(l => (
            <a key={l} style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: AT.inkSoft, fontWeight: 500 }}>{l}</a>
          ))}
        </nav>
        <ATPill primary>Begin →</ATPill>
      </header>

      {/* ============= HERO ============= */}
      <section style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 1fr', minHeight: 820 }}>
        {/* Image side */}
        <div style={{ position: 'relative' }}>
          <ImageSlot label="morning light through a gauze curtain — vertical" w="100%" h={820} tone="sand" />
          {/* date marker */}
          <div style={{ position: 'absolute', top: 140, left: 64, color: AT.inkSoft, mixBlendMode: 'multiply' }}>
            <ATEyebrow color={AT.terra}>Established quietly · 2026</ATEyebrow>
          </div>
        </div>

        {/* Text side */}
        <div style={{
          background: AT.paper,
          padding: '180px 80px 80px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative',
        }}>
          <ATEyebrow color={AT.terra}>For your 2025 return</ATEyebrow>
          <ATDisplay size={92} style={{ marginTop: 28, marginBottom: 8 }}>
            Tax prep
          </ATDisplay>
          <ATDisplay size={92} italic style={{ color: AT.sageDeep, marginBottom: 36 }}>
            without the dread.
          </ATDisplay>

          <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 17, lineHeight: 1.7, color: AT.inkMute, fontWeight: 300, maxWidth: 520 }}>
            We handle simple returns with unusual care — by email, on your timeline, year-round.
          </p>
          <p style={{ margin: '20px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: AT.ink, maxWidth: 520, lineHeight: 1.45 }}>
            You bring the documents.<br />We bring the calm.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 56 }}>
            <ATPill primary>See if we’re a fit</ATPill>
            <ATPill>Pricing →</ATPill>
          </div>

          {/* Small marginal mark */}
          <div style={{ position: 'absolute', bottom: 48, right: 80, textAlign: 'right' }}>
            <Fleuron color={AT.terra} size={20} />
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: AT.slate, marginTop: 6 }}>
              by Jennifer, from Arizona
            </div>
          </div>
        </div>
      </section>

      {/* ============= WHAT WE DO — dark sage chapter ============= */}
      <section style={{ background: AT.sageDeep, color: AT.paper, padding: '140px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
            <div>
              <ATEyebrow color={AT.sageMist}>The Approach</ATEyebrow>
              <ATDisplay size={84} color={AT.paper} style={{ marginTop: 28, marginBottom: 8 }}>
                Tax season,
              </ATDisplay>
              <ATDisplay size={84} italic color={AT.terraMist} style={{ marginBottom: 44 }}>
                but quieter.
              </ATDisplay>

              <div style={{ fontFamily: 'Inter', fontWeight: 300, color: 'rgba(244,240,232,0.82)', fontSize: 16, lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Most preparers treat their schedule as the priority and yours as the variable. We do it the other way. Send us your documents when you have them ready — afternoon, midnight, three weeks before the deadline. We review, ask any questions in writing, prepare the return, and walk you through it before we file.
                </p>
                <p style={{ margin: '24px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, color: AT.paper, lineHeight: 1.4 }}>
                  No appointments. No phone tag. No urgency that isn’t yours.
                </p>
                <p style={{ margin: '24px 0 0' }}>
                  We work year-round, which means you can ask a question in July about whether something’s deductible, or get an estimated tax calculation in September, without booking a meeting.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ImageSlot label="a clean wooden desk, in soft morning light" w="100%" h={360} tone="sage" radius={4} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <ImageSlot label="a fountain pen, resting" w="100%" h={200} tone="sage" radius={4} />
                <ImageSlot label="a small plant, leaning slightly" w="100%" h={200} tone="sage" radius={4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= BREATHING WIDGET MOMENT ============= */}
      <section style={{ background: AT.sand, padding: '160px 64px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <ATEyebrow color={AT.terra}>An invitation</ATEyebrow>
          <ATDisplay size={56} italic style={{ marginTop: 28, marginBottom: 48, color: AT.inkSoft }}>
            Before you scroll further,<br />a small breath.
          </ATDisplay>

          {/* Breath visualizer */}
          <div style={{ position: 'relative', width: 380, height: 380, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1px solid ${AT.rule}` }} />
            <div style={{ position: 'absolute', inset: 30, borderRadius: '50%', border: `1px solid ${AT.ruleSoft}` }} />
            <div style={{
              width: 240, height: 240, borderRadius: '50%',
              background: `radial-gradient(circle at 38% 32%, ${AT.sageMist}, ${AT.sage} 80%)`,
              animation: 'atBreath 9s ease-in-out infinite',
              boxShadow: '0 30px 80px -20px rgba(94,111,95,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, color: AT.paper, letterSpacing: '0.02em' }}>breathe</span>
            </div>
          </div>

          <p style={{ margin: '56px auto 0', maxWidth: 480, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.5, color: AT.inkMute }}>
            In for four. Hold for four. Out for six.<br />For as long as feels honest.
          </p>
        </div>
        <style>{`
          @keyframes atBreath {
            0%, 100% { transform: scale(0.88); }
            50% { transform: scale(1.08); }
          }
        `}</style>
      </section>

      {/* ============= WHO IT'S FOR — photo cards ============= */}
      <section style={{ background: AT.paper, padding: '140px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 80 }}>
            <div>
              <ATEyebrow color={AT.terra}>Who we’re built for</ATEyebrow>
              <ATDisplay size={76} style={{ marginTop: 28 }}>
                Four kinds of <I size={76} color={AT.sageDeep}>filer</I>.
              </ATDisplay>
            </div>
            <p style={{ margin: 0, maxWidth: 360, fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: AT.inkMute }}>
              If one of these sounds like you — even a little — there’s a good chance we’re a fit.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
            {COPY.personas.map((p, i) => {
              const labels = [
                'a coffee, growing cold; a 1040 on the screen',
                'an Etsy box, a laptop, a window',
                'a desk shared with a houseplant',
                'a notebook, a calm afternoon',
              ];
              return (
                <article key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <ImageSlot label={labels[i]} w="100%" h={360} tone={i === 1 || i === 3 ? 'sage' : 'sand'} radius={4} />
                  <div style={{ padding: '24px 4px 0' }}>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: AT.terra }}>0{i + 1}.</span>
                    <h4 style={{ margin: '8px 0 14px', fontFamily: '"Instrument Serif", serif', fontSize: 22, color: AT.ink, lineHeight: 1.3 }}>{p.tag}</h4>
                    <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 13.5, lineHeight: 1.7, color: AT.inkMute }}>{p.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= HOW IT WORKS — vertical timeline ============= */}
      <section style={{ background: AT.sandDeep, padding: '140px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 96 }}>
            <ATEyebrow color={AT.terra}>The Method</ATEyebrow>
            <ATDisplay size={88} style={{ marginTop: 28 }}>
              How it <I size={88} color={AT.sageDeep}>unfolds.</I>
            </ATDisplay>
          </div>

          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
            {/* vertical rule */}
            <div style={{ position: 'absolute', left: 60, top: 12, bottom: 12, width: 1, background: AT.rule }} />
            {COPY.steps.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 56, padding: '36px 0', position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: 14, left: 52, width: 16, height: 16, borderRadius: '50%',
                    background: AT.sand, border: `1px solid ${AT.terra}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: AT.terra }} />
                  </div>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 56, color: AT.terra, lineHeight: 1 }}>
                    {s.n}
                  </div>
                </div>
                <div style={{ paddingTop: 6 }}>
                  <h4 style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontSize: 32, color: AT.ink, lineHeight: 1.2 }}>{s.title}</h4>
                  <p style={{ margin: '10px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: AT.inkMute }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ margin: '64px auto 0', maxWidth: 580, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.55, color: AT.inkMute, textAlign: 'center' }}>
            {COPY.stepsFootnote}
          </p>
        </div>
      </section>

      {/* ============= ABOUT JENNIFER — big portrait moment ============= */}
      <section style={{ background: AT.paper, padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 760 }}>
        <div style={{ position: 'relative', background: AT.sandDeep }}>
          <img src="assets/jennifer.png" alt="Jennifer" style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%',
            filter: 'sepia(10%) brightness(1.02)',
          }} />
          {/* corner label */}
          <div style={{ position: 'absolute', top: 32, left: 32, padding: '8px 14px', background: 'rgba(251,248,241,0.85)', backdropFilter: 'blur(4px)' }}>
            <ATEyebrow color={AT.terra}>The practitioner</ATEyebrow>
          </div>
        </div>
        <div style={{ padding: '120px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 20, color: AT.terra, marginBottom: 18 }}>Hello, I’m</span>
          <ATDisplay size={120} italic style={{ marginBottom: 56, color: AT.ink }}>
            Jennifer.
          </ATDisplay>

          <div style={{ fontFamily: 'Inter', fontWeight: 300, color: AT.inkMute, fontSize: 15.5, lineHeight: 1.8, maxWidth: 520 }}>
            <p style={{ margin: 0 }}>{COPY.about.paras[0]}</p>
            <p style={{ margin: '20px 0 0' }}>{COPY.about.paras[1]}</p>
          </div>

          <div style={{ marginTop: 40, padding: '32px 0', borderTop: `1px solid ${AT.rule}`, borderBottom: `1px solid ${AT.rule}`, maxWidth: 520 }}>
            <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 24, lineHeight: 1.45, color: AT.ink }}>
              Filing taxes shouldn’t activate anyone’s stress response, including the preparer’s.
            </p>
          </div>

          <p style={{ margin: '32px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 15.5, lineHeight: 1.8, color: AT.inkMute, maxWidth: 520 }}>
            {COPY.about.paras[2]}
          </p>
        </div>
      </section>

      {/* ============= PRICING — split screen ============= */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', minHeight: 760 }}>
        <div style={{ background: AT.sand, padding: '120px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ATEyebrow color={AT.terra}>Two ways to begin</ATEyebrow>
          <ATDisplay size={92} style={{ marginTop: 28, marginBottom: 8 }}>Pricing,</ATDisplay>
          <ATDisplay size={92} italic color={AT.sageDeep} style={{ marginBottom: 40 }}>plainly stated.</ATDisplay>
          <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 15.5, lineHeight: 1.7, color: AT.inkMute, maxWidth: 460 }}>
            {COPY.pricingNote}
          </p>
          <p style={{ margin: '28px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 20, color: AT.terra, lineHeight: 1.45, maxWidth: 460 }}>
            No surprise invoices. Ever.
          </p>
        </div>

        <div style={{ background: AT.sageDeep, padding: '120px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32, color: AT.paper }}>
          {COPY.pricing.map((p, i) => (
            <div key={i} style={{
              padding: '40px 36px',
              background: 'rgba(244,240,232,0.06)',
              borderRadius: 8,
              border: '1px solid rgba(244,240,232,0.15)',
              backdropFilter: 'blur(2px)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                <h4 style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontSize: 34, color: AT.paper, fontStyle: 'italic' }}>{p.name}</h4>
                <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 44, color: AT.terraMist }}>{p.price}</span>
              </div>
              <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: 'rgba(244,240,232,0.80)' }}>{p.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= NOT THE FIT YET — honest list, sand chapter ============= */}
      <section style={{ background: AT.sand, padding: '140px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 100, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 80 }}>
              <ATEyebrow color={AT.terra}>An honest list</ATEyebrow>
              <ATDisplay size={64} style={{ marginTop: 28, lineHeight: 1.02 }}>
                Who we’re <I size={64} color={AT.terra}>not</I><br />the right fit for —<br /><I size={64} color={AT.sageDeep}>yet.</I>
              </ATDisplay>
              <p style={{ margin: '36px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: AT.inkMute, maxWidth: 420 }}>
                {COPY.notYet.intro}
              </p>
            </div>

            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {COPY.notYet.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 28,
                    padding: '26px 0',
                    borderBottom: `1px solid ${AT.ruleSoft}`,
                  }}>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: AT.terra, minWidth: 36 }}>
                      0{i + 1}.
                    </span>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 24, color: AT.inkSoft, lineHeight: 1.4, flex: 1 }}>
                      {item}
                    </span>
                    <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: AT.slate, fontWeight: 500 }}>
                      we’ll refer →
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ margin: '36px 0 0', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.55, color: AT.inkMute }}>
                {COPY.notYet.outro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= HOW WE OPERATE — trust block ============= */}
      <section style={{ background: AT.paper, padding: '120px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <ATEyebrow color={AT.terra}>How we operate</ATEyebrow>
            <ATDisplay size={64} italic style={{ marginTop: 28, color: AT.sageDeep }}>
              Three commitments.
            </ATDisplay>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {COPY.trust.map((t, i) => (
              <div key={i} style={{
                padding: '40px 36px',
                background: AT.sand,
                borderRadius: 12,
                border: `1px solid ${AT.ruleSoft}`,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1px solid ${AT.terra}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Fleuron color={AT.terra} size={16} />
                </div>
                <h4 style={{ margin: '0 0 14px', fontFamily: '"Instrument Serif", serif', fontSize: 26, color: AT.ink, lineHeight: 1.25 }}>{t.label}</h4>
                <p style={{ margin: 0, fontFamily: 'Inter', fontWeight: 300, fontSize: 14, lineHeight: 1.75, color: AT.inkMute }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= FAQ ============= */}
      <section style={{ background: AT.sandDeep, padding: '140px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <ATEyebrow color={AT.terra}>Common questions</ATEyebrow>
            <ATDisplay size={76} style={{ marginTop: 28 }}>
              You may be <I size={76} color={AT.sageDeep}>wondering.</I>
            </ATDisplay>
          </div>

          <div>
            {COPY.faqs.map((f, i) => (
              <details key={i} open={i < 2} style={{
                padding: '32px 0',
                borderBottom: `1px solid ${AT.rule}`,
              }}>
                <summary style={{
                  listStyle: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 24,
                }}>
                  <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 26, color: AT.ink, lineHeight: 1.3 }}>{f.q}</span>
                  <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 36, color: AT.terra, lineHeight: 0.8 }}>+</span>
                </summary>
                <p style={{ margin: '20px 60px 0 0', fontFamily: 'Inter', fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: AT.inkMute, maxWidth: 720 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CONTACT — terracotta chapter ============= */}
      <section style={{ background: AT.terra, color: AT.paper, padding: '160px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
            <div>
              <ATEyebrow color="rgba(251,248,241,0.7)">Let’s correspond</ATEyebrow>
              <ATDisplay size={112} color={AT.paper} style={{ marginTop: 28, marginBottom: 8 }}>Let’s</ATDisplay>
              <ATDisplay size={112} italic color="rgba(251,248,241,0.9)" style={{ marginBottom: 44 }}>exhale.</ATDisplay>
              <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: 'rgba(251,248,241,0.9)', maxWidth: 480, lineHeight: 1.5 }}>
                We respond within one business day, by email. Most questions get answered the same day.
              </p>
            </div>

            <div style={{
              background: AT.paper,
              padding: '48px 40px',
              borderRadius: 8,
              color: AT.ink,
            }}>
              {[
                { label: 'Your name', placeholder: 'How shall we address you?' },
                { label: 'Email', placeholder: 'where shall we write back?' },
              ].map((f, i) => (
                <div key={i} style={{ marginBottom: 28 }}>
                  <ATEyebrow color={AT.terra}>{f.label}</ATEyebrow>
                  <div style={{ marginTop: 10, paddingBottom: 10, borderBottom: `1px solid ${AT.rule}` }}>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: AT.slate, opacity: 0.55 }}>{f.placeholder}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginBottom: 28 }}>
                <ATEyebrow color={AT.terra}>Service of interest</ATEyebrow>
                <select style={{
                  width: '100%', marginTop: 10, padding: '10px 0',
                  border: 'none', borderBottom: `1px solid ${AT.rule}`,
                  fontFamily: '"Instrument Serif", serif', fontSize: 18, color: AT.ink,
                  background: 'transparent', appearance: 'none', outline: 'none',
                }}>
                  <option>Personal Filing</option>
                  <option>Self-Employed & Gig</option>
                  <option>Not Sure Yet</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginBottom: 36 }}>
                <ATEyebrow color={AT.terra}>A short note</ATEyebrow>
                <div style={{ marginTop: 10, paddingBottom: 64, borderBottom: `1px solid ${AT.rule}` }}>
                  <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, color: AT.slate, opacity: 0.5 }}>tell us a little about your year…</span>
                </div>
              </div>
              <ATPill primary>Send the letter →</ATPill>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FOOTER ============= */}
      <footer style={{ background: AT.ink, color: AT.paper, padding: '80px 64px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <img src="assets/logo-alone.png" alt="" style={{ width: 28, height: 32, objectFit: 'contain', filter: 'invert(1) brightness(1.5)', opacity: 0.85 }} />
                <span style={{ fontFamily: '"Instrument Serif", serif', fontSize: 26 }}>Calm Tax Co.</span>
              </div>
              <p style={{ margin: 0, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, color: 'rgba(244,240,232,0.7)', lineHeight: 1.5, maxWidth: 340 }}>
                A small, careful tax practice.<br />Conducted entirely by correspondence.
              </p>
            </div>
            <div>
              <ATEyebrow color="rgba(244,240,232,0.5)">Address</ATEyebrow>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'rgba(244,240,232,0.85)', lineHeight: 1.8 }}>
                hello@calmtax.co<br />Arizona, U.S.<br />year-round
              </p>
            </div>
            <div>
              <ATEyebrow color="rgba(244,240,232,0.5)">Credentials</ATEyebrow>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'rgba(244,240,232,0.85)', lineHeight: 1.8 }}>
                IRS PTIN holder<br />IRS Authorized E-File Provider<br />Proton-secured
              </p>
            </div>
            <div>
              <ATEyebrow color="rgba(244,240,232,0.5)">Read also</ATEyebrow>
              <p style={{ margin: '14px 0 0', fontFamily: 'Inter', fontSize: 13, fontWeight: 300, color: 'rgba(244,240,232,0.85)', lineHeight: 1.8 }}>
                Privacy notice<br />Terms of engagement<br />Accessibility
              </p>
            </div>
          </div>

          <div style={{ marginTop: 64, paddingTop: 28, borderTop: '1px solid rgba(244,240,232,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(244,240,232,0.55)' }}>
              Set in Instrument Serif &amp; Inter. Year MMXXVI.
            </span>
            <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(244,240,232,0.5)', fontWeight: 500 }}>
              © Calm Tax Co. — all rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.Atelier = Atelier;
