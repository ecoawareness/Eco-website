function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext
} = React;
const USER = {
  name: 'Mohammed',
  handle: 'mohammeddontforget',
  role: 'Climate Activist',
  school: 'Qatar Academy · Grade 12',
  email: 'mohammed@ecoawareness.me',
  memberSince: 'Sep 2025',
  level: 1,
  levelName: 'Newcomer',
  xp: 0,
  xpFloor: 0,
  xpNext: 100,
  streak: 0,
  rank: 0,
  rankTotal: 0,
  hours: 0,
  events: 0,
  orgs: 0,
  applications: 0,
  co2: 0,
  trees: 0,
  bio: 'Grade 12 student at Qatar Academy. Mangrove-restoration volunteer, recycling-drive lead, and aspiring environmental engineer. Arabic-first when you need it.',
  interests: ['Mangroves', 'Recycling', 'Climate policy', 'Marine life', 'Renewable energy']
};
const HOURS_BY_MONTH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const EVENTS = [{
  id: 'e1',
  title: 'Al Thakira Mangrove Cleanup',
  org: 'Earthna',
  date: 'JUN 21',
  time: '06:30',
  loc: 'Al Khor',
  hours: 5,
  cat: 'Restoration',
  tone: 'green',
  img: 'assets/earthna.jpg',
  status: 'registered'
}, {
  id: 'e2',
  title: 'Education City Recycling Drive',
  org: 'Qatar Foundation',
  date: 'JUN 24',
  time: '15:00',
  loc: 'Education City',
  hours: 3,
  cat: 'Recycling',
  tone: 'lime',
  status: 'registered'
}, {
  id: 'e3',
  title: 'Climate Policy Youth Forum',
  org: 'AYCM Qatar',
  date: 'JUL 02',
  time: '10:00',
  loc: 'Msheireb',
  hours: 4,
  cat: 'Advocacy',
  tone: 'rust',
  status: 'saved'
}, {
  id: 'e4',
  title: 'Coral Reef Awareness Workshop',
  org: 'QKONs',
  date: 'JUL 09',
  time: '17:00',
  loc: 'Doha Corniche',
  hours: 2,
  cat: 'Education',
  tone: 'green',
  status: 'saved'
}];
const PAST_EVENTS = [];
const OPPS = [{
  id: 'o1',
  title: 'Mangrove Restoration Volunteer',
  org: 'Earthna',
  loc: 'Al Thakira',
  cat: 'Restoration',
  hours: '5 hrs',
  spots: '8 left',
  tone: 'green',
  verified: true,
  img: 'assets/earthna.jpg',
  deadline: 'Closes Jun 19'
}, {
  id: 'o2',
  title: 'Recycling Drive Coordinator',
  org: 'Qatar Foundation',
  loc: 'Education City',
  cat: 'Recycling',
  hours: '3 hrs',
  spots: '12 left',
  tone: 'lime',
  verified: true,
  deadline: 'Closes Jun 22'
}, {
  id: 'o3',
  title: 'Climate Policy Research Intern',
  org: 'AYCM Qatar',
  loc: 'Remote',
  cat: 'Advocacy',
  hours: 'Flexible',
  spots: '3 left',
  tone: 'rust',
  verified: true,
  deadline: 'Closes Jun 28'
}, {
  id: 'o4',
  title: 'Coral Reef Monitoring Assistant',
  org: 'QKONs',
  loc: 'Doha Corniche',
  cat: 'Marine',
  hours: '2 hrs',
  spots: 'Open',
  tone: 'green',
  verified: true,
  deadline: 'Rolling'
}, {
  id: 'o5',
  title: 'Solar Workshop Facilitator',
  org: 'Kahramaa',
  loc: 'Lusail',
  cat: 'Energy',
  hours: '4 hrs',
  spots: '5 left',
  tone: 'amber',
  verified: false,
  deadline: 'Closes Jul 01'
}, {
  id: 'o6',
  title: 'School Garden Builder',
  org: 'MECC',
  loc: 'Al Rayyan',
  cat: 'Restoration',
  hours: '6 hrs',
  spots: 'Open',
  tone: 'lime',
  verified: true,
  deadline: 'Rolling'
}];
const BADGES = [{
  id: 'b1',
  name: 'First Steps',
  desc: 'Logged your first verified hour',
  icon: 'solar:flag-bold',
  earned: false,
  progress: 0,
  goal: 1,
  tone: '#1a5c38'
}, {
  id: 'b2',
  name: 'Tide Turner',
  desc: 'Joined 3 coastal cleanups',
  icon: 'solar:water-bold',
  earned: false,
  progress: 0,
  goal: 3,
  tone: '#1d6d8a'
}, {
  id: 'b3',
  name: 'Streak Keeper',
  desc: '10-day action streak',
  icon: 'solar:fire-bold',
  earned: false,
  progress: 0,
  goal: 10,
  tone: '#c4622d'
}, {
  id: 'b4',
  name: 'Tree Hugger',
  desc: 'Planted 25+ trees',
  icon: 'solar:leaf-bold',
  earned: false,
  progress: 0,
  goal: 25,
  tone: '#3c8c4a'
}, {
  id: 'b5',
  name: 'Org Connector',
  desc: 'Connected with 5 orgs',
  icon: 'solar:users-group-rounded-bold',
  earned: false,
  progress: 0,
  goal: 5,
  tone: '#6b4ea8'
}, {
  id: 'b6',
  name: 'Century Club',
  desc: 'Reach 100 verified hours',
  icon: 'solar:medal-ribbons-star-bold',
  earned: false,
  progress: 0,
  goal: 100,
  tone: '#b8902f'
}, {
  id: 'b7',
  name: 'Policy Voice',
  desc: 'Attend 3 advocacy forums',
  icon: 'solar:microphone-bold',
  earned: false,
  progress: 0,
  goal: 3,
  tone: '#c4622d'
}, {
  id: 'b8',
  name: 'Reef Guardian',
  desc: 'Complete marine track',
  icon: 'solar:diving-mask-bold',
  earned: false,
  progress: 0,
  goal: 5,
  tone: '#1d6d8a'
}];
const TIMELINE = [];
const ORGS = [{
  name: 'Earthna',
  type: 'Foundation',
  members: '320',
  tone: '#1a5c38',
  tag: 'Partner',
  logo: 'assets/earthna.jpg'
}, {
  name: 'AYCM Qatar',
  type: 'Youth movement',
  members: '1.2k',
  tone: '#c4622d',
  tag: 'Network'
}, {
  name: 'CMU-Q Green Club',
  type: 'University club',
  members: '140',
  tone: '#a8203a',
  tag: 'Club'
}, {
  name: 'QKONs',
  type: 'NGO',
  members: '85',
  tone: '#1d6d8a',
  tag: 'Network'
}, {
  name: 'DEAP',
  type: 'Government body',
  members: '—',
  tone: '#6b4ea8',
  tag: 'Gov'
}, {
  name: 'MECC',
  type: 'Ministry',
  members: '—',
  tone: '#3c8c4a',
  tag: 'Gov'
}, {
  name: 'Qatar Foundation',
  type: 'Foundation',
  members: '2.4k',
  tone: '#1a5c38',
  tag: 'Partner'
}, {
  name: 'Kahramaa',
  type: 'Utility',
  members: '—',
  tone: '#b8902f',
  tag: 'Gov'
}];
const RESOURCES = {
  featured: {
    title: 'The Volunteer\u2019s Field Playbook',
    kind: 'Playbook',
    read: '24 min',
    desc: 'Everything you need before your first cleanup \u2014 from tide charts to safety, logging hours, and making it count.',
    tone: '#1a5c38',
    progress: 0
  },
  reading: [{
    title: 'How verified hours actually work',
    kind: 'Guide',
    read: '6 min',
    progress: 0,
    tone: '#1d6d8a'
  }, {
    title: 'Mangroves 101: Qatar\u2019s carbon sinks',
    kind: 'Science',
    read: '9 min',
    progress: 0,
    tone: '#3c8c4a'
  }],
  shelves: [{
    name: 'Playbooks',
    tone: '#1a5c38',
    icon: 'solar:book-bold',
    items: [{
      t: 'Run a campus recycling drive',
      read: '12 min'
    }, {
      t: 'Hosting your first beach cleanup',
      read: '8 min'
    }, {
      t: 'Pitching a green club to your school',
      read: '10 min'
    }]
  }, {
    name: 'Climate Science',
    tone: '#1d6d8a',
    icon: 'solar:test-tube-bold',
    items: [{
      t: 'Why the Gulf is warming faster',
      read: '7 min'
    }, {
      t: 'Coral bleaching, explained',
      read: '6 min'
    }, {
      t: 'Reading an air-quality index',
      read: '5 min'
    }]
  }, {
    name: 'Interviews',
    tone: '#c4622d',
    icon: 'solar:microphone-2-bold',
    items: [{
      t: 'A day with an Earthna ranger',
      read: '15 min'
    }, {
      t: 'From volunteer to policy intern',
      read: '11 min'
    }, {
      t: 'Meet Qatar\u2019s youngest reef diver',
      read: '9 min'
    }]
  }, {
    name: 'Toolkits',
    tone: '#b8902f',
    icon: 'solar:case-bold',
    items: [{
      t: 'Hours-logging template',
      read: 'PDF'
    }, {
      t: 'Event safety checklist',
      read: 'PDF'
    }, {
      t: 'Impact report builder',
      read: 'Sheet'
    }]
  }]
};
const FAQS = [{
  q: 'How do verified hours work?',
  a: 'When you attend an event posted on EcoAwareness, the host signs off your attendance. Verified hours are stamped onto your Eco ID and count toward badges, levels, and official recognition letters.',
  cat: 'Hours'
}, {
  q: 'Is EcoAwareness free for students?',
  a: 'Completely. EcoAwareness is a non-profit, student-built platform. There are no fees to join, apply to opportunities, or earn your Eco ID.',
  cat: 'Account'
}, {
  q: 'Can I use the platform in Arabic?',
  a: 'Yes \u2014 EcoAwareness is bilingual and RTL-aware. Switch languages from your profile and the entire app, including your Eco ID, adapts to Arabic.',
  cat: 'Account'
}, {
  q: 'How do I get my hours recognised by my school?',
  a: 'From My Impact, export an official impact report. It lists every verified event, the signing organisation, and a QR that schools can scan to confirm authenticity.',
  cat: 'Hours'
}, {
  q: 'What can organisations do here?',
  a: 'Verified organisations post opportunities, sign off volunteer hours, and discover engaged students. Reach out from Contact Us to get your org verified.',
  cat: 'Orgs'
}, {
  q: 'How is my data handled?',
  a: 'Your data is stored securely and never sold. You control what appears on your public Eco ID. Read more in our privacy policy.',
  cat: 'Privacy'
}];
const NAV = [{
  group: 'Explore',
  items: [{
    id: 'opportunities',
    label: 'Opportunities',
    icon: 'solar:compass-bold-duotone'
  }, {
    id: 'network',
    label: 'Network',
    icon: 'solar:users-group-rounded-bold-duotone'
  }, {
    id: 'resources',
    label: 'Resources',
    icon: 'solar:book-2-bold-duotone'
  }]
}, {
  group: 'My Space',
  items: [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'solar:home-smile-bold-duotone'
  }, {
    id: 'profile',
    label: 'My Profile',
    icon: 'solar:user-circle-bold-duotone'
  }, {
    id: 'events',
    label: 'My Events',
    icon: 'solar:calendar-bold-duotone'
  }, {
    id: 'impact',
    label: 'My Impact',
    icon: 'solar:chart-2-bold-duotone'
  }, {
    id: 'ecoid',
    label: 'Eco ID',
    icon: 'solar:cardholder-bold-duotone'
  }]
}, {
  group: 'Community',
  items: [{
    id: 'ecobot',
    label: 'EcoBot',
    icon: 'solar:chat-round-dots-bold-duotone',
    badge: 'AI'
  }, {
    id: 'contact',
    label: 'Contact Us',
    icon: 'solar:letter-bold-duotone'
  }, {
    id: 'faq',
    label: 'FAQ',
    icon: 'solar:question-circle-bold-duotone'
  }]
}];
function useCountUp(target, {
  duration = 1100,
  decimals = 0,
  start = true
} = {}) {
  const [val, setVal] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVal(target);
      return;
    }
    let t0;
    const tick = t => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);else setVal(target);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, start]);
  return decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
}
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('in');
      return;
    }
    let done = false;
    const show = () => {
      if (!done) {
        done = true;
        el.classList.add('in');
      }
    };
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          show();
          io.disconnect();
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -5% 0px'
    });
    io.observe(el);
    const t = setTimeout(show, 700);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return ref;
}
function Icon({
  i,
  ...p
}) {
  return React.createElement("iconify-icon", _extends({
    icon: i
  }, p));
}
function playTransition(onMid) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    onMid && onMid();
    return;
  }
  let ov = document.getElementById('eco-transition');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'eco-transition';
    ov.innerHTML = '<div class="tmark"><span></span>EcoAwareness</div>';
    document.body.appendChild(ov);
  }
  ov.classList.remove('leaving');
  requestAnimationFrame(() => ov.classList.add('show'));
  setTimeout(() => {
    onMid && onMid();
  }, 480);
  setTimeout(() => {
    ov.classList.add('leaving');
    ov.classList.remove('show');
  }, 720);
  setTimeout(() => {
    ov.classList.remove('leaving');
  }, 1300);
}
function Avatar({
  size = 40,
  ring = true,
  name = USER.name
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      color: '#eafadd',
      fontWeight: 700,
      fontSize: size * 0.38,
      letterSpacing: '0.02em',
      fontFamily: 'var(--font-body)',
      background: 'linear-gradient(135deg,#247a4a,#0d3a22)',
      boxShadow: ring ? '0 0 0 2px rgba(168,224,99,0.6), 0 0 0 4px rgba(168,224,99,0.12)' : 'none'
    }
  }, initials);
}
function Ring({
  size = 130,
  stroke = 11,
  pct = 0,
  color = 'var(--green)',
  track = 'rgba(0,0,0,0.08)',
  children,
  glow
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const [draw, setDraw] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDraw(pct);
      return;
    }
    const t = setTimeout(() => setDraw(pct), 120);
    return () => clearTimeout(t);
  }, [pct]);
  return React.createElement("div", {
    className: "ringwrap",
    style: {
      width: size,
      height: size
    }
  }, React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: stroke
  }), React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c - c * draw,
    style: {
      transition: 'stroke-dashoffset 1.1s cubic-bezier(0.22,1,0.36,1)',
      filter: glow ? `drop-shadow(0 0 6px ${color})` : 'none'
    }
  })), React.createElement("div", {
    className: "ringtext"
  }, children));
}
function Sparkline({
  data,
  color = 'var(--green)',
  w = 96,
  h = 30,
  fill = true
}) {
  const max = Math.max(...data, 1),
    min = Math.min(...data);
  const pts = data.map((d, i) => [i / (data.length - 1) * w, h - (d - min) / (max - min || 1) * (h - 4) - 2]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = line + ` L${w} ${h} L0 ${h} Z`;
  const id = 'sp' + Math.random().toString(36).slice(2, 7);
  return React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: id,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: color,
    stopOpacity: "0.28"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: color,
    stopOpacity: "0"
  }))), fill && React.createElement("path", {
    d: area,
    fill: `url(#${id})`
  }), React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ToastCtx = createContext(() => {});
const useToast = () => useContext(ToastCtx);
function ToastHost({
  children
}) {
  const [list, setList] = useState([]);
  const push = useCallback((msg, icon = 'solar:check-circle-bold') => {
    const id = Math.random();
    setList(l => [...l, {
      id,
      msg,
      icon
    }]);
    setTimeout(() => setList(l => l.filter(t => t.id !== id)), 3200);
  }, []);
  return React.createElement(ToastCtx.Provider, {
    value: push
  }, children, React.createElement("div", {
    className: "toast-wrap"
  }, list.map(t => React.createElement("div", {
    className: "toast",
    key: t.id
  }, React.createElement(Icon, {
    i: t.icon
  }), t.msg))));
}
Object.assign(window, {
  USER,
  HOURS_BY_MONTH,
  MONTHS,
  EVENTS,
  PAST_EVENTS,
  OPPS,
  BADGES,
  TIMELINE,
  ORGS,
  RESOURCES,
  FAQS,
  NAV,
  useCountUp,
  useReveal,
  Icon,
  Avatar,
  Ring,
  Sparkline,
  ToastHost,
  useToast,
  playTransition
});