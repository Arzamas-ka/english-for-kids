import { getClickedElement } from '../helpers/getExpectedElem';
import { templateCategoriesCardsRender } from './templateCategoriesCardsRender';
import { COLOR_ORANGE } from '../data/constants';

export const categoriesCardsRenderPlay = () => {
  const toggle = document.querySelector('.on-off-toggle__input').checked;

  if (toggle === true && document.querySelector('.set-cards')) {
    document.querySelector('.set-cards').remove();
    const cards = document.createElement('div');
    cards.className = 'set-cards';
    document
      .querySelector('.button-container')
      .insertAdjacentElement('beforebegin', cards);
    templateCategoriesCardsRender();
    [...document.querySelectorAll('.set-cards__item')].forEach(
      (item) => (item.style.backgroundColor = COLOR_ORANGE)
    );
  }

  if (document.querySelector('.set-cards')) {
    document
      .querySelector('.set-cards')
      .addEventListener('click', getClickedElement);
  }
};
