import Popup from './Popup.js'

export default class PopupWithRemove extends Popup{
    constructor({popupSelector, deleteElementFromMesto}){
        super(popupSelector);
        this._popupContainer = this._popup.querySelector('.popup__container-delete');
        this._deleteElementFromMesto = deleteElementFromMesto;
    }

    openPopup(){
        super.openPopup();
        this._element =element;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupContainer.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteElementFromMesto(this._element);
        })
    }

}