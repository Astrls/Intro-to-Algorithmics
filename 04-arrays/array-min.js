// allow input from terminal
const prompt = require("prompt-sync")();

test = [];

//user input
for (i = 0; i < 5 ; i++) {
    test.push(parseInt((prompt("Type in any number: "))));
}

console.log(test);

console.log(Math.min(...test));
