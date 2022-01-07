function photographDetail(data, media) {
	const photographers = data;
	const mediaList = media;

	const headerDetailSection = document.querySelector('.photograph__header');
	const mediaSectionContainer = document.querySelector('.photograph__media');

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
                <h1>${photographersData.name}</h1>
                <div class="header__location">
                <p>${photographersData.city}, ${photographersData.country} </p>
                </div>
                <p class="header__tagline">${photographersData.tagline}</p>
                 </div>
                 <div class="photograph__contact__form" onclick=handleModal()>
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
		mediaList.forEach((media) => {
			if (media.photographerId === idValue && media.image) {
				const mediaTemplateItem = mediaFactory(media);
				const imageCard = mediaTemplateItem.getImageDom();
				mediaSectionContainer.appendChild(imageCard);
			}
			 else if (media.photographerId === idValue && media.video){
				 const mediaTemplateItem = mediaFactory(media)
				 const videoCard = mediaTemplateItem.getVideoDom()
				 mediaSectionContainer.appendChild(videoCard)
			 }
		});
	}

	return { getPhotographDetails, getPhotographMedia };
}
