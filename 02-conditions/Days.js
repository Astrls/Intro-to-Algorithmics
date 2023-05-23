// Allow input from terminal
const prompt = require("prompt-sync")();

// Variables
const Day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

//Input
result = (parseFloat(prompt("choose a number between 1 and 7 ")) - 1);

//Display
console.log(Day[(result)]);




