export const cardsWordsPlay = (cardLink, audio) => {
  const cardsContainer = document.querySelector('.card');
  cardsContainer.addEventListener('click', (event) => {
    if (cardLink.id === event.path[0].id && cardLink.id === audio.id) {
      console.log('object');
      audio.play();
    }
  });
};
