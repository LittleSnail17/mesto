const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')
const profileEditButton = document.querySelector('.profile__edit-button')
const profileAddButton = document.querySelector('.profile__add-button')
const popupEditInfo = document.querySelector('.popup_edit-info')
const popupAddCard = document.querySelector('.popup_add-card')
const editCloseButton = document.querySelector('.popup__close-button_edit-info')
const addCloseButton = document.querySelector('.popup__close-button_add-card')
const popupSubmitButton = document.querySelector('.popup__submit')
const popupSubmitCard = document.querySelector('.popup__submit_card')
const addElement = document.querySelector('.popup__add-form')
const popupImage = document.querySelector('.popup_image')
const popupPhoto = document.querySelector('.popup__photo')
const popupCaption = document.querySelector('.popup__caption')
const cardCloseButton = document.querySelector('.popup__close-button_card')
const cardTemplate = document.querySelector('.template').content
const elements = document.querySelector('.elements')
const cardSubmit = document.querySelector('.popup__submit_card')
const elementInfo = document.querySelector('.element__title')
const infoInput = document.querySelector('.popup__input_type_info');
const imageInput = document.querySelector('.popup__input_type_image');

function openEditPopup(){
    popupEditInfo.classList.add('popup_opened');
}
profileEditButton.addEventListener('click', openEditPopup)

function openAddPopup(){
    popupAddCard.classList.add('popup_opened');
}
profileAddButton.addEventListener('click',openAddPopup)

function closePopup(){
    popupEditInfo.classList.remove('popup_opened');
    popupAddCard.classList.remove('popup_opened');
    popupImage.classList.remove('popup_opened');
}
editCloseButton.addEventListener('click',closePopup)
addCloseButton.addEventListener('click',closePopup)
cardCloseButton.addEventListener('click',closePopup)

function formSubmitHandler (evt) {
    evt.preventDefault(); 
   profileName.textContent = nameInput.value;
   profileText.textContent = jobInput.value;
   closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
popupSubmitButton.addEventListener('click', formSubmitHandler)

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

  initialCards.forEach(function renderCards(element) {
  const cards = cardTemplate.cloneNode(true);
  
  cards.querySelector('.element__photo').src = element.image;
  cards.querySelector('.element__title').textContent = element.info;
  setEventListeners(cards);
  elements.append(cards);
  });

function handleDelete(evt){
    evt.target.closest('.element').remove();
}

function handleLikeActive(evt){
    evt.target.classList.toggle('element__like-button_active');
}

function openImagePopup (evt){
    popupImage.classList.add('popup_opened');
    popupPhoto.src = evt.target.src;
    popupCaption.textContent = evt.target.parentElement.textContent;
}

function setEventListeners(cards) {
    const deleteButton = cards.querySelector('.element__delete');
    deleteButton.addEventListener('click',handleDelete);

    const likeButtonActive = cards.querySelector('.element__like-button');
    likeButtonActive.addEventListener('click',handleLikeActive);

    const elementImage = cards.querySelector('.element__photo')
    elementImage.addEventListener('click',openImagePopup)
}

  function renderCard (infoValue, imageValue) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.element__title').textContent = infoValue;
  newCard.querySelector('.element__photo').src = imageValue;
  setEventListenersCard(newCard);
  elements.prepend(newCard);
  }

  function addSubmitHandler (evt) {
    evt.preventDefault(); 

    renderCard(infoInput.value, imageInput.value);
    infoInput.value = '';
    imageInput.value ='';
   closePopup();
}  

addElement.addEventListener('submit', addSubmitHandler); 
popupSubmitCard.addEventListener('click', addSubmitHandler);

function setEventListenersCard(newCard){
    const deleteButton = newCard.querySelector('.element__delete');
    deleteButton.addEventListener('click',handleDelete);

    const likeButtonActive = newCard.querySelector('.element__like-button');
    likeButtonActive.addEventListener('click',handleLikeActive);

    const elementImage = newCard.querySelector('.element__photo')
    elementImage.addEventListener('click',openImagePopup)
}

