const students = ["amit", "vipin"]
const students2 = ["nandini", "gulshan"]

students.push("satyam")

// students.push(students2)
// console.log(students);
// // [ 'amit', 'vipin', 'satyam', [ 'nandini', 'gulshan' ] ]
// console.log(students[3][0]);

// const stu3 = students.concat(students2)
// console.log(stu3);
// // [ 'amit', 'vipin', 'satyam', 'nandini', 'gulshan' ]

// const stu3 = [...students,...students2]
// console.log(stu3);
// // [ 'amit', 'vipin', 'satyam', 'nandini', 'gulshan' ]


// const all_list = [1,2,3,[4,5,6],[7,[8,9]]]

// const new_all_list = all_list.flat(Infinity)

// console.log(new_all_list);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]


console.log(Array.isArray(["Anmol"])); // true
console.log(Array.from("Anmol"));
// [ 'A', 'n', 'm', 'o', 'l' ]

console.log(Array.from({name: "Anmol"}));
// []

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));

let my_nums = [11,22,33,44,55]
console.log(my_nums.at(3-1));

console.log(my_nums.find((e) => e == 23));

function nandini(some){
    some = 22
    return console.log(some);
    
}

nandini()

// let nandini = function(some){
//     some = 22
//     return console.log(some);
// }

let x = (some) => some = 22;
let y = (some) => {
    some = 22
    return some
}

console.log(x());
console.log(y());




