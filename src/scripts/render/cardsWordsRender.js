import { dataCardsWords } from '../data/dataCards';
import { YELLOW, EMPTY_STRING, A_TAG_NAME } from '../data/constants';
import { cardsWordsPlay } from '../actions/cardsWordsActions';

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
    const cardLink = document.createElement('a');
    cardLink.className = 'card__item';
    cardLink.setAttribute('id', index);

    const turnoverIcon = document.createElement('i');
    turnoverIcon.className = 'card__turnover';
    cardLink.prepend(turnoverIcon);

    const playIcon = document.createElement('i');
    playIcon.className = 'card__play';
    cardLink.append(playIcon);

    const h3 = document.createElement('h3');
    h3.className = 'card__title';
    h3.textContent = word.word.toUpperCase();
    cardLink.append(h3);

    const img = document.createElement('img');
    img.className = 'card__img';
    img.setAttribute('src', `${word.image}`);
    cardLink.append(img);

    const audio = document.createElement('audio');
    cardLink.append(audio);
    const source = document.createElement('source');
    source.setAttribute('src', word.audioSrc);
    source.setAttribute('type', 'audio/mpeg');
    audio.append(source);

    cardsWrapper.append(cardLink);

    const mainWrapper = document.querySelector('.main-wrapper');
    mainWrapper.append(cardsWrapper);

    cardsWordsPlay(cardLink);
  });
};
