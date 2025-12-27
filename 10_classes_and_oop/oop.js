// object literal

const user = {
    usrename: "nandini",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.usrename}`);
        //console.log(this);
        
        

    }
}

// const user2 = {
//     usrename: "nandini",
//     loginCount: 7,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         //console.log(`Username: ${this.usrename}`);
//         console.log(this);
        
        

//     }
// }
// console.log(user.usrename);
// //console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise() //  new contructor function
// const date = new Date()

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount=loginCount;
//     this.isLoggedIn=isLoggedIn;

//     return this
// }

// const userOne = User("nandini",12, true)  // this type of code value overwrite
// const userTwo = User("mehra", 11, true) // use new keywords


// const userOne = new  User("nandini",12, true)
// const userTwo = new User("mehra", 11, true)

//console.log(userOne);
//console.log(userTwo);



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        //console.log('welcome ${this.username}');
        
    }

    return this
}

const userOne = new  User("nandini",12, true)
const userTwo = new User("mehra", 11, true)

console.log(userOne.constructor);
//console.log(userTwo);
