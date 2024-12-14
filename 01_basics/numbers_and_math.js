const score1 = 500.56564  // general assignment
console.log(score1);

const score2 = new Number(500)
console.log(score2);

console.log(score1+score2);

// const res = score2.toString() -- 500
//const res = score2.toString().length -- 3
//const res = score1.toFixed(2) -- 500.57
//const res = score1.toPrecision(4)
const price = 12344343.244324
const res = price.toLocaleString('en-IN')

console.log(res);

//-------------------- Maths -------------------

console.log(Math);
console.log(Math.abs(-5)); // 5
console.log(Math.round(6.6));
console.log(Math.ceil(6.6));
console.log(Math.floor(6.6));
console.log(Math.min(3, 2, 5, 7));
console.log(Math.max(3, 2, 5, 7));

console.log(Math.random()*10);



