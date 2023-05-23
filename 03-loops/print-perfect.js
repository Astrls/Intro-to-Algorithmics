// allow input from terminal
const prompt = require("prompt-sync")();


//user input
var n = parseInt(prompt("Enter an integer number "));
var divided = [];
var i = 1;
var x = 0;

while (i < n) {
    x = n % (n - i);
    if (x == 0) {
        divided.push(n-i);
    }
    i++;
}
//console.log(divided);   

var z = parseInt(divided.reduce((a, b) => a + b, 0));

//console.log(z);

if (n == z) {
    console.log(`your number ${n} is a perfect number`);
}

else {
    console.log(`your number ${n} has flaws but that's what makes it special! 🤩`);
}