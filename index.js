const hamburger = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobileMenu');
const classOff = document.querySelector('.close');
const links = document.querySelector('.m-menu-text');

hamburger.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});
classOff.addEventListener('click', () => {
  mobMenu.classList.remove('active')
});
links.addEventListener('click', () => {
  mobMenu.classList.remove('active')
});

