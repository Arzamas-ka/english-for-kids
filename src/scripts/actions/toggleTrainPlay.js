import { categoriesCardsRenderTrain } from '../render/categoriesCardsRenderTrain';
import { categoriesCardsRenderPlay } from '../render/categoriesCardsRenderPlay';
import { cardsWordsRenderPlay } from '../render/cardsWordsRenderPlay';
import { dataCategoriesCards } from '../data/dataCards';

export const addClickOnToggle = () => {
  const toggle = document.querySelector('.on-off-toggle__input');
  toggle.addEventListener('click', () => {
    const isPlay = document.querySelector('.on-off-toggle__input').checked;
    const cards = document.querySelector('.cards');
    const title = document.querySelector('.title');

    if (isPlay && cards && title) {
      const categoryName = title.textContent;
      const { id: indx } = dataCategoriesCards.find(
        (item) => item.categoryName === categoryName
      );

      cardsWordsRenderPlay(indx);

      return;
    }

    // debugger;

    if (!isPlay) {
      categoriesCardsRenderTrain();
    }

    categoriesCardsRenderTrain();
    categoriesCardsRenderPlay();

    document.querySelectorAll('.menu-link').forEach((active) => {
      active.classList.remove('menu-link--active');
    });
  });
};
