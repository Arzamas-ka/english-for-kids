import { dataSets } from '../scripts/data/dataCards';

export const renderMainCards = () => {
  const mainCards = dataSets.map(card => {
    const cardLink = document.createElement('a');
    cardLink.className = 'main-cards__item';
    const h3 = document.createElement('h3');
    h3.className = 'main-cards__title';
    h3.textContent = card.set;
    cardLink.append(h3);

    const img = document.createElement('img');
    img.setAttribute('src', `${card.img}`);

    cardLink.append(img);
    

    const mainCards = document.querySelector('.main-cards');
    mainCards.append(cardLink);
  });
  return mainCards;
};