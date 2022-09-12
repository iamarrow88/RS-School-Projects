let urlStart = 'https://api.unsplash.com/search/photos?query=';
let urlEnding = '&per_page=30&orientation=landscape&client_id=vnG4zqeBwcPQvR4H2lA56teaxU_hiGwsxuOyU_s3hDI';
let request = 'love';

let url = `${urlStart}${request}${urlEnding}`;

/* console.log('Oтметка - 55 баллов.');
console.log('Не выполненные/не засчитанные пункты:');
console.log(`1 - поисковый запрос можно отправить нажатием клавиши Enter`);
console.log('2 - Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения'); */





const btn = document.querySelector('.button');
const main = document.querySelector('.main');
const body = document.querySelector('.main__container');
const imgContainer = document.querySelector('.images_wrapper');
const input = document.querySelector('#search-box');
console.log(input);


/* getData(); */
/* ---------------FUNCTIONS----------------------- */

function getRandNum() {
   return Math.floor(Math.random() * 30);
}

function setLocalStorage() {
   localStorage.setItem('request', request);
   console.log(`setLocalStorage was launched`);
}

function getLocalStorage() {
   console.log(`getLocalStorage was launched`);
   if (localStorage.getItem('request', request)) {
      console.log(`LocalStorage is load`);
      request = localStorage.getItem('request');
      url = `${urlStart}${request}${urlEnding}`;
      console.log(url);
      getData();
   } else {
      getData();
   }
}

function toFindRequest () {
   request = document.querySelector('input').value;
   console.log(request);


   url = `${urlStart}${request}${urlEnding}`;
   console.log(url);
   getData();
   console.log(`we had launched getData, request is ${request}`);
   let img = document.querySelector('img');
   console.log(`we collect img tag from the page. here is:`);
   console.log(img);
   document.addEventListener('DOMContentLoaded', toMakeTitle);
   console.log('img tag received a event listener');
   toMakeTitle()
}

function toMakeTitle() {
   console.log(request);
   if (!request) {
      console.log('request is nothing');
      
      let title = document.createElement('div');
      console.log('title for request null created');
      title.classList.add('main__title');
      title.textContent = `Typed nothing - shown nothing ;)`;
      body.append(title);
   } else {
      let title = document.createElement('div');
      console.log(`title was created`);
      console.log(request);
      title.classList.add('main__title');
      title.textContent = `You're searching for ${request}!`;
      console.log(`title was receive text ${title.textContent}`);
      body.append(title);
      console.log(`title was add to the page`);
   }

}


function showData(data) {
   console.log(`function showData was launch`);
   for (let i = 0; i < data.results.length; i++) {
      let source = data.results[i];
      let anchors = document.createElement('a');
      anchors.classList.add('images__link');
      anchors.download = 'download';
      anchors.href = source.links.download; 
      anchors.setAttribute('target', '_blank');
      let img = document.createElement('img');
      img.classList.add('images');
      img.src = source.urls.regular; 
      imgContainer.append(anchors);
      anchors.append(img);
   } 
   let num = getRandNum();
   let object = data.results[`${num}`];
   let srcImage = object.urls.regular;
   console.log(`${srcImage}`);
   main.style.cssText+=`background-image:url(${srcImage}); background-size:cover`;
   console.log(`imgs were created and added to the page`);
   /* toMakeTitle(); */
   
}

async function getData() {
   console.log(`function getData was launch`);
   const res = await fetch(url);
   const data = await res.json();
   showData(data);
/*    let prom = new Promise(function(resolve, reject) {
      resolve('RUN');
   });
   prom.then(toMakeTitle); */
}

function removeElements() {
   console.log(`function removeElements was launch`);
   imgContainer.innerHTML = '';
   console.log(`imgContainer was emptied`);
   console.log(`${imgContainer}`);
   let title = document.querySelectorAll('.main__title');
   console.log(title);
   title.forEach(elem => elem.remove());
      console.log('all titles were remove');
/*    let images = document.querySelectorAll('.images');
   images.remove(); */
   /* let el = document.querySelector('.main__title'); */
/*    el.remove();
   removeElements(); */
}
input.addEventListener('keydown', function (event) {
   console.log(event.key);
   if (event.key === 'Enter') {
      removeElements();
      toFindRequest();
   }
});


/* ---------LISTENERS------------ */
btn.addEventListener('click', removeElements);
btn.addEventListener('click', toFindRequest);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

