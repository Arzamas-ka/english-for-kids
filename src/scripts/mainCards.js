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
    img.className = 'main-cards__img';
    img.setAttribute('src', `${card.img}`);
    cardLink.append(img);

    const mainCards = document.querySelector('.main-cards');
    mainCards.append(cardLink);
  });
  return mainCards;
};

const renderWords = (cardsIndex) => {
  const cards = document.querySelector('.main-cards');
  const dataCards = dataCarts[cardsIndex];
  console.log(dataCards);

  cards.innerHTML = '';
  dataCards.forEach((word) => {
    const cardLink = document.createElement('a');
    cardLink.className = 'main-cards__item';
    cardLink.style.backgroundColor = '#FFCE67';

    const imgIcon = document.createElement('div');
    imgIcon.className = 'main-cards__turnover';
    cardLink.prepend(imgIcon);

    const h3 = document.createElement('h3');
    h3.className = 'main-cards__title';
    h3.textContent = word.word.toUpperCase();
    cardLink.append(h3);

    const img = document.createElement('img');
    img.className = 'main-cards__img';
    img.setAttribute('src', `${word.image}`);
    cardLink.append(img);

    const mainCards = document.querySelector('.main-cards');
    mainCards.append(cardLink);
  });
};

const getWordsFromSetCard = (event) => {
  let expectedElem;
  event.path.forEach((elem) => {
    if (elem.tagName === 'A') {
      expectedElem = elem;
    }
  });

  if (!expectedElem) return;

  const indexClickableCard = Number(expectedElem.getAttribute('id'));

  renderWords(indexClickableCard);
};

const clickOnMenu = () => {
  const menuItems = document.querySelector('.menu-list');
  menuItems.addEventListener('click', (event) => {
    const indexClickableCard = Number(event.target.getAttribute('id'));

    renderWords(indexClickableCard);
  });
};
clickOnMenu();

document
  .querySelector('.main-cards')
  .addEventListener('click', getWordsFromSetCard);
