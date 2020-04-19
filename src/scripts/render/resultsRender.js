import {
  removeChildren,
  setToFlex,
  hideElement,
  removeElement,
} from '../helpers/domHelpers';
import { categoriesCardsRenderPlay } from './categoriesCardsRenderPlay';

export const resultsRender = (correctAnswers, incorrectAnswers) => {
  removeChildren('.answers');
  removeElement('.play-cards');
  removeChildren('.button-container');

  if (incorrectAnswers > 0) {
    setToFlex('.result__unsuccess');
    document.querySelector(
      '.statistic-success-unsuccess'
    ).textContent = `= ${correctAnswers}`;
    document.querySelector(
      '.statistic-unsuccess-unsuccess'
    ).textContent = `= ${incorrectAnswers}`;

    document
      .querySelector('.result__unsuccess__btn')
      .addEventListener('click', () => {
        hideElement('.result__unsuccess');
        categoriesCardsRenderPlay();
      });
  } else {
    setToFlex('.result__success');
    document.querySelector(
      '.statistic-success-success'
    ).textContent = `= ${correctAnswers}`;
    document.querySelector(
      '.statistic-unsuccess-success'
    ).textContent = `= ${incorrectAnswers}`;

    document
      .querySelector('.result__success__btn')
      .addEventListener('click', () => {
        hideElement('.result__success');
        categoriesCardsRenderPlay();
      });
  }
};
