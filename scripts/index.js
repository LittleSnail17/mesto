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
const popupOpenCardPhoto = document.querySelector('.popup__photo')
const popupOpenCardCaption = document.querySelector('.popup__caption')
const popupCardCloseButton = document.querySelector('.popup__close-button_card')
const cardTemplate = document.querySelector('.template').content.firstElementChild
const elements = document.querySelector('.elements')
const elementInfo = document.querySelector('.element__title')
const infoInput = document.querySelector('.popup__input_type_info');
const imageInput = document.querySelector('.popup__input_type_image');
const esc = 'Escape';
const cardAddSubmit = document.querySelector('.popup__submit_card')
const infoEditSubmit = document.querySelector('.popup__submit_info')
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

function openPopup(popup) {
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

function createCard (infoValue, imageValue) {
    const newCard = cardTemplate.cloneNode(true);

    newCard.querySelector('.element__title').textContent = infoValue;
    newCard.querySelector('.element__photo').src = imageValue;
    setCardEventListeners(newCard);

    return newCard;
}

function renderCard(infoValue, imageValue) {
    const newCard= createCard(infoValue, imageValue);
    elements.prepend(newCard);
}

function addSubmitHandler (evt) {
    evt.preventDefault();

    renderCard(infoInput.value, imageInput.value);

    closePopup(popupAddCard);

    infoInput.value = '';
    imageInput.value ='';
    
    cardAddSubmit.setAttribute('disabled', true);
    cardAddSubmit.classList.add('popup__submit_disabled');  
}  

popupAddCardForm.addEventListener('submit', addSubmitHandler); 

initialCards.forEach(function (initialCards) {
    renderCard(initialCards.info, initialCards.image);
});

function handleDelete(evt){
    evt.target.closest('.element').remove();
}
    
function handleLikeActive(evt){
    evt.target.classList.toggle('element__like-button_active');
}
    
function openCardPopup (evt){
    openPopup(popupOpenCard);

    popupOpenCardPhoto.src = evt.target.src;
    popupOpenCardCaption.textContent = evt.target.parentElement.textContent;
}

function setCardEventListeners(newCard){
    const deleteButton = newCard.querySelector('.element__delete');
    deleteButton.addEventListener('click', handleDelete);

    const likeButtonActive = newCard.querySelector('.element__like-button');
    likeButtonActive.addEventListener('click', handleLikeActive);

    const elementImage = newCard.querySelector('.element__photo')
    elementImage.addEventListener('click', openCardPopup)
}