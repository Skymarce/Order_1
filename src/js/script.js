const menu = document.querySelector('.header__menu-items'),
      menuItem = document.querySelectorAll('.header__menu-item'),
      hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__hamburger_active');
    menu.classList.toggle('header__menu-items_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu-items_active');
    });
});