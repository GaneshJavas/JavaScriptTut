"use strict"; // treat all JS code as newer version

/* 
alert(1 + 1)
works in browser as JS engine is built in browser it wont work in 
node, node has different syntax for this function.
*/

console.log(1 
    + 2); // bad practice code readability

// number => 2 ^ 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value (typeof null) is object
// undefined => value not assigned yet
// symbol => unique, to find uniqueness


// object

console.log(typeof "hello jai"); //string 
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof(Symbol("1223")));
