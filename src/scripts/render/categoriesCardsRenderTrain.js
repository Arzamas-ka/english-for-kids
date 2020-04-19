import { templateCategoriesCardsRender } from './templateCategoriesCardsRender';
import { getExpectedElement } from '../helpers/getExpectedElem';
import {
  createDivElement,
  removeElement,
  removeChildren,
  insertBefore,
} from '../helpers/domHelpers';
import { COLOR_ORANGE, COLOR_PINK } from '../data/constants';

export const categoriesCardsRenderTrain = () => {
  const isPlay = document.querySelector('.on-off-toggle__input').checked;
  const buttonContainer = document.querySelector('.button-container');
  const cards = createDivElement('set-cards');

  if (!isPlay && document.querySelector('.set-cards')) {
    removeElement('.set-cards');
    insertBefore(cards, buttonContainer);
    templateCategoriesCardsRender(COLOR_PINK);

    document
      .querySelector('.set-cards')
      .addEventListener('click', getExpectedElement);

    return;
  }

  if (isPlay && document.querySelector('.cards')) {
    removeElement('.cards');
    insertBefore(cards, buttonContainer);
    templateCategoriesCardsRender(COLOR_ORANGE);

    return;
  }

  if (
    !isPlay &&
    document.querySelector('.play-cards') &&
    document.querySelector('.play__start-game') &&
    document.querySelector('.play__listen')
  ) {
    removeChildren('.answers');
    removeChildren('.button-container');
    removeElement('.play-cards');
    insertBefore(cards, buttonContainer);

    templateCategoriesCardsRender(COLOR_PINK);
    document
      .querySelector('.set-cards')
      .addEventListener('click', getExpectedElement);
  }
};
