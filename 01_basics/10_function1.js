function myfunc() {
    console.log("something");
    
}
// console.log(myfunc); => Throws reference of called function

const myfunc1 = function(){
    console.log("Something 2");  
} // Function declared as an expression


function addNum(num1, num2){
    console.log(num1+num2);
    
}
// addNum(5, "3") // 53

function addMul(...num) {
    console.log(num)
}

// addMul(2,3) // [ 2, 3 ]

function addMul2(num1, num2, ...num) {
    console.log(num);
    
}

// addMul2(1,2,3,4,5) // [ 3, 4, 5]


// const abc = (num1, num2) => num1 + num2

// const abc = (num1, num2) => (num1 + num2)

// const abc = (num1, num2) => ({"username":"JAI"})

const abc = (num1, num2) => {return{"username":"JAI"}}
// console.log(abc(5,3))

// IIFE - Immediately Invoked Function Expression

function xyz() {
    console.log("XYZ");
    return ""
}
xyz()

(function () {
    console.log("XYZ");
    return ""
})();

// console.log(xyz());


(() => {
    console.log("xyz")
})();

(() => console.log("xyz"))();