
	var loupe = document.querySelector(".loupe");
	var search = document.querySelector(".container-search");
	var inputSearch = search.querySelector(".search input");

	var catalog = document.querySelector(".catalog");
	var secondMenu = document.querySelector(".container-menu");

	var login = document.querySelector(".login");
	var loginForm = document.querySelector(".login-form");
	var loginEmail = loginForm.querySelector("[name=email]");
	var password = loginForm.querySelector("[name=password]");
	var storageLoginEmail = localStorage.getItem("loginEmail");

	var cartFull = document.querySelector(".cart-full");
	var inCart = document.querySelector(".in-cart");

	var link = document.querySelector(".feedback");
	var contactForm = document.querySelector(".overlay-contact-form");
	if (contactForm) {
		var close = contactForm.querySelector(".btn-off");
		var name = contactForm.querySelector("[name=name]");
		var email = contactForm.querySelector("[name=email]");
		var text = contactForm.querySelector("[name=text]");
		var form = contactForm.querySelector("form");
	};

	var body = document.querySelector("body");
	var slider = document.querySelector(".slider");
	var slide1 = document.querySelector(".drop-first");
	var slide2 = document.querySelector(".drop-second");
	var slide3 = document.querySelector(".drop-third");

	var yandexMap = document.querySelector(".yandex-map");
	var imgMap = document.querySelector("img[alt=Карта]");

//Поиск
	if (loupe) {
		loupe.addEventListener("mouseover", function() {
			search.classList.add("pop-up-show");
			inputSearch.focus();
		});//Появляется всплывающее окно поиска при наведении курсора
		search.addEventListener("mouseout", function() {
			search.classList.remove("pop-up-show");
		})};//Исчезает всплывающее окно поиска при убирании курсора

//Каталог
	if(catalog) {
		catalog.addEventListener("mouseover", function() {
			secondMenu.classList.add("pop-up-show");
		});//Появляется вложенное меню каталога при наведении курсора
		secondMenu.addEventListener("mouseout", function() {
			secondMenu.classList.remove("pop-up-show");
		})};//Исчезает вложенное меню каталога при убирании курсора

//Вход
	if(login) {
		login.addEventListener("mouseover", function() {
			loginForm.classList.add("pop-up-show");
		});
		loginForm.addEventListener("mouseover", function() {
		loginForm.classList.add("pop-up-show");//Появляется форма входа при наведении курсора
			if (storageLoginEmail) {
				loginEmail.value = storageLoginEmail;
				password.focus();
			} else {
			loginEmail.focus();
			}
		});//Сохраняется Логин
		loginForm.addEventListener("mouseout", function() {
			loginForm.classList.remove("pop-up-show");
		});//Исчезает форма входа при убирании курсора
		loginForm.addEventListener("submit", function(event) {
			if(!loginEmail.value || !password.value) {
				event.preventDefault();
			} else {
				localStorage.setItem("loginEmail",loginEmail.value);
			}//не отправляется форма при незаполненных полях
		})};

//Корзина полная
	if (cartFull) {
		cartFull.addEventListener("mouseover", function() {
			inCart.classList.add("pop-up-show");
		});
		inCart.addEventListener("mouseover", function() {
			inCart.classList.add("pop-up-show");
		});//Появляется содержимое корзины при наведении курсора
		inCart.addEventListener("mouseout", function() {
			inCart.classList.remove("pop-up-show");
		})};//Исчезает содержимое корзины при убирании курсора

//Форма обратной связи
	if (link) {
		link.addEventListener("click", function(event) {
			event.preventDefault();
			contactForm.classList.add("pop-up-show");//Появляется форма обратной связи при клике
			form.classList.add("animation-uprise");//Анимация
		});//
		close.addEventListener("click", function(event) {
			event.preventDefault();
			contactForm.classList.remove("pop-up-show");//Исчезает форма обратной связи при клике
			form.classList.remove("animation-uprise");
		});
		form.addEventListener("submit", function(event) {
			if(!name.value || !email.value || !text.value) {
				event.preventDefault();
			}//Не отправляется форма при  незаполненных полях
		});
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (contactForm.classList.contains("pop-up-show")) {
					contactForm.classList.remove("pop-up-show");
					form.classList.remove("animation-uprise");
				}
			}//Исчезает форма обратной связи по ESC
		})};

//Слайдер
	if (slider) {
		slide1.addEventListener("click", function() {
			body.classList.remove("blue-color");
			body.classList.remove("brown-color");
	});//Меняет цвет фона body при клике

		slide2.addEventListener("click", function() {
			body.classList.add("blue-color");
			body.classList.remove("brown-color");
	});//Меняет цвет фона body при клике

		slide3.addEventListener("click", function() {
			body.classList.add("brown-color");
			body.classList.remove("blue-color");
	})};//Меняет цвет фона body при клике

//Карта
	if (yandexMap) {
		imgMap.classList.add("pop-up");
	};//Удаляет картинку карты при включенной интерактивной карте

