import { cardsWordsRenderTrain } from '../render/cardsWordsRender';
import { renderCategoriesCardsTrain } from '../render/categoriesCardsRender';

export const clickOnMenu = () => {
  const menuItems = document.querySelector('.menu-list');
  menuItems.addEventListener('click', (event) => {
    const indexClickableCard = Number(event.target.getAttribute('id'));

    cardsWordsRenderTrain(indexClickableCard);

    const menu = document.querySelector('.menu');
    menu.classList.remove('menu--open');
    const background = document.querySelector('.background');
    background.classList.remove('background--transparent');
  });
};

export const clickLogo = () => {
  document.querySelector('.logo').addEventListener('click', () => {
    renderCategoriesCardsTrain();

    const menu = document.querySelector('.menu');
    menu.classList.remove('menu--open');
    const background = document.querySelector('.background');
    background.classList.remove('background--transparent');
  });
};

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
