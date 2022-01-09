function filterMedia(media) {
	const mediaData = media;
	const mediaList = [];
	const mediaContainer = document.querySelector('.photograph__media');

	/**EXTRACTING THE ID FROM THE URL PATH*/
	const url = window.location.search;
	const params = new URLSearchParams(url);
	const idItem = params.get('id');
	const idValue = parseInt(idItem);

	// PUSHING THE MEDIA OBJECT VALUES TO THE LIST CORRESPONIND TO PHOTOGRAPHER'S ID

	for (let i = 0; i < mediaData.length; i++) {
		if (mediaData[i].photographerId === idValue) {
			mediaList.push(mediaData[i]);
		}
	}

	/**APPLYING FILTERS ON THE MEDIA DATA*/

	function displayAll() {
		clearMedia();

		mediaData.forEach((res) => {
			if (res.photographerId === idValue && res.image) {
				const filteredMedia = mediaFactory(res);
				const filteredCard = filteredMedia.getImageDom();
				mediaContainer.appendChild(filteredCard);
			} else if (res.photographerId === idValue && res.video) {
				const filteredMedia = mediaFactory(res);
				const filteredCard = filteredMedia.getVideoDom();
				mediaContainer.appendChild(filteredCard);
			}
		});
	}

	function filterByPopularity() {
		clearMedia();

		const result = mediaList.sort((a, b) => b.likes - a.likes);
		result.forEach((res) => {
			if (res.image) {
				const filteredMedia = mediaFactory(res);
				const filteredCard = filteredMedia.getImageDom();
				mediaContainer.appendChild(filteredCard);
			} else {
				const filteredMedia = mediaFactory(res);
				const filteredCard = filteredMedia.getVideoDom();
				mediaContainer.appendChild(filteredCard);
			}
		});
	}

	function filterByTitle() {
		clearMedia();

		const result = mediaList.sort(function(a, b) {
			let stringA = a.title.toUpperCase();
			let stringB = b.title.toUpperCase();
			return stringA < stringB ? -1 : stringA > stringB ? 1 : 0;
		});

		result.forEach((res) => {
			if (res.image) {
				const filteredMedia = mediaFactory(res);
				const filteredCard = filteredMedia.getImageDom();
				mediaContainer.appendChild(filteredCard);
			} else {
				const filteredMedia = mediaFactory(res);
				const filteredCard = filteredMedia.getVideoDom();
				mediaContainer.appendChild(filteredCard);
			}
		});
	}

	/**ON CHANGE FUNCTION***/

	function onChangeFilter() {
		const filterWrapper = document.querySelector('.custom__options');

		filterWrapper.addEventListener('click', (e) => {
			switch (e.target.id) {
				case 'all':
					displayAll();

					break;
				case 'likes':
					filterByPopularity();

					break;
				case 'title':
					filterByTitle();
					break;
			}
		});
	}

	function clearMedia() {
		mediaContainer.innerHTML = '';
	}

	return { onChangeFilter };
}
