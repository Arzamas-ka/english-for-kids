import { EMPTY_STRING, STATE_FLEX, STATE_NONE } from '../data/constants';

export const removeElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    element.remove();
  }
};

export const removeChildren = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    element.innerHTML = EMPTY_STRING;
  }
};

export const setToFlex = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    element.style.display = STATE_FLEX;
  }
};

export const hideElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    element.style.display = STATE_NONE;
  }
};

export const insertBefore = (what, beforeWhat) =>
  beforeWhat.insertAdjacentElement('beforebegin', what);

export const createDivElement = (className) => {
  const element = document.createElement('div');
  element.className = className;
  return element;
};
