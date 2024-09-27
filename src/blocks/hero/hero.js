import Swiper from 'swiper';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

(() => {

	new Swiper(".hero__slider", {
		// modules: [ Autoplay, EffectFade, Pagination ],
		modules: [ Autoplay, Pagination, Navigation ],
		spaceBetween: 0,
		threshold: 10,
		loop: true,
		speed: 1000,
		// effect: "fade",
		// fadeEffect: { crossFade: true },
		autoplay: { 
			delay: 10000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: `.hero__button_next`,
			prevEl: `.hero__button_prev`,
		},
		pagination: {
			el: '.hero__pagination',
			bulletClass: 'hero__dot',
			bulletActiveClass: 'active',
			clickable: true,
		}
	});
	
})();