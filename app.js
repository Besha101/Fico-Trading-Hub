// Mobile hamburger
const header = document.querySelector('.site-header');
const burger = document.querySelector('.hamburger');
burger?.addEventListener('click', ()=>{
  const isOpen = header.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Join form demo
document.querySelector('.join-form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = e.currentTarget.querySelector('input[type="email"]').value.trim();
  if(!email) return;
  alert(`Thanks for joining, ${email}!`);
  e.currentTarget.reset();
});

// Godina u footeru
document.getElementById('year').textContent = new Date().getFullYear();
