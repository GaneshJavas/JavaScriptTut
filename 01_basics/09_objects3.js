const students = [
    {
        id : 1,
        name : 'Vipin'
    },
    {
        id : 2,
        name : 'Amit'
    },
    {
        id : 3,
        name : 'Nandini'
    }
]
 
console.log(students[1].id);
students[1].name = 'Gulshan'
console.log(students[1].name);

const sampleObj = {
    name : 'Vipin',
    age : '19',
    charac : 'Choco',
    comment : function(){
        console.log(`Hello, I am ${this.name}, and my age is ${this.age}.`);
        
    }
}

console.log(Object.keys(sampleObj));
console.log(Object.values(sampleObj));

Object.freeze(sampleObj)
delete sampleObj.name;// modification or deletion of Object properties not allowed when freezed

Object.seal(sampleObj);

sampleObj.age = 18
console.log(sampleObj);// Can change the property value

delete sampleObj.age;// Cannot be deleted one sealed
console.log(sampleObj);

const {charac} = sampleObj
console.log(charac);

const {charac: c} = sampleObj
console.log(c);


