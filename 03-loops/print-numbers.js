// allow input from terminal
const prompt = require("prompt-sync")();


//print numbers
var n = prompt("Enter an integer number ");

for (a=0; a <= n; a++) {
    console.log(a);
} 

var n = parseInt(prompt("Enter an integer number "));

for (a=0; a <= n; n--) {
    console.log(n);
} 

var n = parseInt(prompt("Enter an integer number "));
var x = -n;

while (x < n) {
    console.log(parseInt(x));
    x++;
}

var n = parseInt(prompt("Enter an integer number "));
var x = 0;

while (x <= n) {
    if (x%2 != 0){
        console.log(parseInt(x));
    }
    x++;
}


