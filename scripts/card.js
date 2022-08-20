import { openPopup, cardPopup, cardPopupImage, cardPopupCaption } from "./index.js";

 export default class Card {
    constructor (data , templateSelector){
        this._image = data.image;
        this._info = data.info;
        this._templateSelector = templateSelector;
        this._element = this._getTemplateCardElement();
        this._elementPhoto = this._element.querySelector('.element__photo');
        this._elementLikeButton = this._element.querySelector('.element__like-button');
        this._elementDeleteButton = this._element.querySelector('.element__delete');
    }

    _getTemplateCardElement(){
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
    
        return cardElement;
         }
    
    _handleLikeActive(){
        this._elementLikeButton.classList.toggle('element__like-button_active');
    }
    
    _handleDelete(){
        this._element.remove();
        this._element = null;
    }

    _openCardPopup(){
       cardPopupImage.src = this._image;
       cardPopupImage.alt = this._info;
       cardPopupCaption.textContent = this._info;
       openPopup(cardPopup);
    }

    _setCardEventListeners(){

        this._elementLikeButton.addEventListener('click', () => {
            this._handleLikeActive();
          });
    
        this._elementDeleteButton.addEventListener('click', () => {
            this._handleDelete();
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
    
        return this._element;
      }

}
