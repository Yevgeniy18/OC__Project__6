class dropDown {
	constructor() {
		document.querySelector('.select__wrapper').addEventListener('click', function() {
			this.querySelector('.select').classList.toggle('open');
		});
	}

	selectedFilter() {
		for (const option of document.querySelectorAll('.custom__option')) {
			option.addEventListener('click', function() {
				if (!this.classList.contains('selected')) {
					this.parentNode.querySelector('.custom__option.selected').classList.remove('selected');
					this.classList.add('selected');
					this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
				}
			});
		}

		window.addEventListener('click', function(e) {
			const select = document.querySelector('.select');

			if (!select.contains(e.target)) {
				select.classList.remove('open');
			}
		});
	}
}


