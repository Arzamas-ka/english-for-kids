export const templateCardsPlay = (item, cardsWrapper) => {
  const cardItem = document.createElement('div');
  cardItem.className = 'play-cards__item';
  cardsWrapper.append(cardItem);

  const img = document.createElement('img');
  img.className = 'play-cards__img';
  img.setAttribute('src', `${item.image}`);
  img.setAttribute('id', `${item.word}`);
  cardItem.append(img);

  document
    .querySelector('.button-container')
    .insertAdjacentElement('beforebegin', cardsWrapper);
  return cardsWrapper;
};
