const {
  useState: useStateDash
} = React;
function MomentumHero({
  go
}) {
  const u = {
    level: 1,
    levelName: 'Newcomer',
    xp: 0,
    xpFloor: 0,
    xpNext: 100,
    streak: 0
  };
  const pct = (u.xp - u.xpFloor) / (u.xpNext - u.xpFloor);
  const toGo = u.xpNext - u.xp;
  return React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 22,
      color: '#fff',
      padding: 'clamp(1.4rem,2.6vw,2rem)',
      background: 'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(168,224,99,0.18), transparent 60%), linear-gradient(135deg,#0e3f26,#0a2c1c)',
      boxShadow: '0 22px 50px rgba(13,58,34,0.3)'
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-4%',
      bottom: '-30%',
      fontFamily: 'var(--font-arabic)',
      fontSize: '12rem',
      color: 'rgba(255,255,255,0.03)'
    }
  }, "\u0628\u064A\u0626\u0629"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(1.2rem,3vw,2.6rem)',
      flexWrap: 'wrap',
      position: 'relative'
    }
  }, React.createElement(Ring, {
    size: 132,
    stroke: 12,
    pct: pct,
    color: "var(--lime)",
    track: "rgba(255,255,255,0.12)",
    glow: true
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.3rem',
      lineHeight: 1,
      color: 'var(--lime)'
    }
  }, "L", u.level), React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
      marginTop: 3
    }
  }, "Level")), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.7rem',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--lime)',
      marginBottom: '0.6rem'
    }
  }, React.createElement(Icon, {
    i: "solar:medal-star-bold"
  }), " ", u.levelName), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,2.6vw,2.2rem)',
      margin: '0 0 0.4rem',
      lineHeight: 1.1
    }
  }, "You\u2019re ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lime)'
    }
  }, toGo, " XP"), " from Level ", u.level + 1, "."), React.createElement("p", {
    style: {
      fontSize: '0.92rem',
      color: 'rgba(255,255,255,0.62)',
      fontWeight: 300,
      margin: '0 0 1rem',
      maxWidth: 440
    }
  }, "Keep the streak alive \u2014 one more verified event this week unlocks the ", React.createElement("strong", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, "Century Club"), " badge."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.7rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn btn-lime btn-sm",
    onClick: () => go('opportunities')
  }, React.createElement(Icon, {
    i: "solar:compass-bold"
  }), " Find an event"), React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => go('impact'),
    style: {
      background: 'rgba(255,255,255,0.08)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.16)'
    }
  }, "View my impact"))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem',
      padding: '0.7rem 1rem',
      borderRadius: 14,
      background: 'rgba(196,98,45,0.16)',
      border: '1px solid rgba(196,98,45,0.3)'
    }
  }, React.createElement(Icon, {
    i: "solar:fire-bold",
    style: {
      fontSize: '1.6rem',
      color: '#ff9a52'
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: 1
    }
  }, u.streak, " days"), React.createElement("div", {
    style: {
      fontSize: '0.66rem',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Action streak"))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem',
      padding: '0.7rem 1rem',
      borderRadius: 14,
      background: 'rgba(168,224,99,0.12)',
      border: '1px solid rgba(168,224,99,0.26)'
    }
  }, React.createElement(Icon, {
    i: "solar:ranking-bold",
    style: {
      fontSize: '1.6rem',
      color: 'var(--lime)'
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      lineHeight: 1
    }
  }, "\u2014"), React.createElement("div", {
    style: {
      fontSize: '0.66rem',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Qatar rank"))))));
}
function StatCard({
  icon,
  tone,
  bg,
  value,
  decimals,
  suffix,
  label,
  trend,
  spark
}) {
  const v = useCountUp(value, {
    decimals
  });
  return React.createElement("div", {
    className: "stat"
  }, React.createElement("div", {
    className: "ic",
    style: {
      background: bg,
      color: tone
    }
  }, React.createElement(Icon, {
    i: icon
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, React.createElement("div", {
    className: "val"
  }, v, suffix), spark && React.createElement(Sparkline, {
    data: spark,
    color: tone,
    w: 74,
    h: 30
  })), React.createElement("div", {
    className: "lab"
  }, label), trend && React.createElement("div", {
    className: "sub",
    style: {
      color: tone
    }
  }, React.createElement(Icon, {
    i: "solar:arrow-right-up-linear"
  }), " ", trend), React.createElement("div", {
    className: "barline",
    style: {
      background: tone
    }
  }));
}
function EventCard({
  e,
  go
}) {
  const toneMap = {
    green: 'var(--green)',
    lime: '#3c8c4a',
    rust: 'var(--rust)'
  };
  const c = toneMap[e.tone] || 'var(--green)';
  return React.createElement("div", {
    className: "card card-h",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      height: 120,
      position: 'relative',
      background: e.img ? `linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,0.45)), url(${e.img}) center/cover` : `linear-gradient(135deg,${c},${c}cc)`
    }
  }, !e.img && React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
      backgroundSize: '14px 14px'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: 'rgba(255,255,255,0.92)',
      borderRadius: 10,
      padding: '4px 10px',
      textAlign: 'center',
      fontWeight: 700,
      lineHeight: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      color: c,
      letterSpacing: '0.08em'
    }
  }, e.date.split(' ')[0]), React.createElement("div", {
    style: {
      fontSize: '1.1rem',
      color: 'var(--ink)'
    }
  }, e.date.split(' ')[1])), React.createElement("span", {
    className: "pill",
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'rgba(10,10,10,0.4)',
      color: '#fff',
      backdropFilter: 'blur(6px)'
    }
  }, e.cat)), React.createElement("div", {
    style: {
      padding: '1rem 1.1rem 1.1rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: c,
      fontWeight: 600,
      marginBottom: 4
    }
  }, e.org), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.18rem',
      margin: '0 0 0.7rem',
      lineHeight: 1.2
    }
  }, e.title), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      fontSize: '0.78rem',
      color: 'var(--ink-3)',
      marginTop: 'auto'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement(Icon, {
    i: "solar:map-point-linear"
  }), " ", e.loc), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement(Icon, {
    i: "solar:clock-circle-linear"
  }), " ", e.hours, "h"))));
}
function HoursChart() {
  const HOURS = HOURS_BY_MONTH.map(() => 0);
  const max = Math.max(...HOURS);
  const total = HOURS.reduce((a, b) => a + b, 0);
  const t = useCountUp(total);
  const cur = 5;
  return React.createElement("div", {
    className: "card",
    style: {
      padding: '1.4rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.2rem',
      lineHeight: 1
    }
  }, t, React.createElement("span", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--ink-3)',
      fontFamily: 'var(--font-body)'
    }
  }, " hrs")), React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "Verified this year"))), React.createElement("div", {
    className: "barchart",
    style: {
      marginTop: '1.3rem'
    }
  }, HOURS.map((h, i) => React.createElement("div", {
    key: i,
    className: 'bar ' + (h === 0 ? 'dim' : i === cur ? 'hi' : ''),
    style: {
      height: (h === 0 ? 4 : Math.max(8, h / max * 100)) + '%'
    },
    title: `${MONTHS[i]}: ${h}h`
  }))), React.createElement("div", {
    className: "barlabels"
  }, MONTHS.map(m => React.createElement("span", {
    key: m
  }, m[0]))));
}
const ACTIVITY = [];
function QuickAction({
  icon,
  tone,
  bg,
  title,
  sub,
  onClick
}) {
  return React.createElement("button", {
    className: "card card-h",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.9rem',
      padding: '1.1rem 1.2rem',
      textAlign: 'left',
      cursor: 'pointer',
      border: '1px solid rgba(0,0,0,0.06)'
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      display: 'grid',
      placeItems: 'center',
      background: bg,
      color: tone,
      fontSize: '1.3rem',
      flexShrink: 0
    }
  }, React.createElement(Icon, {
    i: icon
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.95rem'
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--ink-3)'
    }
  }, sub)), React.createElement(Icon, {
    i: "solar:alt-arrow-right-linear",
    style: {
      marginLeft: 'auto',
      color: 'var(--ink-4)'
    }
  }));
}
function DashboardPage({
  go
}) {
  const r1 = useReveal(),
    r2 = useReveal(),
    r3 = useReveal();
  return React.createElement("div", {
    className: "page"
  }, React.createElement(MomentumHero, {
    go: go
  }), React.createElement("div", {
    className: "stat-grid reveal",
    ref: r1,
    style: {
      marginTop: '1.3rem'
    }
  }, React.createElement(StatCard, {
    icon: "solar:clock-circle-bold",
    tone: "#1a5c38",
    bg: "rgba(26,92,56,0.1)",
    value: 0,
    suffix: "",
    label: "Verified hours"
  }), React.createElement(StatCard, {
    icon: "solar:leaf-bold",
    tone: "#3c8c4a",
    bg: "rgba(60,140,74,0.12)",
    value: 0,
    label: "Events attended"
  }), React.createElement(StatCard, {
    icon: "solar:users-group-rounded-bold",
    tone: "#c4622d",
    bg: "rgba(196,98,45,0.1)",
    value: 0,
    label: "Orgs connected"
  }), React.createElement(StatCard, {
    icon: "solar:bookmark-bold",
    tone: "#6b4ea8",
    bg: "rgba(107,78,168,0.1)",
    value: 0,
    label: "Open applications"
  })), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.55fr) minmax(0,1fr)',
      gap: '1.6rem',
      marginTop: '0.6rem'
    },
    className: "dash-cols"
  }, React.createElement("div", {
    ref: r2,
    className: "reveal"
  }, React.createElement("div", {
    className: "section-head",
    style: {
      marginTop: '1.8rem'
    }
  }, React.createElement("h2", null, "Upcoming events"), React.createElement("span", {
    className: "link",
    onClick: () => go('events')
  }, "View all ", React.createElement(Icon, {
    i: "solar:arrow-right-linear"
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.1rem'
    },
    className: "ev-grid"
  }, EVENTS.slice(0, 2).map(e => React.createElement(EventCard, {
    key: e.id,
    e: e,
    go: go
  }))), React.createElement("div", {
    className: "section-head"
  }, React.createElement("h2", null, "Quick actions")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    className: "ev-grid"
  }, React.createElement(QuickAction, {
    icon: "solar:compass-bold",
    tone: "#1a5c38",
    bg: "rgba(26,92,56,0.1)",
    title: "Browse opportunities",
    sub: "Volunteer events & more",
    onClick: () => go('opportunities')
  }), React.createElement(QuickAction, {
    icon: "solar:book-2-bold",
    tone: "#b8902f",
    bg: "rgba(184,144,47,0.12)",
    title: "Visit the library",
    sub: "Playbooks, guides & interviews",
    onClick: () => go('resources')
  }), React.createElement(QuickAction, {
    icon: "solar:cardholder-bold",
    tone: "#1d6d8a",
    bg: "rgba(29,109,138,0.1)",
    title: "Open your Eco ID",
    sub: "Share your verified profile",
    onClick: () => go('ecoid')
  }), React.createElement(QuickAction, {
    icon: "solar:chat-round-dots-bold",
    tone: "#6b4ea8",
    bg: "rgba(107,78,168,0.1)",
    title: "Ask EcoBot",
    sub: "Your climate-action guide",
    onClick: () => go('ecobot')
  }))), React.createElement("div", {
    ref: r3,
    className: "reveal"
  }, React.createElement("div", {
    className: "section-head",
    style: {
      marginTop: '1.8rem'
    }
  }, React.createElement("h2", null, "This year"), React.createElement("span", {
    className: "link",
    onClick: () => go('impact')
  }, "Impact ", React.createElement(Icon, {
    i: "solar:arrow-right-linear"
  }))), React.createElement(HoursChart, null), React.createElement("div", {
    className: "card",
    style: {
      padding: '1.3rem',
      marginTop: '1.1rem'
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.95rem',
      marginBottom: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement(Icon, {
    i: "solar:history-bold",
    style: {
      color: 'var(--green)'
    }
  }), " Recent activity"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.1rem'
    }
  }, ACTIVITY.length === 0 && React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--ink-3)',
      padding: '0.4rem 0'
    }
  }, "No activity yet \u2014 your verified actions will show up here."), ACTIVITY.map((a, i) => React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '0.8rem',
      alignItems: 'flex-start',
      padding: '0.6rem 0',
      borderTop: i ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      display: 'grid',
      placeItems: 'center',
      background: a.tone + '18',
      color: a.tone,
      fontSize: '1rem',
      flexShrink: 0
    }
  }, React.createElement(Icon, {
    i: a.icon
  })), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.86rem',
      fontWeight: 600
    }
  }, a.t), React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--ink-3)'
    }
  }, a.s)), React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--ink-4)'
    }
  }, a.time))))))));
}
window.DashboardPage = DashboardPage;