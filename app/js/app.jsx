/* global React, ReactDOM, ToastHost, AppFrame, AuthScreen */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const APP_ROUTES = ['dashboard','opportunities','network','resources','profile','events','impact','ecoid','ecobot','contact','faq'];

function PageStub({ route }) {
  return (
    <div className="page">
      <div className="eyebrow">Coming together</div>
      <h1 style={{ fontFamily:'var(--font-display)', fontSize:'2.4rem', margin:'0.6rem 0' }}>{route}</h1>
      <p style={{ maxWidth: 440 }}>This surface is part of the redesign and will be built out next.</p>
    </div>
  );
}

function pageFor(route, go) {
  const map = {
    dashboard: window.DashboardPage,
    impact: window.ImpactPage,
    resources: window.ResourcesPage,
    opportunities: window.OpportunitiesPage,
    events: window.EventsPage,
    network: window.NetworkPage,
    profile: window.ProfilePage,
    ecoid: window.EcoIdPage,
    ecobot: window.EcoBotPage,
    faq: window.FaqPage,
    contact: window.ContactPage,
  };
  const C = map[route];
  return C ? <C go={go} /> : <PageStub route={route} />;
}

function Root() {
  const getHash = () => (window.location.hash || '#signin').slice(1);
  const [route, setRoute] = useStateApp(getHash());

  useEffectApp(() => {
    const onHash = () => setRoute(getHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = (r) => { window.location.hash = r; };
  const authed = APP_ROUTES.includes(route);

  if (!authed) {
    return <ToastHost><AuthScreen route={route} go={go} /></ToastHost>;
  }
  return (
    <ToastHost>
      <AppFrame route={route} go={go} onSignOut={() => window.playTransition(() => go('signin'))}>
        {pageFor(route, go)}
      </AppFrame>
    </ToastHost>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
