let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function () {
   header__burger.classList.toggle('active');
   header_menu.classList.toggle('active');
   back.classList.toggle('lock');
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
   let currentScrollPos = window.pageYOffset;
   if (prevScrollpos >= currentScrollPos) {
      document.querySelector(".header").classList.add("scrolled");
   } else {
      document.querySelector(".header").classList.remove("scrolled");
   }
   prevScrollpos = currentScrollPos;
}