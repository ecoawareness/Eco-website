/* global React, Icon, useToast, useReveal */
const { useState: useStateCon } = React;

function ContactPage() {
  const toast = useToast();
  const [form, setForm] = useStateCon({ name: '', email: '', topic: 'General', msg: '' });
  const [sent, setSent] = useStateCon(false);
  const r1 = useReveal();
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => {
    if (!form.name || !form.email || !form.msg) { toast('Please fill in all fields', 'solar:danger-circle-bold'); return; }
    setSent(true); toast('Message sent — we\u2019ll be in touch 🌿', 'solar:check-circle-bold');
  };

  const inp = { width: '100%', padding: '0.8rem 1.1rem', borderRadius: 14, border: '1px solid rgba(0,0,0,0.1)', background: 'var(--paper)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none' };

  return (
    <div className="page">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Contact</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', margin: '0.5rem 0 0' }}>Let&rsquo;s <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>talk.</em></h1>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: '1.6rem', marginTop: '0.6rem' }} className="dash-cols">
        <div ref={r1} className="reveal card" style={{ padding: 'clamp(1.4rem,2.6vw,2rem)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(26,92,56,0.1)', color: 'var(--green)', display: 'grid', placeItems: 'center', fontSize: '2rem', margin: '0 auto 1rem' }}><Icon i="solar:check-circle-bold" /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem' }}>Message sent 🌿</div>
              <p style={{ maxWidth: 360, margin: '0.4rem auto 1.2rem' }}>Thanks {form.name.split(' ')[0]} &mdash; the team will reply to {form.email} within a day.</p>
              <button className="btn btn-ghost btn-sm" onClick={() => { setSent(false); setForm({ name: '', email: '', topic: 'General', msg: '' }); }}>Send another</button>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="ev-grid">
                <div><label style={lblStyle}>Your name</label><input style={inp} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Mohammed Al-Thani" /></div>
                <div><label style={lblStyle}>Email</label><input style={inp} value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@example.com" /></div>
              </div>
              <div style={{ marginBottom: '1rem' }}><label style={lblStyle}>Topic</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['General', 'Verify my org', 'Report an issue', 'Partnership'].map(t => (
                    <button key={t} onClick={() => set('topic', t)} className="pill" style={{ cursor: 'pointer', padding: '0.5rem 1rem', fontSize: '0.8rem', background: form.topic === t ? 'var(--green)' : '#fff', color: form.topic === t ? '#fff' : 'var(--ink-2)', border: '1px solid ' + (form.topic === t ? 'var(--green)' : 'rgba(0,0,0,0.12)') }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.2rem' }}><label style={lblStyle}>Message</label><textarea style={{ ...inp, resize: 'vertical' }} rows={5} value={form.msg} onChange={e => set('msg', e.target.value)} placeholder="How can we help?" /></div>
              <button className="btn btn-green" onClick={submit}><Icon i="solar:plain-linear" /> Send message</button>
            </>
          )}
        </div>

        <div>
          <div className="card" style={{ padding: '1.4rem' }}>
            {[['solar:letter-bold', '#1a5c38', 'Email', 'hello@ecoawareness.me'], ['solar:map-point-bold', '#c4622d', 'Find us', 'Education City, Doha'], ['solar:clock-circle-bold', '#b8902f', 'Response time', 'Within 24 hours']].map(([ic, c, t, d], i) => (
              <div key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', padding: '0.7rem 0', borderTop: i ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: c + '18', color: c, display: 'grid', placeItems: 'center', fontSize: '1.15rem' }}><Icon i={ic} /></div>
                <div><div style={{ fontSize: '0.76rem', color: 'var(--ink-3)' }}>{t}</div><div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{d}</div></div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: '1.4rem', marginTop: '1.1rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.8rem' }}>Follow along</div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[['mdi:instagram', '#c4622d'], ['solar:link-circle-bold', '#1a5c38'], ['mdi:linkedin', '#1d6d8a'], ['mdi:youtube', '#a8203a']].map(([ic, c], i) => (
                <button key={i} className="icon-btn" style={{ color: c }} aria-label="Social"><Icon i={ic} /></button>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', margin: '1rem 0 0' }}>Built by youth, for the planet. 🌱</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const lblStyle = { display: 'block', fontSize: '0.7rem', fontWeight: 600, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 0.45rem 0.25rem' };

window.ContactPage = ContactPage;
