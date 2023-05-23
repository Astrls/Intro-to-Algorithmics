// allow input from terminal
const prompt = require("prompt-sync")();

//user input
const n = parseInt(prompt("Choose a number of times you wanna throw the dice"));

//Description
console.log("Throwing the dice");
const throws =[];

//action of rolling the dice
function rolldice(maxLimit = 6){

    return Math.floor(Math.random() * 6);
}

//Loop dice roll X times
for (let i = 0; i < n; i++) {
    
    throws.push(rolldice()+1);
}

//Display results of rolls
console.log(throws);

//Create object for total throws
const elementCounts = {}
throws.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

//Calculate length of object
roll = (Reflect.ownKeys(elementCounts).length);

console.log(elementCounts);

