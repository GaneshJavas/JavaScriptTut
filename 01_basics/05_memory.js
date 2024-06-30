// Memory - Two Types => STACK (Primitive Datatype) & HEAP (Non-Primitive Datatype)

let my_name = "Jai Ganesh"

let another_name = my_name // another_name gets the copy of my_name
another_name = "Gautam"

console.log(my_name);
console.log(another_name);

let userOne = {
    email : "userone@gmail.com",
    upi : "userone@ybl"
}

let userTwo = userOne // userTwo gets the reference of userOne, hence if the is updated anytime then it will be changed for both userOne & userTwo.

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


