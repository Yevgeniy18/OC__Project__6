function photographDetail(data, media) {
	const photographers = data;
	const mediaList = media;

	const headerDetailSection = document.querySelector('.photograph__header');
	const mediaSectionContainer = document.querySelector('.photograph__media');
	const counterSection = document.querySelector('.counter__bg')

	// Getting url info
	/**EXTRACTING THE ID FROM THE URL PATH*/
	const url = window.location.search;
	const params = new URLSearchParams(url);
	const idItem = params.get('id');
	const idValue = parseInt(idItem);

	function getPhotographDetails() {
		/***ITERATING THE PHOTOGRAPHERS OBJECT AND VERIFYING IF THE ID PASSED AS THE PARAMETER MATCHES THE ID FOUND IN THE OBJECT****/
		for (let i = 0; i < photographers.length; i++) {
			if (photographers[i].id === idValue) {
				const photographersData = photographers[i];
				/*****BUILDING THE APPROPRIATE HTML TEMPLATE*****/
				const header = `
                <div class="header__basic">
                <h2>${photographersData.name}</h2>
                <div class="header__location">
                <p>${photographersData.city}, ${photographersData.country} </p>
                </div>
                <p class="header__tagline">${photographersData.tagline}</p>
                 </div>
                 <div class="photograph__contact__form">
                 Contactez-moi
               </div>
               <div class="header__img">
               <img src="${photographersData.portrait}" />
               </div>
                `;

		

				/***ASSIGNING IT TO THE PREVIOUSLY CLEARED PHOTOGRAPH SECTION****/
				headerDetailSection.innerHTML = header;
				
			}
		}
	}

	function getPhotographMedia() {
		mediaList.forEach((element) => {
			if (element.photographerId === idValue) {
				const mediaTemplateItem = mediaFactory(element);
				const mediaCard = mediaTemplateItem.getMediaDom();
				mediaSectionContainer.appendChild(mediaCard);
			}
		});
	}

	return { getPhotographDetails, getPhotographMedia };
}
