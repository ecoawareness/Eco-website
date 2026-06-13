const {
  useState: useStateImpact,
  useEffect: useEffectImpact,
  useRef: useRefImpact
} = React;
function ImpactHero() {
  const pct = (USER.xp - USER.xpFloor) / (USER.xpNext - USER.xpFloor);
  return React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 24,
      color: '#fff',
      padding: 'clamp(1.6rem,3vw,2.4rem)',
      background: 'radial-gradient(ellipse 50% 70% at 90% 10%, rgba(168,224,99,0.2), transparent 60%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(196,98,45,0.16), transparent 55%), linear-gradient(140deg,#0e3f26,#08251a)',
      boxShadow: '0 26px 60px rgba(13,58,34,0.34)'
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '2%',
      top: '-30%',
      fontFamily: 'var(--font-arabic)',
      fontSize: '16rem',
      color: 'rgba(255,255,255,0.03)'
    }
  }, "\u0623\u062B\u0631"), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 'clamp(1.4rem,3vw,3rem)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement(Ring, {
    size: 160,
    stroke: 13,
    pct: pct,
    color: "var(--lime)",
    track: "rgba(255,255,255,0.1)",
    glow: true
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '3rem',
      lineHeight: 1,
      color: 'var(--lime)'
    }
  }, USER.level), React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Level")), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260
    }
  }, React.createElement("div", {
    className: "eyebrow lime",
    style: {
      color: 'var(--lime)'
    }
  }, "Your story so far"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem,3.6vw,3rem)',
      lineHeight: 1.05,
      margin: '0.7rem 0 0.6rem'
    }
  }, USER.name, ", the ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lime)'
    }
  }, USER.levelName), "."), React.createElement("p", {
    style: {
      fontSize: '0.96rem',
      color: 'rgba(255,255,255,0.66)',
      fontWeight: 300,
      margin: 0,
      maxWidth: 460
    }
  }, USER.xp.toLocaleString(), " XP earned \xB7 ranked ", React.createElement("strong", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, "#", USER.rank), " of ", USER.rankTotal.toLocaleString(), " climate students in Qatar. ", USER.xpNext - USER.xp, " XP to Level ", USER.level + 1, "."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.4rem',
      marginTop: '1.3rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, React.createElement(Icon, {
    i: "solar:fire-bold",
    style: {
      fontSize: '1.5rem',
      color: '#ff9a52'
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      lineHeight: 1
    }
  }, USER.streak), React.createElement("div", {
    style: {
      fontSize: '0.64rem',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "day streak"))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, React.createElement(Icon, {
    i: "solar:medal-ribbons-star-bold",
    style: {
      fontSize: '1.5rem',
      color: 'var(--lime)'
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      lineHeight: 1
    }
  }, "5"), React.createElement("div", {
    style: {
      fontSize: '0.64rem',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "badges"))), React.createElement("button", {
    className: "btn btn-lime btn-sm",
    style: {
      alignSelf: 'center'
    }
  }, React.createElement(Icon, {
    i: "solar:share-bold"
  }), " Share impact card")))));
}
function MetricTile({
  icon,
  tone,
  value,
  decimals,
  suffix,
  label,
  foot
}) {
  const v = useCountUp(value, {
    decimals
  });
  return React.createElement("div", {
    className: "card",
    style: {
      padding: '1.3rem 1.3rem 1.1rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      color: tone,
      fontSize: '1.3rem'
    }
  }, React.createElement(Icon, {
    i: icon
  }), React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 600,
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, label)), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.7rem',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      marginTop: '0.7rem'
    }
  }, v, React.createElement("span", {
    style: {
      fontSize: '1.1rem',
      color: 'var(--ink-3)',
      fontFamily: 'var(--font-body)'
    }
  }, suffix)), React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--ink-3)',
      marginTop: '0.45rem'
    }
  }, foot));
}
function GrowthChart() {
  const ref = useReveal();
  const cum = [];
  HOURS_BY_MONTH.reduce((a, b, i) => {
    const t = b ? a + b : i <= 5 ? a : a;
    cum[i] = a + b;
    return a + b;
  }, 0);
  const data = cum.slice(0, 6);
  const w = 680,
    h = 220,
    pad = 8;
  const max = Math.max(...data, 1);
  const pts = data.map((d, i) => [pad + i / (data.length - 1) * (w - pad * 2), h - pad - d / max * (h - pad * 2 - 14)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = line + ` L${w - pad} ${h - pad} L${pad} ${h - pad} Z`;
  return React.createElement("div", {
    className: "card reveal",
    ref: ref,
    style: {
      padding: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '0.4rem'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow green"
  }, "Verified hours \xB7 cumulative"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.9rem',
      marginTop: 6
    }
  }, "A steady climb to ", Math.max(...data), " hours")), React.createElement("span", {
    className: "pill pill-lime"
  }, React.createElement(Icon, {
    i: "solar:arrow-right-up-linear"
  }), " on track for 150+")), React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      marginTop: '0.6rem'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "garea",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "var(--green)",
    stopOpacity: "0.28"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "var(--green)",
    stopOpacity: "0.02"
  }))), [0.25, 0.5, 0.75].map(g => React.createElement("line", {
    key: g,
    x1: pad,
    x2: w - pad,
    y1: pad + g * (h - pad * 2),
    y2: pad + g * (h - pad * 2),
    stroke: "rgba(0,0,0,0.05)",
    strokeWidth: "1"
  })), React.createElement("path", {
    className: "ga-area",
    d: area,
    fill: "url(#garea)"
  }), React.createElement("path", {
    className: "ga-line",
    d: line,
    fill: "none",
    stroke: "var(--green)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((p, i) => React.createElement("circle", {
    key: i,
    className: "ga-dot",
    cx: p[0],
    cy: p[1],
    r: i === pts.length - 1 ? 6 : 4,
    fill: i === pts.length - 1 ? 'var(--lime)' : '#fff',
    stroke: "var(--green)",
    strokeWidth: "2.5",
    style: {
      animationDelay: 0.6 + i * 0.12 + 's'
    }
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '0.4rem',
      padding: '0 4px'
    }
  }, MONTHS.slice(0, 6).map(m => React.createElement("span", {
    key: m,
    style: {
      fontSize: '0.7rem',
      color: 'var(--ink-4)',
      fontWeight: 600
    }
  }, m))));
}
function BadgeCard({
  b
}) {
  const p = b.earned ? 1 : b.progress / b.goal;
  return React.createElement("div", {
    className: "card card-h",
    style: {
      padding: '1.2rem',
      textAlign: 'center',
      position: 'relative',
      opacity: b.earned ? 1 : 0.96
    }
  }, b.earned && React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      color: b.tone
    }
  }, React.createElement(Icon, {
    i: "solar:verified-check-bold",
    style: {
      fontSize: '1.1rem'
    }
  })), React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      margin: '0 auto 0.8rem',
      borderRadius: 16,
      display: 'grid',
      placeItems: 'center',
      fontSize: '1.8rem',
      background: b.earned ? `linear-gradient(135deg,${b.tone},${b.tone}bb)` : 'rgba(0,0,0,0.05)',
      color: b.earned ? '#fff' : 'var(--ink-4)',
      boxShadow: b.earned ? `0 10px 24px ${b.tone}44` : 'none'
    }
  }, React.createElement(Icon, {
    i: b.earned ? b.icon : 'solar:lock-keyhole-minimalistic-bold'
  })), React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.92rem'
    }
  }, b.name), React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--ink-3)',
      marginTop: 4,
      lineHeight: 1.4,
      minHeight: 32
    }
  }, b.desc), !b.earned && React.createElement("div", {
    style: {
      marginTop: '0.7rem'
    }
  }, React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 100,
      background: 'rgba(0,0,0,0.07)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: p * 100 + '%',
      height: '100%',
      background: b.tone,
      borderRadius: 100
    }
  })), React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      color: 'var(--ink-4)',
      marginTop: 5,
      fontWeight: 600
    }
  }, b.progress, " / ", b.goal)));
}
function YearTimeline() {
  return React.createElement("div", {
    className: "rail",
    style: {
      marginTop: '1.1rem'
    }
  }, TIMELINE.map((t, i) => React.createElement("div", {
    key: i,
    style: {
      width: 230,
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.7rem'
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      display: 'grid',
      placeItems: 'center',
      background: t.tone,
      color: '#fff',
      fontSize: '1.1rem',
      flexShrink: 0
    }
  }, React.createElement(Icon, {
    i: t.icon
  })), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.5rem',
      color: t.tone
    }
  }, t.m), i < TIMELINE.length - 1 && React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: 'linear-gradient(90deg,rgba(0,0,0,0.12),transparent)'
    }
  })), React.createElement("div", {
    className: "card",
    style: {
      padding: '1rem 1.1rem'
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.92rem'
    }
  }, t.title), React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--ink-3)',
      marginTop: 5,
      lineHeight: 1.5
    }
  }, t.desc)))));
}
const LEADERS = [{
  r: 5,
  n: 'Noor K.',
  h: 94,
  you: false
}, {
  r: 6,
  n: 'Yousef M.',
  h: 89,
  you: false
}, {
  r: 7,
  n: 'You',
  h: 86,
  you: true
}, {
  r: 8,
  n: 'Layla H.',
  h: 81,
  you: false
}, {
  r: 9,
  n: 'Omar S.',
  h: 78,
  you: false
}];
function Leaderboard() {
  return React.createElement("div", {
    className: "card",
    style: {
      padding: '1.4rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    }
  }, React.createElement(Icon, {
    i: "solar:ranking-bold",
    style: {
      color: 'var(--rust)',
      fontSize: '1.3rem'
    }
  }), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem'
    }
  }, "Qatar leaderboard")), LEADERS.map(l => React.createElement("div", {
    key: l.r,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.65rem 0.7rem',
      borderRadius: 12,
      marginBottom: 4,
      background: l.you ? 'linear-gradient(100deg,rgba(168,224,99,0.18),rgba(168,224,99,0.05))' : 'transparent',
      border: l.you ? '1px solid rgba(168,224,99,0.4)' : '1px solid transparent'
    }
  }, React.createElement("div", {
    style: {
      width: 26,
      fontFamily: 'var(--font-display)',
      fontSize: '1.1rem',
      color: l.you ? 'var(--green)' : 'var(--ink-4)',
      textAlign: 'center'
    }
  }, l.r), React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: l.you ? 'linear-gradient(135deg,#247a4a,#0d3a22)' : 'rgba(0,0,0,0.07)',
      color: l.you ? '#eafadd' : 'var(--ink-3)',
      display: 'grid',
      placeItems: 'center',
      fontSize: '0.72rem',
      fontWeight: 700
    }
  }, l.n[0]), React.createElement("div", {
    style: {
      flex: 1,
      fontSize: '0.88rem',
      fontWeight: l.you ? 700 : 500
    }
  }, l.n, l.you && React.createElement("span", {
    className: "pill pill-lime",
    style: {
      marginLeft: 8,
      fontSize: '0.6rem',
      padding: '2px 8px'
    }
  }, "YOU")), React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.9rem',
      color: l.you ? 'var(--green)' : 'var(--ink-2)'
    }
  }, l.h, React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--ink-4)',
      fontWeight: 500
    }
  }, " hrs")))), React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--ink-3)',
      textAlign: 'center',
      marginTop: '0.7rem'
    }
  }, "8 more verified hours to overtake ", React.createElement("strong", null, "Yousef M.")));
}
function ImpactPage() {
  const r1 = useReveal(),
    r2 = useReveal();
  return React.createElement("div", {
    className: "page"
  }, React.createElement(ImpactHero, null), React.createElement("div", {
    className: "stat-grid",
    style: {
      marginTop: '1.3rem',
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, React.createElement(MetricTile, {
    icon: "solar:clock-circle-bold",
    tone: "#1a5c38",
    value: 86,
    label: "Hours",
    foot: "verified & signed off"
  }), React.createElement(MetricTile, {
    icon: "solar:cloud-bold",
    tone: "#1d6d8a",
    value: 1.9,
    decimals: 1,
    suffix: "t",
    label: "CO\u2082 offset",
    foot: "estimated this year"
  }), React.createElement(MetricTile, {
    icon: "solar:leaf-bold",
    tone: "#3c8c4a",
    value: 42,
    label: "Trees",
    foot: "planted with your crews"
  }), React.createElement(MetricTile, {
    icon: "solar:calendar-bold",
    tone: "#c4622d",
    value: 19,
    label: "Events",
    foot: "across 8 organisations"
  })), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)',
      gap: '1.4rem',
      marginTop: '1.4rem'
    },
    className: "dash-cols"
  }, React.createElement(GrowthChart, null), React.createElement(Leaderboard, null)), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", null, "Badges & achievements"), React.createElement("span", {
    style: {
      fontSize: '0.84rem',
      color: 'var(--ink-3)'
    }
  }, "5 of 8 earned")), React.createElement("div", {
    ref: r1,
    className: "reveal impact-badges",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '1.1rem'
    }
  }, BADGES.map(b => React.createElement(BadgeCard, {
    key: b.id,
    b: b
  }))), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", null, "Your year in review"), React.createElement("span", {
    style: {
      fontSize: '0.84rem',
      color: 'var(--ink-3)'
    }
  }, "scroll \u2192")), React.createElement("div", {
    ref: r2,
    className: "reveal"
  }, React.createElement(YearTimeline, null)));
}
window.ImpactPage = ImpactPage;