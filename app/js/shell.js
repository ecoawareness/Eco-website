const {
  useState: useStateShell,
  useEffect: useEffectShell
} = React;
function Sidebar({
  route,
  go,
  onSignOut
}) {
  return React.createElement("aside", {
    className: "sidebar"
  }, React.createElement("div", {
    className: "brand",
    onClick: () => go('dashboard')
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("span", null, "EcoAwareness")), NAV.map(grp => React.createElement("div", {
    className: "nav-group",
    key: grp.group
  }, React.createElement("div", {
    className: "nav-group-label"
  }, grp.group), grp.items.map(it => React.createElement("button", {
    key: it.id,
    className: 'nav-item' + (route === it.id ? ' active' : ''),
    onClick: () => go(it.id)
  }, React.createElement(Icon, {
    i: it.icon
  }), React.createElement("span", null, it.label), it.badge && React.createElement("span", {
    className: "badge"
  }, it.badge), it.count && React.createElement("span", {
    className: "count"
  }, it.count))))), React.createElement("div", {
    className: "side-foot"
  }, React.createElement("div", {
    className: "user-chip",
    onClick: () => go('profile')
  }, React.createElement(Avatar, {
    size: 38
  }), React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, React.createElement("div", {
    className: "nm"
  }, USER.handle), React.createElement("div", {
    className: "rl"
  }, USER.role)), React.createElement(Icon, {
    i: "solar:alt-arrow-right-linear",
    style: {
      marginLeft: 'auto',
      opacity: 0.5,
      fontSize: '1.1rem'
    }
  })), React.createElement("button", {
    className: "signout",
    onClick: onSignOut
  }, React.createElement(Icon, {
    i: "solar:logout-3-linear"
  }), " Sign Out")));
}
function Topbar({
  go,
  onMenu
}) {
  const hour = new Date().getHours();
  const part = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  return React.createElement("header", {
    className: "topbar"
  }, React.createElement("button", {
    className: "icon-btn menu-btn",
    onClick: onMenu,
    "aria-label": "Menu"
  }, React.createElement(Icon, {
    i: "solar:hamburger-menu-linear"
  })), React.createElement("div", {
    className: "greeting"
  }, part, ", ", React.createElement("em", null, USER.name), " ", React.createElement("span", {
    className: "leaf"
  }, "\uD83C\uDF3F")), React.createElement("div", {
    className: "topbar-spacer"
  }), React.createElement("div", {
    className: "searchbox",
    onClick: e => e.currentTarget.querySelector('input').focus()
  }, React.createElement(Icon, {
    i: "solar:magnifer-linear"
  }), React.createElement("input", {
    placeholder: "Search opportunities, orgs\u2026"
  })), React.createElement("button", {
    className: "icon-btn",
    onClick: () => go('events'),
    "aria-label": "Notifications"
  }, React.createElement(Icon, {
    i: "solar:bell-linear"
  }), React.createElement("span", {
    className: "dot"
  })), React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: () => go('opportunities')
  }, React.createElement(Icon, {
    i: "solar:add-circle-linear"
  }), " Post Event"));
}
function AppFrame({
  route,
  go,
  onSignOut,
  children
}) {
  const [navOpen, setNavOpen] = useStateShell(false);
  useEffectShell(() => {
    setNavOpen(false);
    window.scrollTo(0, 0);
  }, [route]);
  return React.createElement("div", {
    className: 'app' + (navOpen ? ' nav-open' : '')
  }, React.createElement("div", {
    className: "scrim",
    onClick: () => setNavOpen(false)
  }), React.createElement(Sidebar, {
    route: route,
    go: go,
    onSignOut: onSignOut
  }), React.createElement("div", {
    className: "main"
  }, React.createElement(Topbar, {
    go: go,
    onMenu: () => setNavOpen(o => !o)
  }), React.createElement("div", {
    key: route,
    className: "page-fade"
  }, children)), React.createElement("div", {
    className: "grain"
  }));
}
Object.assign(window, {
  Sidebar,
  Topbar,
  AppFrame
});