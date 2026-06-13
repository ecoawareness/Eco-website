/* @ds-bundle: {"format":3,"namespace":"EcoAwarenessDesignSystem_019dd9","components":[],"sourceHashes":{"assets/js/challenges.js":"cc70bc1e2de5","assets/js/ecohub-enhancements.js":"b953a6be9374","ui_kits/web/AuthSplit.jsx":"bcd68518ff53","ui_kits/web/Dashboard.jsx":"cf0c84cd3d51","ui_kits/web/Footer.jsx":"195c88531439","ui_kits/web/Hero.jsx":"632077111784","ui_kits/web/Nav.jsx":"3c8ba162d09f","ui_kits/web/Opportunities.jsx":"c7913ecd91f5","ui_kits/web/PartnersStrip.jsx":"74f5a3cbf685","ui_kits/web/Primitives.jsx":"12c215fe8e4e","ui_kits/web/ProblemSolution.jsx":"b30024159bcf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EcoAwarenessDesignSystem_019dd9 = window.EcoAwarenessDesignSystem_019dd9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/js/challenges.js
try { (() => {
/* ───────────────────────────────────────────────────────────────
   EcoAwareness · Challenges page logic
   - i18n (EN / AR + RTL)
   - challenge data array (edit here, markup untouched)
   - card rendering, scroll reveal, nav scroll state
   ─────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── STATIC UI STRINGS ──────────────────────────────────────── */
  const I18N = {
    en: {
      'nav.home': 'Home',
      'nav.network': 'Network',
      'nav.challenges': 'Challenges',
      'nav.opportunities': 'Opportunities',
      'nav.about': 'About',
      'nav.signin': 'Sign in',
      'nav.lang': 'العربية',
      'hero.eyebrow': 'Challenges',
      'hero.badge': 'Example program · launching soon',
      'hero.title_a': 'Real problems.',
      'hero.title_b': 'Real bounties.',
      'hero.title_c': 'Real recognition.',
      'hero.sub': 'Organisations across Qatar post their hardest climate problems. Students and teams solve them for cash bounties, verified hours, and a permanent place on their Eco ID.',
      'hero.cta_primary': 'Browse challenges',
      'hero.cta_secondary': 'How it works',
      'hero.stat1_l': 'Active challenges',
      'hero.stat2_l': 'In total bounties',
      'hero.stat3_l': 'Partner orgs',
      'hero.caption': 'The team at Earthna Sustainability Week — Msheireb, Doha.',
      'list.eyebrow': 'Open right now',
      'list.title_a': 'Pick a problem,',
      'list.title_b': 'go win it.',
      'list.note': 'Every card below is an example. Real, sponsor-backed challenges arrive once partners are signed.',
      'list.featured': 'Top bounty',
      'ticker.a': 'QR 83,000 in open bounties',
      'ticker.b': '6 live challenges',
      'ticker.c': '61 teams competing',
      'ticker.d': 'Example program — partners launching soon',
      'filter.all': 'All',
      'filter.coastal': 'Coastal',
      'filter.energy': 'Energy',
      'filter.waste': 'Waste',
      'filter.mobility': 'Mobility',
      'filter.data': 'Data',
      'filter.education': 'Education',
      'card.example': 'Example',
      'card.bounty': 'Bounty',
      'card.teams': 'teams',
      'card.view': 'View challenge',
      'card.empty': 'No example challenges in this category yet.',
      'status.open': 'Open',
      'status.closing': 'Closing soon',
      'status.judging': 'In judging',
      'status.awarded': 'Awarded',
      'how.eyebrow': 'How it works',
      'how.title_a': 'From a real problem to',
      'how.title_b': 'real recognition.',
      'how.s1_t': 'An organisation posts a challenge',
      'how.s1_d': 'A coastal authority, lab, or city office frames a real sustainability problem — with a scope, a deadline, and a cash bounty.',
      'how.s2_t': 'Students and teams submit',
      'how.s2_d': 'Solo or in teams, members build solutions — a plan, a prototype, a dataset — and submit before the deadline.',
      'how.s3_t': 'Judges verify the impact',
      'how.s3_d': 'A panel reviews entries against the brief, checks the work is real, and verifies the hours behind it.',
      'how.s4_t': 'Bounties + recognition land',
      'how.s4_d': 'Winners take the cash bounty, verified hours on their Eco ID, and credit that follows them to university and beyond.',
      'how.step': 'Step',
      'org.eyebrow': 'For organisations',
      'org.title_a': 'Put your hardest problem in front of',
      'org.title_b': "Qatar's climate generation.",
      'org.sub': 'Post a challenge and tap into 2,500+ vetted, motivated students. You only recognise the solutions that actually work — and you earn visible climate credibility doing it.',
      'org.b1_t': 'Reach 2,500+ students',
      'org.b1_d': 'Vetted members across every major campus in Qatar.',
      'org.b2_t': 'Judged, verified entries',
      'org.b2_d': 'A panel checks every submission against your brief.',
      'org.b3_t': 'Pay for outcomes',
      'org.b3_d': 'Bounties are awarded to results, not promises.',
      'org.b4_t': 'Visible credibility',
      'org.b4_d': 'Back youth climate action, publicly and verifiably.',
      'org.cta_primary': 'Post a challenge',
      'org.cta_secondary': 'Talk to the team',
      'org.caption': 'Earthna Sustainability Week · 2025',
      'foot.cta_title_a': 'Got a problem worth',
      'foot.cta_title_b': 'solving?',
      'foot.cta_sub': 'Whether you want to compete or sponsor — this is where Qatar turns climate intention into impact.',
      'foot.cta_primary': 'Browse challenges',
      'foot.cta_secondary': 'Post a challenge',
      'foot.tagline': "Qatar's youth-led climate action platform. Built by students, for the planet. 🌱",
      'foot.col1': 'Platform',
      'foot.col2': 'About',
      'foot.col3': 'Legal',
      'foot.l_network': 'Network',
      'foot.l_challenges': 'Challenges',
      'foot.l_opportunities': 'Opportunities',
      'foot.l_dashboard': 'Dashboard',
      'foot.l_story': 'Our story',
      'foot.l_team': 'Team',
      'foot.l_partners': 'Partners',
      'foot.l_faq': 'FAQ',
      'foot.l_privacy': 'Privacy',
      'foot.l_terms': 'Terms',
      'foot.l_contact': 'Contact',
      'foot.copyright': '© 2026 EcoAwareness · Doha, Qatar'
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.network': 'الشبكة',
      'nav.challenges': 'التحديات',
      'nav.opportunities': 'الفرص',
      'nav.about': 'من نحن',
      'nav.signin': 'تسجيل الدخول',
      'nav.lang': 'English',
      'hero.eyebrow': 'التحديات',
      'hero.badge': 'برنامج تجريبي · قريبًا',
      'hero.title_a': 'مشكلات حقيقية.',
      'hero.title_b': 'جوائز حقيقية.',
      'hero.title_c': 'تقدير حقيقي.',
      'hero.sub': 'تطرح مؤسسات في قطر أصعب تحدياتها المناخية، ويحلّها الطلاب والفِرق مقابل جوائز نقدية وساعات موثّقة ومكانة دائمة في بطاقة Eco الخاصة بهم.',
      'hero.cta_primary': 'تصفّح التحديات',
      'hero.cta_secondary': 'كيف يعمل',
      'hero.stat1_l': 'تحدٍّ نشط',
      'hero.stat2_l': 'إجمالي الجوائز',
      'hero.stat3_l': 'جهة شريكة',
      'hero.caption': 'الفريق في أسبوع إرثنا للاستدامة — مشيرب، الدوحة.',
      'list.eyebrow': 'مفتوحة الآن',
      'list.title_a': 'اختر مشكلة،',
      'list.title_b': 'واربح حلّها.',
      'list.note': 'كل بطاقة بالأسفل هي مثال توضيحي. تظهر التحديات المدعومة من الرعاة فور توقيع الشراكات.',
      'list.featured': 'أعلى جائزة',
      'ticker.a': 'جوائز مفتوحة بقيمة 83,000 ر.ق',
      'ticker.b': '6 تحديات مباشرة',
      'ticker.c': '61 فريقًا يتنافس',
      'ticker.d': 'برنامج تجريبي — الشركاء قريبًا',
      'filter.all': 'الكل',
      'filter.coastal': 'السواحل',
      'filter.energy': 'الطاقة',
      'filter.waste': 'النفايات',
      'filter.mobility': 'التنقّل',
      'filter.data': 'البيانات',
      'filter.education': 'التعليم',
      'card.example': 'مثال',
      'card.bounty': 'الجائزة',
      'card.teams': 'فريقًا',
      'card.view': 'عرض التحدّي',
      'card.empty': 'لا توجد تحديات تجريبية في هذه الفئة بعد.',
      'status.open': 'مفتوح',
      'status.closing': 'يُغلق قريبًا',
      'status.judging': 'قيد التحكيم',
      'status.awarded': 'تم المنح',
      'how.eyebrow': 'كيف يعمل',
      'how.title_a': 'من مشكلة حقيقية إلى',
      'how.title_b': 'تقدير حقيقي.',
      'how.s1_t': 'تطرح المؤسسة تحدّيًا',
      'how.s1_d': 'تصوغ جهة ساحلية أو مختبر أو مكتب بلدي مشكلة استدامة حقيقية — بنطاق وموعد نهائي وجائزة نقدية.',
      'how.s2_t': 'يُقدّم الطلاب والفِرق',
      'how.s2_d': 'فرديًا أو ضمن فِرق، يبني الأعضاء حلولًا — خطة أو نموذجًا أوليًا أو مجموعة بيانات — ويقدّمونها قبل الموعد.',
      'how.s3_t': 'يتحقّق المحكّمون من الأثر',
      'how.s3_d': 'تراجع لجنة المشاركات وفق المتطلبات، وتتأكّد من صحّة العمل، وتوثّق الساعات وراءه.',
      'how.s4_t': 'تُمنح الجوائز والتقدير',
      'how.s4_d': 'يحصل الفائزون على الجائزة النقدية وساعات موثّقة في بطاقة Eco واعتراف يرافقهم إلى الجامعة وما بعدها.',
      'how.step': 'خطوة',
      'org.eyebrow': 'للمؤسسات',
      'org.title_a': 'اطرح أصعب مشكلاتك أمام',
      'org.title_b': 'جيل المناخ في قطر.',
      'org.sub': 'اطرح تحدّيًا وتواصل مع أكثر من 2,500 طالب متحمّس ومُدقَّق. لا تكافئ سوى الحلول التي تنجح فعلًا — وتكسب مصداقية مناخية واضحة في الوقت نفسه.',
      'org.b1_t': 'أكثر من 2,500 طالب',
      'org.b1_d': 'أعضاء مُدقَّقون من كل الحرم الجامعية الكبرى في قطر.',
      'org.b2_t': 'مشاركات مُحكَّمة وموثّقة',
      'org.b2_d': 'تتحقّق لجنة من كل مشاركة وفق متطلباتك.',
      'org.b3_t': 'ادفع مقابل النتائج',
      'org.b3_d': 'تُمنح الجوائز للنتائج لا للوعود.',
      'org.b4_t': 'مصداقية واضحة',
      'org.b4_d': 'ادعم عمل الشباب المناخي علنًا وبشكل موثّق.',
      'org.cta_primary': 'اطرح تحدّيًا',
      'org.cta_secondary': 'تحدّث مع الفريق',
      'org.caption': 'أسبوع إرثنا للاستدامة · 2025',
      'foot.cta_title_a': 'لديك مشكلة تستحق',
      'foot.cta_title_b': 'الحل؟',
      'foot.cta_sub': 'سواء أردت المنافسة أو الرعاية — هنا تحوّل قطر النية المناخية إلى أثر.',
      'foot.cta_primary': 'تصفّح التحديات',
      'foot.cta_secondary': 'اطرح تحدّيًا',
      'foot.tagline': 'منصّة العمل المناخي بقيادة الشباب في قطر. بُنيت بأيدي الطلاب، من أجل الكوكب. 🌱',
      'foot.col1': 'المنصّة',
      'foot.col2': 'عن المنصّة',
      'foot.col3': 'قانوني',
      'foot.l_network': 'الشبكة',
      'foot.l_challenges': 'التحديات',
      'foot.l_opportunities': 'الفرص',
      'foot.l_dashboard': 'لوحة التحكم',
      'foot.l_story': 'قصتنا',
      'foot.l_team': 'الفريق',
      'foot.l_partners': 'الشركاء',
      'foot.l_faq': 'الأسئلة الشائعة',
      'foot.l_privacy': 'الخصوصية',
      'foot.l_terms': 'الشروط',
      'foot.l_contact': 'تواصل',
      'foot.copyright': '© 2026 إيكو أويرنس · الدوحة، قطر'
    }
  };

  /* ── CHALLENGE DATA ─────────────────────────────────────────────
     Edit this array to change the cards — no markup edits needed.
     All cards are EXAMPLES; sponsors are role-based placeholders,
     never real companies, until partners are signed.            */
  const CHALLENGES = [{
    id: 'mangrove',
    cat: 'coastal',
    status: 'open',
    featured: true,
    bounty: 'QR 20,000',
    teams: 9,
    sponsor: {
      en: 'Coastal authority · example',
      ar: 'جهة ساحلية · مثال'
    },
    title: {
      en: 'Restore one hectare of Al Thakira mangrove',
      ar: 'إعادة تأهيل هكتار من أشجار القرم في الذخيرة'
    },
    deadline: {
      en: 'Closes 30 Sep',
      ar: 'يُغلق 30 سبتمبر'
    },
    cover: {
      type: 'photo',
      src: 'assets/challenges/team-earthna.jpg',
      pos: '50% 58%'
    }
  }, {
    id: 'peak-load',
    cat: 'energy',
    status: 'closing',
    bounty: 'QR 15,000',
    teams: 12,
    sponsor: {
      en: 'Campus energy lab · example',
      ar: 'مختبر طاقة جامعي · مثال'
    },
    title: {
      en: 'Cut a campus building peak load by 15%',
      ar: 'خفض ذروة استهلاك مبنى جامعي بنسبة 15%'
    },
    deadline: {
      en: 'Closes 12 Aug',
      ar: 'يُغلق 12 أغسطس'
    },
    cover: {
      type: 'art',
      key: 'energy',
      icon: 'ph:lightning-fill'
    }
  }, {
    id: 'compost',
    cat: 'waste',
    status: 'open',
    bounty: 'QR 12,000',
    teams: 6,
    sponsor: {
      en: 'Campus operations · example',
      ar: 'تشغيل الحرم · مثال'
    },
    title: {
      en: 'Design a dorm-to-compost pipeline',
      ar: 'تصميم منظومة تحويل نفايات السكن إلى سماد'
    },
    deadline: {
      en: 'Closes 18 Oct',
      ar: 'يُغلق 18 أكتوبر'
    },
    cover: {
      type: 'art',
      key: 'waste',
      icon: 'ph:recycle-fill'
    }
  }, {
    id: 'cycling',
    cat: 'mobility',
    status: 'judging',
    bounty: 'QR 10,000',
    teams: 15,
    sponsor: {
      en: 'City mobility office · example',
      ar: 'مكتب التنقّل بالمدينة · مثال'
    },
    title: {
      en: 'Map the safest cycling routes across the city',
      ar: 'رسم أكثر مسارات الدراجات أمانًا في المدينة'
    },
    deadline: {
      en: 'Judging now',
      ar: 'قيد التحكيم الآن'
    },
    cover: {
      type: 'art',
      key: 'mobility',
      icon: 'ph:bicycle-fill'
    }
  }, {
    id: 'air-data',
    cat: 'data',
    status: 'open',
    bounty: 'QR 18,000',
    teams: 8,
    sponsor: {
      en: 'Open data initiative · example',
      ar: 'مبادرة بيانات مفتوحة · مثال'
    },
    title: {
      en: 'Build an open dashboard for Doha air quality',
      ar: 'بناء لوحة بيانات مفتوحة لجودة الهواء في الدوحة'
    },
    deadline: {
      en: 'Closes 05 Nov',
      ar: 'يُغلق 05 نوفمبر'
    },
    cover: {
      type: 'art',
      key: 'data',
      icon: 'ph:chart-line-up-fill'
    }
  }, {
    id: 'carbon-game',
    cat: 'education',
    status: 'awarded',
    bounty: 'QR 8,000',
    teams: 11,
    sponsor: {
      en: 'Schools network · example',
      ar: 'شبكة مدارس · مثال'
    },
    title: {
      en: 'A carbon-literacy game for high schoolers',
      ar: 'لعبة لتعليم الوعي الكربوني لطلاب الثانوية'
    },
    deadline: {
      en: 'Awarded May 26',
      ar: 'مُنحت في مايو 2026'
    },
    cover: {
      type: 'art',
      key: 'education',
      icon: 'ph:game-controller-fill'
    }
  }];

  /* Art-cover palettes keyed to category */
  const ART = {
    energy: {
      bg: 'var(--ink)',
      accent: 'var(--lime)',
      motif: 'grid'
    },
    waste: {
      bg: 'var(--green)',
      accent: 'var(--lime)',
      motif: 'topo'
    },
    mobility: {
      bg: 'var(--green-dark)',
      accent: 'var(--lime)',
      motif: 'diag'
    },
    data: {
      bg: 'var(--rust)',
      accent: '#FFE9D9',
      motif: 'grid'
    },
    education: {
      bg: 'var(--lime)',
      accent: 'var(--green-dark)',
      motif: 'rings'
    }
  };
  const STATUS_CLASS = {
    open: 'st-open',
    closing: 'st-closing',
    judging: 'st-judging',
    awarded: 'st-awarded'
  };
  let lang = localStorage.getItem('eco-lang') || 'en';
  let activeFilter = 'all';
  const t = key => I18N[lang] && I18N[lang][key] || I18N.en[key] || key;

  /* ── MOTIF SVG ──────────────────────────────────────────────── */
  function motifSVG(kind, color) {
    if (kind === 'grid') {
      return `<svg class="cover-motif" viewBox="0 0 300 150" preserveAspectRatio="none"><defs><pattern id="m-${kind}-${color.replace(/[^a-z0-9]/gi, '')}" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M0 18 L18 18 M18 0 L18 18" stroke="${color}" stroke-width="0.8" fill="none"/></pattern></defs><rect width="300" height="150" fill="url(#m-${kind}-${color.replace(/[^a-z0-9]/gi, '')})" opacity="0.18"/></svg>`;
    }
    if (kind === 'topo') {
      let p = '';
      [20, 45, 70, 95, 120].forEach(y => {
        p += `<path d="M0 ${y} Q 75 ${y - 14} 150 ${y} T 300 ${y}" fill="none" stroke="${color}" stroke-width="1" opacity="0.32"/>`;
      });
      return `<svg class="cover-motif" viewBox="0 0 300 150" preserveAspectRatio="none">${p}</svg>`;
    }
    if (kind === 'diag') {
      return `<svg class="cover-motif" viewBox="0 0 300 150" preserveAspectRatio="none"><defs><pattern id="d-${color.replace(/[^a-z0-9]/gi, '')}" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="16" stroke="${color}" stroke-width="1.4"/></pattern></defs><rect width="300" height="150" fill="url(#d-${color.replace(/[^a-z0-9]/gi, '')})" opacity="0.22"/></svg>`;
    }
    if (kind === 'rings') {
      let c = '';
      [30, 60, 92, 126, 162].forEach((r, i) => {
        c += `<circle cx="-10" cy="170" r="${r}" fill="none" stroke="${color}" stroke-width="1.2" opacity="${0.5 - i * 0.07}"/>`;
      });
      return `<svg class="cover-motif" viewBox="0 0 300 150" preserveAspectRatio="none">${c}</svg>`;
    }
    return '';
  }

  /* ── CARD TEMPLATE ──────────────────────────────────────────── */
  function cardHTML(c) {
    let cover;
    if (c.cover.type === 'photo') {
      cover = `<div class="cc-cover">
        <img src="${c.cover.src}" alt="${c.title[lang] || c.title.en}" loading="lazy" decoding="async" style="object-position:${c.cover.pos || '50% 50%'}"/>
        <div class="cc-cover-veil"></div>
      </div>`;
    } else {
      const a = ART[c.cover.key] || ART.energy;
      cover = `<div class="cc-cover cc-cover-art" style="background:${a.bg}">
        ${motifSVG(a.motif, a.accent)}
        <iconify-icon icon="${c.cover.icon}" width="58" style="color:${a.accent}"></iconify-icon>
      </div>`;
    }
    const flag = c.featured ? `<span class="cc-flag"><iconify-icon icon="ph:crown-simple-fill" width="13"></iconify-icon>${t('list.featured')}</span>` : '';
    return `<article class="challenge-card${c.featured ? ' is-featured' : ''}" data-cat="${c.cat}" tabindex="0">
      ${cover}
      ${flag}
      <span class="cc-example">${t('card.example')}</span>
      <div class="cc-body">
        <div class="cc-row">
          <span class="cc-cat">${t('filter.' + c.cat)}</span>
          <span class="status-badge ${STATUS_CLASS[c.status]}"><span class="dot"></span>${t('status.' + c.status)}</span>
        </div>
        <h3 class="cc-title">${c.title[lang] || c.title.en}</h3>
        <p class="cc-sponsor">${c.sponsor[lang] || c.sponsor.en}</p>
        <div class="cc-bounty">
          <span class="cc-bounty-label">${t('card.bounty')}</span>
          <span class="cc-bounty-val">${c.bounty}</span>
        </div>
        <div class="cc-meta">
          <span class="cc-teams"><iconify-icon icon="ph:users-three-fill" width="15"></iconify-icon> ${c.teams} ${t('card.teams')}</span>
          <span class="cc-deadline">${c.deadline[lang] || c.deadline.en}</span>
        </div>
        <span class="cc-view">${t('card.view')} <iconify-icon icon="ph:arrow-right" width="15"></iconify-icon></span>
      </div>
    </article>`;
  }
  function renderCards() {
    const grid = document.getElementById('challengeGrid');
    if (!grid) return;
    const visible = activeFilter === 'all' ? CHALLENGES : CHALLENGES.filter(c => c.cat === activeFilter);
    if (!visible.length) {
      grid.innerHTML = `<p class="cc-empty">${t('card.empty')}</p>`;
      return;
    }
    grid.innerHTML = visible.map(cardHTML).join('');
    // arrow direction for RTL handled by CSS; observe reveal
    grid.querySelectorAll('.challenge-card').forEach((el, i) => {
      el.style.setProperty('--i', i);
      revealObserver.observe(el);
    });
  }

  /* ── i18n APPLY ─────────────────────────────────────────────── */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('ar', lang === 'ar');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    renderCards();
  }
  function setLang(next) {
    lang = next;
    localStorage.setItem('eco-lang', lang);
    applyI18n();
  }

  /* ── SCROLL REVEAL ──────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        revealObserver.unobserve(e.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  /* ── INIT ───────────────────────────────────────────────────── */
  function init() {
    // nav scroll state
    const nav = document.getElementById('nav');
    const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();

    // language toggles (there may be more than one)
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => setLang(lang === 'en' ? 'ar' : 'en'));
    });

    // filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
        renderCards();
      });
    });

    // reveal everything tagged .reveal
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // mobile nav drawer
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    if (burger && drawer) {
      const toggle = () => {
        const open = drawer.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      };
      burger.addEventListener('click', toggle);
      drawer.querySelectorAll('a, button').forEach(a => a.addEventListener('click', () => {
        if (drawer.classList.contains('open')) toggle();
      }));
    }
    applyI18n();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/js/challenges.js", error: String((e && e.message) || e) }); }

