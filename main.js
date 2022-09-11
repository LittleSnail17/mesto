(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,u=o.handleDeleteCard,a=o.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._cardId=e._id,this._likes=e.likes,this._ownerId=e.owner._id,this._userId=n,this._templateSelector=r,this._handleCardClick=i,this._handleDeleteCard=u,this._handleLikeCard=a}var n,r;return n=t,(r=[{key:"_getTemplateCardElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplateCardElement(),this._elementPhoto=this._element.querySelector(".element__photo"),this._elementLikeButton=this._element.querySelector(".element__like-button"),this._elementDeleteButton=this._element.querySelector(".element__delete"),this._elementCounter=this._element.querySelector(".element__counter"),this._elementPhoto.src=this._link,this._elementPhoto.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._setCardEventListeners(),this._checkOwnLike(),this.setCounterLikes(this._likes),this._checkId(),this._element}},{key:"_checkId",value:function(){this._ownerId===this._userId&&this._elementDeleteButton.classList.remove("element__delete_hidden")}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_checkOwnLike",value:function(){this.isLiked()?this.activationLike():this.deActivationLike()}},{key:"activationLike",value:function(){this._elementLikeButton.classList.add("element__like-button_active")}},{key:"deActivationLike",value:function(){this._elementLikeButton.classList.remove("element__like-button_active")}},{key:"setCounterLikes",value:function(e){this._likes=e,this._elementCounter.textContent=this._likes.length}},{key:"handleDelete",value:function(){this._element.remove(),this._element=null}},{key:"_setCardEventListeners",value:function(){var e=this;this._elementLikeButton.addEventListener("click",(function(){e._handleLikeCard(e)})),this._elementDeleteButton.addEventListener("click",(function(){e._handleDeleteCard()})),this._elementPhoto.addEventListener("click",(function(){e._handleCardClick()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){return i._inputList.some((function(e){return!e.validity.valid}))},(r="_hasInvalidInput")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._formButton=this._formElement.querySelector(this._config.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._formButton.setAttribute("disabled",!0),this._formButton.classList.add(this._config.inactiveButtonClass)):(this._formButton.removeAttribute("disabled",!1),this._formButton.classList.remove(this._config.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(this._formElement)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input-type-error",errorClass:"popup__input-form-error"},i=document.querySelector(".popup_open-card"),u=(i.querySelector(".popup__photo"),i.querySelector(".popup__caption"),document.querySelector(".popup__edit-form")),a=document.querySelector(".popup__input_type_name"),c=document.querySelector(".popup__input_type_job"),l=(document.querySelector(".profile__name"),document.querySelector(".profile__text"),document.querySelector(".profile__edit-button")),s=document.querySelector(".profile__add-button"),p=(document.querySelector(".popup_edit-info"),document.querySelector(".popup_add-card"),document.querySelector(".popup__close-button_edit-info"),document.querySelector(".popup__close-button_add-card"),document.querySelector(".popup__add-form")),f=(document.querySelector(".popup_open-card"),document.querySelector(".popup__close-button_card"),document.querySelector(".elements"),document.querySelector(".popup__input_type_info"),document.querySelector(".popup__input_type_image"),document.querySelector(".profile__avatar-button")),h=(document.querySelector(".popup__submit"),document.querySelector(".popup__input_type_avatar"),document.querySelector(".popup_avatar"));function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._info.textContent,avatar:this._avatar.src}}},{key:"setUserAvatar",value:function(e){e&&(this._avatar.src=e)}},{key:"setUserInfo",value:function(e,t,n){e&&(this._name.textContent=e),t&&(this._info.textContent=t),n&&(this._userId=n)}},{key:"getUserId",value:function(){return this._userId}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"appendItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close(t.target)}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function O(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhoto=t._popup.querySelector(".popup__photo"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupPhoto.src=t,this._popupPhoto.alt=n,this._popupCaption.textContent=n,S(L(u.prototype),"open",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function B(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e){var t,n=e.handleSubmitForm,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._hadleSubmitForm=n,t._popupForm=t._popup.querySelector(".popup__form"),t._buttonSubmit=t._popupForm.querySelector(".popup__submit"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setTextButton",value:function(e){this._buttonSubmit.textContent=e}},{key:"close",value:function(){q(T(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;q(T(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._hadleSubmitForm(e._getInputValues())}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getAllData",value:function(){return Promise.all([this.getInformationUser(),this.getInitialCards()])}},{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInformationUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponse)}},{key:"getAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"getNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function J(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"handleSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;F(M(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new D({url:"https://mesto.nomoreparties.co/v1/cohort-49",headers:{authorization:"20168423-882a-412d-8864-f3cea27a35e9","Content-Type":"application/json"}}),K=new r(o,u);K.enableValidation();var Q=new r(o,p);Q.enableValidation();var W=new r(o,h);W.enableValidation();var X=new _({nameSelector:".profile__name",infoSelector:".profile__text",avatarSelector:".profile__avatar"}),Y=new x({handleSubmitForm:function(e){Y.setTextButton("Сохранение..."),G.editProfile(e).then((function(){X.setUserInfo(e.name,e.about),Y.close()})).catch((function(){return console.log("Не сложилось - не срослось, топай читать теорию спринт")})).finally((function(){return Y.setTextButton("Сохранить")}))},popupSelector:".popup_edit-info"});Y.setEventListeners(),l.addEventListener("click",(function(){var e=X.getUserInfo(),t=e.name,n=e.about;a.value=t,c.value=n,K.resetValidation(),Y.open()}));var Z=new x({handleSubmitForm:function(e){Z.setTextButton("Сохранение..."),G.getAvatar(e).then((function(){X.setUserAvatar(e.avatar),Z.close()})).catch((function(){return console.log("Не сложилось - не срослось, топай читать теорию спринт")})).finally((function(){return Z.setTextButton("Сохранить")}))},popupSelector:".popup_avatar"});function ee(e){var n=new t(e,re,".template",{handleCardClick:function(){ne.open({name:e.name,link:e.link})},handleLikeCard:function(t){t.isLiked()?G.deleteLike(e._id).then((function(e){t.deActivationLike(),t.setCounterLikes(e.likes)})).catch((function(e){console.log(e)})):G.addLike(e._id).then((function(e){t.activationLike(),t.setCounterLikes(e.likes)})).catch((function(e){console.log(e)}))},handleDeleteCard:function(){ie.open(),ie.handleSubmitHandler((function(){G.deleteCard(e._id).then((function(){n.handleDelete(),ie.close()})).catch((function(e){console.log(e)}))}))}});return n.generateCard(e)}Z.setEventListeners(),f.addEventListener("click",(function(){W.resetValidation(),Z.open()}));var te=new m({renderer:function(e){var t=ee(e);te.appendItem(t)}},".elements"),ne=new C(".popup_open-card");ne.setEventListeners();var re,oe=new x({handleSubmitForm:function(e){oe.setTextButton("Сохранение..."),G.getNewCard(e).then((function(e){var t=ee(e);te.prependItem(t),oe.close()})).catch((function(e){console.log(e)})).finally((function(){return oe.setTextButton("Создать")}))},popupSelector:".popup_add-card"});oe.setEventListeners(),s.addEventListener("click",(function(){p.reset(),Q.resetValidation(),oe.open()})),G.getAllData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];re=o._id,X.setUserInfo(o.name,o.about,re),X.setUserAvatar(o.avatar),te.renderItems(i)})).catch((function(e){console.log(e)}));var ie=new z(".popup_delete",{handleSubmit:function(e){G.deleteCard(e).then((function(){ie.close()})).catch((function(e){console.log(e)}))}});ie.setEventListeners()})();