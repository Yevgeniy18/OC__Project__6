class photographDetail {
	constructor(photographers, media) {
		this.photographers = photographers;
		this.media = media;

		this.headerDetailSection = document.querySelector('.photograph__header');
		this.mediaSectionContainer = document.querySelector('.photograph__media');
		this.lightBoxGallery = document.querySelector('.lightbox__gallery');

		this.url = window.location.search;
		this.params = new URLSearchParams(this.url);
		this.idItem = this.params.get('id');
		this.idValue = parseInt(this.idItem);
	}

	getPhotographDetails() {
		for (let i = 0; i < this.photographers.length; i++) {
			if (this.photographers[i].id === this.idValue) {
				const photographersData = this.photographers[i];
				const header = `
                <div class="header__basic">
                <h1>${photographersData.name}</h1>
                <div class="header__location">
                <p>${photographersData.city}, ${photographersData.country} </p>
                </div>
                <p class="header__tagline">${photographersData.tagline}</p>
                 </div>
                 <div tabindex="0" class="photograph__contact__form" onclick=handleModal()>
                 Contactez-moi
               </div>
               <div class="header__img">
               <img src="${photographersData.portrait}" alt=${photographersData.name} />
               </div>
                `;

				this.headerDetailSection.innerHTML = header;
			}
		}
	}

	getPhotographMedia() {
		this.media.forEach((media) => {
			if (media.photographerId === this.idValue && media.image) {
				const mediaTemplateItem = new MediaBuilder(media);
				const imageCard = mediaTemplateItem.getImageCard();
				this.mediaSectionContainer.appendChild(imageCard);
			} else if (media.photographerId === this.idValue && media.video) {
				const mediaTemplateItem = new MediaBuilder(media);
				const videoCard = mediaTemplateItem.getVideoCard();
				this.mediaSectionContainer.appendChild(videoCard);
			}
		});
	}

	getPhotographMediaLightBox() {
		this.media.forEach((media) => {
			if (media.photographerId === this.idValue && media.image) {
				const imageTemplateLightbox = new MediaBuilder(media);
				const imageCardLightBox = imageTemplateLightbox.getLightBoxImageDom();
				this.lightBoxGallery.appendChild(imageCardLightBox);
			} else if (media.photographerId === this.idValue && media.video) {
				const videoTemplateLightbox = new MediaBuilder(media);
				const videoCardLightBox = videoTemplateLightbox.getLightBoxVideoDom();
				this.lightBoxGallery.appendChild(videoCardLightBox);
			}
		});
	}
}
