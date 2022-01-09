function lightBoxOpen(id) {
	const lightBoxSection = document.querySelector('.lightbox');
	const mediaWrapper = document.querySelector('.lightbox__container');
	const media = document.getElementById(id);

	lightBoxSection.style.display = 'block';

	const lightBoxDetails = `
    <span class="lightbox__closed" onclick="lightBoxClosed()">x</span>
    <div id="lightbox__media" class="lightbox__media"></div>
    `;

	mediaWrapper.innerHTML = lightBoxDetails;
	lightBoxSection.appendChild(mediaWrapper);

	if (media.src.endsWith('jpg')) {
		let mediaArea = document.getElementById('lightbox__media');

		const imageExt = `
		<button class="lightbox__prev" onclick="previousMedia()"><i class="fas fa-chevron-left"></i></button>
		<img src ="${media.src}" />
		<button class="lightbox__next" onclick="nextMedia()"><i class="fas fa-chevron-right"></i></button>
		`;
		mediaArea.innerHTML = imageExt;
	} else {
		let mediaArea = document.getElementById('lightbox__media');
		const videoExt = `
		<button class="lightbox__prev" onclick="previousMedia()"><i class="fas fa-chevron-left"></i></button>
		<video class="lightbox__video" src="${media.src}" controls />
		<button class="lightbox__next" onclick="nextMedia()"><i class="fas fa-chevron-right"></i></button>
		`;

		mediaArea.innerHTML = videoExt;
	}
}
