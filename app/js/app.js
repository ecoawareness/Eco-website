const {
  useState: useStateApp,
  useEffect: useEffectApp
} = React;
const APP_ROUTES = ['dashboard', 'opportunities', 'network', 'resources', 'profile', 'events', 'impact', 'ecoid', 'ecobot', 'contact', 'faq'];
function PageStub({
  route
}) {
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "eyebrow"
  }, "Coming together"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.4rem',
      margin: '0.6rem 0'
    }
  }, route), React.createElement("p", {
    style: {
      maxWidth: 440
    }
  }, "This surface is part of the redesign and will be built out next."));
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
    contact: window.ContactPage
  };
  const C = map[route];
  return C ? React.createElement(C, {
    go: go
  }) : React.createElement(PageStub, {
    route: route
  });
}
function Root() {
  const getHash = () => (window.location.hash || '#signin').slice(1);
  const [route, setRoute] = useStateApp(getHash());
  useEffectApp(() => {
    const onHash = () => setRoute(getHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const go = r => {
    window.location.hash = r;
  };
  const authed = APP_ROUTES.includes(route);
  if (!authed) {
    return React.createElement(ToastHost, null, React.createElement(AuthScreen, {
      route: route,
      go: go
    }));
  }
  return React.createElement(ToastHost, null, React.createElement(AppFrame, {
    route: route,
    go: go,
    onSignOut: () => window.playTransition(() => go('signin'))
  }, pageFor(route, go)));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Root, null));