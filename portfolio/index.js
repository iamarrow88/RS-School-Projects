window.onload = () => {
   const menu = document.querySelector('.header__nav');
   const burgerBtn = document.querySelector('.menu-icon');
   const menuLinks = [...document.querySelectorAll('.menu__link')];
   
   const menuToggle = () => {
      /* menu.classList.toggle('visible'); */
      console.log('hgfdg');
   }
   
   const burgerSubsribe = () => {
      burgerBtn.addEventListener('click', menuToggle);
   }
   

}

