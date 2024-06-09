// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// If we compare values of different datatypes problem might arise as TypeScript doesnt allow.
console.log("2" > 1);
console.log("02" > 1);

// Here comes the problem as the output is unpredictable 
console.log(null > 0);
console.log(null == 0); // ==  is used for  
console.log(null >= 0);

// same problem arises 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === is used for strict check, this even checks the datatype
console.log("2" === 2);
