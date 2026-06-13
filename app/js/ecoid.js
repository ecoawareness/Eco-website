const {
  useState: useStateId
} = React;
function QR({
  size = 64,
  color = '#0a2c1c'
}) {
  const n = 11;
  const cells = [];
  let seed = 7;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const corner = x < 3 && y < 3 || x > n - 4 && y < 3 || x < 3 && y > n - 4;
    if (corner) {
      if (x === 0 || x === n - 1 || y === 0 || y === n - 1 || x > 0 && x < 3 && y > 0 && y < 3 && false) {}
    }
    const on = corner ? (x + y) % 1 === 0 && (x === 0 || y === 0 || x === 2 || y === 2 || x === 1 && y === 1) : rnd() > 0.55;
    if (on) cells.push(React.createElement("rect", {
      key: x + '-' + y,
      x: x,
      y: y,
      width: "1",
      height: "1",
      fill: color
    }));
  }
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${n} ${n}`,
    shapeRendering: "crispEdges"
  }, cells);
}
function EcoIdPage({
  go
}) {
  const toast = useToast();
  const [flip, setFlip] = useStateId(false);
  const r1 = useReveal();
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "section-head",
    style: {
      marginTop: 0
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow"
  }, "Eco ID"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.4rem',
      margin: '0.5rem 0 0'
    }
  }, "Your portable ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green)'
    }
  }, "identity"), "."))), React.createElement("p", {
    style: {
      maxWidth: 520,
      marginTop: '-0.6rem'
    }
  }, "One ID that grows with your work. Verified hours, level and badges \u2014 scannable by any school or organisation. Tap the card to flip it."), React.createElement("div", {
    ref: r1,
    className: "reveal ecoid-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '2rem',
      alignItems: 'start',
      marginTop: '1.6rem'
    }
  }, React.createElement("div", {
    className: "ecoid-wrap",
    style: {
      perspective: 1400
    }
  }, React.createElement("div", {
    onClick: () => setFlip(f => !f),
    style: {
      width: 360,
      height: 224,
      position: 'relative',
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
      transform: flip ? 'rotateY(180deg)' : 'none'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      borderRadius: 20,
      overflow: 'hidden',
      color: '#fff',
      padding: '1.3rem',
      background: 'radial-gradient(ellipse 60% 90% at 100% 0%, rgba(168,224,99,0.28), transparent 55%), linear-gradient(135deg,#0e3f26,#08251a)',
      boxShadow: '0 26px 60px rgba(13,58,34,0.4)'
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-6%',
      bottom: '-30%',
      fontFamily: 'var(--font-arabic)',
      fontSize: '8rem',
      color: 'rgba(255,255,255,0.05)'
    }
  }, "\u0628\u064A\u0626\u0629"), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.45rem',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.05rem'
    }
  }, React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--lime)'
    }
  }), " EcoAwareness"), React.createElement("span", {
    className: "pill pill-lime",
    style: {
      fontSize: '0.6rem',
      padding: '3px 9px'
    }
  }, "VERIFIED")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.9rem',
      marginTop: '1.1rem',
      position: 'relative'
    }
  }, React.createElement(Avatar, {
    size: 56
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: 1.1
    }
  }, USER.name, " Al-Thani"), React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--lime)',
      fontWeight: 600
    }
  }, "Level ", USER.level, " \xB7 ", USER.levelName))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: '1.1rem',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.4rem'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      color: 'var(--lime)',
      lineHeight: 1
    }
  }, USER.hours), React.createElement("div", {
    style: {
      fontSize: '0.58rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Hours")), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      color: 'var(--lime)',
      lineHeight: 1
    }
  }, USER.events), React.createElement("div", {
    style: {
      fontSize: '0.58rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Events")), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      color: 'var(--lime)',
      lineHeight: 1
    }
  }, "#", USER.rank), React.createElement("div", {
    style: {
      fontSize: '0.58rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Rank"))), React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      color: 'rgba(255,255,255,0.4)',
      textAlign: 'right'
    }
  }, "ID \xB7 EA-2547", React.createElement("br", null), "Since ", USER.memberSince))), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      borderRadius: 20,
      overflow: 'hidden',
      padding: '1.3rem',
      background: 'linear-gradient(135deg,#fbf7ee,#efe6d2)',
      border: '1px solid rgba(107,69,40,0.16)',
      boxShadow: '0 26px 60px rgba(13,58,34,0.3)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 12,
      padding: 8,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }
  }, React.createElement(QR, {
    size: 72
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.92rem'
    }
  }, "Scan to verify"), React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--ink-3)',
      lineHeight: 1.5,
      marginTop: 4
    }
  }, "Any school or org can scan this to confirm ", USER.name, "\u2019s ", USER.hours, " verified hours."))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.4rem',
      marginTop: '1rem',
      flexWrap: 'wrap'
    }
  }, ['solar:flag-bold', 'solar:water-bold', 'solar:fire-bold', 'solar:leaf-bold', 'solar:users-group-rounded-bold'].map((ic, i) => React.createElement("div", {
    key: i,
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: 'var(--green)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: '0.95rem'
    }
  }, React.createElement(Icon, {
    i: ic
  })))), React.createElement("div", {
    style: {
      fontSize: '0.64rem',
      color: 'var(--ink-4)',
      marginTop: '0.8rem'
    }
  }, "ecoawareness.me/id/ea-2547"))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      marginTop: '1.2rem',
      width: 360
    }
  }, React.createElement("button", {
    className: "btn btn-green btn-sm",
    style: {
      flex: 1
    },
    onClick: () => toast('Eco ID link copied 🔗', 'solar:link-bold')
  }, React.createElement(Icon, {
    i: "solar:share-linear"
  }), " Share"), React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      flex: 1
    },
    onClick: () => toast('Added to your wallet 🌿', 'solar:wallet-linear')
  }, React.createElement(Icon, {
    i: "solar:wallet-linear"
  }), " Add to wallet"), React.createElement("button", {
    className: "icon-btn",
    style: {
      width: 40,
      height: 40
    },
    onClick: () => setFlip(f => !f),
    "aria-label": "Flip"
  }, React.createElement(Icon, {
    i: "solar:refresh-linear"
  })))), React.createElement("div", null, React.createElement("div", {
    className: "card",
    style: {
      padding: '1.4rem'
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement(Icon, {
    i: "solar:shield-check-bold",
    style: {
      color: 'var(--green)'
    }
  }), " What your Eco ID proves"), [['solar:clock-circle-bold', 'Verified hours', 'Every hour is signed off by the hosting organisation — no self-reporting.'], ['solar:medal-star-bold', 'Level & badges', 'A snapshot of your climate journey that recruiters and schools recognise.'], ['solar:qr-code-bold', 'Instant verification', 'Scannable QR means anyone can confirm authenticity in seconds.']].map(([ic, t, d], i) => React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '0.9rem',
      padding: '0.7rem 0',
      borderTop: i ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(26,92,56,0.1)',
      color: 'var(--green)',
      display: 'grid',
      placeItems: 'center',
      fontSize: '1.1rem',
      flexShrink: 0
    }
  }, React.createElement(Icon, {
    i: ic
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.9rem'
    }
  }, t), React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--ink-3)',
      lineHeight: 1.5
    }
  }, d))))), React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => go('impact'),
    style: {
      marginTop: '1.1rem'
    }
  }, React.createElement(Icon, {
    i: "solar:chart-2-linear"
  }), " See the full impact report"))));
}
window.EcoIdPage = EcoIdPage;