import { categoriesCardsRenderTrain } from '../render/categoriesCardsRenderTrain';

export const clickOnLogo = () => {
  document.querySelector('.logo').addEventListener('click', () => {
    categoriesCardsRenderTrain();

    const menu = document.querySelector('.menu');
    menu.classList.remove('menu--open');
    const background = document.querySelector('.background');
    background.classList.remove('background--transparent');
  });
};