import { categoriesCardsRenderTrain } from '../render/categoriesCardsRenderTrain';

export const clickOnLogo = () => {
  document.querySelector('.logo').addEventListener('click', () => {
    categoriesCardsRenderTrain();

    const menu = document.querySelector('.menu');
    menu.classList.remove('menu--open');
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('backdrop--transparent');
  });
};
