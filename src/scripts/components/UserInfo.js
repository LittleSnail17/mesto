export class UserInfo {
    constructor ({nameSelector, infoSelector, avatarSelector}){
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        return {
            name: this._name.textContent,
            about: this._info.textContent,
            avatar: this._avatar.src
            }
    }

    setUserAvatar(avatar){
        this._avatar.src = avatar;
    }

    setUserInfo(name, about, _id) {
        this._name.textContent = name;
        this._info.textContent = about;
        this._userId = _id;
    }

    getUserId (){
        return this._userId;
    }
}