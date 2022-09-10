import { cardPopupImage, cardPopupCaption } from "../utils/constants.js";
import Popup from "./Popup.js";

 export default class Card {
    constructor (data , templateSelector, handleCardClick, {handleDeleteCard, handleLikeCard}){
        this._image = data.image;
        this._name = data.name;
        this._cardId = data._id;
        this._likes = data.likes;
        this._ownerId = data.ownerId;
        this._userId = data.userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeCard = handleLikeCard;
    }

    _getTemplateCardElement(){
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    
        return cardElement;
         }

    generateCard() {
        this._element = this._getTemplateCardElement();
      
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementLikeButton = this._element.querySelector('.element__like-button');
        this._elementDeleteButton = this._element.querySelector('.element__delete');
        this._elementCounter = this._element.querySelector('.element__counter');
        this._elementPhoto.src = this._image;
        this._elementPhoto.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setCardEventListeners();
        this._checkOwnLike();
        this.setCounterLikes(this._likes);
        this._checkId();
      
        return this._element;
    }

    _checkId() {
          if (this._ownerId === this._userId) {
            this._elementDeleteButton.classList.remove('element__delete_hidden');
          }
        }
    
    isLiked() {
         return this._likes.some(item => item._id === this._userId)
    }

    _checkOwnLike() {
      if(this.isLiked()) {
        this.activationLike();
      } else {
        this.deActivationLike()};
  }
      
    activationLike() {
          this._elementLikeButton.classList.toggle('element__like-button_active');
        }
      
    deActivationLike() {
          this._elementLikeButton.classList.remove('element__like-button_active');
        }

    setCounterLikes(data) {
      this._likes = data;
      this._elementCounter.textContent = this._likes.length;
        }
    
    handleDelete(){
        this._element.remove();
        this._element = null;
    }

    _openCardPopup(){
       cardPopupImage.src = this._image;
       cardPopupImage.alt = this._name;
       cardPopupCaption.textContent = this._name;
       this._handleCardClick();
    }

    _setCardEventListeners() {

        this._elementLikeButton.addEventListener('click', () => { 
          this._handleLikeCard (this) ;
        });
    
        this._elementDeleteButton.addEventListener('click', () => {
           this._handleDeleteCard();
          });
    
        this._elementPhoto.addEventListener('click', () => {
            this._openCardPopup();
          });
    }


}
