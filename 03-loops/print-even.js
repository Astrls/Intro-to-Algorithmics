const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter an integer number "));
var i = 0;

while (i <= n) {
    if (i%2 == 0){
        console.log(parseInt(i));
    }
    i++;
}
