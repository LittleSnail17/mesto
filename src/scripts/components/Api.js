export default class Api {
    constructor({url, headers}){
        this._url = url;
        this._headers = headers;
    }

    getAllData(){
        return Promise.all([this.getInformationUser(), this.getInitialCards()])
    }

    _getResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      }

    getInformationUser() {
        return fetch(`${this._url}/users/me`, {
          headers: this._headers,
        }) .then(this._getResponse)
        console.log(this.getInformationUser)
    }
    
    editProfile (data) {
       return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({name: data.name, about: data.about}),
        }).then(this._getResponse)
    }
    
    getAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({avatar: data.avatar}),
        }).then(this._getResponse)
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
          headers: this._headers,
        }).then(this._getResponse)
    }

    getNewCard(data) {
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({ name: data.name, link: data.image }),
        }).then(this._getResponse);
    }
    
    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          headers: this._headers,
        }).then(this._getResponse);
    }
    
    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: 'PUT',
          headers: this._headers,
        }).then(this._getResponse);
    }
    
    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: 'DELETE',
          headers: this._headers,
        }).then(this._getResponse);
    }
}