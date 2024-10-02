import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	document.querySelectorAll('.slider').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation],
			watchOverflow: true,
			loop: true,
			threshold: 10,
			navigation: {
				nextEl: `.slider__button_${i}.slider__button_next`,
				prevEl: `.slider__button_${i}.slider__button_prev`,
			},
			on: {
				beforeInit: function(el) {
					item.querySelectorAll('.slider__button').forEach(button => {
						button.classList.add(`slider__button_${i}`);
					})
				},
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1.2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 1.6
				},
				640: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				960: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1100: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			}
		});
	});

})();