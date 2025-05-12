// Agregar desplazamiento suave a los enlaces del menú
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
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  themeLabel.textContent = document.body.classList.contains('dark-mode')
    ? 'Modo oscuro'
    : 'Modo claro';
});