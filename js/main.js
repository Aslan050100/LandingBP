"use strict";

document.addEventListener('DOMContentLoaded', () => {
	mobileMenuInit();
	smoothScrollInit();
});

const mobileMenuHTML = `
		<div class="mobile-menu-header">
			<div class="mobile-menu-header__burger">
				<div class="mobile-menu-header__burger-line"></div>
				<div class="mobile-menu-header__burger-line"></div>
				<div class="mobile-menu-header__burger-line"></div>
			</div>
			<div class="mobile-menu-header__phone-block">
				<a href="tel:+77772945195">
					<img src="img/icons/phone.svg" alt="" class="phone__img">
					<span>+7 (777)-294-51-95</span>
		  		</a>
			</div>
			</div>
		<div class="mobile-menu__nav-wrapper"></div>
`;

function mobileMenuInit() {
	const headerNode = document.querySelector('header'), 
			menuNode = headerNode.querySelector('.menu'),
			menuClone = menuNode.cloneNode(menuNode);
	menuClone.insertAdjacentHTML('afterbegin', mobileMenuHTML);
	const	navWrapperNode = menuClone.querySelector('.mobile-menu__nav-wrapper'),
	      menuItemsNode = menuClone.querySelector('.menu__nav'),
	      menuContactsNode = menuClone.querySelector('.menu__contacts'),
	      menuLogoNode = menuClone.querySelector('.menu__logo');
	console.log(menuClone);
	console.log(navWrapperNode);
	navWrapperNode.appendChild(menuItemsNode);
	navWrapperNode.appendChild(menuContactsNode);
	navWrapperNode.appendChild(menuLogoNode);

	menuClone.classList.add('mobile');
	console.dir(menuClone);
	headerNode.appendChild(menuClone);

	//Add onClick event
	const burgerNode = menuClone.querySelector('.mobile-menu-header__burger'),
	      menuBodyNode = menuClone.querySelector('.mobile-menu__nav-wrapper');
	burgerNode.addEventListener('click', (e) => {
		menuClone.classList.toggle('active');
		document.body.classList.toggle('blocked');
	});
	menuBodyNode.addEventListener('click', (e) => {
		document.body.classList.toggle('blocked');
		menuClone.classList.toggle('active');
	});
}

// Global functions
function smoothScrollInit() {
	const linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
	      h = +window.getComputedStyle(document.querySelector('header'),null)  // Высота хедера
							.getPropertyValue("height").replace('px', '');
	for (let i = 0; i < linkNav.length; i++) {
		console.log(`h: ${h}`);
		linkNav[i].addEventListener('click', e => { //по клику на ссылку
			e.preventDefault(); //отменяем стандартное поведение
			let w = window.pageYOffset,  // производим прокрутка прокрутка
				 hash = e.target.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
			// const t = document.querySelector(hash).getBoundingClientRect().top;  // отступ от окна браузера до id
			const t = document.querySelector(hash).offsetTop;  // отступ от верха BODY до id
			console.log(`t: ${t}`);
			window.scrollTo({
				top: t-h,
				left: 0,
				behavior: 'smooth'
			});
		}, false);
	}
};

