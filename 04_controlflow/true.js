// truthy value 
// => "0" [in string 0 => true], 'false' , (" " => space), [], {}, 
// () {}
// falsy value  
//=> flase, 0, -0, Bigint 0n, "", null, undefined, NaN



//const userEmail  = "nandini@.com"

// const userEmail  = ""

// if (userEmail) {
//     console.log("Got user email");
    
// } else {
//     console.log("dont have user email");
    
// }

//array check
const userEmail  = []

//if (userEmail.length === 0) {
    console.log("Array is empty");
    
    
//}

// object {}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");   
}

//false == 0
// true
// false == ''
// true
// 0 == ''
// true
