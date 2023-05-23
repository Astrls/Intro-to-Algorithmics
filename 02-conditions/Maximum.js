// allow input from terminal
const prompt = require("prompt-sync")();

//Description
console.log("This small script will find the biggest number");

//input from user
var input = String(prompt("enter X numbers separated by a ','"));

//calculation
const numbers = input.split(",");
const num = numbers.map(Number);
var max = Math.max(...num);


//print the result
console.log('The highest number is '+max);