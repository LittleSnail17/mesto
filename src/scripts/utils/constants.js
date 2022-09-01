export const initialCards = [
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

  export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input-type-error',
    errorClass: 'popup__input-form-error',
  }

  export const cardPopup = document.querySelector('.popup_open-card');
  export const cardPopupImage = cardPopup.querySelector('.popup__photo');
  export const cardPopupCaption = cardPopup.querySelector('.popup__caption');
  export const popupEditProfileForm = document.querySelector('.popup__edit-form');
  export const nameInput = document.querySelector('.popup__input_type_name');
  export const jobInput = document.querySelector('.popup__input_type_job');
  export const profileName = document.querySelector('.profile__name');
  export const profileText = document.querySelector('.profile__text');
  export const profileEditButton = document.querySelector('.profile__edit-button');
  export const profileAddButton = document.querySelector('.profile__add-button');
  export const popupEditInfo = document.querySelector('.popup_edit-info');
  const popupAddCard = document.querySelector('.popup_add-card');
  const popupEditInfoCloseButton = document.querySelector('.popup__close-button_edit-info');
  const popupAddCardCloseButton = document.querySelector('.popup__close-button_add-card');
  export const popupAddCardForm = document.querySelector('.popup__add-form');
  export const popupOpenCard = document.querySelector('.popup_open-card');
  const popupCardCloseButton = document.querySelector('.popup__close-button_card');
  const elements = document.querySelector('.elements');
  export const infoInput = document.querySelector('.popup__input_type_info');
  export const imageInput = document.querySelector('.popup__input_type_image');
  export const esc = 'Escape';