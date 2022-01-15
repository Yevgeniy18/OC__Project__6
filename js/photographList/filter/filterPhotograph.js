class filterPhotograph {
	constructor(data) {
		this.photographers = data;
		this.photographSection = document.querySelector('.photograph__list__section');
		this.tagsWrapper = document.querySelector('.tags__area');
		this.tagsSection = document.createElement('div');
	}

	filterByTags(tag) {
		this.clearData();

		if (!tag) {
			return this.photographers.forEach((photographer) => {
				const phTemplate = new photographerFactory(photographer);
				const phCard = phTemplate.getUserCardDom();
				this.photographSection.appendChild(phCard);
			});
		} else {
			return this.photographers.filter((item) => item.tags.some((elt) => elt === tag)).forEach((photographer) => {
				const phTemplate = new photographerFactory(photographer);
				const phCard = phTemplate.getUserCardDom();
				this.photographSection.appendChild(phCard);
			});
		}
	}

	onClickFilter() {
		this.tagsSection.querySelector('form').addEventListener('click', (e) => {
			const tag = e.target.value;
			this.filterByTags(tag);
		});
	}

	clearData() {
		this.photographSection.innerHTML = '';
	}

	render() {
		const tagForm = `
		<form class="tags__section" action="#" method="POST" role="select-filter">
		<option value="portrait">#portrait</option>
		<option value="events">#events</option>
		<option value="travel">#travel</option>
		<option value="animals">#animals</option>
		<option value="sports">#sports</option>
		<option value="architecture">#architecture</option>
		<option value="fashion">#fashion</option>
		<option value="art">#art</option>
	  </form>
		`;

		this.tagsSection.innerHTML = tagForm;
		this.onClickFilter();

		this.tagsWrapper.appendChild(this.tagsSection);
	}
}

// function filterPhotograph(data) {

// 	//FILTERING BY TAGS
// 	const photographSection = document.querySelector('.photograph__list__section');

// 	function filterByTag(tag) {
// 		clearData();

// 		const photographers = data;

// 		if (!tag) {
// 			return photographers.forEach((photographer) => {
// 				const phTemplate = photographerFactory(photographer);
// 				const phCard = phTemplate.getUserCardDom();
// 				photographSection.appendChild(phCard);
// 			});
// 		} else {
// 			return photographers.filter((item) => item.tags.some((elt) => elt === tag)).forEach((photographer) => {
// 				const phTemplate =  new photographerFactory(photographer);
// 				const phCard = phTemplate.getUserCardDom();
// 				photographSection.appendChild(phCard);
// 			});
// 		}
// 	}

// 	//ADDING A LISTENER TO CLICK ACTION
// 	function onClickFilter() {
// 		const tags = document.querySelector('.tags__section');
// 		tags.addEventListener('click', function(e) {
// 			const tag = e.target.value;
// 			filterByTag(tag);
// 		});
// 	}

// 	// CLEARING EXISTING DATA
// 	function clearData() {
// 		document.querySelector('.photograph__list__section').innerHTML = '';
// 	}

// 	return { onClickFilter };
// }
