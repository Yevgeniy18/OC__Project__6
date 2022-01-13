async function getMedia() {
	const media = getPhotographerApi();
	return media;
}

async function displayMedia(photographers, media) {
	const photographDetails = photographDetail(photographers, media);
	photographDetails.getPhotographDetails();
	photographDetails.getPhotographMedia();
	photographDetails.getPhotographMediaLightBox();

	//GETTING NUMBER OF LIKES AND PRICE PER MEDIA
	const Price = getExtraInfo(photographers, media);
	Price.getPrice();
	Price.getTotalLikes();

	//FILTER MEDIA BY POPULAITY OR DATE
	const Filter = filterMedia(media);
	Filter.onChangeFilter();

	const phDataModal = getModalData(photographers);
	phDataModal.getPhName();

	// DROPDOWN MENU FOR FILTER PURPOSE
	dropDown();
}

async function run() {
	const { photographers, media } = await getMedia();
	displayMedia(photographers, media);
}

run();
