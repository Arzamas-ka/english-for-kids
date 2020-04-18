export const activationBurgerMenu = () => {
  const menu = document.querySelector('.menu');
  const background = document.querySelector('.background');

  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    menu.classList.add('menu--open');
    background.classList.add('background--transparent');
  });

  const menuButton = document.querySelector('.menu__button-close');
  menuButton.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    background.classList.remove('background--transparent');
  });

  background.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    background.classList.remove('background--transparent');
  });
};
