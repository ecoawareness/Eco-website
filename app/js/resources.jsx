/* global React, RESOURCES, Icon, useReveal, useToast */
const { useState: useStateRes } = React;

const SPINE_COLORS = ['#1a5c38', '#1d6d8a', '#c4622d', '#b8902f', '#6b4ea8', '#3c8c4a', '#0d3a22', '#a8203a'];

function LibraryHero() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, padding: 'clamp(1.8rem,3.4vw,2.8rem)',
      background: 'radial-gradient(ellipse 60% 90% at 88% 0%, rgba(196,98,45,0.12), transparent 55%), linear-gradient(135deg,#fbf7ee,#efe6d2)',
      border: '1px solid rgba(107,69,40,0.12)', boxShadow: '0 20px 50px rgba(107,69,40,0.12)' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div className="eyebrow" style={{ color: 'var(--wood)' }}>The Reading Room</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4vw,3.4rem)', lineHeight: 1.04, margin: '0.7rem 0 0.7rem', letterSpacing: '-0.02em' }}>
            Pull up a chair. <em style={{ fontStyle: 'italic', color: 'var(--wood-2)' }}>Read up.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ink-2)', fontWeight: 300, maxWidth: 460, margin: '0 0 1.3rem' }}>
            Playbooks, field guides, climate science and interviews &mdash; everything Qatar&rsquo;s climate generation has learned, shelved and ready when you are.
          </p>
          <div className="searchbox" style={{ maxWidth: 360, background: '#fff', borderColor: 'rgba(107,69,40,0.18)' }} onClick={e => e.currentTarget.querySelector('input').focus()}>
            <Icon i="solar:magnifer-linear" style={{ color: 'var(--wood)' }} /><input placeholder="Search the shelves…" />
          </div>
        </div>
        {/* decorative mini shelf */}
        <div aria-hidden="true" style={{ flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 132 }}>
            {[112, 128, 96, 120, 104, 132, 88].map((h, i) => (
              <div key={i} style={{ width: i % 3 === 0 ? 20 : 15, height: h, borderRadius: '3px 3px 0 0', background: `linear-gradient(180deg,${SPINE_COLORS[i]},${SPINE_COLORS[i]}cc)`, boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.18), inset 2px 0 2px rgba(255,255,255,0.12)' }} />
            ))}
          </div>
          <div style={{ height: 12, borderRadius: 4, marginTop: -2, background: 'linear-gradient(180deg,#8a5a33,#6b4528)', boxShadow: '0 10px 18px rgba(107,69,40,0.34)' }} />
        </div>
      </div>
    </div>
  );
}

