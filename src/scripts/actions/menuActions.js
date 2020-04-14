import { cardsWordsRender } from '../render/cardsWordsRender';
// import { renderCategoriesCards } from '../render/categoriesCardsRender';

export const clickOnMenu = () => {
  const menuItems = document.querySelector('.menu-list');
  menuItems.addEventListener('click', (event) => {
    const indexClickableCard = Number(event.target.getAttribute('id'));

    cardsWordsRender(indexClickableCard);

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

      // const cardsContainer = document.querySelector('.cards');
      // if (cardsContainer) {
      //   cardsContainer.remove();
      //   renderCategoriesCards();
      // }


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

