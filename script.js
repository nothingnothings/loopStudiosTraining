const hamburgerButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});
