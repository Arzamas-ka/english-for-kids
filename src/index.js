import { menuRender } from './scripts/render/menuRender';
import { categoriesCardsRenderTrain } from './scripts/render/categoriesCardsRenderTrain';
import { categoriesCardsRenderPlay } from './scripts/render/categoriesCardsRenderPlay';
import { addClickOnToggle } from './scripts/actions/toggleTrainPlay';
import { activateBurgerMenu } from './scripts/actions/activationBurgerMenu';
import { getExpectedElement } from './scripts/helpers/getExpectedElem';
import { addClickListenerOnMenu } from './scripts/actions/menuListener';
import { clickOnLogo } from './scripts/actions/clickOnLogo';
import { statisticRender } from './scripts/render/statisticRender';
import { createInitialStorage } from './scripts/data/createInitialStorage';

import './styles/index.scss';

menuRender();

categoriesCardsRenderTrain();
categoriesCardsRenderPlay();

addClickOnToggle();

activateBurgerMenu();
addClickListenerOnMenu();
clickOnLogo();
statisticRender();

document.querySelector('.set-cards').addEventListener('click', getExpectedElement);

const initializeStatistics = () => {
	let statistics = JSON.parse(localStorage.getItem('statistics'));
	if (!statistics) {
		let words = createInitialStorage();
		statistics = localStorage.setItem('statistics', JSON.stringify(words));
	}
};

initializeStatistics();
