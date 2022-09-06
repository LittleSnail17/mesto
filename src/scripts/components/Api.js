export default class Api {
    constructor({url, headers}){
        this._url = url;
        this._headers = headers;
    }

    getAllData() {
        return Promise.all([this.getInitialCards(), this.getInformationUser()])
    }

    getInformationUser() {
        return fetch(`${this._url}/users/me`, {
          headers: this._headers,
        });
    }
    
     editProfile (data) {
       return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({name: data.name, about: data.job}),
        });
    }
    
    getAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
           avatar: data.avatar
          }),
        });
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
          headers: this._headers,
        });
    }

    likeElement(id, like) {
        let method;
        if (like) {
          method = 'DELETE';
        } else {
          method = 'PUT';
        }
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: method,
          headers: this._headers
        });
    }
}