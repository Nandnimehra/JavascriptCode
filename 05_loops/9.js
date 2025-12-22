//Reduce
// acc - accumulator , currval - currentvalue, initialValue

//function
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    //console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval

}, 2)

// console.log(myTotal);

//arrow function

//const myNums = [1, 2, 3]

//const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
//console.log(myTotal);

//array

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "nodejs course",
        price: 2499
    },
]

const priceToPay=shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
