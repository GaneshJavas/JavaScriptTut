/*  Primitive Data Type
    These are call-by-value i.e., no memory reference is provided, hence the copy of value will be sent to the called variable and changes will the done inside the copy.
    7 Types: 
        String, 
        Number(All numbers with or without decimals, hence no particular type is there for floating datatypes), 
        Boolean, 
        null(empty not 0), 
        undefined, 
        Symbol(To make any value unique), 
        BigInt(Some Scientific data) */

const score = 100 // Number has number datatype
const scoreValue = 100.1    // Number has number datatype
const isLoggedIn = false    // Boolean has boolean datatype
const temp = null   // null has number object

let userEmail; // not declared yet so undefined

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // false

const bigNum = 3544554465511132465412165454n


// Non-Primitive Data Type/ Reference Data Type
    // Memory reference is directly allocated
    // Types: Array, Object, Function 

const fruits = ["Mango", "Banana", "Apple"]
// Anything declared inside the curly brackets {} are objects.
let myObj = {
    f_name: "Jai",
    age: 29
}

console.log(myObj.f_name);


// myFunc has a datatype "function" also called object function
const myFunc = function(){
    console.log("Jai Ganesh ");
}

// Is Javascript Statically typed or Dynamically Typed??
    //JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
