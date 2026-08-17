document.documentElement.classList.add('js');
const initLexeme=()=>{
  const menu=document.querySelector('.menu-button');
  const links=document.querySelector('.nav-links');
  if(menu&&links){
    menu.addEventListener('click',()=>{
      const open=links.classList.toggle('open');
      menu.setAttribute('aria-expanded',String(open));
    });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      links.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    }));
  }
  const reveal=[...document.querySelectorAll('.reveal')];
  if(!('IntersectionObserver' in window)){
    reveal.forEach(el=>el.classList.add('is-visible'));
    return;
  }
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}
  }),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
  reveal.forEach(el=>io.observe(el));
};
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initLexeme,{once:true});
else initLexeme();
