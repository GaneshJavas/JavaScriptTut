// let num1 = 2
// const num2 = 3
// var num3 = 4
// var num3 = 7
if(true){
    let num1 = 2
    const num2 = 3
    var num3 = 4
}

// console.log(num1); // num1 is not defined
// console.log(num2); // num2 is not defined
// console.log(num3);

function one() {
    const user = "Gulshan"
    function two() {
        const addr = "Delhi"
        console.log(`${user} is from ${addr}`);
    }
    two()
    console.log(addr);
    
}

// one()

if(true){
    const user = "Amit"
    if(user === "Amit"){
        const intr = "Dancing"
        // console.log(user + intr);
        
    }
    // console.log(intr);
    
}
// console.log(user);


// IMPORTANT

console.log(one1())

function one1() {
     return 1
}

console.log(two2()) // ReferenceError: Cannot access 'two2' before initialization

const two2 = function() {
    return 2
}
// HOISTING in JavaScript is a built-in language feature that moves the declarations of variables, functions, and classes to the top of their scope before the code is executed
