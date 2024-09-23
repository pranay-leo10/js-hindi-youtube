class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USername: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const pranay = new User("Pranay")
// console.log(pranay.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId())