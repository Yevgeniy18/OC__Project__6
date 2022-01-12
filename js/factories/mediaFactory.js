function mediaFactory(media) {
	const { likes, image, title, id, video } = media;

	function getImageDom() {
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');

		const mediaSection = `
        <div id="test-${id}" onclick="lightBoxOpen(id,'${title}')" class="media__box">
		<img class="media" src="${image}"/>
		<h3 class="media__title">${title}</h3>
        </div>
        <div class ="media__pricing"> 	
        <h3>${title}</h3>
		<div class="likes__container">
		<p id="${id}" class="num__likes">${likes}</p> 
		<button onclick="incrementLikes(${likes},${id})"> <i class="fas fa-heart"></i> </button>
		</div>
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;
	}

	function getVideoDom() {
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');

		const mediaSection = `
        <div id="test-${id}" onclick="lightBoxOpen(id,'${title}')" class="media__box">
		<video class="media" src="${video}" />
		<h3 class="media__title">${title}</h3>
        </div>
        <div class="media__pricing"> 	
        <h3>${title}</h3>
		<div class="likes__container">
		<p id="${id}" class="num__likes">${likes}</p> 
		<button class="increment" onclick="incrementLikes(${likes},${id})"><i class="fas fa-heart"></i> </button>
		</div>
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;
	}

	function getLightBoxImageDom() {
		const lightBoxTemplate = document.createElement('article');
		lightBoxTemplate.classList.add('lightbox__item');
		const lightBoxMedia = 
		`
		<div id="lightbox-${id}" class="lightbox__item__container" onclick="lightBoxOpen(id,'${title}')">
		<img src="${image}" />
		</div>
		`;

		lightBoxTemplate.innerHTML = lightBoxMedia;
		return lightBoxTemplate;
	}

	function getLightBoxVideoDom() {
		const lightBoxTemplate = document.createElement('article');
		lightBoxTemplate.classList.add('lightbox__item');
		const lightBoxMedia = 
		`
		<div id="lightbox-${id}" class="lightbox__item__container" onclick="lightBoxOpen(id,'${title}')">
		<video src="${video}" />
		</div>
		`;

		lightBoxTemplate.innerHTML = lightBoxMedia;
		return lightBoxTemplate;
	}

	return { getImageDom, getVideoDom, getLightBoxImageDom, getLightBoxVideoDom };
}
