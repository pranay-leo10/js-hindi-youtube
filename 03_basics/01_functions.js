

function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}
// sayMyName()

// function addTwoNumbers(num1, num2){ // here num1 and num2 are parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){ // here num1 and num2 are parameters
    // let result = num1 + num2
    // return result

    return num1 + num2
}
// addTwoNumbers(3,4) // 3 and 4 are passed as arguments
const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("Pranay"))
// console.log(loginUserMessage("Pranay"))

function calculateCartPrice(...num1){ // ... rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Pranay",
    price: 199
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: "399"
})

const myNewArray = [100,200,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,100]));
