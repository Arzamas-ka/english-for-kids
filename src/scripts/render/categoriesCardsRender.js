import { dataCategoriesCards } from '../data/dataCards';
import { getExpectedElement } from './cardsWordsRender';

export const renderCategoriesCards = () => {
  const setCards = dataCategoriesCards.map((card) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'set-cards__item';
    cardLink.setAttribute('id', card.id);
    const h3 = document.createElement('h3');
    h3.className = 'set-cards__title';
    h3.textContent = card.set;
    cardLink.append(h3);

    const img = document.createElement('img');
    img.className = 'set-cards__img';
    img.setAttribute('src', `${card.img}`);
    cardLink.append(img);

    const setCardsWrapper = document.querySelector('.set-cards');
    setCardsWrapper.append(cardLink);
  });
  return setCards;
};

const setCardsWrapper = document.querySelector('.set-cards');
setCardsWrapper.addEventListener('click', getExpectedElement);
