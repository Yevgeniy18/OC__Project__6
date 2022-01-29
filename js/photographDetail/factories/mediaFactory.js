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
			<div id="media-${this.id}" onclick="lightBoxOpen(id,'${this.title}')" class="media__box">
			<img class="imageMedia" src="${this.image}" alt=${this.title}/>
			<h3 class="media__title">${this.title}</h3>
			</div>
			<div class ="media__pricing"> 	
			<h3>${this.title}</h3>
			<div  id="${this.id}" class="likes__container">
			<p class="num__likes">${this.likes}</p> 
			<button onclick="incrementLikes(${this.likes},${this
			.id})" aria-controls="increment-likes"> <i class="fas fa-heart"></i></button>
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
        <div id="media-${this.id}" onclick="lightBoxOpen(id,'${this.title}')" class="media__box">
		<video id="player"  controls>
		<source src="${this.video}" type="video/mp4" alt=${this.title} />
		</video>
		<h3 class="media__title">${this.title}</h3>
        </div>
        <div class="media__pricing"> 	
        <h3>${this.title}</h3>
		<div id="${this.id}" class="likes__container">
		<p class="num__likes">${this.likes}</p> 
		<button  onclick="incrementLikes(${this.likes},${this
			.id})" aria-controls="increment-likes"><i class="fas fa-heart"></i> </button>
		</div>
        </div>
        `;

		mediaTemplate.innerHTML = mediaSection;
		return mediaTemplate;
	}

	getLightBoxImageDom() {
		const lightBoxTemplate = document.createElement('article');
		lightBoxTemplate.classList.add('lightbox__item');
		const lightBoxMedia = `
		<div id="lightbox-${this.id}" class="lightbox__item__container" onclick="lightBoxOpen(id,'${this.title}')">
		<img src="${this.image}" alt=${this.title} />
		<h3 class="media__title">${this.title}</h3>
		</div>
		`;

		lightBoxTemplate.innerHTML = lightBoxMedia;
		return lightBoxTemplate;
	}

	getLightBoxVideoDom() {
		const lightBoxTemplate = document.createElement('article');
		lightBoxTemplate.classList.add('lightbox__item');
		const lightBoxMedia = `
		<div id="lightbox-${this.id}" class="lightbox__item__container" onclick="lightBoxOpen(id,'${this.title}')">
		<video src="${this.video}" alt=${this.title} />
		<h3 class="media__title">${this.title}</h3>
		</div>
		`;

		lightBoxTemplate.innerHTML = lightBoxMedia;
		return lightBoxTemplate;
	}
}
