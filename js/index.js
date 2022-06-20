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
const projectObb = {
  name: 'My Recent Works',
  subName: 'Multi-Post Stories',
  info: `class="project-discription">A daily selection of privately personalized reads; no accounts or
  sign-ups
  required. has been the industry's standard dummy text ever since the 1500s, when an unknown
  printer
  took
  a standard dummy text.`,
  button: 'See Project',
};

function displayProjects() {
  const projectCards = document.getElementById('cards');
  const cards = document.createElement('div');
  cards.classList.add('projects-section2');

  arr.forEach((project, index) => {
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
        <button id="${index}" type="submit" class="btn-active animate-btn button4 button2 button1-text">
          See Project
        </button></div>`;
    cards.insertAdjacentHTML('beforeend', projectHTML);
  });
  projectCards.appendChild(cards);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const emailIcnorect = document.getElementById('emile-incorect');
  const msgError = document.getElementById('msg-error');
  const name = document.getElementById('name-input').value;
  const email = document.getElementById('email-input').value;
  const msg = document.getElementById('msg-input').value;
  let error = false;

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    error = true;
  }
  if (error === false) {
    if (email.length === 0) {
      emailError.innerHTML = 'Email is required';
      error = true;
    }
    nameError.innerHTML = '';
  }
  if (error === false) {
    if (!email.match('[a-z0-9]+@[a-z]+.[a-z]{2,3}')) {
      emailIcnorect.innerHTML = 'Email is incorect';
      error = true;
    }
    emailError.innerHTML = '';
  }
  if (error === false) {
    if (email !== email.toLowerCase()) {
      emailIcnorect.innerHTML = 'Email is incorect';
      error = true;
    }
  }
  if (error === false) {
    if (msg.length === 0) {
      msgError.innerHTML = 'Message is required';
      error = true;
    }
    emailIcnorect.innerHTML = '';
  }
  if (!error) {
    const form = document.getElementById('contact-form');
    form.submit();
  }
};

function setData() {
  const storeName = document.getElementById('name-input');
  const nameValue = storeName.value;
  localStorage.setItem(nameValue);
  const storeEmail = document.getElementById('email-input');
  const emailValue = storeEmail.value;
  localStorage.setItem('storeEmail-input', emailValue);
  const storeMsg = document.getElementById('msg-input');
  const msgValue = storeMsg.value;
  localStorage.setItem('storeMsg-input', msgValue);
}

function getData() {
  let localData = localStorage.getItem(nameValue);
  localData = localStorage.getItem(emailValue);
  localData = localStorage.getItem(msgValue);
}

window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.menu');
  const mobMenu = document.querySelector('.mobileMenu');
  const classOff = document.querySelector('.close');
  const links = document.querySelector('.m-menu-text');
  const popup = document.querySelector('.popup');
  const popupClose = document.getElementById('close-button');
  const resentWorks = document.getElementById('my-resent-projects');
  const popupHeading = document.getElementById('popup-heading');
  const popupParagraph = document.getElementById('popup-paragraph');
  document.getElementById('name-input').addEventListener('focusout', setData);
  document.getElementById('email-input').addEventListener('focusout', setData);
  document.getElementById('msg-input').addEventListener('focusout', setData);

  const multiPostStory = `
    <h1 class="projects">${projectObb.name}</h1>
    <hr class="line">
</div>
  <div class="project-1">
    <img alt="Project Image" class="project-img" src="css/image/projects_imges/Placeholder.png">
    <div class="project-head">
      <h2 class="heading2 multy-task">${projectObb.subName}</h2>
      <p ${projectObb.info}</p>
      <ul class="web-icons icons-desktop">
          <li>
              <img alt="Web Icon" class="icon-web" src="css/image/projects_imges/icons/css.png">
          </li>
          <li>
              <img alt="Web Icon" class="icon-web" src="css/image/projects_imges/icons/html.png">
          </li>
          <li>
              <img alt="Web Icon" class="icon-web" src="css/image/projects_imges/icons/bootstrap.png">
          </li>
          <li>
              <img alt="Web Icon" class="icon-web" src="css/image/projects_imges/icons/puby.png">
          </li>
      </ul>
      <form>
          <button id="6" type="submit" class="animate-btn project-desktop-button button1 button1-text btn-active">${projectObb.button}</button>
      </form>
  </div>`;
  resentWorks.insertAdjacentHTML('beforeend', multiPostStory);
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
  let popupH1 = '';
  let popupInfo = '';
  seeProject.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const id = parseInt(event.target.id, 10);
      if (id === 6) {
        popupH1 = projectObb.subName;
        popupInfo = projectObb.info;
      } else {
        popupH1 = arr[id].name;
        popupInfo = arr[id].description;
      }
      popupHeading.innerHTML = popupH1;
      popupParagraph.innerHTML = popupInfo;
      popup.classList.toggle('active');
    });
  });
  popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
  });
  const submit = document.getElementById('form-btn');
  submit.addEventListener('click', handleSubmit);
});
