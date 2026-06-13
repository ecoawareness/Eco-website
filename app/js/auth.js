const {
  useState: useStateAuth,
  useEffect: useEffectAuth
} = React;
const TESTIMONIALS = [{
  q: 'Joining EcoAwareness didn\u2019t just give me volunteer hours \u2014 it gave me a community that actually cares.',
  a: 'Sara A.',
  s: 'Qatar University'
}, {
  q: 'My Eco ID got me into a policy internship. Verified hours are taken seriously here.',
  a: 'Yousef M.',
  s: 'CMU-Q'
}, {
  q: 'I went from one beach cleanup to leading my school\u2019s green club in a semester.',
  a: 'Layla H.',
  s: 'Qatar Academy'
}];
function LiveStat({
  target,
  decimals = 0,
  suffix = '',
  label
}) {
  const v = useCountUp(target, {
    decimals,
    duration: 1600
  });
  return React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '2.1rem',
      color: 'var(--lime)',
      lineHeight: 1
    }
  }, v, suffix), React.createElement("div", {
    style: {
      fontSize: '0.66rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginTop: 6
    }
  }, label));
}
function GrowthMotif() {
  const bars = [40, 62, 48, 78, 95, 70, 88];
  return React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 9,
      height: 90,
      opacity: 0.85
    }
  }, bars.map((b, i) => React.createElement("div", {
    key: i,
    style: {
      width: 14,
      height: b + '%',
      borderRadius: '5px 5px 2px 2px',
      background: i === 4 ? 'var(--lime)' : 'rgba(168,224,99,0.32)',
      animation: `growbar 2.6s ${i * 0.16}s var(--ease-out) infinite alternate`,
      transformOrigin: 'bottom'
    }
  })));
}
function BrandPanel() {
  const [ti, setTi] = useStateAuth(0);
  useEffectAuth(() => {
    const id = setInterval(() => setTi(t => (t + 1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[ti];
  return React.createElement("aside", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
      padding: 'clamp(2rem,4vw,3rem)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: `radial-gradient(ellipse 80% 60% at 18% 110%, rgba(168,224,99,0.16), transparent 60%),
        radial-gradient(ellipse 60% 50% at 100% 0%, rgba(196,98,45,0.14), transparent 55%),
        linear-gradient(160deg,#0e3f26 0%,#0a2c1c 55%,#061a11 100%)`
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-2%',
      top: '14%',
      fontFamily: 'var(--font-arabic)',
      fontSize: '20vw',
      color: 'rgba(255,255,255,0.035)',
      lineHeight: 1,
      pointerEvents: 'none',
      userSelect: 'none'
    }
  }, "\u0628\u064A\u0626\u0629"), React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
      backgroundSize: '52px 52px',
      WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 40% 40%,black 35%,transparent 80%)',
      maskImage: 'radial-gradient(ellipse 100% 80% at 40% 40%,black 35%,transparent 80%)'
    }
  }), React.createElement("a", {
    href: "#signin",
    onClick: e => e.preventDefault(),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.5rem'
    }
  }, React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--lime)',
      boxShadow: '0 0 16px rgba(168,224,99,0.6)'
    }
  }), "EcoAwareness"), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 480
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.72rem',
      fontWeight: 600,
      color: 'var(--lime)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: '1.2rem'
    }
  }, React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--lime)'
    }
  }), "Qatar\u2019s climate generation"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.4rem,4.4vw,4rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      margin: '0 0 1.2rem'
    }
  }, "Where real action ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lime)'
    }
  }, "grows.")), React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.66)',
      maxWidth: 420,
      margin: 0
    }
  }, "One profile. Every opportunity. Verified hours. Real recognition \u2014 building with you, season after season."), React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(GrowthMotif, null))), React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2.4rem',
      marginBottom: '1.8rem',
      flexWrap: 'wrap'
    }
  }, React.createElement(LiveStat, {
    target: 2547,
    label: "Members"
  }), React.createElement(LiveStat, {
    target: 15.2,
    decimals: 1,
    suffix: "k",
    label: "Verified hours"
  }), React.createElement(LiveStat, {
    target: 62,
    suffix: "+",
    label: "Partner orgs"
  })), React.createElement("div", {
    key: ti,
    style: {
      paddingLeft: '1rem',
      borderLeft: '2px solid var(--lime)',
      maxWidth: 440,
      animation: 'fadein 0.7s var(--ease-out)'
    }
  }, React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.05rem',
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.82)',
      margin: 0
    }
  }, "\u201C", t.q, "\u201D"), React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '0.6rem',
      fontSize: '0.78rem',
      color: 'rgba(255,255,255,0.45)'
    }
  }, "\u2014 ", t.a, ", ", t.s))));
}
function Field({
  label,
  action,
  children
}) {
  return React.createElement("div", {
    style: {
      marginBottom: '1rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.68rem',
      fontWeight: 600,
      color: 'var(--ink-3)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      margin: '0 0 0.45rem 0.25rem'
    }
  }, label, action), children);
}
const inputStyle = {
  width: '100%',
  padding: '0.85rem 1.1rem',
  borderRadius: 100,
  border: '1px solid rgba(0,0,0,0.1)',
  background: 'var(--paper)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  color: 'var(--ink)',
  outline: 'none',
  transition: 'all 0.2s'
};
function strengthOf(pw) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}
function FormPanel({
  mode,
  setMode,
  go
}) {
  const toast = useToast();
  const [email, setEmail] = useStateAuth('');
  const [pw, setPw] = useStateAuth('');
  const [name, setName] = useStateAuth('');
  const [show, setShow] = useStateAuth(false);
  const [err, setErr] = useStateAuth({});
  const [busy, setBusy] = useStateAuth(false);
  const signup = mode === 'signup';
  const st = strengthOf(pw);
  const stColors = ['#d64545', '#c4622d', '#b8902f', '#3c8c4a', '#1a5c38'];
  const stLabels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const submit = () => {
    const e = {};
    if (signup && !name.trim()) e.name = 'Tell us your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email';
    if (!pw) e.pw = 'Enter your password';else if (signup && st < 2) e.pw = 'Choose a stronger password';
    setErr(e);
    if (Object.keys(e).length) return;
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      toast(signup ? 'Welcome to EcoAwareness 🌿' : 'Welcome back 🌿', 'solar:leaf-bold');
      setTimeout(() => window.playTransition(() => go('dashboard')), 500);
    }, 1100);
  };
  return React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      background: '#fff',
      borderRadius: '40px 0 0 40px',
      padding: 'clamp(2rem,4vw,3.4rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflowY: 'auto'
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 460
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      borderRadius: 100,
      background: 'var(--paper)',
      border: '1px solid rgba(0,0,0,0.07)',
      marginBottom: '1.8rem'
    }
  }, ['signin', 'signup'].map(m => React.createElement("button", {
    key: m,
    onClick: () => {
      setMode(m);
      setErr({});
    },
    style: {
      padding: '0.5rem 1.3rem',
      borderRadius: 100,
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.82rem',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      background: mode === m ? 'var(--green)' : 'transparent',
      color: mode === m ? '#fff' : 'var(--ink-3)',
      transition: 'all 0.2s',
      boxShadow: mode === m ? '0 4px 12px rgba(26,92,56,0.22)' : 'none'
    }
  }, m === 'signin' ? 'Sign in' : 'Create account'))), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem,3.6vw,2.7rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      margin: '0 0 0.5rem'
    }
  }, signup ? React.createElement(React.Fragment, null, "Start your ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green)'
    }
  }, "impact.")) : React.createElement(React.Fragment, null, "Welcome ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--green)'
    }
  }, "back."))), React.createElement("p", {
    style: {
      fontSize: '0.92rem',
      color: 'var(--ink-3)',
      fontWeight: 300,
      marginBottom: '1.8rem'
    }
  }, signup ? 'Create your Eco ID and start tracking verified hours.' : 'Sign in to continue driving sustainable action.'), signup && React.createElement(Field, {
    label: "Full name"
  }, React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Mohammed Al-Thani",
    style: {
      ...inputStyle,
      borderColor: err.name ? 'var(--error)' : inputStyle.border
    }
  }), err.name && React.createElement("p", {
    style: {
      color: 'var(--error)',
      fontSize: '0.72rem',
      margin: '0.4rem 0 0 1rem'
    }
  }, err.name)), React.createElement(Field, {
    label: "Email address"
  }, React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com",
    style: {
      ...inputStyle,
      borderColor: err.email ? 'var(--error)' : inputStyle.border
    }
  }), err.email && React.createElement("p", {
    style: {
      color: 'var(--error)',
      fontSize: '0.72rem',
      margin: '0.4rem 0 0 1rem'
    }
  }, err.email)), React.createElement(Field, {
    label: "Password",
    action: !signup && React.createElement("button", {
      onClick: () => toast('Password reset link sent ✉️', 'solar:letter-bold'),
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--green)',
        fontWeight: 600,
        fontSize: '0.7rem',
        cursor: 'pointer'
      }
    }, "Forgot?")
  }, React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement("input", {
    type: show ? 'text' : 'password',
    value: pw,
    onChange: e => setPw(e.target.value),
    placeholder: signup ? 'Create a password' : 'Enter your password',
    style: {
      ...inputStyle,
      paddingRight: '2.8rem',
      borderColor: err.pw ? 'var(--error)' : inputStyle.border
    }
  }), React.createElement("button", {
    onClick: () => setShow(s => !s),
    style: {
      position: 'absolute',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: 'var(--ink-4)',
      cursor: 'pointer',
      fontSize: '1.15rem',
      display: 'grid'
    },
    "aria-label": "Toggle password"
  }, React.createElement(Icon, {
    i: show ? 'solar:eye-closed-linear' : 'solar:eye-linear'
  }))), err.pw && React.createElement("p", {
    style: {
      color: 'var(--error)',
      fontSize: '0.72rem',
      margin: '0.4rem 0 0 1rem'
    }
  }, err.pw), signup && pw && React.createElement("div", {
    style: {
      marginTop: '0.7rem',
      paddingLeft: '0.25rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, [0, 1, 2, 3].map(i => React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 100,
      background: i < st ? stColors[st] : 'rgba(0,0,0,0.08)',
      transition: 'background 0.3s'
    }
  }))), React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      color: stColors[st],
      fontWeight: 600,
      marginTop: 6
    }
  }, stLabels[st]))), React.createElement("button", {
    className: "btn btn-green",
    onClick: submit,
    disabled: busy,
    style: {
      width: '100%',
      marginTop: '0.6rem',
      opacity: busy ? 0.7 : 1
    }
  }, busy ? React.createElement("span", {
    className: "auth-spin"
  }) : React.createElement(React.Fragment, null, signup ? 'Create account' : 'Sign in', " ", React.createElement(Icon, {
    i: "solar:arrow-right-linear"
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.9rem',
      margin: '1.4rem 0',
      fontSize: '0.72rem',
      color: 'var(--ink-4)'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(0,0,0,0.08)'
    }
  }), "Or continue with", React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(0,0,0,0.08)'
    }
  })), React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => {
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        toast('Signed in with Google 🌿', 'solar:leaf-bold');
        setTimeout(() => window.playTransition(() => go('dashboard')), 400);
      }, 900);
    },
    style: {
      width: '100%'
    }
  }, React.createElement("iconify-icon", {
    icon: "logos:google-icon",
    style: {
      fontSize: '1.1rem'
    }
  }), " Continue with Google"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '1.6rem',
      fontSize: '0.86rem',
      color: 'var(--ink-3)'
    }
  }, signup ? 'Already have an account? ' : 'New to EcoAwareness? ', React.createElement("button", {
    onClick: () => setMode(signup ? 'signin' : 'signup'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--green)',
      fontWeight: 600,
      cursor: 'pointer',
      fontSize: '0.86rem'
    }
  }, signup ? 'Sign in' : 'Create one'))));
}
function AuthScreen({
  route,
  go
}) {
  const [mode, setMode] = useStateAuth(route === 'signup' ? 'signup' : 'signin');
  useEffectAuth(() => {
    setMode(route === 'signup' ? 'signup' : 'signin');
  }, [route]);
  return React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      minHeight: '100dvh',
      background: '#061a11'
    }
  }, React.createElement(BrandPanel, null), React.createElement(FormPanel, {
    mode: mode,
    setMode: setMode,
    go: go
  }));
}
window.AuthScreen = AuthScreen;