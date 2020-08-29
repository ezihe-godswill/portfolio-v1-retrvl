let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay')
let item = document.querySelector('.nav a');

menu.addEventListener('click', function () {
    menu.classList.toggle('active');
    overlay.classList.toggle('menu-open');
});

item.addEventListener('click', function () {
    menu.classList.remove('active');
    overlay.classList.remove('menu-open');
});
