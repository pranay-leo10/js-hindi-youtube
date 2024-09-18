const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accumulator, curr_val) {
//     console.log(`acc: ${accumulator} and crrval: ${curr_val}`)
//     return accumulator + curr_val
// },0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "DS course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(priceToPay)