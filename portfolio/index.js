const icon = document.querySelector('.menu-icon'); /* нашла иконку бургер меню */
const body = document.querySelector('.body'); /* нашла элемент body */
const menu = document.querySelector('.header__nav'); /* нашла ul меню */
const overlay = document.querySelector('.overlay'); /* подложка */

icon.addEventListener('click', () => {
   /* вешаем слушатель на иконку бургер-меню */
   icon.classList.toggle('open'); /* добавляем класс open к иконке, чтобы она поменялась на крестик */
   menu.classList.toggle('visible'); /* добавляем класс visible к меню, чтобы оно появилось за пределами экрана, отобразилось в нужном виде и плавно выехало на экран */
})

menu.addEventListener('click', () => {
   /* добавляем слушатель на ссылки меню */
   menu.classList.remove('visible'); /* удаляем класс visible с меню, чтобы оно скрылось*/
   icon.classList.remove('open'); /* удаляем класс open с иконки бургер меню, чтоб она  снова превратилась в три полоски */
})


const portfolioBtnsWrapper = document.querySelectorAll('.portfolio-btns')[0];
const porfolioBtnAll = document.querySelectorAll('.common-btn_black');


const addClass = function (event) {
   if (event.target.classList.contains('common-btn_black')) {
      porfolioBtnAll.forEach((el) => {
         el.classList.remove('active');
      });
      event.target.classList.add('active');
   }
   /*   */

}

portfolioBtnsWrapper.addEventListener('click', addClass);


const portfolioImages = document.querySelectorAll('.photo-block__img');

function changeImage(event) {
   if (event.target.classList.contains('common-btn_black')) {
      portfolioImages.forEach((img, index) => img.src = `assets/img/portfolio/${event.target.dataset.season}/${index + 1}.jpg`);

   }
}


portfolioBtnsWrapper.addEventListener('click', changeImage);

/* КЕШИРОВАНИЕ ИЗОБРАЖЕНИЙ */

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
   seasons.forEach(preloadBlockImages);
}

function preloadBlockImages(item) {
   for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `assets/img/portfolio/${item}/${i}.jpg`;
      console.log('item');
   }
}
preloadImages();
// translate.js
const i18Obj = {
   'en': {
     'skills': 'Skills',
     'portfolio': 'Portfolio',
     'video': 'Video',
     'price': 'Price',
     'contacts': 'Contacts',
     'hero-title': 'Alexa Rise',
     'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
     'hire': 'Hire me',
     'skill-title-1': 'Digital photography',
     'skill-text-1': 'High-quality photos in the studio and on the nature',
     'skill-title-2': 'Video shooting',
     'skill-text-2': 'Capture your moments so that they always stay with you',
     'skill-title-3': 'Rotouch',
     'skill-text-3': 'I strive to make photography surpass reality',
     'skill-title-4': 'Audio',
     'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
     'winter': 'Winter',
     'spring': 'Spring',
     'summer': 'Summer',
     'autumn': 'Autumn',
     'price-description-1-span-1': 'One location',
     'price-description-1-span-2': '120 photos in color',
     'price-description-1-span-3': '12 photos in retouch',
     'price-description-1-span-4': 'Readiness 2-3 weeks',
     'price-description-1-span-5': 'Make up, visage',
     'price-description-2-span-1': 'One or two locations',
     'price-description-2-span-2': '200 photos in color',
     'price-description-2-span-3': '20 photos in retouch',
     'price-description-2-span-4': 'Readiness 1-2 weeks',
     'price-description-2-span-5': 'Make up, visage',
     'price-description-3-span-1': 'Three locations or more',
     'price-description-3-span-2': '300 photos in color',
     'price-description-3-span-3': '50 photos in retouch',
     'price-description-3-span-4': 'Readiness 1 week',
     'price-description-3-span-5': 'Make up, visage, hairstyle',
     'order': 'Order shooting',
     'contact-me': 'Contact me',
     'send-message': 'Send message'
   },
   'ru': {
     'skills': 'Навыки',
     'portfolio': 'Портфолио',
     'video': 'Видео',
     'price': 'Цены',
     'contacts': 'Контакты',
     'hero-title': 'Алекса Райс',
     'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
     'hire': 'Пригласить',
     'skill-title-1': 'Фотография',
     'skill-text-1': 'Высококачественные фото в студии и на природе',
     'skill-title-2': 'Видеосъемка',
     'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
     'skill-title-3': 'Ретушь',
     'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
     'skill-title-4': 'Звук',
     'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
     'winter': 'Зима',
     'spring': 'Весна',
     'summer': 'Лето',
     'autumn': 'Осень',
     'price-description-1-span-1': 'Одна локация',
     'price-description-1-span-2': '120 цветных фото',
     'price-description-1-span-3': '12 отретушированных фото',
     'price-description-1-span-4': 'Готовность через 2-3 недели',
     'price-description-1-span-5': 'Макияж, визаж',
     'price-description-2-span-1': 'Одна-две локации',
     'price-description-2-span-2': '200 цветных фото',
     'price-description-2-span-3': '20 отретушированных фото',
     'price-description-2-span-4': 'Готовность через 1-2 недели',
     'price-description-2-span-5': 'Макияж, визаж',
     'price-description-3-span-1': 'Три локации и больше',
     'price-description-3-span-2': '300 цветных фото',
     'price-description-3-span-3': '50 отретушированных фото',
     'price-description-3-span-4': 'Готовность через 1 неделю',
     'price-description-3-span-5': 'Макияж, визаж, прическа',
     'order': 'Заказать съемку',
     'contact-me': 'Свяжитесь со мной',
     'send-message': 'Отправить'
   }
 }

const words = document.querySelectorAll('[data-i18]');
const langSwitcher = document.querySelector('.lang-switcher');

function translate(event) {
   event.target.classList.remove('lang-switcher__active');
   if (event.target.classList.contains('lang-switcher__btn')) {
      console.log('wow');
      
      if (event.target.classList.contains('lang-switcher__eng')) {
            event.target.classList.toggle('lang-switcher__active');
            words.forEach(elem => { 
            elem.textContent = i18Obj['en'][elem.dataset.i18]});          
         } else {
            event.target.classList.toggle('lang-switcher__active');
            words.forEach(elem => { 
               elem.textContent = i18Obj['ru'][elem.dataset.i18]; 
            });
         }
      
   }
}

langSwitcher.addEventListener('click', translate);



/* theme switch */

const themeBtn = document.querySelector('.theme-switcher');
const sections = ['skills', 'portfolio', 'video', 'price'];

function changeBodyStyle () {
   for (let i = 0; i < sections.length; i++) {
      `${sections[i]}`.classList.toggle('light-theme');

      console.log('wap');
   };
};

function themeSwitch (event) {
   changeBodyStyle();

   if (event.target.classList.contains('theme-switcher__light')) {
      event.target.src='assets/svg/moon.svg';
      event.target.alt='light theme';
      event.target.classList.remove('theme-switcher__light');
      event.target.classList.add('theme-switcher__dark');
   } else {
      event.target.src='assets/svg/carbon_sun.svg';
      event.target.alt='dark theme';
      event.target.classList.remove('theme-switcher__dark');
      event.target.classList.add('theme-switcher__light');
   }
}

themeBtn.addEventListener('click', themeSwitch);