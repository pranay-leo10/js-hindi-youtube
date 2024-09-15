

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
console.log(loginUserMessage("Pranay"))

