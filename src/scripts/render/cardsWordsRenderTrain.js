import { dataCardsWords } from '../data/dataCards';
import { EMPTY_STRING } from '../data/constants';
import { templateFrondAndBackCards } from './templateFrondAndBackCards';

let cardsWrapper;
export const cardsWordsRenderTrain = (cardsIndex) => {
  const cardsContainer = document.querySelector('.set-cards');
  if (cardsContainer) cardsContainer.remove();

  const cardsWords = document.querySelector('.cards');
  if (cardsWords) cardsWords.remove();

  const playCards = document.querySelector('.play-cards');
  if (playCards) {
    document.querySelector('.play__start-game').remove();
    document.querySelector('.answers').innerHTML = EMPTY_STRING;
    document.querySelector('.button-container').innerHTML = EMPTY_STRING;
    playCards.remove();
  }

  const dataCards = dataCardsWords[cardsIndex];

  cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'cards';
  
  dataCards.forEach((word, index) => {
    templateFrondAndBackCards(word, index, cardsWrapper);
  });
};
