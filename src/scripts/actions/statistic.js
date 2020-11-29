export const clickOnPopupStatistic = () => {
  const popup = document.querySelector('.popup');
  const statisticBtn = document.querySelector('.statistic');
  const closeButton = document.querySelector('.popup__button-close');
  const backdrop = document.querySelector('.backdrop');

  statisticBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popup.style.display = 'block';
    backdrop.classList.add('backdrop--transparent');
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    backdrop.classList.remove('backdrop--transparent');
  });
};
