
 export default class CreateCard {
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
    }

    _openCardPopup(){
        const cardPopup = document.querySelector('.popup_open-card');

        cardPopup.querySelector('.popup__photo').src = this._image;
        cardPopup.querySelector('.popup__caption').textContent = this._info;
        cardPopup.classList.add('popup_opened');
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
        this._element.querySelector('.element__title').textContent = this._info;
    
        return this._element;
      }

}
