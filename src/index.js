import { menuRender } from './scripts/render/menuRender';
import { renderCategoriesCards } from './scripts/render/categoriesCardsRender';
import { toggleTrainPlay } from './scripts/actions/trainPlayActions';
import { clickOnMenu, activationBurgerMenu } from './scripts/actions/menuActions';

import './styles/index.scss';

menuRender();
renderCategoriesCards();
toggleTrainPlay();
clickOnMenu();
activationBurgerMenu();
