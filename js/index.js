const arr = [
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized r haspersonalized r has been the industrys standard',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized r haspersonalized r has been the industrys standard',
  },
];

function displayProjects() {
  const projectCards = document.getElementById('cards');
  const cards = document.createElement('div');
  cards.classList.add('projects-section2');
  arr.forEach((project) => {
    const projectHTML = `<div class="page2"><h2 class="heading2 heading4 text-color h2-margin">${project.name}</h2>
        <p class="project-discription project-discription2 text-color">${project.description}</p>
        <ul class="web-icons web-icons4">
          <li>
            <button type="submit" class="web-icon-page2 icon-web">html</button>
          </li>
          <li>
           <button type="submit" class="web-icon-page2 icon-web">bootstrap</button>
          </li>
          <li>
           <button type="submit" class="web-icon-page2 icon-web">Ruby</button>
          </li>
        </ul>
        <button type="submit" class="btn-active animate-btn button4 button2 button1-text">
          See Project
        </button></div>`;
    cards.insertAdjacentHTML('beforeend', projectHTML);
  });
  projectCards.appendChild(cards);
}

window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.menu');
  const mobMenu = document.querySelector('.mobileMenu');
  const classOff = document.querySelector('.close');
  const links = document.querySelector('.m-menu-text');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup-close');

  hamburger.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
  });
  classOff.addEventListener('click', () => {
    mobMenu.classList.remove('active');
  });
  links.addEventListener('click', () => {
    mobMenu.classList.remove('active');
  });
  displayProjects();
  const seeProject = document.querySelectorAll('.btn-active');
  seeProject.forEach(window.addEventListener('click', () => {
    popup.classList.toggle('active');
  }));
  popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});
