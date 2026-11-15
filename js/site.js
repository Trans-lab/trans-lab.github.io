'use strict';
document.addEventListener('DOMContentLoaded',()=>{
 const header=document.querySelector('.header'), toggle=document.querySelector('.menu-toggle');
 const closeMenu=()=>{header?.classList.remove('menu-open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation');};
 toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';header.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
 document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('menu-open')){closeMenu();toggle.focus();}});
 document.addEventListener('click',e=>{if(!header?.contains(e.target))closeMenu();});
 matchMedia('(min-width: 781px)').addEventListener('change',closeMenu);
 const zh=()=>document.documentElement.lang.startsWith('zh')||window.i18n?.currentLang()==='zh';
 const search=document.querySelector('#searchInput');
 if(search){
  const year=document.querySelector('#yearFilter'),pdf=document.querySelector('#pdfOnly'),buttons=[...document.querySelectorAll('[data-filter]')],items=[...document.querySelectorAll('.publication-item')];
  let type='all';
  const filter=()=>{
   const tokens=search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);let count=0;
   items.forEach(item=>{const text=item.textContent.toLocaleLowerCase();const yes=(type==='all'||item.dataset.type===type)&&(year.value==='all'||item.dataset.year===year.value)&&(!pdf.checked||!!item.querySelector('a[data-pdf]'))&&tokens.every(t=>text.includes(t));item.hidden=!yes;if(yes)count++;});
   document.querySelectorAll('.publication-year,.publication-section').forEach(group=>{group.hidden=![...group.querySelectorAll('.publication-item')].some(i=>!i.hidden);});
   document.querySelector('#resultCount').textContent=zh()?`显示 ${count} / ${items.length} 条成果`:`Showing ${count} of ${items.length} publications`;
   document.querySelector('#noResults').hidden=count!==0;
  };
  buttons.forEach(b=>b.addEventListener('click',()=>{type=b.dataset.filter;buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});filter();}));
  [search,year,pdf].forEach(e=>e.addEventListener(e===search?'input':'change',filter));
  document.querySelector('#resetFilters').addEventListener('click',()=>{search.value='';year.value='all';pdf.checked=false;buttons[0].click();search.focus();});
  document.addEventListener('languagechange',()=>queueMicrotask(filter));filter();
 }
 const resources=document.querySelector('#resourceSearch');
 if(resources){
  const cards=[...document.querySelectorAll('.resource-card')];
  const filter=()=>{const q=resources.value.toLocaleLowerCase().trim();let count=0;cards.forEach(c=>{c.hidden=!c.textContent.toLocaleLowerCase().includes(q);if(!c.hidden)count++;});document.querySelectorAll('.resource-category').forEach(c=>c.hidden=![...c.querySelectorAll('.resource-card')].some(x=>!x.hidden));document.querySelector('#resourceResults').textContent=zh()?`显示 ${count} / ${cards.length} 项资源`:`Showing ${count} of ${cards.length} resources`;document.querySelector('#resourceEmpty').hidden=count>0;};
  resources.addEventListener('input',filter);document.addEventListener('languagechange',()=>queueMicrotask(filter));filter();
 }
});
