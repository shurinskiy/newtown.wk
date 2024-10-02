import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	makeModalFrame({
		init: function(underlay) {
			underlay.setAttribute('data-scroll-lock-scrollable', '');
		},
		open: function(modal, el) {
			scrollLock.disablePageScroll();
			this.insertAdjacentHTML('afterend', `<div class='modal__sign'>${el.querySelector('img').dataset.text}</div>`);
		},
		close: function() {
			scrollLock.enablePageScroll();
		}
	});

})();