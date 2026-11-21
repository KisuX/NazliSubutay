/* Shared site navigation: the same markup and behavior on every page. */
(() => {
  'use strict';
  const script = document.currentScript;
  const root = script?.dataset.siteRoot || '';
  const page = document.documentElement.dataset.sitePath || 'index.html';
  const english = document.documentElement.lang.toLowerCase().startsWith('en');
  const header = document.querySelector('[data-shared-header]');
  if (!header) return;
  const pairs = {"index.html":"en/index.html","hakkimda.html":"en/about.html","rehber.html":"en/guide.html","iletisim.html":"en/contact.html","rehber/agiz-kokusu-kuruluk.html":"en/guide/bad-breath-dry-mouth.html","rehber/cocuklarda-agiz-bakimi.html":"en/guide/childrens-teeth.html","rehber/dis-agrisi.html":"en/guide/toothache.html","rehber/dis-curugu.html":"en/guide/tooth-decay.html","rehber/dis-eti-sagligi.html":"en/guide/gum-health.html","rehber/dis-fircalama.html":"en/guide/toothbrushing.html","rehber/dis-hassasiyeti.html":"en/guide/tooth-sensitivity.html","rehber/dis-hekimi-kontrolu.html":"en/guide/dental-checkups.html","rehber/dis-ipi.html":"en/guide/flossing.html","rehber/gebelikte-dis-sagligi.html":"en/guide/pregnancy-oral-health.html","yasal/cerez-politikasi.html":"en/legal/cookie-policy.html","yasal/gizlilik-politikasi.html":"en/legal/privacy-policy.html","yasal/kvkk-aydinlatma-metni.html":"en/legal/privacy-notice.html","yasal/site-bilgileri.html":"en/legal/website-information.html"};
  const reverse = Object.fromEntries(Object.entries(pairs).map(([tr,en]) => [en,tr]));
  const translated = english ? (reverse[page] || 'index.html') : (pairs[page] || 'en/index.html');
  const trPage = english ? translated : page;
  const enPage = english ? page : translated;
  const section = /(^|\/)index\.html$/.test(page) && (page === 'index.html' || page === 'en/index.html') ? 'home'
    : /^(hakkimda|en\/about)\.html$/.test(page) ? 'about'
    : /^(rehber(\/|\.html)|en\/guide(\/|\.html))/.test(page) ? 'guide'
    : /^(iletisim|en\/contact)\.html$/.test(page) ? 'contact' : '';
  const items = english
   ? [['home','en/index.html','Home'],['about','en/about.html','About'],['guide','en/guide.html','Guide'],['contact','en/contact.html','Contact']]
   : [['home','index.html','Ana Sayfa'],['about','hakkimda.html','Hakkımda'],['guide','rehber.html','Rehber'],['contact','iletisim.html','İletişim']];
  const labels = english
    ? {brand:'DENTIST', menu:'Open or close the menu', nav:'Main navigation', appointment:'WhatsApp Appointment', phone:'Call by phone'}
    : {brand:'DİŞ HEKİMİ', menu:'Menüyü aç veya kapat', nav:'Ana menü', appointment:'WhatsApp Randevu', phone:'Telefonla ara'};
  const whatsapp = english ? 'https://wa.me/905334278605?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20available%20appointment%20dates%20and%20times.' : 'https://wa.me/905334278605?text=Merhaba%2C%20randevu%20i%C3%A7in%20uygun%20g%C3%BCn%20ve%20saatleri%20%C3%B6%C4%9Frenmek%20istiyorum.';
  const logo = `<svg class="tooth-logo" viewBox="0 0 58 70" fill="none" aria-hidden="true"><path d="M28 9C18 3 7 6 6 18c-1 11 4 18 7 27 2 6 3 16 8 16 4 0 4-15 8-15s5 15 9 15c5 0 6-10 8-16 3-9 8-17 7-27C52 6 41 3 31 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></svg>`;
  const whatsappIcon = `<svg aria-hidden="true" fill="currentColor" viewBox="0 0 32 32"><path d="M16 2.8a13.1 13.1 0 0 0-11.3 19.6L2.6 30l7.8-2.1A13.2 13.2 0 1 0 16 2.8Zm0 23.8a10.5 10.5 0 0 1-5.3-1.4l-.4-.3-4.5 1.2 1.2-4.3-.3-.5a10.7 10.7 0 1 1 9.3 5.3Zm6.1-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1a8.7 8.7 0 0 1-4.2-3.7c-.3-.6.3-.6.9-1.8.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.8-.5H12c-.3 0-.6.1-.9.4-.4.4-1.3 1.3-1.3 3.1s1.3 3.4 1.5 3.6c.2.2 2.6 4 6.3 5.5 2.4.9 3.3.8 4 .7.6-.1.6-1.4.5-1.5-.1-.1-.3-.2-.7-.4Z"/></svg>`;
  const navList = items.map(([key,path,title]) => `<li><a href="${root+path}"${section === key ? ' aria-current="page"' : ''}>${title}</a></li>`).join('');
  header.innerHTML = `<div class="container navbar"><a class="brand" href="${root+(english?'en/index.html':'index.html')}" aria-label="Nazlı Subutay — ${labels.brand}">${logo}<span>Nazlı Subutay<small>${labels.brand}</small></span></a><button type="button" class="menu-toggle" aria-label="${labels.menu}" aria-controls="primary-navigation" aria-expanded="false"><span aria-hidden="true">☰</span></button><nav class="nav-wrap" id="primary-navigation" aria-label="${labels.nav}"><ul class="nav-links">${navList}</ul><div class="lang-switch"><a href="${root+trPage}" lang="tr"${english?'':' class="active" aria-current="page"'}>TR</a><span aria-hidden="true">/</span><a href="${root+enPage}" lang="en"${english?' class="active" aria-current="page"':''}>EN</a></div><a class="wa-nav" href="${whatsapp}" rel="noopener noreferrer" target="_blank" aria-label="${labels.appointment}">${whatsappIcon}<span>${labels.appointment}</span></a></nav></div>`;
})();
