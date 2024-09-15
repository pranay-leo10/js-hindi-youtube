const user = {
    username: "Pranay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);   // this keyword is used to refer current context
        console.log(this);
        
    }


}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Pranay"
//     console.log(this.username); // undefined bcz this can be used in objects
// }
// chai()

// const chai = function(){
//     let username = "Pranay"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Pranay"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2  // Implicit return
// const addTwo = (num1, num2) => (num1 + num2)   // in {} braces return is req, but normal or in round brackets return is not rez ash shown
const addTwo = (num1, num2) => ({username: "Pranay"})
// console.log(addTwo(3,4))

const myArr = [2,5,3,7,8]
// myArr.forEach(()=>{})
