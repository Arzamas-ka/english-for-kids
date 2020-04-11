import { dataSets, dataCarts } from '../scripts/data/dataCards';

export const renderMainCards = () => {
  const mainCards = dataSets.map((card) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'main-cards__item';
    cardLink.setAttribute('id', card.id);
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

const getWordsFromSetCard = () => {
  const cards = document.querySelector('.main-cards');

  let expectedElem;
  event.path.forEach((elem) => {
    if (elem.tagName === 'A') {
      expectedElem = elem;
    }
  });
  const indexClickableCard = Number(expectedElem.getAttribute('id'));

  const card = dataCarts.map((elem, ind) => {
    if (indexClickableCard === ind) {
      cards.innerHTML = '';
      const word = elem.map((word) => {
        const cardLink = document.createElement('a');
        cardLink.className = 'main-cards__item';
        cardLink.style.backgroundColor = '#FFCE67';
        const h3 = document.createElement('h3');
        h3.className = 'main-cards__title';
        h3.textContent = word.word;
        cardLink.append(h3);

        const img = document.createElement('img');
        img.setAttribute('src', `${word.image}`);
        cardLink.append(img);

        const mainCards = document.querySelector('.main-cards');
        mainCards.append(cardLink);
      });
      return word;
    }
    return card;
  });
};

document
  .querySelector('.main-cards')
  .addEventListener('click', getWordsFromSetCard);
