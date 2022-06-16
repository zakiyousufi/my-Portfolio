const hamburger = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobileMenu');
const classOff = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});
classOff.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
document.querySelectorAll('.m-menu-text').forEach(n => n.addEventListener('click', () => {
  mobMenu.classList.remove('active');
}));