// assets/js/ecohub-enhancements.js
try { (() => {
(function () {
  const SUPABASE_URL = 'https://nqvhxjsryatqgfvtjbki.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmh4anNyeWF0cWdmdnRqYmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNDYxMDAsImV4cCI6MjA4ODYyMjEwMH0.HrnrIq5bK3FhxmHaLxWPIG0nD-CI-3ReHCoO5RL1c3M';
  const STORE_KEYS = {
    eventQueue: 'ecohub_pending_event_submissions',
    profilePrefs: 'ecohub_profile_preferences',
    portfolio: 'ecohub_portfolio_snapshot'
  };
  function getSupabase() {
    if (!window.supabase) return null;
    if (!window.EcoHubSupabase) {
      window.EcoHubSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return window.EcoHubSupabase;
  }
  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }
  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }
  function notify(message) {
    if (typeof window.showDashToast === 'function') window.showDashToast(message);else if (typeof window._showToast === 'function') window._showToast(message);
  }
  function optimizeMedia() {
    document.querySelectorAll('img').forEach((img, index) => {
      if (index > 1 && !img.hasAttribute('loading')) img.loading = 'lazy';
      if (!img.hasAttribute('decoding')) img.decoding = 'async';
    });
    document.querySelectorAll('video').forEach(video => {
      if (!video.hasAttribute('preload')) video.preload = 'metadata';
      video.setAttribute('playsinline', '');
    });
  }
  function installSmoothPageTransition() {
    const overlay = document.getElementById('page-transition');
    const logo = document.getElementById('transition-logo');
    if (!overlay || !logo || overlay.dataset.ecohubSmooth === 'true') return;
    overlay.dataset.ecohubSmooth = 'true';
    const style = document.createElement('style');
    style.textContent = `
            #page-transition {
                opacity: 1 !important;
                visibility: visible;
                background:
                    radial-gradient(circle at 50% 46%, rgba(168,224,99,0.12), transparent 34%),
                    #0d3a22 !important;
                transition: opacity 480ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear 480ms !important;
            }
            #page-transition.ecohub-hidden {
                opacity: 0 !important;
                visibility: hidden;
            }
            #page-transition.ecohub-leaving {
                opacity: 1 !important;
                visibility: visible;
                transition: opacity 360ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s !important;
            }
            #transition-logo {
                width: clamp(68px, 8vw, 96px) !important;
                height: clamp(68px, 8vw, 96px) !important;
                object-fit: contain !important;
                transform: translateY(0) scale(1);
                opacity: 1;
                filter: drop-shadow(0 18px 32px rgba(0,0,0,0.22));
                transition:
                    transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 360ms ease !important;
            }
            #page-transition.ecohub-ready #transition-logo {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            #page-transition.ecohub-leaving #transition-logo,
            #page-transition.leaving #transition-logo {
                transform: translateY(-2px) scale(1.08) !important;
                opacity: 1;
            }
            @media (prefers-reduced-motion: reduce) {
                #page-transition, #transition-logo { transition: none !important; }
            }
        `;
    document.head.appendChild(style);
    const hide = () => {
      overlay.classList.remove('leaving', 'ecohub-leaving');
      overlay.classList.add('ecohub-ready');
      requestAnimationFrame(() => overlay.classList.add('ecohub-hidden'));
    };
    if (logo.decode) logo.decode().catch(() => {}).finally(hide);else if (logo.complete) hide();else logo.addEventListener('load', hide, {
      once: true
    });
    setTimeout(hide, 900);
    document.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = link.getAttribute('href');
      const target = link.getAttribute('target');
      if (!url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:') || target === '_blank') return;
      if (link.hostname && link.hostname !== window.location.hostname) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      overlay.classList.remove('ecohub-hidden');
      overlay.classList.add('ecohub-ready', 'ecohub-leaving');
      setTimeout(() => {
        window.location.href = link.href;
      }, 320);
    }, true);
    window.addEventListener('pageshow', () => {
      overlay.classList.remove('leaving', 'ecohub-leaving');
      overlay.classList.add('ecohub-ready', 'ecohub-hidden');
    });
  }
  async function getSession() {
    const sb = getSupabase();
    if (!sb) return null;
    const {
      data
    } = await sb.auth.getSession();
    return data?.session || null;
  }
  async function upsertProfileSnapshot(extra) {
    const session = await getSession();
    if (!session?.user) return null;
    const meta = session.user.user_metadata || {};
    const snapshot = {
      id: session.user.id,
      email: session.user.email,
      full_name: extra?.full_name || meta.full_name || meta.name || session.user.email?.split('@')[0] || 'EcoHub Member',
      bio: extra?.bio || meta.bio || '',
      location: extra?.location || meta.location || 'Qatar',
      interests: extra?.interests || readJson(STORE_KEYS.profilePrefs, {}).interests || [],
      skills: extra?.skills || readJson(STORE_KEYS.profilePrefs, {}).skills || [],
      updated_at: new Date().toISOString()
    };
    writeJson(STORE_KEYS.portfolio, snapshot);
    const sb = getSupabase();
    const {
      error
    } = await sb.from('eco_profiles').upsert(snapshot, {
      onConflict: 'id'
    });
    if (error) return snapshot;
    return snapshot;
  }
  async function submitEventToPlatform(eventData) {
    const session = await getSession();
    const payload = {
      title: eventData.name,
      organization: eventData.org,
      event_date: eventData.date || null,
      location: eventData.location || '',
      description: eventData.desc || '',
      expected_volunteers: eventData.volunteers ? Number(eventData.volunteers) : null,
      region: 'qatar',
      status: 'pending',
      submitted_by: session?.user?.id || null
    };
    const sb = getSupabase();
    if (sb) {
      const {
        error
      } = await sb.from('eco_opportunities').insert(payload);
      if (!error) return {
        synced: true
      };
    }
    const queued = readJson(STORE_KEYS.eventQueue, []);
    queued.unshift({
      ...payload,
      queued_at: new Date().toISOString()
    });
    writeJson(STORE_KEYS.eventQueue, queued.slice(0, 50));
    return {
      synced: false
    };
  }
  async function syncEventSignup(evt) {
    const session = await getSession();
    if (!session?.user) return;
    const sb = getSupabase();
    if (!sb) return;
    await sb.from('eco_event_signups').upsert({
      user_id: session.user.id,
      opportunity_title: evt.title,
      organization: evt.org || '',
      event_date: evt.date || '',
      external_url: evt.url || '',
      status: evt.status || 'upcoming',
      source: evt.external ? 'external' : 'ecohub'
    }, {
      onConflict: 'user_id,opportunity_title'
    });
  }
  function wrapEventStorage() {
    if (typeof window.addMyEvent === 'function' && !window.addMyEvent.__enhanced) {
      const original = window.addMyEvent;
      window.addMyEvent = function (evt) {
        const added = original(evt);
        if (added) syncEventSignup(evt);
        return added;
      };
      window.addMyEvent.__enhanced = true;
    }
    ['applyInternal', 'applyOutside'].forEach(name => {
      if (typeof window[name] !== 'function' || window[name].__enhanced) return;
      const original = window[name];
      window[name] = function () {
        const result = original.apply(this, arguments);
        const evt = {
          title: arguments[1],
          org: arguments[2],
          date: arguments[3],
          url: name === 'applyOutside' ? arguments[4] : '',
          external: name === 'applyOutside',
          status: 'Upcoming'
        };
        syncEventSignup(evt);
        return result;
      };
      window[name].__enhanced = true;
    });
  }
  function enhancePostEvent() {
    if (typeof window.submitPostEvent !== 'function' || window.submitPostEvent.__enhanced) return;
    window.submitPostEvent = async function () {
      const eventData = {
        name: document.getElementById('pe-name')?.value.trim(),
        org: document.getElementById('pe-org')?.value.trim(),
        date: document.getElementById('pe-date')?.value,
        location: document.getElementById('pe-location')?.value.trim(),
        desc: document.getElementById('pe-desc')?.value.trim(),
        volunteers: document.getElementById('pe-volunteers')?.value.trim()
      };
      if (!eventData.name || !eventData.org || !eventData.date) {
        notify('Please fill in the required fields');
        return;
      }
      const result = await submitEventToPlatform(eventData);
      if (typeof window.closeGenericModal === 'function') window.closeGenericModal('post-event-modal');
      notify(result.synced ? 'Event submitted for review!' : 'Event saved locally. It will sync when the database is ready.');
    };
    window.submitPostEvent.__enhanced = true;
  }
  function enhanceProfileSave() {
    if (typeof window.saveProfile !== 'function' || window.saveProfile.__enhanced) return;
    const original = window.saveProfile;
    window.saveProfile = async function () {
      await original();
      await upsertProfileSnapshot({
        full_name: document.getElementById('p-name')?.textContent || '',
        bio: document.getElementById('p-bio')?.textContent || '',
        location: document.getElementById('p-location')?.querySelector('span')?.textContent || ''
      });
    };
    window.saveProfile.__enhanced = true;
  }
  function enhanceEcoIdSharing() {
    if (typeof window.shareEcoId !== 'function' || window.shareEcoId.__enhanced) return;
    window.shareEcoId = async function () {
      const snapshot = await upsertProfileSnapshot();
      const memberId = document.getElementById('ecoid-member-id')?.textContent || 'ECO-ID';
      const name = document.getElementById('ecoid-name')?.textContent || snapshot?.full_name || 'EcoHub Member';
      const url = new URL('portfolio.html', window.location.href);
      if (snapshot?.id) url.searchParams.set('uid', snapshot.id);
      const text = `I'm ${name}, an EcoHub member. My ID: ${memberId}`;
      if (navigator.share) {
        navigator.share({
          title: 'EcoHub Climate Portfolio',
          text,
          url: url.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(`${text}\n${url.href}`).then(() => notify('Portfolio link copied!'));
      }
    };
    window.shareEcoId.__enhanced = true;
  }
  async function bootEnhancements() {
    optimizeMedia();
    installSmoothPageTransition();
    wrapEventStorage();
    enhancePostEvent();
    enhanceProfileSave();
    enhanceEcoIdSharing();
    await upsertProfileSnapshot();
  }
  document.addEventListener('DOMContentLoaded', () => {
    bootEnhancements();
    setTimeout(bootEnhancements, 1200);
  });
  window.EcoHubEnhancements = {
    getSupabase,
    submitEventToPlatform,
    syncEventSignup,
    upsertProfileSnapshot
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/js/ecohub-enhancements.js", error: String((e && e.message) || e) }); }

// ui_kits/web/AuthSplit.jsx
try { (() => {
/* global React, LogoMark, Wordmark, Button */
const {
  useState: useStateAuth
} = React;
function AuthSplit({
  mode = 'signin',
  onClose,
  onComplete
}) {
  const [email, setEmail] = useStateAuth('');
  const [pwd, setPwd] = useStateAuth('');
  const [showPwd, setShowPwd] = useStateAuth(false);
  const isSignup = mode === 'signup';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(960px, 100%)',
      maxHeight: '92vh',
      overflow: 'hidden',
      borderRadius: 32,
      background: 'var(--paper)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-dark)',
      color: '#fff',
      padding: 40,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '32px 0 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      backgroundSize: '52px 52px',
      mask: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      WebkitMask: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 32
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 44,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, isSignup ? /*#__PURE__*/React.createElement(React.Fragment, null, "Start your ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--lime)',
      fontStyle: 'italic'
    }
  }, "Eco journey.")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Welcome ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--lime)',
      fontStyle: 'italic'
    }
  }, "back."))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.7,
      fontWeight: 300
    }
  }, isSignup ? 'Track verified hours, apply to opportunities, and join the network.' : 'Sign in to your Eco ID and pick up where you left off.')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\uD83C\uDF31 Built by youth, for the planet.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      margin: 0,
      color: 'var(--ink)'
    }
  }, isSignup ? 'Create your Eco ID' : 'Sign in'), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '14px',
      borderRadius: 14,
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.10)',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#FFC107",
    d: "M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.4-.1-2.4-.4-3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FF3D00",
    d: "M6.3 14.1l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4CAF50",
    d: "M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.2c-1.9 1.5-4.4 2.4-7.3 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#1976D2",
    d: "M43.6 20.5h-1.9V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2c-.4.4 6.7-4.9 6.7-14.8 0-1.4-.1-2.4-.4-3.5z"
  })), "Continue with Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 11,
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      letterSpacing: '0.15em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(0,0,0,0.08)'
    }
  }), "or", /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(0,0,0,0.08)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--ink-2)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@stu.cmu.edu",
    style: {
      height: 48,
      padding: '0 16px',
      borderRadius: 14,
      border: '1px solid rgba(0,0,0,0.10)',
      background: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--ink-2)'
    }
  }, "Password"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showPwd ? 'text' : 'password',
    value: pwd,
    onChange: e => setPwd(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      height: 48,
      padding: '0 44px 0 16px',
      borderRadius: 14,
      border: '1px solid rgba(0,0,0,0.10)',
      background: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      outline: 'none',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowPwd(!showPwd),
    style: {
      position: 'absolute',
      right: 8,
      top: 8,
      height: 32,
      width: 32,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      fontSize: 14
    }
  }, showPwd ? '🙈' : '👁'))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onComplete?.(),
    icon: "\u2192"
  }, isSignup ? 'Create account' : 'Sign in'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      textAlign: 'center',
      margin: 0
    }
  }, isSignup ? 'Already have an Eco ID?' : "Don't have one yet?", /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--green)',
      marginLeft: 6,
      cursor: 'pointer',
      fontWeight: 500
    }
  }, isSignup ? 'Sign in' : 'Create one')))));
}
window.AuthSplit = AuthSplit;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/AuthSplit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Dashboard.jsx
try { (() => {
/* global React, Wordmark, LogoMark, Eyebrow, Pill, Button */

function Dashboard({
  onSignOut
}) {
  const events = [{
    t: 'Mangrove planting · Al Thakira',
    date: 'Nov 12 · 4h',
    tag: 'Verified'
  }, {
    t: 'Education City cleanup',
    date: 'Dec 02 · 3h',
    tag: 'Verified'
  }, {
    t: 'Carbon literacy workshop',
    date: 'Jan 18 · 6h',
    tag: 'Pending'
  }];
  const totalHours = 7;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--paper)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: '#fff',
      borderRight: '1px solid rgba(0,0,0,0.06)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 32
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 16
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [{
    l: 'Dashboard',
    a: true
  }, {
    l: 'Opportunities'
  }, {
    l: 'My Eco ID'
  }, {
    l: 'Network'
  }, {
    l: 'Resources'
  }, {
    l: 'Settings'
  }].map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      padding: '10px 12px',
      borderRadius: 12,
      fontSize: 13,
      color: it.a ? 'var(--ink)' : 'var(--ink-2)',
      background: it.a ? 'var(--sand)' : 'transparent',
      fontWeight: it.a ? 500 : 400,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, it.l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16,
      borderTop: '1px solid rgba(0,0,0,0.06)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onSignOut,
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, "Sign out"))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '40px 48px',
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "rust"
  }, "YOUR DASHBOARD"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      margin: '14px 0 0',
      color: 'var(--ink)'
    }
  }, "Welcome back, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--green)',
      fontStyle: 'italic'
    }
  }, "Ahmed.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-2)',
      marginTop: 8,
      fontWeight: 300
    }
  }, "You've logged ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, totalHours, " verified hours"), " this term. Two new opportunities match your profile."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      background: 'var(--green-dark)',
      color: '#fff',
      borderRadius: 24,
      padding: 28,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 24px 60px -20px rgba(13,58,34,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-30%',
      right: '-10%',
      width: '50%',
      height: '160%',
      background: 'radial-gradient(ellipse, rgba(168,224,99,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lime"
  }, "ECO ID \xB7 QC\u20112026\u201100128"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      lineHeight: 1.1
    }
  }, "Ahmed Al\u2011Thani"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "CMU\u2011Q \xB7 Computer Science \xB7 Class of 2027"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "onDark",
    dot: true
  }, "Verified"), /*#__PURE__*/React.createElement(Pill, {
    variant: "onDark"
  }, "Class of 2027"), /*#__PURE__*/React.createElement(Pill, {
    variant: "onDark"
  }, "CMU\u2011Q"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 72,
      lineHeight: 1,
      color: 'var(--lime)',
      letterSpacing: '-0.02em'
    }
  }, totalHours, "h"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "verified \xB7 this term")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "rust"
  }, "YOUR RECENT EVENTS"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      color: 'var(--green)',
      cursor: 'pointer'
    }
  }, "See all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, events.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: 14,
      padding: '16px 18px',
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--ink)'
    }
  }, ev.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, ev.date), /*#__PURE__*/React.createElement(Pill, {
    variant: ev.tag === 'Verified' ? 'lime' : 'default',
    dot: true
  }, ev.tag))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Find new opportunity"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostLight",
    icon: null
  }, "Export hours"))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Footer.jsx
