//Primitive 

// 7 types : String, number , Boolean, null, underfined , symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 65757222655522223334n

// Non Primitive (Referece)

//Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]//array
let myObj={
    name: "nandini",//objects (key value pair)
    age: 20
}

//function 
const myfunction= function(){
    // console.log("hello! nandini");
}

console.log(typeof id);
