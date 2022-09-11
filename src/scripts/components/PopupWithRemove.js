import Popup from './Popup.js'

export default class PopupWithRemove extends Popup{
        constructor(popupSelector) {
            super(popupSelector);
            this._popupForm = this._popup.querySelector('.popup__form');
        }

    
        handleSubmitHandler(handler) {
            this._handleSubmit = handler;
        }

        setEventListeners() {
            super.setEventListeners();
            this._popupForm.addEventListener('submit',(evt) => {
                evt.preventDefault();
                this._handleSubmit();
            });
        }
    }

