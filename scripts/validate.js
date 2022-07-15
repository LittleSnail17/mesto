
const formAddCard = document.querySelector('.popup__add-form')
const formUser = document.querySelector('.popup__edit-form')

formUser.addEventListener('submit',sendForm)
formUser.addEventListener('input',handlerInputForm)

formAddCard.addEventListener('submit',sendForm)
formAddCard.addEventListener('input',handlerInputForm)

validateForm(formUser);
validateForm(formAddCard);

function sendForm (evt){
    evt.preventDefault();
    const form = evt.target;
}

function handlerInputForm(evt) {
    const currentform = evt.currentTarget;

    validateForm(currentform);
    validateInput(evt.target);
}

function validateForm(form){
    const submitButton = form.querySelector('.popup__submit')

if (form.checkValidity()) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.add('popup__submit_valid')
    submitButton.classList.remove('popup__submit_disabled');
} else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.remove('popup__submit_valid')
    submitButton.classList.add('popup__submit_disabled');
}
}

function validateInput(input){
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`)
    input.classList.add('popup__input-type-error')
    errorElement.textContent = input.validationMessage;
}
