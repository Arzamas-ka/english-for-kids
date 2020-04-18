import { dataCardsWords } from '../data/dataCards';
import { getRightAnswer } from '../actions/getRightAnswer';
import { templateAudioElement } from './templateAudioElement';
import { templateButtonsPlayRender } from './templateButtonsPlayRender';
import { templateCardsPlay } from './templateCardsPlay';
import { EMPTY_STRING, STATE_NONE, STATE_BLOCK } from '../data/constants';
import { getRandomElement } from '../helpers/getRandomElement';

export const cardsWordsRenderPlay = (cardsIndex) => {
  const cardsContainer = document.querySelector('.set-cards');
  if (cardsContainer) cardsContainer.remove();

  const cardsContainerPlay = document.querySelector('.play-cards');
  if (cardsContainerPlay) {
    cardsContainerPlay.remove();
    document.querySelector('.button-container').innerHTML = EMPTY_STRING;
  }

  const answers = document.querySelector('.answers');
  if (answers) answers.innerHTML = EMPTY_STRING;

  const dataCards = dataCardsWords[cardsIndex];

  const cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'play-cards';

  dataCards.forEach((item) => {
    templateCardsPlay(item, cardsWrapper);
  });

  const buttons = document.querySelector('.play__start-game');
  if (!buttons) {
    templateButtonsPlayRender();
  }

  document.querySelector('.play__start-game').addEventListener('click', () => {
    document.querySelector('.play__start-game').style.display = STATE_NONE;
    listenButtonAudio();
  });

  const randomElement = getRandomElement(dataCards);
  
  const listenButtonAudio = () => {
    document.querySelector('.play__listen').style.display = STATE_BLOCK;
    document.querySelector('.play__listen').innerHTML = 'Listen to a word';
    const getSourceElem = templateAudioElement();
    getSourceElem[1].setAttribute('id', randomElement.word);
    getSourceElem[0].setAttribute('src', randomElement.audioSrc);
    document.querySelector('.play__listen').append(getSourceElem[1]);
  };

  document
    .querySelector('.play__listen')
    .addEventListener('click', listenButtonAudio);

  getRightAnswer();
};
