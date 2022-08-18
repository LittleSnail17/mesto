import Card from "./card.js";
import { config, FormValidator} from './FormValidator.js';

const popupEditProfileForm = document.querySelector('.popup__edit-form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')
const profileEditButton = document.querySelector('.profile__edit-button')
const profileAddButton = document.querySelector('.profile__add-button')
const popupEditInfo = document.querySelector('.popup_edit-info')
const popupAddCard = document.querySelector('.popup_add-card')
const popupEditInfoCloseButton = document.querySelector('.popup__close-button_edit-info')
const popupAddCardCloseButton = document.querySelector('.popup__close-button_add-card')
const popupAddCardForm = document.querySelector('.popup__add-form')
const popupOpenCard = document.querySelector('.popup_open-card')
const popupCardCloseButton = document.querySelector('.popup__close-button_card')
const elements = document.querySelector('.elements')
const infoInput = document.querySelector('.popup__input_type_info');
const imageInput = document.querySelector('.popup__input_type_image');
const esc = 'Escape';
const cardAddSubmit = document.querySelector('.popup__submit_card');
const popupAll = Array.from(document.querySelectorAll('.popup'));

function closePopupKeyDown(evt) {
    if (evt.key === esc){
        closePopup(document.querySelector('.popup_opened'));
    }
};

popupAll.forEach((popup) =>{
    popup.addEventListener('mousdown', (evt) => {
     if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')){
       closePopup(evt.target);
       };
    });
 });

export function openPopup(popup) {
   popup.classList.add('popup_opened');
   document.addEventListener('keydown', closePopupKeyDown);
}

profileEditButton.addEventListener('click', function(){
   openPopup(popupEditInfo);
});

profileAddButton.addEventListener('click', function() {
   openPopup(popupAddCard);
});

function closePopup(popup){
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', closePopupKeyDown);
}

popupEditInfoCloseButton.addEventListener('click', function(){
   closePopup(popupEditInfo);
});

popupAddCardCloseButton.addEventListener('click', function() {
   closePopup(popupAddCard);
});

popupCardCloseButton.addEventListener('click', function() {
   closePopup(popupOpenCard);
});

function submitEditFormHandler (evt) {
   evt.preventDefault();

   profileName.textContent = nameInput.value;
   profileText.textContent = jobInput.value;

   closePopup(popupEditInfo);
}

popupEditProfileForm.addEventListener('submit', submitEditFormHandler); 

const initialCards = [
    {
      info: 'Архыз',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      info: 'Челябинская область',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      info: 'Иваново',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      info: 'Камчатка',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      info: 'Холмогорский район',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      info: 'Байкал',
      image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


const profileValidator = new FormValidator(config, popupEditProfileForm);
profileValidator.enableValidation();

const placeValidator = new FormValidator(config, popupAddCardForm);
placeValidator.enableValidation();

initialCards.forEach(function (initialCards) { 
    const card = createCard(initialCards); 
    insertCard(card); 
});

function insertCard(data) {
    elements.prepend(data); 
}

function createCard(data) {
    const newCard = new Card(data, '.template') 
    const elementCard = newCard.generateCard()
    return elementCard 
}
function createNewCard() {
    const newCard = {
    info: infoInput.value,
    alt: infoInput.value,
    image: imageInput.value
    };
  return newCard;
};

function addSubmitHandler (evt) {
    evt.preventDefault();
    const elementCard = createCard(createNewCard());
    insertCard(elementCard);
    
    closePopup(popupAddCard); 
    
    popupAddCardForm.reset(); 
    placeValidator.resetValidation()
}  

popupAddCardForm.addEventListener('submit', addSubmitHandler); 