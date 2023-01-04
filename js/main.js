(function () {
	const menu = document.querySelector('.header__menu')
	const burger = document.querySelector('.burger')
	const menuCloseItem = document.querySelector('.header__nav-close')
	burger.addEventListener('click', () => {
		menu.classList.add('header__menu_active')
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__menu_active')
	})
}());

