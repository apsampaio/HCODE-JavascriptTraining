class User {

    constructor(name, email, birth, gender, country, password, admin, photo){
        
        this._name = name;
        this._email = email;
        this._birth = birth;
        this._gender = gender;
        this._country = country;
        this._password = password;
        this._admin = admin;
        this._photo = photo;
        this._register = new Date();
    }

    get register() {
        return this._register;
    }
    get name() {
        return this._name;
    }
    get gender() {
        return this._gender;
    }
    get birth() {
        return this._birth;
    }
    get email() {
        return this._email;
    }
    get country() {
        return this._country;
    }
    get password() {
        return this._password;
    }
    get admin() {
        return this._admin;
    }
    get photo() {
        return this._photo;
    } 
    set photo(value) {
        this._photo = value;
    }

}