// Carousel logic
const slides = Array.from(document.querySelectorAll('.hero-slide'));
let index = 0;
function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
}
function next() { index = (index + 1) % slides.length; showSlide(index); }
function prev() { index = (index - 1 + slides.length) % slides.length; showSlide(index); }

document.getElementById('nextSlide').addEventListener('click', next);
document.getElementById('prevSlide').addEventListener('click', prev);
let timer = setInterval(next, 5000);
['nextSlide','prevSlide'].forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(next, 7000);
  });
});

// CTA scroll to products
document.getElementById('shopNowBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Newsletter form
const form = document.getElementById('newsletterForm');
const msg = document.getElementById('newsletterMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;
  msg.textContent = `Thanks! Confirmation sent to ${email}.`;
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();