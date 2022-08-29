import Popup from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor( {handleSubmitForm, popupSelector} ){
        super(popupSelector);
        this._hadleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues(){
        const inputList = this._popup.querySelectorAll('.popup__input');
        return inputList;
    }

    closePopup(){
        super.closePopup();
        this._popupForm.reset();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._hadleSubmitForm(this._getInputValues());
            this.closePopup();
        });
    }
}