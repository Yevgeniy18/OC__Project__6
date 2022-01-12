function lightBoxOpen(id, title) {
	const lightBoxSection = document.querySelector('.lightbox');
	const mediaWrapper = document.querySelector('.lightbox__container');
	const media = document.getElementById(id);
	// MEDIA DATA FROM THE ORIGINAL MEDIA FACTORY

	// MEDIA DATA FROM LIGHTBOX SECTION
	// const mediaLightBox = document.querySelectorAll("[id*='lightbox-']");

	// LIGHTBOX OPENING? POPULATING IT WITH BASIC HTML ELEMENTS

	lightBoxSection.style.display = 'block';

	const lightBoxDetails = `
    <button class="lightbox__closed" onclick="lightBoxClosed()">x</button>
	<button class="lightbox__prev">❮</button>
	<div class="lightbox__length"></div>
    <div id="lightbox__media" class="lightbox__media"></div>
	<h3 class="lightbox__title"> ${title} </h3>
	<button class="lightbox__next">❯</button>
    `;

	mediaWrapper.innerHTML = lightBoxDetails;
	lightBoxSection.appendChild(mediaWrapper);

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	// CHECKING WHETHER MEDIA EXTENSIONS END WITH JPG OR MP4 FORMAT, APPENING THE LATTER INTO THE HTML ABOVE

	if (media.children[0].src.endsWith('jpg')) {
		let mediaArea = document.getElementById('lightbox__media');

		const imageExt = `
		<img src="${media.children[0].src}" />	
		`;
		mediaArea.innerHTML = imageExt;
	} else {
		let mediaArea = document.getElementById('lightbox__media');
		const videoExt = `
		<video class="lightbox__video" src="${media.children[0].src}" controls />
		`;
		mediaArea.innerHTML = videoExt;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	// NEXT AND PREVIOUS FUNCTIONALITIES, CURRENT MEDIA IN THE LIGHTBOX DISPLAY

	const mediaElts = document.querySelectorAll("[id*='test-']");
	let lightBox = document.getElementById('lightbox__media');

	let slideId = document.getElementById(id);

	console.log(title)

	// NEXT FUNnction

	for (let currentMedia = 0; currentMedia < mediaElts.length; currentMedia++) {
		if (mediaElts[currentMedia] === slideId) {
			let next = document.querySelector('.lightbox__next');
			let title = document.querySelector('.lightbox__title')
			console.log(title)
			next.addEventListener('click', function() {
				console.log(mediaElts[currentMedia])
				currentMedia = currentMedia + 1;
				currentMedia = currentMedia % mediaElts.length;
				lightBox.children[0].src = mediaElts[currentMedia].children[0].src;
				title.textContent = mediaElts[currentMedia].children[1].textContent
			
			});
		}
	}

	// PREVIOUS

	for (let currentMedia = 0; currentMedia < mediaElts.length; currentMedia++) {
		if (mediaElts[currentMedia] === slideId) {
			let next = document.querySelector('.lightbox__prev');
			let title = document.querySelector('.lightbox__title')
			next.addEventListener('click', function() {
				if(currentMedia === 0){
					currentMedia = mediaElts.length
				}
				currentMedia = currentMedia - 1;
				currentMedia = currentMedia % mediaElts.length;
				lightBox.children[0].src = mediaElts[currentMedia].children[0].src;
				title.textContent = mediaElts[currentMedia].children[1].textContent
			});
		}
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////
}
