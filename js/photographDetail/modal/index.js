// OPENING AND CLOSING CONTACT FORM

function handleModal() {
	const modal = document.querySelector('.bground__modal');
	const content = document.querySelector('.content__modal');

	modal.style.display = 'block';
	content.setAttribute('open-modal', true);
	content.removeAttribute('closed-modal');
	modal.setAttribute('open-bg', true);
	modal.removeAttribute('remove-bground');
	document.querySelector('.text__control').focus();
	document.onkeydown = function(e) {
		switch (e.key) {
			case 'Esc':
			case 'Escape':
				closeModal();
				break;
		}
	};
}

// VERFICFATION AND VALIDATION

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const emailField = document.getElementById('email');
const textField = document.getElementById('message');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('submit');
const inputFields = document.getElementsByClassName('text__control');

// Verfications Functions

const isRequired = (value) => {
	if (value === '') {
		return false;
	} else {
		return true;
	}
};

const isBetween = (length, min, max) => {
	if (length < min || length > max) {
		return false;
	} else {
		return true;
	}
};

const isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

// Verfifying Inputs

const checkFirstName = () => {
	let valid = false;

	let min = 2,
		max = 25;

	const firstNameValue = firstName.value.trim();

	let firstNameEl = document.getElementById('firstname');

	if (!isRequired(firstNameValue)) {
		firstNameEl.setAttribute('data-error', 'Ce champ ne peut pas etre vide !');
		firstNameEl.setAttribute('data-error-visible', true);
	} else if (!isBetween(firstNameValue.length, min, max)) {
		firstNameEl.setAttribute('data-error', 'ce champ doit contenir minimum 2 characteres !');
		firstNameEl.setAttribute('data-error-visible', true);
	} else {
		firstNameEl.removeAttribute('data-error');
		firstNameEl.setAttribute('data-error-visible', false);

		valid = true;
	}

	return valid;
};

const checkLastName = () => {
	let valid = false;
	let min = 2,
		max = 25;

	const lastNameValue = lastName.value.trim();
	let lastNameEl = document.getElementById('lastname');

	if (!isRequired(lastNameValue)) {
		lastNameEl.setAttribute('data-error', 'Ce champ ne peut pas etre vide !');
		lastNameEl.setAttribute('data-error-visible', true);
	} else if (!isBetween(lastNameValue.length, min, max)) {
		lastNameEl.setAttribute('data-error', 'ce champ doit contenir minimum 2 characteres !');
		lastNameEl.setAttribute('data-error-visible', true);
	} else {
		lastNameEl.removeAttribute('data-error');
		lastNameEl.setAttribute('data-error-visible', false);

		valid = true;
	}

	return valid;
};

const checkEmail = () => {
	let valid = false;

	const emailValue = emailField.value.trim();

	let emailEl = document.getElementById('email-data');

	if (!isRequired(emailValue)) {
		emailEl.setAttribute('data-error', 'Ce champ ne peut pas etre vide !');
		emailEl.setAttribute('data-error-visible', true);
	} else if (!isEmailValid(emailValue)) {
		emailEl.setAttribute('data-error', 'Veuillez entrer un format correct!');
		emailEl.setAttribute('data-error-visible', true);
	} else {
		emailEl.removeAttribute('data-error');
		emailEl.setAttribute('data-error-visible', false);

		valid = true;
	}

	return valid;
};

const checkText = () => {
	let valid = false;
	const textValue = textField.value.trim();
	let messageEl = document.getElementById('message-data');

	if (!isRequired(textValue)) {
		messageEl.setAttribute('data-error', 'Ce champ ne peut pas etre vide !');
		messageEl.setAttribute('data-error-visible', true);
	} else {
		messageEl.removeAttribute('data-error');
		messageEl.setAttribute('data-error-visible', false);

		valid = true;
	}
	return valid;
};

submitBtn.addEventListener('submit', function(e) {
	e.preventDefault();

	let firstNameValid = checkFirstName(),
		lastNameValid = checkLastName(),
		emailValid = checkEmail(),
		textValid = checkText();

	let isFormValid = firstNameValid && lastNameValid && emailValid && textValid;

	if (isFormValid) {
		form.style.display = 'none';

		const msg = document.getElementById('confirmation__msg');
		msg.textContent = 'Votre message est bien reçu ! ';
		msg.style.color = 'black';
		msg.alignText = 'center';
	}
});

// PROVIDING INSTANT FEEDBZCK ON ERRORS

form.addEventListener('input', function(e) {
	switch (e.target.name) {
		case 'first':
			checkFirstName();
			break;
		case 'last':
			checkLastName();
			break;
		case 'email':
			checkEmail();
			break;
		case 'message':
			checkText();
			break;
	}
});

// DISABLING BTN WHILE FIELFS NOT FILLED

let btnSubmit = document.getElementById('btn');
let inputs = document.querySelectorAll('.text__control');

const disableBtn = () => {
	for (let elt of inputs) {
		if (elt.value == '') {
			btnSubmit.disabled = true;
			btnSubmit.style.background = 'gray';
		} else {
			btnSubmit.disabled = false;
			btnSubmit.style.background = '#901c1c';
		}
	}
};

for (let input of inputs) {
	input.addEventListener('input', disableBtn);
}

disableBtn();

function closeModal() {
	const modal = document.querySelector('.bground__modal');
	modal.style.display = 'none';
}
