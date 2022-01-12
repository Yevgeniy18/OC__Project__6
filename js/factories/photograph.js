function photographerFactory(data) {
  const { id, name, city, country, price, tagline, tags, portrait } = data;

  function getUserCardDom() {
    const photographCard = document.createElement("article");
    photographCard.classList.add("ph__card");
    const photographer = `
    <a href="photograph.html?id=${id}">
    <div class="ph__container__img">
    <img src="${portrait}"/>
    </div>
    </a>

    <h1 class="ph__name">${name}</h1>
    <div class="ph__location">
    <h3>${city}, ${country}</h3>
    </div>
    <p class="ph__tagline">${tagline}</p>
    <p class="ph__price">${price}€ /jour</p>
    <div class="ph__tags">
    ${tags.map((tag) => {
      return `<div>#${tag}</div>`;
    })}
    </div>
    `;
    photographCard.innerHTML = photographer;
    return photographCard;
  }

  return { getUserCardDom };
}
