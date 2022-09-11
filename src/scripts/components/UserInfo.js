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
        if (avatar){
            this._avatar.src = avatar;
        }
    }

    setUserInfo(name, about, _id) {
        if (name){
            this._name.textContent = name;
        }
        if(about){
            this._info.textContent = about;
        }
        if(_id){
            this._userId = _id;
        }    
    }

    getUserId (){
        return this._userId;
    }
}