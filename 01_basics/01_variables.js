//  const is used to lock the value in a variable
const accountId = 123456789

/* 
var is not used these days as it have a issue in block scope 
& functional scope.
If a value of a variable is changed anywhere in the program,
it effects the whol file.
*/

var accountPass = "helloworld"

// let is used to avoid the scope problem 
let accountEmail = "jai@some.com"

/*
without keyword/variable declaration, automatically detects 
but prefer not to use.
*/
accountCity = "Bhopal"

/* 
If variable is declared without using any value then
output is undefined
*/
let accountState;

// accountId = 222 //not allowed

accountEmail = "jj@jj.in"
accountPass = "20202020"
accountCity = "Kolkata"

// console.log(x) used to print the value of 1 variable
console.log(accountEmail);

/*
console.table([x, y, z]) used to print the value of 
multiple variables
*/
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);
