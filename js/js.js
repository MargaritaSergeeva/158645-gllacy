
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
	var slide1 = document.querySelector(".drop-first");
	var slide2 = document.querySelector(".drop-second");
	var slide3 = document.querySelector(".drop-third");

	var yandexMap = document.querySelector(".yandex-map");
	var imgMap = document.querySelector("img[alt=Карта]");


	loupe.addEventListener("mouseover", function() {
		search.classList.add("pop-up-show");
		inputSearch.focus();
	});
	search.addEventListener("mouseout", function() {
		search.classList.remove("pop-up-show");

	});

	catalog.addEventListener("mouseover", function() {
		secondMenu.classList.add("pop-up-show");
	});
	secondMenu.addEventListener("mouseout", function() {
		secondMenu.classList.remove("pop-up-show");
	});

	login.addEventListener("mouseover", function() {
		loginForm.classList.add("pop-up-show");
	});
	loginForm.addEventListener("mouseover", function() {
		loginForm.classList.add("pop-up-show");
		if (storageLoginEmail) {
			loginEmail.value = storageLoginEmail;
			password.focus();
		} else {
			loginEmail.focus();
		}
	});
	loginForm.addEventListener("mouseout", function() {
		loginForm.classList.remove("pop-up-show");
	});
	loginForm.addEventListener("submit", function(event) {
		if(!loginEmail.value || !password.value) {
			event.preventDefault();
		} else {
			localStorage.setItem("loginEmail",loginEmail.value);
		}
	});

	if (cartFull) {
	cartFull.addEventListener("mouseover", function() {
		inCart.classList.add("pop-up-show");
	})};
	if (cartFull) {
	inCart.addEventListener("mouseover", function() {
		inCart.classList.add("pop-up-show");
	})};
	if (cartFull) {
	inCart.addEventListener("mouseout", function() {
		inCart.classList.remove("pop-up-show");
	})};

	if (link) {
	link.addEventListener("click", function(event) {
		link.href="#main-header";
		contactForm.classList.add("pop-up-show");
		form.classList.add("animation-uprise");
		name.focus();
	})};
	if (link) {
	close.addEventListener("click", function(event) {
		event.preventDefault();
		contactForm.classList.remove("pop-up-show");
		form.classList.remove("animation-uprise");
	})};
	if (link) {
	form.addEventListener("submit", function(event) {
		if(!name.value || !email.value || !text.value) {
			event.preventDefault();
		}
	})};
	if (link) {
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (contactForm.classList.contains("pop-up-show")) {
		contactForm.classList.remove("pop-up-show");
		form.classList.remove("animation-uprise");
			}
		}
	})};


	if (slide1.addEventListener("click", function() {
		body.classList.remove("blue-color");
		body.classList.remove("brown-color");
	}));

	if (slide2.addEventListener("click", function() {
		body.classList.add("blue-color");
		body.classList.remove("brown-color");
	}));

	if (slide3.addEventListener("click", function() {
		body.classList.add("brown-color");
		body.classList.remove("blue-color");
	}));


	if (yandexMap) {
		imgMap.classList.add("pop-up");
	};

