//1
// const coding = ["js", "rupy", "java","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
    
// })

// console.log(values);


//2
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

//const newNums = myNums.filter( (num) => num > 4 )
//const newNums = myNums.filter( (num) => {
    //return num > 4 // (scope use) return likhna must h in thid type code
// })
//console.log(newNums);


const newNums =[]

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
})
//console.log(newNums);

//3 
// example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,edition: 2004},
    { title: 'Book Two', genre: ' Non-Fiction', publish: 1987,edition: 2008},
    { title: 'Book Three', genre: 'Fiction', publish: 1985,edition: 2006},
    { title: 'Book Four', genre: 'Science', publish: 1989,edition: 2003},
    { title: 'Book Five', genre: 'Non-Fiction', publish: 1980,edition: 2012},
    { title: 'Book Six', genre: 'History', publish: 1970,edition: 2009},
    { title: 'Book seven', genre: 'Fiction', publish: 1997,edition: 2008},
    { title: 'Book Eight', genre: 'Science', publish: 1981,edition: 2004},
    { title: 'Book Nine', genre: 'Science', publish: 1990,edition: 2010},
    { title: 'Book Ten', genre: 'History', publish: 1991,edition: 2011},
];

//const userBooks = books.filter( (bk) => bk.genre === 'History')
let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === "History"
}
)

console.log(userBooks);

