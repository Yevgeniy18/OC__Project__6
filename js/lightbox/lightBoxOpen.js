function lightBoxOpen(id, title) {
	const lightBoxSection = document.querySelector('.lightbox');
	const mediaWrapper = document.querySelector('.lightbox__container');
	const media = document.getElementById(id);

	// LIGHTBOX OPENING? POPULATING IT WITH BASIC HTML ELEMENTS

	lightBoxSection.style.display = 'block';

	const lightBoxDetails = `
    <button class="lightbox__closed" onclick="lightBoxClosed()">x</button>
	<button class="lightbox__prev" aria-controls="media-items" >❮</button>
    <div id="lightbox__media" class="lightbox__media"></div>
	<h3 class="lightbox__title"> ${title} </h3>
	<button class="lightbox__next" aria-controls="media_items">❯</button>
    `;

	mediaWrapper.innerHTML = lightBoxDetails;
	lightBoxSection.appendChild(mediaWrapper);

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	// CHECKING WHETHER MEDIA EXTENSIONS END WITH JPG OR MP4 FORMAT, APPENING THE LATTER INTO THE HTML ABOVE

	if (media.children[0].src.endsWith('jpg')) {
		let mediaArea = document.getElementById('lightbox__media');

		const imageExt = `
		<img class="lightboxMedia" src="${media.children[0].src}" />	
		`;
		mediaArea.innerHTML = imageExt;
	} else {
		let mediaArea = document.getElementById('lightbox__media');
		const videoExt = `
		<video class="lightboxMedia" src="${media.children[0].src}" controls />
		`;
		mediaArea.innerHTML = videoExt;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	// NEXT AND PREVIOUS FUNCTIONALITIES, CURRENT MEDIA IN THE LIGHTBOX DISPLAY

	const mediaElts = document.querySelectorAll("[id*='test-']");
	const lightBoxElts = document.querySelectorAll("[id*='lightbox-']");
	let lightBox = document.getElementById('lightbox__media');
	let slideId = document.getElementById(id);
	let next = document.querySelector('.lightbox__next');
	let prev = document.querySelector('.lightbox__prev');
	let mediaTitle = document.querySelector('.lightbox__title');

	// Next and previous media

	for (let currentValue = 0; currentValue < mediaElts.length; currentValue++) {
		if (mediaElts[currentValue] === slideId) {
			let lightboxNav = document.getElementById('lightbox__container');
			lightboxNav.addEventListener('keydown', keyHandler);

			function keyHandler(e) {
				if (e.keyCode === 39) {
					e.preventDefault();
					console.log('next');
				}
			}

			next.addEventListener('click', nextMedia);
			function nextMedia() {
				currentValue = currentValue + 1;
				currentValue = currentValue % mediaElts.length;

				if (mediaElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = mediaElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					lightBox.innerHTML = '';

					const imgData = `
					<img src=${imgSrc} />	
					`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = mediaElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[0].textContent;
					lightBox.innerHTML = '';

					const videoData = `
					<video src=${vidSrc} controls />	
					`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData;
				}
			}
		}
	}

	for (let currentValue = 0; currentValue < mediaElts.length; currentValue++) {
		if (mediaElts[currentValue] === slideId) {
			prev.addEventListener('click', prevMedia);

			function prevMedia() {
				if (currentValue === 0) {
					currentValue = mediaElts.length;
				}
				currentValue = currentValue - 1;
				currentValue = currentValue % mediaElts.length;

				if (mediaElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = mediaElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[1];

					lightBox.innerHTML = '';

					const imgData = `
					<img src=${imgSrc} />	
					`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = mediaElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[0].textContent;

					lightBox.innerHTML = '';

					const videoData = `
					<video src=${vidSrc} controls />	
					`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData;
				}
			}
		}
	}

	// Next and previous media from the lightbox

	for (let currentValue = 0; currentValue < lightBoxElts.length; currentValue++) {
		if (lightBoxElts[currentValue] === slideId) {
			let lightboxNav = document.getElementById('lightbox__container');
			lightboxNav.addEventListener('keydown', keyHandler);

			function keyHandler(e) {
				if (e.keyCode === 39) {
					e.preventDefault();
					console.log('next');
				}
			}

			next.addEventListener('click', nextMedia);
			function nextMedia() {
				currentValue = currentValue + 1;
				currentValue = currentValue % lightBoxElts.length;

				if (lightBoxElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = lightBoxElts[currentValue].children[1];
					lightBox.innerHTML = '';

					const imgData = `
						<img src=${imgSrc} />	
						`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[0].textContent;
					lightBox.innerHTML = '';

					const videoData = `
						<video src=${vidSrc} controls />	
						`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData;
				}
			}
		}
	}

	for (let currentValue = 0; currentValue < lightBoxElts.length; currentValue++) {
		if (lightBoxElts[currentValue] === slideId) {
			prev.addEventListener('click', prevMedia);

			function prevMedia() {
				if (currentValue === 0) {
					currentValue = lightBoxElts.length;
				}
				currentValue = currentValue - 1;
				currentValue = currentValue % lightBoxElts.length;

				if (lightBoxElts[currentValue].children[0].src.endsWith('jpg')) {
					let imgSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = lightBoxElts[currentValue].children[1];
					lightBox.innerHTML = '';

					const imgData = `
						<img src=${imgSrc} />	
						`;

					lightBox.innerHTML = imgData;
					mediaTitle.textContent = titleData.textContent;
				} else {
					let vidSrc = lightBoxElts[currentValue].children[0].src;
					let titleData = mediaElts[currentValue].children[0].textContent;
					lightBox.innerHTML = '';

					const videoData = `
						<video src=${vidSrc} controls />	
						`;
					lightBox.innerHTML = videoData;
					mediaTitle.textContent = titleData;
				}
			}
		}
	}
}

// 	CLOSING LIGHTBOX

function lightBoxClosed() {
	let lightboxSection = document.querySelector('.lightbox');
	lightboxSection.style.display = 'none';
}
