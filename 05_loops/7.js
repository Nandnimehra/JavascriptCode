// map (callback fun)
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => { return num +10})
//const newNums = myNumbers.map( (num) => num + 10 )
//console.log(newNums);


// forEach
//const newNums =[]
myNumbers.forEach( (num) => {
    if (num) {
        newNums.push(num+10)
        
    }
})
//console.log(newNums);
