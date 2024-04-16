let score = "33"
let score2 = "33abc"
console.log(typeof score);
console.log(typeof (score));

//datatypes to be used in capitalized manner e.g., Number 
//datatype conversion
let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)

// datatype is converted to number
console.log(typeof valueInNumber2);
// but value will be NaN as the value is a mixture of string and number.
console.log(valueInNumber2);

// converted value outputs
// "33" => 33
// "33abc" => NaN -> Not a Number, type is number
// true => 1; false => 0
// undefined => NaN
// null => 0

// In case of number to boolean conversion

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "somevalue" => true