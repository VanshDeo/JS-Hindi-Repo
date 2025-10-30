const accountId = 14453;
let accountEmail = "vansh@gmail.com";
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2; // Not Allowed

accountEmail = "v@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
    Prefer not to use var 
    because of issues in block scope ad functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
