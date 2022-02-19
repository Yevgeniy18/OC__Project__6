class MediaBuilder {
	constructor(data) {
		this.likes = data.likes;
		this.title = data.title;
		this.id = data.id;
		this.image = data.image;
		this.video = data.video;
		this.alt = data.alt;
	}

	getImageCard() {
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');


		const mediaSection = `
			<div  id="media-${this.id}"    onclick="lightBoxOpen(id,'${this.title}')" class="media__box">
			<img tabindex="0" id="focus-${this.id}"  onkeypress="lightBoxOnPress(id,'${this.title}')"  class="focusable-media" src="${this.image}" alt="${this.title}"/>
			<h3 class="media__title">${this.title}</h3>
			</div>
			<div class ="media__pricing"> 	
			<h3>${this.title}</h3>
			<div  id="${this.id}" class="likes__container">
			<p class="num__likes">${this.likes}</p> 
			<button tabindex="-1" onclick="incrementLikes(${this.likes},${this
			.id})" role="increment"> <i class="fas fa-heart"></i></button>
			</div>
			</div>
		

			`;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;
	}

	getVideoCard() {
		const mediaTemplate = document.createElement('article');
		mediaTemplate.classList.add('media__container');



		const mediaSection = `
        <div  id="media-${this.id}" onclick="lightBoxOpen(id,'${this.title}')" class="media__box">
		<video tabindex="0" id="focus-${this.id}"  onkeypress="lightBoxOnPress(id,'${this.title}')"  src="${this.video}" type="video/mp4" alt="${this.title}"  class="focusable-media" />
		<h3 class="media__title">${this.title}</h3>
		</div>
        <div class="media__pricing"> 	
        <h3>${this.title}</h3>
		<div id="${this.id}" class="likes__container">
		<p class="num__likes">${this.likes}</p> 
		<button tabindex="-1"  onclick="incrementLikes(${this.likes},${this
			.id})" role="increment"><i class="fas fa-heart"></i> </button>
		</div>
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;
	}

}
