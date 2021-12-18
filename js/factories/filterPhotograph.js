function filterPhotograph(data) {
    
	//FILTERING BY TAGS
	const photographSection = document.querySelector('.photograph__list__section');

	function filterByTag(tag) {
		clearData();

		const photographers = data;

		if (!tag) {
			return photographers.forEach((photographer) => {
				const phTemplate = photographerFactory(photographer);
				const phCard = phTemplate.getUserCardDom();
				photographSection.appendChild(phCard);
			});
		} else {
			return photographers.filter((item) => item.tags.some((elt) => elt === tag)).forEach((photographer) => {
				const phTemplate = photographerFactory(photographer);
				const phCard = phTemplate.getUserCardDom();
				photographSection.appendChild(phCard);
			});
		}
	}

	//ADDING A LISTENER TO CLICK ACTION
	function onClickFilter() {
		const tags = document.querySelector('.tags__section');
		tags.addEventListener('click', function(e) {
			const tag = e.target.value;
			filterByTag(tag);
		});
	}

	// CLEARING EXISTING DATA
	function clearData() {
		document.querySelector('.photograph__list__section').innerHTML = '';
	}

	return { onClickFilter };
}
