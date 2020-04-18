import { templateCategoriesCardsRender } from './templateCategoriesCardsRender';
import { getExpectedElement } from '../helpers/getExpectedElem';
import { COLOR_ORANGE, COLOR_PINK, EMPTY_STRING } from '../data/constants';

export const categoriesCardsRenderTrain = () => {
  const toggle = document.querySelector('.on-off-toggle__input').checked;

  if (toggle === false && document.querySelector('.set-cards')) {
    document.querySelector('.set-cards').remove();
    const cards = document.createElement('div');
    cards.className = 'set-cards';

    document
      .querySelector('.button-container')
      .insertAdjacentElement('beforebegin', cards);
    templateCategoriesCardsRender();
    [...document.querySelectorAll('.set-cards__item')].forEach(
      (item) => (item.style.backgroundColor = COLOR_PINK)
    );
    document
      .querySelector('.set-cards')
      .addEventListener('click', getExpectedElement);
  }

  if (toggle === true && document.querySelector('.cards')) {
    document.querySelector('.cards').remove();
    const cards = document.createElement('div');
    cards.className = 'set-cards';
    document
      .querySelector('.button-container')
      .insertAdjacentElement('beforebegin', cards);
    templateCategoriesCardsRender();
    [...document.querySelectorAll('.cards__item')].forEach(
      (item) => (item.style.backgroundColor = COLOR_ORANGE)
    );
  }

  if (
    toggle === false &&
    document.querySelector('.play-cards') &&
    document.querySelector('.play__start-game') &&
    document.querySelector('.play__listen')
  ) {
    document.querySelector('.button-container').innerHTML = EMPTY_STRING;
    document.querySelector('.play-cards').remove();
    const cards = document.createElement('div');
    cards.className = 'set-cards';
    document
      .querySelector('.button-container')
      .insertAdjacentElement('beforebegin', cards);
    templateCategoriesCardsRender();
    [...document.querySelectorAll('.set-cards__item')].forEach(
      (item) => (item.style.backgroundColor = COLOR_PINK)
    );
    document
      .querySelector('.set-cards')
      .addEventListener('click', getExpectedElement);
  }
};
