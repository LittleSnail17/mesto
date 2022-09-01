import Popup from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor( {handleSubmitForm, popupSelector} ){
        super(popupSelector);
        this.hadleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    getInputValues(){
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value});
            
        return this._formValues; 
    }

    closePopup(){
        super.closePopup();
        this._popupForm.reset();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this.hadleSubmitForm(this.getInputValues());
            this.closePopup();
        });
    }
}