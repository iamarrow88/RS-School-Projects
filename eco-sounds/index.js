/* Кеширование изображений */

const imagesArray = ['forest', 'drozd', 'javoronok', 'slavka', 'solovey', 'zarynka'];

function preloadImages() {
   for(let i = 1; i < imagesArray.length; i++) {
     const img = new Image();
     img.src = `./assets/img/${i}.jpg`;
   }
 }

preloadImages();



/* Найти кнопки */
const btnWrapper = document.querySelector('.nav__menu');
const logo = document.querySelector('.logo');
const soundBtns = document.querySelectorAll('.menu__link');
const image = document.querySelector('.main__img');

const audio = document.querySelector('.player');
const play = document.querySelector('.block__btn');
const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause');
let isPlay = false;


/* что будет происходить: при нажатии на (а)ссылку меняется картинка, (б) меняется аудио, (в) включается звук, (г) можно поставить его на паузу. при этом (в-1) появляется иконка Пауза, (г-1) появляется игонка Плей*/


console.log(image.src);

function changeImageAndSound (event) {
   console.log(event.target.dataset.sound);
   image.src=`assets/img/${event.target.dataset.sound}.jpg`;
   audio.src=`assets/audio/${event.target.dataset.sound}.mp3`;
   isPlay = false;
   player ();
}

function changeImageAndSoundForLogo (event) {
   console.log(event.target.dataset.sound);
   image.src=`assets/img/forest.jpg`;
   audio.src=`assets/audio/forest.mp3`;
   isPlay = false;
   player ();
}


function player () {
   console.log('click!');

   if (!isPlay) {
      audio.play();
      isPlay = true;
      playBtn.classList.remove('visible');
      playBtn.classList.add('invisible');
      pauseBtn.classList.remove('invisible');
      pauseBtn.classList.add('visible');
   } else {
      audio.pause();
      isPlay = false;
      playBtn.classList.remove('invisible');
      playBtn.classList.add('visible');
      pauseBtn.classList.remove('visible');
      pauseBtn.classList.add('invisible');
   }
}
/* добавляем слушателя событий на кнопки */
btnWrapper.addEventListener('click', changeImageAndSound);
logo.addEventListener('click', changeImageAndSoundForLogo);

play.addEventListener('click', player);