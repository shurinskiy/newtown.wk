import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	makeModalFrame({
		init: function(underlay) {
			underlay.setAttribute('data-scroll-lock-scrollable', '');
		},
		open: function(modal, el) {
			scrollLock.disablePageScroll();
			this.insertAdjacentHTML('beforeend', el.querySelector('img').dataset.text);
		},
		close: function() {
			scrollLock.enablePageScroll();
		}
	});

})();