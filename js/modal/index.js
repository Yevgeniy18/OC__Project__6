// OPENING AND CLOSING CONTACT FORM

function handleModal() {
	const formSection = document.querySelector('.modal')
	console.log(formSection)
	const modal = document.querySelector('.bground__modal');
	const content = document.querySelector('.content__modal');

	modal.style.display = 'block';
	content.setAttribute('open-modal', true);
	content.removeAttribute('closed-modal');
	modal.setAttribute('open-bg', true);
	modal.removeAttribute('remove-bground');

}

function closeModal() {
	const modal = document.querySelector('.bground__modal');

	// const content = document.querySelector('.content__modal');

	// content.setAttribute('closed-modal', true);
	// content.removeAttribute('open-modal');
	modal.style.display = 'none';
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

	if (!isRequired(firstNameValue)) {
		firstName.setAttribute('data-error-visible', true)
	
	
	} else if (!isBetween(firstNameValue.length, min, max)) {
		firstName.setAttribute('data-error-visible', true)
	

	} else {
		firstName.setAttribute('data-error-visible', false)

		valid = true;
	}

	return valid;
};

const checkLastName = () => {
	let valid = false;
	let min = 2,
		max = 25;

	const lastNameValue = lastName.value.trim();

	if (!isRequired(lastNameValue)) {
		lastName.setAttribute('data-error-visible', true)

	
	} else if (!isBetween(lastNameValue.length, min, max)) {
		lastName.setAttribute('data-error-visible', true)

	
	} else {

		lastName.setAttribute('data-error-visible', false)

		valid = true;
	}

	return valid;
};

const checkEmail = () => {
	let valid = false;

	const emailValue = emailField.value.trim();

	if (!isRequired(emailValue)) {
		emailField.setAttribute('data-error-visible', true)

	} else if (!isEmailValid(emailValue)) {
		emailField.setAttribute('data-error-visible', true)

	} else {
		emailField.setAttribute('data-error-visible', false)
		
		valid = true;
	}

	return valid;
};

const checkText = () => {
	let valid = false
	const textValue =textField.value.trim()

	if (!isRequired(textValue)){
		textField.setAttribute('data-error-visible', true)

	} else{
		textField.setAttribute('data-error-visible', false)

		valid = true
	}
	return valid
}

submitBtn.addEventListener('submit', function(e) {
	e.preventDefault();

	let firstNameValid = checkFirstName(),
		lastNameValid = checkLastName(),
		emailValid = checkEmail(), 
		textValid = checkText()

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

form.addEventListener("input", function(e){

	switch(e.target.name){
		case "first":
			checkFirstName()
			break
		case "last":
			checkLastName()
			break
		case "email":
			checkEmail()
			break
		case "message":
			checkText()
			break


	}
})



// DISABLING BTN WHILE FIELFS NOT FILLED

let btnSubmit = document.getElementById('btn');
let inputs = document.querySelectorAll(".text__control");

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
