/* ───────────────────────────────────────────────────────────────────
   EcoAwareness — Auth experience logic (signin.html + signup.html)
   Renders the combined sign-in / create-account screen and wires it to
   Supabase. Mode ("signin" | "signup") comes from <body data-auth-mode>.
   The page transition itself is handled by ecohub-enhancements.js.
   ─────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  const supabaseUrl = 'https://nqvhxjsryatqgfvtjbki.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmh4anNyeWF0cWdmdnRqYmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNDYxMDAsImV4cCI6MjA4ODYyMjEwMH0.HrnrIq5bK3FhxmHaLxWPIG0nD-CI-3ReHCoO5RL1c3M';
  const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dashboardRedirect = window.location.origin + '/dashboard.html';

  const TESTIMONIALS = [
    { q: 'Joining EcoAwareness didn’t just give me volunteer hours — it gave me a community that actually cares.', a: 'Sara A.', s: 'Qatar University' },
    { q: 'My Eco ID got me into a policy internship. Verified hours are taken seriously here.', a: 'Yousef M.', s: 'CMU-Q' },
    { q: 'I went from one beach cleanup to leading my school’s green club in a semester.', a: 'Layla H.', s: 'Qatar Academy' },
  ];

  const MOTIF_BARS = [40, 62, 48, 78, 95, 70, 88];
  const ST_COLORS = ['#d64545', '#c4622d', '#b8902f', '#3c8c4a', '#1a5c38'];
  const ST_LABELS = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];

  function markup() {
    return `
    <div class="auth-layout">
      <aside class="brand-panel">
        <div class="brand-watermark" aria-hidden="true">بيئة</div>
        <a href="index.html" class="brand-logo"><span class="brand-logo-dot"></span>EcoAwareness</a>
        <div class="brand-mid">
          <div class="brand-eyebrow">Qatar&rsquo;s climate generation</div>
          <h1 class="brand-headline">Where real action <em>grows.</em></h1>
          <p class="brand-sub">One profile. Every opportunity. Verified hours. Real recognition &mdash; building with you, season after season.</p>
          <div class="growth-motif" id="growthMotif" aria-hidden="true"></div>
        </div>
        <div class="brand-bottom">
          <div class="live-stats">
            <div><div class="live-stat-num" data-target="2547">0</div><div class="live-stat-label">Members</div></div>
            <div><div class="live-stat-num" data-target="15.2" data-decimals="1" data-suffix="k">0</div><div class="live-stat-label">Verified hours</div></div>
            <div><div class="live-stat-num" data-target="62" data-suffix="+">0</div><div class="live-stat-label">Partner orgs</div></div>
          </div>
          <div class="brand-quote" id="brandQuote">
            <p id="quoteText"></p>
            <span class="brand-quote-author" id="quoteAuthor"></span>
          </div>
        </div>
      </aside>

      <main class="form-panel">
        <a href="index.html" class="back-link">
          <iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> Back to home
        </a>
        <div class="form-inner">
          <div class="seg-toggle" role="tablist" aria-label="Sign in or create account">
            <button type="button" class="seg-btn" data-mode="signin">Sign in</button>
            <button type="button" class="seg-btn" data-mode="signup">Create account</button>
          </div>

          <h2 class="form-title" id="formTitle"></h2>
          <p class="form-subtitle" id="formSubtitle"></p>

          <div class="field-group hidden" id="nameGroup">
            <label class="field-label" for="fullName">Full name</label>
            <input id="fullName" type="text" class="input-field" placeholder="e.g. Mohammed Al-Thani" autocomplete="name">
            <p class="field-error" id="fullName-error"></p>
          </div>

          <div class="field-group">
            <label class="field-label" for="email">Email address</label>
            <input id="email" type="email" class="input-field" placeholder="you@example.com" autocomplete="email">
            <p class="field-error" id="email-error"></p>
          </div>

          <div class="field-group">
            <label class="field-label" for="password">Password
              <button type="button" class="field-label-action" id="forgotBtn">Forgot?</button>
            </label>
            <div class="input-wrap">
              <input id="password" type="password" class="input-field" placeholder="Enter your password" autocomplete="current-password">
              <button type="button" class="eye-toggle" id="eyeToggle" aria-label="Show password">
                <iconify-icon icon="solar:eye-linear"></iconify-icon>
              </button>
            </div>
            <div class="strength" id="strength">
              <div class="strength-bars">
                <div class="strength-bar"></div><div class="strength-bar"></div>
                <div class="strength-bar"></div><div class="strength-bar"></div>
              </div>
              <div class="strength-text" id="strengthText"></div>
            </div>
            <p class="field-error" id="password-error"></p>
          </div>

          <button type="button" class="btn-primary" id="submitBtn"></button>

          <p class="terms-note" id="termsNote" hidden>By creating an account, you agree to our
            <a href="terms.html">Terms</a> &amp; <a href="privacy.html">Privacy Policy</a>.</p>

          <div class="confirm-help" id="confirmHelp">
            <strong>Confirm your email</strong>
            <span id="confirmText">We sent you a confirmation link. Open it to activate your account.</span>
            <div class="confirm-actions">
              <button type="button" class="confirm-btn" id="resendBtn">Resend confirmation email</button>
            </div>
          </div>

          <div class="divider-row">Or continue with</div>

          <button type="button" class="btn-google" id="googleBtn">
            <iconify-icon icon="logos:google-icon" style="font-size:1.1rem"></iconify-icon> Continue with Google
          </button>

          <p class="form-foot" id="formFoot"></p>
        </div>
      </main>
    </div>`;
  }

  // ── helpers ──────────────────────────────────────────────────────
  const $ = (id) => document.getElementById(id);

  function toast(msg, type) {
    const t = $('toast'), inner = $('toast-inner');
    const ok = type !== 'error';
    inner.className = ok ? 'ok' : 'err';
    inner.innerHTML = '<iconify-icon icon="' + (ok ? 'solar:check-circle-linear' : 'solar:danger-circle-linear') +
      '" style="font-size:1.15rem;color:' + (ok ? '#a8e063' : '#d64545') + '"></iconify-icon>' + msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('show'), 4000);
  }

  function setError(id, msg) {
    const f = $(id), e = $(id + '-error');
    if (f) f.classList.add('error');
    if (e) { e.textContent = msg; e.classList.add('visible'); }
  }
  function clearErrors() {
    ['fullName', 'email', 'password'].forEach((id) => {
      const f = $(id), e = $(id + '-error');
      if (f) f.classList.remove('error');
      if (e) e.classList.remove('visible');
    });
  }

  function strengthOf(pw) {
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
    if (/\d/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  }

  function countUp(el) {
    const target = parseFloat(el.dataset.target);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const fmt = (n) => {
      const parts = n.toFixed(dec).split('.');
      parts[0] = parseInt(parts[0], 10).toLocaleString('en-US');
      return parts.join('.') + suffix;
    };
    const finish = () => { el.textContent = fmt(target); };
    if (reduceMotion) { finish(); return; }
    const dur = 1600, t0 = performance.now();
    let done = false;
    (function frame(now) {
      if (done) return;
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(frame);
      else { done = true; finish(); }
    })(performance.now());
    // Fallback: if rAF is throttled (e.g. background tab), still land on the final value.
    setTimeout(() => { if (!done) { done = true; finish(); } }, dur + 150);
  }

  function goToDashboard() {
    const o = $('page-transition');
    if (o) { o.classList.add('leaving'); o.style.opacity = '1'; }
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 480);
  }

  // ── mode handling ────────────────────────────────────────────────
  let mode = 'signin';

  function applyMode(next) {
    mode = next === 'signup' ? 'signup' : 'signin';
    const signup = mode === 'signup';

    document.querySelectorAll('.seg-btn').forEach((b) =>
      b.classList.toggle('active', b.dataset.mode === mode));

    $('formTitle').innerHTML = signup
      ? 'Start your <em>impact.</em>'
      : 'Welcome <em>back.</em>';
    $('formSubtitle').textContent = signup
      ? 'Create your Eco ID and start tracking verified hours.'
      : 'Sign in to continue driving sustainable action.';

    $('nameGroup').classList.toggle('hidden', !signup);
    $('forgotBtn').style.display = signup ? 'none' : '';
    $('termsNote').hidden = !signup;

    const pw = $('password');
    pw.setAttribute('autocomplete', signup ? 'new-password' : 'current-password');
    pw.placeholder = signup ? 'Create a password' : 'Enter your password';

    $('submitBtn').innerHTML = (signup ? 'Create account' : 'Sign in') +
      ' <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>';

    $('formFoot').innerHTML = signup
      ? 'Already have an account? <button type="button" data-switch="signin">Sign in</button>'
      : 'New to EcoAwareness? <button type="button" data-switch="signup">Create one</button>';

    clearErrors();
    $('confirmHelp').classList.remove('show');
    updateStrength();
    document.title = (signup ? 'Create Account' : 'Sign In') + ' — EcoHub';
  }

  function updateStrength() {
    const wrap = $('strength'), pw = $('password').value;
    if (mode !== 'signup' || !pw) { wrap.classList.remove('visible'); return; }
    wrap.classList.add('visible');
    const st = strengthOf(pw);
    const bars = wrap.querySelectorAll('.strength-bar');
    bars.forEach((b, i) => { b.style.background = i < st ? ST_COLORS[st] : 'rgba(0,0,0,0.08)'; });
    const txt = $('strengthText');
    txt.style.color = ST_COLORS[st];
    txt.textContent = ST_LABELS[st];
  }

  // ── Supabase actions ─────────────────────────────────────────────
  function setBusy(btn, busy, label) {
    btn.disabled = busy;
    if (busy) btn.innerHTML = '<span class="btn-spinner"></span>&nbsp;' + label;
  }

  async function doSignIn() {
    clearErrors();
    const email = $('email').value.trim();
    const password = $('password').value;
    let ok = true;
    if (!EMAIL_RE.test(email)) { setError('email', 'Please enter a valid email'); ok = false; }
    if (!password) { setError('password', 'Please enter your password'); ok = false; }
    if (!ok) return;

    const btn = $('submitBtn');
    setBusy(btn, true, 'Signing in…');
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      applyMode('signin'); // restores button label
      const m = error.message.toLowerCase();
      if (m.includes('invalid')) {
        setError('email', 'Incorrect email or password');
        setError('password', 'Incorrect email or password');
        toast('Incorrect email or password', 'error');
      } else if (m.includes('confirm')) {
        toast('Please confirm your email first', 'error');
        showConfirm(email, 'Your email isn’t confirmed yet. Check your inbox/spam, or resend below.');
      } else {
        toast(error.message, 'error');
      }
      return;
    }
    toast('Welcome back 🌿', 'success');
    goToDashboard();
  }

  async function doSignUp() {
    clearErrors();
    const fullName = $('fullName').value.trim();
    const email = $('email').value.trim();
    const password = $('password').value;
    let ok = true;
    if (!fullName) { setError('fullName', 'Tell us your name'); ok = false; }
    if (!EMAIL_RE.test(email)) { setError('email', 'Please enter a valid email'); ok = false; }
    if (!password) { setError('password', 'Enter a password'); ok = false; }
    else if (password.length < 6) { setError('password', 'At least 6 characters'); ok = false; }
    else if (strengthOf(password) < 2) { setError('password', 'Choose a stronger password'); ok = false; }
    if (!ok) return;

    const parts = fullName.split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');

    const btn = $('submitBtn');
    setBusy(btn, true, 'Creating account…');
    const { data, error } = await supabaseClient.auth.signUp({
      email, password,
      options: {
        emailRedirectTo: dashboardRedirect,
        data: { full_name: fullName, first_name: firstName, last_name: lastName, interests: [], role: 'member' },
      },
    });
    if (error) {
      applyMode('signup');
      if (error.message.toLowerCase().includes('already')) {
        setError('email', 'An account with this email already exists');
        toast('Email already in use. Try signing in.', 'error');
      } else {
        toast(error.message, 'error');
      }
      return;
    }
    if (data.user && !data.session) {
      applyMode('signup');
      showConfirm(email, 'We sent a confirmation link to ' + email + '. Open it to activate your account.');
      toast('Check your email for the confirmation link', 'success');
    } else {
      toast('Welcome to EcoAwareness 🌿', 'success');
      goToDashboard();
    }
  }

  let pendingEmail = '';
  function showConfirm(email, text) {
    pendingEmail = email;
    $('confirmText').textContent = text;
    $('confirmHelp').classList.add('show');
  }

  async function doResend() {
    const email = pendingEmail || $('email').value.trim();
    if (!EMAIL_RE.test(email)) { setError('email', 'Enter your email first'); return; }
    const btn = $('resendBtn');
    btn.disabled = true; btn.textContent = 'Sending…';
    const { error } = await supabaseClient.auth.resend({
      type: 'signup', email, options: { emailRedirectTo: dashboardRedirect },
    });
    btn.disabled = false; btn.textContent = 'Resend confirmation email';
    toast(error ? error.message : 'Confirmation email sent again. Check your inbox and spam folder.', error ? 'error' : 'success');
  }

  async function doForgot() {
    const email = $('email').value.trim();
    if (!EMAIL_RE.test(email)) { setError('email', 'Enter your email address first'); return; }
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/signin.html',
    });
    toast(error ? error.message : 'Password reset email sent! Check your inbox ✉️', error ? 'error' : 'success');
  }

  async function doGoogle() {
    const btn = $('googleBtn');
    btn.innerHTML = '<span class="btn-spinner" style="border-top-color:#1a5c38;border-color:rgba(0,0,0,0.2)"></span>&nbsp;Connecting…';
    btn.style.opacity = '0.7'; btn.style.pointerEvents = 'none';
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google', options: { redirectTo: dashboardRedirect },
    });
    if (error) {
      toast(error.message, 'error');
      btn.innerHTML = '<iconify-icon icon="logos:google-icon" style="font-size:1.1rem"></iconify-icon> Continue with Google';
      btn.style.opacity = '1'; btn.style.pointerEvents = 'auto';
    }
  }

  // ── init ─────────────────────────────────────────────────────────
  function init() {
    const root = $('auth-root');
    if (!root) return;
    root.innerHTML = markup();

    // growth motif bars
    const motif = $('growthMotif');
    MOTIF_BARS.forEach((h, i) => {
      const bar = document.createElement('div');
      bar.className = 'growth-bar' + (i === 4 ? ' peak' : '');
      bar.style.height = h + '%';
      bar.style.animationDelay = (i * 0.16) + 's';
      motif.appendChild(bar);
    });

    // live count-ups
    document.querySelectorAll('.live-stat-num').forEach(countUp);

    // rotating testimonials
    const quote = $('brandQuote'), qt = $('quoteText'), qa = $('quoteAuthor');
    let ti = 0;
    function setQuote() {
      const t = TESTIMONIALS[ti];
      qt.textContent = '“' + t.q + '”';
      qa.textContent = '— ' + t.a + ', ' + t.s;
      quote.classList.remove('fade'); void quote.offsetWidth; quote.classList.add('fade');
    }
    setQuote();
    if (!reduceMotion) setInterval(() => { ti = (ti + 1) % TESTIMONIALS.length; setQuote(); }, 5200);

    // wiring
    document.querySelectorAll('.seg-btn').forEach((b) =>
      b.addEventListener('click', () => applyMode(b.dataset.mode)));
    $('formFoot').addEventListener('click', (e) => {
      const s = e.target.closest('[data-switch]');
      if (s) applyMode(s.dataset.switch);
    });
    $('submitBtn').addEventListener('click', () => (mode === 'signup' ? doSignUp() : doSignIn()));
    $('eyeToggle').addEventListener('click', () => {
      const pw = $('password'), show = pw.type === 'password';
      pw.type = show ? 'text' : 'password';
      $('eyeToggle').innerHTML = '<iconify-icon icon="' +
        (show ? 'solar:eye-closed-linear' : 'solar:eye-linear') + '"></iconify-icon>';
    });
    $('password').addEventListener('input', updateStrength);
    $('password').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('submitBtn').click(); });
    $('email').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('submitBtn').click(); });
    $('forgotBtn').addEventListener('click', doForgot);
    $('resendBtn').addEventListener('click', doResend);
    $('googleBtn').addEventListener('click', doGoogle);

    applyMode(document.body.dataset.authMode || 'signin');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
