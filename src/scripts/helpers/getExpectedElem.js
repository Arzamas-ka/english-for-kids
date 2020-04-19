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
  }
};
