import { categoriesCardsRenderTrain } from '../render/categoriesCardsRenderTrain';
import { removeElement } from '../helpers/domHelpers';

export const clickOnLogo = () => {
  document.querySelector('.logo').addEventListener('click', (evt) => {
    evt.preventDefault();
    removeElement('.cards');
    removeElement('.play-cards');

    categoriesCardsRenderTrain();

    const menu = document.querySelector('.menu');
    menu.classList.remove('menu--open');
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('backdrop--transparent');
  });
};
