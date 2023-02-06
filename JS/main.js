const menu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

const nav = document.querySelector('.desktop-nav')
const x_color = document.querySelector('.hamburger')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    nav.classList.toggle('color');
    x_color.classList.toggle('x-color');
});