const user = {
    username: "Pranay",
    logInCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }

}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// Constructor Function

function User(username, logInCount, isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // If you dont write return its okay bcz it implicit in this function by default
}

const userOne = new User("Pranay", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor)
// console.log(userTwo)
