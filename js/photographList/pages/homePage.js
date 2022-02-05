async function getPhotographers() {
	// Data from api
	const photographers = getPhotographerApi();
	return photographers;
}

async function displayData(photographers) {
	const photographContainer = document.querySelector('.photograph__list__section');

	// Tags filter
	new filterPhotograph(photographers).render();


	// Photographers list
	photographers.forEach((photographer) => {
		const photographerModel = new photographerFactory(photographer);
		const userCard = photographerModel.getUserCardDom();
		photographContainer.appendChild(userCard);
	});
}

async function run() {
	const { photographers, media } = await getPhotographers();
	displayData(photographers, media);
}

run();
