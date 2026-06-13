const {
  useState: useStateFaq
} = React;
const FAQ_CATS = ['All', 'Hours', 'Account', 'Orgs', 'Privacy'];
function FaqPage({
  go
}) {
  const [open, setOpen] = useStateFaq(0);
  const [cat, setCat] = useStateFaq('All');
  const [q, setQ] = useStateFaq('');
  const r1 = useReveal();
  const list = FAQS.filter(f => (cat === 'All' || f.cat === cat) && (f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())));
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 600,
      margin: '0 auto 2rem'
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: 'center'
    }
  }, "Help Center"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem,3.6vw,2.9rem)',
      margin: '0.6rem 0 0.5rem'
    }
  }, "Questions? ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green)'
    }
  }, "We\u2019ve got you.")), React.createElement("p", {
    style: {
      margin: '0 auto 1.4rem'
    }
  }, "Everything about hours, accounts, orgs and privacy \u2014 in one place."), React.createElement("div", {
    className: "searchbox",
    style: {
      maxWidth: 420,
      margin: '0 auto',
      background: '#fff'
    },
    onClick: e => e.currentTarget.querySelector('input').focus()
  }, React.createElement(Icon, {
    i: "solar:magnifer-linear"
  }), React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search questions\u2026"
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '1.4rem'
    }
  }, FAQ_CATS.map(c => React.createElement("button", {
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
  }, c))), React.createElement("div", {
    ref: r1,
    className: "reveal",
    style: {
      maxWidth: 760,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem'
    }
  }, list.map((f, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.1rem 1.3rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: '1rem',
      flex: 1
    }
  }, f.q), React.createElement("span", {
    style: {
      color: 'var(--green)',
      fontSize: '1.4rem',
      transition: 'transform 0.25s',
      transform: open === i ? 'rotate(45deg)' : 'none',
      display: 'grid'
    }
  }, React.createElement(Icon, {
    i: "solar:add-circle-linear"
  }))), React.createElement("div", {
    style: {
      maxHeight: open === i ? 260 : 0,
      overflow: 'hidden',
      transition: 'max-height 0.35s var(--ease-out)'
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 1.3rem 1.2rem',
      lineHeight: 1.7
    }
  }, f.a)))), list.length === 0 && React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      padding: '2rem'
    }
  }, "No questions match \u201C", q, "\u201D.")), React.createElement("div", {
    className: "card",
    style: {
      maxWidth: 760,
      margin: '1.6rem auto 0',
      padding: '1.6rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg,#fbf7ee,#efe6d2)',
      border: '1px solid rgba(107,69,40,0.12)'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '1.6rem'
    }
  }, "\uD83D\uDCAC"), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      marginTop: 6
    }
  }, "Still stuck?"), React.createElement("p", {
    style: {
      margin: '0.3rem auto 1rem',
      maxWidth: 380
    }
  }, "Reach the team directly \u2014 we usually reply within a day."), React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: () => go('contact')
  }, React.createElement(Icon, {
    i: "solar:letter-linear"
  }), " Contact us")));
}
window.FaqPage = FaqPage;