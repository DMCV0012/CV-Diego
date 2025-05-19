// Scroll suave para navegación (si existe nav)
const navLinks = document.querySelectorAll('nav a');
if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -50;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

// Alternar entre modo claro y oscuro con el toggle switch
const toggle = document.getElementById('theme-toggle');
const label = document.getElementById('theme-label');
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
  label.textContent = 'Modo oscuro';
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    label.textContent = 'Modo oscuro';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    label.textContent = 'Modo claro';
    localStorage.setItem('theme', 'light');
  }
});