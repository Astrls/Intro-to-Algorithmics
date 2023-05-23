// allow input from terminal
const prompt = require("prompt-sync")();

test = [];

//user input
for (i = 0; i < 5 ; i++) {
    test.push(parseInt((prompt("Type in any number: "))));
}

min = Math.min(...test);

console.log(test);

console.log(test.findIndex(elem => elem === min));
