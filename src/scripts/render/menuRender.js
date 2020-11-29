import { dataCategoriesCards } from '../data/dataCards';

export const menuRender = () => {
  dataCategoriesCards.forEach((set) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    const a = document.createElement('a');
    a.className = 'menu-link';
    a.setAttribute('id', set.id);
    a.textContent = set.categoryName;
    a.setAttribute('href', '#');
    li.append(a);

    const ul = document.querySelector('.menu-list');
    ul.append(li);
  });
};