try { (() => {
/* global React, Wordmark, LogoMark */

function FooterScoop() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 6rem) clamp(6rem, 10vw, 9rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at top right, rgba(168,224,99,0.18), transparent 60%), radial-gradient(ellipse at bottom left, rgba(196,98,45,0.12), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Built by youth, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--lime)',
      fontStyle: 'italic'
    }
  }, "for the planet.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.78)',
      fontWeight: 300,
      maxWidth: 560
    }
  }, "Join 2,500+ students already turning intention into impact."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '14px 28px',
      borderRadius: 100,
      background: 'var(--lime)',
      color: 'var(--green-dark)',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Get started \u2192"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '14px 28px',
      borderRadius: 100,
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.3)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Email us")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-dark)',
      color: '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 80",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      top: -1,
      left: 0,
      width: '100%',
      height: 80,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,80 C480,0 960,0 1440,80 L1440,0 L0,0 Z",
    fill: "var(--green)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '120px 0 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    size: 36
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)',
      lineHeight: 1.7,
      fontWeight: 300,
      maxWidth: 280,
      margin: 0
    }
  }, "Qatar's youth-led climate action platform. Built by students, for the planet. \uD83C\uDF31")), [{
    h: 'Platform',
    l: ['Network', 'Opportunities', 'Resources', 'Dashboard']
  }, {
    h: 'About',
    l: ['Our story', 'Team', 'Partners', 'FAQ']
  }, {
    h: 'Legal',
    l: ['Privacy', 'Terms', 'Contact']
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--lime)',
      margin: '0 0 16px',
      fontWeight: 500
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.l.map((li, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, li))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '20px clamp(1.5rem, 6vw, 6rem)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 EcoAwareness \xB7 Doha, Qatar"), /*#__PURE__*/React.createElement("span", null, "EN \xB7 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"))));
}
window.FooterScoop = FooterScoop;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Hero.jsx
try { (() => {
/* global React, Eyebrow, Button */

function Hero({
  onJoin,
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100dvh',
      background: 'var(--green-dark)',
      color: '#fff',
      display: 'grid',
      gridTemplateRows: '1fr auto',
      padding: 'clamp(110px, 13vh, 170px) clamp(1.5rem, 6vw, 6rem) 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-10%',
      right: '-10%',
      width: '70%',
      height: '70%',
      background: 'radial-gradient(ellipse, rgba(168,224,99,0.18), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-15%',
      left: '-10%',
      width: '60%',
      height: '60%',
      background: 'radial-gradient(ellipse, rgba(196,98,45,0.14), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '3%',
      top: '14%',
      fontFamily: 'var(--font-arabic)',
      fontSize: '18vw',
      color: 'rgba(255,255,255,0.035)',
      lineHeight: 1,
      fontWeight: 500,
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: 0
    }
  }, "\u0628\u064A\u0626\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 2,
      alignSelf: 'center',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
      gap: 'clamp(32px, 5vw, 72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lime"
  }, "QATAR'S CLIMATE GENERATION"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.8rem, 6.2vw, 5.6rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Where Qatar's ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lime)'
    }
  }, "climate generation"), " takes action."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      maxWidth: 540,
      color: 'rgba(255,255,255,0.78)',
      fontWeight: 300,
      margin: 0
    }
  }, "One profile. Every opportunity. Verified hours. Real recognition. Built by students, for students \u2014 bilingual, free, forever."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "lime",
    onClick: onJoin
  }, "Join the Network"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostDark",
    icon: null,
    onClick: onSignIn
  }, "See how it works"))), /*#__PURE__*/React.createElement(HeroCollage, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      margin: '4rem auto 0',
      maxWidth: 1240,
      width: '100%',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      padding: '24px 0'
    }
  }, [{
    n: '2,500+',
    l: 'Active members'
  }, {
    n: '60+',
    l: 'Partner orgs'
  }, {
    n: '15k',
    l: 'Verified hours'
  }, {
    n: '50+',
    l: 'Initiatives'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: i ? '1px solid rgba(255,255,255,0.1)' : 'none',
      paddingLeft: i ? 24 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--lime)',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, s.l)))));
}
function HeroCollage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '0.92 / 1',
      maxWidth: 540,
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -18,
      top: -18,
      width: '38%',
      aspectRatio: '1/1',
      background: 'var(--lime)',
      borderRadius: 22,
      zIndex: 0,
      boxShadow: '0 30px 60px rgba(168,224,99,0.18)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -22,
      bottom: 28,
      width: '28%',
      aspectRatio: '1/1',
      border: '1.5px solid rgba(168,224,99,0.45)',
      borderRadius: 20,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 6% 14% 4%',
      borderRadius: 22,
      overflow: 'hidden',
      zIndex: 2,
      boxShadow: '0 40px 80px rgba(0,0,0,0.45), 0 8px 20px rgba(0,0,0,0.3)',
      transform: 'rotate(-1.5deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ecoawareness.me group photo with mr Q.jpeg",
    alt: "EcoAwareness team at Earthna Sustainability Week",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 58%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 45%, rgba(11,46,29,0.78))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      right: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--lime)',
      fontWeight: 600
    }
  }, "\u2014 Earthna Sustainability Week '25"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 22,
      lineHeight: 1.15,
      color: '#fff'
    }
  }, "The team, on the ground.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      borderRadius: 100,
      background: 'rgba(11,46,29,0.55)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 100,
      background: 'var(--lime)',
      boxShadow: '0 0 8px var(--lime)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.12em',
      color: '#fff',
      textTransform: 'uppercase'
    }
  }, "On site \xB7 Doha"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-2%',
      bottom: '-2%',
      width: '46%',
      background: '#fff',
      padding: '10px 10px 36px',
      borderRadius: 8,
      boxShadow: '0 30px 60px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.2)',
      transform: 'rotate(5deg)',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 4,
      overflow: 'hidden',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/Firas.jpeg",
    alt: "Firas, co-founder",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 22%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 10,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, "Firas \xB7 co-founder")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-6%',
      top: '32%',
      background: '#fff',
      color: 'var(--ink)',
      borderRadius: 14,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 24px 50px rgba(0,0,0,0.35)',
      zIndex: 4,
      transform: 'rotate(-4deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: 'var(--lime)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "ph:seal-check-fill",
    width: "20",
    style: {
      color: 'var(--green-dark)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1,
      color: 'var(--green-dark)'
    }
  }, "+4h verified"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginTop: 3
    }
  }, "Mangrove \xB7 Al Thakira"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Nav.jsx
