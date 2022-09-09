
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
  export const profileAvatarButton = document.querySelector('.profile__avatar-button');
  export const buttonSubmit = document.querySelector('.popup__submit');
  export const avatarInput = document.querySelector('.popup__input_type_avatar');
  export const popupAvatarEditForm = document.querySelector('.popup_avatar');