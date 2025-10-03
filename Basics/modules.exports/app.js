const { PI, areaOfCircle } = require("./imp");
const sum = require("./sum");

// import {PI} from "./imp"
let a = 10;
let b = 20;

console.log("sum: ", a + b);

// console.log(globalThis);
// console.log(globalThis === global);

// in node js
// console.log(this); // this is {} and not windows

//modules protects there variables and functions from leaking | so it won't work
sum(10, 60);
console.log(PI);
areaOfCircle(2);

// so in order to use then we have to use | module.exports and import them like this.
 
// function sum(a,b){
//     console.log(a+b);
// }

// module.exports = sum;

// const PI = require('./imp')
// const sum = require('./sum')

// (function(exports, require, module, __filename, __dirname) {
//   // Your code here
// });
