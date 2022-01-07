function incrementLikes(likes, id) {
	let incResult = document.getElementById(id);
	let sumSection = document.getElementById('sum');

	incResult.innerHTML = parseInt(incResult.innerHTML) + 1;
	sumSection.innerHTML = parseInt(sumSection.innerHTML) + 1;
}