function ContinueCard({ r }) {
  return (
    <div className="card card-h" style={{ padding: '1.1rem 1.2rem', display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }}>
      <div style={{ width: 46, height: 60, borderRadius: '4px 7px 7px 4px', flexShrink: 0, background: `linear-gradient(135deg,${r.tone},${r.tone}cc)`, boxShadow: `inset -3px 0 5px rgba(0,0,0,0.2)`, display: 'grid', placeItems: 'center', color: '#fff' }}><Icon i="solar:book-bold" /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.7rem', color: r.tone, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{r.kind} · {r.read}</div>
        <div style={{ fontWeight: 600, fontSize: '0.96rem', margin: '3px 0 0.6rem' }}>{r.title}</div>
        <div style={{ height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.07)', overflow: 'hidden' }}><div style={{ width: r.progress + '%', height: '100%', background: r.tone, borderRadius: 100 }} /></div>
      </div>
      <div style={{ fontSize: '0.78rem', color: 'var(--ink-3)', fontWeight: 600 }}>{r.progress}%</div>
    </div>
  );
}

function FeaturedLongRead({ r }) {
  return (
    <div className="card card-h feat-grid" style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.1fr 1fr' }} >
      <div style={{ padding: 'clamp(1.4rem,2.5vw,2rem)', display: 'flex', flexDirection: 'column' }}>
        <div className="eyebrow" style={{ color: r.tone }}>Featured {r.kind}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.6vw,2.2rem)', lineHeight: 1.12, margin: '0.7rem 0 0.7rem' }}>{r.title}</h2>
        <p style={{ fontSize: '0.94rem', color: 'var(--ink-2)', fontWeight: 300, lineHeight: 1.65, margin: '0 0 1.3rem' }}>{r.desc}</p>
        <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', marginTop: 'auto' }}>
          <button className="btn btn-green btn-sm"><Icon i="solar:book-bold" /> Start reading</button>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-3)' }}><Icon i="solar:clock-circle-linear" /> {r.read}</span>
        </div>
      </div>
      <div style={{ position: 'relative', background: `linear-gradient(135deg,${r.tone},#08251a)`, display: 'grid', placeItems: 'center', minHeight: 240, overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        {/* big book */}
        <div style={{ width: 120, height: 165, borderRadius: '6px 12px 12px 6px', background: 'linear-gradient(135deg,#fff,#f0ead9)', boxShadow: '0 20px 44px rgba(0,0,0,0.4), inset -6px 0 12px rgba(0,0,0,0.12)', position: 'relative', transform: 'rotate(-6deg)' }}>
          <div style={{ position: 'absolute', left: 12, top: 0, bottom: 0, width: 4, background: r.tone, opacity: 0.4 }} />
          <div style={{ padding: '1.4rem 1rem 1rem 1.4rem' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontStyle: 'italic', color: r.tone }}>EA</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', color: 'var(--ink-2)', marginTop: '2.5rem', lineHeight: 1.2 }}>The Field Playbook</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shelf({ shelf }) {
  const ref = useReveal();
  return (
    <div className="reveal" ref={ref} style={{ marginTop: '1.8rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, display: 'grid', placeItems: 'center', background: shelf.tone, color: '#fff', fontSize: '1.1rem' }}><Icon i={shelf.icon} /></div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: 0 }}>{shelf.name}</h3>
        <span className="link" style={{ marginLeft: 'auto', fontSize: '0.82rem', color: shelf.tone, fontWeight: 600, cursor: 'pointer' }}>Browse all <Icon i="solar:arrow-right-linear" /></span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }} className="shelf-grid">
        {shelf.items.map((it, i) => (
          <div key={i} className="card card-h" style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex' }}>
            <div style={{ width: 12, flexShrink: 0, background: `linear-gradient(180deg,${shelf.tone},${shelf.tone}bb)` }} />
            <div style={{ padding: '1rem 1.1rem', flex: 1 }}>
              <div style={{ fontSize: '0.68rem', color: shelf.tone, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{it.read}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.16rem', lineHeight: 1.2, marginTop: 6 }}>{it.t}</div>
            </div>
          </div>
        ))}
      </div>
      <div aria-hidden="true" style={{ height: 10, borderRadius: 4, marginTop: 8, background: 'linear-gradient(180deg,#8a5a33,#6b4528)', boxShadow: '0 12px 20px rgba(107,69,40,0.22)' }} />
    </div>
  );
}

function ResourcesPage() {
  const r1 = useReveal();
  return (
    <div className="page">
      <LibraryHero />

      <div className="section-head" style={{ marginTop: '2rem' }}><h2>Continue reading</h2><span style={{ fontSize: '0.84rem', color: 'var(--ink-3)' }}>picks up where you left off</span></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }} className="ev-grid">
        {RESOURCES.reading.map((r, i) => <ContinueCard key={i} r={r} />)}
      </div>

      <div ref={r1} className="reveal" style={{ marginTop: '1.8rem' }}><FeaturedLongRead r={RESOURCES.featured} /></div>

      <div className="section-head" style={{ marginBottom: 0 }}><h2>The shelves</h2></div>
      {RESOURCES.shelves.map((s, i) => <Shelf key={i} shelf={s} />)}
    </div>
  );
}

window.ResourcesPage = ResourcesPage;
