export const activateBurgerMenu = () => {
	const menu = document.querySelector('.menu');
	const backdrop = document.querySelector('.backdrop');
	const popup = document.querySelector('.popup');

	const burgerMenu = document.querySelector('.burger-menu');
	burgerMenu.addEventListener('click', () => {
		menu.classList.add('menu--open');
		menu.classList.remove('menu--close');
		backdrop.classList.add('backdrop--transparent');
	});

	const menuButton = document.querySelector('.menu__button-close');
	menuButton.addEventListener('click', () => {
		menu.classList.remove('menu--open');
		menu.classList.add('menu--close');
		backdrop.classList.remove('backdrop--transparent');
	});

	backdrop.addEventListener('click', () => {
		menu.classList.remove('menu--open');
		menu.classList.add('menu--close');
		backdrop.classList.remove('backdrop--transparent');
		popup.style.display = 'none';
	});
};
