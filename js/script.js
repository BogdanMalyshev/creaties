'use strict';


const mainContaier = document.querySelector('#main_container'),
	  body = document.querySelector('body'),
	  logo = document.querySelector('#logo'),
	  main = document.querySelector('#main'),
	  socialIcons = document.querySelector('#social_icons'),
	  mainLink = document.querySelectorAll('#main_link'),
	  html = document.querySelector('body'),
	  burgerMenu = document.querySelector('.burger_main');


	
		window.addEventListener('scroll', function(){

			if (window.pageYOffset > 0 && body.clientWidth > 991) {
				mainContaier.classList.add('animate_main');
				logo.classList.add('animate_logo');
				main.classList.add('main_animate');
				socialIcons.classList.add('social_icons_animate');
			} else {
				mainContaier.classList.remove('animate_main');
				logo.classList.remove('animate_logo');
				main.classList.remove('main_animate');
				socialIcons.classList.remove('social_icons_animate');
			}	
		});



burgerMenu.addEventListener('click', function (){
	main.classList.toggle('active');
	burgerMenu.classList.toggle('active');
});
mainLink.forEach((e)=>{
	e.addEventListener('click', function (){
	main.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	});
});


 //-----------------------------animate elements----------------------------- 

 let animItems = document.querySelectorAll('.anim_items');

 if (animItems.length > 0) {
 	window.addEventListener('scroll', animScrollOn);
 	function animScrollOn() {
 		animItems.forEach(e => {
 			const animItemsHeight = e.offsetHeight,
 				  animItemsOffset = offset(e).top,
 				  offsetHeight = document.documentElement.clientHeight;


 			if (pageYOffset + offsetHeight - (animItemsHeight / 3) >= animItemsOffset && pageYOffset < (animItemsOffset + animItemsHeight)) {
 				e.classList.add('active');
 			} else {
 				 // e.classList.remove('active');
 			}
 		});
 	}

 	function offset (el) {
 		const coordinates = el.getBoundingClientRect(),
 			  scrollTop = window.pageXOffset || document.documentElement.scrollTop,
 			  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

 		return {top: coordinates.top + scrollTop, left: coordinates.left + scrollLeft};
 	}


 	setTimeout(()=>animScrollOn(), 500);
 }


