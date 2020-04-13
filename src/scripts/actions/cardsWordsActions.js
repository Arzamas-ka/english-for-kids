export const cardsWordsPlay = (cardLink) => {
  const cardsContainer = document.querySelector('.card');
  cardsContainer.addEventListener('click', event => {
    console.log(cardLink);
  });
};

