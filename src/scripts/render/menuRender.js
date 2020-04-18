import { dataCategoriesCards } from '../data/dataCards';

export const menuRender = () => {
  const item = dataCategoriesCards.map((set) => {
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
