'use strict';
let cover = document.querySelector('.cardFront');
let btnOpen = document.querySelector('.btn-open');
let cardBtn = document.querySelector('.fas')
let card = document.querySelector('.birthdayCard')
cover.classList.remove('open');

let modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = 'block';
    btnOpen.classList.add('hidden')
    cardBtn.classList.add('hidden')

  });
});

let closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    let modal = btn.closest('.modal').style.display = 'none'
    btnOpen.classList.remove('hidden')
    cardBtn.classList.remove('hidden')
  })
})





btnOpen.addEventListener('click', function () {
  console.log('l')
    card.classList.toggle('open')
    cover.classList.toggle('open')
    cardBtn.classList.toggle('mirror')

})




