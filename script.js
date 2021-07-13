'use strict';
let cover = document.querySelector('.cover');
let btn = document.querySelector('.btn');
cover.classList.remove('open');
btn.addEventListener('click', function () {
    cover.classList.toggle('open')
})