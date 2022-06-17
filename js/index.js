const hamburger = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobileMenu');
const classOff = document.querySelector('.close');
const links = document.querySelector('.m-menu-text');

window.addEventListener('DOMContentLoaded', () => {
  hamburger.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
  });
  classOff.addEventListener('click', () => {
    mobMenu.classList.remove('active');
  });
  links.addEventListener('click', () => {
    mobMenu.classList.remove('active');
  });
});

const seeProject = document.querySelector('.btn-active');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');

window.addEventListener('DOMContentLoaded', () => {
  seeProject.addEventListener('click', () => {
    popup.classList.toggle('active');
  });
  popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});