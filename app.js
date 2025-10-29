// Smooth scroll za interne linkove
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelector('.site-header')?.classList.remove('open');
      document.querySelector('.hamburger')?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Logo -> Home
document.querySelectorAll('.brand').forEach(el=>{
  el.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior:'smooth' });
  });
});

// Learn More -> About
document.getElementById('learnMore')?.addEventListener('click', ()=>{
  document.querySelector('#about').scrollIntoView({ behavior:'smooth' });
});

// Mobile hamburger
const header = document.querySelector('.site-header');
const burger = document.querySelector('.hamburger');
burger?.addEventListener('click', ()=>{
  const isOpen = header.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Join form (demo)
document.querySelector('.join-form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = e.currentTarget.querySelector('input[type="email"]').value.trim();
  if(!email){ return; }
  alert(`Thanks for joining, ${email}!`);
  e.currentTarget.reset();
});

// Footer godina
document.getElementById('year').textContent = new Date().getFullYear();
