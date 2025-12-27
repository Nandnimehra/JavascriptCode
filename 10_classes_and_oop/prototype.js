let myName = "nandini    "
let mychannel ="creater    "

//console.log(myName.trim().length);
//console.log(myName.true.length);







//methods

let myHeros = ["thor", "spiderman"]

let heropower ={
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.nandini=function(){
    console.log(`nandini is present  in all objects`);
    
}

Array.prototype.heyNandini=function(){
    console.log(`Nandini says hello`);
    
}

//heropower.nandini()

// myHeros.nandini()
// myHeros.heyNandini()
//heropower.heyNandini()


//inheritance
const User ={
    name: "chai",
    email: "chai@google.com"

}
const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername ="ChaiAurCode     "

String.prototype.trueLenght = function(){
    
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);
    
}
anotherUsername.trueLenght()
"nandini".trueLenght()
"iceTea".trueLenght()