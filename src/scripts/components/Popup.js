import { esc } from "../utils/constants.js";

export default class Popup{
    constructor( popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }

    _handleEscClose (evt) {
        if (evt.key === esc ){
            this.closePopup();
        }
    };
    
    openPopup(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners(){
        this._closeButton.addEventListener('click', () => this.closePopup());

        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
                this.closePopup(evt.target)
            }
        });
        document.addEventListener('keydown', this._handleEscClose);
    }
}