import { dataCardsWords } from '../data/dataCards';
import { templateFrondAndBackCards } from './templateFrondAndBackCards';
import {
  createDivElement,
  removeElement,
  removeChildren,
} from '../helpers/domHelpers';

export const cardsWordsRenderTrain = (cardsIndex) => {
  const playCards = document.querySelector('.play-cards');
  let cardsWrapper;

  removeElement('.set-cards');
  removeElement('.cards');

  if (playCards) {
    removeElement('.play__start-game');
    removeChildren('.answers');
    removeChildren('.button-container');
    removeElement('.play-cards');
  }

  const dataCards = dataCardsWords[cardsIndex];
  cardsWrapper = createDivElement('cards');

  dataCards.forEach((word, index) => {
    templateFrondAndBackCards(word, index, cardsWrapper);
  });
};
