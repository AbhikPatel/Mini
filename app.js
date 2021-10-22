const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector('.ulwala');

menu.addEventListener('click', function () {

    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});