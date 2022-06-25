const formElement = document.querySelector('.popup__input')
const nameInput = document.querySelector('.popup__input-text_name')
const jobInput = document.querySelector('.popup__input-text_job')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')

function formSubmitHandler (evt) {
    evt.preventDefault(); 
   profileName.textContent = nameInput.value;
   profileText.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 


const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')

function openPopup(event){
    popup.classList.add('popup__opened')
}

profileEditButton.addEventListener('click', openPopup)

function closePopup(event){
    popup.classList.remove('popup__opened')
}

popupCloseButton.addEventListener('click', closePopup)

// Находим форму в DOM
const popupSubmitButton = document.querySelector('.popup__submit')
popupSubmitButton.addEventListener('click', formSubmitHandler)
popupSubmitButton.addEventListener('click', closePopup)
