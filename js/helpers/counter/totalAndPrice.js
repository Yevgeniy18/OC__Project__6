function getExtraInfo(photographer, media) {
	const photograph = photographer;

	//EXTRACTING  PHTOOGRAPHER'S ID VALUE FROM HTML PATH
	const url = window.location.search;
	const params = new URLSearchParams(url);
	const idItem = params.get('id');
	const idValue = parseInt(idItem);

	//GETTIING TOTAL AMOUNT OF LIKES

	function getTotalLikes() {
		const counter = document.querySelector('.counter__bg');
		const likesContainer = document.createElement('div');
		likesContainer.classList.add('likes__tag');
		counter.appendChild(likesContainer);

		// FILTERING PHOTOGRAPHERS ACCORDING TO THEIR ID BY CREATING A FILTERED ARRAY OF OBJETCS

		let phMedia = media.filter((element) => element.photographerId === idValue);

		let total = phMedia.reduce(function(acc, curr) {
			return acc + curr.likes;
		}, 0);

		// SETTING UP HTML

		const totalLikes = `
		<p id="sum" class ="sum__likes">${total} </p> <i class="fas fa-heart"></i>
		`;

		likesContainer.innerHTML = totalLikes;

		return likesContainer;
	}

	// GETTING  PHOTOGRAPHER HOURLY PRICE

	function getPrice() {
		const counter = document.querySelector('.counter__bg');
		const price = document.createElement('div');
		price.classList.add('price__tag');
		counter.appendChild(price);

		let priceTag;

		photograph.forEach((elt) => {
			if (elt.id === idValue) {
				priceTag = elt.price;
			}
		});

		const priceInfo = `<p>${priceTag}€ / Jour</p>`;

		price.innerHTML = priceInfo;
	}

	return { getPrice, getTotalLikes };
}
