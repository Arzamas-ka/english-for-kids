import { dataCardsWords } from '../data/dataCards';
import { resultsRender } from '../render/resultsRender';
import { templateAudioElement } from './templateAudioElement';
import { templateButtonsPlayRender } from './templateButtonsPlayRender';
import { templateCardsPlay } from './templateCardsPlay';
import { STATE_NONE, STATE_BLOCK } from '../data/constants';
import greenBalloonImg from '../../assets/icons/balloon_green.png';
import redBalloonImg from '../../assets/icons/balloon_red.png';
import incorrectAnswerSound from '../../assets/music/bad.mp3';
import rightAnswerSound from '../../assets/music/success.mp3';
import {
  removeElement,
  removeChildren,
  createDivElement,
} from '../helpers/domHelpers';

let cardsCollection;
let randomElement;
let correctAnswers = 0;
let incorrectAnswers = 0;

const renderCards = (cardsCollection, container) => {
  cardsCollection.forEach(item => {
    templateCardsPlay(item, container);
  });
};

const renderStartGameButton = () => {
  let startGameButton = document.querySelector('.play__start-game');

  if (!startGameButton) {
    templateButtonsPlayRender();
    startGameButton = document.querySelector('.play__start-game');
  }

  startGameButton.addEventListener('click', () => {
    document.querySelector('.play__start-game').style.display = STATE_NONE;
    document.querySelector('.play__listen').style.display = STATE_BLOCK;
    document.querySelector('.play__listen').innerHTML = 'Listen to a word';

    playRandomWord();
  });
};

const playRandomWord = () => {
  const getSourceElem = templateAudioElement();
  getSourceElem[1].setAttribute('id', randomElement.word);
  getSourceElem[0].setAttribute('src', randomElement.audioSrc);
  document.querySelector('.play__listen').append(getSourceElem[1]);
};

const isSuccess = cardsCollection => cardsCollection.length === 0;

export const getRightAnswer = () => {
  document.querySelector('.play-cards').addEventListener('click', event => {
    const listenButton = document.querySelector('.play__listen');

    if (!listenButton || listenButton.children.length === 0) {
      return;
    }

    const audioId = listenButton.children[0].getAttribute('id');
    const answers = document.querySelector('.answers');

    if (event.target.tagName !== 'IMG') {
      return;
    }

    if (audioId === event.target.getAttribute('id')) {
      const greenBalloon = document.createElement('img');
      greenBalloon.className = 'answer--green-balloon';
      greenBalloon.setAttribute('src', greenBalloonImg);
      answers.append(greenBalloon);
      // remove img
      event.target.remove();

      const getSourceElem = templateAudioElement();
      getSourceElem[0].setAttribute('src', rightAnswerSound);
      event.target.insertAdjacentElement('beforebegin', getSourceElem[1]);

      correctAnswers++;
      if (isSuccess(cardsCollection)) {
        resultsRender(correctAnswers, incorrectAnswers);
        return;
      }

      getRandomElement(cardsCollection);
      listenButtonAudio();
    } else {
      const redBalloon = document.createElement('img');
      redBalloon.className = 'answer--red-balloon';
      redBalloon.setAttribute('src', redBalloonImg);
      answers.append(redBalloon);

      const getSourceElem = templateAudioElement();
      getSourceElem[0].setAttribute('src', incorrectAnswerSound);
      event.target.insertAdjacentElement('beforebegin', getSourceElem[1]);

      incorrectAnswers++;     
    }
  });
};

const getRandomElement = cards => {
  randomElement = cards[Math.floor(Math.random() * cards.length)];
  cardsCollection = cards.filter(elem => elem.word !== randomElement.word);
  return randomElement;
};

const listenButtonAudio = () => {
  document.querySelector('.play__listen').style.display = STATE_BLOCK;
  document.querySelector('.play__listen').innerHTML = 'Listen to a word';

  setTimeout(playRandomWord, 300);
};

export const cardsWordsRenderPlay = cardsIndex => {
  removeElement('.set-cards');
  removeElement('.play-cards');
  removeChildren('.button-container');
  removeChildren('.answers');

  const cardsWrapper = createDivElement('play-cards');
  cardsCollection = dataCardsWords[cardsIndex];
  correctAnswers = 0;
  incorrectAnswers = 0;

  renderCards(cardsCollection, cardsWrapper);
  renderStartGameButton();
  getRandomElement(cardsCollection);

  document
    .querySelector('.play__listen')
    .addEventListener('click', listenButtonAudio);

  getRightAnswer();
};
