import {
  renderCategoriesCardsTrain,
  renderCategoriesCardsPlay,
} from '../render/categoriesCardsRender';

export const toggleTrainPlay = () => {
  const toggle = document.querySelector('.on-off-toggle');
  console.log('toggle');

  toggle.addEventListener('click', (event) => {
    console.log(event.target);
    // toggle.classList.toggle('active');

    renderCategoriesCardsTrain();
    renderCategoriesCardsPlay();
  });
};
