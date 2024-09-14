// Singleton Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pranay",
    "full name": "Pranay Gupta",
    [mySym]: "mykey1", // Syntax of Symbol []
    age: 24,
    location: "Vadodara",
    email: "pranay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); // this is the most preferred way to access objects in JS bcz in this object full name cannot be accessed using '.' bcz it is taken as string 
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "pgupta@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "pg1036@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



