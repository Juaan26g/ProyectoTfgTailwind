//----------- CAMBIO AUTOMÁTICO COLOR LIGHT/DARK ---------------------------
const html = document.getElementsByTagName('html')[0];
const error = document.getElementById('error');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  html.classList.add('dark');
  error.classList.add('bg-dark');
} else {
  html.classList.add('light');
  error.classList.add('bg-light');
}