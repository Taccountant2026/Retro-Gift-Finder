/* Retro Gift Finder — RRUK Income Drive v1 */
(() => {
  const RRUK='https://retroreplay.uk';
  const CHECKER='https://taccountant2026.github.io/Retro-Console-Checker/';
  const tracked=(url,medium='referral')=>{const u=new URL(url);u.searchParams.set('utm_source','retro_gift_finder');u.searchParams.set('utm_medium',medium);u.searchParams.set('utm_campaign','income_drive');return u.toString()};
  const huntUrl=model=>{const u=new URL(RRUK+'/pages/contact');u.searchParams.set('utm_source','retro_gift_finder');u.searchParams.set('utm_medium','lead');u.searchParams.set('utm_campaign','income_drive');u.searchParams.set('subject','Console Hunt: '+(model||'retro console'));return u.toString()};
  const checkerUrl=model=>{const u=new URL(CHECKER);u.searchParams.set('utm_source','retro_gift_finder');u.searchParams.set('utm_medium','tool');u.searchParams.set('utm_campaign','income_drive');if(model)u.hash='model='+encodeURIComponent(model);return u.toString()};
  const result=document.getElementById('result'),shop=document.getElementById('shopLink'),again=document.getElementById('again');
  if(!result||!shop||!again)return;
  shop.textContent='SHOP THIS CONSOLE ▶';
  const hunt=document.createElement('a');hunt.className='btn secondary';hunt.id='huntLink';hunt.textContent='FIND ONE FOR ME ▶';
  const check=document.createElement('a');check.className='btn secondary';check.id='checkLink';check.textContent='CHECK THIS CONSOLE ▶';
  again.textContent='START AGAIN';
  const actions=result.querySelector('.resultActions');actions.insertBefore(hunt,again);actions.insertBefore(check,again);
  const help=document.createElement('p');help.style.cssText='font-family:Arial,sans-serif;color:#b8c9e8;margin:16px 0 0;font-size:14px';help.innerHTML='Not certain? <a id="personalHelp" style="color:#ffd326;font-weight:bold">Ask RetroReplay UK for personal help</a> rather than guessing on a high-value purchase.';result.appendChild(help);
  const sync=()=>{const c=document.getElementById('console')?.value||'unknown';const heading=document.getElementById('resultTitle')?.textContent||'retro console';const names={playstation:'PlayStation',nintendo:'Nintendo',sega:'SEGA',xbox:'Xbox',atari:'Atari',handheld:'handheld console'};const model=names[c]||heading;shop.href=tracked(shop.href.split('?')[0],'recommendation');hunt.href=huntUrl(model);check.href=checkerUrl(model);document.getElementById('personalHelp').href=huntUrl(model)};
  document.getElementById('giftForm')?.addEventListener('submit',()=>setTimeout(sync,0));
  document.querySelectorAll('a[href^="https://retroreplay.uk"]').forEach(a=>{if(a.id==='shopLink')return;try{a.href=tracked(a.href,'site_link')}catch(_){}});
})();
