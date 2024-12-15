// singleton =>> Object.create(), new Object()
// const sampleObj = {
//     name : 'Vipin',
//     age : '19',
//     charac : 'Choco',
//     comment : function(){
//         console.log(`Hello, I am ${this.name}, and my age is ${this.age}.`);
        
//     }

// };



// const myObj = new Object();
// const myObj2 = Object.create(sampleObj);

// console.log(myObj);
// console.log(myObj2.name);
// myObj2.id = "123abc"
// console.log(myObj2);
// console.log(sampleObj);

// // myObj2
// // {
// //     sampleObj--> address
// //     id : "123abc"
// // }
// console.log(myObj2.comment());

// myObj2.name = "Nandini"
// console.log(sampleObj.comment());

const myObj = {}

myObj.id = "123abc"
myObj.name = "Lasun"
myObj.age = 12

console.log(myObj);

const myObj2 = {
    fullname : {
        fname : 'Vipin',
        lname : 'Sen'
    }
}

console.log(myObj2);

const concatinatedObj = {
    myObj,myObj2
}
console.log(concatinatedObj);
// {
//     myObj: { id: '123abc', name: 'Lasun', age: 12 },
//     myObj2: { fullname: { fname: 'Vipin', lname: 'Sen' } }
//   }


const concatinatedObj1 = {...myObj,...myObj2}
console.log(concatinatedObj1);
// {
//     id: '123abc',
//     name: 'Lasun',
//     age: 12,
//     fullname: { fname: 'Vipin', lname: 'Sen' }
//   }


// const assignObj = Object.assign(myObj, myObj2)
// {
//     id: '123abc',
//     name: 'Lasun',
//     age: 12,
//     fullname: { fname: 'Vipin', lname: 'Sen' }
//   }
// {
//     id: '123abc',
//     name: 'Lasun',
//     age: 12,
//     fullname: { fname: 'Vipin', lname: 'Sen' }
//   }
const assignObj = Object.assign({},myObj, myObj2)

console.log(assignObj);
console.log(myObj);
// {
//     id: '123abc',
//     name: 'Lasun',
//     age: 12,
//     fullname: { fname: 'Vipin', lname: 'Sen' }
//   }
// { id: '123abc', name: 'Lasun', age: 12 }