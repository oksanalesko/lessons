"use strict"

// VIDEO 1==========================================

// function showMessage (text, name) {
//    console.log(`${text}, ${name}!`);
// }
// setTimeout(showMessage, 3000, 'Привіт', 'Вася');

// Задача 1

function showName() {
   console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');


// Задача 2

showMessage();
function showMessage() {
   console.log('Повідомлення');
}

// Задача 3

// showMessageTwo();
// let showMessageTwo = function() {
//    console.log('Повідомлення-2');
// }

let showMessageTwo = function() {
   console.log('Повідомлення-2');
}
showMessageTwo();

// Задача 4

// if (2 > 1) {
//    function showMessageThree() {
//       console.log('Повідомлення-3');
//    }
// }
// showMessageThree();

if (2 > 1) {
   function showMessageThree() {
      console.log('Повідомлення-3');
   }
   showMessageThree();
}

let showMessageThree;
if (2 > 1) {
   showMessageThree = function() {
      console.log('Повідомлення-3');
   }
}
showMessageThree();

// Варіант 5



// Варіант 6



// VIDEO 2==========================================

// Задача 1

let arr = ['Ваня', 'Іштван', 'Оля'];
let newArr = arr;
newArr.push('Петя');
console.log(newArr.length);

// Задача 2

let users = ['Ваня', 'Іштван',];
// console.log(users);
users.push('Оля');
// console.log(users);
let userI = users.indexOf('Іштван');
console.log(userI);
users[1] = 'Петя';
console.log(users);
// users.splice(1, 1, 'Петя');
// users[1] = 'Петя';
// console.log(users);
let removed = users.splice(0, 1);
console.log(removed);
users.unshift('Маша', 'Паша');
console.log(users);

// Задача 3

let arrOne = ['Ваня', 'Іштван', 'Оля'];
let deleted = arrOne.splice(1, 1);
// console.log(deleted);

// Задача 4

let str = 'Ваня,Іштван,Оля';
let arrTwo = str.split(',');
console.log(typeof arrTwo);
if (Array.isArray(arrTwo)) {
   console.log("Це масив!");
} else {
   console.log("Це не масив!");
}

// Задача 5

let arrThree = [9, 2, 8];
let reduceValue = arrThree.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
});

// VIDEO 3==========================================

// Задача 1

let elemAttr = document.querySelector('[data-say-hi]');
let dataAttr = elemAttr.getAttribute('data-say-hi');
console.log(dataAttr);

// Задача 2

const elemContentText = document.querySelectorAll('.lesson__subitem');
// console.log(elemContentText);
let elemContent;
for (const item of elemContentText) {
   if (item.textContent==='Йончі') {
      elemContent = item;
      console.log(elemContent.textContent);
   }
}


// Задача 3

let collection = document.getElementsByClassName('like');
console.log(collection);

let collectionTwo = document.querySelectorAll('.like');
console.log(collectionTwo);

// Задача 4

// const list = document.querySelectorAll('ul.version4');
// console.log(list);
// list.insertAdjacentHTML (
//    'beforeend',
//    '<li>Текст</li>'
// );
// console.log(list);

const list = document.querySelector('ul.version4');
console.log(list);
list.insertAdjacentHTML (
   'beforeend',
   '<li>Текст</li>'
);
console.log(list);

// VIDEO 4==========================================

// Задача 1

const block = document.querySelector('.block');
const blockWidth = block.offsetWidth;
console.log(blockWidth);
const blockClientWidth = block.clientWidth;
console.log(blockClientWidth);
console.log(blockWidth - blockClientWidth);


const width = document.documentElement;
const windowClientWidth = width.clientWidth;
console.log(windowClientWidth);
const windowWidth = window.innerWidth;
console.log(windowWidth);
console.log(windowWidth - windowClientWidth);

// Задача 2

function scrollByTimeout () {
   window.scrollBy(0, 100);
   let scrollTop = window.pageYOffset;
   console.log(scrollTop);
}
setTimeout(scrollByTimeout, 1000);

// Задача 3

const elemHeader = document.querySelector('header');
console.log(elemHeader.getBoundingClientRect());
const elemHeaderDoc = elemHeader.getBoundingClientRect().top + window.pageYOffset;
console.log(elemHeaderDoc);

const elemVideo = document.querySelector('.page__video');
console.log(elemVideo.getBoundingClientRect());
const elemVideoDoc = elemVideo.getBoundingClientRect().top + window.pageYOffset;
console.log(elemVideoDoc);

const elemUl = document.querySelector('.version4');
const elemUlCoords = elemUl.getBoundingClientRect();
console.log(elemUlCoords.top);
const elemUlDoc = elemUlCoords.top + window.pageYOffset;
console.log(elemUlDoc);

// Задача 4



// Задача 5



// VIDEO 5==========================================

// Задача 1



// Задача 2



// Задача 3



// Задача 4



// Задача 5




// Задача 6



// ==================================================


const buttonPlay = document.querySelector(".js-video__play");
const videoPlay = document.querySelector("video");

function showVideo(){
   videoPlay.play();
   buttonPlay.remove();
};
if (buttonPlay) {
   buttonPlay.addEventListener("click", showVideo);
}
