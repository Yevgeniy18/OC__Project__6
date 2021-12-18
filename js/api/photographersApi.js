async function getPhotographerApi() {
	let url = './data/photographers.json';
	let response = await fetch(url);
	let data = await response.json();

	const photographerData = [ ...data.photographers ];
	const mediaData = [ ...data.media ];

	return {
		photographers: photographerData,
		media: mediaData
	};
}
