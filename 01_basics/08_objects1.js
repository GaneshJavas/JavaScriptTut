const mySym = Symbol("ukey")

const user_details = {
    fname : "Amit",
    "last name" : "Singh",
    [mySym] : "ukey2",
    section : "A",
    batch : "2024",
    email : "amitsingh@gmail.com",
    isLoggedin : false
}



console.log(user_details.fname);
console.log(user_details["fname"]);
console.log(user_details.email);

// Object.freeze(user_details)

user_details.email = "asingh.gmail.com"

console.log(user_details.email);
console.log(user_details);

user_details.comment = function(){
    console.log("Hello, User");
    
} 

console.log(user_details.comment());
// fname = "Nandini"
user_details.comment2 = function(){
    console.log(`Hello, ${this.fname}`)
}
console.log(user_details.comment2());

