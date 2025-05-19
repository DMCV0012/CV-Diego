document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const targetId = link.getAttribute('href').substring(1); // Obtener el ID del destino
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajustar la posición para evitar que quede pegado al borde
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  });
});

// Alternar entre modo claro y oscuro con el toggle switch
const toggle = document.getElementById('theme-toggle');
const label = document.getElementById('theme-label');
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
  label.textContent = 'Modo oscuro';
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    label.textContent = 'Modo oscuro';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    label.textContent = 'Modo claro';
    localStorage.setItem('theme', 'light');
  }
});