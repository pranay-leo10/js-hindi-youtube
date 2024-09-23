class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }  
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value 
    }

    get password(){
        return `${this._password}pranay`
    } 
    set password(value){
        this._password = value
    }
}
const pranay = new User("pranay@gmail.com", "abc")
console.log(pranay.password)
console.log(pranay.email)