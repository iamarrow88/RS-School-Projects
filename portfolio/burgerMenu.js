const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.menu-icon');
const menuLinks = [...document.querySelectorAll('.menu__link')];

const menuToggle = () => {
   menu.classList.toggle('open');
}

const burgerSubsribe = () => {
   burgerBtn.addEventListener('click', menuToggle);
}

export default burgerSubsribe;
