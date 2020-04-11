import { dataSets } from '../scripts/data/dataCards';

export const renderMenu = () => {
  const item = dataSets.map((set) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    const a = document.createElement('a');
    a.className = 'menu-link';
    a.setAttribute('id', set.id);
    a.textContent = set.set;
    a.setAttribute('href', '#');
    li.append(a);

    const ul = document.querySelector('.menu-list');
    ul.append(li);
  });
  return item;
};

const activeBurgerMenu = () => {
  const menu = document.querySelector('.menu');
  const background = document.querySelector('.background');

  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    menu.classList.add('menu--open');
    background.classList.add('background--transparent');
  });

  const menuButton = document.querySelector('.menu__button-close');
  menuButton.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    background.classList.remove('background--transparent');

  });
};
activeBurgerMenu();

const toggle = () => {
  const toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggle.classList.toggle('active');
  });
};
toggle();
