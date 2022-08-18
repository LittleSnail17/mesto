import { openPopup } from "./index.js";

const cardPopup = document.querySelector('.popup_open-card');
const cardPopupImage = cardPopup.querySelector('.popup__photo');
const cardPopupCaption = cardPopup.querySelector('.popup__caption')

 export default class Card {
    constructor (data , templateSelector){
        this._image = data.image;
        this._info = data.info;
        this._templateSelector = templateSelector;
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
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
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

        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._handleLikeActive();
          });
    
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDelete();
          });
    
          this._element.querySelector('.element__photo').addEventListener('click', () => {
            this._openCardPopup();
          });
    }

    generateCard() {
        this._element = this._getTemplateCardElement();
        this._setCardEventListeners();
    
        this._element.querySelector('.element__photo').src = this._image;
        this._element.querySelector('.element__photo').alt = this._info;
        this._element.querySelector('.element__title').textContent = this._info;
    
        return this._element;
      }

}
