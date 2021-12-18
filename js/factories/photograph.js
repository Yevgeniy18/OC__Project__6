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

    <h3>${name}</h3>
    <div class="ph__location">
    <h2>${city},${country}</h2>
    </div>
    <p>${tagline}</p>
    <p>${price}€/hour</p>
    <div class="ph__tags">
    ${tags.map((tag) => {
      return `<div>${tag.replace(",", " ")}</div>`;
    })}
    </div>
    `;
    photographCard.innerHTML = photographer;
    return photographCard;
  }

  return { getUserCardDom };
}
