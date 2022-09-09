import { cardPopupImage, cardPopupCaption } from "../utils/constants.js";
import Popup from "./Popup.js";

 export default class Card {
    constructor (data , templateSelector, handleCardClick, handleDeleteClick, handleAddLike, handleDeleteLike){
        this._image = data.image;
        this._info = data.info;
        this._cardId = data._id;
        this._likes = data.likes;
        this._ownerId = data.owner_id;
        this._userId = data.userId;
        this._templateSelector = templateSelector;
        this._element = this._getTemplateCardElement();
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleAddLike = handleAddLike;
        this._handleDeleteLike = handleDeleteLike;
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementLikeButton = this._element.querySelector('.element__like-button');
        this._elementDeleteButton = this._element.querySelector('.element__delete');
        this._elementCounter = this._element.querySelector('.element__counter')
    }

    _getTemplateCardElement(){
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    
        return cardElement;
         }

    _checkId() {
          if (this._ownerId === this._userId) {
            this._elementDeleteButton.classList.remove('element__button_hidden');
          }
        }
    
    _isLiked() {
          this._likes.forEach((user) => {
            if (user._id === this._userId) {
              this.activationLike();
            } else {
              this.deleteLike();
            }
          });
        }
      
    activationLike() {
          this._elementLikeButton.classList.add('element__like-button_active');
        }
      
    deleteLike() {
          this._elementLikeButton.classList.remove('element__like-button_active');
        }

    setCounterLikes(data) {
          this._elementCounter.textContent = data.likes.length;
        }
    
    _handleDelete(){
        this._element.remove();
        this._element = null;
    }

    _openCardPopup(){
       cardPopupImage.src = this._image;
       cardPopupImage.alt = this._info;
       cardPopupCaption.textContent = this._info;
       this._handleCardClick();
    }

    _setCardEventListeners(){

        this._elementLikeButton.addEventListener('click', () => {
          if (this._elementLikeButton.classList.contains('element__like-button_active')) {
            this._handleDeleteLike();
          } else {
            this._handleAddLike();
          }
          });
    
        this._elementDeleteButton.addEventListener('click', () => {
            this._handleDeleteClick();
          });
    
        this._elementPhoto.addEventListener('click', () => {
            this._openCardPopup();
          });
    }

    generateCard() {
        this._setCardEventListeners();
    
        this._elementPhoto.src = this._image;
        this._elementPhoto.alt = this._info;
        this._element.querySelector('.element__title').textContent = this._info;
        this._checkId();
        this._isLiked();
    
        return this._element;
      }

}
