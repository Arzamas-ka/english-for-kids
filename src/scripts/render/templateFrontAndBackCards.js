import { cardPlay } from '../actions/cardPlay';
import { cardFlipOn, cardFlipOff } from '../actions/cardFlip';

export const templateFrontAndBackCards = (word, index, cardsWrapper) => {
  // Front cards
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

  // Back cards
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

  document
    .querySelector('.button-container')
    .insertAdjacentElement('beforebegin', cardsWrapper);

  cardsWrapper.prepend(cardContainer);
  cardItem.append(cardLinkFront);
  cardItem.append(cardLinkBack);

  cardPlay(cardLinkFront, audio, cardsWrapper);
  cardFlipOn({ cardsWrapper, cardLinkFront, cardItem, turnoverIcon, h3 });
  cardFlipOff({ cardsWrapper, cardLinkFront, cardItem });
};
