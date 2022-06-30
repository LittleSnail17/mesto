const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupSubmitButton = document.querySelector('.popup__submit')

function formSubmitHandler (evt) {
    evt.preventDefault(); 
   profileName.textContent = nameInput.value;
   profileText.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
popupSubmitButton.addEventListener('click', formSubmitHandler)

function openPopup(){
    popup.classList.add('popup_opened')
}
profileEditButton.addEventListener('click', openPopup)

function closePopup(evt){
    popup.classList.remove('popup_opened')
}
popupCloseButton.addEventListener('click', closePopup)


