import greenBalloonImg from '../../assets/icons/balloon_green.png';
import redBalloonImg from '../../assets/icons/balloon_red.png';
import badAudio from '../../assets/music/bad.mp3';
import successAudio from '../../assets/music/success.mp3';
import { templateAudioElement } from '../render/templateAudioElement';
import { getRandomElement } from '../helpers/getRandomElement';

export const getRightAnswer = () => {
  document.querySelector('.play-cards').addEventListener('click', (event) => {
    const audioId = document
      .querySelector('.play__listen')
      .children[0].getAttribute('id');
    const answers = document.querySelector('.answers');

    if (audioId === event.target.getAttribute('id')) {
      const greenBalloon = document.createElement('img');
      greenBalloon.className = 'answer--green-balloon';
      greenBalloon.setAttribute('src', greenBalloonImg);
      answers.append(greenBalloon);
      // remove img
      event.target.remove();

      const getSourceElem = templateAudioElement();
      getSourceElem[0].setAttribute('src', successAudio);
      event.target.insertAdjacentElement('beforebegin', getSourceElem[1]);
    } else if (event.target.tagName !== 'IMG') {
      getRandomElement();
      return;
    } else {
      const redBalloon = document.createElement('img');
      redBalloon.className = 'answer--red-balloon';
      redBalloon.setAttribute('src', redBalloonImg);
      answers.append(redBalloon);

      const getSourceElem = templateAudioElement();
      getSourceElem[0].setAttribute('src', badAudio);
      event.target.insertAdjacentElement('beforebegin', getSourceElem[1]);
    }
  });
};
