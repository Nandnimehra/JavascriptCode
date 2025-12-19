//scope 
// let a = 10
// const b = 20
// var c = 30

//{} => scope func , if else


//var c = 30
let a = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER:", a);
      
}

//console.log(a);
//console.log(b);
//console.log(c);


// browser console global scope alag h & actual node - global scope diffrent 

// nested scope

// function one (){
//     const username = "Nandini"
//     function two(){
//         const website= "youtube"
//         console.log(username);
        
//     }
//     //console.log(website);

//     two() 
// }

// one()

// 

if(true){
    const username = "nandini"
    if(username === "nandini"){
        const website = " Youtube"
        //console.log(username+ website);
    }
    //console.log(website);
    
}
//console.log(username);

// ++++++++++++++++++++++ intersting +++++++++++++++++++


//console.log(addone(5)); // no error

function addone(num){
    return num + 1

}
// addone(5) // value only return
// console.log(addone(5)); // value print
 


// type 2
//console.log(addTwo(5)); // error because function hold in variable
 
const addTwo = function(num){
    return num + 2
}
//console.log(addTwo(5));


