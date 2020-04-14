// import { statePages } from '../data/statePages';
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

    // const train = document.querySelector('.toggle-label-off');
    // const style = getComputedStyle(train).opacity;
    // if (style === '1') {
    //   console.log(true);
    //   localStorage.setItem('statePage', `${statePages.train}`);
    // } else {
    //   localStorage.setItem('statePage', `${statePages.play}`);
    // }
  });
};
