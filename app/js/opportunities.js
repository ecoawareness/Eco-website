const {
  useState: useStateOpp
} = React;
const OPP_CATS = ['All', 'Restoration', 'Recycling', 'Advocacy', 'Marine', 'Energy'];
const TONE = {
  green: '#1a5c38',
  lime: '#3c8c4a',
  rust: '#c4622d',
  amber: '#b8902f'
};
function OppCard({
  o,
  onApply,
  applied
}) {
  const c = TONE[o.tone] || '#1a5c38';
  return React.createElement("div", {
    className: "card card-h",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      height: 110,
      position: 'relative',
      background: o.img ? `linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.5)), url(${o.img}) center/cover` : `linear-gradient(135deg,${c},${c}cc)`
    }
  }, !o.img && React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.35) 1px,transparent 1px)',
      backgroundSize: '15px 15px'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, o.verified && React.createElement("span", {
    className: "pill",
    style: {
      background: 'rgba(255,255,255,0.95)',
      color: c
    }
  }, React.createElement(Icon, {
    i: "solar:verified-check-bold"
  }), " Verified")), React.createElement("span", {
    className: "pill",
    style: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      background: 'rgba(10,10,10,0.42)',
      color: '#fff',
      backdropFilter: 'blur(6px)'
    }
  }, o.cat)), React.createElement("div", {
    style: {
      padding: '1.1rem 1.2rem 1.2rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: c,
      fontWeight: 600
    }
  }, o.org), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.24rem',
      margin: '0.2rem 0 0.7rem',
      lineHeight: 1.2
    }
  }, o.title), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem 1rem',
      fontSize: '0.78rem',
      color: 'var(--ink-3)',
      marginBottom: '1rem'
    }
  }, React.createElement("span", null, React.createElement(Icon, {
    i: "solar:map-point-linear"
  }), " ", o.loc), React.createElement("span", null, React.createElement(Icon, {
    i: "solar:clock-circle-linear"
  }), " ", o.hours), React.createElement("span", null, React.createElement(Icon, {
    i: "solar:users-group-rounded-linear"
  }), " ", o.spots)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      marginTop: 'auto'
    }
  }, React.createElement("button", {
    className: 'btn btn-sm ' + (applied ? 'btn-ghost' : 'btn-green'),
    onClick: () => onApply(o),
    disabled: applied,
    style: {
      flex: 1
    }
  }, applied ? React.createElement(React.Fragment, null, React.createElement(Icon, {
    i: "solar:check-circle-bold"
  }), " Applied") : React.createElement(React.Fragment, null, "Apply now ", React.createElement(Icon, {
    i: "solar:arrow-right-linear"
  }))), React.createElement("button", {
    className: "icon-btn",
    style: {
      width: 38,
      height: 38,
      fontSize: '1.05rem'
    },
    "aria-label": "Save"
  }, React.createElement(Icon, {
    i: "solar:bookmark-linear"
  }))), React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--ink-4)',
      marginTop: '0.7rem',
      textAlign: 'center'
    }
  }, o.deadline)));
}
function OpportunitiesPage() {
  const toast = useToast();
  const [cat, setCat] = useStateOpp('All');
  const [applied, setApplied] = useStateOpp({});
  const r1 = useReveal();
  const list = cat === 'All' ? OPPS : OPPS.filter(o => o.cat === cat);
  const apply = o => {
    setApplied(a => ({
      ...a,
      [o.id]: true
    }));
    toast('Application sent to ' + o.org + ' 🌿', 'solar:check-circle-bold');
  };
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 22,
      color: '#fff',
      padding: 'clamp(1.6rem,3vw,2.2rem)',
      background: 'radial-gradient(ellipse 50% 80% at 92% 0%, rgba(168,224,99,0.18), transparent 55%), linear-gradient(135deg,#0e3f26,#0a2c1c)'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 560
    }
  }, React.createElement("div", {
    className: "eyebrow lime"
  }, "24 open opportunities \xB7 Doha & beyond"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.9rem,3.4vw,2.8rem)',
      lineHeight: 1.06,
      margin: '0.7rem 0 0.6rem'
    }
  }, "One hub. ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lime)'
    }
  }, "Every opportunity.")), React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'rgba(255,255,255,0.66)',
      fontWeight: 300,
      margin: 0,
      maxWidth: 460
    }
  }, "Verified climate events across Qatar \u2014 every hour signed off and added to your Eco ID."))), React.createElement("div", {
    ref: r1,
    className: "reveal",
    style: {
      display: 'flex',
      gap: '0.6rem',
      flexWrap: 'wrap',
      margin: '1.6rem 0 1.3rem',
      alignItems: 'center'
    }
  }, OPP_CATS.map(c => React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    className: "pill",
    style: {
      cursor: 'pointer',
      padding: '0.5rem 1.1rem',
      fontSize: '0.82rem',
      background: cat === c ? 'var(--green)' : '#fff',
      color: cat === c ? '#fff' : 'var(--ink-2)',
      border: '1px solid ' + (cat === c ? 'var(--green)' : 'rgba(0,0,0,0.1)')
    }
  }, c)), React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: '0.82rem',
      color: 'var(--ink-3)'
    }
  }, list.length, " results")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '1.2rem'
    },
    className: "opp-grid"
  }, list.map(o => React.createElement(OppCard, {
    key: o.id,
    o: o,
    onApply: apply,
    applied: applied[o.id]
  }))));
}
window.OpportunitiesPage = OpportunitiesPage;