/*Task 1: Declare a variable using var, assign it a number, and log 
the value to the console. */

var num = 10
console.log(num);

/* Task 2: Declare a variable using let, assign it a string, and log the value to the
 console. */

let my_string = "Javascript"
console.log(my_string);

/* Task 3: Declare a variable using const, assign it a boolean value, and log the value to
 the console. */

const my_const = 100
console.log(my_const);

/* Task 4: Create variables of different data types (number, string, boolean, object, 
array) and log each variable's type using the typeof operator. */

let v1 = 101
let v2 = "Jai"
let v3 = true
const v4 = {
    name : "Jai"
}

const v5 = Array["Mango", "Banana", "Apple"]

console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof(v4));
console.log(typeof(v5));

/* Task 5: Declare a variable using let, assign it an initial value,
 reassign a new value, and log both values to the console. */

let num1 = 5
console.log(num1);
num1 = 6
console.log(num1);

/* Task 6: Try reassigning a variable declared with const and observe 
the error. */

const num2 = 4
console.log(num2);
// num2 = 7
// console.log(num2);
// TypeError: Assignment to constant variable.

/* Feature Request:
Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console. */
let vtc1 = 101
let vtc2 = "Jai"
let vtc3 = true

console.log('Value: ',vtc1,'Type: ',typeof(vtc1));
console.log('Value: ',vtc2,'Type: ',typeof(vtc2));
console.log('Value: ',vtc3,'Type: ',typeof(vtc3));

//Reasignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let let_assign = "Jai"
console.log("let assignment before changing: ",let_assign);

let_assign = "Ganesh"
console.log("let assignment after changing: ",let_assign);

const const_assign = "Jai"
console.log("let assignment before changing: ",const_assign);

// const_assign = "Ganesh"
// console.log("let assignment after changing: ",const_assign);
// TypeError: Assignment to constant variable.