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
        profileInputInfo

} from './scripts/utils/constants.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import { Section } from "./scripts/components/Sections.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";

const profileValidator = new FormValidator(config, popupEditProfileForm);
profileValidator.enableValidation();

const placeValidator = new FormValidator(config, popupAddCardForm);
placeValidator.enableValidation();

const userInfo = new UserInfo({nameSelector:'.profile__name', infoSelector:'.profile__text'});

const profileFormPopup = new PopupWithForm({ handleSubmitForm: (data) => {
   userInfo.setUserInfo(
     data.name,
     data.job);}, 
     popupSelector: '.popup_edit-info' });

profileFormPopup.setEventListeners();
profileEditButton.addEventListener('click',  () => {
   const {name, job } = userInfo.getUserInfo();
   nameInput.value = name;
   jobInput.value = job;
   profileFormPopup.openPopup();
});
  
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


