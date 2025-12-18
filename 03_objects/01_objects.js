//singleton {constructor }
//Object.create
// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Nandini",
    "full name": "Nandini Mehra",
    age: 18,
    [mySym]: "mykey1",
    location: "Bhopal",
    email:"mnandani035@gmil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email= "nandinimehra.com"
//Object.freeze(JsUser)
JsUser.email="mehragmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




