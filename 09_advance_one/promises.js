//promise

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB Calls, cryptography, newtwork
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// promise2

new Promise(function(resolve,reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then (function(){
    console.log("Async 2 resolved");
    
})

// promise 3

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "nandini", email: "manandini035.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"nandini", password:"1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() =>{ console.log("The proomise is either resolved or reject");
})



// promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javacript", password:"1234"})
        } else {
            reject('ERROR: js went wrong')
        }
    },1000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
    
// }
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error){
        console.log(error);   
    }  
}


consumePromiseFive()

// 
async  function getAllUsers(){
   try {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    
   } catch (error){
    console.log("E: ", error);
   }
}

getAllUsers()

// .then , .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))