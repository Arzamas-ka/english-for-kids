import { cardsWordsRenderTrain } from '../render/cardsWordsRenderTrain';
import { cardsWordsRenderPlay } from '../render/cardsWordsRenderPlay';
import { hideElement } from '../helpers/domHelpers';

export const addClickListenerOnMenu = () => {
  const menu = document.querySelector('.menu-list');
  menu.addEventListener(
    'click',
    (event) => {
      event.stopPropagation();
      event.preventDefault();

      hideElement('.result__success');
      hideElement('.result__unsuccess');

      const indexClickableCard = Number(event.target.getAttribute('id'));

      const isPlay = document.querySelector('.on-off-toggle__input').checked;
      if (isPlay) {
        cardsWordsRenderPlay(indexClickableCard);
      } else {
        cardsWordsRenderTrain(indexClickableCard);
      }

      activeMenuLink();

      const menu = document.querySelector('.menu');
      menu.classList.remove('menu--open');
      menu.classList.add('menu--close');
      const backdrop = document.querySelector('.backdrop');
      backdrop.classList.remove('backdrop--transparent');
    },
    true
  );
};

export const activeMenuLink = () => {
  document.querySelectorAll('.menu-link').forEach((active) => {
    active.classList.remove('menu-link--active');
    event.target.classList.add('menu-link--active');

    document.querySelector('.title').textContent = event.target.textContent;
  });
};
