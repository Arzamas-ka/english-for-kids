import { categoriesCardsRenderTrain } from '../render/categoriesCardsRenderTrain';
import { categoriesCardsRenderPlay } from '../render/categoriesCardsRenderPlay';

export const toggleTrainPlay = () => {
  const toggle = document.querySelector('.on-off-toggle__input');
  toggle.addEventListener('click', () => {
    categoriesCardsRenderTrain();
    categoriesCardsRenderPlay();
  });
};
