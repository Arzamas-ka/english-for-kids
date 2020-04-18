import { cardsWordsRenderTrain } from '../render/cardsWordsRenderTrain';
import { cardsWordsRenderPlay } from '../render/cardsWordsRenderPlay';

export const clickOnMenu = () => {
  const menuItems = document.querySelector('.menu-list');
  menuItems.addEventListener('click', (event) => {
    const indexClickableCard = Number(event.target.getAttribute('id'));

    const toggle = document.querySelector('.on-off-toggle__input').checked;
    if (toggle === false) {
      cardsWordsRenderTrain(indexClickableCard);
    } else {
      cardsWordsRenderPlay(indexClickableCard);
    }

    const menu = document.querySelector('.menu');
    menu.classList.remove('menu--open');
    const background = document.querySelector('.background');
    background.classList.remove('background--transparent');
  });
};
