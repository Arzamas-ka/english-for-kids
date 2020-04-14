import { menuRender } from './scripts/render/menuRender';
import {
  renderCategoriesCardsTrain,
  renderCategoriesCardsPlay,
} from './scripts/render/categoriesCardsRender';
import { toggleTrainPlay } from './scripts/actions/trainPlayActions';
import {
  clickOnMenu,
  activationBurgerMenu,
} from './scripts/actions/menuActions';

import './styles/index.scss';

menuRender();
renderCategoriesCardsTrain();
renderCategoriesCardsPlay();
toggleTrainPlay();
clickOnMenu();
activationBurgerMenu();
