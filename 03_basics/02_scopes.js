// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log(`Inner: ${a}`)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Pranay"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const username = "Pranay"
    if (username === "Pranay") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++ interesting example ++++++++++++++++++++++++++

function addOne(num){
    return num+1
}

addOne(5)


const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))



