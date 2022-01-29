class photographerFactory {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.city = data.city
		this.country = data.country;
		this.price = data.price;
		this.tagline = data.tagline;
		this.tags = data.tags;
		this.portrait = data.portrait;
		this.alt = data.alt;
	}

	getUserCardDom() {
		const photographCard = document.createElement('article');
		photographCard.classList.add('ph__card');
		const photographer = `
    <a tabindex="-1" href="photograph.html?id=${this.id}">
    <div class="ph__container__img">
    <img src="${this.portrait}" alt=${this.name}/>
    </div>

    <h1 class="ph__name">${this.name}</h1>
	</a>
    <div class="ph__location">
    <h3>${this.city}, ${this.country}</h3>
    </div>
    <p class="ph__tagline">${this.tagline}</p>
    <p class="ph__price">${this.price}€ /jour</p>
    <div class="ph__tags">
    ${this.tags
		.map((tag) => {
			return `<div>#${tag}</div>`;
		})
		.join(' ')}
    </div>

    `;
		photographCard.innerHTML = photographer;
		return photographCard;
	}
}

