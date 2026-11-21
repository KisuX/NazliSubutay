/* Open certificate photos in an accessible native dialog. Links remain usable without JS. */
document.addEventListener('DOMContentLoaded', () => {
  const dialog=document.querySelector('.certificate-dialog');
  if(!dialog || typeof dialog.showModal !== 'function') return;
  const image=dialog.querySelector('.certificate-dialog-image');
  const caption=dialog.querySelector('.certificate-dialog-caption');
  const fullLink=dialog.querySelector('.certificate-dialog-link');
  document.querySelectorAll('[data-certificate-open]').forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      image.src=link.getAttribute('href');
      image.alt=link.querySelector('img')?.alt || '';
      caption.textContent=link.dataset.certificateTitle || image.alt;
      fullLink.href=image.src;
      dialog.showModal();
    });
  });
  dialog.querySelector('.certificate-dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click', e=>{if(e.target===dialog) dialog.close();});
  dialog.addEventListener('close',()=>{image.removeAttribute('src')});
});
