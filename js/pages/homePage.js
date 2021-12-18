async function getPhotographers() {
	// Data retrieved from api
	const photographers = getPhotographerApi();

	// PHOTOGRAPH LIST
	return photographers;
}

async function displayData(photographers) {
	// PHOTOGRAPH SECTION DOM
	const photographContainer = document.querySelector('.photograph__list__section');

	// FILTER PHOTOGRAPHS BY TAGS
	const Filter = filterPhotograph(photographers);
	Filter.onClickFilter();

	// LIST ALL PHOTOGRAPHS
	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCard = photographerModel.getUserCardDom();
		photographContainer.appendChild(userCard);
	});
}

async function run() {
	const { photographers, media } = await getPhotographers();

	displayData(photographers, media);
}

run();