try { (() => {
/* global React, LogoMark, Wordmark, Button */
const {
  useState: useStateNav,
  useEffect: useEffectNav
} = React;
function Nav({
  active = 'home',
  onNav
}) {
  const [scrolled, setScrolled] = useStateNav(false);
  const [open, setOpen] = useStateNav(false);
  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'network',
    label: 'Network'
  }, {
    id: 'opportunities',
    label: 'Opportunities'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'faq',
    label: 'FAQ'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(1180px, calc(100% - 28px))',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px',
      borderRadius: 100,
      background: scrolled ? 'rgba(245,240,232,0.93)' : 'rgba(245,240,232,0.55)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border: '1px solid rgba(0,0,0,0.06)',
      transition: 'background 300ms cubic-bezier(0.25,1,0.5,1)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav?.('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/ecoawareness-logo.png",
    alt: "EcoAwareness",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav?.(l.id),
    style: {
      fontSize: 13,
      color: active === l.id ? 'var(--ink)' : 'var(--ink-2)',
      fontWeight: active === l.id ? 500 : 400,
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 200ms'
    }
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "\u2192",
    onClick: () => onNav?.('signin')
  }, "Sign in"));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Opportunities.jsx
try { (() => {
/* global React, Eyebrow, Button, Pill */
const {
  useState: useStateOpps
} = React;
const COVER_BY_TITLE = {
  'Mangrove planting at Al Thakira': {
    type: 'photo',
    src: '../../assets/ecoawareness.me group photo with mr Q.jpeg',
    pos: '50% 60%',
    tint: 'linear-gradient(180deg, rgba(11,46,29,0.0) 50%, rgba(11,46,29,0.85))'
  },
  'Climate policy intern, summer 2026': {
    type: 'art',
    bg: 'var(--ink)',
    accent: 'var(--lime)',
    icon: 'ph:flask-fill',
    motif: 'grid'
  },
  'Youth Climate Action micro-grant': {
    type: 'art',
    bg: 'var(--lime)',
    accent: 'var(--green-dark)',
    icon: 'ph:coin-vertical-fill',
    motif: 'rings'
  },
  'Education City cleanup walk': {
    type: 'art',
    bg: 'var(--green)',
    accent: 'var(--lime)',
    icon: 'ph:leaf-fill',
    motif: 'topo'
  },
  'Carbon literacy for high schoolers': {
    type: 'art',
    bg: 'var(--rust)',
    accent: '#FFE9D9',
    icon: 'ph:chalkboard-teacher-fill',
    motif: 'diag'
  },
  'Doha Corniche dawn cleanup': {
    type: 'art',
    bg: 'var(--green-dark)',
    accent: 'var(--lime)',
    icon: 'ph:sun-horizon-fill',
    motif: 'sun'
  }
};
function CardCover({
  cover
}) {
  if (cover.type === 'photo') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 150,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: cover.src,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: cover.pos,
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: cover.tint,
        pointerEvents: 'none'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 14,
      background: cover.bg,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(CoverMotif, {
    kind: cover.motif,
    color: cover.accent
  }), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: cover.icon,
    width: "64",
    style: {
      color: cover.accent,
      position: 'absolute',
      right: 14,
      top: 14,
      opacity: 0.92,
      zIndex: 2,
      filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.25))'
    }
  }));
}
function CoverMotif({
  kind,
  color
}) {
  const op = 0.16;
  if (kind === 'grid') {
    return /*#__PURE__*/React.createElement("svg", {
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: op
      },
      viewBox: "0 0 300 150",
      preserveAspectRatio: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "g1",
      width: "18",
      height: "18",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 18 L18 18 M18 0 L18 18",
      stroke: color,
      strokeWidth: "0.8",
      fill: "none"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "300",
      height: "150",
      fill: "url(#g1)"
    }));
  }
  if (kind === 'rings') {
    return /*#__PURE__*/React.createElement("svg", {
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.55
      },
      viewBox: "0 0 300 150",
      preserveAspectRatio: "none"
    }, [28, 56, 88, 122, 158].map((r, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: "-10",
      cy: "170",
      r: r,
      fill: "none",
      stroke: color,
      strokeWidth: "1.2",
      opacity: 0.55 - i * 0.08
    })));
  }
  if (kind === 'topo') {
    return /*#__PURE__*/React.createElement("svg", {
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.35
      },
      viewBox: "0 0 300 150",
      preserveAspectRatio: "none"
    }, [20, 40, 60, 80, 100, 120].map((y, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M0 ${y} Q 75 ${y - 12} 150 ${y} T 300 ${y}`,
      fill: "none",
      stroke: color,
      strokeWidth: "1"
    })));
  }
  if (kind === 'diag') {
    return /*#__PURE__*/React.createElement("svg", {
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.22
      },
      viewBox: "0 0 300 150",
      preserveAspectRatio: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "d1",
      width: "16",
      height: "16",
      patternUnits: "userSpaceOnUse",
      patternTransform: "rotate(35)"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "16",
      stroke: color,
      strokeWidth: "1.4"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "300",
      height: "150",
      fill: "url(#d1)"
    }));
  }
  if (kind === 'sun') {
    return /*#__PURE__*/React.createElement("svg", {
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      },
      viewBox: "0 0 300 150",
      preserveAspectRatio: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "sg",
      cx: "20%",
      cy: "120%",
      r: "80%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: color,
      stopOpacity: "0.55"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "60%",
      stopColor: color,
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "300",
      height: "150",
      fill: "url(#sg)"
    }), [40, 70, 100, 130].map((y, i) => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      y1: y,
      x2: "300",
      y2: y,
      stroke: color,
      strokeWidth: "0.6",
      opacity: "0.18"
    })));
  }
  return null;
}
function FeaturedBanner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 22,
      overflow: 'hidden',
      background: 'var(--green-dark)',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.85fr)',
      minHeight: 260,
      boxShadow: '0 30px 70px rgba(0,0,0,0.12)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px, 4vw, 44px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 24,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      padding: '6px 12px',
      borderRadius: 100,
      background: 'rgba(168,224,99,0.16)',
      border: '1px solid rgba(168,224,99,0.32)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 100,
      background: 'var(--lime)',
      boxShadow: '0 0 10px var(--lime)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--lime)',
      fontWeight: 600
    }
  }, "This week \xB7 on the ground")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Spotted at ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lime)'
    }
  }, "Earthna Sustainability Week"), " \u2014 the climate generation, mid-mission."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--lime)',
      fontSize: 26,
      lineHeight: 1
    }
  }, "3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginTop: 4
    }
  }, "Active missions")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 30,
      background: 'rgba(255,255,255,0.14)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--lime)',
      fontSize: 26,
      lineHeight: 1
    }
  }, "42h"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginTop: 4
    }
  }, "Logged this week")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 30,
      background: 'rgba(255,255,255,0.14)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--lime)',
      fontSize: 26,
      lineHeight: 1
    }
  }, "5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginTop: 4
    }
  }, "Partner orgs")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ecoawareness.me group photo with mr Q.jpeg",
    alt: "EcoAwareness team at Earthna Sustainability Week",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 56%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--green-dark) 0%, rgba(11,46,29,0.4) 30%, transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      bottom: 18,
      padding: '8px 12px',
      borderRadius: 8,
      background: 'rgba(11,46,29,0.55)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.14)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "MSHEIREB \xB7 DOWNTOWN DOHA")));
}
function Opportunities({
  unlocked,
  onUnlock
}) {
  const [filter, setFilter] = useStateOpps('all');
  const opps = [{
    tag: 'EVENT',
    cat: 'cleanup',
    t: 'Mangrove planting at Al Thakira',
    org: 'Earthna',
    date: 'Nov 12',
    loc: 'Al Khor',
    hours: 4,
    status: 'Verified'
  }, {
    tag: 'INTERNSHIP',
    cat: 'research',
    t: 'Climate policy intern, summer 2026',
    org: 'CMU‑Q',
    date: 'Apr 30',
    loc: 'Education City',
    hours: 120,
    status: 'Open'
  }, {
    tag: 'GRANT',
    cat: 'funding',
    t: 'Youth Climate Action micro-grant',
    org: 'QKONs',
    date: 'Rolling',
    loc: 'Remote',
    hours: null,
    status: 'Open'
  }, {
    tag: 'EVENT',
    cat: 'cleanup',
    t: 'Education City cleanup walk',
    org: 'EcoAwareness',
    date: 'Dec 02',
    loc: 'EC',
    hours: 3,
    status: 'Verified'
  }, {
    tag: 'WORKSHOP',
    cat: 'education',
    t: 'Carbon literacy for high schoolers',
    org: 'AYCMQ',
    date: 'Jan 18',
    loc: 'Hybrid',
    hours: 6,
    status: 'Open'
  }, {
    tag: 'EVENT',
    cat: 'cleanup',
    t: 'Doha Corniche dawn cleanup',
    org: 'DEAP',
    date: 'Jan 25',
    loc: 'Corniche',
    hours: 5,
    status: 'Featured'
  }];
  const filters = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'cleanup',
    label: 'Cleanup'
  }, {
    id: 'research',
    label: 'Research'
  }, {
    id: 'education',
    label: 'Education'
  }, {
    id: 'funding',
    label: 'Funding'
  }];
  const visible = filter === 'all' ? opps : opps.filter(o => o.cat === filter);
  const showCount = unlocked ? visible.length : 3;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 32,
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "rust"
  }, "LATEST OPPORTUNITIES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: 600,
      color: 'var(--ink)'
    }
  }, "Real action, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--green)',
      fontStyle: 'italic'
    }
  }, "waiting for you."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setFilter(f.id),
    style: {
      padding: '8px 16px',
      borderRadius: 100,
      fontSize: 13,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      background: filter === f.id ? 'var(--ink)' : 'transparent',
      color: filter === f.id ? '#fff' : 'var(--ink-2)',
      border: filter === f.id ? '1px solid var(--ink)' : '1px solid rgba(0,0,0,0.12)',
      transition: 'all 200ms cubic-bezier(0.25,1,0.5,1)'
    }
  }, f.label)))), filter === 'all' && /*#__PURE__*/React.createElement(FeaturedBanner, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, visible.slice(0, showCount).map((o, i) => {
    const cover = COVER_BY_TITLE[o.t] || {
      type: 'art',
      bg: 'var(--ink)',
      accent: 'var(--lime)',
      icon: 'ph:leaf-fill',
      motif: 'topo'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 18,
        padding: 14,
        boxShadow: '0 18px 50px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 200ms cubic-bezier(0.25,1,0.5,1), box-shadow 200ms'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.10)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 18px 50px rgba(0,0,0,0.06)';
      }
    }, /*#__PURE__*/React.createElement(CardCover, {
      cover: cover
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 8px 4px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.15em',
        color: 'var(--rust)'
      }
    }, "\u2014 ", o.tag), /*#__PURE__*/React.createElement(Pill, {
      variant: o.status === 'Verified' ? 'lime' : o.status === 'Featured' ? 'green' : 'default',
      dot: true
    }, o.status)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        lineHeight: 1.2,
        margin: 0,
        color: 'var(--ink)'
      }
    }, o.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink-3)'
      }
    }, o.org), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        fontSize: 12,
        color: 'var(--ink-3)',
        marginTop: 'auto',
        paddingTop: 12,
        borderTop: '1px solid rgba(0,0,0,0.06)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5 ", o.date), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD ", o.loc), o.hours && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: 'var(--green)',
        fontWeight: 500
      }
    }, o.hours, "h"))));
  })), !unlocked && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      top: '40%',
      background: 'linear-gradient(180deg, rgba(245,240,232,0) 0%, rgba(245,240,232,0.95) 50%, var(--paper) 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 20,
      transform: 'translateX(-50%)',
      textAlign: 'center',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-2)',
      marginBottom: 16,
      maxWidth: 360
    }
  }, "Join EcoAwareness to apply, save events, and track verified impact hours."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onUnlock
  }, "\uD83D\uDD12 Unlock ", opps.length - 3, " more opportunities"))))));
}
window.Opportunities = Opportunities;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Opportunities.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/PartnersStrip.jsx
try { (() => {
/* global React, Eyebrow */

function PartnersStrip() {
  const partners = [{
    type: 'img',
    src: '../../assets/logos/cmuq.png',
    alt: 'CMU-Q'
  }, {
    type: 'img',
    src: '../../assets/logos/earthna.png',
    alt: 'Earthna'
  }, {
    type: 'img',
    src: '../../assets/logos/qkons.png',
    alt: 'QKONs'
  }, {
    type: 'text',
    label: 'DEAP'
  }, {
    type: 'text',
    label: 'AYCMQ'
  }, {
    type: 'text',
    label: 'MECC'
  }, {
    type: 'text',
    label: 'GU‑Q'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(3rem, 6vw, 4rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "rust"
  }, "TRUSTED BY 60+ ORGANISATIONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      width: '100%',
      background: 'var(--sand)',
      padding: '20px 32px',
      borderRadius: 100
    }
  }, partners.map((p, i) => p.type === 'img' ? /*#__PURE__*/React.createElement("img", {
    key: i,
    src: p.src,
    alt: p.alt,
    style: {
      height: 32,
      width: 'auto',
      opacity: 0.85,
      filter: 'grayscale(0.2)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.18em',
      color: 'var(--ink-2)',
      textTransform: 'uppercase'
    }
  }, p.label)))));
}
window.PartnersStrip = PartnersStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/PartnersStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Primitives.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;

// ─── Logo ─────────────────────────────────────────
function LogoMark({
  size = 36
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size * 0.3,
      background: 'var(--green)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'var(--font-logo)',
      fontWeight: 800,
      fontSize: size * 0.48,
      position: 'relative'
    }
  }, "E", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: size * 0.2,
      right: size * 0.2,
      width: Math.max(4, size * 0.13),
      height: Math.max(4, size * 0.13),
      borderRadius: 100,
      background: 'var(--lime)'
    }
  }));
}
function Wordmark({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-logo)',
      letterSpacing: '-0.025em',
      fontSize: size,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, "Eco"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      opacity: 0.78
    }
  }, "Awareness"));
}

// ─── Eyebrow ─────────────────────────────────────
function Eyebrow({
  children,
  color = 'rust'
}) {
  const map = {
    rust: 'var(--rust)',
    lime: 'var(--lime)',
    green: 'var(--green)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      color: map[color]
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'currentColor'
    }
  }), children);
}

// ─── Buttons ────────────────────────────────────
function Button({
  children,
  variant = 'primary',
  onClick,
  icon = '→'
}) {
  const styles = {
    primary: {
      background: 'var(--green)',
      color: '#fff',
      boxShadow: '0 18px 42px rgba(26,92,56,0.24), inset 0 1px 0 rgba(255,255,255,0.18)'
    },
    lime: {
      background: 'var(--lime)',
      color: 'var(--green-dark)'
    },
    ghostDark: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.3)'
    },
    ghostLight: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid rgba(0,0,0,0.15)'
    },
    ink: {
      background: 'var(--ink)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '13px 24px',
      borderRadius: 100,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 200ms cubic-bezier(0.25,1,0.5,1)',
      ...styles[variant]
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, children, icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, icon));
}

// ─── Pill / Tag ─────────────────────────────────
function Pill({
  children,
  variant = 'default',
  dot = false
}) {
  const styles = {
    default: {
      background: 'transparent',
      color: 'var(--ink-2)',
      border: '1px solid rgba(0,0,0,0.15)'
    },
    lime: {
      background: 'rgba(168,224,99,0.18)',
      color: 'var(--green-dark)',
      border: '1px solid rgba(168,224,99,0.4)'
    },
    green: {
      background: 'var(--green)',
      color: '#fff',
      border: 'none'
    },
    onDark: {
      background: 'rgba(255,255,255,0.06)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.12)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 14px',
      borderRadius: 100,
      fontSize: 12,
      fontWeight: 500,
      ...styles[variant]
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 100,
      background: 'currentColor'
    }
  }), children);
}

// ─── Grain overlay ──────────────────────────────
function Grain() {
  const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/></filter><rect width="200" height="200" filter="url(#n)" opacity="0.4"/></svg>`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      opacity: 0.04,
      backgroundImage: `url("data:image/svg+xml,${svg}")`,
      mixBlendMode: 'multiply'
    }
  });
}
Object.assign(window, {
  LogoMark,
  Wordmark,
  Eyebrow,
  Button,
  Pill,
  Grain
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ProblemSolution.jsx
try { (() => {
/* global React, Eyebrow */

function ProblemSolution() {
  const problems = [{
    icon: '🔍',
    t: 'Opportunities are scattered.',
    d: 'Climate work in Qatar lives in DMs, posters, and word-of-mouth — most of it is invisible to students who could help.'
  }, {
    icon: '🏢',
    t: 'Organisations work alone.',
    d: 'Schools, universities, and NGOs run parallel initiatives without sharing volunteers, data, or impact.'
  }, {
    icon: '📊',
    t: 'Volunteer hours don\'t count.',
    d: 'No verification means real work goes unrecognised — for university applications, awards, or anything else.'
  }];
  const solutions = [{
    t: 'One verified hub.',
    d: 'Every climate opportunity in Qatar — events, internships, grants, research — in one filterable directory.'
  }, {
    t: 'Earn recognition.',
    d: 'Hours are signed off by partner organisations and stored on your Eco ID. Export to apps, transcripts, anywhere.'
  }, {
    t: 'Bilingual by default.',
    d: 'Full English / Arabic parity, RTL-aware. Built for Qatar\'s actual student population.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start',
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "rust"
  }, "THE PROBLEM"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      color: 'var(--ink)'
    }
  }, "Climate action in Qatar is ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--green)',
      fontStyle: 'italic'
    }
  }, "fragmented."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--ink-2)',
      fontWeight: 300,
      marginTop: 36
    }
  }, "Students who want to help can't find work. Organisations who need help can't find students. And the few hours that do happen disappear into spreadsheets.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      border: '1.5px solid rgba(0,0,0,0.08)',
      borderRadius: 18,
      overflow: 'hidden'
    }
  }, problems.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 28,
      background: '#fff',
      borderRight: i < 2 ? '1.5px solid rgba(0,0,0,0.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 18
    }
  }, p.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1.2,
      margin: '0 0 10px',
      color: 'var(--ink)'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--ink-2)',
      fontWeight: 300,
      margin: 0
    }
  }, p.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 6rem)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20%',
      left: '-10%',
      width: '50%',
      height: '60%',
      background: 'radial-gradient(ellipse, rgba(168,224,99,0.12), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start',
      marginBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "lime"
  }, "THE SOLUTION"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      margin: '20px 0 0'
    }
  }, "One hub. ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--lime)',
      fontStyle: 'italic'
    }
  }, "Every opportunity."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'rgba(255,255,255,0.7)',
      fontWeight: 300,
      marginTop: 36
    }
  }, "EcoAwareness centralises every verified climate opportunity in Qatar, signs off your hours, and gives you a portable identity that grows with your work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, solutions.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 28,
      borderRadius: 18,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 48,
      color: 'var(--lime)',
      lineHeight: 1,
      marginBottom: 18
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1.2,
      margin: '0 0 10px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.65)',
      fontWeight: 300,
      margin: 0
    }
  }, s.d)))))));
}
window.ProblemSolution = ProblemSolution;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ProblemSolution.jsx", error: String((e && e.message) || e) }); }

})();
