import { A_TAG_NAME } from '../data/constants';
import { cardsWordsRenderTrain } from '../render/cardsWordsRenderTrain';
import { cardsWordsRenderPlay } from '../render/cardsWordsRenderPlay';

export const getExpectedElement = (event) => {
  let expectedElem;
  event.path.forEach((elem) => {
    if (
      elem.tagName === A_TAG_NAME &&
      document.querySelector('.on-off-toggle__input').checked === false
    ) {
      expectedElem = elem;
    }
  });
  if (!expectedElem) return;

  const indexClickableCard = Number(expectedElem.getAttribute('id'));
  cardsWordsRenderTrain(indexClickableCard);
};

export const getClickedElement = (event) => {
  let expectedElem;
  event.path.forEach((elem) => {
    if (
      elem.tagName === A_TAG_NAME &&
      document.querySelector('.on-off-toggle__input').checked === true
    ) {
      expectedElem = elem;
    }
  });
  if (!expectedElem) return;

  const indexClickableCard = Number(expectedElem.getAttribute('id'));
  cardsWordsRenderPlay(indexClickableCard);
};
