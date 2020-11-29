import { dataCategoriesCards } from '../data/dataCards';

export const templateCategoriesCardsRender = (cardColor) => {
  const cardsContainer = document.querySelector('.set-cards');

  dataCategoriesCards.forEach((card) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'set-cards__item';
    cardLink.setAttribute('id', card.id);
    cardLink.style.backgroundColor = cardColor;
    const h3 = document.createElement('h3');
    h3.className = 'set-cards__title';
    h3.textContent = card.categoryName;
    cardLink.append(h3);

    const img = document.createElement('img');
    img.className = 'set-cards__img';
    img.setAttribute('src', `${card.img}`);
    cardLink.append(img);

    cardsContainer.append(cardLink);
  });
};
