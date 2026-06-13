const {
  useState: useStateRes
} = React;
const SPINE_COLORS = ['#1a5c38', '#1d6d8a', '#c4622d', '#b8902f', '#6b4ea8', '#3c8c4a', '#0d3a22', '#a8203a'];
function LibraryHero() {
  return React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 24,
      padding: 'clamp(1.8rem,3.4vw,2.8rem)',
      background: 'radial-gradient(ellipse 60% 90% at 88% 0%, rgba(196,98,45,0.12), transparent 55%), linear-gradient(135deg,#fbf7ee,#efe6d2)',
      border: '1px solid rgba(107,69,40,0.12)',
      boxShadow: '0 20px 50px rgba(107,69,40,0.12)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--wood)'
    }
  }, "The Reading Room"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.2rem,4vw,3.4rem)',
      lineHeight: 1.04,
      margin: '0.7rem 0 0.7rem',
      letterSpacing: '-0.02em'
    }
  }, "Pull up a chair. ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--wood-2)'
    }
  }, "Read up.")), React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--ink-2)',
      fontWeight: 300,
      maxWidth: 460,
      margin: '0 0 1.3rem'
    }
  }, "Playbooks, field guides, climate science and interviews \u2014 everything Qatar\u2019s climate generation has learned, shelved and ready when you are."), React.createElement("div", {
    className: "searchbox",
    style: {
      maxWidth: 360,
      background: '#fff',
      borderColor: 'rgba(107,69,40,0.18)'
    },
    onClick: e => e.currentTarget.querySelector('input').focus()
  }, React.createElement(Icon, {
    i: "solar:magnifer-linear",
    style: {
      color: 'var(--wood)'
    }
  }), React.createElement("input", {
    placeholder: "Search the shelves\u2026"
  }))), React.createElement("div", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 5,
      height: 132
    }
  }, [112, 128, 96, 120, 104, 132, 88].map((h, i) => React.createElement("div", {
    key: i,
    style: {
      width: i % 3 === 0 ? 20 : 15,
      height: h,
      borderRadius: '3px 3px 0 0',
      background: `linear-gradient(180deg,${SPINE_COLORS[i]},${SPINE_COLORS[i]}cc)`,
      boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.18), inset 2px 0 2px rgba(255,255,255,0.12)'
    }
  }))), React.createElement("div", {
    style: {
      height: 12,
      borderRadius: 4,
      marginTop: -2,
      background: 'linear-gradient(180deg,#8a5a33,#6b4528)',
      boxShadow: '0 10px 18px rgba(107,69,40,0.34)'
    }
  }))));
}
function ContinueCard({
  r
}) {
  return React.createElement("div", {
    className: "card card-h",
    style: {
      padding: '1.1rem 1.2rem',
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, React.createElement("div", {
    style: {
      width: 46,
      height: 60,
      borderRadius: '4px 7px 7px 4px',
      flexShrink: 0,
      background: `linear-gradient(135deg,${r.tone},${r.tone}cc)`,
      boxShadow: `inset -3px 0 5px rgba(0,0,0,0.2)`,
      display: 'grid',
      placeItems: 'center',
      color: '#fff'
    }
  }, React.createElement(Icon, {
    i: "solar:book-bold"
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      color: r.tone,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, r.kind, " \xB7 ", r.read), React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.96rem',
      margin: '3px 0 0.6rem'
    }
  }, r.title), React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 100,
      background: 'rgba(0,0,0,0.07)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      width: r.progress + '%',
      height: '100%',
      background: r.tone,
      borderRadius: 100
    }
  }))), React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, r.progress, "%"));
}
function FeaturedLongRead({
  r
}) {
  return React.createElement("div", {
    className: "card card-h feat-grid",
    style: {
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr'
    }
  }, React.createElement("div", {
    style: {
      padding: 'clamp(1.4rem,2.5vw,2rem)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      color: r.tone
    }
  }, "Featured ", r.kind), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,2.6vw,2.2rem)',
      lineHeight: 1.12,
      margin: '0.7rem 0 0.7rem'
    }
  }, r.title), React.createElement("p", {
    style: {
      fontSize: '0.94rem',
      color: 'var(--ink-2)',
      fontWeight: 300,
      lineHeight: 1.65,
      margin: '0 0 1.3rem'
    }
  }, r.desc), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.7rem',
      alignItems: 'center',
      marginTop: 'auto'
    }
  }, React.createElement("button", {
    className: "btn btn-green btn-sm"
  }, React.createElement(Icon, {
    i: "solar:book-bold"
  }), " Start reading"), React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--ink-3)'
    }
  }, React.createElement(Icon, {
    i: "solar:clock-circle-linear"
  }), " ", r.read))), React.createElement("div", {
    style: {
      position: 'relative',
      background: `linear-gradient(135deg,${r.tone},#08251a)`,
      display: 'grid',
      placeItems: 'center',
      minHeight: 240,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
      backgroundSize: '18px 18px'
    }
  }), React.createElement("div", {
    style: {
      width: 120,
      height: 165,
      borderRadius: '6px 12px 12px 6px',
      background: 'linear-gradient(135deg,#fff,#f0ead9)',
      boxShadow: '0 20px 44px rgba(0,0,0,0.4), inset -6px 0 12px rgba(0,0,0,0.12)',
      position: 'relative',
      transform: 'rotate(-6deg)'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      width: 4,
      background: r.tone,
      opacity: 0.4
    }
  }), React.createElement("div", {
    style: {
      padding: '1.4rem 1rem 1rem 1.4rem'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem',
      fontStyle: 'italic',
      color: r.tone
    }
  }, "EA"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.92rem',
      color: 'var(--ink-2)',
      marginTop: '2.5rem',
      lineHeight: 1.2
    }
  }, "The Field Playbook")))));
}
function Shelf({
  shelf
}) {
  const ref = useReveal();
  return React.createElement("div", {
    className: "reveal",
    ref: ref,
    style: {
      marginTop: '1.8rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      marginBottom: '0.9rem'
    }
  }, React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      display: 'grid',
      placeItems: 'center',
      background: shelf.tone,
      color: '#fff',
      fontSize: '1.1rem'
    }
  }, React.createElement(Icon, {
    i: shelf.icon
  })), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      margin: 0
    }
  }, shelf.name), React.createElement("span", {
    className: "link",
    style: {
      marginLeft: 'auto',
      fontSize: '0.82rem',
      color: shelf.tone,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Browse all ", React.createElement(Icon, {
    i: "solar:arrow-right-linear"
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '1rem'
    },
    className: "shelf-grid"
  }, shelf.items.map((it, i) => React.createElement("div", {
    key: i,
    className: "card card-h",
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex'
    }
  }, React.createElement("div", {
    style: {
      width: 12,
      flexShrink: 0,
      background: `linear-gradient(180deg,${shelf.tone},${shelf.tone}bb)`
    }
  }), React.createElement("div", {
    style: {
      padding: '1rem 1.1rem',
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      color: shelf.tone,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, it.read), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.16rem',
      lineHeight: 1.2,
      marginTop: 6
    }
  }, it.t))))), React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 10,
      borderRadius: 4,
      marginTop: 8,
      background: 'linear-gradient(180deg,#8a5a33,#6b4528)',
      boxShadow: '0 12px 20px rgba(107,69,40,0.22)'
    }
  }));
}
function ResourcesPage() {
  const r1 = useReveal();
  return React.createElement("div", {
    className: "page"
  }, React.createElement(LibraryHero, null), React.createElement("div", {
    className: "section-head",
    style: {
      marginTop: '2rem'
    }
  }, React.createElement("h2", null, "Continue reading"), React.createElement("span", {
    style: {
      fontSize: '0.84rem',
      color: 'var(--ink-3)'
    }
  }, "picks up where you left off")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.1rem'
    },
    className: "ev-grid"
  }, RESOURCES.reading.map((r, i) => React.createElement(ContinueCard, {
    key: i,
    r: r
  }))), React.createElement("div", {
    ref: r1,
    className: "reveal",
    style: {
      marginTop: '1.8rem'
    }
  }, React.createElement(FeaturedLongRead, {
    r: RESOURCES.featured
  })), React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 0
    }
  }, React.createElement("h2", null, "The shelves")), RESOURCES.shelves.map((s, i) => React.createElement(Shelf, {
    key: i,
    shelf: s
  })));
}
window.ResourcesPage = ResourcesPage;