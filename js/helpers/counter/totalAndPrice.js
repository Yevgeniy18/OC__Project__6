function getExtraInfo(photographer, media) {
	const photograph = photographer;
	const mediaValue = media;

    const url = window.location.search;
	const params = new URLSearchParams(url);
	const idItem = params.get('id');
	const idValue = parseInt(idItem);

    for (let i =0; i<mediaValue.length; i++){
        if(mediaValue[i] === idValue){
            const mediaData = mediaValue[i]
            console.log(mediaData)
        }
    }


	function getTotalLikes() {
		const counter = document.querySelector('.counter__bg');
		const likesContainer = document.createElement('div');
		likesContainer.classList.add('likes__tag');
		counter.appendChild(likesContainer);

		const total = Object.values(mediaValue).reduce((acc, { likes }) => acc + likes, 0);

		const totalLikes = `

        ${total} <i class="fas fa-heart"></i>
     
    
        `;

		likesContainer.innerHTML = totalLikes;
	}

	function getPrice() {
		const counter = document.querySelector('.counter__bg');
		const price = document.createElement('div');
		price.classList.add('price__tag');
		counter.appendChild(price);
	}

	return { getTotalLikes, getPrice };
}
