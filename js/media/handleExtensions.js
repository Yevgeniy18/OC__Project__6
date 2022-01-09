// function handleExtensions(media) {
// 	// Media container

// 	const mediaSection = document.querySelector('.media__box');
// 	console.log(mediaSection);

// 	//EXTRACTING  PHTOOGRAPHER'S ID VALUE FROM HTML PATH
// 	const url = window.location.search;
// 	const params = new URLSearchParams(url);
// 	const idItem = params.get('id');
// 	const idValue = parseInt(idItem);

// 	const mediaList = media.filter((item) => item.photographerId === idValue);

// 	mediaList.forEach((item) => {
// 		if (item.image) {

// 			const imageData=
// 			`

// 			<img src ="${item.image}"  />
			
			
// 			`

// 			mediaSection.innerHTML = imageData


// 		} else if (item.video) {

// 			const videoData = 

// 			`
// 			<video src ="${item.video}"  controls />
			
			
// 			`

// 			mediaSection.innerHTML = videoData
// 		}
// 	});
// }
