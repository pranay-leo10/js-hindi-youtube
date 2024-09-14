// Arrays

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeros[1]);


// Arrays methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(87) // used to add element at first place of the array
// myArr.shift() // used to remove element at first place of the array

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts all elements of an array into a newArr of type string
// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);



