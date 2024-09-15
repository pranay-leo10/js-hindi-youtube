// const tinderUser = new Object()  => singleton object
const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pranay",
            lastname: "Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} //Spread syntax same as that of Arrays
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //Important
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    coureinstructor: "Pranay"
}

// course.coureinstructor

const {coureinstructor: instructor} = course
// console.log(coureinstructor);
console.log(instructor); //Object destructuring {}

// {
//     "name": "Pranay",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
