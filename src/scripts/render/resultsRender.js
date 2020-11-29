import { templateAudioElement } from './templateAudioElement';
import winAudio from '../../assets/music/win.mp3';
import failedAudio from '../../assets/music/failed.mp3';
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
  document.querySelector('.title').textContent = '';

  if (incorrectAnswers > 0) {
    setToFlex('.result__unsuccess');
    document.querySelector(
      '.statistic-success-unsuccess'
    ).textContent = `= ${correctAnswers}`;
    document.querySelector(
      '.statistic-unsuccess-unsuccess'
    ).textContent = `= ${incorrectAnswers}`;

    const audioFailed = templateAudioElement();
    audioFailed[1].setAttribute('id', 'failed');
    audioFailed[0].setAttribute('src', failedAudio);
    document.querySelector('.result__unsuccess').append(audioFailed[1]);

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

    const audioWin = templateAudioElement();
    audioWin[1].setAttribute('id', 'win');
    audioWin[0].setAttribute('src', winAudio);
    document.querySelector('.result__success').append(audioWin[1]);

    document
      .querySelector('.result__success__btn')
      .addEventListener('click', () => {
        hideElement('.result__success');
        categoriesCardsRenderPlay();
      });
  }
};
