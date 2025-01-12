// forEach

const stu = ['Amit', 'Vipin', 'Nandini', 'Gulshan']

stu.forEach((l) => {
    console.log(l);
    
})

// filter
let res = stu.filter((x)=> x.length <= 5)
console.log(res);


const posChk = [-1,1,2,3,-5,6,10,7,9,-2,0,-3]

// let mypositiveNum = posChk.filter((x)=> {
//     if(x>0){
//         return true
//     }
// })
let mypositiveNum = posChk.filter((x)=> {
    
        return x > 0
    
})
console.log(mypositiveNum);

function primeNum(x){
    // count = 0
    
    for(let i = 2; i<x; i++){
        if (x%i == 0){
            // count = count + 1
            return false
        }
    }
    // if (count == 0 && x > 2){
    //     return true
    // }
    // return (count == 0 && x > 1)
    return x > 1
}

let myPrimeNum = posChk.filter(primeNum)
console.log(myPrimeNum);


let myMap = new Map()


myMap.set("A", "Amit")
myMap.set("N", "Nandini")
myMap.set("G","Gulshan")
myMap.set("V","Vipin")
myMap.set("S","Satyam")

console.log(myMap);

console.log(myMap.get("A"));

myMap.delete("S")
console.log(myMap);
myMap.set("G","Ganesh")
console.log(myMap);