'use strict';
let cover = document.querySelector('.cardFront');
let btn = document.querySelector('.btn');
let cardBtn = document.querySelector('.fas')
let card = document.querySelector('.birthdayCard')
cover.classList.remove('open');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

btn.addEventListener('click', function () {
    card.classList.toggle('open')
    cover.classList.toggle('open')
    cardBtn.classList.toggle('mirror')

})


//close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  btn.classList.remove('hidden');
  cardBtn.classList.remove('hidden');
  
 
};

//open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  btn.classList.add('hidden');
  cardBtn.classList.add('hidden');
  
};

//looping through buttons node list
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//closing upon clicking on 'X' or overlay
btnCloseModal.addEventListener('click', closeModal);


