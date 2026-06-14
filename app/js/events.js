const {
  useState: useStateEv
} = React;
function UpcomingRow({
  e,
  go
}) {
  const c = {
    green: '#1a5c38',
    lime: '#3c8c4a',
    rust: '#c4622d'
  }[e.tone] || '#1a5c38';
  const [d, mo] = [e.date.split(' ')[1], e.date.split(' ')[0]];
  return React.createElement("div", {
    className: "card card-h",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.1rem',
      padding: '1rem 1.2rem'
    }
  }, React.createElement("div", {
    style: {
      width: 58,
      textAlign: 'center',
      flexShrink: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.66rem',
      color: c,
      fontWeight: 700,
      letterSpacing: '0.08em'
    }
  }, mo), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2rem',
      lineHeight: 1
    }
  }, d)), React.createElement("div", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'rgba(0,0,0,0.07)'
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: c,
      fontWeight: 600
    }
  }, e.org), React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '1rem',
      margin: '2px 0'
    }
  }, e.title), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      fontSize: '0.78rem',
      color: 'var(--ink-3)',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", null, React.createElement(Icon, {
    i: "solar:clock-circle-linear"
  }), " ", e.time), React.createElement("span", null, React.createElement(Icon, {
    i: "solar:map-point-linear"
  }), " ", e.loc), React.createElement("span", null, React.createElement(Icon, {
    i: "solar:hourglass-linear"
  }), " ", e.hours, "h credit"))), React.createElement("span", {
    className: "pill",
    style: {
      background: e.status === 'registered' ? 'var(--tag-green-bg)' : 'var(--tag-amber-bg)',
      color: e.status === 'registered' ? 'var(--tag-green-fg)' : 'var(--tag-amber-fg)'
    }
  }, React.createElement("span", {
    className: "pdot"
  }), e.status === 'registered' ? 'Registered' : 'Saved'), React.createElement("button", {
    className: "icon-btn",
    style: {
      width: 38,
      height: 38
    },
    "aria-label": "Details",
    onClick: () => go('opportunities')
  }, React.createElement(Icon, {
    i: "solar:alt-arrow-right-linear"
  })));
}
function PastRow({
  e
}) {
  return React.createElement("div", {
    className: "card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.9rem 1.2rem'
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
    i: "solar:check-circle-bold"
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.94rem'
    }
  }, e.title), React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--ink-3)'
    }
  }, e.org, " \xB7 ", e.date)), React.createElement("span", {
    className: "pill pill-lime"
  }, React.createElement(Icon, {
    i: "solar:verified-check-bold"
  }), " ", e.hours, "h verified"));
}
function EventsPage({
  go
}) {
  const [tab, setTab] = useStateEv('upcoming');
  const r1 = useReveal();
  const totalPast = PAST_EVENTS.reduce((a, b) => a + b.hours, 0);
  const v = useCountUp(totalPast);
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "section-head",
    style: {
      marginTop: 0
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow"
  }, "My Events"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.4rem',
      margin: '0.5rem 0 0'
    }
  }, "Your calendar of ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green)'
    }
  }, "action"), ".")), React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: () => go('opportunities')
  }, React.createElement(Icon, {
    i: "solar:add-circle-linear"
  }), " Find more")), React.createElement("div", {
    className: "stat-grid",
    style: {
      gridTemplateColumns: 'repeat(3,1fr)',
      marginBottom: '1.6rem'
    }
  }, React.createElement("div", {
    className: "stat"
  }, React.createElement("div", {
    className: "ic",
    style: {
      background: 'rgba(26,92,56,0.1)',
      color: 'var(--green)'
    }
  }, React.createElement(Icon, {
    i: "solar:calendar-bold"
  })), React.createElement("div", {
    className: "val"
  }, EVENTS.filter(e => e.status === 'registered').length), React.createElement("div", {
    className: "lab"
  }, "Registered & upcoming"), React.createElement("div", {
    className: "barline",
    style: {
      background: 'var(--green)'
    }
  })), React.createElement("div", {
    className: "stat"
  }, React.createElement("div", {
    className: "ic",
    style: {
      background: 'rgba(184,144,47,0.12)',
      color: '#b8902f'
    }
  }, React.createElement(Icon, {
    i: "solar:bookmark-bold"
  })), React.createElement("div", {
    className: "val"
  }, EVENTS.filter(e => e.status === 'saved').length), React.createElement("div", {
    className: "lab"
  }, "Saved for later"), React.createElement("div", {
    className: "barline",
    style: {
      background: '#b8902f'
    }
  })), React.createElement("div", {
    className: "stat"
  }, React.createElement("div", {
    className: "ic",
    style: {
      background: 'rgba(60,140,74,0.12)',
      color: '#3c8c4a'
    }
  }, React.createElement(Icon, {
    i: "solar:hourglass-bold"
  })), React.createElement("div", {
    className: "val"
  }, v), React.createElement("div", {
    className: "lab"
  }, "Verified hours logged"), React.createElement("div", {
    className: "barline",
    style: {
      background: '#3c8c4a'
    }
  }))), React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      borderRadius: 100,
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.07)',
      marginBottom: '1.3rem'
    }
  }, [['upcoming', 'Upcoming'], ['past', 'Past · verified']].map(([k, l]) => React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      padding: '0.5rem 1.2rem',
      borderRadius: 100,
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.84rem',
      fontWeight: 600,
      background: tab === k ? 'var(--green)' : 'transparent',
      color: tab === k ? '#fff' : 'var(--ink-3)',
      transition: 'all 0.2s'
    }
  }, l))), React.createElement("div", {
    ref: r1,
    className: "reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem'
    }
  }, tab === 'upcoming' ? EVENTS.map(e => React.createElement(UpcomingRow, {
    key: e.id,
    e: e,
    go: go
  })) : PAST_EVENTS.length === 0 ? React.createElement("div", {
    className: "card",
    style: {
      padding: '1.4rem',
      color: 'var(--ink-3)',
      fontSize: '0.9rem',
      textAlign: 'center'
    }
  }, "No verified events yet \u2014 your signed-off hours will appear here.") : PAST_EVENTS.map(e => React.createElement(PastRow, {
    key: e.id,
    e: e
  }))));
}
window.EventsPage = EventsPage;