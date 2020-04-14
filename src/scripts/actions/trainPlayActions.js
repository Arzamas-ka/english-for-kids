import {
  renderCategoriesCardsTrain,
  renderCategoriesCardsPlay,
} from '../render/categoriesCardsRender';

export const toggleTrainPlay = () => {
  const toggle = document.querySelector('.toggle');

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggle.classList.toggle('active');

    renderCategoriesCardsTrain();
    renderCategoriesCardsPlay();
  });
};
