export const cardPlay = (cardLinkFront, audio, cardsWrapper) => {
  cardsWrapper.addEventListener('click', (event) => {
    if (
      cardLinkFront.id === event.path[0].id &&
      event.path[0].className === 'card__play'
    ) {
      audio.play();
    }
  });
};
