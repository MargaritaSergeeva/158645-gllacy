var loupe=document.querySelector(".loupe"),search=document.querySelector(".container-search"),inputSearch=search.querySelector(".search input"),catalog=document.querySelector(".catalog"),secondMenu=document.querySelector(".container-menu"),login=document.querySelector(".login"),loginForm=document.querySelector(".login-form"),loginEmail=loginForm.querySelector("[name=email]"),password=loginForm.querySelector("[name=password]"),storageLoginEmail=localStorage.getItem("loginEmail"),cartFull=document.querySelector(".cart-full"),inCart=document.querySelector(".in-cart"),link=document.querySelector(".feedback"),contactForm=document.querySelector(".overlay-contact-form");if(contactForm)var close=contactForm.querySelector(".btn-off"),name=contactForm.querySelector("[name=name]"),email=contactForm.querySelector("[name=email]"),text=contactForm.querySelector("[name=text]"),form=contactForm.querySelector("form");var body=document.querySelector("body"),slide1=document.querySelector(".drop-first"),slide2=document.querySelector(".drop-second"),slide3=document.querySelector(".drop-third"),yandexMap=document.querySelector(".yandex-map"),imgMap=document.querySelector("img[alt=\u041a\u0430\u0440\u0442\u0430]");loupe.addEventListener("mouseover",function(){search.classList.add("pop-up-show"),inputSearch.focus()}),search.addEventListener("mouseout",function(){search.classList.remove("pop-up-show")}),catalog.addEventListener("mouseover",function(){secondMenu.classList.add("pop-up-show")}),secondMenu.addEventListener("mouseout",function(){secondMenu.classList.remove("pop-up-show")}),login.addEventListener("mouseover",function(){loginForm.classList.add("pop-up-show")}),loginForm.addEventListener("mouseover",function(){loginForm.classList.add("pop-up-show"),storageLoginEmail?(loginEmail.value=storageLoginEmail,password.focus()):loginEmail.focus()}),loginForm.addEventListener("mouseout",function(){loginForm.classList.remove("pop-up-show")}),loginForm.addEventListener("submit",function(a){loginEmail.value&&password.value?localStorage.setItem("loginEmail",loginEmail.value):a.preventDefault()}),cartFull&&cartFull.addEventListener("mouseover",function(){inCart.classList.add("pop-up-show")}),cartFull&&inCart.addEventListener("mouseover",function(){inCart.classList.add("pop-up-show")}),cartFull&&inCart.addEventListener("mouseout",function(){inCart.classList.remove("pop-up-show")}),link&&link.addEventListener("click",function(a){link.href="#main-header",contactForm.classList.add("pop-up-show"),form.classList.add("animation-uprise"),name.focus()}),link&&close.addEventListener("click",function(a){a.preventDefault(),contactForm.classList.remove("pop-up-show"),form.classList.remove("animation-uprise")}),link&&form.addEventListener("submit",function(a){name.value&&email.value&&text.value||a.preventDefault()}),link&&window.addEventListener("keydown",function(a){27===a.keyCode&&contactForm.classList.contains("pop-up-show")&&(contactForm.classList.remove("pop-up-show"),form.classList.remove("animation-uprise"))}),slide1.addEventListener("click",function(){body.classList.remove("blue-color"),body.classList.remove("brown-color")}),slide2.addEventListener("click",function(){body.classList.add("blue-color"),body.classList.remove("brown-color")}),slide3.addEventListener("click",function(){body.classList.add("brown-color"),body.classList.remove("blue-color")}),yandexMap&&imgMap.classList.add("pop-up");