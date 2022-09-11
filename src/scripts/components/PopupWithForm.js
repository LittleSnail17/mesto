import Popup from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor( {handleSubmitForm, popupSelector} ){
        super(popupSelector);
        this._hadleSubmitForm = handleSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._buttonSubmit = this._popupForm.querySelector('.popup__submit');
    }

    _getInputValues(){
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value});
            
        return this._formValues; 
    }

    setTextButton(text) {
        this._buttonSubmit.textContent = text;
      }

    close(){
        super.close();
        this._popupForm.reset();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._hadleSubmitForm(this._getInputValues());
        });
    }
}