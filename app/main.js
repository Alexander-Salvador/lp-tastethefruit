const navMenu = document.getElementById('nav_list');
const hamburger = document.getElementById('nav-hamburguer-mobile');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  console.log('click');
});
