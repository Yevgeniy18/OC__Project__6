function getExtraInfo(photographer, media) {
	const photograph = photographer;
	const mediaValue = media;
	const mediaList = [];

	//EXTRACTING ID VALUE

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

		//MATCHING THE ID FROM URL WITH OUR PHOTOGRAPHER's ID
		mediaValue.forEach((elt) => {
			if (elt.photographerId === idValue) {
				mediaList.push(elt);
			}
		});

		const total = mediaList.reduce(function(acc, currentValue) {
			return acc + currentValue.likes;
		}, 0);

		const totalLikes = `
		<p>${total}</p> <i class="fas fa-heart"></i>
        `;

		likesContainer.innerHTML = totalLikes;
	}

	// GETTING PRICE

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

		const priceInfo = `<p>${priceTag}€/Jour</p>`;

		price.innerHTML = priceInfo;
	}

	return { getTotalLikes, getPrice };
}
