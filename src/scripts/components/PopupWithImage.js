import Popup from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupPhoto = document.querySelector('.popup__photo');
        this._popupCaption = document.querySelector('.popup__caption');
    }

    openPopup({ image, name}){
        this._popupPhoto.src = image;
        this._popupCaption.textContent = name;
        super.openPopup();
    }
}