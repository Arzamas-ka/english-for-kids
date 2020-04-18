export const templateButtonsPlayRender = () => {
  const startGameBtn = document.createElement('button');
  startGameBtn.className = 'play__start-game';
  startGameBtn.type = 'button';
  startGameBtn.textContent = 'Start Game';
  document.querySelector('.button-container').append(startGameBtn);

  const listenWordBtn = document.createElement('button');
  listenWordBtn.className = 'play__listen';
  listenWordBtn.type = 'button';
  listenWordBtn.textContent = 'Listen to a word';
  document.querySelector('.button-container').append(listenWordBtn);
};
