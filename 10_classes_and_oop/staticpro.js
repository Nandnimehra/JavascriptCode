class User{
    constructor(Username){
        this.Username =Username
    }

    logMe(){
        console.log(`Username: ${this.Username}`);
        
    }
    static createId(){
        return `123`
    }
}

const nandini = new User("nandini")
//console.log(nandini.createId());

class Teacher extends User{
    constructor(Username,email){
        super(Username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//iphone.logMe();
console.log(iphone.createId());

