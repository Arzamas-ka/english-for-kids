import { menuRender } from './scripts/render/menuRender';
import { categoriesCardsRenderTrain } from './scripts/render/categoriesCardsRenderTrain';
import { categoriesCardsRenderPlay } from './scripts/render/categoriesCardsRenderPlay';
import { toggleTrainPlay } from './scripts/actions/toggleTrainPlay';
import { activationBurgerMenu } from './scripts/actions/activationBurgerMenu';
import { getExpectedElement } from './scripts/helpers/getExpectedElem';
import { clickOnMenu } from './scripts/actions/clickOnMenu';
import { clickOnLogo } from './scripts/actions/clickOnLogo';

import './styles/index.scss';

categoriesCardsRenderTrain();
categoriesCardsRenderPlay();
menuRender();
toggleTrainPlay();
activationBurgerMenu();
clickOnMenu();
clickOnLogo();

document
  .querySelector('.set-cards')
  .addEventListener('click', getExpectedElement);
