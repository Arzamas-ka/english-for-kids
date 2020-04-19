export const cardFlipOn = (
  cardsWrapper,
  cardLinkFront,
  cardItem,
  turnoverIcon,
  h3
) => {
  cardsWrapper.addEventListener('click', (event) => {
    if (
      cardLinkFront.id === event.path[0].id &&
      h3.id === turnoverIcon.id &&
      event.path[0].className === 'card__turnover'
    ) {
      cardItem.classList.add('card__item--translate');
    }
  });
};

export const cardFlipOff = (cardsWrapper, cardLinkFront, cardItem) => {
  cardsWrapper.addEventListener('mouseout', (event) => {
    if (
      cardLinkFront.id === event.path[0].id &&
      event.path[0].className === 'card__turnover'
    ) {
      cardItem.classList.remove('card__item--translate');
    }
  });
};
