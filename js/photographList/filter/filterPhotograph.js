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
		this.tagsWrapper.querySelector('form').addEventListener('click', (e) => {
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
		<option value="portrait" tabindex="-1">#portrait</option>
		<option value="events" tabindex="-1">#events</option>
		<option value="travel" tabindex="-1">#travel</option>
		<option value="animals" tabindex="-1">#animals</option>
		<option value="sports" tabindex="-1">#sports</option>
		<option value="architecture" tabindex="-1">#architecture</option>
		<option value="fashion" tabindex="-1">#fashion</option>
		<option value="art" tabindex="-1">#art</option>
	  </form>
		`;

		this.tagsWrapper.innerHTML = tagForm;
		this.onClickFilter();

		this.tagsWrapper.appendChild(this.tagsSection);
	}
}
