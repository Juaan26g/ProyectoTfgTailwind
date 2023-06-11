
//----------- DECLARACION DE VARIABLES ---------------------------
const themeToggle = document.getElementById('theme-toggle');
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
const sunMoon = document.getElementById('sun-moon');


//----------- EVENT LISTENER, CAMBIO DE TEMA LIGHT-DARK Y ALMACENAMIENTO LOCAL --------------

themeToggle.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    body.classList.remove('bg-light');
    body.classList.add('bg-dark');
    localStorage.setItem('theme', 'dark');
  }
});

//----------- ALMACENAMIENTO LOCAL ---------------------------

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  html.classList.add('dark');
  body.classList.add('bg-dark');
  sunMoon.classList.remove('sun');
  sunMoon.classList.add('moon');
  body.classList.add('dark-theme');

} else {
  html.classList.add('light');
  body.classList.add('bg-light');
  sunMoon.classList.remove('moon');
  sunMoon.classList.add('sun');
  body.classList.remove('dark-theme');

}

//----------- ANIMACIÓN SIDEBAR -------------------------------------


document.addEventListener('DOMContentLoaded', function () {
  const sidebarItems = document.querySelectorAll('.has-sub');

  sidebarItems.forEach(sidebarItem => {
    const submenu = sidebarItem.querySelector('.submenu');

    if (!submenu.classList.contains('active')) {
      submenu.style.maxHeight = '0';
    }

    sidebarItem.addEventListener('click', function (event) {

      const target = event.target;

      if (target.closest('.submenu-item')) {
        return;
      }

      event.preventDefault();

      if (!submenu.classList.contains('active')) {
        submenu.classList.add('active');
        const height = submenu.scrollHeight;
        submenu.style.maxHeight = `${height}px`;
        submenu.style.transitionDuration = `${Math.round(400 + (height / 10))}ms`;
      } else {
        const height = submenu.scrollHeight;
        submenu.style.maxHeight = '0';
        submenu.style.transition = 'max-height 0.3s ease-out';
        setTimeout(() => {
          submenu.classList.remove('active');
        }, 300);
      }

    });
  });
});

//----------- COMPORTAMIENTO DE LA BARRA LATERAL (ZOOM) ---------------------------

function handleResize() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 1200) {
    sidebarToggle.classList.remove('hidden');
    if (sidebar.classList.contains('active') && window.devicePixelRatio >= 1.5) {
      sidebar.classList.remove('active');
    }
  } else {
    sidebarToggle.classList.add('hidden');
    if (!sidebar.classList.contains('active')) {
      sidebar.classList.add('active');
    }
  }
}

window.addEventListener('resize', handleResize);

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarHide = document.getElementById('sidebar-hide');
  const body = document.body;
  const overlay = document.getElementById('main');

  function onZoomChange() {
    toggleSidebar(null, true);
  }

  //----------- COMPORTAMIENTO DE LA BARRA LATERAL (BLOQUEAR SCROLL) -----------------------


  function toggleSidebar(event, forceClose = false) {
    if (event) {
      event.stopPropagation();
    }
    if (forceClose) {
      body.classList.remove('no-scroll');
      overlay.classList.remove('active');
    } else {
      sidebar.classList.toggle('active');
      body.classList.toggle('no-scroll');
      overlay.classList.toggle('active');
    }
  }
  window.addEventListener('resize', onZoomChange);

  sidebarToggle.addEventListener('click', toggleSidebar);
  sidebarHide.addEventListener('click', toggleSidebar);

  body.addEventListener('click', (event) => {
    if (!event.target.closest('#sidebar') && !event.target.closest('#sidebar-toggle')) {
      if (sidebar.classList.contains('active') && window.innerWidth <= 1200) {
        toggleSidebar();
      }
    }
  });

  handleResize();
});

  //----------- BOTÓN CAMBIO LIGHT/DARK ---------------------------


function toggleTheme() {
  const body = document.body;
  const sunMoon = document.getElementById('sun-moon');
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    sunMoon.classList.remove('sun');
    sunMoon.classList.add('moon');
    localStorage.setItem('theme', 'dark');
  } else {
    sunMoon.classList.remove('moon');
    sunMoon.classList.add('sun');
    localStorage.setItem('theme', 'light');
  }
}