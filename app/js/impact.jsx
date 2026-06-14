/* global React, USER, MONTHS, HOURS_BY_MONTH, BADGES, TIMELINE, Icon, Ring, useCountUp, useReveal, useToast */
const { useState: useStateImpact, useEffect: useEffectImpact, useRef: useRefImpact } = React;

function ImpactHero() {
  const pct = (USER.xp - USER.xpFloor) / (USER.xpNext - USER.xpFloor);
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, color: '#fff', padding: 'clamp(1.6rem,3vw,2.4rem)',
      background: 'radial-gradient(ellipse 50% 70% at 90% 10%, rgba(168,224,99,0.2), transparent 60%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(196,98,45,0.16), transparent 55%), linear-gradient(140deg,#0e3f26,#08251a)',
      boxShadow: '0 26px 60px rgba(13,58,34,0.34)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', right: '2%', top: '-30%', fontFamily: 'var(--font-arabic)', fontSize: '16rem', color: 'rgba(255,255,255,0.03)' }}>أثر</div>
      <div style={{ position: 'relative', display: 'flex', gap: 'clamp(1.4rem,3vw,3rem)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Ring size={160} stroke={13} pct={pct} color="var(--lime)" track="rgba(255,255,255,0.1)" glow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', lineHeight: 1, color: 'var(--lime)' }}>{USER.level}</div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Level</div>
        </Ring>
        <div style={{ flex: 1, minWidth: 260 }}>
          <div className="eyebrow lime" style={{ color: 'var(--lime)' }}>Your story so far</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.6vw,3rem)', lineHeight: 1.05, margin: '0.7rem 0 0.6rem' }}>
            {USER.name}, the <em style={{ fontStyle: 'italic', color: 'var(--lime)' }}>{USER.levelName}</em>.
          </h1>
          <p style={{ fontSize: '0.96rem', color: 'rgba(255,255,255,0.66)', fontWeight: 300, margin: 0, maxWidth: 460 }}>
            {USER.xp.toLocaleString()} XP earned. {USER.xpNext - USER.xp} XP to reach Level {USER.level + 1}. Log your first verified hour to climb the Qatar leaderboard.
          </p>
          <div style={{ display: 'flex', gap: '1.4rem', marginTop: '1.3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Icon i="solar:fire-bold" style={{ fontSize: '1.5rem', color: '#ff9a52' }} /><div><div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', lineHeight: 1 }}>{USER.streak}</div><div style={{ fontSize: '0.64rem', color: 'rgba(255,255,255,0.55)' }}>day streak</div></div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Icon i="solar:medal-ribbons-star-bold" style={{ fontSize: '1.5rem', color: 'var(--lime)' }} /><div><div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', lineHeight: 1 }}>0</div><div style={{ fontSize: '0.64rem', color: 'rgba(255,255,255,0.55)' }}>badges</div></div></div>
            <button className="btn btn-lime btn-sm" style={{ alignSelf: 'center' }}><Icon i="solar:share-bold" /> Share impact card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricTile({ icon, tone, value, decimals, suffix, label, foot }) {
  const v = useCountUp(value, { decimals });
  return (
    <div className="card" style={{ padding: '1.3rem 1.3rem 1.1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: tone, fontSize: '1.3rem' }}>
        <Icon i={icon} /><span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.7rem', lineHeight: 1, letterSpacing: '-0.02em', marginTop: '0.7rem' }}>{v}<span style={{ fontSize: '1.1rem', color: 'var(--ink-3)', fontFamily: 'var(--font-body)' }}>{suffix}</span></div>
      <div style={{ fontSize: '0.76rem', color: 'var(--ink-3)', marginTop: '0.45rem' }}>{foot}</div>
    </div>
  );
}

// SVG area chart of cumulative hours
function GrowthChart() {
  const ref = useReveal();
  const cum = [];
  HOURS_BY_MONTH.reduce((a, b, i) => { const t = b ? a + b : (i <= 5 ? a : a); cum[i] = a + b; return a + b; }, 0);
  const data = cum.slice(0, 6); // Jan..Jun cumulative
  const w = 680, h = 220, pad = 8;
  const max = Math.max(...data, 1);
  const pts = data.map((d, i) => [pad + (i / (data.length - 1)) * (w - pad * 2), h - pad - (d / max) * (h - pad * 2 - 14)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = line + ` L${w - pad} ${h - pad} L${pad} ${h - pad} Z`;
  return (
    <div className="card reveal" ref={ref} style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
        <div><div className="eyebrow green">Verified hours · cumulative</div><div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', marginTop: 6 }}>No verified hours yet</div></div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto', display: 'block', marginTop: '0.6rem' }}>
        <defs>
          <linearGradient id="garea" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="var(--green)" stopOpacity="0.28" /><stop offset="1" stopColor="var(--green)" stopOpacity="0.02" /></linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map(g => <line key={g} x1={pad} x2={w - pad} y1={pad + g * (h - pad * 2)} y2={pad + g * (h - pad * 2)} stroke="rgba(0,0,0,0.05)" strokeWidth="1" />)}
        <path className="ga-area" d={area} fill="url(#garea)" />
        <path className="ga-line" d={line} fill="none" stroke="var(--green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => <circle key={i} className="ga-dot" cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 6 : 4} fill={i === pts.length - 1 ? 'var(--lime)' : '#fff'} stroke="var(--green)" strokeWidth="2.5" style={{ animationDelay: (0.6 + i * 0.12) + 's' }} />)}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem', padding: '0 4px' }}>
        {MONTHS.slice(0, 6).map(m => <span key={m} style={{ fontSize: '0.7rem', color: 'var(--ink-4)', fontWeight: 600 }}>{m}</span>)}
      </div>
    </div>
  );
}

function BadgeCard({ b }) {
  const p = b.earned ? 1 : (b.progress / b.goal);
  return (
    <div className="card card-h" style={{ padding: '1.2rem', textAlign: 'center', position: 'relative', opacity: b.earned ? 1 : 0.96 }}>
      {b.earned && <span style={{ position: 'absolute', top: 10, right: 10, color: b.tone }}><Icon i="solar:verified-check-bold" style={{ fontSize: '1.1rem' }} /></span>}
      <div style={{ width: 60, height: 60, margin: '0 auto 0.8rem', borderRadius: 16, display: 'grid', placeItems: 'center', fontSize: '1.8rem',
        background: b.earned ? `linear-gradient(135deg,${b.tone},${b.tone}bb)` : 'rgba(0,0,0,0.05)', color: b.earned ? '#fff' : 'var(--ink-4)',
        boxShadow: b.earned ? `0 10px 24px ${b.tone}44` : 'none' }}>
        <Icon i={b.earned ? b.icon : 'solar:lock-keyhole-minimalistic-bold'} />
      </div>
      <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{b.name}</div>
      <div style={{ fontSize: '0.74rem', color: 'var(--ink-3)', marginTop: 4, lineHeight: 1.4, minHeight: 32 }}>{b.desc}</div>
      {!b.earned && (
        <div style={{ marginTop: '0.7rem' }}>
          <div style={{ height: 5, borderRadius: 100, background: 'rgba(0,0,0,0.07)', overflow: 'hidden' }}><div style={{ width: (p * 100) + '%', height: '100%', background: b.tone, borderRadius: 100 }} /></div>
          <div style={{ fontSize: '0.68rem', color: 'var(--ink-4)', marginTop: 5, fontWeight: 600 }}>{b.progress} / {b.goal}</div>
        </div>
      )}
    </div>
  );
}

function YearTimeline() {
  return (
    <div className="rail" style={{ marginTop: '1.1rem' }}>
      {TIMELINE.length === 0 && (
        <div className="card" style={{ padding: '1.2rem 1.4rem', color: 'var(--ink-3)', fontSize: '0.88rem' }}>Your journey starts here — milestones appear as you take action.</div>
      )}
      {TIMELINE.map((t, i) => (
        <div key={i} style={{ width: 230, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, display: 'grid', placeItems: 'center', background: t.tone, color: '#fff', fontSize: '1.1rem', flexShrink: 0 }}><Icon i={t.icon} /></div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.5rem', color: t.tone }}>{t.m}</div>
            {i < TIMELINE.length - 1 && <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg,rgba(0,0,0,0.12),transparent)' }} />}
          </div>
          <div className="card" style={{ padding: '1rem 1.1rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{t.title}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--ink-3)', marginTop: 5, lineHeight: 1.5 }}>{t.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const LEADERS = []; // fresh account — not ranked yet

function Leaderboard() {
  return (
    <div className="card" style={{ padding: '1.4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}><Icon i="solar:ranking-bold" style={{ color: 'var(--rust)', fontSize: '1.3rem' }} /><div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>Qatar leaderboard</div></div>
      {LEADERS.length === 0
        ? <div style={{ fontSize: '0.84rem', color: 'var(--ink-3)', textAlign: 'center', padding: '1.4rem 0' }}>Log your first verified hour to join the Qatar leaderboard.</div>
        : LEADERS.map(l => (
        <div key={l.r} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.65rem 0.7rem', borderRadius: 12, marginBottom: 4,
          background: l.you ? 'linear-gradient(100deg,rgba(168,224,99,0.18),rgba(168,224,99,0.05))' : 'transparent', border: l.you ? '1px solid rgba(168,224,99,0.4)' : '1px solid transparent' }}>
          <div style={{ width: 26, fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: l.you ? 'var(--green)' : 'var(--ink-4)', textAlign: 'center' }}>{l.r}</div>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: l.you ? 'linear-gradient(135deg,#247a4a,#0d3a22)' : 'rgba(0,0,0,0.07)', color: l.you ? '#eafadd' : 'var(--ink-3)', display: 'grid', placeItems: 'center', fontSize: '0.72rem', fontWeight: 700 }}>{l.n[0]}</div>
          <div style={{ flex: 1, fontSize: '0.88rem', fontWeight: l.you ? 700 : 500 }}>{l.n}{l.you && <span className="pill pill-lime" style={{ marginLeft: 8, fontSize: '0.6rem', padding: '2px 8px' }}>YOU</span>}</div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: l.you ? 'var(--green)' : 'var(--ink-2)' }}>{l.h}<span style={{ fontSize: '0.7rem', color: 'var(--ink-4)', fontWeight: 500 }}> hrs</span></div>
        </div>
      ))}
    </div>
  );
}

function ImpactPage() {
  const r1 = useReveal(), r2 = useReveal();
  return (
    <div className="page">
      <ImpactHero />
      <div className="stat-grid" style={{ marginTop: '1.3rem', gridTemplateColumns: 'repeat(4,1fr)' }}>
        <MetricTile icon="solar:clock-circle-bold" tone="#1a5c38" value={0} label="Hours" foot="verified & signed off" />
        <MetricTile icon="solar:cloud-bold" tone="#1d6d8a" value={0} decimals={1} suffix="t" label="CO₂ offset" foot="estimated this year" />
        <MetricTile icon="solar:leaf-bold" tone="#3c8c4a" value={0} label="Trees" foot="planted with your crews" />
        <MetricTile icon="solar:calendar-bold" tone="#c4622d" value={0} label="Events" foot="across 0 organisations" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)', gap: '1.4rem', marginTop: '1.4rem' }} className="dash-cols">
        <GrowthChart />
        <Leaderboard />
      </div>

      <div className="section-head"><h2>Badges &amp; achievements</h2><span style={{ fontSize: '0.84rem', color: 'var(--ink-3)' }}>0 of 8 earned</span></div>
      <div ref={r1} className="reveal impact-badges" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.1rem' }}>
        {BADGES.map(b => <BadgeCard key={b.id} b={b} />)}
      </div>

      <div className="section-head"><h2>Your year in review</h2><span style={{ fontSize: '0.84rem', color: 'var(--ink-3)' }}>scroll →</span></div>
      <div ref={r2} className="reveal"><YearTimeline /></div>
    </div>
  );
}

window.ImpactPage = ImpactPage;
