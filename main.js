// THEME TOGGLE
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// BACK TO TOP
const backBtn = document.getElementById('back-to-top');
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
