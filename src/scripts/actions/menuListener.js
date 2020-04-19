import { cardsWordsRenderTrain } from '../render/cardsWordsRenderTrain';
import { cardsWordsRenderPlay } from '../render/cardsWordsRenderPlay';

export const addClickListenerOnMenu = () => {
  const menu = document.querySelector('.menu-list');
  menu.addEventListener(
    'click',
    (event) => {
      event.stopPropagation();
      event.preventDefault();

      const indexClickableCard = Number(event.target.getAttribute('id'));

      const isPlay = document.querySelector('.on-off-toggle__input').checked;
      if (isPlay) {
        cardsWordsRenderPlay(indexClickableCard);
      } else {
        cardsWordsRenderTrain(indexClickableCard);
      }

      const menu = document.querySelector('.menu');
      menu.classList.remove('menu--open');
      menu.classList.add('menu--close');
      const backdrop = document.querySelector('.backdrop');
      backdrop.classList.remove('backdrop--transparent');
    },
    true
  );
};
