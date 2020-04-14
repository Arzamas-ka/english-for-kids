import { dataCardsWords } from '../data/dataCards';
import { A_TAG_NAME } from '../data/constants';
import { cardPlay } from '../actions/cardPlay';
import {
  cardFlipOn,
  cardFlipOff
} from '../actions/cardFlip';

export const getExpectedElement = (event) => {
  let expectedElem;
  event.path.forEach((elem) => {
    if (elem.tagName === A_TAG_NAME) {
      expectedElem = elem;
    }
  });
  if (!expectedElem) return;

  const indexClickableCard = Number(expectedElem.getAttribute('id'));
  cardsWordsRender(indexClickableCard);
};

export const cardsWordsRender = (cardsIndex) => {
  const cardsContainer = document.querySelector('.set-cards');
  cardsContainer.remove();
  const dataCards = dataCardsWords[cardsIndex];

  const cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'card';

  dataCards.forEach((word, index) => {
    cardsFrontAndBack(word, index);
  });
};

const cardsWrapper = document.createElement('div');
cardsWrapper.className = 'cards';

const cardsFrontAndBack = (word, index) => {
  // front
  const cardLinkFront = document.createElement('a');
  cardLinkFront.className = 'card__front';
  cardLinkFront.setAttribute('id', index);

  const turnoverIcon = document.createElement('i');
  turnoverIcon.className = 'card__turnover';
  turnoverIcon.setAttribute('id', index);
  cardLinkFront.prepend(turnoverIcon);

  const playIcon = document.createElement('i');
  playIcon.className = 'card__play';
  playIcon.setAttribute('id', index);
  cardLinkFront.append(playIcon);

  const h3 = document.createElement('h3');
  h3.className = 'card__title';
  h3.setAttribute('id', index);
  h3.textContent = word.word.toUpperCase();
  cardLinkFront.append(h3);

  const img = document.createElement('img');
  img.className = 'card__img';
  img.setAttribute('src', `${word.image}`);
  cardLinkFront.append(img);

  const audio = document.createElement('audio');
  audio.setAttribute('id', index);
  cardLinkFront.append(audio);
  const source = document.createElement('source');
  source.setAttribute('src', word.audioSrc);
  source.setAttribute('type', 'audio/mpeg');
  audio.append(source);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card__container';

  // back
  const cardLinkBack = document.createElement('a');
  cardLinkBack.className = 'card__back';
  cardLinkBack.setAttribute('id', index);

  const h3Back = document.createElement('h3');
  h3Back.className = 'card__title';
  h3Back.setAttribute('id', index);
  h3Back.textContent = word.translation.toUpperCase();
  cardLinkBack.append(h3Back);

  const imgBack = document.createElement('img');
  imgBack.className = 'card__img';
  imgBack.setAttribute('src', `${word.image}`);
  cardLinkBack.append(imgBack);

  const cardItem = document.createElement('div');
  cardItem.className = 'card__item';
  cardContainer.append(cardItem);

  const mainWrapper = document.querySelector('.main-wrapper');
  mainWrapper.append(cardsWrapper);

  cardsWrapper.append(cardContainer);
  cardItem.append(cardLinkFront);
  cardItem.append(cardLinkBack);

  cardPlay(cardLinkFront, audio, cardsWrapper);
  cardFlipOn(
    cardsWrapper,
    cardLinkFront,
    cardItem,
    turnoverIcon,
    h3,
  );
  cardFlipOff(
    cardsWrapper, 
    cardLinkFront, 
    cardItem, 
  );
};
