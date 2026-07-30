(() => {
  const cfg = window.ALLIANCEHQ_CONFIG || {};
  const invalid = value => !value || value.includes('PASTE_');
  document.querySelectorAll('[data-install-link]').forEach(a => {
    if (!invalid(cfg.installUrl)) a.href = cfg.installUrl;
    else a.addEventListener('click', e => { e.preventDefault(); alert(document.body.classList.contains('lang-de') ? 'Bitte zuerst den Discord-Installationslink in config.js eintragen.' : 'Please add the Discord installation link to config.js first.'); });
  });
  document.querySelectorAll('[data-support-link]').forEach(a => {
    if (!invalid(cfg.supportUrl)) a.href = cfg.supportUrl;
    else a.addEventListener('click', e => { e.preventDefault(); alert(document.body.classList.contains('lang-de') ? 'Bitte zuerst den Support-Server-Link in config.js eintragen.' : 'Please add the support server link to config.js first.'); });
  });
  document.querySelectorAll('[data-contact-email]').forEach(a => {
    a.href = `mailto:${cfg.contactEmail || 'acciento89@gmail.com'}`;
    if (a.dataset.showEmail === 'true') a.textContent = cfg.contactEmail || 'acciento89@gmail.com';
  });

  const setLang = lang => {
    const safe = lang === 'de' ? 'de' : 'en';
    document.body.classList.remove('lang-de','lang-en');
    document.body.classList.add(`lang-${safe}`);
    document.documentElement.lang = safe;
    localStorage.setItem('alliancehq-lang', safe);
    document.querySelectorAll('[data-lang-button]').forEach(btn => btn.classList.toggle('active', btn.dataset.langButton === safe));
    document.querySelectorAll('[data-de][data-en]').forEach(el => {
      const value = el.dataset[safe];
      if (value !== undefined) el.textContent = value;
    });
  };
  document.querySelectorAll('[data-lang-button]').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.langButton)));
  const stored = localStorage.getItem('alliancehq-lang');
  const browser = navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en';
  setLang(stored || browser);

  const menu = document.querySelector('[data-menu]');
  const menuBtn = document.querySelector('[data-menu-button]');
  menuBtn?.addEventListener('click', () => menu?.classList.toggle('open'));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
})();
