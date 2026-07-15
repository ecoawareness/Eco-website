/* global React, ORGS, Icon, useReveal, useToast */
const { useState: useStateNet } = React;

const NET_TABS = ['All', 'Partner', 'Network', 'Club', 'Gov'];

function OrgCard({ o, connected, onConnect }) {
  return (
    <div className="card card-h" style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, overflow: 'hidden', display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem',
          background: o.logo ? `url(${o.logo}) center/cover` : `linear-gradient(135deg,${o.tone},${o.tone}bb)` }}>{!o.logo && o.name[0]}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: '1rem' }}>{o.name}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>{o.type}</div>
        </div>
        <span className="pill" style={{ background: o.tone + '18', color: o.tone, fontSize: '0.66rem' }}>{o.tag}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', margin: '1.1rem 0 1.1rem', fontSize: '0.8rem', color: 'var(--ink-3)' }}>
        <span><Icon i="solar:users-group-rounded-linear" /> {o.members} members</span>
      </div>
      <button className={'btn btn-sm ' + (connected ? 'btn-ghost' : 'btn-green')} onClick={() => onConnect(o)} disabled={connected} style={{ width: '100%' }}>
        {connected ? <><Icon i="solar:check-circle-bold" /> Following</> : <><Icon i="solar:add-circle-linear" /> Connect</>}
      </button>
    </div>
  );
}

function NetworkPage() {
  const toast = useToast();
  const [tab, setTab] = useStateNet('All');
  const [conn, setConn] = useStateNet({});
  const r1 = useReveal();
  const list = tab === 'All' ? ORGS : ORGS.filter(o => o.tag === tab);
  const connect = (o) => { setConn(c => ({ ...c, [o.name]: true })); toast('Now following ' + o.name + ' 🌿', 'solar:check-circle-bold'); };

  return (
    <div className="page">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">The Network</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', margin: '0.5rem 0 0' }}>60+ orgs, clubs &amp; <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>government bodies</em>.</h1>
        </div>
      </div>
      <p style={{ maxWidth: 540, marginTop: '-0.6rem' }}>Connect with the organisations powering climate action in Qatar. Following an org surfaces its opportunities first.</p>

      <div ref={r1} className="reveal" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', margin: '1.4rem 0 1.3rem' }}>
        {NET_TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} className="pill" style={{ cursor: 'pointer', padding: '0.5rem 1.1rem', fontSize: '0.82rem',
            background: tab === t ? 'var(--green)' : '#fff', color: tab === t ? '#fff' : 'var(--ink-2)', border: '1px solid ' + (tab === t ? 'var(--green)' : 'rgba(0,0,0,0.1)') }}>{t}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem' }} className="opp-grid">
        {list.map(o => <OrgCard key={o.name} o={o} connected={conn[o.name]} onConnect={connect} />)}
      </div>
    </div>
  );
}

window.NetworkPage = NetworkPage;
