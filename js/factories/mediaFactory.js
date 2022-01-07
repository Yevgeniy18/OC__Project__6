function mediaFactory(media) {
	const { likes, image, title, id, video } = media;

	function getImageDom() {
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');

		const mediaSection = `
        <div class="media__box">
		<img src="${image}" onclick="openLightBox(${id})" />

        </div>
        <div class ="media__pricing"> 	
        <h3>${title}</h3>
		<div class="likes__container">
		<p id="${id}" class="num__likes">${likes}</p> 
		<button onclick = incrementLikes(${likes},${id})> <i class="fas fa-heart"></i> </button>
		</div>
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;
	}

	function getVideoDom(){
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');

		const mediaSection = `
        <div class="media__box">
		<video controls onclick="openLightBox(${id})" > 
		<source src="${video}" > </source>
		</video>
		
	
        </div>
        <div class ="media__pricing"> 	
        <h3>${title}</h3>
		<div class="likes__container">
		<p id="${id}" class="num__likes">${likes}</p> 
		<button class="increment" onclick = incrementLikes(${likes},${id})> <i class="fas fa-heart"></i> </button>
		</div>
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;



	}

	return { getImageDom, getVideoDom };
}
