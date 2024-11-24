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

// ****************** Operations ****************
let value = 10;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
// console.log(3/2); 1.5
// console.log(~~(3/2)); 1

// "1" + 2 => 12
// 1 + "2" => 12
// "1" + 2 + 2 => 122
// 1 + 2 + "2" =>32
//above results were as per ECMA guidelines: The abstract operation ToPrimitive takes argument input (an ECMAScript language value) and optional argument preferredType (STRING or NUMBER) and returns either a normal completion containing an ECMAScript language value or a throw completion. It converts its input argument to a non-Object type. 

let gameCounter = 100;
++gameCounter;
console.log('GameCounter = ' + gameCounter);
// more documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
