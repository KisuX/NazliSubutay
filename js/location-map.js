/* Google maps is not loaded before the visitor explicitly clicks. */
document.querySelectorAll('[data-map-load]').forEach((button) => {
  button.addEventListener('click', () => {
    const holder = button.closest('.map-frame');
    if (!holder) return;
    const query = button.getAttribute('data-map-query') || '';
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps?q=' + encodeURIComponent(query) + '&output=embed';
    iframe.title = document.documentElement.lang === 'en' ? 'Google Maps — practice location' : 'Google Haritalar — muayenehane konumu';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    holder.replaceChildren(iframe);
  }, { once: true });
});
