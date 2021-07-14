'use strict';
let cover = document.querySelector('.cardFront');
let btn = document.querySelector('.btn');
let cardBtn = document.querySelector('.fas')
let card = document.querySelector('.birthdayCard')
cover.classList.remove('open');
btn.addEventListener('click', function () {
    card.classList.toggle('open')
    cover.classList.toggle('open')
    cardBtn.classList.toggle('mirror')

})

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//looping through buttons node list
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//closing upon clicking on 'X' or overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//closing upon hitting ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});