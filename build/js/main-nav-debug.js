'use strict';

const menu = document.querySelector('.js-main-nav');
const menuOpen = document.querySelector('.js-page-header__open-btn');
const menuClose = document.querySelector('.js-main-nav__close-btn');

menuOpen.addEventListener('click', function () {
  showMenu();
});

menuClose.addEventListener('click', function () {
  hideMenu();
});

menu.addEventListener('click', (e) => {
  const link = e.target.closest('.user-list__item');

  if (link) {
    hideMenu();
  }
});

function hideMenu() {
  /*  menu.style.transform = 'translateY(-100%)'; */
  menu.style.display = 'none';
}

function showMenu() {
  /*  menu.style.transform = 'translateY(0)'; */
  menu.style.display = 'block';
}
