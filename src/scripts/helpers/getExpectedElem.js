import { A_TAG_NAME } from '../data/constants';
import { cardsWordsRenderTrain } from '../render/cardsWordsRenderTrain';
import { cardsWordsRenderPlay } from '../render/cardsWordsRenderPlay';

export const getExpectedElement = (event) => {
  const isPlay = document.querySelector('.on-off-toggle__input').checked;

  const expectedElem = event.path.find((elem) => {
    if (elem.tagName === A_TAG_NAME && !isPlay) {
      return elem;
    }
  });

  if (expectedElem) {
    const indexClickableCard = Number(expectedElem.getAttribute('id'));
    cardsWordsRenderTrain(indexClickableCard);
    getCurrentTitle(expectedElem);
    activeLinkMenuFromPage();
  }
};

export const getClickedElement = (event) => {
  const isPlay = document.querySelector('.on-off-toggle__input').checked;

  const expectedElem = event.path.find((elem) => {
    if (elem.tagName === A_TAG_NAME && isPlay) {
      return elem;
    }
  });

  if (expectedElem) {
    const indexClickableCard = Number(expectedElem.getAttribute('id'));
    cardsWordsRenderPlay(indexClickableCard);
    getCurrentTitle(expectedElem);
    activeLinkMenuFromPage();
  }
};

export const getCurrentTitle = (expectedElem) => {
  document.querySelector('.title').textContent = expectedElem.querySelector(
    '.set-cards__title'
  ).textContent;
};

const activeLinkMenuFromPage = () => {
  document.querySelectorAll('.menu-link').forEach((active) => {
    active.classList.remove('menu-link--active');

    const title = document.querySelector('.title').textContent;
    const menuEl = active.textContent;
    if (title === menuEl) {
      active.classList.add('menu-link--active');
    }
  });
};
