import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {
	const modalFrame = makeModalFrame({
		init: function(underlay) {
			underlay.setAttribute('data-scroll-lock-scrollable', '');
		},
		open: function(modal, el) {
			let signature = `<div class='modal__signature'>${this.querySelector('img.active').dataset.text || ''}</div>`;

			this.insertAdjacentHTML('afterend', signature);
			scrollLock.disablePageScroll();
			
			if (modal.slideshow) {
				this.addEventListener('swiped-right', (e) => modalFrame.move(-1));
				this.addEventListener('swiped-left', (e) => modalFrame.move());
			}
		},
		close: function() {
			this.parentNode.querySelector('.modal__signature').remove();
			scrollLock.enablePageScroll();
		},
		move: function() {
			let signature = this.parentNode.querySelector('.modal__signature');
			let signatureText = this.querySelector('img.active').dataset.text;

			signature.innerText = signatureText || '';
		}
	});

})();