const arr1 = [1, 2, 3, 4, "amit", "vipin"]
console.log(arr1);

const arr2 = new Array(1,2,3,4)

console.log(arr2);
arr2.push(5)
arr2.push(6)
console.log(arr2);
arr2.pop()
console.log(arr2);
arr2.unshift(8)
console.log(arr2);
arr2.shift()
console.log(arr2);


console.log(arr2.includes(9));
console.log(arr2.indexOf(4));

const arr3 = arr2.join()
console.log(arr2);
console.log(arr3);
console.log(typeof(arr3));

console.log("1st ",arr2);
const x = arr2.slice(1,3)
console.log(x);
console.log("2nd ", arr2);
const y = arr2.splice(1,3)
console.log(y);
console.log("3rd ", arr2);










