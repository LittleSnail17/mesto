export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-type-error',
  errorClass: 'popup__input-form-error',
}

export  class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._formButton = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _hasInvalidInput = (inputElement) => { 
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid; 
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._formButton.setAttribute('disabled', true);
      this._formButton.classList.add(this._config.inactiveButtonClass);
    } else {
      this._formButton.removeAttribute('disabled', false);
      this._formButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _setEventListeners () {
     this._toggleButtonState();
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  resetValidation() {
    this._toggleButtonState(); 
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    }
    );
      this._setEventListeners(this._formElement); 
  }
}