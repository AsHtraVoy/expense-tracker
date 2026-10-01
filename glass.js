/* Home Budget — Aurora Glass interactions */
(()=>{
  const $=s=>document.querySelector(s);
  const splash=document.createElement('div');
  splash.className='glass-splash';
  splash.innerHTML='<div class="splash-core"><div class="splash-mark">₹</div><div class="splash-title">Home Budget</div><div class="splash-sub">A little more clarity. A lot more glass.</div></div>';
  document.body.appendChild(splash);
  const ambient=document.createElement('div');ambient.id='glassAmbient';ambient.innerHTML='<i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i>';document.body.appendChild(ambient);
  const spot=document.createElement('div');spot.id='glassSpotlight';document.body.appendChild(spot);
  const hint=document.createElement('div');hint.className='glass-hotkey';hint.innerHTML='<kbd>G</kbd> glow &nbsp; <kbd>N</kbd> new entry';document.body.appendChild(hint);
  setTimeout(()=>splash.classList.add('hide'),850);

  // Cursor spotlight on desktop.
  let mx=innerWidth*.7,my=innerHeight*.35,raf=0;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(!raf){raf=requestAnimationFrame(()=>{spot.style.left=mx+'px';spot.style.top=my+'px';raf=0})}});

  // Glass ripple on buttons.
  document.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const r=document.createElement('span');r.className='ripple';const rect=b.getBoundingClientRect(),size=Math.max(rect.width,rect.height);r.style.width=r.style.height=size+'px';r.style.left=(e.clientX-rect.left-size/2)+'px';r.style.top=(e.clientY-rect.top-size/2)+'px';b.style.position='relative';b.style.overflow='hidden';b.appendChild(r);setTimeout(()=>r.remove(),650);
  });

  // Keyboard shortcuts: N = log transaction, G = toggle glow, / = search history.
  let glow=true;
  addEventListener('keydown',e=>{
    if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
    if(e.key.toLowerCase()==='n'){e.preventDefault();document.querySelector('[data-view="log"]')?.click();setTimeout(()=>document.querySelector('#txAmount')?.focus(),100)}
    if(e.key.toLowerCase()==='g'){glow=!glow;spot.style.opacity=glow?'1':'0';toastSafe(glow?'Ambient glow on':'Ambient glow off')}
    if(e.key==='/'){e.preventDefault();document.querySelector('#fSearch')?.focus();document.querySelector('[data-view="history"]')?.click()}
  });

  // Add a tiny live privacy indicator to the topbar.
  const top=$('.topbar');if(top){const p=document.createElement('span');p.className='pill income';p.style.marginLeft='10px';p.textContent='● LOCAL';top.querySelector('.top-left')?.appendChild(p)}

  // Surprise: double-click the brand for a short visual burst.
  document.querySelector('.brand')?.addEventListener('dblclick',()=>burst(false));
  // Celebrate successful transaction saves by observing the entry status.
  const form=$('#txForm');
  if(form){form.addEventListener('submit',()=>setTimeout(()=>burst(true),180))}

  function burst(full){
    const layer=document.createElement('div');layer.className='celebrate';
    const n=full?36:18;
    for(let i=0;i<n;i++){
      const c=document.createElement('i');c.className='confetti';c.style.left=(8+Math.random()*84)+'%';c.style.setProperty('--x',(Math.random()*260-130)+'px');c.style.animationDelay=(Math.random()*.18)+'s';c.style.background=['#8b7cff','#55d8ff','#2ee6a6','#ff6680','#ffd166'][i%5];layer.appendChild(c)
    }
    document.body.appendChild(layer);setTimeout(()=>layer.remove(),1900);
  }
  function toastSafe(msg){try{if(typeof toast==='function')toast(msg)}catch{}}
})();
