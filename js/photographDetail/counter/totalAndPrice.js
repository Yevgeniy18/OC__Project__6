class ExtraInfo {
	constructor(photographer, media) {
		this.media = media;
		this.photographer = photographer;

		this.url = window.location.search;
		this.params = new URLSearchParams(this.url);
		this.idItem = this.params.get('id');
		this.idValue = parseInt(this.idItem);
	}

	getTotalLikes() {
		const counter = document.querySelector('.counter__bg');
		const likesContainer = document.createElement('div');
		likesContainer.classList.add('likes__tag');
		counter.appendChild(likesContainer);

		let filteredMedia = this.media.filter((element) => element.photographerId === this.idValue);

		let total = filteredMedia.reduce(function(acc, curr) {
			return acc + curr.likes;
		}, 0);

		const totalLikes = `
		<p id="sum" class ="sum__likes">${total} </p> <i class="fas fa-heart"></i>
		`;

		likesContainer.innerHTML = totalLikes;

		return likesContainer;
	}

	getPrice() {
		const counter = document.querySelector('.counter__bg');
		const price = document.createElement('div');
		price.classList.add('price__tag');
		counter.appendChild(price);

		let priceTag;

		this.photographer.forEach((elt) => {
			if (elt.id === this.idValue) {
				priceTag = elt.price;
			}
		});

		const priceInfo = `<p>${priceTag}€ / Jour</p>`;

		price.innerHTML = priceInfo;
	}
}
