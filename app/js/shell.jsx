/* global React, NAV, USER, Icon, Avatar */
const { useState: useStateShell, useEffect: useEffectShell } = React;

function Sidebar({ route, go, onSignOut }) {
  return (
    <aside className="sidebar">
      <div className="brand" onClick={() => go('dashboard')}>
        <span className="dot"></span>
        <span>EcoAwareness</span>
      </div>

      {NAV.map(grp => (
        <div className="nav-group" key={grp.group}>
          <div className="nav-group-label">{grp.group}</div>
          {grp.items.map(it => (
            <button key={it.id}
              className={'nav-item' + (route === it.id ? ' active' : '')}
              onClick={() => go(it.id)}>
              <Icon i={it.icon} />
              <span>{it.label}</span>
              {it.badge && <span className="badge">{it.badge}</span>}
              {it.count && <span className="count">{it.count}</span>}
            </button>
          ))}
        </div>
      ))}

      <div className="side-foot">
        <div className="user-chip" onClick={() => go('profile')}>
          <Avatar size={38} />
          <div style={{ minWidth: 0 }}>
            <div className="nm">{USER.handle}</div>
            <div className="rl">{USER.role}</div>
          </div>
          <Icon i="solar:alt-arrow-right-linear" style={{ marginLeft: 'auto', opacity: 0.5, fontSize: '1.1rem' }} />
        </div>
        <button className="signout" onClick={onSignOut}>
          <Icon i="solar:logout-3-linear" /> Sign Out
        </button>
      </div>
    </aside>
  );
}

function Topbar({ go, onMenu }) {
  const hour = new Date().getHours();
  const part = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  return (
    <header className="topbar">
      <button className="icon-btn menu-btn" onClick={onMenu} aria-label="Menu">
        <Icon i="solar:hamburger-menu-linear" />
      </button>
      <div className="greeting">
        {part}, <em>{USER.name}</em> <span className="leaf">🌿</span>
      </div>
      <div className="topbar-spacer"></div>
      <div className="searchbox" onClick={e => e.currentTarget.querySelector('input').focus()}>
        <Icon i="solar:magnifer-linear" />
        <input placeholder="Search opportunities, orgs…" />
      </div>
      <button className="icon-btn" onClick={() => go('events')} aria-label="Notifications">
        <Icon i="solar:bell-linear" /><span className="dot"></span>
      </button>
      <button className="btn btn-green btn-sm" onClick={() => go('opportunities')}>
        <Icon i="solar:add-circle-linear" /> Post Event
      </button>
    </header>
  );
}

function AppFrame({ route, go, onSignOut, children }) {
  const [navOpen, setNavOpen] = useStateShell(false);
  useEffectShell(() => { setNavOpen(false); window.scrollTo(0, 0); }, [route]);
  return (
    <div className={'app' + (navOpen ? ' nav-open' : '')}>
      <div className="scrim" onClick={() => setNavOpen(false)}></div>
      <Sidebar route={route} go={go} onSignOut={onSignOut} />
      <div className="main">
        <Topbar go={go} onMenu={() => setNavOpen(o => !o)} />
        <div key={route} className="page-fade">{children}</div>
      </div>
      <div className="grain"></div>
    </div>
  );
}

Object.assign(window, { Sidebar, Topbar, AppFrame });
