import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	document.querySelectorAll('.team__slider').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation],
			watchOverflow: true,
			loop: true,
			threshold: 10,
			navigation: {
				nextEl: `.team__button_next`,
				prevEl: `.team__button_prev`,
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1.2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				780: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			}
		});
	});

})();