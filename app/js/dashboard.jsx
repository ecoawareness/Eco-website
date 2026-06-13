/* global React, USER, EVENTS, HOURS_BY_MONTH, MONTHS, Icon, Avatar, Ring, Sparkline, useCountUp, useReveal, useToast */
const { useState: useStateDash } = React;

function MomentumHero({ go }) {
  const pct = (USER.xp - USER.xpFloor) / (USER.xpNext - USER.xpFloor);
  const toGo = USER.xpNext - USER.xp;
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 22, color: '#fff', padding: 'clamp(1.4rem,2.6vw,2rem)',
      background: 'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(168,224,99,0.18), transparent 60%), linear-gradient(135deg,#0e3f26,#0a2c1c)',
      boxShadow: '0 22px 50px rgba(13,58,34,0.3)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', right: '-4%', bottom: '-30%', fontFamily: 'var(--font-arabic)', fontSize: '12rem', color: 'rgba(255,255,255,0.03)' }}>بيئة</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.2rem,3vw,2.6rem)', flexWrap: 'wrap', position: 'relative' }}>
        <Ring size={132} stroke={12} pct={pct} color="var(--lime)" track="rgba(255,255,255,0.12)" glow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', lineHeight: 1, color: 'var(--lime)' }}>L{USER.level}</div>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>Level</div>
        </Ring>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '0.6rem' }}>
            <Icon i="solar:medal-star-bold" /> {USER.levelName}
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.6vw,2.2rem)', margin: '0 0 0.4rem', lineHeight: 1.1 }}>
            You&rsquo;re <em style={{ fontStyle: 'italic', color: 'var(--lime)' }}>{toGo} XP</em> from Level {USER.level + 1}.
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.62)', fontWeight: 300, margin: '0 0 1rem', maxWidth: 440 }}>
            Keep the streak alive &mdash; one more verified event this week unlocks the <strong style={{ color: '#fff', fontWeight: 600 }}>Century Club</strong> badge.
          </p>
          <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
            <button className="btn btn-lime btn-sm" onClick={() => go('opportunities')}><Icon i="solar:compass-bold" /> Find an event</button>
            <button className="btn btn-sm" onClick={() => go('impact')} style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.16)' }}>View my impact</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1rem', borderRadius: 14, background: 'rgba(196,98,45,0.16)', border: '1px solid rgba(196,98,45,0.3)' }}>
            <Icon i="solar:fire-bold" style={{ fontSize: '1.6rem', color: '#ff9a52' }} />
            <div><div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1 }}>{USER.streak} days</div><div style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.6)' }}>Action streak</div></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem 1rem', borderRadius: 14, background: 'rgba(168,224,99,0.12)', border: '1px solid rgba(168,224,99,0.26)' }}>
            <Icon i="solar:ranking-bold" style={{ fontSize: '1.6rem', color: 'var(--lime)' }} />
            <div><div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1 }}>#{USER.rank}</div><div style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.6)' }}>in Qatar</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, tone, bg, value, decimals, suffix, label, trend, spark }) {
  const v = useCountUp(value, { decimals });
  return (
    <div className="stat">
      <div className="ic" style={{ background: bg, color: tone }}><Icon i={icon} /></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div className="val">{v}{suffix}</div>
        {spark && <Sparkline data={spark} color={tone} w={74} h={30} />}
      </div>
      <div className="lab">{label}</div>
      {trend && <div className="sub" style={{ color: tone }}><Icon i="solar:arrow-right-up-linear" /> {trend}</div>}
      <div className="barline" style={{ background: tone }}></div>
    </div>
  );
}

function EventCard({ e, go }) {
  const toneMap = { green: 'var(--green)', lime: '#3c8c4a', rust: 'var(--rust)' };
  const c = toneMap[e.tone] || 'var(--green)';
  return (
    <div className="card card-h" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 120, position: 'relative', background: e.img ? `linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,0.45)), url(${e.img}) center/cover` : `linear-gradient(135deg,${c},${c}cc)` }}>
        {!e.img && <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />}
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.92)', borderRadius: 10, padding: '4px 10px', textAlign: 'center', fontWeight: 700, lineHeight: 1 }}>
          <div style={{ fontSize: '0.62rem', color: c, letterSpacing: '0.08em' }}>{e.date.split(' ')[0]}</div>
          <div style={{ fontSize: '1.1rem', color: 'var(--ink)' }}>{e.date.split(' ')[1]}</div>
        </div>
        <span className="pill" style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(10,10,10,0.4)', color: '#fff', backdropFilter: 'blur(6px)' }}>{e.cat}</span>
      </div>
      <div style={{ padding: '1rem 1.1rem 1.1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '0.74rem', color: c, fontWeight: 600, marginBottom: 4 }}>{e.org}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', margin: '0 0 0.7rem', lineHeight: 1.2 }}>{e.title}</h3>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--ink-3)', marginTop: 'auto' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon i="solar:map-point-linear" /> {e.loc}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon i="solar:clock-circle-linear" /> {e.hours}h</span>
        </div>
      </div>
    </div>
  );
}

