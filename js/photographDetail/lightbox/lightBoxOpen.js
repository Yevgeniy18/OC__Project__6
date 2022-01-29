function lightBoxOpen(id, title) {
	const lightBoxSection = document.querySelector('.lightbox');
	const mediaWrapper = document.querySelector('.lightbox__container');

	const media = document.getElementById(id);

	lightBoxSection.style.display = 'block';
	lightBoxSection.setAttribute('aria-hidden', false);

	const lightBoxDetails = `
    <button class="lightbox__closed" onclick="lightBoxClosed()">x</button>
	<button class="lightbox__prev" aria-controls="media-items">❮</button>
    <div id="lightbox__media" class="lightbox__media"></div>
	<h3 class="lightbox__title">${title} </h3>
	<button class="lightbox__next" aria-controls="media_items">❯</button>
    `;

	mediaWrapper.innerHTML = lightBoxDetails;
	lightBoxSection.appendChild(mediaWrapper);

	if (media.children[0].src.endsWith('jpg')) {
		let mediaArea = document.getElementById('lightbox__media');

		const imageExt = `
		<img class="lightboxMedia" src="${media.children[0].src}" />	
		`;
		mediaArea.innerHTML = imageExt;
	} else {
		let mediaArea = document.getElementById('lightbox__media');
		const videoExt = `
		<video class="lightboxMedia"  controls >
		<source src=${media.children[0].children[0].src} type="video/mp4" /> 
		</video>
		`;
		mediaArea.innerHTML = videoExt;
	}

	const mediaElts = document.querySelectorAll("[id*='media-']");
	const lightBoxElts = document.querySelectorAll("[id*='lightbox-']");
	let lightBox = document.getElementById('lightbox__media');
	let slideId = document.getElementById(id);
	let next = document.querySelector('.lightbox__next');
	let prev = document.querySelector('.lightbox__prev');
	let mediaTitle = document.querySelector('.lightbox__title');

	// Next and previous navigation

	for (let currentValue = 0; currentValue < mediaElts.length; currentValue++) {
		if (mediaElts[currentValue] === slideId) {
			next.addEventListener('click', nextMedia);
			function nextMedia() {
				lightBox.innerHTML = '';
				currentValue = currentValue + 1;
				currentValue = currentValue % mediaElts.length;

				if (mediaElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = mediaElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					const imgData = `
					<img src=${imgSrc} />
					`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = mediaElts[currentValue].children[0].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					const videoData = `
					<video src=${vidSrc} controls />
					`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData.textContent;
				}
			}

			prev.addEventListener('click', prevMedia);

			function prevMedia() {
				lightBox.innerHTML = '';

				if (currentValue === 0) {
					currentValue = mediaElts.length;
				}
				currentValue = currentValue - 1;
				currentValue = currentValue % mediaElts.length;

				if (mediaElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = mediaElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					const imgData = `
					<img src=${imgSrc} />	
					`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = mediaElts[currentValue].children[0].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					const videoData = `
					<video src=${vidSrc} controls />	
					`;
					lightBox.innerHTML = videoData;	
					mediaTitle.textContent = titleData.textContent;
				}
			}

			document.onkeydown = function(e) {
				switch (e.keyCode) {
					case 39:
						nextMedia();
						break;
					case 37:
						prevMedia();
						break;
					case 27:
						lightBoxClosed();
						break;
				}
			};
		}
	}

	// Next and previous media from the lightbox

	for (let currentValue = 0; currentValue < lightBoxElts.length; currentValue++) {
		if (lightBoxElts[currentValue] === slideId) {
			next.addEventListener('click', nextMedia);
			function nextMedia() {
				lightBox.innerHTML = '';
				currentValue = currentValue + 1;
				currentValue = currentValue % lightBoxElts.length;

				if (lightBoxElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = lightBoxElts[currentValue].children[1];

					const imgData = `
						<img src=${imgSrc} />	
						`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					lightBox.innerHTML = '';

					let vidSrc = lightBoxElts[currentValue].children[0].src;

					let titleData = mediaElts[currentValue].children[1];

					const videoData = `
						<video src=${vidSrc} controls />	
						`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData.textContent;
				}

				// Highliting the image when being selected

				if (lightBoxElts[currentValue]) {
					lightBoxElts[currentValue].classList.add('gallery__selected');
				}
			}

			prev.addEventListener('click', prevMedia);

			function prevMedia() {
				lightBox.innerHTML = '';
				if (currentValue === 0) {
					currentValue = lightBoxElts.length;
				}
				currentValue = currentValue - 1;
				currentValue = currentValue % lightBoxElts.length;

				if (lightBoxElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = lightBoxElts[currentValue].children[1];

					const imgData = `
						<img src=${imgSrc} />	
						`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					const videoData = `
						<video src=${vidSrc} controls />	
						`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData.textContent;
				}
			}
			document.onkeydown = function(e) {
				switch (e.keyCode) {
					case 39:
						nextMedia();
						break;
					case 37:
						prevMedia();
						break;
					case 27:
						lightBoxClosed();
						break;
				}
			};
		}
	}
}

// 	Closing Lightbox Element

function lightBoxClosed() {
	let lightboxSection = document.querySelector('.lightbox');
	lightboxSection.style.display = 'none';
}
