//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getFullYear());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(typeof myDate);//interview question

// let myCretedDate = new Date(2026, 0, 19, 5, 3) // in js months start with 0
console.log(myCretedDate.toDateString());
console.log(myCretedDate.toLocaleString());
console.log(myCretedDate.toString());

// let myCretedDate = new Date("2025-01-11")//(syntax yy-mm-dd)// whenever dd-mm-yy (moths start with 1 beacuse single digit behave like a array)
let myCretedDate = new Date("01-11-2025")//(mm-dd-yy)
// console.log(myCretedDate.toLocaleString());


// //Time stamps

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCretedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //(millisec to sec)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`


// methods tolocalestring
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone: "getTime"
})

console.log(weekday());















