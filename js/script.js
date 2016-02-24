
	var search = document.querySelector(".container-search");
	var inputSearch = search.querySelector(".search input");

	var login = document.querySelector(".login");
	var loginForm = document.querySelector(".login-form");
	var loginEmail = loginForm.querySelector("[name=email]");
	var password = loginForm.querySelector("[name=password]");
	if (window.localStorage) {
		var storageLoginEmail = localStorage.getItem("loginEmail");
	}

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
	if (search) {
		search.addEventListener("mouseover", function() {
			inputSearch.focus();
		})};

//Вход
	if(login) {
		loginForm.addEventListener("mouseover", function() {
			if (storageLoginEmail) {
				loginEmail.value = storageLoginEmail;//вставляет значение поля "Логин"
				password.focus();
			} else {
				loginEmail.focus();
			}
		});
		loginForm.addEventListener("submit", function(event) {
			if(!loginEmail.value || !password.value) {
				event.preventDefault();//не отправляется форма при незаполненных полях
			} else {
				localStorage.setItem("loginEmail",loginEmail.value);//сохраняет значение поля "Логин"
			}
		})};

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
			form.classList.remove("animation-uprise");//удаляет класс с анимацией
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

