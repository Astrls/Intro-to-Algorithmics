// allow input from terminal
const prompt = require("prompt-sync")();

//Description
console.log("This small script will find the biggest number");

//input from user
const a = parseFloat(prompt("Enter your first number "));
const b = parseFloat(prompt("Enter your second number "));
const c = parseFloat(prompt("Enter your third number "));

if (a >= (b && c)) {
    console.log('The highest number is '+a);
}

else if  (b >= (a && c)) {
    console.log('The highest number is '+b);
}

else if (c >=(a && b)){
    console.log('The highest number is '+c);
}

else {
    console.log('try again');
    }