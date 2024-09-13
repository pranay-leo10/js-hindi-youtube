const accountId = 14453
let accountEmail = "pranay@gmail.com"
var accountPassword = "12345"
accountCity = "Vadodara"
// let accountState;

//accountId = 2   not allowed bcz declared as const 

// prefer not to use var bcz of issue in block and functional scope

accountEmail = "pg@gmail.com"
accountPassword = "212121"
accountCity = "Pune"

console.log(accountId, accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity]);