// arrow function 
// this => current context reffer
const user = {
    username: "nandini", 
    price: 299,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); 
        console.log(this);
         
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); // this => {} node enviroment 

// interview (browser - global oabject = window object)


// function chapter(){
//     let username= "nandini"
//     console.log(this); // function ke ander 
// }
// chapter()

// const chapter = function(){
//     let username = "nandini"
//     console.log(this.username);
    
// }


// const chapter = () => {
//     let username = "nandini"
//     console.log(this);
    
// }
// chapter()


//  basics arrow functionn 

// const addTwo =(num1 , num2 ) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5));

// implesite return

// {} use kiya to return keyword likhna padega 
// or () to nhi likhna padega

//const addTwo = (num1, num2) =>  num1 + num2
//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "nandini"})
console.log(addTwo(3, 4));


// array
// const myArray = [2, 5, 6, 4]

// myArray.forEach()


