// Primitive datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

//declare symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3453434434534343434n

// reference (Non Primitive)
// Arrays, Obects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let obj = {
    name: "Pranay",
    age: 24
}

const myFunction = function () {
    // console.log("Hello World");
}

// console.log(typeof myFunction);
// console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory => Stack(Primitive) -- gives copy, Heap(Non-primitive) -- gives reference

let myYoutubeName = "parnayguptadotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "pranay@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

