class Filter {
	constructor(media) {
		this.media = media;
		this.mediaContainer = document.querySelector('.photograph__media');
		this.url = window.location.search;
		this.params = new URLSearchParams(this.url);
		this.idItem = this.params.get('id');
		this.idValue = parseInt(this.idItem);

		this.mediaId = this.media.filter((item) => item.photographerId === this.idValue);
	}

	displayAll() {
		this.clearMedia();

		this.media.forEach((res) => {
			if (res.photographerId === this.idValue && res.image) {
				const filteredMedia = new MediaBuilder(res);
				const filteredCard = filteredMedia.getImageCard();
				this.mediaContainer.appendChild(filteredCard);
			} else if (res.photographerId === this.idValue && res.video) {
				const filteredMedia = new MediaBuilder(res);
				const filteredCard = filteredMedia.getVideoCard();
				this.mediaContainer.appendChild(filteredCard);
			}
		});
	}

	filterByPopularity() {
		this.clearMedia();

		const result = this.mediaId.sort((a, b) => b.likes - a.likes);
		result.forEach((res) => {
			if (res.image) {
				const filteredMedia = new MediaBuilder(res);
				const filteredCard = filteredMedia.getImageCard();
				this.mediaContainer.appendChild(filteredCard);
			} else {
				const filteredMedia = new MediaBuilder(res);
				const filteredCard = filteredMedia.getVideoCard();
				this.mediaContainer.appendChild(filteredCard);
			}
		});
	}

	filterByTitle() {
		this.clearMedia();

		const result = this.mediaId.sort(function(a, b) {
			let stringA = a.title.toUpperCase();
			let stringB = b.title.toUpperCase();
			return stringA < stringB ? -1 : stringA > stringB ? 1 : 0;
		});

		result.forEach((res) => {
			if (res.image) {
				const filteredMedia = new MediaBuilder(res);
				const filteredCard = filteredMedia.getImageCard();
				this.mediaContainer.appendChild(filteredCard);
			} else {
				const filteredMedia = new MediaBuilder(res);
				const filteredCard = filteredMedia.getVideoCard();
				this.mediaContainer.appendChild(filteredCard);
			}
		});
	}

	onChangeFilter() {
		const filterWrapper = document.querySelector('.custom__options');

		filterWrapper.addEventListener('click', (e) => {
			switch (e.target.id) {
				case 'all':
					this.displayAll();
					break;
				case 'likes':
					this.filterByPopularity();
					break;
				case 'title':
					this.filterByTitle();
					break;
			}
		});

		filterWrapper.addEventListener('keypress', (e) => {
			switch (e.target.id) {
				case 'all':
					this.displayAll();
					break;
				case 'likes':
					this.filterByPopularity();
					break;
				case 'title':
					this.filterByTitle();
					break;
			}
		});
	}

	clearMedia() {
		this.mediaContainer.innerHTML = '';
	}
}
