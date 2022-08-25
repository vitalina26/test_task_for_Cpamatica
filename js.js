const sidebar__button = document.querySelector('.sidebar__button');
const sidebar__popup = document.querySelector('.sidebar__popup');
const popup__close = document.querySelector('.popup__close');
sidebar__button.onclick = function () { 
    sidebar__popup.classList.add('active');

};

   
popup__close.addEventListener('click', () => {
    sidebar__popup.classList.remove('active')
});
let burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__menu');

burger.addEventListener('click', function(e) {
    menu.classList.toggle('active');
    
});