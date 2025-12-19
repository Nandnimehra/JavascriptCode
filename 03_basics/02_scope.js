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
    console.log("INNER:", a);
      
}

console.log(a);
//console.log(b);
//console.log(c);


// browser console global scope alag h & actual node - global scope diffrent 

