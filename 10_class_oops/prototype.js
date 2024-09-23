// let myName = "Pranay   "
// let myChannel = "chai    "
// console.log(myName.truelength())

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPowr: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.pranay = function(){
    console.log(`Pranay is present in all objects`)
}

Array.prototype.heyPranay = function(){
    console.log(`Pranay says hello`)
}

// heroPower.pranay()
// myHeros.pranay()
// myHeros.heyPranay()
// heroPower.heyPranay()




//inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//Modern Syntaxx

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"Pranay".trueLength()