// JavaScript for About page 

const menu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

const nav = document.querySelector('.ham-cont');
const xColor = document.querySelector('.hamburger');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
  nav.classList.toggle('color');
  xColor.classList.toggle('x-color');
});