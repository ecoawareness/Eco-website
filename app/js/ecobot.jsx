/* global React, USER, Icon, useToast */
const { useState: useStateBot, useRef: useRefBot, useEffect: useEffectBot } = React;

const SUGGESTIONS = [
  { icon: 'solar:compass-bold', t: 'Find me a weekend cleanup' },
  { icon: 'solar:hourglass-bold', t: 'How do I log verified hours?' },
  { icon: 'solar:leaf-bold', t: 'Ideas to start a green club' },
  { icon: 'solar:document-text-bold', t: 'Export my impact report' },
];

const PERSONA = `You are EcoBot, the friendly climate-action guide inside EcoAwareness — Qatar's youth-led climate platform. You help students find volunteer opportunities, understand verified hours, build their Eco ID, and take real climate action in Qatar. Be warm, concise, and encouraging. Use occasional 🌿. Keep replies under 90 words. The student you're helping is ${USER.name}, Level ${USER.level} (${USER.levelName}), with ${USER.hours} verified hours.`;

const FALLBACKS = {
  default: "I'm here to help you take climate action in Qatar 🌿 Ask me about opportunities, verified hours, your Eco ID, or starting a green initiative at your school.",
};

function Bubble({ m }) {
  const bot = m.role === 'bot';
  return (
    <div style={{ display: 'flex', gap: '0.7rem', flexDirection: bot ? 'row' : 'row-reverse', alignItems: 'flex-end' }}>
      {bot && <div style={{ width: 34, height: 34, borderRadius: 10, flexShrink: 0, background: 'linear-gradient(135deg,#247a4a,#0d3a22)', color: 'var(--lime)', display: 'grid', placeItems: 'center', fontSize: '1.1rem' }}><Icon i="solar:leaf-bold" /></div>}
      <div style={{ maxWidth: '74%', padding: '0.8rem 1.1rem', borderRadius: bot ? '4px 16px 16px 16px' : '16px 4px 16px 16px', lineHeight: 1.55, fontSize: '0.92rem',
        background: bot ? '#fff' : 'var(--green)', color: bot ? 'var(--ink)' : '#fff', border: bot ? '1px solid rgba(0,0,0,0.06)' : 'none', boxShadow: bot ? 'var(--shadow-md)' : '0 6px 18px rgba(26,92,56,0.22)', whiteSpace: 'pre-wrap' }}>{m.text}</div>
    </div>
  );
}

function EcoBotPage() {
  const [msgs, setMsgs] = useStateBot([{ role: 'bot', text: `Hey ${USER.name} 🌿 I'm EcoBot — your climate-action guide. You're ${USER.xpNext - USER.xp} XP from Level ${USER.level + 1}! What can I help you with today?` }]);
  const [input, setInput] = useStateBot('');
  const [busy, setBusy] = useStateBot(false);
  const scroller = useRefBot(null);

  useEffectBot(() => { if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight; }, [msgs, busy]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || busy) return;
    setInput('');
    setMsgs(m => [...m, { role: 'user', text: q }]);
    setBusy(true);
    let reply = '';
    try {
      if (window.claude && window.claude.complete) {
        const history = msgs.slice(-6).map(m => (m.role === 'bot' ? 'EcoBot' : 'Student') + ': ' + m.text).join('\n');
        reply = await window.claude.complete(`${PERSONA}\n\nConversation so far:\n${history}\nStudent: ${q}\nEcoBot:`);
      }
    } catch (e) { reply = ''; }
    if (!reply) reply = FALLBACKS.default;
    setMsgs(m => [...m, { role: 'bot', text: reply.trim() }]);
    setBusy(false);
  };

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 86px)', paddingBottom: '1.2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
        <div style={{ width: 46, height: 46, borderRadius: 13, background: 'linear-gradient(135deg,#247a4a,#0d3a22)', color: 'var(--lime)', display: 'grid', placeItems: 'center', fontSize: '1.5rem' }}><Icon i="solar:chat-round-dots-bold" /></div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', lineHeight: 1 }}>EcoBot</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3c8c4a' }}></span> Online · your climate-action guide</div>
        </div>
        <span className="pill pill-lime" style={{ marginLeft: 'auto' }}>AI</span>
      </div>

      <div ref={scroller} className="card" style={{ flex: 1, overflowY: 'auto', padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'linear-gradient(180deg,#faf7f0,#f5f0e8)' }}>
        {msgs.map((m, i) => <Bubble key={i} m={m} />)}
        {busy && (
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-end' }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#247a4a,#0d3a22)', color: 'var(--lime)', display: 'grid', placeItems: 'center' }}><Icon i="solar:leaf-bold" /></div>
            <div style={{ padding: '0.9rem 1.1rem', borderRadius: '4px 16px 16px 16px', background: '#fff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: 5 }}>
              {[0, 1, 2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ink-4)', animation: `typing 1.2s ${i * 0.16}s infinite` }} />)}
            </div>
          </div>
        )}
      </div>

      {msgs.length <= 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.9rem' }}>
          {SUGGESTIONS.map(s => (
            <button key={s.t} className="pill" onClick={() => send(s.t)} style={{ cursor: 'pointer', padding: '0.55rem 1rem', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--ink-2)', fontSize: '0.82rem' }}>
              <Icon i={s.icon} style={{ color: 'var(--green)' }} /> {s.t}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.7rem', marginTop: '0.9rem', alignItems: 'center' }}>
        <div className="searchbox" style={{ flex: 1, minWidth: 0, padding: '0.8rem 1.2rem' }} onClick={e => e.currentTarget.querySelector('input').focus()}>
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask EcoBot anything about climate action…" />
        </div>
        <button className="btn btn-green" onClick={() => send()} disabled={busy} style={{ width: 50, padding: 0, height: 48, borderRadius: '50%' }} aria-label="Send"><Icon i="solar:arrow-up-linear" /></button>
      </div>
    </div>
  );
}

window.EcoBotPage = EcoBotPage;
