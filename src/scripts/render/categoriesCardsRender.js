import { dataCategoriesCards } from '../data/dataCards';
import { getExpectedElement } from './cardsWordsRender';

export const renderCategoriesCardsTrain = () => {
  const train = document.querySelector('.on-off-toggle__input').checked;

  if (train === false && document.querySelector('.set-cards')) {
    document.querySelector('.set-cards').innerHTML = '';

    const setCards = dataCategoriesCards.map((card) => {
      const cardLink = document.createElement('a');
      cardLink.className = 'set-cards__item';
      cardLink.setAttribute('id', card.id);
      cardLink.style.backgroundColor = '#F3969A';
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
  } else if (train === false && document.querySelector('.cards')) {
    document.querySelector('.cards').remove();
    console.log('object');
    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'set-cards';
    document.querySelector('.main-wrapper').append(cardsWrapper);

    const setCards = dataCategoriesCards.map((card) => {
      const cardLink = document.createElement('a');
      cardLink.className = 'set-cards__item';
      cardLink.setAttribute('id', card.id);
      cardLink.style.backgroundColor = '#F3969A';
      const h3 = document.createElement('h3');
      h3.className = 'set-cards__title';
      h3.textContent = card.set;
      cardLink.append(h3);

      const img = document.createElement('img');
      img.className = 'set-cards__img';
      img.setAttribute('src', `${card.img}`);
      cardLink.append(img);

      const setCardsWrapp = document.querySelector('.set-cards');
      setCardsWrapp.append(cardLink);
    });
    return setCards;
  } else if (train === true && document.querySelector('.cards')) {
    const setCardsWrapper = document.querySelector('.cards');
    setCardsWrapper.innerHTML = '';

    const cards = document.createElement('div');
    cards.className = 'cards';

    const setCards = dataCategoriesCards.map((card) => {
      const cardLink = document.createElement('a');
      cardLink.className = 'set-cards__item';
      cardLink.setAttribute('id', card.id);
      cardLink.style.backgroundColor = '#FF7851';
      const h3 = document.createElement('h3');
      h3.className = 'set-cards__title';
      h3.textContent = card.set;
      cardLink.append(h3);

      const img = document.createElement('img');
      img.className = 'set-cards__img';
      img.setAttribute('src', `${card.img}`);
      cardLink.append(img);

      const setCardsWrapper = document.querySelector('.cards');
      setCardsWrapper.append(cardLink);
    });
    return setCards;
  }
};

export const renderCategoriesCardsPlay = () => {
  if (document.querySelector('.cards')) return;

  const train = document.querySelector('.on-off-toggle__input').checked;

  if (train === true && document.querySelector('.set-cards')) {
    document.querySelector('.set-cards').innerHTML = '';
    console.log('set');
    const setCards = dataCategoriesCards.map((card) => {
      const cardLink = document.createElement('a');
      cardLink.className = 'set-cards__item';
      cardLink.setAttribute('id', card.id);
      cardLink.style.backgroundColor = '#FF7851';
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
  }
};

if (document.querySelector('.set-cards'))
  document
    .querySelector('.set-cards')
    .addEventListener('click', getExpectedElement);
