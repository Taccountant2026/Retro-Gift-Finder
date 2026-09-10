/* Retro Gift Finder — RRUK Income Drive v1 */
(() => {
  const RRUK = 'https://retroreplay.uk';
  const HUNT = RRUK + '/pages/find-my-console#1789076813a6932e54';
  const CHECKER = 'https://taccountant2026.github.io/Retro-Console-Checker/';
  const source = 'retro_gift_finder';
  const campaign = 'income_drive';
  const tracked = (url, medium='referral') => {
    const u = new URL(url);
    u.searchParams.set('utm_source', source);
    u.searchParams.set('utm_medium', medium);
    u.searchParams.set('utm_campaign', campaign);
    return u.toString();
  };
  const huntUrl = (model='retro console') => {
    const u = new URL(HUNT);
    u.searchParams.set('utm_source', source);
    u.searchParams.set('utm_medium', 'lead');
    u.searchParams.set('utm_campaign', campaign);
    u.searchParams.set('utm_content', 'find_one');
    if (model) u.searchParams.set('console', model);
    u.hash = '1789076813a6932e54';
    return u.toString();
  };
  const checkerUrl = model => {
    const u = new URL(CHECKER);
    u.searchParams.set('utm_source', source);
    u.searchParams.set('utm_medium', 'tool');
    u.searchParams.set('utm_campaign', campaign);
    if (model) u.hash = 'model=' + encodeURIComponent(model);
    return u.toString();
  };

  const result = document.getElementById('result');
  const shop = document.getElementById('shopLink');
  const again = document.getElementById('again');
  if (!result || !shop || !again) return;

  shop.textContent = 'SHOP THIS CONSOLE ▶';
  const hunt = document.createElement('a');
  hunt.className = 'btn secondary';
  hunt.id = 'huntLink';
  hunt.textContent = 'FIND ONE FOR ME ▶';
  hunt.href = huntUrl();

  const check = document.createElement('a');
  check.className = 'btn secondary';
  check.id = 'checkLink';
  check.textContent = 'CHECK THIS CONSOLE ▶';
  check.href = checkerUrl('retro console');

  again.textContent = 'START AGAIN';
  const actions = result.querySelector('.resultActions');
  actions.insertBefore(hunt, again);
  actions.insertBefore(check, again);

  const help = document.createElement('p');
  help.id = 'incomeHelp';
  help.style.cssText = 'font-family:Arial,sans-serif;color:#b8c9e8;margin:16px 0 0;font-size:14px';
  help.innerHTML = 'Not certain? <a href="' + huntUrl() + '" style="color:#ffd326;font-weight:bold">Ask RetroReplay UK for personal help</a> rather than guessing on a high-value purchase.';
  result.appendChild(help);

  const form = document.getElementById('giftForm');
  form.addEventListener('submit', () => {
    setTimeout(() => {
      const c = document.getElementById('console')?.value || 'unknown';
      const title = document.getElementById('resultTitle')?.textContent || '';
      const model = c === 'unknown' || c === 'mixed' ? title : ({playstation:'PlayStation',nintendo:'Nintendo',sega:'SEGA',xbox:'Xbox',atari:'Atari',handheld:'handheld console'}[c] || title);
      shop.href = tracked(shop.href, 'recommendation');
      hunt.href = huntUrl(model);
      check.href = checkerUrl(model);
      const personalHelp = help.querySelector('a');
      if (personalHelp) personalHelp.href = huntUrl(model);
    }, 0);
  });

  document.querySelectorAll('a[href^="https://retroreplay.uk"]').forEach(a => {
    if (a.id === 'shopLink' || a.id === 'huntLink') return;
    try { a.href = tracked(a.href, 'site_link'); } catch (_) {}
  });
})();
