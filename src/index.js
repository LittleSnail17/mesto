import './pages/index.css';
import Card from "./scripts/components/Card.js";
import { FormValidator} from './scripts/components/FormValidator.js';
import { 
        config,
        profileEditButton,
        profileAddButton,
        popupEditProfileForm,
        nameInput,
        jobInput,
        popupAddCardForm,
        profileAvatarButton,
        popupAvatarEditForm

} from './scripts/utils/constants.js';
import { UserInfo } from './scripts/components/UserInfo.js';
import { Section } from "./scripts/components/Sections.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import Api from './scripts/components/Api.js';
import PopupWithRemove from './scripts/components/PopupWithRemove.js';

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
   profileFormPopup.setTextButton('Сохранение...');
   api
   .editProfile(data)
       .then(() => {
         userInfo.setUserInfo(data.name, data.about) 
         profileFormPopup.closePopup();
       })
       .catch(() => console.log('Не сложилось - не срослось, топай читать теорию спринт'))
       .finally(() => profileFormPopup.setTextButton('Сохранить'));
      }, 
     popupSelector: '.popup_edit-info' });

profileFormPopup.setEventListeners();
profileEditButton.addEventListener('click',  () => {
   const {name, about } = userInfo.getUserInfo();
   nameInput.value = name;
   jobInput.value = about;
   profileFormPopup.openPopup();
});

const avatarFormPopup = new PopupWithForm({ handleSubmitForm: (data) => {
   avatarFormPopup.setTextButton('Сохранение...');
   api
   .getAvatar(data)
   .then(() => {
      userInfo.setUserAvatar(data.avatar);
      avatarFormPopup.closePopup();
   })
   .catch(() => console.log('Не сложилось - не срослось, топай читать теорию спринт'))
   .finally(() => avatarFormPopup.setTextButton('Сохранить'));
   }, popupSelector: '.popup_avatar' });

avatarFormPopup.setEventListeners();
profileAvatarButton.addEventListener('click', () => {
avatarValidator.resetValidation();
avatarFormPopup.openPopup();
})


//Тут все про карточки

function createCard(item) {
   const newCard = new Card({info:item.name, image:item.link, likes:item.likes, _id:item._id, userId: item.userId, ownerId:item.ownerId}, '.template', () => {
   placePopup.openPopup({ info:item.name, image:item.link })},

   {handleLikeCard: (newCard) => {
   if(!newCard.isLiked()){
      api
      .addLike(item._id)
      .then((item) => {
       newCard.activationLike();
       newCard.setCounterLikes(item.likes);
      })
      .catch((err) => {console.log(err);})
   
   }else{
      api
      .deleteLike(item._id)
      .then((item) =>{
         newCard.deActivationLike();
         newCard.setCounterLikes(item.likes);
      })
      .catch((err) => {console.log(err);})
   }},

   handleDeleteCard: () => {
      popupDeleteCard.openPopup();
      popupDeleteCard.handleSubmitHandler(() => {
          api.deleteCard(item._id)
              .then(() => {
                  newCard.handleDelete();
                  popupDeleteCard.closePopup();
              })
              .catch((err) => {
                  console.log(err);
              })
      })
  },

});
       
   const elementCard = newCard.generateCard();
   return elementCard 
};

const cardSection = new Section(   { items: [],
   renderer: (item) => {
     const cardElement = createCard(item);
     cardSection.addItem(cardElement); //принимает DOM-элемент и добавляет его в контейнер
   },
 },'.elements');

const placePopup = new PopupWithImage('.popup_open-card');
placePopup.setEventListeners();

const cardFormPopup = new PopupWithForm({ handleSubmitForm: async (data) => {
   cardFormPopup.setTextButton('Сохранение...');
   const card = await api.getNewCard(data)
   .then(() => {
      cardSection.addItem(createCard(card));
      cardFormPopup.closePopup();
   })
   .catch((err) => {
      console.log(err);
    })
   .finally(() => cardFormPopup.setTextButton('Создать'));


}, popupSelector: '.popup_add-card' });
cardFormPopup.setEventListeners();
profileAddButton.addEventListener('click', () => {
popupAddCardForm.reset(); 
placeValidator.resetValidation();
cardFormPopup.openPopup()});

let userId;

api
  .getAllData()
  .then(([user, data]) => {
    userId = user._id;
    console.log(user)
    userInfo.setUserInfo( user.name, user.about, userId );
    console.log(userInfo.getUserInfo())
    userInfo.setUserAvatar( user.avatar );

    data.forEach((item) => {
      cardSection.appendItem(
        createCard({
          name: item.name,
          link: item.link,
          likes: item.likes,
          _id: item._id,
          userId: userId,
          ownerId: item.owner._id,
        })
      );
    });
  })
  .catch((err) => {
   console.log(err);
 })

 const popupDeleteCard = new PopupWithRemove('.popup_delete', {
   handleSubmit: (data) => {
       api.deleteCard(data)
           .then(() => {
               popupDeleteCard.closePopup();
           })
           .catch((err) => {
               console.log(err);
           })
   }
});

popupDeleteCard.setEventListeners();