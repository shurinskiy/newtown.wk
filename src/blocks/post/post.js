(() => {
	
	document.querySelectorAll('.post__video')?.forEach((card) => {
		card.addEventListener('click', function(e) {
			let player = this.querySelector('iframe.post__video-frame');
			
			if (!player.src && e.target.classList.contains('post__video-play')) {
				player.src = e.target.dataset.youtubeSrc;
				e.target.style.display = 'none';
			}
		});
	});

})();
