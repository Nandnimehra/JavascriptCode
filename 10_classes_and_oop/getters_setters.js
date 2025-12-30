class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
       this._email = value
    }

    get password(){
        return `${this._password}nandini`
        //return this._password.toUpperCase()
    }

    set password(value){
       // this._password = value.toUpperCase()
       this._password = value
    }
}

const nandini = new  User("n@nandini.com", "abc")
//console.log(nandini.password);
console.log(nandini.email);

