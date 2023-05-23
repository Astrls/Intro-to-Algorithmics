// allow input from terminal
const prompt = require("prompt-sync")();

test = [];

//user input
for (i = 0; i < 5 ; i++) {
    test.push((prompt("Type in whatever you like: ")));
}

console.log(test);
