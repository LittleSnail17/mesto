import './pages/index.css';
import Card from "./scripts/components/Card.js";
import { FormValidator} from './scripts/components/FormValidator.js';
import { initialCards, 
        config,
        profileEditButton,
        profileAddButton,
        profileName,
        profileText,
        infoInput,
        imageInput,
        popupEditProfileForm,
        nameInput,
        jobInput,
        popupAddCardForm,
        profileInputInfo,
        profileAvatarButton,
        buttonSubmit,
        avatarInput,
        popupAvatarEditForm

} from './scripts/utils/constants.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import { Section } from "./scripts/components/Sections.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import Api from './scripts/components/Api.js';

const api = new Api({
   url: "https://mesto.nomoreparties.co/v1/cohort-49",
   headers: {
     authorization: "20168423-882a-412d-8864-f3cea27a35e9",
     "Content-Type": "application/json",
   },
 });

const profileValidator = new FormValidator(config, popupEditProfileForm);
profileValidator.enableValidation();

const placeValidator = new FormValidator(config, popupAddCardForm);
placeValidator.enableValidation();

const avatarValidator = new FormValidator(config, popupAvatarEditForm);
avatarValidator.enableValidation();

//Тут все про редактирование информации Юзера

const userInfo = new UserInfo({nameSelector:'.profile__name', infoSelector:'.profile__text', avatarSelector:'.profile__avatar'});

const profileFormPopup = new PopupWithForm({handleSubmitForm: (data) => {
   api
   .editProfile(data)
       .then(() => {
         userInfo.setUserInfo(data.name, data.job);
         profileFormPopup.closePopup();
       })
       .catch(() => console.log('Не сложилось - не срослось, топай читать теорию спринт'))
       .finally(() => buttonSubmit.textContent = 'Сохранить');
      }, 
     popupSelector: '.popup_edit-info' });

profileFormPopup.setEventListeners();
profileEditButton.addEventListener('click',  () => {
   const {name, job } = userInfo.getUserInfo();
   nameInput.value = name;
   jobInput.value = job;
   profileFormPopup.openPopup();
});

const avatarFormPopup = new PopupWithForm({ handleSubmitForm: (data) => {
   api
   .getAvatar(data)
   .then(() => {
      userInfo.setUserAvatar(data.avatar);
      avatarFormPopup.closePopup();
   })
   .catch(() => console.log('Не сложилось - не срослось, топай читать теорию спринт'))
   .finally(() => buttonSubmit.textContent = 'Сохранить');
   }, popupSelector: '.popup_avatar' });

avatarFormPopup.setEventListeners();
profileAvatarButton.addEventListener('click', () => {
avatarFormPopup.openPopup();
})

//Тут все про карточки
function createCard(data) {
   const newCard = new Card(data, '.template', () => {
     placePopup.openPopup({ info: data.info, image: data.image })
 });
   const elementCard = newCard.generateCard()
   return elementCard 
}

function renderer(data) {
   const elementCard = createCard(data);
   cardSection.addItem(elementCard)
}

const cardSection = new Section({ items: initialCards, renderer }, '.elements');
cardSection.renderItems();

const placePopup = new PopupWithImage('.popup_open-card');
placePopup.setEventListeners();

const addSubmitHandler = function (data) {
   const newCard = {
      info: data.info,
      alt: data.info,
      image: data.image,
      };
    renderer(newCard);
}

const cardFormPopup = new PopupWithForm({ handleSubmitForm: addSubmitHandler, popupSelector: '.popup_add-card' });
cardFormPopup.setEventListeners();
profileAddButton.addEventListener('click', () => {
popupAddCardForm.reset(); 
placeValidator.resetValidation();
cardFormPopup.openPopup()});

