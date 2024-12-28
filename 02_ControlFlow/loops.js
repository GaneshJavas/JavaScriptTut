// Repeating or iterating same set of instruction

// TYPES OF LOOPS:
//     1. For LOOPS
//     2. While LOOPS
//     3. Do While LOOPS => Runs atleast one time

//For Loop -> Syntax is similar to as in Java or C++
console.log("\nFor Loop\n");
let i;

for(i = 1; i <= 10; i++){
    console.log(i);
    i=i+1
}

let name = "VIPIN CHOCO"

for(let j = 0 ; j<= name.length; j++){
    console.log(name[j]);
}


// While LOOP
console.log("\nWhile Loop\n");
let x = 5

while(x > 0){
    console.log(x);
    x = x - 1
    break
}

// Do While

console.log("\nDo While Loop\n");

let y = 1
do{
    console.log(y); 
    y = y+1
}while(y<=5)

console.log("Final");

for(let amit=1; amit<10; amit += 2){
    console.log(amit);  
}
