   // function   
   console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("I");
    console.log("N");
    console.log("I");


function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("I");
    console.log("N");
    console.log("I");
    
}

sayMyName()

function addTwoNumbers(number1 , number2){ // value pass by input
    console.log(number1 + number2);
    
}
function addTwoNumbers(number1 , number2){ // value pass by input
    let result = number1 + number2
    return result
    return number1 + number2
    
}


const result = addTwoNumbers(3, 4) // agrument(3, 4)
const result = addTwoNumbers() // when no value has been passed
console.log("Result:", result);

function loginUserMessage(username ="sam"){
    //if(username === undefined ){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Nandini"));
console.log(loginUserMessage());

function calculateCartPrice(...num1){  // ( ... => rest operater)
function calculateCartPrice(val1, val2, ...num1){ // interview type question
    return num1 
}
console.log(calculateCartPrice(200, 300, 500 , 2000));

//object 
const user ={
    username: "nandini",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}
handleObject(user)
handleObject({
    username: "sam",
    price:399
})


//function => array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 1000]));


