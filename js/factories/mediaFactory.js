function mediaFactory(media) {
	const { likes, image, title, video } = media;

	function getMediaDom() {
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');



		const mediaSection = `
        <div class="media__img">
        <img src ="${image}" />
        </div>
        <div class ="media__pricing"> 
        <h3>${title}</h3>
        <p>${likes} <i class="fas fa-heart"></i></p>    
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;

		return mediaTemplate;
		
	}

	return { getMediaDom };
}
