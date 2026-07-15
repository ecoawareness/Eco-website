/* global React, USER, Icon, Avatar, useReveal, useToast */
const { useState: useStateProf } = React;

function ProfilePage({ go }) {
  const toast = useToast();
  const [edit, setEdit] = useStateProf(false);
  const [bio, setBio] = useStateProf(USER.bio);
  const [lang, setLang] = useStateProf('EN');
  const r1 = useReveal();
  const save = () => { setEdit(false); toast('Profile updated 🌿', 'solar:check-circle-bold'); };

  return (
    <div className="page">
      {/* cover header */}
      <div style={{ position: 'relative', borderRadius: '22px 22px 0 0', height: 150, overflow: 'hidden',
        background: 'radial-gradient(ellipse 50% 120% at 80% 0%, rgba(168,224,99,0.22), transparent 60%), linear-gradient(135deg,#0e3f26,#0a2c1c)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.3) 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>
      <div className="card" style={{ borderRadius: '0 0 22px 22px', padding: '1.2rem clamp(1.2rem,3vw,2rem) 1.6rem', marginTop: 0, boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ marginTop: -78, borderRadius: '50%', border: '4px solid #fff', background: '#fff', flexShrink: 0, lineHeight: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}><Avatar size={104} /></div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', margin: '0 0 6px' }}>{USER.name} Al-Thani</h1>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="pill pill-lime"><Icon i="solar:medal-star-bold" /> Level {USER.level} · {USER.levelName}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--ink-3)' }}>{USER.school}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button className="btn btn-ghost btn-sm" onClick={() => go('ecoid')}><Icon i="solar:cardholder-linear" /> Eco ID</button>
            <button className={'btn btn-sm ' + (edit ? 'btn-green' : 'btn-ghost')} onClick={() => edit ? save() : setEdit(true)}>
              <Icon i={edit ? 'solar:diskette-linear' : 'solar:pen-linear'} /> {edit ? 'Save' : 'Edit profile'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)', gap: '1.4rem', marginTop: '1.4rem' }} className="dash-cols">
        <div ref={r1} className="reveal">
          <div className="card" style={{ padding: '1.4rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.7rem' }}>About</div>
            {edit
              ? <textarea value={bio} onChange={e => setBio(e.target.value)} rows={4} style={{ width: '100%', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 14, padding: '0.8rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', resize: 'vertical', outline: 'none', background: 'var(--paper)' }} />
              : <p style={{ margin: 0, lineHeight: 1.7 }}>{bio}</p>}
          </div>

          <div className="card" style={{ padding: '1.4rem', marginTop: '1.1rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.9rem' }}>Interests</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {USER.interests.map(t => <span key={t} className="pill pill-line" style={{ padding: '0.45rem 1rem' }}><Icon i="solar:leaf-linear" style={{ color: 'var(--green)' }} /> {t}</span>)}
              {edit && <span className="pill" style={{ padding: '0.45rem 1rem', border: '1px dashed rgba(0,0,0,0.2)', color: 'var(--ink-3)', cursor: 'pointer' }}><Icon i="solar:add-circle-linear" /> Add</span>}
            </div>
          </div>

          <div className="card" style={{ padding: '1.4rem', marginTop: '1.1rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.9rem' }}>Settings</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0' }}>
              <div><div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Language</div><div style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>Arabic-first when you need it</div></div>
              <div style={{ display: 'inline-flex', padding: 3, borderRadius: 100, background: 'var(--paper)', border: '1px solid rgba(0,0,0,0.08)' }}>
                {['EN', 'ع'].map(l => <button key={l} onClick={() => setLang(l)} style={{ padding: '0.35rem 0.9rem', borderRadius: 100, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem', background: lang === l ? 'var(--green)' : 'transparent', color: lang === l ? '#fff' : 'var(--ink-3)' }}>{l}</button>)}
              </div>
            </div>
            {[['Email notifications', 'New opportunities from orgs you follow', true], ['Public Eco ID', 'Let schools verify your hours via QR', true], ['Weekly impact digest', 'A recap of your action every Sunday', false]].map(([t, s, on], i) => (
              <Toggle key={i} title={t} sub={s} on={on} />
            ))}
          </div>
        </div>

        <div>
          <div className="card" style={{ padding: '1.4rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '1rem' }}>At a glance</div>
            {[['solar:clock-circle-bold', '#1a5c38', USER.hours + ' hrs', 'Verified'], ['solar:calendar-bold', '#c4622d', USER.events, 'Events'], ['solar:users-group-rounded-bold', '#6b4ea8', USER.orgs, 'Orgs'], ['solar:medal-ribbons-star-bold', '#b8902f', '0', 'Badges']].map(([ic, c, val, lab], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 0', borderTop: i ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, display: 'grid', placeItems: 'center', background: c + '18', color: c, fontSize: '1.1rem' }}><Icon i={ic} /></div>
                <div style={{ flex: 1, fontSize: '0.86rem', color: 'var(--ink-3)' }}>{lab}</div>
                <div style={{ fontWeight: 700 }}>{val}</div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: '1.4rem', marginTop: '1.1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.84rem', color: 'var(--ink-3)' }}><Icon i="solar:calendar-mark-linear" /> Member since {USER.memberSince}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.84rem', color: 'var(--ink-3)', marginTop: '0.6rem' }}><Icon i="solar:letter-linear" /> {USER.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ title, sub, on }) {
  const [v, setV] = useStateProf(on);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div><div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{title}</div><div style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>{sub}</div></div>
      <button onClick={() => setV(x => !x)} style={{ width: 44, height: 26, borderRadius: 100, border: 'none', cursor: 'pointer', position: 'relative', background: v ? 'var(--green)' : 'rgba(0,0,0,0.15)', transition: 'background 0.2s', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: v ? 21 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.3)' }} />
      </button>
    </div>
  );
}

window.ProfilePage = ProfilePage;