function HoursChart() {
  const max = Math.max(...HOURS_BY_MONTH);
  const total = HOURS_BY_MONTH.reduce((a, b) => a + b, 0);
  const t = useCountUp(total);
  const cur = 5; // current month index (Jun)
  return (
    <div className="card" style={{ padding: '1.4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div><div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', lineHeight: 1 }}>{t}<span style={{ fontSize: '0.9rem', color: 'var(--ink-3)', fontFamily: 'var(--font-body)' }}> hrs</span></div>
          <div style={{ fontSize: '0.78rem', color: 'var(--ink-3)', marginTop: 4 }}>Verified this year</div></div>
        <span className="pill pill-lime"><Icon i="solar:arrow-right-up-linear" /> +28%</span>
      </div>
      <div className="barchart" style={{ marginTop: '1.3rem' }}>
        {HOURS_BY_MONTH.map((h, i) => (
          <div key={i} className={'bar ' + (h === 0 ? 'dim' : i === cur ? 'hi' : '')} style={{ height: (h === 0 ? 4 : Math.max(8, (h / max) * 100)) + '%' }} title={`${MONTHS[i]}: ${h}h`} />
        ))}
      </div>
      <div className="barlabels">{MONTHS.map(m => <span key={m}>{m[0]}</span>)}</div>
    </div>
  );
}

const ACTIVITY = [
  { icon: 'solar:check-circle-bold', tone: '#1a5c38', t: 'Verified 5 hours', s: 'Beach Cleanup — Fuwairit · Earthna', time: '2d' },
  { icon: 'solar:medal-star-bold', tone: '#b8902f', t: 'Reached Level 4', s: 'Field Steward unlocked', time: '4d' },
  { icon: 'solar:users-group-rounded-bold', tone: '#6b4ea8', t: 'Connected with QKONs', s: 'Now following 8 orgs', time: '1w' },
  { icon: 'solar:leaf-bold', tone: '#3c8c4a', t: 'Earned Tree Hugger badge', s: 'Planted 25+ trees', time: '2w' },
];

function QuickAction({ icon, tone, bg, title, sub, onClick }) {
  return (
    <button className="card card-h" onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', padding: '1.1rem 1.2rem', textAlign: 'left', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, display: 'grid', placeItems: 'center', background: bg, color: tone, fontSize: '1.3rem', flexShrink: 0 }}><Icon i={icon} /></div>
      <div><div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{title}</div><div style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>{sub}</div></div>
      <Icon i="solar:alt-arrow-right-linear" style={{ marginLeft: 'auto', color: 'var(--ink-4)' }} />
    </button>
  );
}

function DashboardPage({ go }) {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  return (
    <div className="page">
      <MomentumHero go={go} />

      <div className="stat-grid reveal" ref={r1} style={{ marginTop: '1.3rem' }}>
        <StatCard icon="solar:clock-circle-bold" tone="#1a5c38" bg="rgba(26,92,56,0.1)" value={86} suffix="" label="Verified hours" trend="+18 this month" spark={[4,6,9,11,14,18]} />
        <StatCard icon="solar:leaf-bold" tone="#3c8c4a" bg="rgba(60,140,74,0.12)" value={19} label="Events attended" trend="+3 this month" spark={[2,3,3,4,4,3]} />
        <StatCard icon="solar:users-group-rounded-bold" tone="#c4622d" bg="rgba(196,98,45,0.1)" value={8} label="Orgs connected" trend="+1 this week" spark={[3,4,5,6,7,8]} />
        <StatCard icon="solar:bookmark-bold" tone="#6b4ea8" bg="rgba(107,78,168,0.1)" value={4} label="Open applications" trend="2 in review" spark={[1,2,2,3,4,4]} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.55fr) minmax(0,1fr)', gap: '1.6rem', marginTop: '0.6rem' }} className="dash-cols">
        <div ref={r2} className="reveal">
          <div className="section-head" style={{ marginTop: '1.8rem' }}>
            <h2>Upcoming events</h2>
            <span className="link" onClick={() => go('events')}>View all <Icon i="solar:arrow-right-linear" /></span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }} className="ev-grid">
            {EVENTS.slice(0, 2).map(e => <EventCard key={e.id} e={e} go={go} />)}
          </div>

          <div className="section-head"><h2>Quick actions</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="ev-grid">
            <QuickAction icon="solar:compass-bold" tone="#1a5c38" bg="rgba(26,92,56,0.1)" title="Browse opportunities" sub="Volunteer events & more" onClick={() => go('opportunities')} />
            <QuickAction icon="solar:book-2-bold" tone="#b8902f" bg="rgba(184,144,47,0.12)" title="Visit the library" sub="Playbooks, guides & interviews" onClick={() => go('resources')} />
            <QuickAction icon="solar:cardholder-bold" tone="#1d6d8a" bg="rgba(29,109,138,0.1)" title="Open your Eco ID" sub="Share your verified profile" onClick={() => go('ecoid')} />
            <QuickAction icon="solar:chat-round-dots-bold" tone="#6b4ea8" bg="rgba(107,78,168,0.1)" title="Ask EcoBot" sub="Your climate-action guide" onClick={() => go('ecobot')} />
          </div>
        </div>

        <div ref={r3} className="reveal">
          <div className="section-head" style={{ marginTop: '1.8rem' }}><h2>This year</h2><span className="link" onClick={() => go('impact')}>Impact <Icon i="solar:arrow-right-linear" /></span></div>
          <HoursChart />

          <div className="card" style={{ padding: '1.3rem', marginTop: '1.1rem' }}>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon i="solar:history-bold" style={{ color: 'var(--green)' }} /> Recent activity</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              {ACTIVITY.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', padding: '0.6rem 0', borderTop: i ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, display: 'grid', placeItems: 'center', background: a.tone + '18', color: a.tone, fontSize: '1rem', flexShrink: 0 }}><Icon i={a.icon} /></div>
                  <div style={{ flex: 1 }}><div style={{ fontSize: '0.86rem', fontWeight: 600 }}>{a.t}</div><div style={{ fontSize: '0.76rem', color: 'var(--ink-3)' }}>{a.s}</div></div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--ink-4)' }}>{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.DashboardPage = DashboardPage;
