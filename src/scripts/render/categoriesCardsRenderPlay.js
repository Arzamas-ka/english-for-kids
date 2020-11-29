import { getClickedElement } from '../helpers/getExpectedElem';
import { templateCategoriesCardsRender } from './templateCategoriesCardsRender';
import {
  createDivElement,
  removeElement,
  insertBefore,
  hideElement,
} from '../helpers/domHelpers';
import { COLOR_ORANGE } from '../data/constants';

export const categoriesCardsRenderPlay = () => {
  const isPlay = document.querySelector('.on-off-toggle__input').checked;
  const buttonContainer = document.querySelector('.button-container');
  hideElement('.result__success');
  hideElement('.result__unsuccess');
  if (isPlay) {
    removeElement('.set-cards');
    const cards = createDivElement('set-cards');
    insertBefore(cards, buttonContainer);
    templateCategoriesCardsRender(COLOR_ORANGE);

    document.querySelector('.title').textContent = '';

    document
      .querySelector('.set-cards')
      .addEventListener('click', getClickedElement);
    return;
  }
};
