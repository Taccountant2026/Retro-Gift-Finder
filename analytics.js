/* RRUK consent-aware conversion tracking */
(() => {
  'use strict';
  const measurementId = 'G-PF6Q3TSMVL';
  const consentKey = 'rruk_analytics_consent';
  const valid = new Set(['granted', 'denied']);
  const saved = localStorage.getItem(consentKey);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
  gtag('consent', 'default', {
    analytics_storage: saved === 'granted' ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  let loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
    gtag('js', new Date());
    gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: true,
      page_title: document.title,
      page_location: location.href.split('#')[0]
    });
  }

  window.rrukTrack = (name, params = {}) => {
    if (localStorage.getItem(consentKey) !== 'granted') return;
    loadAnalytics();
    gtag('event', name, Object.assign({
      page_path: location.pathname,
      source_tool: document.title.split('|')[0].trim()
    }, params));
  };

  function setConsent(value) {
    if (!valid.has(value)) return;
    localStorage.setItem(consentKey, value);
    gtag('consent', 'update', { analytics_storage: value });
    document.getElementById('rruk-consent')?.remove();
    if (value === 'granted') {
      loadAnalytics();
      rrukTrack('consent_granted');
    }
  }

  function banner() {
    if (valid.has(saved)) return;
    const el = document.createElement('aside');
    el.id = 'rruk-consent';
    el.setAttribute('aria-label', 'Analytics choice');
    el.innerHTML = '<div><strong>Help improve these free RRUK tools?</strong><span> Allow anonymous usage analytics. Advertising tracking stays off.</span></div><div><button data-consent="granted">Allow analytics</button><button data-consent="denied">No thanks</button></div>';
    Object.assign(el.style, {position:'fixed',left:'12px',right:'12px',bottom:'12px',zIndex:'9999',background:'#020a20',color:'#fff',border:'2px solid #16d5ff',padding:'14px',display:'flex',gap:'14px',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',boxShadow:'0 5px 24px #0009',fontFamily:'Arial,sans-serif',fontSize:'14px'});
    el.querySelectorAll('button').forEach((b, i) => Object.assign(b.style, {border:'0',padding:'10px 13px',cursor:'pointer',fontWeight:'700',marginLeft:'8px',background:i ? '#29446f' : '#ffd326',color:i ? '#fff' : '#051334'}));
    el.addEventListener('click', e => {
      const value = e.target?.dataset?.consent;
      if (value) setConsent(value);
    });
    document.body.appendChild(el);
  }

  function cleanLabel(el) {
    return (el.dataset.event || el.id || el.textContent || el.getAttribute('aria-label') || 'unknown')
      .trim().replace(/\s+/g, ' ').slice(0, 80);
  }

  document.addEventListener('click', e => {
    const el = e.target.closest('a,button');
    if (!el || el.closest('#rruk-consent')) return;
    const href = el.tagName === 'A' ? el.href : '';
    const external = href && new URL(href, location.href).origin !== location.origin;
    rrukTrack(external ? 'outbound_click' : 'tool_action', {
      action_label: cleanLabel(el),
      link_url: href || undefined
    });
  }, {capture:true});

  document.addEventListener('submit', e => {
    rrukTrack('form_complete', { form_id: e.target.id || 'unknown_form' });
  }, {capture:true});

  if (saved === 'granted') loadAnalytics();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', banner);
  else banner();
})();